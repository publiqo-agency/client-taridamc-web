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
3. **Legal data.** Done: `Tarida MC S.L.`, NIF B67987420, registered office
   Calle Còrsega 270, entresuelo, puerta 4, 08008 Barcelona (GoFeed client
   record). The footer and the three legal pages show them (read from
   `lib/site.ts`). Still missing: the Registro Mercantil entry (volume, folio,
   sheet), which the LSSI requires of an S.L.; ask the client. The lawyer
   still reviews the legal copy.
4. **Contact data.** Done: email `rs@taridamc.com`; phone +34 659 35 97 76,
   the same number as WhatsApp (confirmed by the agency, 2026-09-29).
5. **Resend key** (`RESEND_API_KEY`, send-only, scoped to `web.publiqo.es`) and
   `CONTACT_EMAIL` in Vercel Production. Without them the form errors in production.
6. **Translations reviewed.** `dictionaries/fr` and `dictionaries/ca` are
   machine-drafted from the Spanish; a native speaker signs them off before launch.
7. **Legal review (2026-09-29).** Legal notice, privacy and cookie policies
   now carry the owner's data, recipients (Vercel, Resend, Google, WhatsApp),
   international transfers, retention, withdrawal of consent, the cookie list
   with durations, and applicable law; the contact form has the first-layer
   data notice. Still open:
   - Registro Mercantil entry (see 3).
   - Ask the client whether Tarida MC ever acts as an intermediary for third
     parties. If so, Catalan law requires registration in the Registre
     d'Agents Immobiliaris de Catalunya (AICAT) and the number on the site.
   - Cookie consent (CORE, `lib/consent.ts`): "Accept" also grants
     `ad_storage`, `ad_user_data` and `ad_personalization`, but the banner
     and the cookie policy only mention measurement. Harmless while no Ads tag
     runs; before Ads goes live, either say so in the banner and the policy or
     grant only `analytics_storage`. Consent Mode is "advanced" (Google tags
     load before consent and send cookieless pings); some Spanish lawyers ask
     for "basic" mode. Decide at template level.
   - A lawyer signs off the final wording.

## Client material

- Logo (transparent PNG or SVG) → `brand/`, then `npm run brand:build`. The
  brief does not say whether a logo or brand manual exists.
- Photos: every photo on the site is a **provisional** free-licence stock
  image (Unsplash), listed with its credit in `docs/PHOTO-CREDITS.md`.
  Replace them file by file, same path and aspect ratio, with the client's own
  photography or renders. Only `about/castelldefels.webp` shows Castelldefels
  itself; the rest are generic. One photo came with the brief (IMG_1421.JPG, in GoFeed).
  The rental hub's hero (`/alquiler`) reuses the homes panel photo
  (`services/rental/hero.webp`): it needs a photo of its own, ideally one of
  their naves or homes.
- Logo: received only as a 640 px JPEG (`brand/IMG_1421.JPG`). The site uses
  a vector REBUILD of it (`brand/logo.svg`, `components/site/logo-paths.ts`):
  waves fitted to the raster, lettering set in Montserrat. Ask the client for
  the original vector file (AI/SVG/PDF) and the exact brand colour; the site
  uses #07588C, sampled from the JPEG.
- Portrait of Ramon Seva: received (a 954 px crop, on the about page). A
  larger original would render sharper on wide screens.
- Property catalogue: built (home rail + filterable grid on the rental page),
  fed by `lib/properties.ts`. `PROPERTIES` is empty, so production shows an
  "ask for availability" block; previews show six SAMPLE listings with a chip.
  Needs from the client per listing: reference, type (industrial unit or
  home), m², zone and one photo. Naves show on the naves rental page, homes on
  the homes rental page. The "local comercial" type was removed on 2026-09-29
  (the brief lets naves and homes only); if they let premises, it comes back
  with its own page. This is archetype A (the agency edits
  content); if the client wants to update listings themselves, that is
  archetype B — decide before it grows.
- Final copy for every page in es, en, fr, ca. Nobody is named yet as the
  writer or approver of texts and photos.
- Social profile URLs → `lib/site.ts`.

## SEO (audit 2026-09-29)

Done in code: four service pages (buy flats and houses, buy naves, rent naves,
rent homes) with FAQs + FAQPage, the sale-guide sections (what we buy,
direct sale vs. agency, documents), national titles and descriptions in four
languages, RealEstateAgent + Person + AboutPage JSON-LD, a factual llms.txt,
readable heading text, branded og:title. Still open:

- **Go live:** set `NEXT_PUBLIC_SITE_URL` in Vercel Production and point the
  domain (taridamc.com answers Arsys's default page with a 403 today).
  Without it the site is noindex and llms.txt is a 404.
- **Search Console** (domain property + sitemap) and the **IndexNow** key.
- **Google Business Profile.** The registered office is in Barcelona; the
  profile needs a real, verifiable Castelldefels address, or has to be set up
  as a service-area business. Ask the client.
- **Facts that would strengthen the copy**, to ask the client (never write
  them before they confirm): the founding year; whether they buy with their
  own funds / pay cash (the strongest differentiator against the "we buy your
  home" competitors, several of which pass deals to investors); per-nave
  specs (m², clear height, loading docks, power, access); reviews.
- **Keyword volumes.** The keyword map was built from Google Autocomplete and
  competitor pages: the agency's Semrush plan has no MCP access. Re-check the
  table with Semrush or Keyword Planner before paid campaigns.
- **Later, only with real material:** city pages (Barcelona, Madrid) or
  situation pages (inherited, let, to renovate) once there are real cases;
  one page per listing with RealEstateListing schema once the catalogue has
  real properties.
- The home headline "Inmuebles con criterio" is still the approved-pending
  copy (see 1); the search intent lives in the intro under it.

## Measurement

- GTM container and GA4 property: run the `google-setup` skill once the domain
  is live; it fills `MEASUREMENT.md`.
- IndexNow key: generate, publish `public/<KEY>.txt`, add `INDEXNOW_KEY` locally.

## Decided, not done

- (empty)

## Resolved

- 2026-09-29 — No services index: the header opens two hubs, **Venta**
  (`/venta`, what they buy) and **Alquiler** (`/alquiler`, what they let),
  each with a white introduction under the hero and the split panels of its
  two service pages, which now hang from them (`/venta/pisos-y-casas`,
  `/alquiler/viviendas`…). The old preview URLs 308 to the new ones.

- 2026-09-24 — Logo delivered (raster) and applied: palette re-based on its
  blue (navy ink, salt-white paper, deep-sea dark bands), Montserrat as the
  sans, logo in header, intro, footer, favicon, OG card and manifest icons.
- 2026-09-24 — Design and build of every page ("serene Mediterranean":
  Instrument Serif + Inter Tight, espresso/bone palette, GSAP + Lenis motion
  engine in `components/site/motion/`). The FAQ route was removed: the brief
  does not ask for it and its answers would have had to be invented.
- 2026-09-29 — FAQs are back, as sections of each service page, now that
  their answers rest on facts the client confirmed (what they buy, where, the
  situations they accept, the process). No timings, prices or guarantees.
- 2026-09-24 — Locales es (default), en, fr, ca; services `rental` and
  `purchase`; formal register (usted / vous / vostè) per the brief.
