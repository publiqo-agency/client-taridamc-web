"use server";

import { z } from "zod";
import { contactSchema, type ContactState } from "@/lib/contact";
import { LOCALE_LABELS } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { ORG } from "@/lib/seo";
import { isServiceId } from "@/lib/services";

/**
 * The contact form's Server Action. Validates with the shared schema (the
 * bot traps included), then emails the notification through Resend.
 *
 * Never fakes success: without RESEND_API_KEY or CONTACT_EMAIL in production
 * it logs the misconfiguration and returns a visible error — a lead lost in
 * silence is worse than an error. In development it dry-runs to the console.
 */
export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const raw = Object.fromEntries(
    ["name", "email", "phone", "service", "message", "consent", "locale", "website", "ts"].map(
      (key) => [key, formData.get(key) ?? ""],
    ),
  );

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      status: "error",
      fields: Object.keys(z.flattenError(parsed.error).fieldErrors),
    };
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = process.env.CONTACT_EMAIL?.trim();
  if (!apiKey || !to) {
    if (process.env.NODE_ENV === "production") {
      // Misconfiguration: do not fake success, do not log PII.
      console.error("[contact] RESEND_API_KEY or CONTACT_EMAIL missing — message NOT sent");
      return { status: "error" };
    }
    console.log("[contact] dry-run (no RESEND_API_KEY/CONTACT_EMAIL):", parsed.data);
    return { status: "success" };
  }

  const data = parsed.data;
  const dict = await getDictionary(data.locale);
  // The select sends the service id; the notification carries the readable
  // name in the language the visitor browsed in.
  const service = isServiceId(data.service)
    ? dict.services.items[data.service].shortTitle
    : dict.contact.form.otherOption;

  // The subject interpolates user input: strip line breaks.
  const oneLine = (value: string) => value.replace(/[\r\n\u2028\u2029]+/g, " ").trim();

  // Pinned to the business time zone: the function runtime is UTC and a
  // shifted time reads as a lead that came in at night.
  const sentAt = new Intl.DateTimeFormat("es-ES", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Europe/Madrid",
  }).format(new Date());

  try {
    const [{ Resend }, { render }, { ContactNotification }] = await Promise.all([
      import("resend"),
      import("@react-email/render"),
      import("@/emails/contact-notification"),
    ]);

    const html = await render(
      ContactNotification({
        name: data.name,
        email: data.email,
        phone: data.phone || "",
        service,
        message: data.message,
        localeLabel: LOCALE_LABELS[data.locale],
        sentAt,
      }),
    );

    // Hand-written text alternative: the automatic conversion flattens the
    // template badly. Same information, same order as the HTML.
    const text = [
      `NEW CONTACT — ${ORG.name}`,
      "",
      `Name:      ${data.name}`,
      `Service:   ${service}`,
      `Email:     ${data.email}`,
      `Phone:     ${data.phone || "—"}`,
      `Language:  ${LOCALE_LABELS[data.locale]}`,
      "",
      "MESSAGE",
      data.message,
      "",
      "—",
      `Received ${sentAt} from the website contact form.`,
      "Reply to this email to answer the person directly.",
    ].join("\n");

    const { error } = await new Resend(apiKey).emails.send({
      from: process.env.RESEND_FROM ?? `${ORG.name} <onboarding@resend.dev>`,
      to,
      replyTo: data.email,
      subject: `Web · ${service} · ${oneLine(data.name)}`,
      html,
      text,
    });
    if (error) {
      console.error("[contact] Resend:", error);
      return { status: "error" };
    }
    return { status: "success" };
  } catch (cause) {
    console.error("[contact] send failed:", cause);
    return { status: "error" };
  }
}
