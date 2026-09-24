import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Montserrat } from "next/font/google";
import { LOCALES, HTML_LANG, OG_LOCALE, toLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { IS_INDEXABLE, ORG, OG_IMAGE, SITE_URL } from "@/lib/seo";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { REVEAL_INIT_SCRIPT } from "@/lib/motion";
import { GTM_ID, GTM_INIT_SCRIPT } from "@/lib/analytics";
import { JsonLd } from "@/components/seo/json-ld";
import { InlineScript } from "@/components/site/inline-script";
import { AnalyticsListener } from "@/components/site/analytics-listener";
import { RootAttributes } from "@/components/site/root-attributes";
import { MOTION_INIT_SCRIPT } from "@/components/site/motion/init-script";
import "../globals.css";

/**
 * Fonts. CLIENT-SKIN: swap the families, keep the two CSS variables that
 * globals.css maps to --font-display / --font-sans.
 */
/* Montserrat is the logo's typeface: labels in tracked capitals echo its
   "REAL ESTATE" line, and the thin weights carry the big sans headlines. */
const sans = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: "variable",
  variable: "--font-sans-family",
});
const display = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display-family",
});

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

/** Outside the locale list nothing is generated: /fr is a 404, not an empty page. */
export const dynamicParams = false;

export const viewport: Viewport = {
  themeColor: "#0a2438",
  colorScheme: "light",
};

export async function generateMetadata(props: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale: raw } = await props.params;
  const locale = toLocale(raw);
  const dict = await getDictionary(locale);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: dict.common.meta.defaultTitle,
      template: `%s | ${ORG.shortName}`,
    },
    description: dict.common.meta.description,
    openGraph: {
      type: "website",
      siteName: ORG.name,
      locale: OG_LOCALE[locale],
      alternateLocale: LOCALES.filter((l) => l !== locale).map((l) => OG_LOCALE[l]),
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: ORG.name }],
    },
    twitter: { card: "summary_large_image" },
    // Without a configured domain (previews, staging) the whole site is noindex.
    robots: IS_INDEXABLE
      ? { index: true, follow: true, googleBot: { "max-image-preview": "large" } }
      : { index: false, follow: false },
  };
}

export default async function LocaleLayout(props: LayoutProps<"/[locale]">) {
  const { locale: raw } = await props.params;
  const locale = toLocale(raw);

  return (
    <html
      lang={HTML_LANG[locale]}
      className={`${sans.variable} ${display.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Synchronous, before first paint. The reveal script marks that JS is
            present so the CSS may hide what will animate; the GTM script sets
            the consent defaults BEFORE the container can send anything. */}
        <InlineScript html={REVEAL_INIT_SCRIPT} />
        <InlineScript html={MOTION_INIT_SCRIPT} />
        {GTM_ID && <InlineScript html={GTM_INIT_SCRIPT} />}
      </head>
      <body className="flex min-h-full flex-col">
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        {props.children}
        <RootAttributes />
        <AnalyticsListener />
      </body>
    </html>
  );
}
