/**
 * Default-locale copy: its shape is the type contract for every other
 * language (lib/i18n/types.ts). No `as const` here.
 *
 * Copy conventions shared by every dictionary: "\n" is a line break the
 * design relies on (headlines rise line by line) and *asterisks* mark the
 * italic serif accent phrase. Facts only from the brief: a family business
 * in Castelldefels, forty years in the sector, run by Ramon Seva; they buy
 * properties after analysing them and rent industrial units and homes.
 */
export const common = {
  meta: {
    defaultTitle: "Tarida MC",
    description:
      "Tarida MC, empresa familiar de Castelldefels con cuarenta años en el sector inmobiliario. Compramos inmuebles y alquilamos naves industriales y viviendas.",
  },
  nav: {
    home: "Inicio",
    services: "Servicios",
    sell: "Vender su inmueble",
    rent: "Alquiler",
    about: "Nosotros",
    contact: "Contacto",
    menu: "Menú",
    close: "Cerrar",
    mainNavAria: "Navegación principal",
    skipToContent: "Saltar al contenido",
  },
  cta: {
    contact: "Contactar",
    whatsapp: "Escríbanos por WhatsApp",
    back: "Volver al inicio",
    allServices: "Ver todos los servicios",
    learnMore: "Saber más",
  },
  brand: {
    yearsLabel: "años",
    yearsCaption: "en el sector inmobiliario",
  },
  catalogue: {
    title: "Inmuebles\n*en alquiler*",
    intro:
      "Naves industriales y viviendas en Castelldefels, de nuestra propia cartera. Le atendemos directamente.",
    filtersAria: "Filtrar por tipo de inmueble",
    filters: {
      all: "Todos",
      warehouse: "Naves",
      home: "Viviendas",
      commercial: "Locales",
    },
    types: {
      warehouse: "Nave industrial",
      home: "Vivienda",
      commercial: "Local",
    },
    specs: {
      ref: "Ref.",
      area: "Superficie",
      zone: "Zona",
    },
    enquire: "Consultar",
    seeAll: "Ver el catálogo",
    whatsappMessage: "Hola, me interesa el inmueble con referencia {ref}.",
    empty: {
      title: "Consulte *disponibilidad*",
      body: "Nuestra cartera de alquiler cambia con frecuencia. Díganos qué busca —nave o vivienda, superficie aproximada y zona— y le informaremos de lo que tengamos disponible.",
      cta: "Consultar disponibilidad",
    },
  },
  values: {
    title: "Tres palabras\n*que nos definen*",
    items: [
      {
        title: "Seriedad",
        body: "Cuarenta años en el sector nos han enseñado que la confianza se gana cumpliendo lo acordado.",
      },
      {
        title: "Honestidad",
        body: "Le decimos lo que pensamos de su inmueble con franqueza, también cuando la respuesta es no.",
      },
      {
        title: "Transparencia",
        body: "Cada paso de la operación, explicado con claridad desde el primer día.",
      },
    ],
  },
  closing: {
    eyebrow: "Hablemos",
    title: "¿Piensa en vender\n*su propiedad?*",
    body: "Cuéntenos qué inmueble tiene. Lo estudiaremos con atención y le daremos una respuesta clara.",
    imageAlt: "Terraza de una vivienda mediterránea al anochecer, con el interior iluminado",
  },
  whatsapp: {
    aria: "Abrir WhatsApp",
    messages: {
      general: "Hola, quisiera recibir más información.",
    },
  },
  footer: {
    tagline: "Empresa familiar en Castelldefels. Cuarenta años comprando y alquilando inmuebles.",
    navTitle: "Secciones",
    servicesTitle: "Servicios",
    contactTitle: "Contacto",
    followTitle: "Síganos",
    cookieSettings: "Preferencias de cookies",
    rights: "Todos los derechos reservados.",
    credit: "Diseño y desarrollo:",
    legalNotice: "Aviso legal",
    privacy: "Política de privacidad",
    cookies: "Política de cookies",
  },
  localeSwitcher: {
    aria: "Idioma",
  },
  consent: {
    title: "Cookies",
    body:
      "Usamos cookies de medición para saber cómo se usa la web. No se activa ninguna hasta que usted acepte.",
    accept: "Aceptar",
    reject: "Rechazar",
    link: "Más información",
  },
  notFound: {
    title: "Página no encontrada",
    body: "La dirección no existe o ha cambiado.",
  },
};
