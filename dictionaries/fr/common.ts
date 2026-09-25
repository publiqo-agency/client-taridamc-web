import type { CommonDict } from "@/lib/i18n/types";

/** French copy. Same shape as dictionaries/es/common.ts; "\n" and *asterisks* as in Spanish. */
export const common: CommonDict = {
  meta: {
    defaultTitle: "Tarida MC",
    description:
      "Tarida MC, entreprise familiale de Castelldefels forte de quarante ans d’expérience dans l’immobilier. Nous achetons des biens immobiliers et louons des locaux industriels et des logements.",
  },
  nav: {
    home: "Accueil",
    services: "Services",
    sell: "Vendre votre bien",
    rent: "Location",
    about: "À propos",
    contact: "Contact",
    menu: "Menu",
    close: "Fermer",
    mainNavAria: "Navigation principale",
    skipToContent: "Aller au contenu",
  },
  cta: {
    contact: "Nous contacter",
    whatsapp: "Écrivez-nous sur WhatsApp",
    back: "Retour à l’accueil",
    allServices: "Voir tous les services",
    learnMore: "En savoir plus",
  },
  brand: {
    yearsLabel: "ans",
    yearsCaption: "dans l’immobilier",
  },
  catalogue: {
    title: "Biens\n*à louer*",
    intro:
      "Locaux industriels et logements à Castelldefels, issus de notre propre patrimoine. Vous traitez directement avec nous.",
    filtersAria: "Filtrer par type de bien",
    filters: {
      all: "Tous",
      warehouse: "Entrepôts",
      home: "Logements",
      commercial: "Commerces",
    },
    types: {
      warehouse: "Local industriel",
      home: "Logement",
      commercial: "Local commercial",
    },
    specs: {
      ref: "Réf.",
      area: "Surface",
      zone: "Secteur",
    },
    enquire: "Se renseigner",
    seeAll: "Voir le catalogue",
    whatsappMessage: "Bonjour, le bien de référence {ref} m’intéresse.",
    empty: {
      title: "Demandez les *disponibilités*",
      body: "Notre offre locative évolue souvent. Dites-nous ce que vous recherchez — entrepôt ou logement, surface approximative et secteur — et nous vous informerons des biens disponibles.",
      cta: "Connaître les disponibilités",
    },
  },
  values: {
    title: "Trois mots\n*qui nous définissent*",
    items: [
      {
        title: "Sérieux",
        body: "Quarante ans de métier nous ont appris que la confiance se gagne en respectant ses engagements.",
      },
      {
        title: "Honnêteté",
        body: "Nous vous disons franchement ce que nous pensons de votre bien, y compris lorsque la réponse est non.",
      },
      {
        title: "Transparence",
        body: "Chaque étape de l’opération, expliquée clairement dès le premier jour.",
      },
    ],
  },
  closing: {
    eyebrow: "Parlons-en",
    title: "Vous pensez à vendre\n*votre bien ?*",
    body: "Dites-nous de quel bien il s’agit. Nous l’étudierons avec attention et vous donnerons une réponse claire.",
    imageAlt: "Terrasse d’une maison méditerranéenne à la tombée de la nuit, intérieur éclairé",
  },
  whatsapp: {
    aria: "Ouvrir WhatsApp",
    messages: {
      general: "Bonjour, je souhaiterais recevoir plus d’informations.",
    },
  },
  footer: {
    tagline: "Entreprise familiale à Castelldefels. Quarante ans à acheter et louer des biens immobiliers.",
    navTitle: "Rubriques",
    servicesTitle: "Services",
    contactTitle: "Contact",
    followTitle: "Suivez-nous",
    cookieSettings: "Préférences cookies",
    rights: "Tous droits réservés.",
    credit: "Conception et développement :",
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
      "Nous utilisons des cookies de mesure d’audience pour comprendre comment le site est utilisé. Aucun n’est activé sans votre accord.",
    accept: "Accepter",
    reject: "Refuser",
    link: "En savoir plus",
  },
  notFound: {
    title: "Page introuvable",
    body: "Cette adresse n’existe pas ou a changé.",
  },
};
