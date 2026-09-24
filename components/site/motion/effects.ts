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
 * One vocabulary, repeated until it reads as a system:
 *   lines / chars   text rises through a mask (expo out)
 *   img / window    images open through a clip-path (curtain in-out)
 *   draw-x / draw-y hairlines draw from their origin
 *   seed            a button grows from a square, then its label fades in
 *   count           tabular numbers count up once
 *   words           the manifesto lights up word by word, scrubbed
 *   parallax/drift  scrubbed depth, small offsets only
 *   stack           sticky panels: the one below recedes as the next covers it
 *   hscroll         pinned horizontal rail (desktop), snap row on touch
 *   sundial         the one signature: a conic sweep with a hand, once
 *   stroke          an SVG line that draws with the scroll
 */

gsap.registerPlugin(ScrollTrigger, CustomEase);

const CURTAIN = CustomEase.create("curtain", "0.76,0,0.24,1");
const EXPO = "expo.out";

export const INTRO_DONE_EVENT = "tarida:intro-done";

let lenis: Lenis | null = null;

/** One Lenis for the whole visit; routes come and go under it. */
export function startLenis() {
  if (lenis) return lenis;
  lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 0.95, anchors: true });
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
            { yPercent: 0, duration: 1.25, ease: EXPO, stagger: num(el.dataset.stagger, 0.11), delay: delayOf(el) },
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
            { yPercent: 0, duration: 1.2, ease: EXPO, stagger: num(el.dataset.stagger, 0.035), delay: delayOf(el) },
          ),
        ),
      );
    });

    all('[data-m="fade"]').forEach((el) => {
      disposers.push(
        onEnter(el, () =>
          gsap.fromTo(
            el,
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 1.1, ease: EXPO, delay: delayOf(el) },
          ),
        ),
      );
    });

    all('[data-m="blur"]').forEach((el) => {
      disposers.push(
        onEnter(el, () =>
          gsap.fromTo(
            el,
            { opacity: 0, filter: "blur(10px)" },
            { opacity: 1, filter: "blur(0px)", duration: 1.4, ease: "power2.out", delay: delayOf(el) },
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
              { clipPath: "inset(0% 0% 0% 0%)", duration: 1.4, ease: CURTAIN },
            );
            if (img) tl.fromTo(img, { scale: 1.22 }, { scale: 1, duration: 2, ease: EXPO }, 0);
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
            { clipPath: "inset(0% 0% 0% 0%)", duration: 1.6, ease: CURTAIN },
          );
          if (img) tl.fromTo(img, { scale: 1.12 }, { scale: 1, duration: 2.4, ease: EXPO }, 0.1);
          return tl;
        }),
      );
    });

    all('[data-m="draw-x"], [data-m="draw-y"]').forEach((el) => {
      const axis = el.dataset.m === "draw-x" ? "scaleX" : "scaleY";
      disposers.push(
        onEnter(el, () =>
          gsap.fromTo(
            el,
            { [axis]: 0, transformOrigin: el.dataset.origin ?? "50% 50%" },
            { [axis]: 1, duration: 1.3, ease: CURTAIN, delay: delayOf(el) },
          ),
        ),
      );
    });

    all('[data-m="seed"]').forEach((el) => {
      const side = Math.max(0, (el.offsetWidth - el.offsetHeight) / 2);
      disposers.push(
        onEnter(el, () => {
          const tl = gsap.timeline({ delay: delayOf(el) });
          tl.fromTo(
            el,
            { clipPath: `inset(0px ${side}px 0px ${side}px)` },
            { clipPath: "inset(0px 0px 0px 0px)", duration: 0.7, ease: CURTAIN, delay: 0.15 },
          ).fromTo(el.children, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "power2.out" }, "-=0.2");
          return tl;
        }),
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
            duration: 2.2,
            ease: "power3.out",
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
        { opacity: 0.14 },
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

    all('[data-m="drift"]').forEach((el) => {
      const scope = el.closest("[data-drift-scope]") ?? el.closest("section") ?? el;
      gsap.to(el, {
        xPercent: num(el.dataset.x, 0),
        yPercent: num(el.dataset.y, 0),
        opacity: num(el.dataset.opacity, 1),
        ease: "none",
        scrollTrigger: { trigger: scope, start: "top top", end: "bottom top", scrub: true },
      });
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

    all('[data-m="sundial"]').forEach((el) => {
      const hand = el.querySelector(".sundial-hand");
      const photo = el.querySelector("img");
      disposers.push(
        onEnter(
          el,
          () => {
            const tl = gsap.timeline();
            if (hand) {
              tl.fromTo(
                hand,
                { rotation: 215, scaleY: 0, transformOrigin: "50% 100%" },
                { rotation: 215, scaleY: 1, duration: 0.6, ease: CURTAIN },
              );
            }
            tl.fromTo(el, { "--dial": "0deg" }, { "--dial": "360deg", duration: 1.9, ease: "power2.inOut" }, 0.45);
            if (hand) tl.fromTo(hand, { rotation: 215 }, { rotation: 575, duration: 1.9, ease: "power2.inOut" }, 0.45);
            if (photo) tl.fromTo(photo, { scale: 1.18 }, { scale: 1, duration: 2.6, ease: EXPO }, 0.45);
            return tl;
          },
          "top 75%",
        ),
      );
    });

    all('[data-m="stroke"]').forEach((el) => {
      gsap.fromTo(
        el.querySelectorAll("path"),
        { strokeDashoffset: 1 },
        {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top 85%", end: "bottom 35%", scrub: 0.8 },
        },
      );
    });

    /* Pinned horizontal rail on wide screens; on touch it is a native snap row. */
    all('[data-m="hscroll"]').forEach((section) => {
      const track = section.querySelector<HTMLElement>("[data-track]");
      if (!track) return;
      const progress = section.querySelector<HTMLElement>("[data-progress]");
      const current = section.querySelector<HTMLElement>("[data-current]");
      const cards = Array.from(track.children) as HTMLElement[];

      mm.add("(min-width: 1024px) and (pointer: fine)", () => {
        const distance = () => Math.max(0, track.scrollWidth - track.clientWidth);
        const tween = gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.9,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (progress) progress.style.transform = `scaleX(${self.progress})`;
              if (current) current.textContent = pad(Math.min(cards.length, Math.floor(self.progress * cards.length) + 1), 2);
            },
          },
        });
        cards.forEach((card) => {
          const depth = num(card.dataset.depth, 0);
          if (!depth) return;
          gsap.fromTo(
            card,
            { y: depth },
            {
              y: -depth,
              ease: "none",
              scrollTrigger: { trigger: card, containerAnimation: tween, start: "left right", end: "right left", scrub: true },
            },
          );
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
