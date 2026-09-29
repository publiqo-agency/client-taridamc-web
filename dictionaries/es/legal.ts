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
  ownerLabels: {
    name: "Razón social",
    taxId: "NIF",
    address: "Domicilio social",
    email: "Email",
    phone: "Teléfono",
  },
  updated: "Última actualización: septiembre de 2026.",
  notice: {
    title: "Aviso legal",
    intro: "Información general del titular de este sitio web, en cumplimiento de la Ley 34/2002 (LSSI-CE).",
    sections: [
      {
        heading: "Titular",
        body: [
          "En cumplimiento del artículo 10 de la Ley 34/2002 (LSSI-CE), le informamos de que este sitio web es titularidad de:",
        ],
        owner: true,
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
      {
        heading: "Legislación aplicable",
        body: [
          "Este aviso legal se rige por la legislación española. Cualquier controversia se someterá a los juzgados y tribunales que correspondan conforme a la ley; si usted es consumidor, a los de su domicilio.",
        ],
      },
    ],
  },
  privacy: {
    title: "Política de privacidad",
    intro: "Cómo tratamos los datos personales que nos facilita a través de este sitio, conforme al RGPD y a la LOPDGDD.",
    sections: [
      {
        heading: "Responsable del tratamiento",
        body: [
          "El responsable del tratamiento de sus datos es:",
        ],
        owner: true,
      },
      {
        heading: "Qué datos tratamos y para qué",
        body: [
          "Los datos que envía por el formulario de contacto o por WhatsApp (nombre, email, teléfono y el contenido del mensaje) se usan únicamente para responder a su solicitud y, si usted lo desea, para gestionar la operación que nos plantee.",
          "El nombre, el email y el mensaje son necesarios para poder responderle; el teléfono es opcional. No tomamos decisiones automatizadas ni elaboramos perfiles con sus datos.",
          "Con su consentimiento, usamos cookies de medición para conocer el uso del sitio de forma agregada. Ver la política de cookies.",
        ],
      },
      {
        heading: "Base legal",
        body: [
          "Su consentimiento, que da al enviar el formulario o al escribirnos, y, cuando nos pide información sobre una operación, la aplicación de medidas precontractuales a petición suya.",
          "Puede retirar su consentimiento en cualquier momento, sin que ello afecte a la licitud del tratamiento anterior.",
        ],
      },
      {
        heading: "Conservación",
        body: [
          "Conservamos sus datos mientras sean necesarios para atender su solicitud o mientras dure la relación y, después, bloqueados durante los plazos en que puedan exigirse responsabilidades legales. Los eliminamos antes si nos lo pide.",
        ],
      },
      {
        heading: "Destinatarios",
        body: [
          "No cedemos sus datos a terceros, salvo obligación legal.",
          "Tratan datos por cuenta nuestra, como encargados del tratamiento: Vercel Inc. (alojamiento del sitio), Resend (envío de los mensajes del formulario) y, solo si acepta las cookies de medición, Google Ireland Ltd. (Google Tag Manager y Google Analytics).",
          "Si nos escribe por WhatsApp, WhatsApp (Meta) trata sus datos como responsable independiente, según su propia política de privacidad.",
        ],
      },
      {
        heading: "Transferencias internacionales",
        body: [
          "Algunos de estos proveedores pueden tratar datos en Estados Unidos. Esas transferencias se amparan en el Marco de Privacidad de Datos UE-EE. UU. o en las cláusulas contractuales tipo aprobadas por la Comisión Europea.",
        ],
      },
      {
        heading: "Sus derechos",
        body: [
          "Puede ejercer los derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad escribiendo al email indicado más arriba, en «Responsable del tratamiento», e indicando qué derecho ejerce.",
          "Si considera que no hemos atendido correctamente su solicitud, puede presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).",
        ],
      },
    ],
  },
  cookies: {
    title: "Política de cookies",
    intro: "Qué cookies y almacenamiento local usa este sitio y cómo puede decidir sobre ellos.",
    sections: [
      {
        heading: "Responsable",
        body: [
          "El responsable de las cookies que utiliza este sitio es:",
        ],
        owner: true,
      },
      {
        heading: "Qué son",
        body: [
          "Las cookies y el almacenamiento local son pequeños ficheros o datos que el sitio guarda en su navegador para recordar información entre visitas.",
        ],
      },
      {
        heading: "Cookies técnicas (siempre activas)",
        body: [
          "«locale» — propia. Recuerda el idioma que ha elegido. Duración: 1 año.",
          "«consent» (almacenamiento local) — propio. Guarda su respuesta al aviso de cookies. Duración: hasta que borre los datos del sitio.",
          "Son necesarias para que el sitio funcione y recuerde sus decisiones, por lo que no requieren consentimiento.",
        ],
      },
      {
        heading: "Cookies de medición (solo si las acepta)",
        body: [
          "«_ga» — Google Analytics (Google Ireland Ltd.). Distingue visitantes de forma anónima para obtener estadísticas agregadas. Duración: 2 años.",
          "«_ga_<ID>» — Google Analytics. Mantiene el estado de la visita. Duración: 2 años.",
          "Google puede tratar estos datos en Estados Unidos, al amparo del Marco de Privacidad de Datos UE-EE. UU. Más información en policies.google.com/privacy.",
        ],
      },
      {
        heading: "Cómo cambiar su decisión",
        body: [
          "Puede cambiar su decisión en cualquier momento desde «Preferencias de cookies», en el pie de página, o borrando los datos del sitio en su navegador.",
        ],
      },
    ],
  },
};
