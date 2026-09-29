import type { AboutDict } from "@/lib/i18n/types";

/** English about page copy. Same shape as dictionaries/es/pages.ts. */
export const about: AboutDict = {
  meta: {
    title: "About us",
    description:
      "Tarida MC is a family business in Castelldefels with forty years in real estate, led by Ramon Seva.",
  },
  hero: {
    eyebrow: "About us",
    title: "A family business,\n*forty years on*",
    intro:
      "We buy and let property in Castelldefels the way we always have: with integrity, honesty and transparency.",
    imageAlt: "A run of whitewashed arches leading to an old wooden door",
  },
  sections: [
    {
      heading: "Our story",
      body: [
        "Tarida MC is a family business devoted to property. Four decades on, we are still a small company, and that allows us to know every property and every client closely.",
        "Today we buy properties from owners who wish to sell, and we let industrial units and homes from our own portfolio.",
      ],
    },
    {
      heading: "How we work",
      body: [
        "We study every transaction with care and answer clearly, whatever the answer may be. Integrity, honesty and transparency are not a slogan: they are the way we have always worked.",
      ],
    },
  ],
  storyImageAlt: "Whitewashed façade with an arched green door and an olive tree",
  leader: {
    name: "Ramon Seva",
    portraitAlt: "Portrait of Ramon Seva",
    role: "Head of Tarida MC",
    body: "In a family business, the person who looks after you is the one who knows every property.",
  },
  place: {
    eyebrow: "Castelldefels",
    title: "Our *place*",
    body: "We work from Castelldefels, between the sea and the Garraf massif. We know its property market because we have been part of it for forty years.",
    imageAlt: "Castelldefels beach at sunset, with the Garraf massif beyond",
    sea: "Mediterranean Sea",
  },
};
