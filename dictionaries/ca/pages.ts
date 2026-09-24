import type { AboutDict, FaqDict } from "@/lib/i18n/types";

export const about: AboutDict = {
  meta: {
    title: "Nosaltres",
    description: "Meta description de la pàgina de nosaltres.",
  },
  hero: {
    eyebrow: "Nosaltres",
    title: "Qui som i per què fem això",
    intro: "Una o dues frases que presenten l'equip o el negoci.",
  },
  sections: [
    {
      heading: "La nostra història",
      body: ["Un paràgraf sobre l'origen del negoci.", "Un altre sobre on és avui."],
    },
    {
      heading: "Com treballem",
      body: ["Un paràgraf sobre la forma de treballar i el que el client pot esperar."],
    },
  ],
};

export const faq: FaqDict = {
  meta: {
    title: "Preguntes freqüents",
    description: "Respostes als dubtes més habituals abans de contactar.",
  },
  hero: {
    eyebrow: "Dubtes",
    title: "Preguntes freqüents",
    intro: "El que més ens pregunten, respost breument.",
  },
  items: [
    {
      question: "Una pregunta habitual?",
      answer: "Una resposta breu i directa. Aquest text és exactament el que s'emet al FAQPage del JSON-LD.",
    },
    {
      question: "Una altra pregunta habitual?",
      answer: "Una altra resposta breu.",
    },
    {
      question: "Com se sol·licita un pressupost?",
      answer: "Pel formulari de contacte o per WhatsApp. Responem en menys de 24 hores laborables.",
    },
  ],
};
