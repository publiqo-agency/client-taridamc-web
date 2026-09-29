"use client";

import { useEffect, useState } from "react";

/**
 * Preview-only A/B switch between the two photo sets, so the client can pick
 * the look they prefer per image. Scaffolding, not product: the layout only
 * mounts it when SHOW_PENDING is on, and it goes away once the set is chosen.
 *
 * B is the current set in /public. A is the earlier stock set, kept under
 * /public/photos-a/ with the same paths. Pages keep rendering the B paths;
 * this rewrites the `src`/`srcset` of the <img> elements next/image produced
 * (`/_next/image?url=%2Fhero%2Fhome.webp…`) so no page has to know about it.
 *
 * Literal colours, like the pending notices: it must read as a note on top
 * of the mockup, not as part of the design.
 */

const PREFIX = "/photos-a";

const PATHS = [
  "/about/castelldefels.webp",
  "/about/interior.webp",
  "/about/story.webp",
  "/contact/hero.webp",
  "/cta/sell.webp",
  "/hero/home.webp",
  "/properties/local-1.webp",
  "/properties/nave-1.webp",
  "/properties/nave-2.webp",
  "/properties/vivienda-1.webp",
  "/properties/vivienda-2.webp",
  "/properties/vivienda-3.webp",
  "/services/index.webp",
  "/services/purchase/hero.webp",
  "/services/rental/hero.webp",
];

const STORAGE_KEY = "tarida-photo-variant";

type Variant = "a" | "b";

/** [B form, A form] of each path inside a next/image optimizer URL. */
const PAIRS = PATHS.map((p) => [
  `url=${encodeURIComponent(p)}&`,
  `url=${encodeURIComponent(PREFIX + p)}&`,
]);

function rewrite(value: string, variant: Variant) {
  let out = value;
  for (const [b, a] of PAIRS) {
    out = variant === "a" ? out.split(b).join(a) : out.split(a).join(b);
  }
  return out;
}

function apply(variant: Variant) {
  for (const img of document.querySelectorAll("img")) {
    for (const attr of ["src", "srcset"] as const) {
      const current = img.getAttribute(attr);
      if (!current) continue;
      let next = rewrite(current, variant);
      // Unoptimized images carry the bare path.
      const bare = variant === "a" ? PATHS.find((p) => next === p) : PATHS.find((p) => next === PREFIX + p);
      if (bare) next = variant === "a" ? PREFIX + bare : bare;
      if (next !== current) img.setAttribute(attr, next);
    }
  }
}

function readStored(): Variant {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "a" ? "a" : "b";
  } catch {
    return "b";
  }
}

export function PhotoVariantToggle() {
  const [variant, setVariant] = useState<Variant>("b");

  useEffect(() => {
    setVariant(readStored());
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, variant);
    } catch {
      // Private mode: the choice just lasts for this page view.
    }
    apply(variant);
    // Client navigations and lazy sections mount new <img> elements.
    const observer = new MutationObserver(() => apply(variant));
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [variant]);

  const button = (value: Variant) => (
    <button
      type="button"
      onClick={() => setVariant(value)}
      aria-pressed={variant === value}
      className={`grid size-6 place-items-center rounded-full text-[0.625rem] font-medium transition-colors ${
        variant === value ? "bg-white text-[#0b0b0c]" : "text-white/60 hover:text-white"
      }`}
    >
      {value.toUpperCase()}
    </button>
  );

  return (
    <div
      role="group"
      aria-label="Photo set"
      className="fixed bottom-5 left-5 z-40 flex items-center gap-0.5 rounded-full bg-[#0b0b0c]/70 p-0.5 backdrop-blur-sm md:bottom-8 md:left-8"
    >
      {button("a")}
      {button("b")}
    </div>
  );
}
