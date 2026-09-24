import type { Locale } from "@/lib/i18n/config";
import { SERVICE_SLUGS, type ServiceId } from "@/lib/services";

/**
 * Internal routes per language.
 *
 * The app/ folders are named after the DEFAULT locale's slugs and are the
 * CANONICAL route. The public URL of every other language is served by the
 * proxy rewrite: /en/services renders app/[locale]/(public)/servicios/. One
 * page tree for every language.
 *
 * Slugs are ASCII ALWAYS (ü→ue, ä→a, ö→o). A slug with diacritics gets
 * percent-encoded when copied and turns unreadable in the one channel a small
 * business shares links through: a WhatsApp message.
 *
 * ⚠ Adding a route or a locale also touches lib/i18n/localized-paths.ts
 * (derives its tables from here), proxy.ts (consumes them), ROUTE_WEIGHT in
 * app/sitemap.ts (a Record, so the compiler flags it) and NAV_KEYS below (a
 * hand-written list nobody flags). The proxy matcher is a negative catch-all,
 * so a new route needs nothing there.
 */
export const ROUTES = {
  home: { es: "", en: "", fr: "", ca: "" },
  services: { es: "/servicios", en: "/services", fr: "/services", ca: "/serveis" },
  about: { es: "/nosotros", en: "/about-us", fr: "/qui-sommes-nous", ca: "/qui-som" },
  contact: { es: "/contacto", en: "/contact", fr: "/contact", ca: "/contacte" },
  legalNotice: { es: "/aviso-legal", en: "/legal-notice", fr: "/mentions-legales", ca: "/avis-legal" },
  privacy: { es: "/politica-de-privacidad", en: "/privacy-policy", fr: "/politique-de-confidentialite", ca: "/politica-de-privacitat" },
  cookies: { es: "/politica-de-cookies", en: "/cookie-policy", fr: "/politique-de-cookies", ca: "/politica-de-galetes" },
} satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof ROUTES;

export const ROUTE_KEYS = Object.keys(ROUTES) as RouteKey[];

/**
 * The content pages, in order. The rest are legal or utility.
 *
 * This is the list the FOOTER prints. The header menu is composed by hand in
 * app/[locale]/(public)/layout.tsx because it is a client decision (which
 * entries, which order, what goes into the CTA button).
 */
export const NAV_KEYS = ["services", "about"] as const satisfies readonly RouteKey[];

/** Legal pages, which the footer prints in a second row. */
export const LEGAL_KEYS = ["legalNotice", "privacy", "cookies"] as const satisfies readonly RouteKey[];

/** A route's cluster in every locale — what the alternates need. */
export const routePaths = (key: RouteKey): Record<Locale, string> => ROUTES[key];

/** A service page's cluster in every locale. */
export const servicePaths = (id: ServiceId): Record<Locale, string> =>
  Object.fromEntries(
    (Object.keys(ROUTES.services) as Locale[]).map((l) => [
      l,
      `${ROUTES.services[l]}${SERVICE_SLUGS[id][l]}`,
    ]),
  ) as Record<Locale, string>;

export const localeHref = (locale: Locale, key: RouteKey = "home") =>
  `/${locale}${ROUTES[key][locale]}`;

export const serviceHref = (locale: Locale, id: ServiceId) =>
  `/${locale}${servicePaths(id)[locale]}`;

/**
 * Routes that open with a full-bleed hero under a transparent header. Declared
 * in the NEGATIVE (everything except the legal pages): the pages with a hero
 * grow every time a section or a service is added, and forgetting one would
 * leave a solid header floating over a dark photo. Forgetting a legal page
 * here fails the safe way.
 */
const SOLID_HEADER_KEYS = LEGAL_KEYS as readonly RouteKey[];

/** Exact paths (not prefixes: the home entry is `/es`, and a prefix rule would match everything). */
export const overlayPathsFor = (locale: Locale): string[] => [
  ...ROUTE_KEYS.filter((key) => !SOLID_HEADER_KEYS.includes(key)).map((key) =>
    localeHref(locale, key),
  ),
  ...(Object.keys(SERVICE_SLUGS) as ServiceId[]).map((id) => serviceHref(locale, id)),
];
