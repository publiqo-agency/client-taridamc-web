import type { HomeDict } from "@/lib/i18n/types";

export const home: HomeDict = {
  meta: {
    title: "Inici",
    seoTitle: "Tarida MC · Què fa, on ho fa",
    description:
      "Meta description de la portada: proposta de valor en una frase i una crida a l'acció.",
  },
  hero: {
    eyebrow: "Què fem",
    title: "Titular de portada que diu què ofereix el negoci",
    intro:
      "Dues o tres frases que expliquen la proposta de valor, per a qui és i què la fa diferent. Substituir pel copy del client.",
    ctaPrimary: "Sol·liciti informació",
    ctaSecondary: "Veure serveis",
  },
  services: {
    eyebrow: "Serveis",
    title: "El que oferim",
    intro: "Una frase que presenta el catàleg de serveis.",
  },
  about: {
    eyebrow: "Nosaltres",
    title: "Qui som",
    body: [
      "Un paràgraf sobre el negoci: qui hi ha darrere, des de quan i què defensa.",
      "Un segon paràgraf sobre la forma de treballar o el que diferencia l'equip.",
    ],
    cta: "Conegui'ns",
  },
  faq: {
    eyebrow: "Dubtes",
    title: "Preguntes freqüents",
  },
  contact: {
    title: "Parlem?",
    body: "Digui'ns què necessita i li responem en menys de 24 hores.",
    cta: "Contactar",
  },
};
