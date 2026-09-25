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

/** Display voice: light Montserrat, tight tracking. The big statements. */
export const DISPLAY = "font-display font-light leading-[1.04] tracking-[-0.035em]";

/** Same face for smaller headings and lead paragraphs, a little looser. */
export const DISPLAY_QUIET = "font-display font-light leading-[1.2] tracking-[-0.02em]";

/** Huge thin Montserrat (200) for the hero and the big numbers. */
export const DISPLAY_SANS = "font-sans font-extralight leading-[0.86] tracking-[-0.06em]";

/**
 * The accent phrase inside a headline: a thinner weight of the same face,
 * upright, in the logo's blue. Never a second family, never italics.
 */
export const ACCENT = "font-sans font-extralight not-italic tracking-[-0.045em]";

/** Section index, e.g. "(01)". */
export const INDEX = "label tnum text-ink-soft";

/* Easing lives in globals.css (--ease-out, --ease-in-out): use `ease-(--ease-out)`. */
