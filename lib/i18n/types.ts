import type { ServiceId } from "@/lib/services";
import type { common } from "@/dictionaries/es/common";
import type { home } from "@/dictionaries/es/home";
import type { about } from "@/dictionaries/es/pages";
import type { contact } from "@/dictionaries/es/contact";
import type { legal } from "@/dictionaries/es/legal";

/**
 * Dictionary types, DERIVED from the default locale.
 *
 * The default-locale copy is the source, so its shape is the contract:
 * `typeof common` yields a type with all its keys and `string` values, and
 * every other language has to fit. A key missing in English is a compile
 * error, not an empty string found in production three weeks later.
 *
 * That is why the modules under dictionaries/es/ do NOT use `as const`: with
 * it, every string would be its own literal type and no translation would
 * ever fit.
 *
 * `ServicesDict` is the exception and is declared explicitly: it needs
 * `Record<ServiceId, ServiceCopy>` so that adding a service in
 * lib/services.ts without writing its copy breaks the build.
 */
export type CommonDict = typeof common;
export type HomeDict = typeof home;
export type AboutDict = typeof about;
export type ContactDict = typeof contact;
export type LegalDict = typeof legal;

/** A block of text with a heading — the unit of the content pages. */
export type Section = {
  heading: string;
  body: string[];
};

export type Faq = { question: string; answer: string };

export type ServiceCopy = {
  /** Feeds the JSON-LD name, the breadcrumb and the links to the page. */
  title: string;
  /** Short form for navigation, the footer and the form's service select. */
  shortTitle: string;
  /** Who the page is for, above the h1 ("Para propietarios"). */
  kicker: string;
  /** The h1: "\n" breaks and *accent* marks, like every display title. */
  heroTitle: string;
  /** Complete <title> (brand included), ≤ 60 characters. */
  seoTitle: string;
  teaser: string;
  /** ≤ 155 characters. */
  metaDescription: string;
  intro: string;
  imageAlt: string;
  /** Descriptive anchor for links to this page: never "Saber más". */
  learnMore: string;
  includesTitle: string;
  includes: string[];
  process: { title: string; intro: string };
  /** The process steps. */
  sections: Section[];
  /** "What we buy": asset types and the situations we also consider. */
  scope?: { title: string; body: string[] };
  /** Direct sale vs. an agency: neutral, no figures. */
  comparison?: {
    title: string;
    intro: string;
    columns: [string, string];
    rows: { label: string; values: [string, string] }[];
  };
  /** Visible on the page AND emitted as FAQPage: the two must match. */
  faq: Faq[];
  closing: { title: string; body: string };
  /**
   * Prefilled WhatsApp message for this service. Required: a chat that opens
   * blank forces the visitor to explain everything and loses half the leads.
   */
  whatsappMessage: string;
  cta: string;
};

/**
 * A hub page (Venta or Alquiler). Each speaks only of its own side of the
 * business: the sale hub never mentions renting, the rental hub never buying.
 */
export type HubCopy = {
  /** Breadcrumb and JSON-LD name. */
  title: string;
  /** Complete <title> (brand included), ≤ 60 characters. */
  seoTitle: string;
  /** ≤ 155 characters. */
  description: string;
  eyebrow: string;
  /** The h1: "\n" breaks and *accent* marks. */
  heroTitle: string;
  imageAlt: string;
  /** The label beside the white introduction under the hero. */
  introLabel: string;
  intro: string;
  closing: { title: string; body: string };
  cta: string;
  whatsappMessage: string;
};

export type ServicesDict = {
  hubs: { sale: HubCopy; rental: HubCopy };
  detail: {
    faqTitle: string;
    otherServices: string;
    requestBody: string;
  };
  items: Record<ServiceId, ServiceCopy>;
};

export type Dictionary = {
  common: CommonDict;
  home: HomeDict;
  services: ServicesDict;
  about: AboutDict;
  contact: ContactDict;
  legal: LegalDict;
};
