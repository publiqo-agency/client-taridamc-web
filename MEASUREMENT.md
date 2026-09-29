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
`home-process`, `home-catalogue`, `service-purchase`,
`service-purchase-warehouses`, `service-rental-warehouses`,
`service-rental-homes`, `catalogue`, `closing`, `contact-page`, `footer`,
`bubble`, `legal` (the owner's email and phone on the legal pages).

Values of `service` (the ids in `lib/services.ts`, also the contact form's
select): `purchase` (flats and houses), `purchase-warehouses`,
`rental-warehouses`, `rental-homes`. Since 2026-09-29 the old `rental` value
no longer exists: the rental page was split into naves and homes. A catalogue
card's enquiry is a `whatsapp` (or `form`, while there is no number) CTA whose
`service` follows the listing's type (`rental-warehouses` or `rental-homes`).

Events: `cta_click`, `contact_click`, `generate_lead`. Parameters that need a
GA4 custom dimension: `placement`, `method`, `service`, `form`, `site_language`.

## Pending

- Everything: the container does not exist yet.
- When building GA4 reports and the Ads conversions, segment the seller lead
  by `service` in (`purchase`, `purchase-warehouses`), not `purchase` alone.
  No report or audience filters on `service=rental` yet; if one is created
  from an old note, use `rental-warehouses` / `rental-homes` instead.
- Decide whether catalogue enquiries need the listing reference as a
  parameter (`property_ref`). If yes: add it to `contact_click` in
  `lib/analytics.ts` + a `data-property` attribute on the card, and create the
  GA4 custom dimension BEFORE launch (dimensions do not backfill).

## Done

- (empty)
