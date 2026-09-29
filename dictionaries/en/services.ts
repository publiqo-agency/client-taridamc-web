import type { ServicesDict } from "@/lib/i18n/types";

/** English services copy. Same shape as dictionaries/es/services.ts. */
export const services: ServicesDict = {
  hubs: {
    sale: {
      title: "Sell",
      seoTitle: "Sell your flat, house or unit in Spain | Tarida MC",
      description:
        "We buy flats, houses and industrial units anywhere in Spain. We study every property carefully and give you a clear answer.",
      eyebrow: "Sell",
      heroTitle: "Sell your property\n*directly*",
      imageAlt: "White wall with a wooden door and an olive tree",
      introLabel: "We buy property",
      intro:
        "We buy flats, houses and industrial units anywhere in Spain. We study every property carefully and treat every owner with candour: a clear answer, without detours.",
      closing: {
        title: "Thinking of selling\n*your property?*",
        body: "Tell us about your property. We will study it carefully and give you a clear answer.",
      },
      cta: "Offer my property",
      whatsappMessage: "Hello, I would like you to consider purchasing my property.",
    },
    rental: {
      title: "To let",
      seoTitle: "Units and homes to let in Castelldefels | Tarida MC",
      description:
        "Industrial units and homes to let in Castelldefels, from our own portfolio. Dealt with directly by the owner.",
      eyebrow: "To let",
      heroTitle: "Industrial units\n*and homes to let*",
      imageAlt: "Whitewashed Mediterranean house among cypresses",
      introLabel: "Our portfolio",
      intro:
        "We let industrial units and homes from our own portfolio in Castelldefels. You deal directly with the owner, with the seriousness of forty years in the sector.",
      closing: {
        title: "Looking for a unit\n*or a home?*",
        body: "Tell us what you are looking for — approximate size and area — and we will let you know what we have available.",
      },
      cta: "Ask about availability",
      whatsappMessage: "Hello, I am looking for a property to rent.",
    },
  },
  detail: {
    faqTitle: "Frequently\n*asked questions*",
    otherServices: "Related",
    requestBody: "Tell us what you need and we will reply to you personally.",
  },
  items: {
    purchase: {
      title: "We buy your flat or house",
      shortTitle: "Sell a flat or a house",
      kicker: "For owners",
      heroTitle: "We buy\n*your flat or house*",
      seoTitle: "We buy your flat or house anywhere in Spain | Tarida MC",
      teaser:
        "If you own a flat or a house and wish to sell it, we study the transaction and, if it is a good fit, we buy it from you directly, anywhere in Spain.",
      metaDescription:
        "We buy flats and houses directly from their owners anywhere in Spain. We analyse every property and, if it fits, make you a purchase offer.",
      intro:
        "We buy flats and houses directly from their owners, anywhere in Spain. We analyse every property in detail and, when the transaction makes sense, we present you with a purchase offer. No intermediaries, with the integrity of a family business with forty years in the sector.",
      imageAlt: "Tiled eave and shutter of a Mediterranean house in warm light",
      learnMore: "How we buy",
      includesTitle: "What we assess",
      includes: [
        "Location and surroundings",
        "Property type and floor area",
        "Condition",
        "Land registry and planning status",
        "Potential of the asset",
      ],
      process: {
        title: "How a direct\n*purchase works*",
        intro: "Once you offer us a property, you always know what stage the transaction has reached.",
      },
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
          body: ["If the transaction interests us, we present you with a purchase offer. If not, we tell you just as clearly."],
        },
        {
          heading: "We complete the transaction",
          body: ["We guide you through every step until signing before a notary, with complete transparency."],
        },
      ],
      scope: {
        title: "What we buy",
        body: [
          "Flats, houses and industrial units, anywhere in Spain. Our head office is in Castelldefels, but we consider properties across the whole country.",
          "Also when the property is let, inherited, in need of renovation or carries a mortgage or charges: we study it all the same, and its situation is reflected in the offer.",
        ],
      },
      comparison: {
        title: "A direct sale\n*or an agency*",
        intro: "They are two different routes, and each has its moment. This is how they differ.",
        columns: ["Direct sale to Tarida MC", "Sale through an agency"],
        rows: [
          { label: "Who buys", values: ["We do, directly", "A buyer the agency finds on the market"] },
          { label: "Who you deal with", values: ["The buyer, from start to finish", "The agency, between you and each party"] },
          { label: "Viewings", values: ["Those needed to assess the property", "One for each prospective buyer"] },
          { label: "Price", values: ["An offer based on our analysis of the asset", "Whatever a buyer on the market accepts"] },
          { label: "When it suits you", values: ["If you prefer certainty and one counterpart", "If you want the market price and can wait"] },
        ],
      },
      faq: [
        {
          question: "What kind of properties do you buy?",
          answer:
            "Flats, houses and industrial units. If you have another kind of property, tell us anyway and we will say candidly whether it fits.",
        },
        {
          question: "Where do you buy?",
          answer:
            "Anywhere in Spain. Our head office is in Castelldefels, but we consider properties across the whole country.",
        },
        {
          question: "Do you buy let, inherited or run-down properties, or ones with charges?",
          answer:
            "Yes. We study them like any other property: their situation is part of the analysis and is reflected in the offer.",
        },
        {
          question: "How do you value a property?",
          answer:
            "We look at the location and surroundings, the property type and floor area, its condition, its land registry and planning status, and the potential of the asset.",
        },
        {
          question: "Do you always make an offer?",
          answer:
            "No. Only when the transaction fits what we are looking for. If it does not, we tell you just as clearly, without wasting your time.",
        },
        {
          question: "Are you an agency or an intermediary?",
          answer:
            "No. If we reach an agreement, the buyer is Tarida MC. You deal directly with us from start to finish.",
        },
        {
          question: "How long does the transaction take?",
          answer:
            "It depends on the property, its paperwork and its situation. We will not give you a deadline we cannot keep: we will tell you at every moment what stage the transaction has reached.",
        },
        {
          question: "How do I start?",
          answer:
            "Write to us through the form or on WhatsApp with the property type, its location, floor area and situation. We will study it and reply to you personally.",
        },
      ],
      closing: {
        title: "Thinking of selling\n*your flat or house?*",
        body: "Tell us about your property. We will study it carefully and give you a clear answer.",
      },
      whatsappMessage: "Hello, I would like you to consider purchasing my property.",
      cta: "Offer my property",
    },
    "purchase-warehouses": {
      title: "We buy industrial units",
      shortTitle: "Sell an industrial unit",
      kicker: "For owners of industrial units",
      heroTitle: "We buy\n*industrial units*",
      seoTitle: "We buy industrial units anywhere in Spain | Tarida MC",
      teaser:
        "If you own an industrial unit and wish to sell it, vacant or let, we study it and, if it is a good fit, we buy it from you directly.",
      metaDescription:
        "We buy industrial units from their owners anywhere in Spain, vacant or let. We analyse every unit and, if it fits, make you an offer.",
      intro:
        "We buy industrial units directly from their owners, anywhere in Spain, vacant or with a tenant. We know this kind of asset because we also let units from our own portfolio: we analyse each one in detail and, when the transaction makes sense, we present you with a purchase offer.",
      imageAlt: "Open-plan interior of an industrial unit with a steel frame and skylights",
      learnMore: "How we buy industrial units",
      includesTitle: "What we assess\n*in a unit*",
      includes: [
        "Location and access",
        "Built area and plot size",
        "Condition of the building and services",
        "Land registry and planning status",
        "Whether it is vacant or let",
      ],
      process: {
        title: "How the purchase\n*of your unit works*",
        intro: "A clear process, with a single counterpart from start to finish.",
      },
      sections: [
        {
          heading: "You present the unit",
          body: ["Location, floor area, condition and whether it is vacant or let. Via the form or on WhatsApp."],
        },
        {
          heading: "We analyse the asset",
          body: ["We study the unit, its surroundings and its potential with the experience of forty years in the sector."],
        },
        {
          heading: "We give you an answer",
          body: ["If the transaction interests us, we present you with a purchase offer. If not, we tell you just as clearly."],
        },
        {
          heading: "We complete the transaction",
          body: ["We guide you through every step until signing before a notary, with complete transparency."],
        },
      ],
      scope: {
        title: "Which units we buy",
        body: [
          "Industrial units anywhere in Spain, vacant or with a tenant. Our head office is in Castelldefels, but we consider units across the whole country.",
          "Also when the unit needs renovation or carries a mortgage or charges: its situation is part of the analysis and is reflected in the offer.",
        ],
      },
      faq: [
        {
          question: "Do you buy units that are let?",
          answer:
            "Yes. If the unit has a tenant, the current lease is part of the analysis and is reflected in the offer.",
        },
        {
          question: "Where do you buy industrial units?",
          answer:
            "Anywhere in Spain. Our head office is in Castelldefels, but we consider units across the whole country.",
        },
        {
          question: "What do you assess in an industrial unit?",
          answer:
            "Location and access, built area and plot size, the condition of the building and services, its land registry and planning status, and whether it is vacant or let.",
        },
        {
          question: "Do you always make an offer?",
          answer:
            "No. Only when the transaction fits what we are looking for. If it does not, we tell you just as clearly, without wasting your time.",
        },
        {
          question: "Are you an agency or an intermediary?",
          answer:
            "No. If we reach an agreement, the buyer of the unit is Tarida MC. You deal directly with us from start to finish.",
        },
        {
          question: "How long does the transaction take?",
          answer:
            "It depends on the unit, its paperwork and its situation. We will not give you a deadline we cannot keep: we will tell you at every moment what stage the transaction has reached.",
        },
        {
          question: "How do I start?",
          answer:
            "Write to us through the form or on WhatsApp with the location of the unit, its floor area, its condition and whether it is vacant or let. We will study it and reply to you personally.",
        },
      ],
      closing: {
        title: "Thinking of selling\n*your unit?*",
        body: "Tell us about it. We will study it carefully and give you a clear answer.",
      },
      whatsappMessage: "Hello, I would like you to consider purchasing my industrial unit.",
      cta: "Offer my unit",
    },
    "rental-warehouses": {
      title: "Industrial units to let",
      shortTitle: "Rent an industrial unit",
      kicker: "For businesses",
      heroTitle: "Industrial units\n*to let*",
      seoTitle: "Industrial units to let in Castelldefels | Tarida MC",
      teaser: "Industrial units in Castelldefels from our own portfolio, dealt with directly by the owner.",
      metaDescription:
        "Industrial units to let in Castelldefels, from Tarida MC's own portfolio. Deal directly with the owner, with no intermediaries.",
      intro:
        "We let industrial units from our own portfolio in Castelldefels. We know them well because they are ours: we tell you clearly what is available and you deal directly with the owner, with no intermediaries.",
      imageAlt: "Bright, open-plan industrial unit with a white steel frame",
      learnMore: "See units to let",
      includesTitle: "What we offer",
      includes: [
        "Units from our own portfolio",
        "Direct dealings with the owner",
        "Clear information on availability",
        "A personal reply to every enquiry",
      ],
      process: {
        title: "How to rent\n*a unit*",
        intro: "No intermediaries: you speak with the owner from the first enquiry.",
      },
      sections: [
        {
          heading: "Tell us what you need",
          body: ["Approximate floor area, intended use and when you need it. Via the form or on WhatsApp."],
        },
        {
          heading: "We tell you what is available",
          body: ["We tell you clearly which of our units match what you are looking for."],
        },
        {
          heading: "You view the unit",
          body: ["We show you the unit and answer your questions about the property."],
        },
        {
          heading: "We sign the lease",
          body: ["Once everything is clear, we formalise the lease directly with you."],
        },
      ],
      faq: [
        {
          question: "Do you let directly, without an agency?",
          answer: "Yes. The units belong to our own portfolio: you deal directly with the owner, with no intermediaries.",
        },
        {
          question: "Where are the units?",
          answer: "In Castelldefels. If you are looking in another area, tell us anyway and we will let you know what we have.",
        },
        {
          question: "What information do you need to start?",
          answer:
            "The approximate floor area, what you will use the unit for and when you need it. With that we can tell you what is available.",
        },
        {
          question: "How do I find out which units are available?",
          answer:
            "Our portfolio changes often. Write to us through the form or on WhatsApp and we will reply personally with what we have.",
        },
      ],
      closing: {
        title: "Looking for\n*a unit to rent?*",
        body: "Tell us what you need (floor area, use and date) and we will let you know what we have available.",
      },
      whatsappMessage: "Hello, I am looking for an industrial unit to rent.",
      cta: "Ask about availability",
    },
    "rental-homes": {
      title: "Flats and houses to let",
      shortTitle: "Rent a home",
      kicker: "For individuals",
      heroTitle: "Flats and houses\n*to let*",
      seoTitle: "Flats and houses to let in Castelldefels | Tarida MC",
      teaser: "Flats and houses in Castelldefels from our own portfolio, dealt with directly by the owner.",
      metaDescription:
        "Flats and houses to let in Castelldefels, from Tarida MC's own portfolio. Deal directly with the owner, with no intermediaries.",
      intro:
        "We let flats and houses from our own portfolio in Castelldefels. We know them well because they are ours: we tell you clearly what is available and you deal directly with the owner, with no intermediaries.",
      imageAlt: "Whitewashed Mediterranean house among cypresses",
      learnMore: "See homes to let",
      includesTitle: "What we offer",
      includes: [
        "Homes from our own portfolio",
        "Direct dealings with the owner",
        "Clear information on availability",
        "A personal reply to every enquiry",
      ],
      process: {
        title: "How to rent\n*a home*",
        intro: "No intermediaries: you speak with the owner from the first enquiry.",
      },
      sections: [
        {
          heading: "Tell us what you need",
          body: ["Type of home, number of bedrooms and when you need it. Via the form or on WhatsApp."],
        },
        {
          heading: "We tell you what is available",
          body: ["We tell you clearly which of our homes match what you are looking for."],
        },
        {
          heading: "You view the home",
          body: ["We show you the home and answer your questions."],
        },
        {
          heading: "We sign the lease",
          body: ["Once everything is clear, we formalise the lease directly with you."],
        },
      ],
      faq: [
        {
          question: "Do you let directly, without an agency?",
          answer: "Yes. The homes belong to our own portfolio: you deal directly with the owner, with no intermediaries.",
        },
        {
          question: "Where are the homes?",
          answer: "In Castelldefels. If you are looking in another area, tell us anyway and we will let you know what we have.",
        },
        {
          question: "What information do you need to start?",
          answer:
            "The type of home you are looking for, the number of bedrooms and when you need it. With that we can tell you what is available.",
        },
        {
          question: "How do I find out which homes are available?",
          answer:
            "Our portfolio changes often. Write to us through the form or on WhatsApp and we will reply personally with what we have.",
        },
      ],
      closing: {
        title: "Looking for\n*a home to rent?*",
        body: "Tell us what you need (type of home, bedrooms and date) and we will let you know what we have available.",
      },
      whatsappMessage: "Hello, I am looking for a home to rent.",
      cta: "Ask about availability",
    },
  },
};
