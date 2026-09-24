import { SHOW_PENDING } from "@/lib/pending";

/**
 * Preview-only "pending" notices. Neither renders in production: both hang
 * from `SHOW_PENDING` (lib/pending.ts).
 *
 * LITERAL COLOURS, NOT TOKENS — the opposite of what the rest of the site
 * asks for, and deliberate: these notices appear inside dark bands, light
 * cards and accent surfaces, where the tokens mean different things. A
 * notice that blends into half the surfaces does not notify. They must read
 * as what they are: a note stuck on top of a mockup.
 */

const CHIP =
  "inline-flex items-center gap-1.5 rounded-full bg-[#0b0b0c]/85 px-2.5 py-1 text-[0.625rem] font-semibold tracking-[0.14em] text-white uppercase backdrop-blur-sm";

function Dot() {
  return <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-[#f6744e]" />;
}

/**
 * Inline note for a value the client has not delivered and whose absence
 * removes a button or a whole line. Visible to screen readers on purpose: it
 * takes the place of a control that should be there.
 */
export function PendingData({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  if (!SHOW_PENDING) return null;

  return (
    <span className={`${CHIP} border border-dashed border-white/30 ${className}`}>
      <Dot />
      {children}
    </span>
  );
}

/**
 * Block that takes a whole section for which there is no content yet. Says
 * what goes in that slot and why it is missing; disappears in production.
 */
export function PendingSection({
  slot,
  reason,
  label = "Pending",
  className = "",
}: {
  /** What belongs in this position. */
  slot: string;
  /** Why it is not here yet. One sentence. */
  reason: string;
  /** "Pending" awaits client material; "N/A" marks a slot the brief forbids filling. */
  label?: string;
  className?: string;
}) {
  if (!SHOW_PENDING) return null;

  return (
    <div
      className={`rounded-[1.75rem] border border-dashed border-[#0b0b0c]/25 px-8 py-14 text-center ${className}`}
    >
      <span className={CHIP}>
        <Dot />
        {label}
      </span>
      <p className="mt-5 font-display text-xl font-extrabold">{slot}</p>
      <p className="mx-auto mt-3 max-w-md text-sm text-ink-soft">{reason}</p>
    </div>
  );
}
