import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import Lenis from "lenis";

/**
 * The motion engine. Loaded with a dynamic import by <MotionRoot> after the
 * first paint, so GSAP and Lenis never sit on the critical path.
 *
 * Pages stay Server Components and only tag elements with `data-m="<effect>"`
 * (plus a few data-* options). Every effect's STARTING state is also declared
 * in globals.css under html[data-motion="on"]; the tweens here go FROM exactly
 * those values, so if you change one list, change the other.
 *
 * One vocabulary, repeated until it reads as a system. Entrances are short
 * and decelerate (strong ease-out); only large on-screen moves (image clips,
 * the intro curtain) use the in-out curve.
 *   lines / chars   text rises through a mask
 *   fade / rise     a block (or a button) settles a few pixels up
 *   blur            the hero's accent line comes into focus
 *   img / window    images open through a clip-path
 *   count           tabular numbers count up once
 *   words           the manifesto lights up word by word, scrubbed
 *   parallax        scrubbed depth, small offsets only
 *   stack           sticky panels: the one below recedes as the next covers it
 *   hscroll         pinned horizontal rail (desktop), snap row on touch
 */

gsap.registerPlugin(ScrollTrigger, CustomEase);

const CURTAIN = CustomEase.create("curtain", "0.76,0,0.24,1");
/* Emil Kowalski's strong ease-out: fast start, long settle. */
const OUT = CustomEase.create("out", "0.23,1,0.32,1");
const EXPO = "expo.out";

export const INTRO_DONE_EVENT = "tarida:intro-done";

let lenis: Lenis | null = null;

/** One Lenis for the whole visit; routes come and go under it. */
export function startLenis() {
  if (lenis) return lenis;
  lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 0.95, anchors: true });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis?.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  if (document.documentElement.hasAttribute("data-intro")) lenis.stop();
  return lenis;
}

export const getLenis = () => lenis;

const num = (value: string | undefined, fallback: number) => {
  const n = Number.parseFloat(value ?? "");
  return Number.isFinite(n) ? n : fallback;
};

const pad = (n: number, width: number) => String(Math.round(n)).padStart(width, "0");

/** Runs `start` once the first-visit intro has lifted (immediately otherwise). */
function afterIntro(start: () => void) {
  if (document.documentElement.getAttribute("data-intro") !== "on") {
    start();
    return () => {};
  }
  const handler = () => start();
  window.addEventListener(INTRO_DONE_EVENT, handler, { once: true });
  return () => window.removeEventListener(INTRO_DONE_EVENT, handler);
}

/**
 * Plays `build()` when `el` enters the viewport, once. Elements inside a
 * `[data-after-intro]` block (the heroes) wait for the intro instead.
 */
function onEnter(el: Element, build: () => gsap.core.Animation, start = "top 88%") {
  const anim = build();
  anim.pause();
  if (el.closest("[data-after-intro]")) {
    return afterIntro(() => anim.play());
  }
  ScrollTrigger.create({ trigger: el, start, once: true, onEnter: () => anim.play() });
  return () => {};
}

/**
 * The logo draws itself: each wave wipes in from the left, then the letters
 * of TARIDA MC rise through their line, then REAL ESTATE. SVG transforms are
 * in viewBox units (the letters are ~72 units tall), and the hidden state in
 * CSS is only opacity, because a CSS transform on an SVG element would beat
 * the transform attribute GSAP writes.
 */
export function logoTimeline(el: Element, delay = 0) {
  const tl = gsap.timeline({ delay });
  const waves = el.querySelectorAll("[data-logo-wave]");
  const glyphs = el.querySelectorAll("[data-logo-glyph]");
  const sub = el.querySelectorAll("[data-logo-sub]");
  tl.fromTo(
    waves,
    { opacity: 1, clipPath: "inset(0% 100% 0% 0%)" },
    { clipPath: "inset(0% 0% 0% 0%)", duration: 0.7, ease: CURTAIN, stagger: 0.08 },
  )
    .fromTo(glyphs, { opacity: 1, y: 90 }, { y: 0, duration: 0.6, ease: OUT, stagger: 0.03 }, 0.18)
    .fromTo(sub, { opacity: 1, y: 48 }, { y: 0, duration: 0.5, ease: OUT, stagger: 0.02 }, 0.4);
  return tl;
}

