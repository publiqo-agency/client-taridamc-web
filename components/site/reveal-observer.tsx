"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Reveals every `.reveal` in the document when it enters the viewport.
 *
 * One IntersectionObserver for the whole page instead of a wrapper component
 * per element: the site is Server Components top to bottom, and wrapping
 * every card would add <div>s that break hairline grids and drag the
 * dictionaries into the client bundle. Pages only add classes (`reveal()` in
 * lib/motion.ts) and stay Server Components.
 *
 * One-shot: once in, the element is unobserved and never hides again, which
 * is what keeps the page from feeling restless when scrolling back up.
 *
 * `usePathname` is only a dependency (the component renders nothing, so the
 * proxy rewrites cannot cause a hydration mismatch): on client navigation
 * the DOM is replaced and the new elements need observing.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // With reduced motion the CSS never hides anything, so there is nothing to reveal.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = document.querySelectorAll(".reveal:not(.is-in)");
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      },
      // threshold 0 + negative bottom margin: fires when the top edge crosses
      // 88% of the viewport height. A fractional threshold would not work —
      // section bands are taller than the screen and never reach it.
      { rootMargin: "0px 0px -12% 0px", threshold: 0 },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
