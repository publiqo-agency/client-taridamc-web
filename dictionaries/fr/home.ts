import type { HomeDict } from "@/lib/i18n/types";

export const home: HomeDict = {
  meta: {
    title: "Accueil",
    seoTitle: "Tarida MC · Ce qu'elle fait, où elle le fait",
    description:
      "Meta description de l'accueil : la proposition de valeur en une phrase et un appel à l'action.",
  },
  hero: {
    eyebrow: "Ce que nous faisons",
    title: "Titre d'accueil qui dit ce que propose l'entreprise",
    intro:
      "Deux ou trois phrases qui expliquent la proposition de valeur, à qui elle s'adresse et ce qui la distingue. À remplacer par le texte du client.",
    ctaPrimary: "Contactez-nous",
    ctaSecondary: "Voir les services",
  },
  services: {
    eyebrow: "Services",
    title: "Ce que nous proposons",
    intro: "Une phrase qui présente le catalogue de services.",
  },
  about: {
    eyebrow: "À propos",
    title: "Qui sommes-nous",
    body: [
      "Un paragraphe sur l'entreprise : qui est derrière, depuis quand et ce qu'elle défend.",
      "Un second paragraphe sur la façon de travailler ou ce qui distingue l'équipe.",
    ],
    cta: "Faites notre connaissance",
  },
  faq: {
    eyebrow: "Questions",
    title: "Questions fréquentes",
  },
  contact: {
    title: "On en discute ?",
    body: "Dites-nous ce dont vous avez besoin et nous vous répondrons en moins de 24 heures.",
    cta: "Nous contacter",
  },
};
