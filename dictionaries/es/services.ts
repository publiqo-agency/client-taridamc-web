import type { ServicesDict } from "@/lib/i18n/types";

/**
 * Service pages. Facts only from the brief and what the client confirmed on
 * 2026-09-29: Tarida MC buys flats, houses and industrial units (naves) from
 * their owners anywhere in Spain, also let, inherited, in need of renovation
 * or with a mortgage or charges; it lets naves and homes of its own portfolio
 * in Castelldefels. No timings, percentages or payment terms: none has been
 * given. Every FAQ answer must stay true without one.
 */
export const services: ServicesDict = {
  meta: {
    title: "Servicios",
    seoTitle: "Compra y alquiler de inmuebles: servicios | Tarida MC",
    description:
      "Compramos pisos, casas y naves industriales en toda España y alquilamos naves y viviendas de nuestra propia cartera en Castelldefels.",
  },
  index: {
    eyebrow: "Servicios",
    title: "Comprar y alquilar,\n*con el mismo criterio*",
    intro:
      "Compramos pisos, casas y naves industriales en toda España y alquilamos naves y viviendas de nuestra propia cartera. Cuatro servicios y una sola manera de trabajar: estudiar cada inmueble con atención y tratar a cada cliente con franqueza.",
    imageAlt: "Muro blanco con una puerta de madera y un olivo",
    allServices: "Todos los servicios",
  },
  detail: {
    faqTitle: "Preguntas\n*frecuentes*",
    otherServices: "Relacionado",
    requestBody: "Cuéntenos qué necesita y le responderemos personalmente.",
  },
  items: {
    purchase: {
      title: "Compramos su piso o casa",
      shortTitle: "Vender un piso o una casa",
      kicker: "Para propietarios",
      heroTitle: "Compramos\n*su piso o su casa*",
      seoTitle: "Compramos su piso o casa en toda España | Tarida MC",
      teaser:
        "Si tiene un piso o una casa y quiere venderlo, estudiamos la operación y, si encaja, se lo compramos directamente, en cualquier punto de España.",
      metaDescription:
        "Compramos pisos y casas directamente a sus propietarios en toda España. Analizamos cada inmueble y, si encaja, le hacemos una propuesta de compra.",
      intro:
        "Compramos pisos y casas directamente a sus propietarios, en cualquier punto de España. Analizamos cada inmueble con detenimiento y, cuando la operación tiene sentido, le presentamos una propuesta de compra. Sin intermediarios, con la seriedad de una empresa familiar con cuarenta años en el sector.",
      imageAlt: "Alero de teja y contraventana de una casa mediterránea con luz cálida",
      learnMore: "Cómo compramos",
      includesTitle: "Qué valoramos",
      includes: [
        "Ubicación y entorno",
        "Tipo de inmueble y superficie",
        "Estado de conservación",
        "Situación registral y urbanística",
        "Potencial del activo",
      ],
      process: {
        title: "Cómo funciona\n*la compra directa*",
        intro: "Cuando nos propone un inmueble, sabe en todo momento en qué punto está la operación.",
      },
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
          body: ["Si la operación nos interesa, le presentamos una propuesta de compra. Si no, se lo decimos con la misma claridad."],
        },
        {
          heading: "Cerramos la operación",
          body: ["Le acompañamos en cada paso hasta la firma ante notario, con total transparencia."],
        },
      ],
      scope: {
        title: "Qué compramos",
        body: [
          "Pisos, casas y naves industriales, en cualquier punto de España. Tenemos la sede en Castelldefels, pero estudiamos inmuebles en todo el país.",
          "También cuando el inmueble está alquilado, procede de una herencia, necesita una reforma o tiene hipoteca o cargas: lo estudiamos igual, y su situación se tiene en cuenta en la propuesta.",
        ],
      },
      comparison: {
        title: "Venta directa\n*o con una agencia*",
        intro: "Son dos caminos distintos y cada uno tiene su momento. Así se diferencian.",
        columns: ["Venta directa a Tarida MC", "Venta a través de una agencia"],
        rows: [
          { label: "Quién compra", values: ["Nosotros, directamente", "Un comprador que la agencia busca en el mercado"] },
          { label: "Su interlocutor", values: ["Quien compra, de principio a fin", "La agencia, entre usted y cada interesado"] },
          { label: "Visitas", values: ["Las necesarias para analizar el inmueble", "Las de cada posible comprador"] },
          { label: "Precio", values: ["Una propuesta basada en nuestro análisis del activo", "El que acepte un comprador del mercado"] },
          { label: "Cuándo conviene", values: ["Si prefiere certeza y un solo interlocutor", "Si busca el precio de mercado y puede esperar"] },
        ],
      },
      faq: [
        {
          question: "¿Qué tipo de inmuebles compran?",
          answer:
            "Pisos, casas y naves industriales. Si tiene otro tipo de inmueble, cuéntenoslo igualmente y le diremos con franqueza si encaja.",
        },
        {
          question: "¿En qué zonas compran?",
          answer:
            "En toda España. Nuestra sede está en Castelldefels, pero estudiamos inmuebles en cualquier punto del país.",
        },
        {
          question: "¿Compran inmuebles alquilados, heredados, para reformar o con cargas?",
          answer:
            "Sí. Los estudiamos igual que cualquier otro inmueble: su situación forma parte del análisis y se tiene en cuenta en la propuesta.",
        },
        {
          question: "¿Cómo valoran el inmueble?",
          answer:
            "Estudiamos la ubicación y el entorno, el tipo de inmueble y su superficie, el estado de conservación, la situación registral y urbanística y el potencial del activo.",
        },
        {
          question: "¿Siempre hacen una propuesta de compra?",
          answer:
            "No. Solo cuando la operación encaja con lo que buscamos. Si no encaja, se lo decimos con la misma claridad, sin hacerle perder el tiempo.",
        },
        {
          question: "¿Son una agencia o un intermediario?",
          answer:
            "No. Si llegamos a un acuerdo, quien compra es Tarida MC. Usted trata directamente con nosotros de principio a fin.",
        },
        {
          question: "¿Cuánto tarda la operación?",
          answer:
            "Depende del inmueble, de su documentación y de su situación. No le daremos un plazo que no podamos cumplir: le diremos en cada momento en qué punto está la operación.",
        },
        {
          question: "¿Cómo empiezo?",
          answer:
            "Escríbanos por el formulario o por WhatsApp con el tipo de inmueble, su ubicación, la superficie y su situación. Lo estudiaremos y le responderemos personalmente.",
        },
      ],
      closing: {
        title: "¿Piensa en vender\n*su piso o su casa?*",
        body: "Cuéntenos qué inmueble tiene. Lo estudiaremos con atención y le daremos una respuesta clara.",
      },
      whatsappMessage: "Hola, quisiera que valorasen la compra de mi inmueble.",
      cta: "Proponer mi inmueble",
    },
    "purchase-warehouses": {
      title: "Compramos naves industriales",
      shortTitle: "Vender una nave industrial",
      kicker: "Para propietarios de naves",
      heroTitle: "Compramos\n*naves industriales*",
      seoTitle: "Compramos naves industriales en toda España | Tarida MC",
      teaser:
        "Si tiene una nave industrial y quiere venderla, libre o alquilada, la estudiamos y, si encaja, se la compramos directamente.",
      metaDescription:
        "Compramos naves industriales a sus propietarios en toda España, libres o alquiladas. Analizamos cada nave y, si encaja, le hacemos una propuesta.",
      intro:
        "Compramos naves industriales directamente a sus propietarios, en cualquier punto de España, libres o con inquilino. Conocemos este tipo de activo porque también alquilamos naves de nuestra propia cartera: analizamos cada una con detenimiento y, cuando la operación tiene sentido, le presentamos una propuesta de compra.",
      imageAlt: "Interior diáfano de una nave industrial con estructura de acero y lucernarios",
      learnMore: "Cómo compramos naves",
      includesTitle: "Qué valoramos\n*en una nave*",
      includes: [
        "Ubicación y accesos",
        "Superficie construida y de parcela",
        "Estado de la construcción y las instalaciones",
        "Situación registral y urbanística",
        "Si está libre o alquilada",
      ],
      process: {
        title: "Cómo funciona\n*la compra de su nave*",
        intro: "Un proceso claro, con un solo interlocutor de principio a fin.",
      },
      sections: [
        {
          heading: "Nos presenta la nave",
          body: ["Ubicación, superficie, estado y si está libre o alquilada. Por formulario o por WhatsApp."],
        },
        {
          heading: "Analizamos el activo",
          body: ["Estudiamos la nave, su entorno y su potencial con la experiencia de cuarenta años en el sector."],
        },
        {
          heading: "Le damos una respuesta",
          body: ["Si la operación nos interesa, le presentamos una propuesta de compra. Si no, se lo decimos con la misma claridad."],
        },
        {
          heading: "Cerramos la operación",
          body: ["Le acompañamos en cada paso hasta la firma ante notario, con total transparencia."],
        },
      ],
      scope: {
        title: "Qué naves compramos",
        body: [
          "Naves industriales en cualquier punto de España, libres o con inquilino. Tenemos la sede en Castelldefels, pero estudiamos naves en todo el país.",
          "También cuando la nave necesita una reforma o tiene hipoteca o cargas: su situación forma parte del análisis y se tiene en cuenta en la propuesta.",
        ],
      },
      faq: [
        {
          question: "¿Compran naves alquiladas?",
          answer:
            "Sí. Si la nave tiene inquilino, el contrato vigente forma parte del análisis y se tiene en cuenta en la propuesta.",
        },
        {
          question: "¿En qué zonas compran naves?",
          answer:
            "En toda España. Nuestra sede está en Castelldefels, pero estudiamos naves en cualquier punto del país.",
        },
        {
          question: "¿Qué valoran de una nave?",
          answer:
            "La ubicación y los accesos, la superficie construida y de parcela, el estado de la construcción y las instalaciones, la situación registral y urbanística y si está libre o alquilada.",
        },
        {
          question: "¿Siempre hacen una propuesta de compra?",
          answer:
            "No. Solo cuando la operación encaja con lo que buscamos. Si no encaja, se lo decimos con la misma claridad, sin hacerle perder el tiempo.",
        },
        {
          question: "¿Son una agencia o un intermediario?",
          answer:
            "No. Si llegamos a un acuerdo, quien compra la nave es Tarida MC. Usted trata directamente con nosotros de principio a fin.",
        },
        {
          question: "¿Cuánto tarda la operación?",
          answer:
            "Depende de la nave, de su documentación y de su situación. No le daremos un plazo que no podamos cumplir: le diremos en cada momento en qué punto está la operación.",
        },
        {
          question: "¿Cómo empiezo?",
          answer:
            "Escríbanos por el formulario o por WhatsApp con la ubicación de la nave, su superficie, su estado y si está libre o alquilada. La estudiaremos y le responderemos personalmente.",
        },
      ],
      closing: {
        title: "¿Piensa en vender\n*su nave?*",
        body: "Cuéntenos cómo es. La estudiaremos con atención y le daremos una respuesta clara.",
      },
      whatsappMessage: "Hola, quisiera que valorasen la compra de mi nave industrial.",
      cta: "Proponer mi nave",
    },
    "rental-warehouses": {
      title: "Naves industriales en alquiler",
      shortTitle: "Alquilar una nave",
      kicker: "Para empresas",
      heroTitle: "Naves industriales\n*en alquiler*",
      seoTitle: "Naves industriales en alquiler en Castelldefels | Tarida MC",
      teaser: "Naves industriales en Castelldefels de nuestra propia cartera, con trato directo con la propiedad.",
      metaDescription:
        "Alquiler de naves industriales en Castelldefels, de la propia cartera de Tarida MC. Trato directo con la propiedad, sin intermediarios.",
      intro:
        "Alquilamos naves industriales de nuestra propia cartera en Castelldefels. Las conocemos bien porque son nuestras: le informamos con claridad de lo que tenemos disponible y usted trata directamente con la propiedad, sin intermediarios.",
      imageAlt: "Nave industrial diáfana y luminosa, con estructura metálica blanca",
      learnMore: "Ver naves en alquiler",
      includesTitle: "Qué ofrecemos",
      includes: [
        "Naves de nuestra propia cartera",
        "Trato directo con la propiedad",
        "Información clara sobre la disponibilidad",
        "Una respuesta personal a cada consulta",
      ],
      process: {
        title: "Cómo alquilar\n*una nave*",
        intro: "Sin intermediarios: habla con la propiedad desde la primera consulta.",
      },
      sections: [
        {
          heading: "Nos cuenta qué busca",
          body: ["Superficie aproximada, uso previsto y fecha en que la necesita. Por formulario o por WhatsApp."],
        },
        {
          heading: "Le informamos de lo disponible",
          body: ["Le decimos con claridad qué naves tenemos que encajan con lo que busca."],
        },
        {
          heading: "Visita la nave",
          body: ["Le enseñamos la nave y resolvemos sus dudas sobre el inmueble."],
        },
        {
          heading: "Firmamos el contrato",
          body: ["Cuando todo está claro, formalizamos el alquiler directamente con usted."],
        },
      ],
      faq: [
        {
          question: "¿Alquilan directamente, sin agencia?",
          answer: "Sí. Las naves son de nuestra propia cartera: usted trata directamente con la propiedad, sin intermediarios.",
        },
        {
          question: "¿Dónde están las naves?",
          answer:
            "En Castelldefels. Si busca en otra zona, díganoslo igualmente y le informaremos de lo que tengamos.",
        },
        {
          question: "¿Qué información necesitan para empezar?",
          answer:
            "La superficie aproximada, el uso que dará a la nave y la fecha en que la necesita. Con eso le decimos qué tenemos disponible.",
        },
        {
          question: "¿Cómo sé qué naves hay disponibles?",
          answer:
            "Nuestra cartera cambia con frecuencia. Escríbanos por el formulario o por WhatsApp y le responderemos personalmente con lo que tengamos.",
        },
      ],
      closing: {
        title: "¿Busca una nave\n*en alquiler?*",
        body: "Díganos qué necesita —superficie, uso y fecha— y le informaremos de lo que tengamos disponible.",
      },
      whatsappMessage: "Hola, busco una nave industrial en alquiler.",
      cta: "Consultar disponibilidad",
    },
    "rental-homes": {
      title: "Pisos y casas en alquiler",
      shortTitle: "Alquilar una vivienda",
      kicker: "Para particulares",
      heroTitle: "Pisos y casas\n*en alquiler*",
      seoTitle: "Pisos y casas en alquiler en Castelldefels | Tarida MC",
      teaser: "Pisos y casas en Castelldefels de nuestra propia cartera, con trato directo con la propiedad.",
      metaDescription:
        "Alquiler de pisos y casas en Castelldefels, de la propia cartera de Tarida MC. Trato directo con la propiedad, sin intermediarios.",
      intro:
        "Alquilamos pisos y casas de nuestra propia cartera en Castelldefels. Los conocemos bien porque son nuestros: le informamos con claridad de lo que tenemos disponible y usted trata directamente con la propiedad, sin intermediarios.",
      imageAlt: "Casa mediterránea encalada entre cipreses",
      learnMore: "Ver viviendas en alquiler",
      includesTitle: "Qué ofrecemos",
      includes: [
        "Viviendas de nuestra propia cartera",
        "Trato directo con la propiedad",
        "Información clara sobre la disponibilidad",
        "Una respuesta personal a cada consulta",
      ],
      process: {
        title: "Cómo alquilar\n*una vivienda*",
        intro: "Sin intermediarios: habla con la propiedad desde la primera consulta.",
      },
      sections: [
        {
          heading: "Nos cuenta qué busca",
          body: ["Tipo de vivienda, número de habitaciones y fecha en que la necesita. Por formulario o por WhatsApp."],
        },
        {
          heading: "Le informamos de lo disponible",
          body: ["Le decimos con claridad qué viviendas tenemos que encajan con lo que busca."],
        },
        {
          heading: "Visita la vivienda",
          body: ["Le enseñamos la vivienda y resolvemos sus dudas."],
        },
        {
          heading: "Firmamos el contrato",
          body: ["Cuando todo está claro, formalizamos el alquiler directamente con usted."],
        },
      ],
      faq: [
        {
          question: "¿Alquilan directamente, sin agencia?",
          answer: "Sí. Las viviendas son de nuestra propia cartera: usted trata directamente con la propiedad, sin intermediarios.",
        },
        {
          question: "¿Dónde están las viviendas?",
          answer:
            "En Castelldefels. Si busca en otra zona, díganoslo igualmente y le informaremos de lo que tengamos.",
        },
        {
          question: "¿Qué información necesitan para empezar?",
          answer:
            "El tipo de vivienda que busca, el número de habitaciones y la fecha en que la necesita. Con eso le decimos qué tenemos disponible.",
        },
        {
          question: "¿Cómo sé qué viviendas hay disponibles?",
          answer:
            "Nuestra cartera cambia con frecuencia. Escríbanos por el formulario o por WhatsApp y le responderemos personalmente con lo que tengamos.",
        },
      ],
      closing: {
        title: "¿Busca una vivienda\n*en alquiler?*",
        body: "Díganos qué necesita —tipo de vivienda, habitaciones y fecha— y le informaremos de lo que tengamos disponible.",
      },
      whatsappMessage: "Hola, busco una vivienda en alquiler.",
      cta: "Consultar disponibilidad",
    },
  },
};
