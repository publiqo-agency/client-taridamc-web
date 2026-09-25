import Link from "next/link";

/**
 * The system's button. Square corners and one line of text: the plan-drawing
 * vocabulary of the site has no pills. (The name stays for the CORE form,
 * which imports `pillClass` to clone the geometry onto its submit button.)
 *
 * `rise` lets the button settle in the first time it is seen (motion
 * engine, data-m="rise"); `delay` staggers it after its neighbours.
 */

export type PillTone = "ink" | "accent" | "outline" | "white" | "whatsapp" | "whatsapp-outline";

const TONE: Record<PillTone, string> = {
  /* The primary button wears the logo's blue; it deepens to navy on hover. */
  ink: "bg-accent text-accent-ink hover:bg-ink hover:text-stock",
  accent: "bg-accent text-accent-ink hover:bg-accent-2",
  outline: "border border-ink/30 text-ink hover:border-ink hover:bg-ink hover:text-stock",
  white: "bg-surface text-ink hover:bg-accent hover:text-accent-ink",
  whatsapp: "bg-accent text-accent-ink hover:bg-ink hover:text-stock",
  "whatsapp-outline": "border border-ink/30 text-ink hover:border-ink hover:bg-ink hover:text-stock",
};

export const pillClass = (tone: PillTone = "ink", extra = "") =>
  [
    "group inline-flex h-12 items-center justify-center gap-3 px-6",
    "text-[0.8125rem] font-medium tracking-[0.02em] whitespace-nowrap",
    // Colours follow the pointer quickly; the press scales down a touch so
    // the button answers the finger before the page does.
    "transition-[color,background-color,border-color,scale] duration-200 ease-(--ease-out) active:scale-[0.97]",
    TONE[tone],
    extra,
  ]
    .filter(Boolean)
    .join(" ");

/** The button's icon slot. */
export const pillIconClass = "arrow-swap";

/** Arrow that slides out and is replaced by its twin on hover. */
export function Arrow({ glyph = "→" }: { glyph?: React.ReactNode }) {
  return (
    <span aria-hidden className="arrow-swap">
      <span>{glyph}</span>
      <span>{glyph}</span>
    </span>
  );
}

type Props = {
  href: string;
  children: React.ReactNode;
  tone?: PillTone;
  icon?: React.ReactNode;
  className?: string;
  external?: boolean;
  /** Analytics tag, read by <AnalyticsListener>. */
  cta?: string;
  service?: string;
  rise?: boolean;
  delay?: number;
};

export function PillButton({
  href,
  children,
  tone = "ink",
  icon = "→",
  className = "",
  external = false,
  cta,
  service,
  rise = false,
  delay,
}: Props) {
  const content = (
    <>
      <span>{children}</span>
      <Arrow glyph={icon} />
    </>
  );

  const attrs = {
    className: pillClass(tone, className),
    ...(cta ? { "data-cta": cta } : {}),
    ...(service ? { "data-service": service } : {}),
    ...(rise ? { "data-m": "rise" } : {}),
    ...(rise && delay ? { "data-delay": String(delay) } : {}),
  };

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...attrs}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} {...attrs}>
      {content}
    </Link>
  );
}
