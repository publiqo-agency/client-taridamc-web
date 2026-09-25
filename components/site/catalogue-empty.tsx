import { DISPLAY } from "@/lib/styles";
import { Rich } from "./motion/split";

/**
 * Production catalogue without listings: an honest, sober block that turns
 * the gap into the action ("ask for availability") instead of an empty grid.
 */
export function CatalogueEmpty({
  title,
  body,
  children,
}: {
  title: string;
  body: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-y border-line py-16 md:py-24">
      <p className={`${DISPLAY} max-w-4xl text-[clamp(2rem,3.8vw,3.75rem)]`} data-m="fade">
        <Rich text={title} />
      </p>
      <div className="mt-8 max-w-[58ch]" data-m="fade" data-delay="0.15">
        <p className="text-lg text-ink-soft">{body}</p>
        <div className="mt-8 flex flex-wrap gap-3">{children}</div>
      </div>
    </div>
  );
}
