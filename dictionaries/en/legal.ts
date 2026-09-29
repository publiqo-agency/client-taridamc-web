import type { LegalDict } from "@/lib/i18n/types";

export const legal: LegalDict = {
  pending: {
    label: "Pending",
    body: "The owner's registration data (legal name, tax id, address) is missing. This notice disappears once lib/site.ts is filled in.",
  },
  ownerLabels: {
    name: "Company name",
    taxId: "Tax ID (NIF)",
    address: "Registered office",
    email: "Email",
    phone: "Phone",
  },
  updated: "Last updated: September 2026.",
  notice: {
    title: "Legal notice",
    intro: "General information about the owner of this website, as required by Spanish Law 34/2002 (LSSI-CE).",
    sections: [
      {
        heading: "Owner",
        body: [
          "In accordance with Article 10 of Spanish Law 34/2002 (LSSI-CE), this website is owned by:",
        ],
        owner: true,
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
      {
        heading: "Applicable law",
        body: [
          "This legal notice is governed by Spanish law. Any dispute will be submitted to the courts that have jurisdiction under the law; if you are a consumer, to those of your place of residence.",
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
        body: [
          "The controller of your personal data is:",
        ],
        owner: true,
      },
      {
        heading: "What data we process and why",
        body: [
          "The data you send through the contact form or WhatsApp (name, email, phone and the content of your message) is used solely to answer your request and, if you wish, to handle the transaction you put to us.",
          "Your name, email and message are needed for us to reply; the phone number is optional. We do not make automated decisions or build profiles with your data.",
          "With your consent, we use measurement cookies to understand how the site is used, in aggregate. See the cookie policy.",
        ],
      },
      {
        heading: "Legal basis",
        body: [
          "Your consent, given when you send the form or write to us, and, when you ask about a transaction, steps taken at your request before entering into a contract.",
          "You may withdraw your consent at any time, without affecting the lawfulness of the processing carried out before.",
        ],
      },
      {
        heading: "Retention",
        body: [
          "We keep your data for as long as needed to handle your request or for as long as the relationship lasts, and then blocked for the periods during which legal liabilities may arise. We delete it earlier if you ask us to.",
        ],
      },
      {
        heading: "Recipients",
        body: [
          "We do not disclose your data to third parties unless required by law.",
          "The following process data on our behalf, as processors: Vercel Inc. (site hosting), Resend (delivery of form messages) and, only if you accept measurement cookies, Google Ireland Ltd. (Google Tag Manager and Google Analytics).",
          "If you write to us on WhatsApp, WhatsApp (Meta) processes your data as an independent controller, under its own privacy policy.",
        ],
      },
      {
        heading: "International transfers",
        body: [
          "Some of these providers may process data in the United States. Those transfers rely on the EU-US Data Privacy Framework or on the standard contractual clauses approved by the European Commission.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "You may exercise your rights of access, rectification, erasure, objection, restriction of processing and portability by writing to the email address given above, under “Data controller”, stating which right you are exercising.",
          "If you believe we have not handled your request properly, you may lodge a complaint with the Spanish Data Protection Agency (www.aepd.es).",
        ],
      },
    ],
  },
  cookies: {
    title: "Cookie policy",
    intro: "Which cookies and local storage this site uses and how you can decide about them.",
    sections: [
      {
        heading: "Responsible party",
        body: [
          "The party responsible for the cookies used on this site is:",
        ],
        owner: true,
      },
      {
        heading: "What they are",
        body: [
          "Cookies and local storage are small files or pieces of data the site keeps in your browser to remember information between visits.",
        ],
      },
      {
        heading: "Technical cookies (always on)",
        body: [
          "“locale” — first party. Remembers the language you chose. Duration: 1 year.",
          "“consent” (local storage) — first party. Stores your answer to the cookie notice. Duration: until you clear the site data.",
          "They are needed for the site to work and to remember your decisions, so they do not require consent.",
        ],
      },
      {
        heading: "Measurement cookies (only if you accept them)",
        body: [
          "“_ga” — Google Analytics (Google Ireland Ltd.). Tells visitors apart anonymously to produce aggregate statistics. Duration: 2 years.",
          "“_ga_<ID>” — Google Analytics. Keeps the state of the visit. Duration: 2 years.",
          "Google may process this data in the United States, under the EU-US Data Privacy Framework. More information at policies.google.com/privacy.",
        ],
      },
      {
        heading: "Changing your decision",
        body: [
          "You can change your decision at any time from “Cookie preferences” in the footer, or by clearing the site data in your browser.",
        ],
      },
    ],
  },
};
