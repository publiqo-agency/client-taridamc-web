/**
 * Shared class strings. CLIENT-SKIN: the layout rhythm and type voices of
 * this site. The form (CORE) borrows CARD and pillClass, so both stay generic
 * enough to wrap it.
 */

/** Page width. Wide on purpose: the design breathes on large screens. */
export const FRAME = "mx-auto w-full max-w-[1680px] px-5 md:px-10 xl:px-14";
export const FRAME_NARROW = "mx-auto w-full max-w-3xl px-5 md:px-10";

export const SECTION = "py-24 md:py-36";

/** A plate. Square corners and a hairline: no shadows, no radii. */
export const CARD = "relative border border-line bg-surface";

/** Display serif (Instrument Serif), the voice of the big statements. */
export const DISPLAY = "font-display font-normal leading-[0.95] tracking-[-0.015em]";

/** Same serif for smaller headings, a little looser. */
export const DISPLAY_QUIET = "font-display font-normal leading-[1.05] tracking-[-0.01em]";

/** Huge thin geometric sans (Montserrat 200, the logo's family), the Velora voice. */
export const DISPLAY_SANS = "font-sans font-extralight leading-[0.86] tracking-[-0.06em]";

/**
 * The accent phrase inside a headline: the hero's thin Montserrat (the
 * logo's family), upright. Italics are kept out of the site on purpose.
 */
export const ACCENT = "font-sans font-extralight not-italic tracking-[-0.045em]";

/** Section index, e.g. "(01)". */
export const INDEX = "label tnum text-ink-soft";

export const EASE_OUT = "ease-[cubic-bezier(0.16,1,0.3,1)]";
export const EASE_CURTAIN = "ease-[cubic-bezier(0.76,0,0.24,1)]";
