import Link from "next/link";
import { EASE_OUT } from "@/lib/styles";

/**
 * The system's pill button. One line of text and fixed padding: across
 * languages, "Contact" and "Kontakta oss" keep the same height.
 *
 * `pillClass()` and `pillIconClass` are exported for what cannot be this
 * component (it renders Link/<a>): the form submit is a <button> and clones
 * the geometry from here instead of reinventing it.
 */

export type PillTone = "ink" | "accent" | "outline" | "white" | "whatsapp" | "whatsapp-outline";

const TONE: Record<PillTone, string> = {
  ink: "bg-ink text-stock hover:bg-ink-2",
  accent: "bg-accent text-accent-ink hover:bg-accent-2",
  outline: "border border-ink/15 text-ink hover:border-ink/45",
  /* bg-surface, not bg-stock: on the page background "white" must be a real
     plate, not blend in. */
  white: "bg-surface text-ink hover:bg-stock-2",
  whatsapp: "bg-whatsapp text-white hover:brightness-95",
  "whatsapp-outline": "border border-whatsapp text-whatsapp hover:bg-whatsapp/10",
};

export const pillClass = (tone: PillTone = "ink", extra = "") =>
  [
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3",
    "text-sm font-semibold transition-colors",
    TONE[tone],
    extra,
  ]
    .filter(Boolean)
    .join(" ");

/** The pill's icon: nudges half a step on hover, nothing more. */
export const pillIconClass = `transition-transform duration-300 ${EASE_OUT} group-hover:translate-x-0.5`;

type Props = {
  href: string;
  children: React.ReactNode;
  tone?: PillTone;
  /** Trailing glyph. A diagonal arrow marks "leaves the site". */
  icon?: React.ReactNode;
  className?: string;
  external?: boolean;
  /** Analytics tag, read by <AnalyticsListener>. */
  cta?: string;
  service?: string;
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
}: Props) {
  const content = (
    <>
      <span>{children}</span>
      <span aria-hidden className={pillIconClass}>
        {icon}
      </span>
    </>
  );

  const attrs = {
    className: pillClass(tone, className),
    ...(cta ? { "data-cta": cta } : {}),
    ...(service ? { "data-service": service } : {}),
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
