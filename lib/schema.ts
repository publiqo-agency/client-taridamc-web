import { HTML_LANG, LOCALES, type Locale } from "./i18n/config";
import { localeHref, type RouteKey } from "./routes";
import {
  ORG,
  SAME_AS,
  SITE_URL,
  absoluteUrl,
  hasEmail,
  hasPhone,
  hasPostalAddress,
} from "./seo";

/**
 * JSON-LD builders. Rendered through <JsonLd>. Every field is emitted only
 * when there is a real value: a `telephone: ""` in structured data is not a
 * gap, it is a false statement about the entity, and Google indexes it.
 */

/** Stable, locale-independent @ids: the entities are unique. */
const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const contactFields = () => ({
  ...(hasPhone() ? { telephone: ORG.telephone } : {}),
  ...(hasEmail() ? { email: ORG.email } : {}),
  ...(hasPostalAddress()
    ? {
        address: {
          "@type": "PostalAddress",
          streetAddress: ORG.address.street,
          postalCode: ORG.address.postalCode,
          addressLocality: ORG.address.city,
          addressRegion: ORG.address.region,
          addressCountry: ORG.address.country,
        },
      }
    : ORG.address.city
      ? {
          // No street yet, but city and country are true and help disambiguate.
          address: {
            "@type": "PostalAddress",
            addressLocality: ORG.address.city,
            addressRegion: ORG.address.region,
            addressCountry: ORG.address.country,
          },
        }
      : {}),
  ...(ORG.areaServed
    ? {
        areaServed: {
          "@type": "AdministrativeArea",
          name: ORG.areaServed,
          containedInPlace: { "@type": "Country", name: ORG.address.country },
        },
      }
    : {}),
  ...(SAME_AS.length ? { sameAs: SAME_AS } : {}),
});

/**
 * The business as an entity. `Organization` + `LocalBusiness` in one node:
 * same @id, both types, so the local card and the publisher reference point
 * at the same thing. Drop `LocalBusiness` if the client has no physical
 * premises to be found at.
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": ORG_ID,
    name: ORG.name,
    ...(ORG.shortName !== ORG.name ? { alternateName: ORG.shortName } : {}),
    ...(ORG.claim ? { slogan: ORG.claim } : {}),
    ...(ORG.legalName ? { legalName: ORG.legalName } : {}),
    ...(ORG.taxId ? { taxID: ORG.taxId } : {}),
    url: SITE_URL,
    // Google wants a raster >=112px for Organization.logo and does not
    // process SVG reliably, so this is not the favicon.
    logo: absoluteUrl("/logo/logo-512.png"),
    availableLanguage: [...LOCALES],
    ...contactFields(),
  };
}

/**
 * The site as an entity. `inLanguage` lists EVERY locale, not the page's:
 * the @id is unique — the site is one — so a per-locale value would make the
 * versions contradict each other about the same entity. The page language is
 * declared by <html lang>, where it belongs.
 */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: ORG.name,
    inLanguage: LOCALES.map((l) => HTML_LANG[l]),
    publisher: { "@id": ORG_ID },
  };
}

/** Ordered list of links (the services index). */
export function itemListSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: item.url,
    })),
  };
}

/**
 * A service page. NO `offers`: personalised services have no published
 * price, and an Offer without a price adds nothing.
 */
export function serviceSchema(
  locale: Locale,
  opts: { name: string; description: string; path: string },
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(`/${locale}${opts.path}`),
    provider: { "@id": ORG_ID },
    ...(ORG.areaServed ? { areaServed: ORG.areaServed } : {}),
    inLanguage: HTML_LANG[locale],
  };
}

/**
 * FAQ. The text in the markup is EXACTLY the text on the page, never a
 * trimmed version: publishing in the markup what is not in the HTML is
 * grounds for a manual action for structured-data spam.
 */
export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** Breadcrumb of a second-level page: home → the page. */
export function routeBreadcrumb(
  locale: Locale,
  opts: { homeLabel: string; name: string; key: RouteKey },
) {
  return breadcrumbSchema([
    { name: opts.homeLabel, path: localeHref(locale) },
    { name: opts.name, path: localeHref(locale, opts.key) },
  ]);
}
