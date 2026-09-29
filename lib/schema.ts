import { HTML_LANG, LOCALES, type Locale } from "./i18n/config";
import { localeHref, type RouteKey } from "./routes";
import { PLACE } from "@/components/site/place";
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
const PERSON_ID = `${SITE_URL}/#leader`;

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
  // The whole country: they buy anywhere in Spain (the rental portfolio,
  // local to Castelldefels, says so on its own Service node).
  ...(ORG.areaServed ? { areaServed: { "@type": "Country", name: ORG.areaServed } } : {}),
  ...(SAME_AS.length ? { sameAs: SAME_AS } : {}),
});

/**
 * The business as an entity. `RealEstateAgent` is a LocalBusiness subtype, so
 * the one node serves as the local card and as the publisher. It is emitted
 * once per page with a locale-independent @id, so the texts passed in come
 * from the DEFAULT locale: two languages describing the same @id differently
 * would contradict each other.
 */
export function organizationSchema(opts: {
  description?: string;
  knowsAbout?: string[];
  services?: { name: string; url: string }[];
} = {}) {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "RealEstateAgent"],
    "@id": ORG_ID,
    name: ORG.name,
    ...(ORG.shortName !== ORG.name ? { alternateName: ORG.shortName } : {}),
    ...(ORG.claim ? { slogan: ORG.claim } : {}),
    ...(opts.description ? { description: opts.description } : {}),
    ...(ORG.legalName ? { legalName: ORG.legalName } : {}),
    ...(ORG.taxId ? { taxID: ORG.taxId } : {}),
    url: SITE_URL,
    // Google wants a raster >=112px for Organization.logo and does not
    // process SVG reliably, so this is not the favicon.
    logo: absoluteUrl("/logo/logo-512.png"),
    availableLanguage: [...LOCALES],
    ...(ORG.leader.name ? { employee: { "@id": PERSON_ID } } : {}),
    ...(opts.knowsAbout?.length ? { knowsAbout: opts.knowsAbout } : {}),
    ...(opts.services?.length
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: ORG.name,
            itemListElement: opts.services.map((service) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: service.name, url: service.url },
            })),
          },
        }
      : {}),
    ...contactFields(),
  };
}

/**
 * The person who runs the company. Linked both ways (Organization.employee,
 * Person.worksFor) so AI answers and Google can tie the name to the firm.
 */
export function personSchema(opts: { description?: string } = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: ORG.leader.name,
    ...(opts.description ? { description: opts.description } : {}),
    image: absoluteUrl(ORG.leader.image),
    worksFor: { "@id": ORG_ID },
  };
}

/** The about page, pointing at the organisation it describes. */
export function aboutPageSchema(locale: Locale, opts: { name: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: opts.name,
    url: absoluteUrl(`/${locale}${opts.path}`),
    inLanguage: HTML_LANG[locale],
    about: { "@id": ORG_ID },
    mainEntity: { "@id": ORG_ID },
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

/** Ordered list of links (a hub's service pages). */
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
  opts: {
    name: string;
    description: string;
    path: string;
    serviceType?: string;
    /** Served in the home town only (the rental portfolio), not nationwide. */
    local?: boolean;
  },
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(`/${locale}${opts.path}`),
    ...(opts.serviceType ? { serviceType: opts.serviceType } : {}),
    provider: { "@id": ORG_ID },
    ...(opts.local
      ? { areaServed: { "@type": "City", name: PLACE } }
      : ORG.areaServed
        ? { areaServed: { "@type": "Country", name: ORG.areaServed } }
        : {}),
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
