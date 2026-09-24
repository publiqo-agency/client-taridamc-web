/** Catalan copy for the contact page. Same shape as dictionaries/es/contact.ts. */
import type { ContactDict } from "@/lib/i18n/types";

export const contact: ContactDict = {
  meta: {
    title: "Contacte",
    description:
      "Contacti amb Tarida MC a Castelldefels: proposi un immoble perquè el comprem o consulti naus i habitatges de lloguer.",
  },
  hero: {
    eyebrow: "Contacte",
    title: "Parlem del\n*seu immoble*",
    intro:
      "Expliqui'ns què necessita: vendre una propietat o llogar una nau o un habitatge. Li respondrem personalment.",
  },
  aside: {
    title: "Prefereix parlar directament?",
    body: "WhatsApp és la via més ràpida. Si prefereix el correu o el telèfon, els trobarà aquí.",
    whatsappCta: "Obrir WhatsApp",
  },
  form: {
    name: "Nom",
    email: "Correu electrònic",
    phone: "Telèfon (opcional)",
    service: "Què l'interessa",
    otherOption: "Una altra consulta",
    message: "Missatge",
    messagePlaceholder: "Tipus d'immoble, ubicació, superfície i qualsevol detall útil.",
    consent: "He llegit i accepto la",
    consentLink: "política de privacitat",
    submit: "Enviar",
    sending: "Enviant…",
    genericError: "No hem pogut enviar el missatge. Torni-ho a provar o escrigui'ns per WhatsApp.",
    success: {
      title: "Missatge enviat",
      body: "Gràcies. Li respondrem personalment tan aviat com sigui possible.",
    },
    fieldErrors: {
      name: "Escrigui el seu nom.",
      email: "Revisi el correu electrònic.",
      phone: "Revisi el telèfon.",
      service: "Triï una opció.",
      message: "Expliqui'ns una mica més (mínim 10 caràcters).",
      consent: "Necessitem el seu consentiment per respondre-li.",
    },
  },
};
