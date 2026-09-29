/** Catalan copy for the services pages. Same shape as dictionaries/es/services.ts. */
import type { ServicesDict } from "@/lib/i18n/types";

export const services: ServicesDict = {
  meta: {
    title: "Serveis",
    seoTitle: "Compra i lloguer d'immobles: serveis | Tarida MC",
    description:
      "Comprem pisos, cases i naus industrials a tota Espanya i lloguem naus i habitatges de la nostra pròpia cartera a Castelldefels.",
  },
  index: {
    eyebrow: "Serveis",
    title: "Comprar i llogar,\n*amb el mateix criteri*",
    intro:
      "Comprem pisos, cases i naus industrials a tota Espanya i lloguem naus i habitatges de la nostra pròpia cartera. Quatre serveis i una sola manera de treballar: estudiar cada immoble amb atenció i tractar cada client amb franquesa.",
    imageAlt: "Mur blanc amb una porta de fusta i una olivera",
    allServices: "Tots els serveis",
  },
  detail: {
    faqTitle: "Preguntes\n*freqüents*",
    otherServices: "Relacionat",
    requestBody: "Expliqui'ns què necessita i li respondrem personalment.",
  },
  items: {
    purchase: {
      title: "Comprem el seu pis o casa",
      shortTitle: "Vendre un pis o una casa",
      kicker: "Per a propietaris",
      heroTitle: "Comprem\n*el seu pis o la seva casa*",
      seoTitle: "Comprem el seu pis o casa a tota Espanya | Tarida MC",
      teaser:
        "Si té un pis o una casa i el vol vendre, estudiem l'operació i, si encaixa, l'hi comprem directament, a qualsevol punt d'Espanya.",
      metaDescription:
        "Comprem pisos i cases directament als seus propietaris a tota Espanya. Analitzem cada immoble i, si encaixa, li fem una proposta de compra.",
      intro:
        "Comprem pisos i cases directament als seus propietaris, a qualsevol punt d'Espanya. Analitzem cada immoble amb deteniment i, quan l'operació té sentit, li presentem una proposta de compra. Sense intermediaris, amb la serietat d'una empresa familiar amb quaranta anys al sector.",
      imageAlt: "Ràfec de teula i finestró d'una casa mediterrània amb llum càlida",
      learnMore: "Com comprem",
      includesTitle: "Què valorem",
      includes: [
        "Ubicació i entorn",
        "Tipus d'immoble i superfície",
        "Estat de conservació",
        "Situació registral i urbanística",
        "Potencial de l'actiu",
      ],
      process: {
        title: "Com funciona\n*la compra directa*",
        intro: "Quan ens proposa un immoble, sap en tot moment en quin punt és l'operació.",
      },
      sections: [
        {
          heading: "Ens presenta l'immoble",
          body: ["Expliqui'ns quina propietat té: tipus, ubicació, superfície i situació. Pel formulari o per WhatsApp."],
        },
        {
          heading: "Analitzem l'actiu",
          body: ["Estudiem l'immoble i el seu potencial amb l'experiència de quaranta anys al mercat."],
        },
        {
          heading: "Li donem una resposta",
          body: ["Si l'operació ens interessa, li presentem una proposta de compra. Si no, l'hi diem amb la mateixa claredat."],
        },
        {
          heading: "Tanquem l'operació",
          body: ["L'acompanyem en cada pas fins a la signatura davant notari, amb total transparència."],
        },
      ],
      scope: {
        title: "Què comprem",
        body: [
          "Pisos, cases i naus industrials, a qualsevol punt d'Espanya. Tenim la seu a Castelldefels, però estudiem immobles a tot el país.",
          "També quan l'immoble està llogat, prové d'una herència, necessita una reforma o té hipoteca o càrregues: l'estudiem igual, i la seva situació es té en compte en la proposta.",
        ],
      },
      comparison: {
        title: "Venda directa\n*o amb una agència*",
        intro: "Són dos camins diferents i cadascun té el seu moment. Així es diferencien.",
        columns: ["Venda directa a Tarida MC", "Venda a través d'una agència"],
        rows: [
          { label: "Qui compra", values: ["Nosaltres, directament", "Un comprador que l'agència busca al mercat"] },
          { label: "El seu interlocutor", values: ["Qui compra, de principi a fi", "L'agència, entre vostè i cada interessat"] },
          { label: "Visites", values: ["Les necessàries per analitzar l'immoble", "Les de cada possible comprador"] },
          { label: "Preu", values: ["Una proposta basada en la nostra anàlisi de l'actiu", "El que accepti un comprador del mercat"] },
          { label: "Quan convé", values: ["Si prefereix certesa i un sol interlocutor", "Si busca el preu de mercat i pot esperar"] },
        ],
      },
      faq: [
        {
          question: "Quin tipus d'immobles compren?",
          answer:
            "Pisos, cases i naus industrials. Si té un altre tipus d'immoble, expliqui'ns-ho igualment i li direm amb franquesa si encaixa.",
        },
        {
          question: "En quines zones compren?",
          answer:
            "A tota Espanya. La nostra seu és a Castelldefels, però estudiem immobles a qualsevol punt del país.",
        },
        {
          question: "Compren immobles llogats, heretats, per reformar o amb càrregues?",
          answer:
            "Sí. Els estudiem igual que qualsevol altre immoble: la seva situació forma part de l'anàlisi i es té en compte en la proposta.",
        },
        {
          question: "Com valoren l'immoble?",
          answer:
            "Estudiem la ubicació i l'entorn, el tipus d'immoble i la seva superfície, l'estat de conservació, la situació registral i urbanística i el potencial de l'actiu.",
        },
        {
          question: "Sempre fan una proposta de compra?",
          answer:
            "No. Només quan l'operació encaixa amb el que busquem. Si no encaixa, l'hi diem amb la mateixa claredat, sense fer-li perdre el temps.",
        },
        {
          question: "Són una agència o un intermediari?",
          answer:
            "No. Si arribem a un acord, qui compra és Tarida MC. Vostè tracta directament amb nosaltres de principi a fi.",
        },
        {
          question: "Quant triga l'operació?",
          answer:
            "Depèn de l'immoble, de la seva documentació i de la seva situació. No li donarem un termini que no puguem complir: li direm en cada moment en quin punt és l'operació.",
        },
        {
          question: "Com començo?",
          answer:
            "Escrigui'ns pel formulari o per WhatsApp amb el tipus d'immoble, la seva ubicació, la superfície i la seva situació. L'estudiarem i li respondrem personalment.",
        },
      ],
      closing: {
        title: "Pensa a vendre\n*el seu pis o la seva casa?*",
        body: "Expliqui'ns quin immoble té. L'estudiarem amb atenció i li donarem una resposta clara.",
      },
      whatsappMessage: "Hola, voldria que valoressin la compra del meu immoble.",
      cta: "Proposar el meu immoble",
    },
    "purchase-warehouses": {
      title: "Comprem naus industrials",
      shortTitle: "Vendre una nau industrial",
      kicker: "Per a propietaris de naus",
      heroTitle: "Comprem\n*naus industrials*",
      seoTitle: "Comprem naus industrials a tota Espanya | Tarida MC",
      teaser:
        "Si té una nau industrial i la vol vendre, lliure o llogada, l'estudiem i, si encaixa, l'hi comprem directament.",
      metaDescription:
        "Comprem naus industrials als seus propietaris a tota Espanya, lliures o llogades. Analitzem cada nau i, si encaixa, li fem una proposta.",
      intro:
        "Comprem naus industrials directament als seus propietaris, a qualsevol punt d'Espanya, lliures o amb llogater. Coneixem aquest tipus d'actiu perquè també lloguem naus de la nostra pròpia cartera: analitzem cadascuna amb deteniment i, quan l'operació té sentit, li presentem una proposta de compra.",
      imageAlt: "Interior diàfan d'una nau industrial amb estructura d'acer i lluernes",
      learnMore: "Com comprem naus",
      includesTitle: "Què valorem\n*en una nau*",
      includes: [
        "Ubicació i accessos",
        "Superfície construïda i de parcel·la",
        "Estat de la construcció i les instal·lacions",
        "Situació registral i urbanística",
        "Si està lliure o llogada",
      ],
      process: {
        title: "Com funciona\n*la compra de la seva nau*",
        intro: "Un procés clar, amb un sol interlocutor de principi a fi.",
      },
      sections: [
        {
          heading: "Ens presenta la nau",
          body: ["Ubicació, superfície, estat i si està lliure o llogada. Pel formulari o per WhatsApp."],
        },
        {
          heading: "Analitzem l'actiu",
          body: ["Estudiem la nau, el seu entorn i el seu potencial amb l'experiència de quaranta anys al sector."],
        },
        {
          heading: "Li donem una resposta",
          body: ["Si l'operació ens interessa, li presentem una proposta de compra. Si no, l'hi diem amb la mateixa claredat."],
        },
        {
          heading: "Tanquem l'operació",
          body: ["L'acompanyem en cada pas fins a la signatura davant notari, amb total transparència."],
        },
      ],
      scope: {
        title: "Quines naus comprem",
        body: [
          "Naus industrials a qualsevol punt d'Espanya, lliures o amb llogater. Tenim la seu a Castelldefels, però estudiem naus a tot el país.",
          "També quan la nau necessita una reforma o té hipoteca o càrregues: la seva situació forma part de l'anàlisi i es té en compte en la proposta.",
        ],
      },
      faq: [
        {
          question: "Compren naus llogades?",
          answer:
            "Sí. Si la nau té llogater, el contracte vigent forma part de l'anàlisi i es té en compte en la proposta.",
        },
        {
          question: "En quines zones compren naus?",
          answer:
            "A tota Espanya. La nostra seu és a Castelldefels, però estudiem naus a qualsevol punt del país.",
        },
        {
          question: "Què valoren d'una nau?",
          answer:
            "La ubicació i els accessos, la superfície construïda i de parcel·la, l'estat de la construcció i les instal·lacions, la situació registral i urbanística i si està lliure o llogada.",
        },
        {
          question: "Sempre fan una proposta de compra?",
          answer:
            "No. Només quan l'operació encaixa amb el que busquem. Si no encaixa, l'hi diem amb la mateixa claredat, sense fer-li perdre el temps.",
        },
        {
          question: "Són una agència o un intermediari?",
          answer:
            "No. Si arribem a un acord, qui compra la nau és Tarida MC. Vostè tracta directament amb nosaltres de principi a fi.",
        },
        {
          question: "Quant triga l'operació?",
          answer:
            "Depèn de la nau, de la seva documentació i de la seva situació. No li donarem un termini que no puguem complir: li direm en cada moment en quin punt és l'operació.",
        },
        {
          question: "Com començo?",
          answer:
            "Escrigui'ns pel formulari o per WhatsApp amb la ubicació de la nau, la superfície, l'estat i si està lliure o llogada. L'estudiarem i li respondrem personalment.",
        },
      ],
      closing: {
        title: "Pensa a vendre\n*la seva nau?*",
        body: "Expliqui'ns com és. L'estudiarem amb atenció i li donarem una resposta clara.",
      },
      whatsappMessage: "Hola, voldria que valoressin la compra de la meva nau industrial.",
      cta: "Proposar la meva nau",
    },
    "rental-warehouses": {
      title: "Naus industrials de lloguer",
      shortTitle: "Llogar una nau",
      kicker: "Per a empreses",
      heroTitle: "Naus industrials\n*de lloguer*",
      seoTitle: "Lloguer de naus industrials a Castelldefels | Tarida MC",
      teaser: "Naus industrials a Castelldefels de la nostra pròpia cartera, amb tracte directe amb la propietat.",
      metaDescription:
        "Lloguer de naus industrials a Castelldefels, de la cartera pròpia de Tarida MC. Tracte directe amb la propietat, sense intermediaris.",
      intro:
        "Lloguem naus industrials de la nostra pròpia cartera a Castelldefels. Les coneixem bé perquè són nostres: l'informem amb claredat del que tenim disponible i vostè tracta directament amb la propietat, sense intermediaris.",
      imageAlt: "Nau industrial diàfana i lluminosa, amb estructura metàl·lica blanca",
      learnMore: "Veure naus de lloguer",
      includesTitle: "Què oferim",
      includes: [
        "Naus de la nostra pròpia cartera",
        "Tracte directe amb la propietat",
        "Informació clara sobre la disponibilitat",
        "Una resposta personal a cada consulta",
      ],
      process: {
        title: "Com llogar\n*una nau*",
        intro: "Sense intermediaris: parla amb la propietat des de la primera consulta.",
      },
      sections: [
        {
          heading: "Ens explica què busca",
          body: ["Superfície aproximada, ús previst i data en què la necessita. Pel formulari o per WhatsApp."],
        },
        {
          heading: "L'informem del que hi ha disponible",
          body: ["Li diem amb claredat quines naus tenim que encaixen amb el que busca."],
        },
        {
          heading: "Visita la nau",
          body: ["Li ensenyem la nau i resolem els seus dubtes sobre l'immoble."],
        },
        {
          heading: "Signem el contracte",
          body: ["Quan tot és clar, formalitzem el lloguer directament amb vostè."],
        },
      ],
      faq: [
        {
          question: "Lloguen directament, sense agència?",
          answer: "Sí. Les naus són de la nostra pròpia cartera: vostè tracta directament amb la propietat, sense intermediaris.",
        },
        {
          question: "On són les naus?",
          answer: "A Castelldefels. Si busca en una altra zona, digui-ho igualment i l'informarem del que tinguem.",
        },
        {
          question: "Quina informació necessiten per començar?",
          answer:
            "La superfície aproximada, l'ús que farà de la nau i la data en què la necessita. Amb això li diem què tenim disponible.",
        },
        {
          question: "Com sé quines naus hi ha disponibles?",
          answer:
            "La nostra cartera canvia sovint. Escrigui'ns pel formulari o per WhatsApp i li respondrem personalment amb el que tinguem.",
        },
      ],
      closing: {
        title: "Busca una nau\n*de lloguer?*",
        body: "Digui'ns què necessita (superfície, ús i data) i l'informarem del que tinguem disponible.",
      },
      whatsappMessage: "Hola, busco una nau industrial de lloguer.",
      cta: "Consultar disponibilitat",
    },
    "rental-homes": {
      title: "Pisos i cases de lloguer",
      shortTitle: "Llogar un habitatge",
      kicker: "Per a particulars",
      heroTitle: "Pisos i cases\n*de lloguer*",
      seoTitle: "Lloguer de pisos i cases a Castelldefels | Tarida MC",
      teaser: "Pisos i cases a Castelldefels de la nostra pròpia cartera, amb tracte directe amb la propietat.",
      metaDescription:
        "Lloguer de pisos i cases a Castelldefels, de la cartera pròpia de Tarida MC. Tracte directe amb la propietat, sense intermediaris.",
      intro:
        "Lloguem pisos i cases de la nostra pròpia cartera a Castelldefels. Els coneixem bé perquè són nostres: l'informem amb claredat del que tenim disponible i vostè tracta directament amb la propietat, sense intermediaris.",
      imageAlt: "Casa mediterrània emblanquinada entre xiprers",
      learnMore: "Veure habitatges de lloguer",
      includesTitle: "Què oferim",
      includes: [
        "Habitatges de la nostra pròpia cartera",
        "Tracte directe amb la propietat",
        "Informació clara sobre la disponibilitat",
        "Una resposta personal a cada consulta",
      ],
      process: {
        title: "Com llogar\n*un habitatge*",
        intro: "Sense intermediaris: parla amb la propietat des de la primera consulta.",
      },
      sections: [
        {
          heading: "Ens explica què busca",
          body: ["Tipus d'habitatge, nombre d'habitacions i data en què el necessita. Pel formulari o per WhatsApp."],
        },
        {
          heading: "L'informem del que hi ha disponible",
          body: ["Li diem amb claredat quins habitatges tenim que encaixen amb el que busca."],
        },
        {
          heading: "Visita l'habitatge",
          body: ["Li ensenyem l'habitatge i resolem els seus dubtes."],
        },
        {
          heading: "Signem el contracte",
          body: ["Quan tot és clar, formalitzem el lloguer directament amb vostè."],
        },
      ],
      faq: [
        {
          question: "Lloguen directament, sense agència?",
          answer: "Sí. Els habitatges són de la nostra pròpia cartera: vostè tracta directament amb la propietat, sense intermediaris.",
        },
        {
          question: "On són els habitatges?",
          answer: "A Castelldefels. Si busca en una altra zona, digui-ho igualment i l'informarem del que tinguem.",
        },
        {
          question: "Quina informació necessiten per començar?",
          answer:
            "El tipus d'habitatge que busca, el nombre d'habitacions i la data en què el necessita. Amb això li diem què tenim disponible.",
        },
        {
          question: "Com sé quins habitatges hi ha disponibles?",
          answer:
            "La nostra cartera canvia sovint. Escrigui'ns pel formulari o per WhatsApp i li respondrem personalment amb el que tinguem.",
        },
      ],
      closing: {
        title: "Busca un habitatge\n*de lloguer?*",
        body: "Digui'ns què necessita (tipus d'habitatge, habitacions i data) i l'informarem del que tinguem disponible.",
      },
      whatsappMessage: "Hola, busco un habitatge de lloguer.",
      cta: "Consultar disponibilitat",
    },
  },
};
