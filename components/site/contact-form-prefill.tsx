"use client";

import { useSearchParams } from "next/navigation";
import { ContactForm } from "./contact-form";
import { SERVICE_PARAM } from "@/lib/whatsapp";
import type { ContactState } from "@/lib/contact";
import type { Locale } from "@/lib/i18n/config";
import type { ContactDict } from "@/lib/i18n/types";

/**
 * Reads the `?service=` preselection left by the service pages' CTAs.
 *
 * Done on the CLIENT, not by reading `searchParams` in the page: any read of
 * searchParams in a Server Component makes the route dynamic, and the
 * contact page would stop being prerendered. Here the HTML stays static and
 * the preselection applies on hydration.
 *
 * Needs <Suspense> above: useSearchParams suspends during static prerender.
 */
type Props = {
  action: (prev: ContactState, data: FormData) => Promise<ContactState>;
  locale: Locale;
  labels: ContactDict["form"];
  serviceOptions: { value: string; label: string }[];
  privacyHref: string;
};

export function ContactFormPrefill(props: Props) {
  const params = useSearchParams();
  const service = params.get(SERVICE_PARAM) ?? undefined;

  // `?service=anything` must not leave the <select> on a value the server
  // will reject: if it is not in the list, ignore it.
  const valid = props.serviceOptions.some((option) => option.value === service);

  return <ContactForm {...props} initialService={valid ? service : undefined} />;
}
