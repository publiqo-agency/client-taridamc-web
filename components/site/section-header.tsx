import { DISPLAY } from "@/lib/styles";
import { Lines } from "./motion/split";

type Props = {
  /** "(02)" style index; optional. */
  index?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  className?: string;
  as?: "h1" | "h2";
  titleClassName?: string;
};

/**
 * The head of a content section on the 12-column plan: index and eyebrow
 * in the narrow left column, the serif headline rising line by line on the
 * right, the intro fading in after it.
 */
export function SectionHeader({
  index,
  eyebrow,
  title,
  intro,
  className = "",
  as: Tag = "h2",
  titleClassName = "text-[clamp(2.75rem,6.4vw,6.5rem)]",
}: Props) {
  return (
    <div className={`grid grid-cols-12 gap-x-5 gap-y-6 md:gap-x-8 ${className}`}>
      <div className="col-span-12 flex gap-4 md:col-span-3 md:flex-col md:gap-2 md:pt-4" data-m="fade">
        {index && <span className="label tnum text-ink-soft">({index})</span>}
        {eyebrow && <span className="label text-ink">{eyebrow}</span>}
      </div>
      <div className="col-span-12 md:col-span-9">
        <Tag className={`${DISPLAY} ${titleClassName}`} data-m="lines">
          <Lines text={title} />
        </Tag>
        {intro && (
          <p className="mt-8 max-w-xl text-lg text-ink-soft" data-m="fade" data-delay="0.25">
            {intro}
          </p>
        )}
      </div>
    </div>
  );
}
