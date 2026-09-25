import { DISPLAY } from "@/lib/styles";
import { Lines } from "./motion/split";

type Props = {
  /** Small label above the headline. Use sparingly: one every few sections. */
  eyebrow?: string;
  title: string;
  intro?: string;
  className?: string;
  as?: "h1" | "h2";
  titleClassName?: string;
};

/**
 * The head of a content section: one stacked message. The headline rises
 * line by line, the intro fades in under it at reading width.
 */
export function SectionHeader({
  eyebrow,
  title,
  intro,
  className = "",
  as: Tag = "h2",
  titleClassName = "text-[clamp(2.25rem,4.6vw,4.5rem)]",
}: Props) {
  return (
    <div className={`max-w-5xl ${className}`}>
      {eyebrow && (
        <p className="label mb-6 text-ink-soft md:mb-8" data-m="fade">
          {eyebrow}
        </p>
      )}
      <Tag className={`${DISPLAY} ${titleClassName}`} data-m="lines">
        <Lines text={title} />
      </Tag>
      {intro && (
        <p className="mt-8 max-w-[58ch] text-lg text-ink-soft" data-m="fade" data-delay="0.2">
          {intro}
        </p>
      )}
    </div>
  );
}
