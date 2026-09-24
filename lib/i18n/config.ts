/**
 * Site languages.
 *
 * The first locale in LOCALES is the default: the language the copy is
 * written in first, and the one whose dictionary is the type contract for
 * the others (lib/i18n/types.ts). The app/ folders are named after the
 * default locale's slugs (lib/routes.ts) — change the default and you rename
 * folders, so decide it before scaffolding.
 *
 * Adding a locale touches, in this order: this file, lib/routes.ts,
 * lib/services.ts, lib/i18n/get-dictionary.ts and dictionaries/<locale>/.
 * The compiler flags the last four; nothing flags this one.
 */
export const LOCALES = ["es", "en"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "es";

export const LOCALE_COOKIE = "locale";

/**
 * Remembers the chosen language. Written by the switcher, read by proxy.ts:
 * without it, the next visit to an unprefixed URL would negotiate again from
 * Accept-Language and ignore what the visitor just picked.
 *
 * One year, `samesite=lax` (only read on top-level navigation) and no
 * `secure`, so it also works on localhost.
 */
export function rememberLocale(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale};path=/;max-age=31536000;samesite=lax`;
}

export const hasLocale = (value: string): value is Locale =>
  (LOCALES as readonly string[]).includes(value);

export const toLocale = (value: string): Locale =>
  hasLocale(value) ? value : DEFAULT_LOCALE;

/** Label in its own language: a German visitor looks for "Deutsch". */
export const LOCALE_LABELS: Record<Locale, string> = {
  es: "Español",
  en: "English",
};

/** Short code for the switcher, where the full name does not fit. */
export const LOCALE_SHORT: Record<Locale, string> = {
  es: "ES",
  en: "EN",
};

/** og:locale wants lang_TERRITORY. */
export const OG_LOCALE: Record<Locale, string> = {
  es: "es_ES",
  en: "en_GB",
};

/** BCP-47 for <html lang> and the JSON-LD inLanguage. */
export const HTML_LANG: Record<Locale, string> = {
  es: "es-ES",
  en: "en-GB",
};
