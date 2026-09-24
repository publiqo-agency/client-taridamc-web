import type { ContactDict } from "@/lib/i18n/types";

export const contact: ContactDict = {
  meta: {
    title: "Contacte",
    description: "Digui'ns què necessita i li responem en menys de 24 hores.",
  },
  hero: {
    eyebrow: "Contacte",
    title: "Digui'ns què necessita",
    intro: "Ompli el formulari o escrigui'ns per WhatsApp. Responem en menys de 24 hores laborables.",
  },
  aside: {
    title: "Prefereix parlar directament?",
    body: "El WhatsApp és la via més ràpida. Si prefereix email o telèfon, són a sota.",
    whatsappCta: "Obrir WhatsApp",
  },
  form: {
    name: "Nom",
    email: "Email",
    phone: "Telèfon (opcional)",
    service: "Què li interessa",
    otherOption: "Una altra consulta",
    message: "Missatge",
    messagePlaceholder: "Digui'ns què necessita, per a quan i qualsevol detall útil.",
    consent: "He llegit i accepto la",
    consentLink: "política de privacitat",
    submit: "Enviar",
    sending: "Enviant…",
    genericError: "No hem pogut enviar el missatge. Torni-ho a provar o escrigui'ns per WhatsApp.",
    success: {
      title: "Missatge enviat",
      body: "Gràcies. Li responem en menys de 24 hores laborables.",
    },
    fieldErrors: {
      name: "Escrigui el seu nom.",
      email: "Revisi l'email.",
      phone: "Revisi el telèfon.",
      service: "Triï una opció.",
      message: "Digui'ns una mica més (mínim 10 caràcters).",
      consent: "Necessitem el seu consentiment per respondre-li.",
    },
  },
};
