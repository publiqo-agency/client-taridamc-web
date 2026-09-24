import type { ContactDict } from "@/lib/i18n/types";

/** French copy for the contact page. Same shape as dictionaries/es/contact.ts. */
export const contact: ContactDict = {
  meta: {
    title: "Contact",
    description:
      "Contactez Tarida MC à Castelldefels : proposez-nous un bien à l’achat ou renseignez-vous sur nos entrepôts et logements à louer.",
  },
  hero: {
    eyebrow: "Contact",
    title: "Parlons de\n*votre bien*",
    intro:
      "Dites-nous ce dont vous avez besoin : vendre un bien, louer un entrepôt ou un logement. Nous vous répondrons personnellement.",
  },
  aside: {
    title: "Vous préférez nous parler directement ?",
    body: "WhatsApp est le moyen le plus rapide. Si vous préférez l’e-mail ou le téléphone, vous les trouverez ici.",
    whatsappCta: "Ouvrir WhatsApp",
  },
  form: {
    name: "Nom",
    email: "E-mail",
    phone: "Téléphone (facultatif)",
    service: "Votre demande",
    otherOption: "Autre demande",
    message: "Message",
    messagePlaceholder: "Type de bien, emplacement, surface et tout détail utile.",
    consent: "J’ai lu et j’accepte la",
    consentLink: "politique de confidentialité",
    submit: "Envoyer",
    sending: "Envoi en cours…",
    genericError: "Nous n’avons pas pu envoyer votre message. Veuillez réessayer ou nous écrire sur WhatsApp.",
    success: {
      title: "Message envoyé",
      body: "Merci. Nous vous répondrons personnellement dans les meilleurs délais.",
    },
    fieldErrors: {
      name: "Indiquez votre nom.",
      email: "Vérifiez votre adresse e-mail.",
      phone: "Vérifiez le numéro de téléphone.",
      service: "Choisissez une option.",
      message: "Dites-nous-en un peu plus (10 caractères minimum).",
      consent: "Nous avons besoin de votre consentement pour vous répondre.",
    },
  },
};
