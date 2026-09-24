import type { ServicesDict } from "@/lib/i18n/types";

export const services: ServicesDict = {
  meta: {
    title: "Services",
    seoTitle: "Services · Tarida MC",
    description: "Meta description of the services index.",
  },
  index: {
    eyebrow: "Services",
    title: "Everything we can do for you",
    intro: "One sentence introducing the catalogue and who it is for.",
    allServices: "All services",
  },
  detail: {
    includesTitle: "What is included",
    faqTitle: "Frequently asked questions",
    otherServices: "Other services",
    requestTitle: "Interested?",
    requestBody: "Tell us what you need and we will prepare a tailored proposal.",
  },
  items: {
    rental: {
      title: "Property rentals",
      shortTitle: "Rentals",
      teaser: "One sentence that sums up the service.",
      metaDescription: "Meta description of the rentals page.",
      intro: "Intro paragraph: what it is, who it is for and what it solves.",
      imageAlt: "Description of the rentals photo",
      includes: [],
      sections: [],
      whatsappMessage: "Hello, I would like information about your properties for rent.",
      cta: "Request information",
    },
    purchase: {
      title: "We buy your property",
      shortTitle: "We buy",
      teaser: "One sentence that sums up the service.",
      metaDescription: "Meta description of the property purchase page.",
      intro: "Intro paragraph: what it is, who it is for and what it solves.",
      imageAlt: "Description of the property purchase photo",
      includes: [],
      sections: [],
      whatsappMessage: "Hello, I would like you to assess buying my property.",
      cta: "Request information",
    },
  },
};
