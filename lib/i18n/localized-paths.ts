import { DEFAULT_LOCALE, LOCALES, hasLocale, type Locale } from "./config";
import { ROUTES, ROUTE_KEYS, servicePaths } from "@/lib/routes";
import { SERVICE_IDS } from "@/lib/services";

/**
 * Translation between the public URL (one slug per language) and the
 * canonical route, which is the folder that exists in app/ and is always
 * named after the default locale.
 *
 *   public /en/services  ──toCanonical──▶  folder /en/servicios
 *   folder /en/servicios ──toPublic──▶     public /en/services
 *
 * The proxy uses both: it rewrites the public URL to the folder, and answers
 * 308 when someone asks for the folder directly (otherwise every page would
 * be reachable at two URLs = duplicate content). The LocaleSwitcher uses
 * translatePath, which chains the two. No `server-only`: the switcher is a
 * client component and these tables are plain data.
 */

/** Canonical (default-locale) paths of every page, service pages included. */
const CANONICAL_PATHS = [
  ...ROUTE_KEYS.map((key) => ROUTES[key][DEFAULT_LOCALE]),
  ...SERVICE_IDS.map((id) => servicePaths(id)[DEFAULT_LOCALE]),
];

/** canonical → public, per locale. */
const TO_PUBLIC: Record<Locale, Map<string, string>> = Object.fromEntries(
  LOCALES.map((l) => [
    l,
    new Map([
      ...ROUTE_KEYS.map(
        (key) => [ROUTES[key][DEFAULT_LOCALE], ROUTES[key][l]] as const,
      ),
      ...SERVICE_IDS.map(
        (id) => [servicePaths(id)[DEFAULT_LOCALE], servicePaths(id)[l]] as const,
      ),
    ]),
  ]),
) as Record<Locale, Map<string, string>>;

/** public → canonical, per locale (the inverse of TO_PUBLIC). */
const TO_CANONICAL: Record<Locale, Map<string, string>> = Object.fromEntries(
  LOCALES.map((l) => [
    l,
    new Map([...TO_PUBLIC[l]].map(([canonical, pub]) => [pub, canonical])),
  ]),
) as Record<Locale, Map<string, string>>;

/** Public path → real folder. Returns the input when there is no translation. */
export const toCanonical = (locale: Locale, path: string): string =>
  TO_CANONICAL[locale].get(path) ?? path;

/** Real folder → public path. Returns the input when there is no translation. */
export const toPublic = (locale: Locale, path: string): string =>
  TO_PUBLIC[locale].get(path) ?? path;

/**
 * Is `path` a canonical route that this locale publishes under another slug?
 * That is the "they asked for the folder directly" signal → 308.
 */
export const isStaleCanonical = (locale: Locale, path: string): boolean =>
  CANONICAL_PATHS.includes(path) && toPublic(locale, path) !== path;

/** Splits a pathname into locale + rest. Without a valid prefix, assumes the default. */
export function splitLocale(pathname: string): { locale: Locale; rest: string } {
  const [, maybe, ...others] = pathname.split("/");
  if (hasLocale(maybe)) {
    const rest = others.length ? `/${others.join("/")}` : "";
    return { locale: maybe, rest };
  }
  return { locale: DEFAULT_LOCALE, rest: pathname === "/" ? "" : pathname };
}

/**
 * Same page, other language. The switcher cannot just swap the prefix once
 * slugs differ: /en/about-us is not /es/about-us.
 */
export function translatePath(pathname: string, to: Locale): string {
  const { locale: from, rest } = splitLocale(pathname);
  return `/${to}${toPublic(to, toCanonical(from, rest))}`;
}
