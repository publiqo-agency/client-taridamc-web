/** Catalan copy for the services pages. Same shape as dictionaries/es/services.ts. */
import type { ServicesDict } from "@/lib/i18n/types";

export const services: ServicesDict = {
  meta: {
    title: "Serveis",
    seoTitle: "Compra i lloguer d'immobles a Castelldefels · Tarida MC",
    description:
      "Comprem immobles directament als seus propietaris i lloguem naus industrials i habitatges a Castelldefels.",
  },
  index: {
    eyebrow: "Serveis",
    title: "Comprar i llogar,\n*amb el mateix criteri*",
    intro:
      "Dues activitats, una sola manera de treballar: estudiar cada immoble amb atenció i tractar cada client amb franquesa.",
    allServices: "Tots els serveis",
  },
  detail: {
    includesTitle: "Què valorem",
    faqTitle: "Preguntes freqüents",
    otherServices: "Un altre servei",
    requestTitle: "L'interessa?",
    requestBody: "Expliqui'ns què necessita i li respondrem personalment.",
  },
  items: {
    purchase: {
      title: "Comprem el seu immoble",
      shortTitle: "Vendre un immoble",
      teaser:
        "Si té una propietat i la vol vendre, estudiem l'operació i, si encaixa, l'hi comprem.",
      metaDescription:
        "Tarida MC compra immobles directament als seus propietaris a Castelldefels. Analitzem cada actiu i, si l'oportunitat encaixa, li presentem una proposta de compra.",
      intro:
        "Comprem immobles directament als seus propietaris. Analitzem cada actiu amb deteniment i, quan l'oportunitat encaixa amb el que busquem, presentem una proposta de compra. Amb la serietat d'una empresa familiar amb quaranta anys al sector.",
      imageAlt: "Façana d'un habitatge mediterrani amb llum càlida",
      includes: [
        "Ubicació i entorn",
        "Tipus d'immoble i superfície",
        "Estat de conservació",
        "Situació registral i urbanística",
        "Potencial de l'actiu",
      ],
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
          body: ["Si l'oportunitat ens interessa, li presentem una proposta de compra. Si no, l'hi diem amb la mateixa claredat."],
        },
        {
          heading: "Tanquem l'operació",
          body: ["L'acompanyem en cada pas fins a la signatura, amb total transparència."],
        },
      ],
      whatsappMessage: "Hola, voldria que valoressin la compra del meu immoble.",
      cta: "Proposar el meu immoble",
    },
    rental: {
      title: "Naus i habitatges de lloguer",
      shortTitle: "Llogar un immoble",
      teaser: "Naus industrials i habitatges a Castelldefels, de la nostra pròpia cartera.",
      metaDescription:
        "Lloguer de naus industrials i habitatges a Castelldefels per a empreses i particulars. Immobles de la cartera pròpia de Tarida MC, amb tracte directe.",
      intro:
        "Lloguem naus industrials i habitatges a Castelldefels, a empreses i a particulars. Són immobles de la nostra pròpia cartera: els coneixem bé i l'atenem directament.",
      imageAlt: "Nau industrial diàfana i lluminosa",
      includes: [],
      sections: [],
      whatsappMessage: "Hola, m'interessa informació sobre els seus immobles de lloguer.",
      cta: "Consultar disponibilitat",
    },
  },
};
