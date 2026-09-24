/**
 * Catalan copy. Same shape as the Spanish dictionary (the type contract).
 * "\n" is a design line break; *asterisks* mark the italic accent phrase.
 */
import type { CommonDict } from "@/lib/i18n/types";

export const common: CommonDict = {
  meta: {
    defaultTitle: "Tarida MC",
    description:
      "Tarida MC, empresa familiar de Castelldefels amb quaranta anys al sector immobiliari. Comprem immobles i lloguem naus industrials i habitatges.",
  },
  nav: {
    home: "Inici",
    services: "Serveis",
    sell: "Vendre el seu immoble",
    rent: "Lloguer",
    about: "Nosaltres",
    contact: "Contacte",
    menu: "Menú",
    close: "Tancar",
    mainNavAria: "Navegació principal",
    skipToContent: "Saltar al contingut",
  },
  cta: {
    contact: "Contactar",
    whatsapp: "Escrigui'ns per WhatsApp",
    back: "Tornar a l'inici",
    allServices: "Veure tots els serveis",
    learnMore: "Més informació",
    scroll: "Desplaçar",
  },
  brand: {
    yearsLabel: "anys",
    yearsCaption: "al sector immobiliari",
    family: "Empresa familiar",
  },
  catalogue: {
    eyebrow: "Catàleg",
    title: "Immobles\n*de lloguer*",
    intro:
      "Naus industrials i habitatges a Castelldefels, de la nostra pròpia cartera. L'atenem directament.",
    filtersAria: "Filtrar per tipus d'immoble",
    filters: {
      all: "Tots",
      warehouse: "Naus",
      home: "Habitatges",
      commercial: "Locals",
    },
    types: {
      warehouse: "Nau industrial",
      home: "Habitatge",
      commercial: "Local",
    },
    specs: {
      ref: "Ref.",
      area: "Superfície",
      zone: "Zona",
    },
    enquire: "Consultar",
    view: "Veure",
    seeAll: "Veure el catàleg",
    whatsappMessage: "Hola, m'interessa l'immoble amb referència {ref}.",
    empty: {
      title: "Consulti *disponibilitat*",
      body: "La nostra cartera de lloguer canvia sovint. Digui'ns què busca —nau o habitatge, superfície aproximada i zona— i l'informarem del que tinguem disponible.",
      cta: "Consultar disponibilitat",
    },
  },
  values: {
    eyebrow: "Com treballem",
    title: "Tres paraules\n*que ens defineixen*",
    items: [
      {
        title: "Serietat",
        body: "Quaranta anys al sector ens han ensenyat que la confiança es guanya complint allò que s'ha acordat.",
      },
      {
        title: "Honestedat",
        body: "Li diem amb franquesa què pensem del seu immoble, també quan la resposta és no.",
      },
      {
        title: "Transparència",
        body: "Cada pas de l'operació, explicat amb claredat des del primer dia.",
      },
    ],
  },
  closing: {
    eyebrow: "Parlem-ne",
    title: "Pensa a vendre\n*la seva propietat?*",
    body: "Expliqui'ns quin immoble té. L'estudiarem amb atenció i li donarem una resposta clara.",
    imageAlt: "Terrassa d'un habitatge mediterrani al capvespre, amb l'interior il·luminat",
  },
  whatsapp: {
    aria: "Obrir WhatsApp",
    messages: {
      general: "Hola, voldria rebre més informació.",
    },
  },
  footer: {
    tagline: "Empresa familiar a Castelldefels. Quaranta anys comprant i llogant immobles.",
    navTitle: "Seccions",
    servicesTitle: "Serveis",
    contactTitle: "Contacte",
    followTitle: "Segueixi'ns",
    localTime: "Hora local",
    cookieSettings: "Preferències de galetes",
    rights: "Tots els drets reservats.",
    credit: "Disseny i desenvolupament:",
    legalNotice: "Avís legal",
    privacy: "Política de privacitat",
    cookies: "Política de galetes",
  },
  localeSwitcher: {
    aria: "Idioma",
  },
  consent: {
    title: "Galetes",
    body:
      "Fem servir galetes de mesura per saber com s'utilitza el web. No se n'activa cap fins que vostè no ho accepti.",
    accept: "Acceptar",
    reject: "Rebutjar",
    link: "Més informació",
  },
  notFound: {
    title: "Pàgina no trobada",
    body: "L'adreça no existeix o ha canviat.",
  },
};
