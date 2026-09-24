"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

/** Other client components ask for the page scroll to pause (menu overlay). */
export const SCROLL_LOCK_EVENT = "tarida:scroll-lock";
export const SCROLL_UNLOCK_EVENT = "tarida:scroll-unlock";

/**
 * Mounts the motion engine (./effects) on every route. The engine is a
 * dynamic import: GSAP and Lenis arrive after the first paint and never block
 * the LCP. Reduced motion: the engine is not even downloaded.
 */
export function MotionRoot() {
  const pathname = usePathname();

  // A language change remounts the root layout and <html> loses the
  // attributes the head script set (see RootAttributes): restore them in the
  // same commit, before paint.
  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.documentElement.setAttribute("data-motion", "on");
  }, [pathname]);

  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      root.setAttribute("data-motion-ready", "");
      return;
    }

    let cancelled = false;
    let cleanup: (() => void) | undefined;

    import("./effects").then((engine) => {
      if (cancelled) return;
      const lenis = engine.startLenis();
      cleanup = engine.mount();
      root.setAttribute("data-motion-ready", "");

      const lock = () => lenis.stop();
      const unlock = () => lenis.start();
      window.addEventListener(SCROLL_LOCK_EVENT, lock);
      window.addEventListener(SCROLL_UNLOCK_EVENT, unlock);
      const unmount = cleanup;
      cleanup = () => {
        window.removeEventListener(SCROLL_LOCK_EVENT, lock);
        window.removeEventListener(SCROLL_UNLOCK_EVENT, unlock);
        unmount();
      };
    });

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [pathname]);

  return null;
}
