# Pending

What the client still owes, what blocks the launch, and what is decided but
not done. Keep it current: it is the list Martí reads before every call.

Source: GoFeed brief "Briefing de web" for Tarida MC S.L.
(https://app.gofeedapp.com/w/publiqo/briefs/cmsn23mo6002w04i9sl8nt4wy).

## Blocks launch

1. **Copy approval.** Every page is designed and written (es, with en, fr and
   ca translated from it) using only facts from the brief. The client signs
   it off, in particular: the home headline ("Inmuebles con criterio"), the
   three values and their lines, the purchase process (four steps) and the
   line under Ramon Seva's name.
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
- Photos: every photo on the site is a **provisional** free-licence stock
  image (Unsplash/Pexels), listed with its credit in `docs/PHOTO-CREDITS.md`.
  Replace them file by file, same path and aspect ratio, with the client's own
  photography or renders. Weakest picks to replace first: `about/interior.webp`
  and `cta/sell.webp`. One photo came with the brief (IMG_1421.JPG, in GoFeed).
- Logo: until it arrives the header and footer use a typographic wordmark
  (`components/site/logo.tsx`); restore the PNG version after `brand:build`.
- A portrait of Ramon Seva would strengthen the about page (optional).
- Property catalogue: built (home rail + filterable grid on the rental page),
  fed by `lib/properties.ts`. `PROPERTIES` is empty, so production shows an
  "ask for availability" block; previews show six SAMPLE listings with a chip.
  Needs from the client per listing: reference, type (industrial unit, home,
  commercial), m², zone and one photo. This is archetype A (the agency edits
  content); if the client wants to update listings themselves, that is
  archetype B — decide before it grows.
- Final copy for every page in es, en, fr, ca. Nobody is named yet as the
  writer or approver of texts and photos.
- Social profile URLs → `lib/site.ts`.

## Measurement

- GTM container and GA4 property: run the `google-setup` skill once the domain
  is live; it fills `MEASUREMENT.md`.
- IndexNow key: generate, publish `public/<KEY>.txt`, add `INDEXNOW_KEY` locally.

## Decided, not done

- (empty)

## Resolved

- 2026-09-24 — Design and build of every page ("serene Mediterranean":
  Instrument Serif + Inter Tight, espresso/bone palette, GSAP + Lenis motion
  engine in `components/site/motion/`). The FAQ route was removed: the brief
  does not ask for it and its answers would have had to be invented.
- 2026-09-24 — Locales es (default), en, fr, ca; services `rental` and
  `purchase`; formal register (usted / vous / vostè) per the brief.
