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
    registry: "Registration details",
    email: "Email",
    phone: "Phone",
  },
  registryPending: "Commercial Registry entry missing",
  linkLabels: {
    legalNotice: "Legal notice",
    privacy: "Privacy policy",
    cookies: "Cookie policy",
  },
  updated: "Last updated: October 2026.",
  notice: {
    title: "Legal notice",
    intro: "Information about the owner of this website and its terms of use, as required by Spanish Law 34/2002 on information society services and e-commerce (LSSI-CE).",
    sections: [
      {
        heading: "Owner of the website",
        body: [
          "In accordance with article 10 of the LSSI-CE, we inform you that this website is owned by:",
        ],
        owner: true,
      },
      {
        heading: "Purpose",
        body: [
          "This website presents the business of Tarida MC: buying flats, houses and industrial units from their owners anywhere in Spain, and letting industrial units and homes from its own portfolio. You can contact us from it by form, WhatsApp, phone or email.",
        ],
      },
      {
        heading: "Terms of use",
        body: [
          "Access to this website is free of charge and makes you a user, which implies acceptance of this legal notice in the version published at the time of access.",
          "Users undertake to use the website and its content in accordance with the law, good faith and public order, and not to use them for unlawful purposes or in ways that may harm the rights of Tarida MC or third parties, or the operation of the website.",
        ],
      },
      {
        heading: "Property information",
        body: [
          "The information this website provides about properties, including areas, features and availability, is for guidance only and may change without notice. It is not a binding offer and does not form part of any contract: the terms of each transaction are those agreed in writing.",
          "Proposing a property to us does not oblige us to buy it: we study each case and give you an answer.",
        ],
      },
      {
        heading: "Intellectual and industrial property",
        body: [
          "The content of this website (texts, photographs, logos, design and code) belongs to Tarida MC or to third parties who have authorised its use, and is protected by intellectual and industrial property law.",
          "Its reproduction, distribution, public communication or transformation, in whole or in part, is prohibited without the express authorisation of the owner, except for personal and private use.",
        ],
      },
      {
        heading: "Links",
        body: [
          "This website may contain links to third-party sites, such as WhatsApp or Google. Tarida MC does not control those sites and is not responsible for their content or policies, which are governed by their own terms.",
          "Anyone may link to the home page or any other page of this website, provided the link does not suggest a relationship with Tarida MC that does not exist or present its content as their own.",
        ],
      },
      {
        heading: "Liability",
        body: [
          "Tarida MC strives to keep the information on the website accurate and up to date, but does not guarantee that it is free of errors or that the website will be available without interruption. It is not liable for damage arising from technical interruptions, viruses introduced by third parties or the use made of the information published.",
        ],
      },
      {
        heading: "Data protection and cookies",
        body: [
          "How we process the personal data you provide and how we use cookies is explained in the corresponding policies.",
        ],
        links: ["privacy", "cookies"],
      },
      {
        heading: "Changes",
        body: [
          "Tarida MC may change this legal notice and the content of the website at any time. The version in force is the one published on this page.",
        ],
      },
      {
        heading: "Governing law and jurisdiction",
        body: [
          "This legal notice is governed by Spanish law. Any dispute shall be submitted to the courts that have jurisdiction under the law; if you are a consumer, to those of your place of residence.",
        ],
      },
    ],
  },
  privacy: {
    title: "Privacy policy",
    intro: "How we process the personal data you give us through this website and our contact channels, in accordance with Regulation (EU) 2016/679 (GDPR) and Spanish Organic Law 3/2018 (LOPDGDD).",
    sections: [
      {
        heading: "Data controller",
        body: [
          "The controller of your data is:",
        ],
        owner: true,
      },
      {
        heading: "Data protection officer",
        body: [
          "We have not appointed a data protection officer. For any question about how we process your data, you can write to us at the email address above.",
        ],
      },
      {
        heading: "What data we process",
        body: [
          "We only process the data you give us and the data your visit generates:",
        ],
        list: [
          "Contact form: name, email, phone (optional), the type of enquiry and the content of your message.",
          "WhatsApp, phone and email: the contact details you write or call us from and what you tell us in the conversation.",
          "If the enquiry goes ahead: details of the property and those needed to study and complete the transaction.",
          "Browsing: your IP address and technical data about your browser, which the server logs when serving the pages.",
          "Measurement cookies, only if you accept them (see the cookie policy).",
        ],
      },
      {
        heading: "Why we process it and on what legal basis",
        body: [],
        list: [
          "To answer your enquiry or your property proposal. Legal basis: your consent, given when you send the form or write to us, and taking steps at your request prior to entering into a contract (GDPR art. 6.1.a and 6.1.b).",
          "To study and, where appropriate, complete the purchase or letting. Legal basis: performance of the contract or of pre-contractual steps (GDPR art. 6.1.b) and compliance with the legal obligations that arise from the transaction, such as tax obligations (GDPR art. 6.1.c).",
          "To keep the website secure and running, using the server logs. Legal basis: our legitimate interest in protecting the website (GDPR art. 6.1.f).",
          "To understand, in aggregate, how the website is used. Legal basis: your consent to measurement cookies (GDPR art. 6.1.a).",
        ],
      },
      {
        heading: "Required data",
        body: [
          "In the form, your name, email and message are needed to answer you; without them we cannot deal with your enquiry. Your phone number is optional.",
          "We do not make automated decisions or build profiles with your data, and we only use it for the purposes stated.",
        ],
      },
      {
        heading: "How long we keep it",
        body: [],
        list: [
          "Enquiries that do not lead to a transaction: as long as needed to deal with them and at most one year from the last contact.",
          "Purchase or letting transactions: for as long as the relationship lasts and then, blocked, for the periods in which legal liability may arise, such as six years for business records (article 30 of the Spanish Commercial Code) or four for tax records.",
          "Server logs: the limited period applied by the hosting provider.",
          "Cookies: the periods stated in the cookie policy.",
        ],
      },
      {
        heading: "Recipients",
        body: [
          "We do not sell or disclose your data to third parties. We only share it when the law requires it or when it is necessary to complete a transaction you have asked for (for example, with notaries, land registries or the tax authorities).",
          "The following process data on our behalf, as processors, under a contract in accordance with article 28 of the GDPR:",
        ],
        list: [
          "Vercel Inc. — website hosting.",
          "Resend — delivery of the form messages to our inbox.",
          "Our email provider — receiving and storing messages.",
          "Google Ireland Ltd. — Google Tag Manager and Google Analytics, only if you accept measurement cookies.",
        ],
      },
      {
        heading: "WhatsApp",
        body: [
          "If you write to us on WhatsApp, WhatsApp Ireland Ltd. processes your data as an independent controller, under its own privacy policy. We will use the conversation only to deal with your enquiry.",
        ],
      },
      {
        heading: "International transfers",
        body: [
          "Some of these providers are based in the United States or may process data there. Those transfers rely on the EU-US Data Privacy Framework, where the provider is certified, or on the standard contractual clauses approved by the European Commission.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "You may exercise the following rights at any time, free of charge:",
        ],
        list: [
          "Access: find out whether we process your data and obtain a copy.",
          "Rectification of inaccurate or incomplete data.",
          "Erasure of your data when it is no longer needed.",
          "Objection to processing based on our legitimate interest.",
          "Restriction of processing in the cases provided for by law.",
          "Portability of the data you have given us.",
          "Withdrawal of consent, without affecting the lawfulness of earlier processing.",
        ],
      },
      {
        heading: "How to exercise them",
        body: [
          "Write to us at the email address under \"Data controller\" or by post to our registered office, stating which right you are exercising. If we have reasonable doubts about your identity, we may ask you to prove it. We will answer within one month, which may be extended by two further months in complex cases.",
          "If you believe we have not handled your request properly, you can lodge a complaint with the Spanish Data Protection Agency (C/ Jorge Juan, 6, 28001 Madrid; www.aepd.es).",
        ],
      },
      {
        heading: "Minors",
        body: [
          "This website is not aimed at children under 14. If you are under that age, please do not send us your data.",
        ],
      },
      {
        heading: "Security and accuracy",
        body: [
          "We apply appropriate technical and organisational measures to protect your data; the website is always served over an encrypted connection (HTTPS). Please make sure the data you give us is accurate and let us know of any change.",
        ],
      },
      {
        heading: "Changes to this policy",
        body: [
          "We may update this policy to reflect changes in the law or in the way we work. The version in force is always the one published on this page, with its update date.",
        ],
        links: ["cookies", "legalNotice"],
      },
    ],
  },
  cookies: {
    title: "Cookie policy",
    intro: "Which cookies and local storage this website uses, what for, and how you can accept them, reject them or change your mind, in accordance with article 22.2 of the LSSI-CE.",
    sections: [
      {
        heading: "Controller",
        body: [
          "The controller of this website's own cookies is:",
        ],
        owner: true,
      },
      {
        heading: "What cookies are",
        body: [
          "Cookies are small files a website stores in your browser to remember information between pages or between visits. Local storage (localStorage) works in a similar way and the law treats it the same, so we include it here too.",
        ],
      },
      {
        heading: "Which types we use",
        body: [],
        list: [
          "Technical, first-party: needed for the website to work and to remember your choices. They do not require consent.",
          "Measurement (analytics), third-party: they tell us, in aggregate, how many people visit the website and which pages they view. They are only set if you accept them.",
        ],
      },
      {
        heading: "List of cookies",
        body: [],
        table: {
          head: ["Name", "Owner", "Purpose", "Duration", "Type"],
          rows: [
            ["locale", "Tarida MC (first-party)", "Remember the language you have chosen.", "1 year", "Technical"],
            ["consent (local storage)", "Tarida MC (first-party)", "Store your answer to the cookie notice and when you gave it.", "Until you clear the site data", "Technical"],
            ["_ga", "Google Ireland Ltd. (third-party)", "Tell visitors apart pseudonymously to produce aggregate statistics.", "2 years", "Measurement"],
            ["_ga_<ID>", "Google Ireland Ltd. (third-party)", "Keep the state of the Google Analytics session.", "2 years", "Measurement"],
          ],
        },
      },
      {
        heading: "If you reject measurement cookies",
        body: [
          "No measurement cookie is set. The website uses Google's consent mode: until you accept, Google's tags can only send signals without cookies or identifiers (for example, that a page has loaded), which Google uses in aggregate.",
        ],
      },
      {
        heading: "How to accept, reject or change your mind",
        body: [
          "The first time you visit the website we ask whether you accept measurement cookies; accepting and rejecting are equally easy. You can change your choice at any time from \"Cookie preferences\" in the footer of every page.",
          "You can also block or delete cookies in your browser settings:",
        ],
        external: [
          { label: "Google Chrome", href: "https://support.google.com/chrome/answer/95647?hl=en" },
          { label: "Mozilla Firefox", href: "https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox" },
          { label: "Safari", href: "https://support.apple.com/en-gb/guide/safari/sfri11471/mac" },
          { label: "Microsoft Edge", href: "https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" },
        ],
      },
      {
        heading: "International transfers",
        body: [
          "Google may process measurement data in the United States, under the EU-US Data Privacy Framework. More information at policies.google.com/privacy.",
        ],
      },
      {
        heading: "Updates",
        body: [
          "If the cookies we use change, we will update this list and, where necessary, ask for your consent again.",
        ],
        links: ["privacy"],
      },
    ],
  },
};
