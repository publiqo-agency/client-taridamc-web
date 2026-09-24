/**
 * Measurement: the site pushes a note into `window.dataLayer` for everything
 * a visitor does that matters; Google Tag Manager (container GTM_ID) reads it
 * and decides who to forward it to (GA4, Ads). The site never talks to GA4
 * or Ads directly — the measurement id lives in the container, not here. See
 * MEASUREMENT.md for the register of what is wired and what is pending.
 *
 * Pushing to the dataLayer is not storage and needs no consent. What needs
 * consent is what the container then does with it, and that is governed by
 * Consent Mode (lib/consent.ts): every tag stays denied until the visitor
 * answers the banner.
 */

/** Container id. Production only: with it unset the page renders no tag. */
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID?.trim() || "";

/** Values `data-cta` may carry. `form` is a link *to* the form, not a send. */
export const CTA_KINDS = ["whatsapp", "form", "call", "email"] as const;
export type CtaKind = (typeof CTA_KINDS)[number];

/** Contact channels: the `method` parameter of `contact_click`. */
export type ContactMethod = Extract<CtaKind, "whatsapp" | "call" | "email">;

/**
 * Closed list of events and what each one carries. A name invented at a call
 * site would be a GTM trigger nobody wrote and a report that is quietly
 * short, so the type is the only door: adding an event means adding it here
 * AND in the container AND (for a new parameter) as a GA4 custom dimension.
 *
 * ⚠ Custom dimensions do not backfill. A parameter GA4 receives before its
 * dimension exists never shows in any report for those days.
 */
export type AnalyticsEvents = {
  /** Any call-to-action, the generic one. Specific events fire alongside it. */
  cta_click: { placement: string; label: string; destination: string };
  /** A tel:/mailto:/wa.me link was followed. Enhanced measurement ignores these. */
  contact_click: { method: ContactMethod; placement: string; service?: string };
  /** The contact form was actually sent (real send path only, never bot traps). */
  generate_lead: { form: string; service?: string };
};

export type AnalyticsEventName = keyof AnalyticsEvents;

type DataLayerEntry = Record<string, unknown> | IArguments;

declare global {
  interface Window {
    dataLayer?: DataLayerEntry[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * The only caller of `dataLayer.push` for events. Attaches the two
 * parameters every event carries: where it happened (page_path, read from
 * the location and not from GTM's built-in Page Path, which reads the address
 * bar and is stale after a client-side navigation) and the language of the
 * page (site_language; GA4's own `language` dimension is the browser's).
 */
export function track<N extends AnalyticsEventName>(
  event: N,
  params: AnalyticsEvents[N],
) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    page_path: window.location.pathname,
    site_language: document.documentElement.lang || undefined,
    ...params,
  });
}

/**
 * Inline script for <head>, hard load only (see InlineScript). One script on
 * purpose: the consent default has to be declared before the container
 * evaluates a single tag, and two script elements are two things racing.
 *
 * Everything denied except security_storage — fraud prevention and auth are
 * strictly necessary and nobody was asked about them. `wait_for_update` gives
 * a returning visitor's stored answer (replayed by AnalyticsListener after
 * hydration) time to arrive before the first hit.
 *
 * No <noscript> iframe: with JS off the consent default never runs, so that
 * iframe would fire the tags with storage allowed for exactly the visitors
 * who cannot dismiss the banner either.
 */
export const GTM_INIT_SCRIPT = GTM_ID
  ? `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag("consent","default",{ad_storage:"denied",ad_user_data:"denied",ad_personalization:"denied",analytics_storage:"denied",functionality_storage:"denied",personalization_storage:"denied",security_storage:"granted",wait_for_update:500});dataLayer.push({"gtm.start":new Date().getTime(),event:"gtm.js"});(function(d,s){var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src="https://www.googletagmanager.com/gtm.js?id=${GTM_ID}";f.parentNode.insertBefore(j,f)})(document,"script");`
  : "";
