import type { ServicesDict } from "@/lib/i18n/types";

export const services: ServicesDict = {
  meta: {
    title: "Servicios",
    seoTitle: "Compra y alquiler de inmuebles en Castelldefels · Tarida MC",
    description:
      "Compramos inmuebles directamente a sus propietarios y alquilamos naves industriales y viviendas en Castelldefels.",
  },
  index: {
    eyebrow: "Servicios",
    title: "Comprar y alquilar,\n*con el mismo criterio*",
    intro:
      "Dos actividades, una sola manera de trabajar: estudiar cada inmueble con atención y tratar a cada cliente con franqueza.",
    allServices: "Todos los servicios",
  },
  detail: {
    includesTitle: "Qué valoramos",
    faqTitle: "Preguntas frecuentes",
    otherServices: "Otro servicio",
    requestTitle: "¿Le interesa?",
    requestBody: "Cuéntenos qué necesita y le responderemos personalmente.",
  },
  items: {
    purchase: {
      title: "Compramos su inmueble",
      shortTitle: "Vender un inmueble",
      teaser:
        "Si tiene una propiedad y quiere venderla, estudiamos la operación y, si encaja, se la compramos.",
      metaDescription:
        "Tarida MC compra inmuebles directamente a sus propietarios en Castelldefels. Analizamos cada activo y, si la oportunidad encaja, le presentamos una propuesta de compra.",
      intro:
        "Compramos inmuebles directamente a sus propietarios. Analizamos cada activo con detenimiento y, cuando la oportunidad encaja con lo que buscamos, presentamos una propuesta de compra. Con la seriedad de una empresa familiar con cuarenta años en el sector.",
      imageAlt: "Fachada de una vivienda mediterránea con luz cálida",
      includes: [
        "Ubicación y entorno",
        "Tipo de inmueble y superficie",
        "Estado de conservación",
        "Situación registral y urbanística",
        "Potencial del activo",
      ],
      sections: [
        {
          heading: "Nos presenta el inmueble",
          body: ["Cuéntenos qué propiedad tiene: tipo, ubicación, superficie y situación. Por formulario o por WhatsApp."],
        },
        {
          heading: "Analizamos el activo",
          body: ["Estudiamos el inmueble y su potencial con la experiencia de cuarenta años en el mercado."],
        },
        {
          heading: "Le damos una respuesta",
          body: ["Si la oportunidad nos interesa, le presentamos una propuesta de compra. Si no, se lo decimos con la misma claridad."],
        },
        {
          heading: "Cerramos la operación",
          body: ["Le acompañamos en cada paso hasta la firma, con total transparencia."],
        },
      ],
      whatsappMessage: "Hola, quisiera que valorasen la compra de mi inmueble.",
      cta: "Proponer mi inmueble",
    },
    rental: {
      title: "Naves y viviendas en alquiler",
      shortTitle: "Alquilar un inmueble",
      teaser: "Naves industriales y viviendas en Castelldefels, de nuestra propia cartera.",
      metaDescription:
        "Alquiler de naves industriales y viviendas en Castelldefels para empresas y particulares. Inmuebles de la propia cartera de Tarida MC, con trato directo.",
      intro:
        "Alquilamos naves industriales y viviendas en Castelldefels, a empresas y a particulares. Son inmuebles de nuestra propia cartera: los conocemos bien y le atendemos directamente.",
      imageAlt: "Nave industrial diáfana y luminosa",
      includes: [],
      sections: [],
      whatsappMessage: "Hola, me interesa información sobre sus inmuebles en alquiler.",
      cta: "Consultar disponibilidad",
    },
  },
};
