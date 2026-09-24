"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Restores the <html> attributes only the client knows.
 *
 * The inline script in the layout sets them on the hard load, but they do
 * not survive a client navigation that crosses the [locale] segment — i.e.
 * a language change. React remounts the root layout there, and <html> is a
 * singleton: on reacquiring it, every attribute is cleared and only the
 * props are re-applied. `data-reveal` vanished and the scroll animations
 * stayed dead for the rest of the session.
 *
 * useLayoutEffect, not useEffect: it runs in the same commit as the clearing
 * and before paint, so the wrong state is never seen.
 *
 * `usePathname` is only a dependency — the component paints nothing, so the
 * proxy rewrites cannot cause a hydration mismatch.
 */
export function RootAttributes() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-reveal", "on");
  }, [pathname]);

  return null;
}
