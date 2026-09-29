/** Catalan copy for the about page. Same shape as dictionaries/es/pages.ts. */
import type { AboutDict } from "@/lib/i18n/types";

export const about: AboutDict = {
  meta: {
    title: "Nosaltres",
    seoTitle: "Nosaltres: empresa familiar, 40 anys al sector | Tarida MC",
    description:
      "Tarida MC és una empresa familiar amb quaranta anys al sector immobiliari, dirigida per Ramon Seva. Amb seu a Castelldefels, compra a tota Espanya.",
  },
  hero: {
    eyebrow: "Nosaltres",
    title: "Una empresa familiar,\n*quaranta anys després*",
    intro:
      "Amb seu a Castelldefels, comprem immobles a tota Espanya i lloguem els de la nostra pròpia cartera, amb la mateixa manera de treballar de sempre: serietat, honestedat i transparència.",
    imageAlt: "Successió d'arcs emblanquinats que porten a una antiga porta de fusta",
  },
  sections: [
    {
      heading: "La nostra història",
      body: [
        "Tarida MC és una empresa familiar dedicada als immobles. Quatre dècades després, continuem sent una empresa petita, i això ens permet conèixer de prop cada propietat i cada client.",
        "Avui comprem pisos, cases i naus industrials a propietaris que volen vendre, a qualsevol punt d'Espanya, i lloguem naus i habitatges de la nostra pròpia cartera.",
      ],
    },
    {
      heading: "Com treballem",
      body: [
        "Estudiem cada operació amb calma i responem amb claredat, sigui quina sigui la resposta. La serietat, l'honestedat i la transparència no són un eslògan: són la manera com sempre hem treballat.",
      ],
    },
  ],
  servicesTitle: "Què fem",
  storyImageAlt: "Portalada de fusta oberta sota un arc de pedra",
  leader: {
    name: "Ramon Seva",
    portraitAlt: "Retrat de Ramon Seva",
    role: "Al capdavant de Tarida MC",
    body: "En una empresa familiar, qui l'atén és qui coneix cada immoble.",
  },
  place: {
    eyebrow: "La nostra seu",
    title: "Des de Castelldefels,\n*a tota Espanya*",
    body: "Tenim la seu a Castelldefels, entre el mar i el massís del Garraf, on també hi ha la nostra cartera de lloguer. Des d'aquí comprem pisos, cases i naus industrials a tota Espanya.",
    imageAlt: "Platja de Castelldefels a la posta de sol, amb el massís del Garraf al fons",
  },
};
