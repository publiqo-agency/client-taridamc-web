"use client";

import { useEffect } from "react";
import { CTA_KINDS, GTM_ID, track, type CtaKind } from "@/lib/analytics";
import { applyConsent, readConsent } from "@/lib/consent";

/**
 * Turns the `data-cta` / `data-service` attributes the CTAs already carry into
 * dataLayer events, with one delegated listener on the document instead of a
 * handler per button. Same reasoning as RevealObserver: the site is Server
 * Components top to bottom and wrapping every CTA in a client component for
 * the sake of an analytics call would drag the whole tree to the client.
 *
 * Capture phase, `click` and `auxclick`: middle-click and "open in new tab"
 * are a real share of WhatsApp/phone clicks and only `auxclick` sees them.
 *
 * Placement comes from the nearest `[data-placement]` ancestor (bubble,
 * header, footer, band, hero...). It is what lets a report say which spot on
 * the page actually earns the WhatsApp clicks.
 *
 * Also replays a stored consent answer after hydration: the consent default
 * is re-declared on every page load, so without this a returning visitor who
 * accepted would be measured as consentless.
 */
export function AnalyticsListener() {
  useEffect(() => {
    if (!GTM_ID) return;

    const stored = readConsent();
    if (stored) applyConsent(stored);

    const onClick = (event: MouseEvent) => {
      // auxclick fires for the middle button (1); right-click (2) opens the
      // context menu and is not a navigation.
      if (event.type === "auxclick" && event.button !== 1) return;
      const target = event.target as Element | null;
      const control = target?.closest<HTMLElement>("[data-cta]");
      if (!control) return;

      const kind = control.dataset.cta as CtaKind | undefined;
      if (!kind || !CTA_KINDS.includes(kind)) return;

      const placement =
        control.closest<HTMLElement>("[data-placement]")?.dataset.placement ??
        "page";
      const service = control.dataset.service || undefined;
      const destination =
        control instanceof HTMLAnchorElement
          ? control.href
          : `${window.location.pathname}#${kind}`;

      track("cta_click", {
        placement,
        // Icon-only controls (the bubble) have no text; their aria-label is
        // the human name of the same thing.
        label: (
          control.textContent?.trim() ||
          control.getAttribute("aria-label") ||
          ""
        ).slice(0, 100),
        destination,
      });
      if (kind === "whatsapp" || kind === "call") {
        track("contact_click", { method: kind, placement, service });
      }
    };

    document.addEventListener("click", onClick, true);
    document.addEventListener("auxclick", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("auxclick", onClick, true);
    };
  }, []);

  return null;
}
