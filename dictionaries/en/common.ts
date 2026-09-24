import type { CommonDict } from "@/lib/i18n/types";

export const common: CommonDict = {
  meta: {
    defaultTitle: "__CLIENT_NAME__",
    description:
      "One-sentence description of the business, what it does and for whom. It is the site-wide default meta description.",
  },
  nav: {
    home: "Home",
    services: "Services",
    about: "About us",
    faq: "FAQ",
    contact: "Contact",
    menu: "Menu",
    close: "Close",
    mainNavAria: "Main navigation",
    skipToContent: "Skip to content",
  },
  cta: {
    contact: "Contact us",
    whatsapp: "Message us on WhatsApp",
    back: "Back to home",
    allServices: "See all services",
    learnMore: "Learn more",
  },
  whatsapp: {
    aria: "Open WhatsApp",
    messages: {
      general: "Hi, I would like some more information.",
    },
  },
  footer: {
    tagline: "One sentence that sums up what the business offers.",
    navTitle: "Sections",
    servicesTitle: "Services",
    contactTitle: "Contact",
    followTitle: "Follow us",
    cookieSettings: "Cookie preferences",
    rights: "All rights reserved.",
    credit: "Website by",
    legalNotice: "Legal notice",
    privacy: "Privacy policy",
    cookies: "Cookie policy",
  },
  localeSwitcher: {
    aria: "Language",
  },
  consent: {
    title: "Cookies",
    body:
      "We use measurement cookies to understand how the site is used. None is set until you accept.",
    accept: "Accept",
    reject: "Reject",
    link: "Learn more",
  },
  notFound: {
    title: "Page not found",
    body: "This address does not exist or has moved.",
  },
};
