/**
 * WhatsApp links with a prefilled message. The texts do NOT live here: they
 * are in the dictionaries (`common.whatsapp.messages` and
 * `services.items[id].whatsappMessage`) so that a visitor browsing in English
 * writes in English. This module is only the link mechanics.
 */
import { WHATSAPP_URL, hasWhatsApp } from "@/lib/seo";

/**
 * `wa.me` with `?text=` prefilled. Without a text it returns the bare link,
 * which is what the floating bubble wants when there is no service context.
 *
 * Returns `null` while there is no number: `https://wa.me/?text=…` opens
 * WhatsApp on an empty contact picker, which reads as a broken site. The
 * caller decides what to do with the null — usually fall back to the form.
 */
export const whatsappUrl = (text?: string): string | null => {
  if (!hasWhatsApp()) return null;
  return text ? `${WHATSAPP_URL}?text=${encodeURIComponent(text)}` : WHATSAPP_URL;
};

/** Query parameter the contact page reads to preselect a service. */
export const SERVICE_PARAM = "service";

/**
 * Same request, through the form: preselects the service. The message itself
 * is derived from the service on the contact page (not passed in the URL) so
 * that every CTA to the form shares one crawlable URL per service.
 */
export const proposalFormHref = (contactHref: string, service: string) =>
  `${contactHref}?${new URLSearchParams({ [SERVICE_PARAM]: service })}`;
