import type { CommonDict } from "@/lib/i18n/types";

export const common: CommonDict = {
  meta: {
    defaultTitle: "Tarida MC",
    description:
      "Description en une phrase de l'entreprise, ce qu'elle fait et pour qui. C'est la meta description par défaut de tout le site.",
  },
  nav: {
    home: "Accueil",
    services: "Services",
    about: "À propos",
    faq: "Questions fréquentes",
    contact: "Contact",
    menu: "Menu",
    close: "Fermer",
    mainNavAria: "Navigation principale",
    skipToContent: "Passer au contenu",
  },
  cta: {
    contact: "Nous contacter",
    whatsapp: "Écrivez-nous sur WhatsApp",
    back: "Retour à l'accueil",
    allServices: "Voir tous les services",
    learnMore: "En savoir plus",
  },
  whatsapp: {
    aria: "Ouvrir WhatsApp",
    messages: {
      general: "Bonjour, je souhaiterais recevoir plus d'informations.",
    },
  },
  footer: {
    tagline: "Une phrase qui résume la proposition de l'entreprise.",
    navTitle: "Sections",
    servicesTitle: "Services",
    contactTitle: "Contact",
    followTitle: "Suivez-nous",
    cookieSettings: "Préférences de cookies",
    rights: "Tous droits réservés.",
    credit: "Site par",
    legalNotice: "Mentions légales",
    privacy: "Politique de confidentialité",
    cookies: "Politique de cookies",
  },
  localeSwitcher: {
    aria: "Langue",
  },
  consent: {
    title: "Cookies",
    body:
      "Nous utilisons des cookies de mesure d'audience pour comprendre comment le site est utilisé. Aucun n'est activé avant que vous n'acceptiez.",
    accept: "Accepter",
    reject: "Refuser",
    link: "En savoir plus",
  },
  notFound: {
    title: "Page non trouvée",
    body: "Cette adresse n'existe pas ou a changé.",
  },
};
