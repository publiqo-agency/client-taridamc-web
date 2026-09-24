/**
 * Castelldefels, the business's home town. Real geography used as the
 * "architect's plan" annotation (header, intro, footer, about).
 */
export const COORDS = "41°16′N 1°58′E";
export const COORDS_PARTS = [
  { value: 41, unit: "°", pad: 2 },
  { value: 16, unit: "′N", pad: 2 },
  { value: 1, unit: "°", pad: 1 },
  { value: 58, unit: "′E", pad: 2 },
] as const;
export const PLACE = "Castelldefels";
export const TIME_ZONE = "Europe/Madrid";
