import Link from "next/link";
import { DISPLAY, DISPLAY_SANS, FRAME, ACCENT, SECTION } from "@/lib/styles";
import { Words } from "./motion/split";
import { Arrow } from "./pill-button";

type Props = {
  text: string;
  years: number;
  yearsLabel: string;
  yearsCaption: string;
  signature: string;
  role: string;
  cta?: { href: string; label: string };
};

/**
 * The statement. A large light paragraph that lights up word by word as it
 * scrolls through the viewport (scrubbed, so the reader sets the pace), then
 * the one number the brief gives us, counted once, and the signature.
 */
export function Manifesto({ text, years, yearsLabel, yearsCaption, signature, role, cta }: Props) {
  return (
    <section className={`${SECTION} relative`}>
      <div className={FRAME}>
        <span aria-hidden className="block h-px w-full bg-line" />

        <p
          data-m="words"
          className={`${DISPLAY} mt-12 max-w-[30ch] text-[clamp(1.625rem,3.1vw,3.25rem)] leading-[1.2] md:mt-16 md:ml-[25%]`}
        >
          <Words text={text} />
        </p>

        <div className="mt-20 grid grid-cols-12 items-end gap-x-8 gap-y-12 md:mt-28">
          <div className="col-span-12 md:col-span-6 md:col-start-4">
            <p className="flex items-end gap-4" data-m="fade">
              <span
                data-m="count"
                data-to={years}
                data-pad="2"
                className={`${DISPLAY_SANS} tnum text-[clamp(7rem,17vw,17rem)] leading-[0.78]`}
              >
                {years}
              </span>
              <span className="pb-[0.4em]">
                <span className={`${ACCENT} block text-[clamp(2rem,3.4vw,3.5rem)] leading-none`}>{yearsLabel}</span>
                <span className="label mt-3 block text-ink-soft">{yearsCaption}</span>
              </span>
            </p>
          </div>
          <div className="col-span-12 md:col-span-3" data-m="fade" data-delay="0.2">
            <p className={`${ACCENT} text-3xl`}>{signature}</p>
            <p className="label mt-2 text-ink-soft">{role}</p>
            {cta && (
              <Link href={cta.href} className="group mt-8 inline-flex items-center gap-3 text-sm font-medium">
                <span className="link-line">{cta.label}</span>
                <Arrow />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
