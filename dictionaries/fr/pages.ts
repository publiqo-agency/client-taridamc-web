import type { AboutDict } from "@/lib/i18n/types";

/** French copy for the about page. Same shape as dictionaries/es/pages.ts. */
export const about: AboutDict = {
  meta: {
    title: "À propos",
    seoTitle: "À propos : 40 ans d’immobilier en famille | Tarida MC",
    description:
      "Entreprise familiale dirigée par Ramon Seva, Tarida MC a quarante ans d’expérience dans l’immobilier. Basée à Castelldefels, elle achète en Espagne.",
  },
  hero: {
    eyebrow: "À propos",
    title: "Une entreprise familiale,\n*quarante ans après*",
    intro:
      "Basés à Castelldefels, nous achetons des biens partout en Espagne et louons les nôtres, avec la même façon de travailler qu’à nos débuts : sérieux, honnêteté et transparence.",
    imageAlt: "Enfilade d’arcs blanchis à la chaux menant à une vieille porte en bois",
  },
  sections: [
    {
      heading: "Notre histoire",
      body: [
        "Tarida MC est une entreprise familiale dédiée à l’immobilier. Quatre décennies plus tard, nous sommes restés une petite structure, ce qui nous permet de connaître de près chaque bien et chaque client.",
        "Aujourd’hui, nous achetons appartements, maisons et entrepôts à des propriétaires qui souhaitent vendre, partout en Espagne, et louons des entrepôts et des logements issus de notre propre patrimoine.",
      ],
    },
    {
      heading: "Notre façon de travailler",
      body: [
        "Nous étudions chaque opération sans précipitation et répondons avec clarté, quelle que soit la réponse. Le sérieux, l’honnêteté et la transparence ne sont pas un slogan : c’est ainsi que nous avons toujours travaillé.",
      ],
    },
  ],
  servicesTitle: "Ce que nous faisons",
  storyImageAlt: "Porte cochère en bois ouverte sous un arc en pierre",
  leader: {
    name: "Ramon Seva",
    portraitAlt: "Portrait de Ramon Seva",
    role: "À la tête de Tarida MC",
    body: "Dans une entreprise familiale, la personne qui vous reçoit est celle qui connaît chaque bien.",
  },
  place: {
    eyebrow: "Notre siège",
    title: "De Castelldefels,\n*à toute l’Espagne*",
    body: "Notre siège est à Castelldefels, entre la mer et le massif du Garraf, où se trouve aussi notre patrimoine locatif. D’ici, nous achetons appartements, maisons et entrepôts partout en Espagne.",
    imageAlt: "Plage de Castelldefels au coucher du soleil, avec le massif du Garraf au loin",
  },
};
