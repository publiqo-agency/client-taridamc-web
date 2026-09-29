import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import type { PropertyType } from "@/lib/properties";

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
export const SERVICE_IDS = ["purchase", "purchase-warehouses", "rental-warehouses", "rental-homes"] as const;

export type ServiceId = (typeof SERVICE_IDS)[number];

export const isServiceId = (value: string): value is ServiceId =>
  (SERVICE_IDS as readonly string[]).includes(value);

/**
 * Two kinds of page share the template: buying from owners (the seller lead,
 * national) and letting from the own portfolio (Castelldefels).
 */
export type ServiceKind = "purchase" | "rental";

export const SERVICE_KIND: Record<ServiceId, ServiceKind> = {
  purchase: "purchase",
  "purchase-warehouses": "purchase",
  "rental-warehouses": "rental",
  "rental-homes": "rental",
};

/** The sibling each page links to at its foot ("Otro servicio"). */
export const SERVICE_RELATED: Record<ServiceId, ServiceId> = {
  purchase: "purchase-warehouses",
  "purchase-warehouses": "purchase",
  "rental-warehouses": "rental-homes",
  "rental-homes": "rental-warehouses",
};

/** Which catalogue listings each rental page shows. */
export const RENTAL_TYPES: Partial<Record<ServiceId, PropertyType[]>> = {
  "rental-warehouses": ["warehouse"],
  "rental-homes": ["home"],
};

/** The rental page a listing belongs to: its enquiries are tagged with it. */
export const rentalServiceFor = (type: PropertyType): ServiceId =>
  type === "warehouse" ? "rental-warehouses" : "rental-homes";

/**
 * Slug of each service page, hanging from its hub (ROUTES.sale or
 * ROUTES.rental, see hubKey in lib/routes.ts). ASCII always, and worded as
 * the search is: "/venta/naves-industriales", not "/venta/naves-2".
 */
export const SERVICE_SLUGS: Record<ServiceId, Record<Locale, string>> = {
  purchase: { es: "/pisos-y-casas", en: "/homes", fr: "/logements", ca: "/pisos-i-cases" },
  "purchase-warehouses": {
    es: "/naves-industriales",
    en: "/industrial-units",
    fr: "/entrepots",
    ca: "/naus-industrials",
  },
  "rental-warehouses": {
    es: "/naves-industriales",
    en: "/industrial-units",
    fr: "/entrepots",
    ca: "/naus-industrials",
  },
  "rental-homes": { es: "/viviendas", en: "/homes", fr: "/logements", ca: "/habitatges" },
};

/** Hero image of each service page, under public/. Missing file → placeholder. */
export const SERVICE_IMAGES: Record<ServiceId, string> = {
  purchase: "/services/purchase/hero.webp",
  "purchase-warehouses": "/properties/nave-1.webp",
  "rental-warehouses": "/properties/nave-2.webp",
  "rental-homes": "/services/rental/hero.webp",
};

/**
 * CANONICAL SLUG of a service: the default locale's, without the slash, for
 * ALL locales.
 *
 * Not a preference: it is the only thing that works. The app/ folders are
 * named in the default locale and the proxy rewrites every public URL to
 * them (`/en/to-let/homes` → `/en/alquiler/viviendas`), so the
 * segment that reaches `[slug]` is ALWAYS the canonical one. A
 * `generateStaticParams` that emitted the translated slug would prerender a
 * route the proxy never asks for, and with `dynamicParams = false` that is a
 * 404 in every non-default language.
 */
export const canonicalServiceSlug = (id: ServiceId): string =>
  SERVICE_SLUGS[id][DEFAULT_LOCALE].replace(/^\//, "");

/** The service ids of one kind, in catalogue order. */
export const serviceIdsOf = (kind: ServiceKind): ServiceId[] =>
  SERVICE_IDS.filter((id) => SERVICE_KIND[id] === kind);

/**
 * Canonical slug → id, within one hub. `null` if it is none of them. Scoped
 * by kind because the two hubs reuse a slug ("naves-industriales").
 */
export const serviceFromCanonicalSlug = (kind: ServiceKind, slug: string): ServiceId | null =>
  serviceIdsOf(kind).find((id) => canonicalServiceSlug(id) === slug) ?? null;
