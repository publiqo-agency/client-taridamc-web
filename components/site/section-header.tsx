import { DISPLAY } from "@/lib/styles";

type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
  className?: string;
};

/** Eyebrow + headline + intro. The head of every content section. */
export function SectionHeader({ eyebrow, title, intro, className = "" }: Props) {
  return (
    <div className={`max-w-2xl ${className}`}>
      {eyebrow && <p className="label text-ink-soft">{eyebrow}</p>}
      <h2 className={`${DISPLAY} mt-3 text-3xl md:text-4xl`}>{title}</h2>
      {intro && <p className="mt-4 text-lg text-ink-soft">{intro}</p>}
    </div>
  );
}
