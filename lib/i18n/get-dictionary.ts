import "server-only";
import type { Locale } from "./config";
import type { Dictionary } from "./types";

/**
 * Dynamic import per locale: only the rendered language is loaded, and none
 * of it reaches the client bundle (copy travels as already-resolved props).
 */
const loaders: Record<Locale, () => Promise<{ dictionary: Dictionary }>> = {
  es: () => import("@/dictionaries/es"),
  en: () => import("@/dictionaries/en"),
  fr: () => import("@/dictionaries/fr"),
  ca: () => import("@/dictionaries/ca"),
};

export const getDictionary = (locale: Locale): Promise<Dictionary> =>
  loaders[locale]().then((mod) => mod.dictionary);
