import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";

/**
 * The client's services (or programmes, or products — whatever the site
 * sells). Structure here (id, slug, images); copy in dictionaries/, indexed
 * by the same id. That separation is what lets a translation touch no data
 * and a photo change touch no text.
 *
 * NO PRICE FIELD on purpose: on an agency site the CTA is "ask for a
 * proposal", never "buy". If the client ever sells fixed products that is a
 * different type, not an optional field here — an optional `price?` ends up
 * being filled.
 */
export const SERVICE_IDS = ["rental", "purchase"] as const;

export type ServiceId = (typeof SERVICE_IDS)[number];

export const isServiceId = (value: string): value is ServiceId =>
  (SERVICE_IDS as readonly string[]).includes(value);

/**
 * Slug of each service page, hanging from ROUTES.services. ASCII always. A
 * product name that is the same in every language is fine: the proxy
 * tolerates it (`toPublic` returns the input when there is no translation).
 */
export const SERVICE_SLUGS: Record<ServiceId, Record<Locale, string>> = {
  rental: { es: "/alquiler", en: "/rentals", fr: "/location", ca: "/lloguer" },
  purchase: { es: "/compra", en: "/we-buy", fr: "/achat", ca: "/compra" },
};

/** Hero image of each service page, under public/. Missing file → placeholder. */
export const SERVICE_IMAGES: Record<ServiceId, string> = {
  rental: "/services/rental/hero.webp",
  purchase: "/services/purchase/hero.webp",
};

/**
 * CANONICAL SLUG of a service: the default locale's, without the slash, for
 * ALL locales.
 *
 * Not a preference: it is the only thing that works. The app/ folders are
 * named in the default locale and the proxy rewrites every public URL to
 * them (`/en/services/rentals` → `/en/servicios/alquiler`), so the
 * segment that reaches `[slug]` is ALWAYS the canonical one. A
 * `generateStaticParams` that emitted the translated slug would prerender a
 * route the proxy never asks for, and with `dynamicParams = false` that is a
 * 404 in every non-default language.
 */
export const canonicalServiceSlug = (id: ServiceId): string =>
  SERVICE_SLUGS[id][DEFAULT_LOCALE].replace(/^\//, "");

/** Canonical slug → id. `null` if it is none of them. */
export const serviceFromCanonicalSlug = (slug: string): ServiceId | null =>
  SERVICE_IDS.find((id) => canonicalServiceSlug(id) === slug) ?? null;
