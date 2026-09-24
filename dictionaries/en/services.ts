import type { ServicesDict } from "@/lib/i18n/types";

/** English services copy. Same shape as dictionaries/es/services.ts. */
export const services: ServicesDict = {
  meta: {
    title: "Services",
    seoTitle: "Property purchase and rentals in Castelldefels · Tarida MC",
    description:
      "We buy properties directly from their owners and let industrial units and homes in Castelldefels.",
  },
  index: {
    eyebrow: "Services",
    title: "Buying and letting,\n*with the same judgement*",
    intro:
      "Two activities, one way of working: studying every property carefully and treating every client with candour.",
    allServices: "All services",
  },
  detail: {
    includesTitle: "What we assess",
    faqTitle: "Frequently asked questions",
    otherServices: "Other service",
    requestTitle: "Interested?",
    requestBody: "Tell us what you need and we will reply to you personally.",
  },
  items: {
    purchase: {
      title: "We buy your property",
      shortTitle: "Sell a property",
      teaser:
        "If you own a property and wish to sell it, we study the transaction and, if it is a good fit, we buy it from you.",
      metaDescription:
        "Tarida MC buys properties directly from their owners in Castelldefels. We analyse every asset and, if the opportunity fits, present you with a purchase offer.",
      intro:
        "We buy properties directly from their owners. We analyse every asset in detail and, when the opportunity matches what we are looking for, we present a purchase offer. With the integrity of a family business with forty years in the sector.",
      imageAlt: "Façade of a Mediterranean home in warm light",
      includes: [
        "Location and surroundings",
        "Property type and floor area",
        "Condition",
        "Land registry and planning status",
        "Potential of the asset",
      ],
      sections: [
        {
          heading: "You present the property",
          body: ["Tell us about your property: type, location, floor area and current situation. Via the form or on WhatsApp."],
        },
        {
          heading: "We analyse the asset",
          body: ["We study the property and its potential with the experience of forty years in the market."],
        },
        {
          heading: "We give you an answer",
          body: ["If the opportunity interests us, we present you with a purchase offer. If not, we tell you just as clearly."],
        },
        {
          heading: "We complete the transaction",
          body: ["We guide you through every step until signing, with complete transparency."],
        },
      ],
      whatsappMessage: "Hello, I would like you to consider purchasing my property.",
      cta: "Offer my property",
    },
    rental: {
      title: "Industrial units and homes to let",
      shortTitle: "Rent a property",
      teaser: "Industrial units and homes in Castelldefels, from our own portfolio.",
      metaDescription:
        "Industrial units and homes to let in Castelldefels for businesses and individuals. Properties from Tarida MC's own portfolio, dealt with directly.",
      intro:
        "We let industrial units and homes in Castelldefels to businesses and individuals. They are properties from our own portfolio: we know them well and you deal with us directly.",
      imageAlt: "Bright, open-plan industrial unit",
      includes: [],
      sections: [],
      whatsappMessage: "Hello, I would like information about your properties to let.",
      cta: "Ask about availability",
    },
  },
};
