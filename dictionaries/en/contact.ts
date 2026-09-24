import type { ContactDict } from "@/lib/i18n/types";

/** English contact page copy. Same shape as dictionaries/es/contact.ts. */
export const contact: ContactDict = {
  meta: {
    title: "Contact",
    description:
      "Contact Tarida MC in Castelldefels: offer us a property to buy, or enquire about industrial units and homes to let.",
  },
  hero: {
    eyebrow: "Contact",
    title: "Let's talk about\n*your property*",
    intro:
      "Tell us what you need: to sell a property, or to rent an industrial unit or a home. We will reply to you personally.",
  },
  aside: {
    title: "Would you rather speak to us directly?",
    body: "WhatsApp is the quickest way. If you prefer email or telephone, you will find both here.",
    whatsappCta: "Open WhatsApp",
  },
  form: {
    name: "Name",
    email: "Email",
    phone: "Telephone (optional)",
    service: "What are you interested in?",
    otherOption: "Other enquiry",
    message: "Message",
    messagePlaceholder: "Property type, location, floor area and any other useful details.",
    consent: "I have read and accept the",
    consentLink: "privacy policy",
    submit: "Send",
    sending: "Sending…",
    genericError: "We could not send your message. Please try again or message us on WhatsApp.",
    success: {
      title: "Message sent",
      body: "Thank you. We will reply to you personally as soon as possible.",
    },
    fieldErrors: {
      name: "Please enter your name.",
      email: "Please check your email address.",
      phone: "Please check your telephone number.",
      service: "Please choose an option.",
      message: "Please tell us a little more (at least 10 characters).",
      consent: "We need your consent in order to reply.",
    },
  },
};
