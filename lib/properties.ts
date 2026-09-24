import { SHOW_PENDING } from "@/lib/pending";

/**
 * The rental catalogue. CLIENT-DATA: the agency edits it (archetype A, see
 * docs/PENDING.md). Copy that repeats across listings — type names, spec
 * labels — lives in `common.catalogue`; only the facts of each property live
 * here.
 *
 * `PROPERTIES` is what production shows. It is EMPTY until the client sends
 * real listings, and the site then renders a sober "ask for availability"
 * block instead of a grid. Never fill it with plausible values.
 */
export type PropertyType = "warehouse" | "home" | "commercial";

export type Property = {
  /** The client's own reference; goes into the prefilled WhatsApp message. */
  ref: string;
  type: PropertyType;
  /** Built area in m². */
  area: number;
  /** Neighbourhood or area, as the client names it. */
  zone: string;
  /** Under public/. */
  image: string;
};

export const PROPERTIES: Property[] = [];

/**
 * Preview-only sample listings so the catalogue can be designed and reviewed
 * before the real data arrives. They render ONLY while SHOW_PENDING (no
 * NEXT_PUBLIC_SITE_URL), each with a visible "sample" chip; production can
 * never show them.
 */
const SAMPLE_PROPERTIES: Property[] = [
  { ref: "EJ-01", type: "warehouse", area: 850, zone: "Castelldefels", image: "/properties/nave-1.webp" },
  { ref: "EJ-02", type: "home", area: 210, zone: "Castelldefels", image: "/properties/vivienda-1.webp" },
  { ref: "EJ-03", type: "warehouse", area: 1400, zone: "Castelldefels", image: "/properties/nave-2.webp" },
  { ref: "EJ-04", type: "home", area: 95, zone: "Castelldefels", image: "/properties/vivienda-2.webp" },
  { ref: "EJ-05", type: "commercial", area: 160, zone: "Castelldefels", image: "/properties/local-1.webp" },
  { ref: "EJ-06", type: "home", area: 180, zone: "Castelldefels", image: "/properties/vivienda-3.webp" },
];

/** What the catalogue renders, and whether it is the preview sample. */
export function catalogue(): { items: Property[]; sample: boolean } {
  if (PROPERTIES.length > 0) return { items: PROPERTIES, sample: false };
  if (SHOW_PENDING) return { items: SAMPLE_PROPERTIES, sample: true };
  return { items: [], sample: false };
}

export const PROPERTY_TYPES: PropertyType[] = ["warehouse", "home", "commercial"];

/** Area as the locale writes it: "1.400 m²" / "1,400 m²". */
export const formatArea = (area: number, locale: string) =>
  `${new Intl.NumberFormat(locale).format(area)} m²`;
