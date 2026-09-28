"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef } from "react";

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
  const firstRoute = useRef(true);
  const fromHistory = useRef(false);

  // Back and forward keep the position the browser restores.
  useEffect(() => {
    const onPop = () => {
      fromHistory.current = true;
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

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
    // Any other navigation opens the new page at its top. Next scrolls the
    // window, but Lenis outlives the route and would ease back to the old
    // position, so it is reset too. Not on the first load (a reload keeps
    // its place) and not for #anchors (Lenis handles those).
    const toTop = !firstRoute.current && !fromHistory.current && !window.location.hash;
    firstRoute.current = false;
    fromHistory.current = false;

    import("./effects").then((engine) => {
      if (cancelled) return;
      const lenis = engine.startLenis();
      if (toTop) lenis.scrollTo(0, { immediate: true, force: true });
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
