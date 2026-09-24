/** Catalan copy for the about page. Same shape as dictionaries/es/pages.ts. */
import type { AboutDict } from "@/lib/i18n/types";

export const about: AboutDict = {
  meta: {
    title: "Nosaltres",
    description:
      "Tarida MC és una empresa familiar de Castelldefels amb quaranta anys al sector immobiliari, dirigida per Ramon Seva.",
  },
  hero: {
    eyebrow: "Nosaltres",
    title: "Una empresa familiar,\n*quaranta anys després*",
    intro:
      "Comprem i lloguem immobles a Castelldefels amb la mateixa manera de treballar de sempre: serietat, honestedat i transparència.",
    imageAlt: "Interior mediterrani serè amb grans finestrals",
  },
  sections: [
    {
      heading: "La nostra història",
      body: [
        "Tarida MC és una empresa familiar dedicada als immobles. Quatre dècades després, continuem sent una empresa petita, i això ens permet conèixer de prop cada propietat i cada client.",
        "Avui comprem immobles a propietaris que volen vendre i lloguem naus industrials i habitatges de la nostra pròpia cartera.",
      ],
    },
    {
      heading: "Com treballem",
      body: [
        "Estudiem cada operació amb calma i responem amb claredat, sigui quina sigui la resposta. La serietat, l'honestedat i la transparència no són un eslògan: són la manera com sempre hem treballat.",
      ],
    },
  ],
  storyImageAlt: "Mur emblanquinat i finestrons de fusta sota la llum mediterrània",
  leader: {
    eyebrow: "Al capdavant",
    name: "Ramon Seva",
    role: "Al capdavant de Tarida MC",
    body: "En una empresa familiar, qui l'atén és qui coneix cada immoble.",
  },
  place: {
    eyebrow: "Castelldefels",
    title: "El nostre *lloc*",
    body: "Treballem des de Castelldefels, entre el mar i el massís del Garraf. Coneixem el seu mercat immobiliari perquè fa quaranta anys que en formem part.",
    imageAlt: "Costa mediterrània amb pins a la posta de sol",
    sea: "Mar Mediterrània",
  },
};
