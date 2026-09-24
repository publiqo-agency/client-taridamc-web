import type { ServicesDict } from "@/lib/i18n/types";

/** French copy for the services. Same shape as dictionaries/es/services.ts. */
export const services: ServicesDict = {
  meta: {
    title: "Services",
    seoTitle: "Achat et location de biens immobiliers à Castelldefels · Tarida MC",
    description:
      "Nous achetons des biens directement à leurs propriétaires et louons des locaux industriels et des logements à Castelldefels.",
  },
  index: {
    eyebrow: "Services",
    title: "Acheter et louer,\n*avec la même exigence*",
    intro:
      "Deux activités, une seule façon de travailler : étudier chaque bien avec attention et traiter chaque client avec franchise.",
    allServices: "Tous les services",
  },
  detail: {
    includesTitle: "Ce que nous évaluons",
    faqTitle: "Questions fréquentes",
    otherServices: "Autre service",
    requestTitle: "Cela vous intéresse ?",
    requestBody: "Dites-nous ce dont vous avez besoin, nous vous répondrons personnellement.",
  },
  items: {
    purchase: {
      title: "Nous achetons votre bien",
      shortTitle: "Vendre un bien",
      teaser:
        "Vous possédez un bien et souhaitez le vendre ? Nous étudions l’opération et, si elle nous convient, nous l’achetons.",
      metaDescription:
        "Tarida MC achète des biens immobiliers directement à leurs propriétaires à Castelldefels. Nous analysons chaque actif et, si l’opportunité nous convient, nous vous présentons une proposition d’achat.",
      intro:
        "Nous achetons des biens immobiliers directement à leurs propriétaires. Nous analysons chaque actif en détail et, lorsque l’opportunité correspond à ce que nous recherchons, nous présentons une proposition d’achat. Avec le sérieux d’une entreprise familiale forte de quarante ans d’expérience dans le secteur.",
      imageAlt: "Façade d’une maison méditerranéenne baignée d’une lumière chaude",
      includes: [
        "Emplacement et environnement",
        "Type de bien et surface",
        "État de conservation",
        "Situation juridique et urbanistique",
        "Potentiel de l’actif",
      ],
      sections: [
        {
          heading: "Vous nous présentez le bien",
          body: ["Dites-nous de quel bien il s’agit : type, emplacement, surface et situation. Par formulaire ou par WhatsApp."],
        },
        {
          heading: "Nous analysons l’actif",
          body: ["Nous étudions le bien et son potentiel, forts de quarante ans d’expérience sur le marché."],
        },
        {
          heading: "Nous vous répondons",
          body: ["Si l’opportunité nous intéresse, nous vous présentons une proposition d’achat. Sinon, nous vous le disons avec la même clarté."],
        },
        {
          heading: "Nous concluons l’opération",
          body: ["Nous vous accompagnons à chaque étape jusqu’à la signature, en toute transparence."],
        },
      ],
      whatsappMessage: "Bonjour, je souhaiterais vous proposer l’achat de mon bien.",
      cta: "Proposer mon bien",
    },
    rental: {
      title: "Entrepôts et logements à louer",
      shortTitle: "Louer un bien",
      teaser: "Locaux industriels et logements à Castelldefels, issus de notre propre patrimoine.",
      metaDescription:
        "Location de locaux industriels et de logements à Castelldefels, pour les entreprises et les particuliers. Des biens du propre patrimoine de Tarida MC, avec un interlocuteur direct.",
      intro:
        "Nous louons des locaux industriels et des logements à Castelldefels, aux entreprises comme aux particuliers. Ces biens font partie de notre propre patrimoine : nous les connaissons bien et vous traitez directement avec nous.",
      imageAlt: "Entrepôt industriel ouvert et lumineux",
      includes: [],
      sections: [],
      whatsappMessage: "Bonjour, je souhaiterais des informations sur vos biens à louer.",
      cta: "Connaître les disponibilités",
    },
  },
};
