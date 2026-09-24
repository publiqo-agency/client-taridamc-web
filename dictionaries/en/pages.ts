import type { AboutDict, FaqDict } from "@/lib/i18n/types";

export const about: AboutDict = {
  meta: {
    title: "About us",
    description: "Meta description of the about page.",
  },
  hero: {
    eyebrow: "About",
    title: "Who we are and why we do this",
    intro: "One or two sentences introducing the team or the business.",
  },
  sections: [
    {
      heading: "Our story",
      body: ["A paragraph about how the business started.", "Another about where it is today."],
    },
    {
      heading: "How we work",
      body: ["A paragraph about the way of working and what a client can expect."],
    },
  ],
};

export const faq: FaqDict = {
  meta: {
    title: "FAQ",
    description: "Answers to the most common questions before getting in touch.",
  },
  hero: {
    eyebrow: "Questions",
    title: "Frequently asked questions",
    intro: "What we get asked most, answered briefly.",
  },
  items: [
    {
      question: "A common question?",
      answer: "A short, direct answer. This text is exactly what the FAQPage JSON-LD emits.",
    },
    {
      question: "Another common question?",
      answer: "Another short answer.",
    },
    {
      question: "How do I request a quote?",
      answer: "Through the contact form or WhatsApp. We answer within 24 working hours.",
    },
  ],
};
