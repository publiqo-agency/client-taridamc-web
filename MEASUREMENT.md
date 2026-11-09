# Measurement register

What is wired, what the consoles hold and what is pending. Filled by the
`google-setup` skill; kept current by whoever touches anything measurable
(see the Measurement section of `CLAUDE.md`).

## Identifiers

| What | Value |
| --- | --- |
| Google account | publiqo.com@gmail.com (agency login) |
| GTM container | `GTM-KC683QD9` (account "Tarida MC" 6403652640, container 285998234), version 2 live |
| GA4 account / property | "Tarida MC" 415503412 / "Tarida MC - www.taridamc.com" 563371764 (Europe/Madrid, EUR) |
| GA4 stream / measurement id | 16303757938 / `G-WL1X4T4XQF` (https://www.taridamc.com) |
| Google Ads account | none yet (the client creates it and links it to the agency MCC) |
| Search Console property | URL prefix `https://www.taridamc.com/`, HTML-file verification (`public/googled2699488c98cc953.html`) |

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
`home-process`, `home-catalogue`, `sale-hub`, `rental-hub` (the white
introduction of each hub), `service-purchase`,
`service-purchase-warehouses`, `service-rental-warehouses`,
`service-rental-homes`, `catalogue`, `closing`, `contact-page`, `footer`,
`bubble`, `legal` (the owner's email and phone on the legal pages).

Values of `service` (the ids in `lib/services.ts`, also the contact form's
select): `purchase` (flats and houses), `purchase-warehouses`,
`rental-warehouses`, `rental-homes`. Since 2026-09-29 the old `rental` value
no longer exists: the rental page was split into naves and homes. A catalogue
card's enquiry is a `whatsapp` (or `form`, while there is no number) CTA whose
`service` follows the listing's type (`rental-warehouses` or `rental-homes`). The rental hub's own CTAs (intro,
closing, empty catalogue) carry no `service`: they cover naves and homes at
once; the sale hub's carry `purchase`.

Page paths changed on 2026-09-29 (before any data existed): the services
index is gone; hubs `/venta` and `/alquiler`, service pages under them. Build
any page-path report or audience on the new paths.

Events: `cta_click`, `contact_click`, `generate_lead`. Parameters that need a
GA4 custom dimension: `placement`, `method`, `service`, `form`, `site_language`.

## Console state (2026-11-09)

- **GA4**: enhanced measurement on (page views incl. history changes, scrolls,
  outbound clicks, site search, form interactions, video, downloads), so the
  code sends no page views of its own. Custom dimensions (event scope):
  `placement`, `method`, `service`, `form`, `site_language`. Key events:
  `generate_lead` and `contact_click`, both "once per event" and **without**
  a default value (the dialog pre-selects 1 USD). `qualify_lead` and
  `close_convert_lead` were added as key events by GA4 itself (the "Generate
  leads" objective); the site never sends them.
- **GTM**: Google Tag `GA4 — base` (`G-WL1X4T4XQF`, Initialization - All
  Pages); `GA4 — cta_click`, `GA4 — contact_click`, `GA4 — generate_lead`, each
  on a Custom Event trigger of the same name and carrying its parameters from
  Data Layer Variables (`placement`, `label`, `destination`, `method`,
  `service`, `form`, `page_path`, `site_language`). Consent overview enabled;
  no Additional Consent Check on Google tags (built-in consent applies). No
  `consent_update` plumbing: the site does not push that event.
- **Search Console**: a URL-prefix property, because the DNS (Arsys) is not
  ours. GTM verification fails because `/` redirects to `/es`; the HTML file
  in `public/` is what verifies it. **Do not delete that file.**

## Pending

- **Re-check the sitemap** in Search Console on 2026-11-10: it was submitted
  on 2026-11-09 and "Couldn't fetch" in the first hours is normal.
- **First real data**: nothing is confirmed as arriving yet. Check GA4
  Realtime after accepting the banner on www.taridamc.com and clicking a
  WhatsApp link (`contact_click`) and sending the form (`generate_lead`).
- **GA4 data retention** is at the default (2 months for explorations).
  Decide whether to raise it to 14 months; the privacy policy has to agree.
- **Google Ads**: not started. When it is, import `generate_lead` and
  `contact_click` from GA4 OR measure them with Ads tags, never both.
- When building GA4 reports and the Ads conversions, segment the seller lead
  by `service` in (`purchase`, `purchase-warehouses`), not `purchase` alone.
  No report or audience filters on `service=rental` yet; if one is created
  from an old note, use `rental-warehouses` / `rental-homes` instead.
- Decide whether catalogue enquiries need the listing reference as a
  parameter (`property_ref`). If yes: add it to `contact_click` in
  `lib/analytics.ts` + a `data-property` attribute on the card, and create the
  GA4 custom dimension BEFORE launch (dimensions do not backfill).

## Done

- 2026-11-09 — GA4 property, GTM container (v2 live) and custom
  dimensions created; `NEXT_PUBLIC_GTM_ID` set in Vercel Production and
  deployed before the container was published.
- 2026-11-09 — Search Console URL-prefix property verified (HTML file),
  sitemap submitted, and linked to GA4 stream 16303757938.
