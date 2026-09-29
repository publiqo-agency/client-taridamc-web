import { useId } from "react";
import { ORG } from "@/lib/seo";
import {
  LOGO_COMPACT_HEIGHT,
  LOGO_HEIGHT,
  LOGO_MARK_HEIGHT,
  LOGO_SUBTITLE,
  LOGO_TITLE,
  LOGO_WAVES,
  LOGO_WIDTH,
} from "./logo-paths";

type Props = {
  /**
   * full: waves + TARIDA MC + REAL ESTATE (the client's lockup).
   * compact: without the REAL ESTATE line, for small sizes (header).
   * mark: the two waves alone.
   */
  variant?: "full" | "compact" | "mark";
  /** Height comes from here; the width follows the lockup. */
  className?: string;
  /**
   * Lets the motion engine draw it: the waves wipe in, then each letter
   * rises through the line (data-m="logo"). Without motion it is static.
   */
  animate?: boolean;
  delay?: number;
  /** Decorative copies (a second instance on the page) stay out of the a11y tree. */
  decorative?: boolean;
  /** Kept for call-site compatibility with the old raster logo. */
  priority?: boolean;
};

/**
 * The Tarida MC logo, inline SVG. It is painted with `--logo`, which each
 * band sets (brand blue on light surfaces, salt white on the deep-sea
 * bands), so it never needs to know where it sits. Letters are separate
 * paths clipped to their line, so they can rise like the site's headlines.
 */
export function Logo({ variant = "compact", className = "h-10", animate = false, delay, decorative = false }: Props) {
  const id = useId().replace(/:/g, "");
  const height = variant === "full" ? LOGO_HEIGHT : variant === "compact" ? LOGO_COMPACT_HEIGHT : LOGO_MARK_HEIGHT;
  const showTitle = variant !== "mark";

  return (
    <svg
      viewBox={`0 0 ${LOGO_WIDTH} ${height}`}
      className={`block w-auto shrink-0 fill-[var(--logo)] ${className}`}
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : ORG.name}
      aria-hidden={decorative || undefined}
      {...(animate ? { "data-m": "logo" } : {})}
      {...(animate && delay ? { "data-delay": String(delay) } : {})}
    >
      <defs>
        <clipPath id={`${id}-t`}>
          <rect x="0" y="92" width={LOGO_WIDTH} height="82" />
        </clipPath>
        <clipPath id={`${id}-s`}>
          <rect x="0" y="194" width={LOGO_WIDTH} height="43" />
        </clipPath>
      </defs>
      <g>
        {LOGO_WAVES.map((d, i) => (
          <path key={i} d={d} data-logo-wave />
        ))}
      </g>
      {showTitle && (
        <g clipPath={`url(#${id}-t)`}>
          {LOGO_TITLE.map((d, i) => (
            <path key={i} d={d} data-logo-glyph />
          ))}
        </g>
      )}
      {variant === "full" && (
        <g clipPath={`url(#${id}-s)`}>
          {LOGO_SUBTITLE.map((d, i) => (
            <path key={i} d={d} data-logo-sub />
          ))}
        </g>
      )}
    </svg>
  );
}
