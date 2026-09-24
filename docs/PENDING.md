# Pending

What the client still owes, what blocks the launch, and what is decided but
not done. Keep it current: it is the list Martí reads before every call.

Source: GoFeed brief "Briefing de web" for Tarida MC S.L.
(https://app.gofeedapp.com/w/publiqo/briefs/cmsn23mo6002w04i9sl8nt4wy).

## Blocks launch

1. **Content.** The content pages (home, about, services, service pages, FAQ)
   render nothing on purpose: the scaffold left them empty and the design and
   copy are built in a later change from the brief.
2. **Domain and DNS.** Production domain `www.taridamc.com` (canonical host
   `www`). Who manages the domain and hosting is not stated in the brief.
3. **Legal data.** Tax id (NIF) and registered address → `lib/site.ts`.
   Legal name is set (`Tarida MC S.L.`). Until then every legal page shows a
   visible "pending" block.
4. **Contact data.** WhatsApp number, phone, email → `lib/site.ts`. Until then
   the WhatsApp bubble is a pending chip and the footer shows nothing.
5. **Resend key** (`RESEND_API_KEY`, send-only, scoped to `web.publiqo.es`) and
   `CONTACT_EMAIL` in Vercel Production. Without them the form errors in production.
6. **Translations reviewed.** `dictionaries/fr` and `dictionaries/ca` are
   machine-drafted from the Spanish; a native speaker signs them off before launch.

## Client material

- Logo (transparent PNG or SVG) → `brand/`, then `npm run brand:build`. The
  brief does not say whether a logo or brand manual exists.
- Photos: the client has renders only, "placeholders for now". Heroes
  (`public/hero/*.webp`) and each service (`public/services/<id>/hero.webp`).
  One photo came with the brief (IMG_1421.JPG, in GoFeed).
- Property catalogue: the brief asks for "a catalogue of the properties they
  have". This is archetype A (the agency edits content); if the client wants
  to update listings themselves, that is archetype B — decide before building it.
- Final copy for every page in es, en, fr, ca. Nobody is named yet as the
  writer or approver of texts and photos.
- Social profile URLs → `lib/site.ts`.

## Measurement

- GTM container and GA4 property: run the `google-setup` skill once the domain
  is live; it fills `MEASUREMENT.md`.
- IndexNow key: generate, publish `public/<KEY>.txt`, add `INDEXNOW_KEY` locally.

## Decided, not done

- The FAQ route is kept from the template; the brief lists home, about,
  services (rental, purchase) and contact only. Remove it or use it when the
  content is built.

## Resolved

- 2026-09-24 — Locales es (default), en, fr, ca; services `rental` and
  `purchase`; formal register (usted / vous / vostè) per the brief.
