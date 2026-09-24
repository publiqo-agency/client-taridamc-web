import type { HomeDict } from "@/lib/i18n/types";

export const home: HomeDict = {
  meta: {
    title: "Home",
    seoTitle: "__CLIENT_NAME__ · What it does, where it does it",
    description:
      "Home meta description: the value proposition in one sentence and a call to action.",
  },
  hero: {
    eyebrow: "What we do",
    title: "Home headline that says what the business offers",
    intro:
      "Two or three sentences that explain the value proposition, who it is for and what makes it different. Replace with the client's copy.",
    ctaPrimary: "Get in touch",
    ctaSecondary: "See services",
  },
  services: {
    eyebrow: "Services",
    title: "What we offer",
    intro: "One sentence introducing the service catalogue.",
  },
  about: {
    eyebrow: "About",
    title: "Who we are",
    body: [
      "A paragraph about the business: who is behind it, since when and what it stands for.",
      "A second paragraph about how the team works or what sets it apart.",
    ],
    cta: "Meet us",
  },
  faq: {
    eyebrow: "Questions",
    title: "Frequently asked questions",
  },
  contact: {
    title: "Shall we talk?",
    body: "Tell us what you need and we will answer within 24 hours.",
    cta: "Contact us",
  },
};
