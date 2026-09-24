"use client";

import { useEffect, useRef } from "react";
import { ACCENT } from "@/lib/styles";
import { Logo } from "../logo";
import { INTRO_KEY } from "./init-script";
import { SCROLL_UNLOCK_EVENT } from "./motion-root";

const INTRO_DONE_EVENT = "tarida:intro-done";

type Props = {
  /** 40 — a fact from the brief, never a founding year we do not have. */
  years: number;
  yearsLabel: string;
  place: string;
  coords: string;
};

/**
 * First-visit curtain, about two and a half seconds. A deep-sea panel: the
 * logo draws itself (waves wipe in, letters rise), a hairline runs across,
 * a counter reaches the business's forty years, and the panel lifts like a
 * blind to reveal the hero, whose window starts opening underneath.
 *
 * Shown only when MOTION_INIT_SCRIPT set html[data-intro="on"] (first visit
 * of the session, motion allowed). Click or any key hurries it along.
 */
export function Intro({ years, yearsLabel, place, coords }: Props) {
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
      const counter = q("[data-intro-count]")[0] as HTMLElement | undefined;
      const logo = q("svg")[0];
      const state = { v: 0 };

      const finish = () => {
        root.removeAttribute("data-intro");
        try {
          sessionStorage.setItem(INTRO_KEY, "1");
        } catch {}
        window.dispatchEvent(new Event(SCROLL_UNLOCK_EVENT));
      };

      const tl = gsap.timeline({ onComplete: finish });
      if (logo) tl.add(logoTimeline(logo), 0.05);
      tl.to(q("[data-intro-rule]"), { scaleX: 1, duration: 1.1, ease: "expo.inOut" }, 0.2)
        .to(q("[data-intro-meta]"), { opacity: 1, duration: 0.6, ease: "power2.out", stagger: 0.08 }, 0.4)
        .to(
          state,
          {
            v: years,
            duration: 1.3,
            ease: "power3.out",
            onUpdate: () => {
              if (counter) counter.textContent = String(Math.round(state.v)).padStart(2, "0");
            },
          },
          0.3,
        )
        .to(q("[data-intro-content]"), { yPercent: -14, opacity: 0, duration: 0.55, ease: "power2.in" }, 1.75)
        .call(() => window.dispatchEvent(new Event(INTRO_DONE_EVENT)), [], 1.9)
        .to(el, { clipPath: "inset(0% 0% 100% 0%)", duration: 0.95, ease: "expo.inOut" }, 1.9);

      hurry = () => tl.timeScale(5);
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
  }, [years]);

  return (
    <div
      ref={panel}
      aria-hidden
      className="intro band-dark grain fixed inset-0 bg-stock text-ink"
      style={{ clipPath: "inset(0% 0% 0% 0%)" }}
    >
      <div data-intro-content className="absolute inset-0 flex flex-col justify-between p-5 md:p-10">
        <div className="flex items-start justify-between">
          <span data-intro-meta className="label text-ink-soft opacity-0">
            {place}
          </span>
          <span data-intro-meta className="label tnum text-ink-soft opacity-0">
            {coords}
          </span>
        </div>

        <div className="relative flex justify-center">
          <Logo variant="full" decorative className="h-auto w-[min(78vw,34rem)]" />
          <span
            data-intro-rule
            className="absolute inset-x-0 -bottom-8 block h-px origin-center scale-x-0 bg-line md:-bottom-12"
          />
        </div>

        <div className="flex items-end justify-end gap-3">
          <span data-intro-count className="font-sans text-6xl font-extralight tracking-[-0.04em] tnum md:text-8xl">
            00
          </span>
          <span data-intro-meta className={`${ACCENT} pb-2 text-2xl text-ink-soft opacity-0 md:pb-3 md:text-3xl`}>
            {yearsLabel}
          </span>
        </div>
      </div>
    </div>
  );
}
