# template-web-static

Agency template for archetype A: a static marketing site (i18n, contact form,
WhatsApp, GTM + consent, JSON-LD). The `new-client-project` skill clones it,
fills the placeholders and deletes this file.

## Placeholders

Text tokens live only in non-TypeScript files. `grep -rn "__[A-Z_]*__" --exclude-dir=node_modules --exclude=package-lock.json`
must return nothing when the scaffold is done.

| Token | Where | Value |
| --- | --- | --- |
| `__CLIENT_NAME__` | `CLAUDE.md`, `README.md`, `dictionaries/*` | Display name |
| `__SLUG__` | `package.json`, `.env.example` | kebab-case slug |
| `__DOMAIN__` | `.env.example`, `CLAUDE.md` | production host (no scheme) |
| `__REPO__` | `CLAUDE.md` | `client-<slug>-web` |
| `__TEMPLATE_SHA__` | `CLAUDE.md` | the template commit scaffolded from |

TypeScript identity lives in `lib/site.ts` (typed, empty = pending).

## Customize checklist

1. `lib/site.ts` — every field; leave empty what the client has not delivered.
2. `lib/i18n/config.ts` — `LOCALES`, labels, `OG_LOCALE`, `HTML_LANG`; then
   `lib/i18n/get-dictionary.ts` and `dictionaries/<locale>/` for each. Changing the
   DEFAULT locale means renaming the `app/[locale]/(public)/*` folders to its slugs.
3. `lib/routes.ts` — public slugs per language; `lib/services.ts` — the catalogue.
4. `dictionaries/` — copy. Placeholder sentences are marked by their wording.
5. `app/globals.css` — the palette values (all seven tokens per band) and fonts
   in `app/[locale]/layout.tsx`.
6. `brand/` + `npm run brand:build` — logo assets; update `LOCKUP` in `components/site/logo.tsx`.
7. `app/opengraph-image.tsx` — redraw with the brand.
8. `lib/legacy-redirects.ts` — old URLs, if migrating an existing site.
9. `docs/PENDING.md` — what the client owes; `MEASUREMENT.md` stays a skeleton
   until `google-setup` runs.

## Validation

```sh
nvm use && npm ci
npm run typecheck && npm run lint
NEXT_PUBLIC_SITE_URL=https://example.invalid npx next build
```
