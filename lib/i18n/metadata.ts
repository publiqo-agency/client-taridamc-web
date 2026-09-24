import type { Metadata } from "next";
import { DEFAULT_LOCALE, LOCALES, OG_LOCALE, type Locale } from "./config";
import { OG_IMAGE, ORG } from "@/lib/seo";

/**
 * Per-page metadata with canonical + hreflang (every locale + x-default →
 * the default locale). URLs are relative: metadataBase in the root layout
 * resolves them.
 */
export function pageMetadata(opts: {
  locale: Locale;
  /**
   * Public path of the page in EVERY locale (routePaths/servicePaths). Not a
   * single one: since every locale has its own slug, a shared `path` would
   * make the hreflang links point at URLs that do not exist.
   */
  paths: Record<Locale, string>;
  title: string;
  /**
   * COMPLETE <title>, replacing the layout template instead of chaining to
   * it. For pages whose visible title is too short for the SERP ("Services")
   * and wastes the ~60 characters Google shows. When absent, `title` is used
   * and gets the brand suffix.
   *
   * Absolute on purpose: such titles usually already name the brand, and the
   * template would print it twice and truncate.
   */
  seoTitle?: string;
  description: string;
}): Metadata {
  const languages = Object.fromEntries(
    LOCALES.map((l) => [l, `/${l}${opts.paths[l]}`]),
  );
  const self = `/${opts.locale}${opts.paths[opts.locale]}`;
  return {
    title: opts.seoTitle ? { absolute: opts.seoTitle } : opts.title,
    description: opts.description,
    alternates: {
      canonical: self,
      languages: {
        ...languages,
        "x-default": `/${DEFAULT_LOCALE}${opts.paths[DEFAULT_LOCALE]}`,
      },
    },
    openGraph: {
      type: "website",
      siteName: ORG.name,
      title: opts.title,
      description: opts.description,
      url: self,
      locale: OG_LOCALE[opts.locale],
      alternateLocale: LOCALES.filter((l) => l !== opts.locale).map(
        (l) => OG_LOCALE[l],
      ),
      // Next merges metadata shallowly: this openGraph REPLACES the layout's,
      // it does not extend it. Without repeating the image here the whole site
      // would be shared without og:image.
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: ORG.name }],
    },
  };
}
