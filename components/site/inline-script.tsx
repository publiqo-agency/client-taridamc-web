"use client";

type Props = {
  html: string;
};

/**
 * Inline script that only makes sense on the hard load: the browser runs it
 * while parsing the HTML, before first paint.
 *
 * The `type` depends on where it renders. On the server it is executable; on
 * the client it is "text/plain" for two reasons that go together:
 *
 * 1. React never executes a <script> that appears in a client render, so
 *    leaving it executable would add nothing.
 * 2. With an executable type React warns about exactly that. It happened on
 *    language change: the switcher's <Link> navigates client-side across the
 *    [locale] segment, the root layout re-renders and the <head> scripts
 *    triggered the warning.
 *
 * The scripts that use this (reveal, consent defaults) only set an attribute
 * or a default once, so losing the execution on soft navigation is correct.
 * suppressHydrationWarning covers the intentional `type` difference.
 *
 * It has to be a client component: as a server component the `typeof window`
 * check only ever ran on the server, the RSC payload always carried
 * "text/javascript", and the client-side remount still warned.
 */
export function InlineScript({ html }: Props) {
  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
