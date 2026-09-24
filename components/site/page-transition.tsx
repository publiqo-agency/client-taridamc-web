import { ViewTransition } from "react";

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
