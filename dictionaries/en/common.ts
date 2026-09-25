import type { CommonDict } from "@/lib/i18n/types";

/**
 * English copy (British English). Same shape as dictionaries/es/common.ts.
 * "\n" is a designed line break; *asterisks* mark the italic accent phrase.
 */
export const common: CommonDict = {
  meta: {
    defaultTitle: "Tarida MC",
    description:
      "Tarida MC is a family business in Castelldefels with forty years in real estate. We buy properties and let industrial units and homes.",
  },
  nav: {
    home: "Home",
    services: "Services",
    sell: "Sell your property",
    rent: "To let",
    about: "About us",
    contact: "Contact",
    menu: "Menu",
    close: "Close",
    mainNavAria: "Main navigation",
    skipToContent: "Skip to content",
  },
  cta: {
    contact: "Get in touch",
    whatsapp: "Message us on WhatsApp",
    back: "Back to home",
    allServices: "View all services",
    learnMore: "Learn more",
  },
  brand: {
    yearsLabel: "years",
    yearsCaption: "in real estate",
  },
  catalogue: {
    title: "Properties\n*to let*",
    intro:
      "Industrial units and homes in Castelldefels, from our own portfolio. You deal with us directly.",
    filtersAria: "Filter by property type",
    filters: {
      all: "All",
      warehouse: "Industrial units",
      home: "Homes",
      commercial: "Retail premises",
    },
    types: {
      warehouse: "Industrial unit",
      home: "Home",
      commercial: "Retail premises",
    },
    specs: {
      ref: "Ref.",
      area: "Floor area",
      zone: "Area",
    },
    enquire: "Enquire",
    seeAll: "View the catalogue",
    whatsappMessage: "Hello, I am interested in the property with reference {ref}.",
    empty: {
      title: "Ask about *availability*",
      body: "Our rental portfolio changes frequently. Tell us what you are looking for — an industrial unit or a home, approximate size and area — and we will let you know what we have available.",
      cta: "Ask about availability",
    },
  },
  values: {
    title: "Three words\n*that define us*",
    items: [
      {
        title: "Integrity",
        body: "Forty years in the sector have taught us that trust is earned by doing what was agreed.",
      },
      {
        title: "Honesty",
        body: "We tell you frankly what we think of your property, even when the answer is no.",
      },
      {
        title: "Transparency",
        body: "Every step of the transaction, clearly explained from the very first day.",
      },
    ],
  },
  closing: {
    eyebrow: "Let's talk",
    title: "Thinking of selling\n*your property?*",
    body: "Tell us about your property. We will study it carefully and give you a clear answer.",
    imageAlt: "Terrace of a Mediterranean home at dusk, with the interior lit",
  },
  whatsapp: {
    aria: "Open WhatsApp",
    messages: {
      general: "Hello, I would like to receive more information.",
    },
  },
  footer: {
    tagline: "A family business in Castelldefels. Forty years buying and letting property.",
    navTitle: "Sections",
    servicesTitle: "Services",
    contactTitle: "Contact",
    followTitle: "Follow us",
    cookieSettings: "Cookie preferences",
    rights: "All rights reserved.",
    credit: "Design and development:",
    legalNotice: "Legal notice",
    privacy: "Privacy policy",
    cookies: "Cookie policy",
  },
  localeSwitcher: {
    aria: "Language",
  },
  consent: {
    title: "Cookies",
    body:
      "We use analytics cookies to understand how the site is used. None are activated until you accept.",
    accept: "Accept",
    reject: "Reject",
    link: "More information",
  },
  notFound: {
    title: "Page not found",
    body: "This address does not exist or has changed.",
  },
};
