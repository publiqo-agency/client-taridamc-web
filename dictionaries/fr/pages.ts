import type { AboutDict, FaqDict } from "@/lib/i18n/types";

export const about: AboutDict = {
  meta: {
    title: "À propos",
    description: "Meta description de la page à propos.",
  },
  hero: {
    eyebrow: "À propos",
    title: "Qui nous sommes et pourquoi nous faisons cela",
    intro: "Une ou deux phrases qui présentent l'équipe ou l'entreprise.",
  },
  sections: [
    {
      heading: "Notre histoire",
      body: ["Un paragraphe sur les débuts de l'entreprise.", "Un autre sur où elle se trouve aujourd'hui."],
    },
    {
      heading: "Notre façon de travailler",
      body: ["Un paragraphe sur la façon de travailler et ce qu'un client peut attendre."],
    },
  ],
};

export const faq: FaqDict = {
  meta: {
    title: "Questions fréquentes",
    description: "Réponses aux questions les plus courantes avant de nous contacter.",
  },
  hero: {
    eyebrow: "Questions",
    title: "Questions fréquentes",
    intro: "Ce qu'on nous demande le plus souvent, en bref.",
  },
  items: [
    {
      question: "Une question fréquente ?",
      answer: "Une réponse courte et directe. Ce texte est exactement celui émis dans le FAQPage JSON-LD.",
    },
    {
      question: "Une autre question fréquente ?",
      answer: "Une autre réponse courte.",
    },
    {
      question: "Comment demander un devis ?",
      answer: "Via le formulaire de contact ou par WhatsApp. Nous répondons en moins de 24 heures ouvrées.",
    },
  ],
};
