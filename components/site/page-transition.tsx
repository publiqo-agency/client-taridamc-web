import { ViewTransition } from "react";

/**
 * Transition type the language switcher tags its navigations with. A
 * language change lands on the same page, so the shared photo would pair
 * with itself: its morph group paints above the page, without the hero's
 * darkening wash, and covers the headline while it rises.
 */
export const LOCALE_TRANSITION = "locale";

/** `share` for the photos that morph between pages: never on a language change. */
export const MORPH_SHARE = { [LOCALE_TRANSITION]: "none", default: "morph" };

/**
 * Wraps a page's content so App Router navigations animate it (class
 * `page` in globals.css: the old page lifts away, the new one rises under a
 * veil). In each page and not in the layout: layouts persist across
 * navigations, so enter and exit would never fire there.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition enter="page" exit="page" default="none">
      <div>{children}</div>
    </ViewTransition>
  );
}
