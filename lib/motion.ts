/**
 * Reveal-on-scroll. The classes live in globals.css and <RevealObserver>
 * switches them on; this is only the helper that composes them and the
 * script that arms the system.
 *
 * Returns a class string (not an object to spread) because the revealed
 * elements are the ones each page already has: a <Figure>, a grid <Link>, an
 * <article>. All accept `className`, none accept `style`.
 */

export type RevealFrom = "left" | "right" | "up";

/** Number of stagger steps (see .reveal-dN in globals.css). */
const MAX_STEP = 4;

/**
 * `from` is the entry direction — "left"/"right" only translate on md+; on
 * mobile everything rises. `step` staggers siblings and is clamped to MAX_STEP.
 */
export function reveal(from: RevealFrom = "up", step = 0): string {
  const delay = Math.min(Math.max(step, 0), MAX_STEP);
  return [
    "reveal",
    from !== "up" && `reveal-${from}`,
    delay > 0 && `reveal-d${delay}`,
  ]
    .filter(Boolean)
    .join(" ");
}

/**
 * Inline script that runs synchronously in <head> before first paint: marks
 * that JS is present so the CSS may hide what is about to be revealed. This
 * is the guard that keeps the page fully visible without JS (or when the
 * bundle fails) instead of blank, waiting for an observer that never comes.
 */
export const REVEAL_INIT_SCRIPT = `document.documentElement.setAttribute("data-reveal","on")`;
