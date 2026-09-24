# __CLIENT_NAME__ — website

Static marketing site. Next 16 (App Router), React 19, Tailwind v4, TypeScript.
No database, no CMS: content lives in `dictionaries/`, the contact form is a
Server Action that emails through Resend, and WhatsApp is the main CTA.

## Getting started

```sh
nvm use                  # Node 24
npm install
cp .env.example .env.local
npm run dev              # http://localhost:3000 → redirects to /es
```

Without `NEXT_PUBLIC_SITE_URL` the site is `noindex`, without
`NEXT_PUBLIC_GTM_ID` nothing is measured and without `RESEND_API_KEY` the form
dry-runs to the console. All three are deliberate: a local or preview build can
never compete with production, fire hits at the real GA4 property or send mail.

## Environment variables

| Variable | Without it |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Whole site `noindex`, robots.txt disallows all, llms.txt is a 404. Production only. |
| `NEXT_PUBLIC_GTM_ID` | No tag, no consent banner. Production only. |
| `RESEND_API_KEY` | Form dry-runs in dev; visible error in production. |
| `RESEND_FROM` | Falls back to the Resend sandbox sender, which only delivers to the account owner. |
| `CONTACT_EMAIL` | Same as the API key: dry-run in dev, error in production. |

## Commands

| Command | What |
| --- | --- |
| `npm run dev` | Dev server (Martí runs it) |
| `npm run typecheck` | Route types + `tsc --noEmit` |
| `npm run lint` | ESLint |
| `npm run build` | Production build; needs `NEXT_PUBLIC_SITE_URL` to prerender an indexable site |
| `npm run brand:build -- brand/logo.png [--mono]` | Generates `public/logo/*` and the favicons from the client's logo |
| `npm run indexnow` | Notifies IndexNow engines after a production deploy (needs `INDEXNOW_KEY`) |

## Layout

```
app/[locale]/(public)/   pages; folders named after the default locale's slugs
app/                     robots, sitemap, manifest, OG image, llms.txt
components/site/         UI; site-header/footer receive every string as props
components/seo/          JSON-LD renderer
dictionaries/<locale>/   all copy; the default locale is the type schema
lib/site.ts              client identity (names, contact, legal, social)
lib/i18n/                locales, dictionary loader, localized paths, metadata
lib/routes.ts            route table per language; feeds proxy, sitemap, switcher
lib/services.ts          service ids, slugs, images (copy in dictionaries)
lib/analytics.ts         GTM + dataLayer events; lib/consent.ts the banner store
proxy.ts                 legacy redirects, language negotiation, slug rewrite
emails/                  React Email notification for the form
scripts/                 brand assets, IndexNow
docs/SKELETON.md         which files are CORE / CLIENT-DATA / CLIENT-SKIN
docs/PENDING.md          what the client still owes and what blocks launch
MEASUREMENT.md           measurement register (ids, what is wired, pending)
```

## Architecture notes

- **Localized URLs.** `/en/services` is served by `app/[locale]/(public)/servicios/`
  through a proxy rewrite; `lib/routes.ts` + `lib/i18n/localized-paths.ts` +
  `proxy.ts` are one unit. Dynamic segments emit the CANONICAL slug in
  `generateStaticParams`.
- **Dictionary as schema.** Types derive from `dictionaries/es/*` (no `as const`).
  A key missing in another language is a compile error.
- **Token indirection.** `app/globals.css` maps every colour token to an
  intermediate variable so `.band-dark` can invert them. Rewrite all seven per band.
- **Kill-switches.** No site URL → noindex; no GTM id → no measurement; no Resend
  key → dry-run. Previews never leak.
- **Nothing invented.** Empty values in `lib/site.ts` hide the control and show a
  preview-only pending chip instead.

## Branches

`main <- dev <- claude/<type>-<slug>`. See `.claude/skills/ship/SKILL.md` and
`CLAUDE.md`.
