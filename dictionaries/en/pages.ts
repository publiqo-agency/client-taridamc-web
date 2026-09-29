import type { AboutDict } from "@/lib/i18n/types";

/** English about page copy. Same shape as dictionaries/es/pages.ts. */
export const about: AboutDict = {
  meta: {
    title: "About us",
    seoTitle: "About us: a family firm, 40 years in real estate | Tarida MC",
    description:
      "Tarida MC is a family business with forty years in real estate, led by Ramon Seva. Based in Castelldefels, it buys property anywhere in Spain.",
  },
  hero: {
    eyebrow: "About us",
    title: "A family business,\n*forty years on*",
    intro:
      "Based in Castelldefels, we buy property anywhere in Spain and let our own, the way we always have: with integrity, honesty and transparency.",
    imageAlt: "A run of whitewashed arches leading to an old wooden door",
  },
  sections: [
    {
      heading: "Our story",
      body: [
        "Tarida MC is a family business devoted to property. Four decades on, we are still a small company, and that allows us to know every property and every client closely.",
        "Today we buy flats, houses and industrial units from owners who wish to sell, anywhere in Spain, and we let industrial units and homes from our own portfolio.",
      ],
    },
    {
      heading: "How we work",
      body: [
        "We study every transaction with care and answer clearly, whatever the answer may be. Integrity, honesty and transparency are not a slogan: they are the way we have always worked.",
      ],
    },
  ],
  servicesTitle: "What we do",
  storyImageAlt: "Wooden double door standing open under a stone arch",
  leader: {
    name: "Ramon Seva",
    portraitAlt: "Portrait of Ramon Seva",
    role: "Head of Tarida MC",
    body: "In a family business, the person who looks after you is the one who knows every property.",
  },
  place: {
    eyebrow: "Our base",
    title: "From Castelldefels,\n*across Spain*",
    body: "Our head office is in Castelldefels, between the sea and the Garraf massif, where our rental portfolio also sits. From here we buy flats, houses and industrial units anywhere in Spain.",
    imageAlt: "Castelldefels beach at sunset, with the Garraf massif beyond",
  },
};
