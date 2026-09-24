import type { MetadataRoute } from "next";
import { DEFAULT_LOCALE, LOCALES, type Locale } from "@/lib/i18n/config";
import { ROUTE_KEYS, routePaths, servicePaths, type RouteKey } from "@/lib/routes";
import { SERVICE_IDS } from "@/lib/services";
import { absoluteUrl } from "@/lib/seo";

type Weight = {
  priority: number;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
};

/**
 * Relative weight per route. A Record over RouteKey, so adding a route
 * without a weight is a compile error.
 */
const ROUTE_WEIGHT: Record<RouteKey, Weight> = {
  home: { priority: 1.0, changeFrequency: "monthly" },
  services: { priority: 0.9, changeFrequency: "monthly" },
  about: { priority: 0.7, changeFrequency: "monthly" },
  faq: { priority: 0.6, changeFrequency: "monthly" },
  contact: { priority: 0.8, changeFrequency: "monthly" },
  legalNotice: { priority: 0.3, changeFrequency: "yearly" },
  privacy: { priority: 0.3, changeFrequency: "yearly" },
  cookies: { priority: 0.3, changeFrequency: "yearly" },
};

const SERVICE_WEIGHT: Weight = { priority: 0.9, changeFrequency: "monthly" };

/**
 * Content revision date. A CONSTANT on purpose: with `new Date()` every
 * deploy would claim every URL changed, and Google ends up ignoring a
 * <lastmod> that always lies. Bump it by hand when the copy is revised.
 */
const CONTENT_REVISED = new Date("2026-09-01");

/** Each page as a {locale → path} cluster plus its weight. */
const CLUSTERS: (Weight & { paths: Record<Locale, string> })[] = [
  ...ROUTE_KEYS.map((key) => ({ paths: routePaths(key), ...ROUTE_WEIGHT[key] })),
  ...SERVICE_IDS.map((id) => ({ paths: servicePaths(id), ...SERVICE_WEIGHT })),
];

/** Every localized URL lists its full alternates cluster (hreflang). */
export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALES.flatMap((locale) =>
    CLUSTERS.map(({ paths, priority, changeFrequency }) => ({
      url: absoluteUrl(`/${locale}${paths[locale]}`),
      lastModified: CONTENT_REVISED,
      changeFrequency,
      priority,
      alternates: {
        languages: {
          ...Object.fromEntries(LOCALES.map((l) => [l, absoluteUrl(`/${l}${paths[l]}`)])),
          "x-default": absoluteUrl(`/${DEFAULT_LOCALE}${paths[DEFAULT_LOCALE]}`),
        },
      },
    })),
  );
}
