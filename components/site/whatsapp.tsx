import { whatsappUrl } from "@/lib/whatsapp";
import { Arrow, pillClass } from "./pill-button";
import { PendingData } from "./pending";

/**
 * WhatsApp CTAs. Everything here returns `null` (or a preview-only pending
 * chip) when no number is configured (lib/site.ts): a WhatsApp button that
 * opens an empty contact picker is worse than none — the visitor believes
 * they have made contact and nobody was reached.
 */

export function WhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
      <path d="M12.04 2c-5.5 0-9.97 4.47-9.97 9.97 0 1.76.46 3.48 1.34 5L2 22l5.15-1.35a9.93 9.93 0 0 0 4.89 1.25h.01c5.5 0 9.97-4.47 9.97-9.97 0-2.66-1.04-5.17-2.92-7.05A9.9 9.9 0 0 0 12.04 2Zm0 18.15h-.01a8.3 8.3 0 0 1-4.22-1.16l-.3-.18-3.13.82.84-3.05-.2-.31a8.26 8.26 0 0 1-1.27-4.4c0-4.57 3.72-8.29 8.3-8.29a8.24 8.24 0 0 1 5.86 2.43 8.24 8.24 0 0 1 2.43 5.87c0 4.57-3.72 8.28-8.3 8.28Z" />
    </svg>
  );
}

/**
 * Floating bubble, every breakpoint. `z-40` keeps it under the consent
 * banner (z-50), which must be able to cover it until there is an answer.
 * `data-placement="bubble"` is what lets a report say the bubble earns the
 * WhatsApp clicks and not the footer.
 */
export function WhatsAppBubble({ aria, message }: { aria: string; message: string }) {
  const href = whatsappUrl(message);
  if (!href) {
    return (
      <PendingData className="fixed right-5 bottom-5 z-40 md:right-8 md:bottom-8">
        WhatsApp number missing
      </PendingData>
    );
  }

  return (
    <div data-placement="bubble">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={aria}
        data-cta="whatsapp"
        className={`band-dark fixed right-5 bottom-5 z-40 grid size-14 place-items-center rounded-full border border-line bg-stock text-ink transition-[translate,scale,background-color,color] duration-200 ease-(--ease-out) hover:-translate-y-0.5 hover:bg-accent hover:text-accent-ink active:scale-95 md:right-8 md:bottom-8`}
      >
        <WhatsAppIcon className="size-7" />
      </a>
    </div>
  );
}

/** WhatsApp button. Shares geometry with <PillButton> through pillClass(). */
export function WhatsAppCta({
  label,
  message,
  tone = "whatsapp",
  service,
  className = "",
}: {
  label: string;
  message: string;
  tone?: "whatsapp" | "whatsapp-outline" | "accent" | "white" | "outline";
  service?: string;
  className?: string;
}) {
  const href = whatsappUrl(message);
  if (!href) {
    return <PendingData className={className}>WhatsApp pending</PendingData>;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-cta="whatsapp"
      {...(service ? { "data-service": service } : {})}
      className={pillClass(tone, className)}
    >
      <span>{label}</span>
      <Arrow glyph={<WhatsAppIcon className="size-4" />} />
    </a>
  );
}
