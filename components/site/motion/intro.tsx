"use client";

import { useEffect, useRef } from "react";
import { Logo } from "../logo";
import { INTRO_KEY } from "./init-script";
import { SCROLL_UNLOCK_EVENT } from "./motion-root";

const INTRO_DONE_EVENT = "tarida:intro-done";

/**
 * First-visit curtain, about a second and a half. A deep-sea panel where
 * the logo draws itself (waves wipe in, letters rise), then the panel lifts
 * like a blind and the hero's window starts opening underneath. Scroll is
 * held only for that time.
 *
 * Shown only when MOTION_INIT_SCRIPT set html[data-intro="on"] (first visit
 * of the session, motion allowed). Click or any key hurries it along.
 */
export function Intro() {
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const el = panel.current;
    if (!el || root.getAttribute("data-intro") !== "on") return;

    let killed = false;
    let hurry: (() => void) | undefined;

    Promise.all([import("gsap"), import("./effects")]).then(([{ gsap }, { logoTimeline }]) => {
      if (killed) return;
      const q = gsap.utils.selector(el);
      const logo = q("svg")[0];

      const finish = () => {
        root.removeAttribute("data-intro");
        try {
          sessionStorage.setItem(INTRO_KEY, "1");
        } catch {}
        window.dispatchEvent(new Event(SCROLL_UNLOCK_EVENT));
      };

      const tl = gsap.timeline({ onComplete: finish });
      if (logo) tl.add(logoTimeline(logo), 0.05);
      tl.to(q("[data-intro-content]"), { opacity: 0, duration: 0.25, ease: "power2.out" }, 0.95)
        .call(() => window.dispatchEvent(new Event(INTRO_DONE_EVENT)), [], 0.95)
        .to(el, { clipPath: "inset(0% 0% 100% 0%)", duration: 0.6, ease: "expo.inOut" }, 0.95);

      hurry = () => tl.timeScale(4);
      window.addEventListener("pointerdown", hurry, { once: true });
      window.addEventListener("keydown", hurry, { once: true });
    });

    return () => {
      killed = true;
      if (hurry) {
        window.removeEventListener("pointerdown", hurry);
        window.removeEventListener("keydown", hurry);
      }
    };
  }, []);

  return (
    <div
      ref={panel}
      aria-hidden
      className="intro band-dark grain fixed inset-0 bg-stock text-ink"
      style={{ clipPath: "inset(0% 0% 0% 0%)" }}
    >
      <div data-intro-content className="absolute inset-0 flex items-center justify-center p-5 md:p-10">
        <Logo variant="full" decorative className="h-auto w-[min(78vw,34rem)]" />
      </div>
    </div>
  );
}
