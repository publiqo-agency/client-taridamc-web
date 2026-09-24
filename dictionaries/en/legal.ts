import type { LegalDict } from "@/lib/i18n/types";

export const legal: LegalDict = {
  pending: {
    label: "Pending",
    body: "The owner's registration data (legal name, tax id, address) is missing. This notice disappears once lib/site.ts is filled in.",
  },
  updated: "Last updated: September 2026.",
  notice: {
    title: "Legal notice",
    intro: "General information about the owner of this website, as required by Spanish Law 34/2002 (LSSI-CE).",
    sections: [
      {
        heading: "Owner",
        body: [
          "This website is owned by the entity identified in the footer, with the contact details shown there.",
        ],
      },
      {
        heading: "Use of the site",
        body: [
          "Accessing and using this site makes you a user and implies acceptance of these terms. Users agree to make proper use of the contents and not to employ them for unlawful activities.",
        ],
      },
      {
        heading: "Intellectual property",
        body: [
          "The contents of this site (texts, images, logos, design) belong to the owner or to third parties who authorised their use. Reproduction without express permission is prohibited.",
        ],
      },
      {
        heading: "Liability",
        body: [
          "The owner is not liable for damages arising from the use of the information on this site, nor for the contents of linked third-party sites.",
        ],
      },
    ],
  },
  privacy: {
    title: "Privacy policy",
    intro: "How we process the personal data you provide through this site, under the GDPR and Spanish data protection law.",
    sections: [
      {
        heading: "Data controller",
        body: ["The owner identified in the legal notice and in the footer."],
      },
      {
        heading: "What data we process and why",
        body: [
          "The data you send through the contact form or WhatsApp (name, email, phone and the content of your message) is used solely to answer your request.",
          "With your consent, we use measurement cookies to understand how the site is used. See the cookie policy.",
        ],
      },
      {
        heading: "Legal basis and retention",
        body: [
          "The legal basis is your consent and, where applicable, pre-contractual measures. Contact data is kept for as long as the relationship lasts or until you request its deletion.",
        ],
      },
      {
        heading: "Recipients",
        body: [
          "Form messages are delivered through a transactional email provider (Resend) and the site is hosted on Vercel. Both act as data processors.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "You may exercise your rights of access, rectification, erasure, objection, restriction and portability by writing to the email address in the footer. You may also lodge a complaint with the Spanish Data Protection Agency.",
        ],
      },
    ],
  },
  cookies: {
    title: "Cookie policy",
    intro: "Which cookies and local storage this site uses and how you can decide about them.",
    sections: [
      {
        heading: "What we use",
        body: [
          "Technical storage: your language choice (the \"locale\" cookie) and your answer to the cookie notice (localStorage). Both are needed for the site to remember your decisions.",
          "Measurement: with your consent, Google Tag Manager loads Google Analytics 4 to measure site usage in aggregate. Without consent no measurement cookie is set.",
        ],
      },
      {
        heading: "Changing your decision",
        body: [
          "You can change your decision at any time from \"Cookie preferences\" in the footer, or by clearing the site data in your browser.",
        ],
      },
    ],
  },
};
