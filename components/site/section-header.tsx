import { DISPLAY } from "@/lib/styles";
import { Lines } from "./motion/split";

type Props = {
  title: string;
  intro?: string;
  className?: string;
  as?: "h1" | "h2";
  titleClassName?: string;
  /** "offset" sits in the right nine columns; "start" runs from the left edge. */
  align?: "offset" | "start";
};

/**
 * The head of a content section on the 12-column plan: the serif headline
 * rising line by line in the right nine columns, the intro fading in after
 * it. No index or eyebrow above it: the headline carries the section on its
 * own (docs/SKELETON.md, design rules). `align="start"` drops the offset and
 * sets the head flush with the left edge of the frame.
 */
export function SectionHeader({
  title,
  intro,
  className = "",
  as: Tag = "h2",
  titleClassName = "text-[clamp(2.75rem,6.4vw,6.5rem)]",
  align = "offset",
}: Props) {
  return (
    <div className={`grid grid-cols-12 gap-x-5 gap-y-6 md:gap-x-8 ${className}`}>
      <div className={align === "start" ? "col-span-12 md:col-span-9" : "col-span-12 md:col-span-9 md:col-start-4"}>
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
