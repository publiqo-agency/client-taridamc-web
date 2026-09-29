import type { ServicesDict } from "@/lib/i18n/types";

/** French copy for the services. Same shape as dictionaries/es/services.ts. */
export const services: ServicesDict = {
  hubs: {
    sale: {
      title: "Vente",
      seoTitle: "Vendez votre logement ou entrepôt en Espagne | Tarida MC",
      description:
        "Nous achetons appartements, maisons et entrepôts partout en Espagne. Nous étudions chaque bien avec attention et vous répondons clairement.",
      eyebrow: "Vente",
      heroTitle: "Vendez votre bien\n*en direct*",
      imageAlt: "Mur blanc avec une porte en bois et un olivier",
      introLabel: "Nous achetons",
      intro:
        "Nous achetons appartements, maisons et entrepôts partout en Espagne. Nous étudions chaque bien avec attention et traitons chaque propriétaire avec franchise : une réponse claire, sans détour.",
      closing: {
        title: "Vous pensez à vendre\n*votre bien ?*",
        body: "Dites-nous de quel bien il s’agit. Nous l’étudierons avec attention et vous donnerons une réponse claire.",
      },
      cta: "Proposer mon bien",
      whatsappMessage: "Bonjour, je souhaiterais vous proposer l’achat de mon bien.",
    },
    rental: {
      title: "Location",
      seoTitle: "Entrepôts et logements à louer à Castelldefels | Tarida MC",
      description:
        "Entrepôts et logements à louer à Castelldefels, issus de notre propre patrimoine, avec le propriétaire pour interlocuteur direct.",
      eyebrow: "Location",
      heroTitle: "Entrepôts et logements\n*à louer*",
      imageAlt: "Maison méditerranéenne blanchie à la chaux parmi les cyprès",
      introLabel: "Notre patrimoine",
      intro:
        "Nous louons des entrepôts et des logements de notre propre patrimoine à Castelldefels. Vous traitez directement avec le propriétaire, avec le sérieux de quarante ans dans le secteur.",
      closing: {
        title: "Vous cherchez un entrepôt\n*ou un logement ?*",
        body: "Dites-nous ce que vous recherchez — surface approximative et secteur — et nous vous informerons des biens disponibles.",
      },
      cta: "Connaître les disponibilités",
      whatsappMessage: "Bonjour, je cherche un bien à louer.",
    },
  },
  detail: {
    faqTitle: "Questions\n*fréquentes*",
    otherServices: "Voir aussi",
    requestBody: "Dites-nous ce dont vous avez besoin, nous vous répondrons personnellement.",
  },
  items: {
    purchase: {
      title: "Nous achetons votre appartement ou maison",
      shortTitle: "Vendre un appartement ou une maison",
      kicker: "Pour les propriétaires",
      heroTitle: "Nous achetons\n*votre appartement ou maison*",
      seoTitle: "Nous achetons votre logement en Espagne | Tarida MC",
      teaser:
        "Vous possédez un appartement ou une maison et souhaitez le vendre ? Nous étudions l’opération et, si elle nous convient, nous l’achetons directement, partout en Espagne.",
      metaDescription:
        "Nous achetons appartements et maisons à leurs propriétaires, partout en Espagne. Nous étudions chaque bien et, s’il convient, faisons une offre.",
      intro:
        "Nous achetons appartements et maisons directement à leurs propriétaires, partout en Espagne. Nous analysons chaque bien en détail et, lorsque l’opération a du sens, nous vous présentons une proposition d’achat. Sans intermédiaire, avec le sérieux d’une entreprise familiale forte de quarante ans d’expérience dans le secteur.",
      imageAlt: "Avant-toit en tuiles et volet d’une maison méditerranéenne dans une lumière chaude",
      learnMore: "Comment nous achetons",
      includesTitle: "Ce que nous évaluons",
      includes: [
        "Emplacement et environnement",
        "Type de bien et surface",
        "État de conservation",
        "Situation juridique et urbanistique",
        "Potentiel de l’actif",
      ],
      process: {
        title: "Comment se passe\n*l’achat direct*",
        intro: "Dès que vous nous proposez un bien, vous savez à tout moment où en est l’opération.",
      },
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
          body: ["Si l’opération nous intéresse, nous vous présentons une proposition d’achat. Sinon, nous vous le disons avec la même clarté."],
        },
        {
          heading: "Nous concluons l’opération",
          body: ["Nous vous accompagnons à chaque étape jusqu’à la signature chez le notaire, en toute transparence."],
        },
      ],
      scope: {
        title: "Ce que nous achetons",
        body: [
          "Appartements, maisons et entrepôts, partout en Espagne. Notre siège est à Castelldefels, mais nous étudions des biens dans tout le pays.",
          "Y compris lorsque le bien est loué, issu d’une succession, à rénover ou grevé d’une hypothèque ou de charges : nous l’étudions de la même façon, et sa situation est prise en compte dans la proposition.",
        ],
      },
      comparison: {
        title: "Vente directe\n*ou par une agence*",
        intro: "Ce sont deux voies différentes, et chacune a son moment. Voici ce qui les distingue.",
        columns: ["Vente directe à Tarida MC", "Vente par une agence"],
        rows: [
          { label: "Qui achète", values: ["Nous, directement", "Un acheteur que l’agence trouve sur le marché"] },
          { label: "Votre interlocuteur", values: ["L’acheteur, du début à la fin", "L’agence, entre vous et chaque intéressé"] },
          { label: "Visites", values: ["Celles nécessaires pour analyser le bien", "Celles de chaque acheteur potentiel"] },
          { label: "Prix", values: ["Une proposition fondée sur notre analyse", "Celui qu’accepte un acheteur du marché"] },
          { label: "Quand la choisir", values: ["Si vous préférez la certitude et un seul interlocuteur", "Si vous visez le prix du marché et pouvez attendre"] },
        ],
      },
      faq: [
        {
          question: "Quels types de biens achetez-vous ?",
          answer:
            "Des appartements, des maisons et des entrepôts. Si vous avez un autre type de bien, parlez-nous-en quand même : nous vous dirons franchement s’il nous convient.",
        },
        {
          question: "Dans quelles zones achetez-vous ?",
          answer:
            "Partout en Espagne. Notre siège est à Castelldefels, mais nous étudions des biens dans tout le pays.",
        },
        {
          question: "Achetez-vous des biens loués, hérités, à rénover ou grevés de charges ?",
          answer:
            "Oui. Nous les étudions comme n’importe quel autre bien : leur situation fait partie de l’analyse et est prise en compte dans la proposition.",
        },
        {
          question: "Comment évaluez-vous un bien ?",
          answer:
            "Nous étudions l’emplacement et l’environnement, le type de bien et sa surface, son état de conservation, sa situation juridique et urbanistique et le potentiel de l’actif.",
        },
        {
          question: "Faites-vous toujours une proposition d’achat ?",
          answer:
            "Non. Seulement lorsque l’opération correspond à ce que nous recherchons. Sinon, nous vous le disons avec la même clarté, sans vous faire perdre de temps.",
        },
        {
          question: "Êtes-vous une agence ou un intermédiaire ?",
          answer:
            "Non. Si nous parvenons à un accord, l’acheteur est Tarida MC. Vous traitez directement avec nous du début à la fin.",
        },
        {
          question: "Combien de temps dure l’opération ?",
          answer:
            "Cela dépend du bien, de ses documents et de sa situation. Nous ne vous donnerons pas de délai que nous ne pourrions pas tenir : nous vous dirons à tout moment où en est l’opération.",
        },
        {
          question: "Comment commencer ?",
          answer:
            "Écrivez-nous par le formulaire ou par WhatsApp en indiquant le type de bien, son emplacement, sa surface et sa situation. Nous l’étudierons et vous répondrons personnellement.",
        },
      ],
      closing: {
        title: "Vous pensez vendre\n*votre logement ?*",
        body: "Présentez-nous votre bien. Nous l’étudierons avec attention et vous donnerons une réponse claire.",
      },
      whatsappMessage: "Bonjour, je souhaiterais vous proposer l’achat de mon bien.",
      cta: "Proposer mon bien",
    },
    "purchase-warehouses": {
      title: "Nous achetons des entrepôts",
      shortTitle: "Vendre un entrepôt",
      kicker: "Pour les propriétaires d’entrepôts",
      heroTitle: "Nous achetons\n*des entrepôts*",
      seoTitle: "Nous achetons des entrepôts en Espagne | Tarida MC",
      teaser:
        "Vous possédez un entrepôt et souhaitez le vendre, libre ou loué ? Nous l’étudions et, s’il nous convient, nous l’achetons directement.",
      metaDescription:
        "Nous achetons des entrepôts à leurs propriétaires partout en Espagne, libres ou loués. Nous étudions chaque bien et, s’il convient, faisons une offre.",
      intro:
        "Nous achetons des entrepôts et bâtiments industriels directement à leurs propriétaires, partout en Espagne, libres ou loués. Nous connaissons ce type d’actif car nous louons aussi des entrepôts de notre propre patrimoine : nous analysons chacun en détail et, lorsque l’opération a du sens, nous vous présentons une proposition d’achat.",
      imageAlt: "Intérieur dégagé d’un entrepôt à structure en acier avec des verrières",
      learnMore: "Comment nous achetons les entrepôts",
      includesTitle: "Ce que nous évaluons\n*dans un entrepôt*",
      includes: [
        "Emplacement et accès",
        "Surface bâtie et surface du terrain",
        "État du bâtiment et des installations",
        "Situation juridique et urbanistique",
        "S’il est libre ou loué",
      ],
      process: {
        title: "Comment se passe\n*l’achat de votre entrepôt*",
        intro: "Un processus clair, avec un seul interlocuteur du début à la fin.",
      },
      sections: [
        {
          heading: "Vous nous présentez l’entrepôt",
          body: ["Emplacement, surface, état et s’il est libre ou loué. Par formulaire ou par WhatsApp."],
        },
        {
          heading: "Nous analysons l’actif",
          body: ["Nous étudions l’entrepôt, son environnement et son potentiel, forts de quarante ans d’expérience dans le secteur."],
        },
        {
          heading: "Nous vous répondons",
          body: ["Si l’opération nous intéresse, nous vous présentons une proposition d’achat. Sinon, nous vous le disons avec la même clarté."],
        },
        {
          heading: "Nous concluons l’opération",
          body: ["Nous vous accompagnons à chaque étape jusqu’à la signature chez le notaire, en toute transparence."],
        },
      ],
      scope: {
        title: "Les entrepôts que nous achetons",
        body: [
          "Entrepôts et bâtiments industriels partout en Espagne, libres ou loués. Notre siège est à Castelldefels, mais nous étudions des entrepôts dans tout le pays.",
          "Y compris lorsque l’entrepôt est à rénover ou grevé d’une hypothèque ou de charges : sa situation fait partie de l’analyse et est prise en compte dans la proposition.",
        ],
      },
      faq: [
        {
          question: "Achetez-vous des entrepôts loués ?",
          answer:
            "Oui. Si l’entrepôt a un locataire, le bail en cours fait partie de l’analyse et est pris en compte dans la proposition.",
        },
        {
          question: "Dans quelles zones achetez-vous des entrepôts ?",
          answer:
            "Partout en Espagne. Notre siège est à Castelldefels, mais nous étudions des entrepôts dans tout le pays.",
        },
        {
          question: "Qu’évaluez-vous dans un entrepôt ?",
          answer:
            "L’emplacement et les accès, la surface bâtie et celle du terrain, l’état du bâtiment et des installations, la situation juridique et urbanistique et s’il est libre ou loué.",
        },
        {
          question: "Faites-vous toujours une proposition d’achat ?",
          answer:
            "Non. Seulement lorsque l’opération correspond à ce que nous recherchons. Sinon, nous vous le disons avec la même clarté, sans vous faire perdre de temps.",
        },
        {
          question: "Êtes-vous une agence ou un intermédiaire ?",
          answer:
            "Non. Si nous parvenons à un accord, l’acheteur de l’entrepôt est Tarida MC. Vous traitez directement avec nous du début à la fin.",
        },
        {
          question: "Combien de temps dure l’opération ?",
          answer:
            "Cela dépend de l’entrepôt, de ses documents et de sa situation. Nous ne vous donnerons pas de délai que nous ne pourrions pas tenir : nous vous dirons à tout moment où en est l’opération.",
        },
        {
          question: "Comment commencer ?",
          answer:
            "Écrivez-nous par le formulaire ou par WhatsApp en indiquant l’emplacement de l’entrepôt, sa surface, son état et s’il est libre ou loué. Nous l’étudierons et vous répondrons personnellement.",
        },
      ],
      closing: {
        title: "Vous pensez vendre\n*votre entrepôt ?*",
        body: "Présentez-le-nous. Nous l’étudierons avec attention et vous donnerons une réponse claire.",
      },
      whatsappMessage: "Bonjour, je souhaiterais vous proposer l’achat de mon entrepôt.",
      cta: "Proposer mon entrepôt",
    },
    "rental-warehouses": {
      title: "Entrepôts à louer",
      shortTitle: "Louer un entrepôt",
      kicker: "Pour les entreprises",
      heroTitle: "Entrepôts\n*à louer*",
      seoTitle: "Entrepôts à louer à Castelldefels | Tarida MC",
      teaser: "Entrepôts à Castelldefels issus de notre propre patrimoine, avec le propriétaire pour interlocuteur direct.",
      metaDescription:
        "Location d’entrepôts à Castelldefels, issus du patrimoine de Tarida MC. Vous traitez directement avec le propriétaire, sans intermédiaire.",
      intro:
        "Nous louons des entrepôts de notre propre patrimoine à Castelldefels. Nous les connaissons bien, car ils sont à nous : nous vous indiquons clairement ce qui est disponible et vous traitez directement avec le propriétaire, sans intermédiaire.",
      imageAlt: "Entrepôt lumineux et dégagé, à structure métallique blanche",
      learnMore: "Voir les entrepôts à louer",
      includesTitle: "Ce que nous proposons",
      includes: [
        "Des entrepôts de notre propre patrimoine",
        "Un contact direct avec le propriétaire",
        "Une information claire sur les disponibilités",
        "Une réponse personnelle à chaque demande",
      ],
      process: {
        title: "Comment louer\n*un entrepôt*",
        intro: "Sans intermédiaire : vous parlez avec le propriétaire dès la première demande.",
      },
      sections: [
        {
          heading: "Vous nous dites ce que vous cherchez",
          body: ["Surface approximative, usage prévu et date souhaitée. Par formulaire ou par WhatsApp."],
        },
        {
          heading: "Nous vous indiquons les disponibilités",
          body: ["Nous vous disons clairement lesquels de nos entrepôts correspondent à votre recherche."],
        },
        {
          heading: "Vous visitez l’entrepôt",
          body: ["Nous vous montrons l’entrepôt et répondons à vos questions sur le bien."],
        },
        {
          heading: "Nous signons le bail",
          body: ["Une fois tout clarifié, nous formalisons la location directement avec vous."],
        },
      ],
      faq: [
        {
          question: "Louez-vous directement, sans agence ?",
          answer: "Oui. Les entrepôts font partie de notre propre patrimoine : vous traitez directement avec le propriétaire, sans intermédiaire.",
        },
        {
          question: "Où se trouvent les entrepôts ?",
          answer:
            "À Castelldefels. Si vous cherchez dans une autre zone, dites-le-nous quand même et nous vous indiquerons ce que nous avons.",
        },
        {
          question: "De quelles informations avez-vous besoin pour commencer ?",
          answer:
            "La surface approximative, l’usage que vous ferez de l’entrepôt et la date souhaitée. Avec cela, nous vous indiquons ce qui est disponible.",
        },
        {
          question: "Comment savoir quels entrepôts sont disponibles ?",
          answer:
            "Notre patrimoine évolue souvent. Écrivez-nous par le formulaire ou par WhatsApp et nous vous répondrons personnellement avec ce que nous avons.",
        },
      ],
      closing: {
        title: "Vous cherchez\n*un entrepôt à louer ?*",
        body: "Dites-nous ce dont vous avez besoin (surface, usage et date) et nous vous indiquerons ce que nous avons de disponible.",
      },
      whatsappMessage: "Bonjour, je cherche un entrepôt à louer.",
      cta: "Connaître les disponibilités",
    },
    "rental-homes": {
      title: "Appartements et maisons à louer",
      shortTitle: "Louer un logement",
      kicker: "Pour les particuliers",
      heroTitle: "Appartements et maisons\n*à louer*",
      seoTitle: "Appartements et maisons à louer à Castelldefels | Tarida MC",
      teaser: "Appartements et maisons à Castelldefels issus de notre propre patrimoine, avec le propriétaire pour interlocuteur direct.",
      metaDescription:
        "Location d’appartements et de maisons à Castelldefels, issus du patrimoine de Tarida MC. Vous traitez directement avec le propriétaire.",
      intro:
        "Nous louons des appartements et des maisons de notre propre patrimoine à Castelldefels. Nous les connaissons bien, car ils sont à nous : nous vous indiquons clairement ce qui est disponible et vous traitez directement avec le propriétaire, sans intermédiaire.",
      imageAlt: "Maison méditerranéenne blanchie à la chaux parmi les cyprès",
      learnMore: "Voir les logements à louer",
      includesTitle: "Ce que nous proposons",
      includes: [
        "Des logements de notre propre patrimoine",
        "Un contact direct avec le propriétaire",
        "Une information claire sur les disponibilités",
        "Une réponse personnelle à chaque demande",
      ],
      process: {
        title: "Comment louer\n*un logement*",
        intro: "Sans intermédiaire : vous parlez avec le propriétaire dès la première demande.",
      },
      sections: [
        {
          heading: "Vous nous dites ce que vous cherchez",
          body: ["Type de logement, nombre de chambres et date souhaitée. Par formulaire ou par WhatsApp."],
        },
        {
          heading: "Nous vous indiquons les disponibilités",
          body: ["Nous vous disons clairement lesquels de nos logements correspondent à votre recherche."],
        },
        {
          heading: "Vous visitez le logement",
          body: ["Nous vous montrons le logement et répondons à vos questions."],
        },
        {
          heading: "Nous signons le bail",
          body: ["Une fois tout clarifié, nous formalisons la location directement avec vous."],
        },
      ],
      faq: [
        {
          question: "Louez-vous directement, sans agence ?",
          answer: "Oui. Les logements font partie de notre propre patrimoine : vous traitez directement avec le propriétaire, sans intermédiaire.",
        },
        {
          question: "Où se trouvent les logements ?",
          answer:
            "À Castelldefels. Si vous cherchez dans une autre zone, dites-le-nous quand même et nous vous indiquerons ce que nous avons.",
        },
        {
          question: "De quelles informations avez-vous besoin pour commencer ?",
          answer:
            "Le type de logement recherché, le nombre de chambres et la date souhaitée. Avec cela, nous vous indiquons ce qui est disponible.",
        },
        {
          question: "Comment savoir quels logements sont disponibles ?",
          answer:
            "Notre patrimoine évolue souvent. Écrivez-nous par le formulaire ou par WhatsApp et nous vous répondrons personnellement avec ce que nous avons.",
        },
      ],
      closing: {
        title: "Vous cherchez\n*un logement à louer ?*",
        body: "Dites-nous ce dont vous avez besoin (type de logement, chambres et date) et nous vous indiquerons ce que nous avons de disponible.",
      },
      whatsappMessage: "Bonjour, je cherche un logement à louer.",
      cta: "Connaître les disponibilités",
    },
  },
};
