/**
 * Legal pages: legal notice (LSSI-CE art. 10), privacy policy (GDPR art. 13,
 * LOPDGDD art. 11) and cookie policy (LSSI-CE art. 22.2, AEPD cookie guide).
 * The wording is the agency's draft; the client's lawyer reviews it before
 * launch (docs/PENDING.md). Facts about the business come only from the brief
 * and lib/site.ts, which LegalPage reads for the owner block: no company data
 * is written here.
 *
 * Section shape: `body` paragraphs, then optionally `list` (bullets), `table`
 * (the cookie list), `owner` (the owner block from lib/site.ts) and `links`
 * (to the other legal pages). The `pending` block shows while lib/site.ts has
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
    registry: "Datos registrales",
    email: "Email",
    phone: "Teléfono",
  },
  /** Preview-only chip on the owner block while lib/site.ts has no `registry`. */
  registryPending: "Falta la inscripción en el Registro Mercantil",
  linkLabels: {
    legalNotice: "Aviso legal",
    privacy: "Política de privacidad",
    cookies: "Política de cookies",
  },
  updated: "Última actualización: octubre de 2026.",
  notice: {
    title: "Aviso legal",
    intro: "Información sobre el titular de este sitio web y condiciones de uso, en cumplimiento de la Ley 34/2002, de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE).",
    sections: [
      {
        heading: "Titular del sitio web",
        body: [
          "En cumplimiento del artículo 10 de la LSSI-CE, le informamos de que este sitio web es titularidad de:",
        ],
        owner: true,
      },
      {
        heading: "Objeto",
        body: [
          "Este sitio presenta la actividad de Tarida MC: la compra de pisos, casas y naves industriales a sus propietarios en toda España y el alquiler de naves industriales y viviendas de su propia cartera. Desde él puede contactar con nosotros por formulario, WhatsApp, teléfono o email.",
        ],
      },
      {
        heading: "Condiciones de uso",
        body: [
          "El acceso a este sitio es gratuito y atribuye la condición de usuario, lo que implica la aceptación de este aviso legal en la versión publicada en el momento del acceso.",
          "El usuario se compromete a utilizar el sitio y sus contenidos conforme a la ley, la buena fe y el orden público, y a no emplearlos para fines ilícitos o que puedan dañar los derechos de Tarida MC o de terceros, ni el funcionamiento del sitio.",
        ],
      },
      {
        heading: "Información sobre inmuebles",
        body: [
          "La información que este sitio ofrece sobre inmuebles, incluidos superficies, características y disponibilidad, es orientativa y puede cambiar sin previo aviso. No constituye una oferta vinculante ni forma parte de ningún contrato: las condiciones de cada operación son las que se pacten por escrito.",
          "Que nos proponga un inmueble no nos obliga a comprarlo: estudiamos cada caso y le respondemos.",
        ],
      },
      {
        heading: "Propiedad intelectual e industrial",
        body: [
          "Los contenidos de este sitio (textos, fotografías, logotipos, diseño y código) son propiedad de Tarida MC o de terceros que han autorizado su uso, y están protegidos por la normativa de propiedad intelectual e industrial.",
          "Queda prohibida su reproducción, distribución, comunicación pública o transformación, total o parcial, sin autorización expresa del titular, salvo para uso personal y privado.",
        ],
      },
      {
        heading: "Enlaces",
        body: [
          "Este sitio puede contener enlaces a sitios de terceros, como WhatsApp o Google. Tarida MC no controla esos sitios ni responde de sus contenidos o de sus políticas, que se rigen por sus propias condiciones.",
          "Quien quiera enlazar a este sitio puede hacerlo a su página principal o a cualquier otra, siempre que no dé a entender una relación con Tarida MC que no existe ni presente sus contenidos como propios.",
        ],
      },
      {
        heading: "Responsabilidad",
        body: [
          "Tarida MC procura que la información del sitio sea correcta y esté actualizada, pero no garantiza la ausencia de errores ni la disponibilidad ininterrumpida del sitio. No responde de los daños derivados de interrupciones técnicas, de virus introducidos por terceros ni del uso que se haga de la información publicada.",
        ],
      },
      {
        heading: "Protección de datos y cookies",
        body: [
          "El tratamiento de los datos personales que nos facilite y el uso de cookies se explican en las políticas correspondientes.",
        ],
        links: ["privacy", "cookies"],
      },
      {
        heading: "Modificaciones",
        body: [
          "Tarida MC puede modificar este aviso legal y los contenidos del sitio en cualquier momento. La versión vigente es la publicada en esta página.",
        ],
      },
      {
        heading: "Legislación aplicable y jurisdicción",
        body: [
          "Este aviso legal se rige por la legislación española. Cualquier controversia se someterá a los juzgados y tribunales que correspondan conforme a la ley; si usted es consumidor, a los de su domicilio.",
        ],
      },
    ],
  },
  privacy: {
    title: "Política de privacidad",
    intro: "Cómo tratamos los datos personales que nos facilita a través de este sitio y de nuestros canales de contacto, conforme al Reglamento (UE) 2016/679 (RGPD) y a la Ley Orgánica 3/2018 (LOPDGDD).",
    sections: [
      {
        heading: "Responsable del tratamiento",
        body: [
          "El responsable del tratamiento de sus datos es:",
        ],
        owner: true,
      },
      {
        heading: "Delegado de protección de datos",
        body: [
          "No hemos designado un delegado de protección de datos. Para cualquier cuestión sobre el tratamiento de sus datos, puede escribirnos al email indicado más arriba.",
        ],
      },
      {
        heading: "Qué datos tratamos",
        body: [
          "Tratamos únicamente los datos que usted nos facilita y los que genera su visita:",
        ],
        list: [
          "Formulario de contacto: nombre, email, teléfono (opcional), el tipo de consulta y el contenido de su mensaje.",
          "WhatsApp, teléfono y email: los datos de contacto con los que nos escribe o nos llama y lo que nos cuente en la conversación.",
          "Si la consulta sigue adelante: los datos del inmueble y los necesarios para estudiar y formalizar la operación.",
          "Navegación: la dirección IP y datos técnicos del navegador, que el servidor registra al servir las páginas.",
          "Cookies de medición, solo si las acepta (ver la política de cookies).",
        ],
      },
      {
        heading: "Para qué los tratamos y con qué base legal",
        body: [],
        list: [
          "Responder a su consulta o a la propuesta de su inmueble. Base legal: su consentimiento, que nos da al enviar el formulario o al escribirnos, y la aplicación, a petición suya, de medidas precontractuales (art. 6.1.a y 6.1.b RGPD).",
          "Estudiar y, en su caso, formalizar la compra o el alquiler. Base legal: la ejecución del contrato o de medidas precontractuales (art. 6.1.b RGPD) y el cumplimiento de las obligaciones legales que se derivan de la operación, como las fiscales (art. 6.1.c RGPD).",
          "Mantener el sitio seguro y en funcionamiento a partir de los registros del servidor. Base legal: nuestro interés legítimo en proteger el sitio (art. 6.1.f RGPD).",
          "Conocer de forma agregada cómo se usa el sitio. Base legal: su consentimiento a las cookies de medición (art. 6.1.a RGPD).",
        ],
      },
      {
        heading: "Datos obligatorios",
        body: [
          "En el formulario, el nombre, el email y el mensaje son necesarios para responderle; si no los facilita, no podremos atender su consulta. El teléfono es opcional.",
          "No tomamos decisiones automatizadas ni elaboramos perfiles con sus datos, y solo los usamos para las finalidades indicadas.",
        ],
      },
      {
        heading: "Cuánto tiempo los conservamos",
        body: [],
        list: [
          "Consultas que no dan lugar a ninguna operación: el tiempo necesario para atenderlas y, como máximo, un año desde el último contacto.",
          "Operaciones de compra o alquiler: mientras dure la relación y, después, bloqueados durante los plazos en que puedan exigirse responsabilidades legales, como seis años para la documentación mercantil (art. 30 del Código de Comercio) o cuatro para la tributaria.",
          "Registros del servidor: el plazo limitado que aplica el proveedor de alojamiento.",
          "Cookies: los plazos indicados en la política de cookies.",
        ],
      },
      {
        heading: "Destinatarios",
        body: [
          "No vendemos ni cedemos sus datos a terceros. Solo los comunicamos cuando la ley lo exige o cuando es necesario para formalizar una operación que usted ha solicitado (por ejemplo, a notarías, registros de la propiedad o a la Administración tributaria).",
          "Tratan datos por cuenta nuestra, como encargados del tratamiento y con contrato conforme al artículo 28 del RGPD:",
        ],
        list: [
          "Vercel Inc. — alojamiento del sitio web.",
          "Resend — envío de los mensajes del formulario a nuestro correo.",
          "Nuestro proveedor de correo electrónico — recepción y archivo de los mensajes.",
          "Google Ireland Ltd. — Google Tag Manager y Google Analytics, solo si acepta las cookies de medición.",
        ],
      },
      {
        heading: "WhatsApp",
        body: [
          "Si nos escribe por WhatsApp, WhatsApp Ireland Ltd. trata sus datos como responsable independiente, según su propia política de privacidad. Usaremos la conversación solo para atender su consulta.",
        ],
      },
      {
        heading: "Transferencias internacionales",
        body: [
          "Algunos de estos proveedores tienen su sede en Estados Unidos o pueden tratar datos allí. Esas transferencias se amparan en el Marco de Privacidad de Datos UE-EE. UU., cuando el proveedor está adherido, o en las cláusulas contractuales tipo aprobadas por la Comisión Europea.",
        ],
      },
      {
        heading: "Sus derechos",
        body: [
          "Puede ejercer en cualquier momento, y de forma gratuita, los siguientes derechos:",
        ],
        list: [
          "Acceso: saber si tratamos sus datos y obtener una copia.",
          "Rectificación de los datos inexactos o incompletos.",
          "Supresión de sus datos cuando ya no sean necesarios.",
          "Oposición al tratamiento basado en nuestro interés legítimo.",
          "Limitación del tratamiento en los casos previstos por la ley.",
          "Portabilidad de los datos que nos ha facilitado.",
          "Retirada del consentimiento, sin que afecte a la licitud del tratamiento anterior.",
        ],
      },
      {
        heading: "Cómo ejercerlos",
        body: [
          "Escríbanos al email indicado en «Responsable del tratamiento» o por correo postal a nuestro domicilio social, indicando qué derecho ejerce. Si tenemos dudas razonables sobre su identidad, podremos pedirle que la acredite. Le responderemos en el plazo de un mes, ampliable en dos meses más en casos complejos.",
          "Si considera que no hemos atendido correctamente su solicitud, puede presentar una reclamación ante la Agencia Española de Protección de Datos (C/ Jorge Juan, 6, 28001 Madrid; www.aepd.es).",
        ],
      },
      {
        heading: "Menores de edad",
        body: [
          "Este sitio no se dirige a menores de 14 años. Si es menor de esa edad, no nos envíe sus datos.",
        ],
      },
      {
        heading: "Seguridad y exactitud",
        body: [
          "Aplicamos medidas técnicas y organizativas adecuadas para proteger sus datos; el sitio se sirve siempre por una conexión cifrada (HTTPS). Le pedimos que los datos que nos facilite sean verdaderos y que nos comunique cualquier cambio.",
        ],
      },
      {
        heading: "Cambios en esta política",
        body: [
          "Podemos actualizar esta política para adaptarla a cambios legales o en nuestra forma de trabajar. La versión vigente es siempre la publicada en esta página, con su fecha de actualización.",
        ],
        links: ["cookies", "legalNotice"],
      },
    ],
  },
  cookies: {
    title: "Política de cookies",
    intro: "Qué cookies y almacenamiento local usa este sitio, para qué y cómo puede aceptarlos, rechazarlos o cambiar de opinión, conforme al artículo 22.2 de la LSSI-CE.",
    sections: [
      {
        heading: "Responsable",
        body: [
          "El responsable de las cookies propias de este sitio es:",
        ],
        owner: true,
      },
      {
        heading: "Qué son las cookies",
        body: [
          "Las cookies son pequeños archivos que un sitio web guarda en su navegador para recordar información entre páginas o entre visitas. El almacenamiento local (localStorage) funciona de forma parecida y la ley le da el mismo tratamiento, por lo que también lo incluimos aquí.",
        ],
      },
      {
        heading: "Qué tipos usamos",
        body: [],
        list: [
          "Técnicas, propias: necesarias para que el sitio funcione y recuerde sus decisiones. No requieren consentimiento.",
          "De medición (analíticas), de terceros: nos dicen de forma agregada cuántas personas visitan el sitio y qué páginas consultan. Solo se instalan si usted las acepta.",
        ],
      },
      {
        heading: "Lista de cookies",
        body: [],
        table: {
          head: ["Nombre", "Titular", "Finalidad", "Duración", "Tipo"],
          rows: [
            ["locale", "Tarida MC (propia)", "Recordar el idioma que ha elegido.", "1 año", "Técnica"],
            ["consent (almacenamiento local)", "Tarida MC (propia)", "Guardar su respuesta al aviso de cookies y la fecha en que la dio.", "Hasta que borre los datos del sitio", "Técnica"],
            ["_ga", "Google Ireland Ltd. (tercero)", "Distinguir visitantes de forma seudónima para obtener estadísticas agregadas.", "2 años", "Medición"],
            ["_ga_<ID>", "Google Ireland Ltd. (tercero)", "Mantener el estado de la sesión de Google Analytics.", "2 años", "Medición"],
          ],
        },
      },
      {
        heading: "Si rechaza las cookies de medición",
        body: [
          "No se instala ninguna cookie de medición. El sitio usa el modo de consentimiento de Google: mientras no acepte, las etiquetas de Google solo pueden enviar avisos sin cookies ni identificadores (por ejemplo, que se ha cargado una página), que Google utiliza de forma agregada.",
        ],
      },
      {
        heading: "Cómo aceptar, rechazar o cambiar de opinión",
        body: [
          "La primera vez que visita el sitio le preguntamos si acepta las cookies de medición; aceptar y rechazar son igual de sencillos. Puede cambiar su decisión en cualquier momento desde «Preferencias de cookies», en el pie de cada página.",
          "También puede bloquear o borrar las cookies desde la configuración de su navegador:",
        ],
        external: [
          { label: "Google Chrome", href: "https://support.google.com/chrome/answer/95647?hl=es" },
          { label: "Mozilla Firefox", href: "https://support.mozilla.org/es/kb/borrar-cookies-datos-sitio-firefox" },
          { label: "Safari", href: "https://support.apple.com/es-es/guide/safari/sfri11471/mac" },
          { label: "Microsoft Edge", href: "https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" },
        ],
      },
      {
        heading: "Transferencias internacionales",
        body: [
          "Google puede tratar los datos de medición en Estados Unidos, al amparo del Marco de Privacidad de Datos UE-EE. UU. Más información en policies.google.com/privacy.",
        ],
      },
      {
        heading: "Actualizaciones",
        body: [
          "Si cambian las cookies que usamos, actualizaremos esta lista y, si es necesario, le volveremos a pedir su consentimiento.",
        ],
        links: ["privacy"],
      },
    ],
  },
};
