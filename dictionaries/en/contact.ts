import type { ContactDict } from "@/lib/i18n/types";

export const contact: ContactDict = {
  meta: {
    title: "Contact",
    description: "Tell us what you need and we will answer within 24 hours.",
  },
  hero: {
    eyebrow: "Contact",
    title: "Tell us what you need",
    intro: "Fill in the form or message us on WhatsApp. We answer within 24 working hours.",
  },
  aside: {
    title: "Prefer to talk directly?",
    body: "WhatsApp is the fastest way. Email and phone are below if you prefer.",
    whatsappCta: "Open WhatsApp",
  },
  form: {
    name: "Name",
    email: "Email",
    phone: "Phone (optional)",
    service: "What are you interested in",
    otherOption: "Something else",
    message: "Message",
    messagePlaceholder: "Tell us what you need, when, and any useful detail.",
    consent: "I have read and accept the",
    consentLink: "privacy policy",
    submit: "Send",
    sending: "Sending…",
    genericError: "We could not send your message. Try again or message us on WhatsApp.",
    success: {
      title: "Message sent",
      body: "Thank you. We will answer within 24 working hours.",
    },
    fieldErrors: {
      name: "Enter your name.",
      email: "Check the email address.",
      phone: "Check the phone number.",
      service: "Choose an option.",
      message: "Tell us a bit more (at least 10 characters).",
      consent: "We need your consent to reply.",
    },
  },
};
