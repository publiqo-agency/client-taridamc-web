/**
 * Default-locale copy: its shape is the type contract for every other
 * language (lib/i18n/types.ts). No `as const` here.
 */
export const common = {
  meta: {
    defaultTitle: "Tarida MC",
    description:
      "Descripción de una frase del negocio, con lo que hace y para quién. Es la meta description por defecto de todo el sitio.",
  },
  nav: {
    home: "Inicio",
    services: "Servicios",
    about: "Nosotros",
    faq: "Preguntas frecuentes",
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
  whatsapp: {
    aria: "Abrir WhatsApp",
    messages: {
      general: "Hola, quisiera recibir más información.",
    },
  },
  footer: {
    tagline: "Una frase que resume la propuesta del negocio.",
    navTitle: "Secciones",
    servicesTitle: "Servicios",
    contactTitle: "Contacto",
    followTitle: "Síguenos",
    cookieSettings: "Preferencias de cookies",
    rights: "Todos los derechos reservados.",
    credit: "Web por",
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
