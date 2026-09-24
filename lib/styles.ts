/**
 * Shared class strings. Composition helpers for the layout rhythm, so every
 * page frames and spaces the same way without a wrapper component.
 *
 * Keep this file small: it is CLIENT-SKIN (docs/SKELETON.md) and grows with
 * the design. What must survive a redesign is the pattern — named constants
 * instead of repeated utility soup — not these values.
 */

/** Page frame: max width + side gutters. */
export const FRAME = "mx-auto w-full max-w-7xl px-5 md:px-8";

/** Narrow frame for long-form reading (legal pages, articles). */
export const FRAME_NARROW = "mx-auto w-full max-w-3xl px-5 md:px-8";

/** Vertical rhythm of a section. */
export const SECTION = "py-16 md:py-24";

/** Card surface. */
export const CARD = "relative rounded-3xl border border-line bg-surface";

/** Display voice: section headlines. */
export const DISPLAY = "font-display font-extrabold leading-[0.95] tracking-[-0.01em]";

/** Same voice, quieter: headlines that are a sentence, not a hit. */
export const DISPLAY_QUIET = "font-display font-semibold leading-[1.05] tracking-[-0.01em]";

/** Easing shared by every hover translate. */
export const EASE_OUT = "ease-[cubic-bezier(0.22,1,0.36,1)]";
