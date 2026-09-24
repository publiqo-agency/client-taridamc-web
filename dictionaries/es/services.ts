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
    title: "Todo lo que podemos hacer por ti",
    intro: "Una frase que presenta el catálogo y a quién va dirigido.",
    allServices: "Todos los servicios",
  },
  detail: {
    includesTitle: "Qué incluye",
    faqTitle: "Preguntas frecuentes",
    otherServices: "Otros servicios",
    requestTitle: "¿Te interesa?",
    requestBody: "Cuéntanos qué necesitas y te preparamos una propuesta a medida.",
  },
  items: {
    "service-one": {
      title: "Servicio uno",
      shortTitle: "Servicio uno",
      teaser: "Una frase que resume el servicio.",
      metaDescription: "Meta description de la ficha del servicio uno.",
      intro: "Párrafo de introducción: qué es, para quién y qué resuelve.",
      imageAlt: "Descripción de la foto del servicio uno",
      includes: ["Elemento incluido", "Otro elemento incluido", "Un tercero"],
      sections: [
        {
          heading: "Cómo trabajamos",
          body: ["Un párrafo sobre el proceso.", "Otro sobre el resultado."],
        },
      ],
      faq: [
        { question: "¿Una duda habitual sobre este servicio?", answer: "La respuesta, en una o dos frases." },
      ],
      whatsappMessage: "Hola, me interesa el servicio uno.",
      cta: "Pedir propuesta",
    },
    "service-two": {
      title: "Servicio dos",
      shortTitle: "Servicio dos",
      teaser: "Una frase que resume el servicio.",
      metaDescription: "Meta description de la ficha del servicio dos.",
      intro: "Párrafo de introducción: qué es, para quién y qué resuelve.",
      imageAlt: "Descripción de la foto del servicio dos",
      includes: ["Elemento incluido", "Otro elemento incluido"],
      sections: [
        {
          heading: "Cómo trabajamos",
          body: ["Un párrafo sobre el proceso."],
        },
      ],
      whatsappMessage: "Hola, me interesa el servicio dos.",
      cta: "Pedir propuesta",
    },
    "service-three": {
      title: "Servicio tres",
      shortTitle: "Servicio tres",
      teaser: "Una frase que resume el servicio.",
      metaDescription: "Meta description de la ficha del servicio tres.",
      intro: "Párrafo de introducción: qué es, para quién y qué resuelve.",
      imageAlt: "Descripción de la foto del servicio tres",
      includes: ["Elemento incluido"],
      sections: [
        {
          heading: "Cómo trabajamos",
          body: ["Un párrafo sobre el proceso."],
        },
      ],
      whatsappMessage: "Hola, me interesa el servicio tres.",
      cta: "Pedir propuesta",
    },
  },
};
