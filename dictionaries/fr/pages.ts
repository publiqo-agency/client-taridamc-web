import type { AboutDict } from "@/lib/i18n/types";

/** French copy for the about page. Same shape as dictionaries/es/pages.ts. */
export const about: AboutDict = {
  meta: {
    title: "À propos",
    description:
      "Tarida MC est une entreprise familiale de Castelldefels forte de quarante ans d’expérience dans l’immobilier, dirigée par Ramon Seva.",
  },
  hero: {
    eyebrow: "À propos",
    title: "Une entreprise familiale,\n*quarante ans après*",
    intro:
      "Nous achetons et louons des biens immobiliers à Castelldefels avec la même façon de travailler qu’à nos débuts : sérieux, honnêteté et transparence.",
    imageAlt: "Intérieur méditerranéen serein aux grandes baies vitrées",
  },
  sections: [
    {
      heading: "Notre histoire",
      body: [
        "Tarida MC est une entreprise familiale dédiée à l’immobilier. Quatre décennies plus tard, nous sommes restés une petite structure, ce qui nous permet de connaître de près chaque bien et chaque client.",
        "Aujourd’hui, nous achetons des biens à des propriétaires qui souhaitent vendre et louons des locaux industriels et des logements issus de notre propre patrimoine.",
      ],
    },
    {
      heading: "Notre façon de travailler",
      body: [
        "Nous étudions chaque opération sans précipitation et répondons avec clarté, quelle que soit la réponse. Le sérieux, l’honnêteté et la transparence ne sont pas un slogan : c’est ainsi que nous avons toujours travaillé.",
      ],
    },
  ],
  storyImageAlt: "Mur blanchi à la chaux et volets en bois sous la lumière méditerranéenne",
  leader: {
    eyebrow: "Direction",
    name: "Ramon Seva",
    role: "À la tête de Tarida MC",
    body: "Dans une entreprise familiale, la personne qui vous reçoit est celle qui connaît chaque bien.",
  },
  place: {
    eyebrow: "Castelldefels",
    title: "Notre *territoire*",
    body: "Nous travaillons depuis Castelldefels, entre la mer et le massif du Garraf. Nous connaissons son marché immobilier, car nous en faisons partie depuis quarante ans.",
    imageAlt: "Côte méditerranéenne bordée de pins au coucher du soleil",
    sea: "Mer Méditerranée",
  },
};