/** Mounts every effect found in the document. Returns the cleanup. */
export function mount(): () => void {
  const disposers: (() => void)[] = [];
  const mm = gsap.matchMedia();

  const ctx = gsap.context(() => {
    const all = (sel: string) => Array.from(document.querySelectorAll<HTMLElement>(sel));
    const delayOf = (el: HTMLElement) => num(el.dataset.delay, 0);

    all('[data-m="lines"]').forEach((el) => {
      const spans = el.querySelectorAll(".mask > span");
      disposers.push(
        onEnter(el, () =>
          gsap.fromTo(
            spans,
            { y: 0, yPercent: 115 },
            { yPercent: 0, duration: 0.9, ease: EXPO, stagger: num(el.dataset.stagger, 0.07), delay: delayOf(el) },
          ),
        ),
      );
    });

    all('[data-m="chars"]').forEach((el) => {
      const spans = el.querySelectorAll(".mask-inline > span");
      disposers.push(
        onEnter(el, () =>
          gsap.fromTo(
            spans,
            { y: 0, yPercent: 115 },
            { yPercent: 0, duration: 0.9, ease: EXPO, stagger: num(el.dataset.stagger, 0.025), delay: delayOf(el) },
          ),
        ),
      );
    });

    all('[data-m="logo"]').forEach((el) => {
      disposers.push(onEnter(el, () => logoTimeline(el, delayOf(el))));
    });

    all('[data-m="fade"]').forEach((el) => {
      disposers.push(
        onEnter(el, () =>
          gsap.fromTo(
            el,
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.8, ease: OUT, delay: delayOf(el) },
          ),
        ),
      );
    });

    all('[data-m="blur"]').forEach((el) => {
      disposers.push(
        onEnter(el, () =>
          gsap.fromTo(
            el,
            { opacity: 0, filter: "blur(6px)" },
            { opacity: 1, filter: "blur(0px)", duration: 0.9, ease: OUT, delay: delayOf(el) },
          ),
        ),
      );
    });

    all('[data-m="img"]').forEach((el) => {
      const img = el.querySelector("img");
      disposers.push(
        onEnter(
          el,
          () => {
            const tl = gsap.timeline({ delay: delayOf(el) });
            tl.fromTo(
              el,
              { clipPath: "inset(100% 0% 0% 0%)" },
              { clipPath: "inset(0% 0% 0% 0%)", duration: 1.1, ease: CURTAIN },
            );
            if (img) tl.fromTo(img, { scale: 1.1 }, { scale: 1, duration: 1.4, ease: OUT }, 0);
            return tl;
          },
          "top 92%",
        ),
      );
    });

    all('[data-m="window"]').forEach((el) => {
      const img = el.querySelector("img");
      disposers.push(
        onEnter(el, () => {
          const tl = gsap.timeline({ delay: delayOf(el) });
          tl.fromTo(
            el,
            { clipPath: "inset(34% 38% 34% 38%)" },
            { clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, ease: CURTAIN },
          );
          if (img) tl.fromTo(img, { scale: 1.1 }, { scale: 1, duration: 1.6, ease: OUT }, 0.05);
          return tl;
        }),
      );
    });

    all('[data-m="rise"]').forEach((el) => {
      disposers.push(
        onEnter(el, () =>
          gsap.fromTo(el, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.6, ease: OUT, delay: delayOf(el) }),
        ),
      );
    });

    all('[data-m="count"]').forEach((el) => {
      const to = num(el.dataset.to, 0);
      const width = num(el.dataset.pad, 1);
      el.textContent = pad(0, width);
      const state = { v: 0 };
      disposers.push(
        onEnter(el, () =>
          gsap.to(state, {
            v: to,
            duration: 1.4,
            ease: OUT,
            delay: delayOf(el),
            onUpdate: () => {
              el.textContent = pad(state.v, width);
            },
          }),
        ),
      );
    });

    all('[data-m="words"]').forEach((el) => {
      gsap.fromTo(
        el.querySelectorAll(".w"),
        { opacity: 0.2 },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.1,
          scrollTrigger: { trigger: el, start: "top 78%", end: "bottom 52%", scrub: 0.6 },
        },
      );
    });

    all('[data-m="parallax"]').forEach((el) => {
      const speed = num(el.dataset.speed, 10);
      gsap.fromTo(
        el,
        { yPercent: -speed },
        {
          yPercent: speed,
          ease: "none",
          scrollTrigger: { trigger: el.parentElement ?? el, start: "top bottom", end: "bottom top", scrub: true },
        },
      );
    });

    all('[data-m="stack"]').forEach((el) => {
      const items = Array.from(el.querySelectorAll<HTMLElement>("[data-stack-item]"));
      items.slice(0, -1).forEach((item, i) => {
        const next = items[i + 1];
        const inner = item.querySelector("[data-stack-inner]") ?? item;
        const shade = item.querySelector("[data-stack-shade]");
        const scroll = { trigger: next, start: "top bottom", end: "top top", scrub: true };
        gsap.to(inner, { scale: 0.93, yPercent: -4, ease: "none", scrollTrigger: scroll });
        if (shade) gsap.fromTo(shade, { opacity: 0 }, { opacity: 0.65, ease: "none", scrollTrigger: scroll });
      });
    });

    /* Pinned horizontal rail on wide screens; on touch it is a native snap row. */
    all('[data-m="hscroll"]').forEach((section) => {
      const track = section.querySelector<HTMLElement>("[data-track]");
      if (!track) return;
      // Only the rail pins; the heading above it scrolls past normally.
      const pinned = section.querySelector<HTMLElement>("[data-pin]") ?? section;
      const progress = section.querySelector<HTMLElement>("[data-progress]");

      mm.add("(min-width: 1024px) and (pointer: fine)", () => {
        const distance = () => Math.max(0, track.scrollWidth - track.clientWidth);
        gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: pinned,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.6,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (progress) progress.style.transform = `scaleX(${self.progress})`;
            },
          },
        });
      });
    });
  });

  // Images and fonts settle after the first layout; measure again.
  const refresh = () => ScrollTrigger.refresh();
  const raf = requestAnimationFrame(refresh);
  document.fonts?.ready.then(refresh).catch(() => {});
  window.addEventListener("load", refresh, { once: true });
  lenis?.resize();

  return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener("load", refresh);
    disposers.forEach((dispose) => dispose());
    mm.revert();
    ctx.revert();
  };
}
