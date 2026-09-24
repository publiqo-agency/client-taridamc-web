# The skeleton

Every file in this repo sits in one of three layers. Starting the next client
means copying the first, filling the second and rewriting the third.

## CORE — copied untouched

Infrastructure. Knows nothing about the client. If you need to change one of
these for a client, either the skeleton is wrong (fix it in the template) or
what you want is CLIENT-DATA in disguise.

| File | What it solves |
| --- | --- |
| `lib/i18n/config.ts` | Locale list, default, cookie, labels, `og:locale`, `<html lang>` |
| `lib/i18n/get-dictionary.ts` | Dynamic import per locale, `server-only` |
| `lib/i18n/localized-paths.ts` | Public slug ↔ canonical folder |
| `lib/i18n/metadata.ts` | `pageMetadata()`: canonical + hreflang + x-default |
| `lib/i18n/types.ts` | Types derived from the default-locale dictionary |
| `proxy.ts` | Legacy 308s, language negotiation, 307 prefix, 308 anti-duplicate, rewrite |
| `lib/seo.ts` | `IS_INDEXABLE`, `SITE_URL`, `absoluteUrl`, `has*()` guards |
| `lib/schema.ts` | JSON-LD builders |
| `lib/images.ts` | `hasPublicImage()` — degrade instead of breaking the build |
| `lib/motion.ts` | `reveal()` + `REVEAL_INIT_SCRIPT` |
| `lib/analytics.ts` | GTM + dataLayer events + Consent Mode defaults |
| `lib/consent.ts` | Consent store (versioned localStorage) |
| `lib/pending.ts` | `SHOW_PENDING` switch |
| `lib/whatsapp.ts` | `whatsappUrl()`, `proposalFormHref()` |
| `lib/contact.ts` | Form schema with the bot traps |
| `components/seo/json-ld.tsx` | Serialises JSON-LD escaping `<` |
| `components/site/inline-script.tsx` | Synchronous `<head>` script without a React warning |
| `components/site/reveal-observer.tsx` | One IntersectionObserver for the page |
| `components/site/root-attributes.tsx` | Restores `<html>` attributes after a locale-crossing navigation |
| `components/site/analytics-listener.tsx` | Delegated `data-cta` listener + consent replay |
| `components/site/consent-banner.tsx` | Banner + reopen button |
| `components/site/contact-form*.tsx` | Form + URL prefill |
| `components/site/locale-switcher.tsx` | Same page, other language |
| `components/site/pending.tsx` | Preview-only notices |
| `app/{robots,sitemap,manifest}.ts`, `app/llms.txt/route.ts` | With the indexability kill-switch |
| `app/[locale]/(public)/contacto/actions.ts` | Server Action → Resend, never fakes success |
| `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs`, `.nvmrc` | Toolchain |
| `app/globals.css` — the **mechanics**, not the values | Token indirection and bridge (see invariants) |
| `scripts/*` | Brand assets, IndexNow |

## CLIENT-DATA — same shape, new values

| File | What changes |
| --- | --- |
| `lib/site.ts` | Identity, contact, legal, social |
| `lib/routes.ts` | Slugs per language; `NAV_KEYS` |
| `lib/services.ts` | The catalogue (ids, slugs, images) |
| `lib/legacy-redirects.ts` | Old URLs, if any |
| `dictionaries/**` | All the copy, every language |
| `public/**`, `brand/**` | Assets |
| `.env.example` | Same variables, this client's values |

## CLIENT-SKIN — rewritten

What makes two clients not look alike.

- `app/globals.css` — the **values** of the tokens and the fonts
- `app/[locale]/**` — the pages (their composition, not their data plumbing)
- `components/site/**` except the ones listed as CORE
- `app/opengraph-image.tsx`, `emails/contact-notification.tsx` — brand colours
- `lib/styles.ts` — `FRAME`, `SECTION`, `DISPLAY`…

## Three invariants that cost real time

### 1. Token indirection is mandatory

```css
@theme { --color-ink: var(--ink); }   /* NOT: --color-ink: #111827 */
```

With a literal, Lightning CSS bakes the opacity variants (`bg-ink/40`,
`text-ink/70`) to the light value at build time; `.band-dark` then breaks
silently. And the bridge goes on `*, ::before, ::after`, not only `:root`:
`var()` inside a custom property resolves where it is DECLARED. Corollary:
whoever rewrites the palette rewrites all seven tokens in every band.

### 2. `routes.ts` + `localized-paths.ts` + `proxy.ts` are one unit

Adding a route or a locale touches the three; the last two derive their tables
from the first, so the compiler flags most of it. The proxy matcher is a
negative catch-all, so a new route needs nothing there. `ROUTE_WEIGHT` in the
sitemap is a `Record<RouteKey, …>` (flagged); `NAV_KEYS` is a hand list (not).

Check: for every route and locale, `toPublic(toCanonical(p)) === p`.

⚠ The proxy rewrites TO the default-locale folder, so `generateStaticParams`
of a dynamic segment must emit the CANONICAL slug for every locale, not the
translated one. Emitting the translation prerenders a route the proxy never
asks for — a 404 in every non-default language with `dynamicParams = false`.

### 3. The default-locale dictionary is the schema

`lib/i18n/types.ts` derives the types with `typeof` from `dictionaries/es/*`,
so those modules do NOT use `as const`. A key missing in another language is
a compile error. `ServicesDict` is the explicit exception: it needs
`Record<ServiceId, ServiceCopy>` so a service without copy breaks the build.

## Decisions worth inheriting

- **Indexability kill-switch.** No `NEXT_PUBLIC_SITE_URL` → `noindex` + robots disallow.
- **Analytics kill-switch.** No `NEXT_PUBLIC_GTM_ID` → no tag, no banner.
- **The form never fakes success.** No key in production → visible error.
- **Data that does not exist is not rendered.** `hasPhone()`, `hasWhatsApp()`…
- **No `new Date()` in the sitemap or the legal pages.** A `lastmod` that changes every deploy lies.
- **Copy stays out of client components.** Header and footer receive props.
