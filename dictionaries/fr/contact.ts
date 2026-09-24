import type { ContactDict } from "@/lib/i18n/types";

export const contact: ContactDict = {
  meta: {
    title: "Contact",
    description: "Dites-nous ce dont vous avez besoin et nous vous répondrons en moins de 24 heures.",
  },
  hero: {
    eyebrow: "Contact",
    title: "Dites-nous ce dont vous avez besoin",
    intro: "Remplissez le formulaire ou écrivez-nous sur WhatsApp. Nous répondons en moins de 24 heures ouvrées.",
  },
  aside: {
    title: "Vous préférez nous parler directement ?",
    body: "WhatsApp est le moyen le plus rapide. Si vous préférez l'email ou le téléphone, ils se trouvent ci-dessous.",
    whatsappCta: "Ouvrir WhatsApp",
  },
  form: {
    name: "Nom",
    email: "Email",
    phone: "Téléphone (facultatif)",
    service: "Ce qui vous intéresse",
    otherOption: "Autre demande",
    message: "Message",
    messagePlaceholder: "Dites-nous ce dont vous avez besoin, pour quand et tout détail utile.",
    consent: "J'ai lu et j'accepte la",
    consentLink: "politique de confidentialité",
    submit: "Envoyer",
    sending: "Envoi en cours…",
    genericError: "Nous n'avons pas pu envoyer votre message. Réessayez ou écrivez-nous sur WhatsApp.",
    success: {
      title: "Message envoyé",
      body: "Merci. Nous vous répondrons en moins de 24 heures ouvrées.",
    },
    fieldErrors: {
      name: "Saisissez votre nom.",
      email: "Vérifiez l'adresse email.",
      phone: "Vérifiez le numéro de téléphone.",
      service: "Choisissez une option.",
      message: "Dites-nous en un peu plus (10 caractères minimum).",
      consent: "Nous avons besoin de votre consentement pour vous répondre.",
    },
  },
};
