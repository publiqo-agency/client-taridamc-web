import { ORG } from "@/lib/seo";

/**
 * Typographic wordmark while the client has no logo (docs/PENDING.md): the
 * name in the display serif, "MC" as a small-caps annotation. It inherits
 * the text colour, so the band it sits in decides light or dark. When the
 * real logo arrives, `npm run brand:build` writes public/logo/* and this
 * component goes back to rendering those files.
 */
export function Logo({ className = "" }: { className?: string; priority?: boolean }) {
  const [first, ...rest] = ORG.name.split(" ");
  return (
    <span className={`inline-flex items-baseline gap-1.5 leading-none ${className}`}>
      <span className="font-display text-[1.75rem] tracking-[-0.01em]">{first}</span>
      {rest.length > 0 && <span className="label">{rest.join(" ")}</span>}
    </span>
  );
}
