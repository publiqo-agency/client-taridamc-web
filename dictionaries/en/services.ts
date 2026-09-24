import type { ServicesDict } from "@/lib/i18n/types";

export const services: ServicesDict = {
  meta: {
    title: "Services",
    seoTitle: "Services · Tarida MC",
    description: "Meta description of the services index.",
  },
  index: {
    eyebrow: "Services",
    title: "Everything we can do for you",
    intro: "One sentence introducing the catalogue and who it is for.",
    allServices: "All services",
  },
  detail: {
    includesTitle: "What is included",
    faqTitle: "Frequently asked questions",
    otherServices: "Other services",
    requestTitle: "Interested?",
    requestBody: "Tell us what you need and we will prepare a tailored proposal.",
  },
  items: {
    "service-one": {
      title: "Service one",
      shortTitle: "Service one",
      teaser: "One sentence that sums up the service.",
      metaDescription: "Meta description of the service one page.",
      intro: "Intro paragraph: what it is, who it is for and what it solves.",
      imageAlt: "Description of the service one photo",
      includes: ["Included item", "Another included item", "A third one"],
      sections: [
        {
          heading: "How we work",
          body: ["A paragraph about the process.", "Another about the outcome."],
        },
      ],
      faq: [
        { question: "A common question about this service?", answer: "The answer, in one or two sentences." },
      ],
      whatsappMessage: "Hi, I am interested in service one.",
      cta: "Request a proposal",
    },
    "service-two": {
      title: "Service two",
      shortTitle: "Service two",
      teaser: "One sentence that sums up the service.",
      metaDescription: "Meta description of the service two page.",
      intro: "Intro paragraph: what it is, who it is for and what it solves.",
      imageAlt: "Description of the service two photo",
      includes: ["Included item", "Another included item"],
      sections: [
        {
          heading: "How we work",
          body: ["A paragraph about the process."],
        },
      ],
      whatsappMessage: "Hi, I am interested in service two.",
      cta: "Request a proposal",
    },
    "service-three": {
      title: "Service three",
      shortTitle: "Service three",
      teaser: "One sentence that sums up the service.",
      metaDescription: "Meta description of the service three page.",
      intro: "Intro paragraph: what it is, who it is for and what it solves.",
      imageAlt: "Description of the service three photo",
      includes: ["Included item"],
      sections: [
        {
          heading: "How we work",
          body: ["A paragraph about the process."],
        },
      ],
      whatsappMessage: "Hi, I am interested in service three.",
      cta: "Request a proposal",
    },
  },
};
