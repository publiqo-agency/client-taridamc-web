# Measurement register

What is wired, what the consoles hold and what is pending. Filled by the
`google-setup` skill; kept current by whoever touches anything measurable
(see the Measurement section of `CLAUDE.md`).

## Identifiers

| What | Value |
| --- | --- |
| GTM container | pending |
| GA4 property / stream | pending |
| Google Ads account | pending |
| Search Console property | pending |

## How it is wired

- `lib/analytics.ts`: `GTM_INIT_SCRIPT` (Consent Mode defaults + gtm.js) and
  the typed `track()`; `NEXT_PUBLIC_GTM_ID` in Production only.
- `lib/consent.ts` + `components/site/consent-banner.tsx`: accept/reject,
  versioned in localStorage, reopen button in the footer.
- `components/site/analytics-listener.tsx`: every `[data-cta]` click becomes
  `cta_click` (+ `contact_click` for whatsapp/call/email), with
  `data-placement` from the nearest ancestor.
- `components/site/contact-form.tsx`: `generate_lead` on a successful send.

Placements in use (`data-placement`): `header`, `home-hero`, `home-services`,
`home-catalogue`, `service-purchase`, `service-rental`, `catalogue`,
`closing`, `contact-page`, `footer`, `bubble`. (`home-process` was retired on
2026-09-25: the home's process section no longer carries CTAs, the closing
band right after it does. The rental page shows its `closing` band only when
the catalogue has listings; with none, the catalogue block is the CTA.) A catalogue card's
enquiry is a `whatsapp` (or `form`, while there is no number) CTA with
`service=rental`.

Events: `cta_click`, `contact_click`, `generate_lead`. Parameters that need a
GA4 custom dimension: `placement`, `method`, `service`, `form`, `site_language`.

## Pending

- Everything: the container does not exist yet.
- Decide whether catalogue enquiries need the listing reference as a
  parameter (`property_ref`). If yes: add it to `contact_click` in
  `lib/analytics.ts` + a `data-property` attribute on the card, and create the
  GA4 custom dimension BEFORE launch (dimensions do not backfill).

## Done

- (empty)
