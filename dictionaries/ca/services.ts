import type { ServicesDict } from "@/lib/i18n/types";

export const services: ServicesDict = {
  meta: {
    title: "Serveis",
    seoTitle: "Serveis · Tarida MC",
    description: "Meta description de l'índex de serveis.",
  },
  index: {
    eyebrow: "Serveis",
    title: "Tot el que podem fer per vostè",
    intro: "Una frase que presenta el catàleg i a qui va dirigit.",
    allServices: "Tots els serveis",
  },
  detail: {
    includesTitle: "Què inclou",
    faqTitle: "Preguntes freqüents",
    otherServices: "Altres serveis",
    requestTitle: "Li interessa?",
    requestBody: "Digui'ns què necessita i li preparem una proposta a mida.",
  },
  items: {
    rental: {
      title: "Lloguer d'immobles",
      shortTitle: "Lloguer",
      teaser: "Una frase que resumeix el servei.",
      metaDescription: "Meta description de la fitxa de lloguer.",
      intro: "Paràgraf d'introducció: què és, per a qui i què resol.",
      imageAlt: "Descripció de la foto de lloguer",
      includes: [],
      sections: [],
      whatsappMessage: "Hola, m'interessa informació sobre els seus immobles en lloguer.",
      cta: "Sol·licitar informació",
    },
    purchase: {
      title: "Li comprem el seu immoble",
      shortTitle: "Compra",
      teaser: "Una frase que resumeix el servei.",
      metaDescription: "Meta description de la fitxa de compra.",
      intro: "Paràgraf d'introducció: què és, per a qui i què resol.",
      imageAlt: "Descripció de la foto de compra",
      includes: [],
      sections: [],
      whatsappMessage: "Hola, voldria que valoressin la compra del meu immoble.",
      cta: "Sol·licitar informació",
    },
  },
};
