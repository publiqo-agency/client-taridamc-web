import type { ServiceId } from "@/lib/services";
import type { common } from "@/dictionaries/es/common";
import type { home } from "@/dictionaries/es/home";
import type { about, faq } from "@/dictionaries/es/pages";
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
export type FaqDict = typeof faq;
export type ContactDict = typeof contact;
export type LegalDict = typeof legal;

/** A block of text with a heading — the unit of the content pages. */
export type Section = {
  heading: string;
  body: string[];
};

export type ServiceCopy = {
  /** Feeds the h1, the <title>, the JSON-LD name and the breadcrumb. */
  title: string;
  /** Short form for navigation and cards. */
  shortTitle: string;
  teaser: string;
  metaDescription: string;
  intro: string;
  imageAlt: string;
  includes: string[];
  sections: Section[];
  faq?: { question: string; answer: string }[];
  /**
   * Prefilled WhatsApp message for this service. Required: a chat that opens
   * blank forces the visitor to explain everything and loses half the leads.
   */
  whatsappMessage: string;
  cta: string;
};

export type ServicesDict = {
  meta: { title: string; seoTitle?: string; description: string };
  index: {
    eyebrow: string;
    title: string;
    intro: string;
    allServices: string;
  };
  detail: {
    includesTitle: string;
    faqTitle: string;
    otherServices: string;
    requestTitle: string;
    requestBody: string;
  };
  items: Record<ServiceId, ServiceCopy>;
};

export type Dictionary = {
  common: CommonDict;
  home: HomeDict;
  services: ServicesDict;
  about: AboutDict;
  faq: FaqDict;
  contact: ContactDict;
  legal: LegalDict;
};
