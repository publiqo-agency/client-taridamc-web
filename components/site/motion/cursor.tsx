"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A label that follows the pointer over media tagged `data-cursor="Ver"`,
 * and only there: everywhere else the native cursor is untouched. Fine
 * pointers only; touch never sees it, reduced motion never loads it.
 * The label text comes from the tagged element (server-rendered copy).
 */
export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  const [active, setActive] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || calm) return;

    const target = { x: -100, y: -100 };
    const pos = { x: -100, y: -100 };
    let frame = 0;

    const tick = () => {
      pos.x += (target.x - pos.x) * 0.18;
      pos.y += (target.y - pos.y) * 0.18;
      if (dot.current) dot.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      frame = requestAnimationFrame(tick);
    };

    const onMove = (event: PointerEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;
      const host = (event.target as Element | null)?.closest<HTMLElement>("[data-cursor]");
      if (host) {
        setLabel(host.dataset.cursor ?? "");
        setActive(true);
      } else {
        setActive(false);
      }
    };
    const onLeave = () => setActive(false);

    frame = requestAnimationFrame(tick);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={dot}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[90] hidden [@media(pointer:fine)]:block"
    >
      <div
        className={`band-light -translate-x-1/2 -translate-y-1/2 transition-[scale,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          active ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        <span className="label grid size-24 place-items-center rounded-full bg-surface/90 text-ink backdrop-blur-sm">
          {label}
        </span>
      </div>
    </div>
  );
}
