/**
 * Legal pages. Generic wording for a Spanish business; the client's lawyer
 * reviews it before launch. The `pending` block shows while lib/site.ts has
 * no legal data (LegalPage decides). The `updated` date is a constant, never
 * `new Date()`.
 */
export const legal = {
  pending: {
    label: "Pendiente",
    body: "Faltan los datos registrales del titular (razón social, NIF, domicilio). Este aviso desaparece al rellenarlos en lib/site.ts.",
  },
  updated: "Última actualización: septiembre de 2026.",
  notice: {
    title: "Aviso legal",
    intro: "Información general del titular de este sitio web, en cumplimiento de la Ley 34/2002 (LSSI-CE).",
    sections: [
      {
        heading: "Titular",
        body: [
          "Este sitio web es titularidad de la entidad identificada en el pie de página, con los datos de contacto que figuran en él.",
        ],
      },
      {
        heading: "Uso del sitio",
        body: [
          "El acceso y uso de este sitio atribuye la condición de usuario e implica la aceptación de estas condiciones. El usuario se compromete a hacer un uso adecuado de los contenidos y a no emplearlos para actividades ilícitas.",
        ],
      },
      {
        heading: "Propiedad intelectual",
        body: [
          "Los contenidos de este sitio (textos, imágenes, logotipos, diseño) son propiedad del titular o de terceros que han autorizado su uso. Queda prohibida su reproducción sin autorización expresa.",
        ],
      },
      {
        heading: "Responsabilidad",
        body: [
          "El titular no se hace responsable de los daños derivados del uso de la información contenida en este sitio ni de los contenidos de sitios de terceros enlazados.",
        ],
      },
    ],
  },
  privacy: {
    title: "Política de privacidad",
    intro: "Cómo tratamos los datos personales que nos facilitas a través de este sitio, conforme al RGPD y a la LOPDGDD.",
    sections: [
      {
        heading: "Responsable del tratamiento",
        body: ["El titular identificado en el aviso legal y en el pie de página."],
      },
      {
        heading: "Qué datos tratamos y para qué",
        body: [
          "Los datos que envías por el formulario de contacto o por WhatsApp (nombre, email, teléfono y el contenido del mensaje) se usan únicamente para responder a tu solicitud.",
          "Con tu consentimiento, usamos cookies de medición para conocer el uso del sitio. Ver la política de cookies.",
        ],
      },
      {
        heading: "Base legal y conservación",
        body: [
          "La base legal es tu consentimiento y, en su caso, la ejecución de medidas precontractuales. Los datos de contacto se conservan mientras dure la relación o hasta que solicites su supresión.",
        ],
      },
      {
        heading: "Destinatarios",
        body: [
          "Los mensajes del formulario se envían a través de un proveedor de correo transaccional (Resend) y el sitio se aloja en Vercel. Ambos actúan como encargados del tratamiento.",
        ],
      },
      {
        heading: "Tus derechos",
        body: [
          "Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo al email del pie de página. También puedes reclamar ante la Agencia Española de Protección de Datos.",
        ],
      },
    ],
  },
  cookies: {
    title: "Política de cookies",
    intro: "Qué cookies y almacenamiento local usa este sitio y cómo puedes decidir sobre ellos.",
    sections: [
      {
        heading: "Qué usamos",
        body: [
          "Almacenamiento técnico: la elección de idioma (cookie «locale») y tu respuesta al aviso de cookies (localStorage). Son necesarios para que el sitio recuerde tus decisiones.",
          "Medición: con tu consentimiento, Google Tag Manager carga Google Analytics 4 para medir el uso del sitio de forma agregada. Sin consentimiento no se activa ninguna cookie de medición.",
        ],
      },
      {
        heading: "Cómo cambiar tu decisión",
        body: [
          "Puedes cambiar tu decisión en cualquier momento desde «Preferencias de cookies», en el pie de página, o borrando los datos del sitio en tu navegador.",
        ],
      },
    ],
  },
};
