import type { ServicesDict } from "@/lib/i18n/types";

export const services: ServicesDict = {
  meta: {
    title: "Services",
    seoTitle: "Services · Tarida MC",
    description: "Meta description de l'index des services.",
  },
  index: {
    eyebrow: "Services",
    title: "Tout ce que nous pouvons faire pour vous",
    intro: "Une phrase qui présente le catalogue et à qui il s'adresse.",
    allServices: "Tous les services",
  },
  detail: {
    includesTitle: "Ce qui est inclus",
    faqTitle: "Questions fréquentes",
    otherServices: "Autres services",
    requestTitle: "Intéressé ?",
    requestBody: "Dites-nous ce dont vous avez besoin et nous préparerons une proposition sur mesure.",
  },
  items: {
    rental: {
      title: "Location de biens immobiliers",
      shortTitle: "Location",
      teaser: "Une phrase qui résume le service.",
      metaDescription: "Meta description de la page de location.",
      intro: "Paragraphe d'introduction : ce que c'est, à qui cela s'adresse et ce que cela résout.",
      imageAlt: "Description de la photo de location",
      includes: [],
      sections: [],
      whatsappMessage: "Bonjour, je souhaiterais des informations sur vos biens en location.",
      cta: "Demander des informations",
    },
    purchase: {
      title: "Nous achetons votre bien",
      shortTitle: "Achat",
      teaser: "Une phrase qui résume le service.",
      metaDescription: "Meta description de la page d'achat de bien.",
      intro: "Paragraphe d'introduction : ce que c'est, à qui cela s'adresse et ce que cela résout.",
      imageAlt: "Description de la photo d'achat",
      includes: [],
      sections: [],
      whatsappMessage: "Bonjour, je souhaiterais que vous estimiez l'achat de mon bien.",
      cta: "Demander des informations",
    },
  },
};
