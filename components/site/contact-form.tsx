"use client";

import Link from "next/link";
import { useActionState, useEffect, useRef } from "react";
import type { ContactState } from "@/lib/contact";
import type { Locale } from "@/lib/i18n/config";
import type { ContactDict } from "@/lib/i18n/types";
import { track } from "@/lib/analytics";
import { pillClass, pillIconClass } from "./pill-button";
import { CARD } from "@/lib/styles";

/**
 * Contact form. Server Action + useActionState, no form library: the real
 * validation runs on the server (lib/contact.ts) and the client only paints
 * which field failed. Error TEXTS live in the dictionary, not on the server.
 *
 * Without JS the form still submits: it is a native <form action> with a
 * Server Action. What is lost is the "sending" state, not the function.
 *
 * Two bot traps travel with it: the honeypot input and the `ts` mount
 * timestamp (a human does not fill a form in under two seconds).
 */
const field =
  "w-full rounded-2xl border border-line bg-stock px-4 py-3 text-sm transition-colors placeholder:text-ink-soft/60 hover:border-ink/30 focus:border-ink focus:outline-none";
const fieldLabel = "label mb-1.5 block text-ink-soft";

type Props = {
  action: (prev: ContactState, data: FormData) => Promise<ContactState>;
  locale: Locale;
  labels: ContactDict["form"];
  serviceOptions: { value: string; label: string }[];
  initialService?: string;
  privacyHref: string;
};

export function ContactForm({
  action,
  locale,
  labels,
  serviceOptions,
  initialService,
  privacyHref,
}: Props) {
  const [state, formAction, pending] = useActionState(action, { status: "idle" });
  const tsInput = useRef<HTMLInputElement>(null);
  const reported = useRef(false);

  // Stamped on mount, after hydration, straight into the DOM: the static HTML
  // carries no timestamp and no re-render is needed for it.
  useEffect(() => {
    if (tsInput.current) tsInput.current.value = String(Date.now());
  }, []);

  // One generate_lead per successful send, on the real send path only.
  useEffect(() => {
    if (state.status !== "success" || reported.current) return;
    reported.current = true;
    track("generate_lead", { form: "contact" });
  }, [state.status]);

  const errorOn = (name: string) => state.status === "error" && state.fields?.includes(name);

  if (state.status === "success") {
    return (
      <div className="rounded-3xl bg-accent p-8 text-accent-ink">
        <p className="font-display text-2xl font-bold">{labels.success.title}</p>
        <p className="mt-2 opacity-80">{labels.success.body}</p>
      </div>
    );
  }

  const fieldError = (name: keyof ContactDict["form"]["fieldErrors"]) =>
    errorOn(name) ? (
      <p className="mt-1.5 text-xs" role="alert">
        {labels.fieldErrors[name]}
      </p>
    ) : null;

  const invalid = (name: string) => (errorOn(name) ? { "aria-invalid": true as const } : {});

  return (
    <form action={formAction} noValidate className={`${CARD} p-6 md:p-8`}>
      <input type="hidden" name="locale" value={locale} />
      <input type="hidden" name="ts" defaultValue="" ref={tsInput} />

      {/* Honeypot: off-screen for readers, invisible to humans, irresistible
          to bots. tabIndex -1 so a keyboard never lands on it. */}
      <div aria-hidden className="absolute -left-[9999px]">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className={fieldLabel}>{labels.name}</label>
          <input id="name" name="name" type="text" required autoComplete="name" className={field} {...invalid("name")} />
          {fieldError("name")}
        </div>

        <div>
          <label htmlFor="email" className={fieldLabel}>{labels.email}</label>
          <input id="email" name="email" type="email" required autoComplete="email" className={field} {...invalid("email")} />
          {fieldError("email")}
        </div>

        <div>
          <label htmlFor="phone" className={fieldLabel}>{labels.phone}</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} {...invalid("phone")} />
          {fieldError("phone")}
        </div>

        <div>
          <label htmlFor="service" className={fieldLabel}>{labels.service}</label>
          <select
            id="service"
            name="service"
            defaultValue={initialService ?? serviceOptions[0]?.value}
            className={field}
            {...invalid("service")}
          >
            {serviceOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          {fieldError("service")}
        </div>

        <div className="md:col-span-2">
          <label htmlFor="message" className={fieldLabel}>{labels.message}</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder={labels.messagePlaceholder}
            className={field}
            {...invalid("message")}
          />
          {fieldError("message")}
        </div>
      </div>

      <div className="mt-6">
        <label className="flex items-start gap-3 text-sm text-ink-soft">
          <input type="checkbox" name="consent" required className="mt-1 size-4 shrink-0 accent-ink" {...invalid("consent")} />
          <span>
            {labels.consent}{" "}
            <Link href={privacyHref} className="underline hover:text-ink">{labels.consentLink}</Link>
          </span>
        </label>
        {fieldError("consent")}
      </div>

      {state.status === "error" && !state.fields?.length && (
        <p className="mt-5 text-sm" role="alert">{labels.genericError}</p>
      )}

      <button type="submit" disabled={pending} className={pillClass("ink", "mt-7 disabled:opacity-60")}>
        <span>{pending ? labels.sending : labels.submit}</span>
        <span aria-hidden className={pillIconClass}>→</span>
      </button>
    </form>
  );
}
