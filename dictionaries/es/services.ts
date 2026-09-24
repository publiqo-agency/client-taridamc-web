import type { ServicesDict } from "@/lib/i18n/types";

/**
 * Declared against the explicit type (not derived): `items` is a
 * Record<ServiceId, ServiceCopy>, so a service added in lib/services.ts
 * without copy breaks the build here.
 */
export const services: ServicesDict = {
  meta: {
    title: "Servicios",
    seoTitle: "Servicios · Tarida MC",
    description: "Meta description del índice de servicios.",
  },
  index: {
    eyebrow: "Servicios",
    title: "Todo lo que podemos hacer por usted",
    intro: "Una frase que presenta el catálogo y a quién va dirigido.",
    allServices: "Todos los servicios",
  },
  detail: {
    includesTitle: "Qué incluye",
    faqTitle: "Preguntas frecuentes",
    otherServices: "Otros servicios",
    requestTitle: "¿Le interesa?",
    requestBody: "Cuéntenos qué necesita y le preparamos una propuesta a medida.",
  },
  items: {
    rental: {
      title: "Alquiler de inmuebles",
      shortTitle: "Alquiler",
      teaser: "Una frase que resume el servicio.",
      metaDescription: "Meta description de la ficha de alquiler.",
      intro: "Párrafo de introducción: qué es, para quién y qué resuelve.",
      imageAlt: "Descripción de la foto de alquiler",
      includes: [],
      sections: [],
      whatsappMessage: "Hola, me interesa información sobre sus inmuebles en alquiler.",
      cta: "Solicitar información",
    },
    purchase: {
      title: "Compramos su inmueble",
      shortTitle: "Compra",
      teaser: "Una frase que resume el servicio.",
      metaDescription: "Meta description de la ficha de compra.",
      intro: "Párrafo de introducción: qué es, para quién y qué resuelve.",
      imageAlt: "Descripción de la foto de compra",
      includes: [],
      sections: [],
      whatsappMessage: "Hola, quisiera que valorasen la compra de mi inmueble.",
      cta: "Solicitar información",
    },
  },
};
