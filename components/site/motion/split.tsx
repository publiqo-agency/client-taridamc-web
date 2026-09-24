import { Fragment } from "react";
import { ACCENT } from "@/lib/styles";

/**
 * Server-side text splitting for the motion engine. The markup is split
 * where it is written, not measured at runtime: no layout shift, no
 * dependency on fonts having loaded, and screen readers read the text as
 * one sentence.
 *
 * Copy conventions (dictionaries): "\n" is a line break the design relies
 * on, and *asterisks* mark the accent phrase (thin sans, brand blue).
 */

/** "*a* b" → [{text:"a", em:true}, {text:" b", em:false}] */
function segments(text: string) {
  return text
    .split(/(\*[^*]+\*)/g)
    .filter(Boolean)
    .map((part) =>
      part.startsWith("*") && part.endsWith("*")
        ? { text: part.slice(1, -1), em: true }
        : { text: part, em: false },
    );
}

/** Accent phrases wear the logo's blue (a lighter sea blue inside dark bands). */
const EM = "text-accent";

/** Renders *accent* phrases without any splitting. */
export function Rich({ text, emClassName = EM }: { text: string; emClassName?: string }) {
  return (
    <>
      {segments(text).map((s, i) =>
        s.em ? (
          <em key={i} className={`${ACCENT} ${emClassName}`}>
            {s.text}
          </em>
        ) : (
          <Fragment key={i}>{s.text}</Fragment>
        ),
      )}
    </>
  );
}

/**
 * One mask per authored line. The parent carries `data-m="lines"`; the
 * engine lifts every `.mask > span` in order.
 */
export function Lines({
  text,
  lineClassName = "",
  emClassName = EM,
}: {
  text: string;
  lineClassName?: string;
  emClassName?: string;
}) {
  return (
    <>
      {text.split("\n").map((line, i) => (
        <span key={i} className={`mask ${lineClassName}`}>
          <span>
            <Rich text={line} emClassName={emClassName} />
          </span>
        </span>
      ))}
    </>
  );
}

/**
 * Letter by letter, for the two wordmarks only. The visual letters are
 * aria-hidden and the word is said once.
 */
export function Chars({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        {Array.from(text).map((char, i) => (
          <span key={i} className="mask-inline">
            <span>{char === " " ? " " : char}</span>
          </span>
        ))}
      </span>
    </span>
  );
}

/**
 * Word spans for the scroll-lit manifesto. Words stay in the accessibility
 * tree (they ARE the paragraph); only their opacity is animated.
 */
export function Words({ text, emClassName = EM }: { text: string; emClassName?: string }) {
  return (
    <>
      {segments(text).flatMap((s, si) =>
        s.text
          .split(/(\s+)/)
          .filter(Boolean)
          .map((word, wi) =>
            /^\s+$/.test(word) ? (
              <Fragment key={`${si}-${wi}`}>{word}</Fragment>
            ) : (
              <span key={`${si}-${wi}`} className={s.em ? `w ${ACCENT} ${emClassName}` : "w"}>
                {word}
              </span>
            ),
          ),
      )}
    </>
  );
}

/** Plain text of a copy string: strips the *accent* markers and line breaks. */
export const plain = (text: string) => text.replace(/\*/g, "").replace(/\n/g, " ");
