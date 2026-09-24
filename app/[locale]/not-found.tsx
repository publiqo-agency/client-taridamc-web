import Link from "next/link";
import { FRAME, DISPLAY, DISPLAY_QUIET } from "@/lib/styles";
import { LOCALES, LOCALE_LABELS } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

/**
 * 404. It gets no `params` (Next does not pass them to not-found), so it does
 * not know the language: every language is shown. Guessing here would mean
 * reading headers and making the page dynamic.
 *
 * `robots` explicit: the root layout emits index,follow and without this
 * override the 404 would ship contradictory directives.
 */
export const metadata = {
  robots: { index: false, follow: false },
};

export default async function NotFound() {
  const dicts = await Promise.all(LOCALES.map((l) => getDictionary(l)));

  return (
    <div className={`${FRAME} flex min-h-svh flex-col justify-center py-24`}>
      <p className={`${DISPLAY} text-[clamp(6rem,24vw,18rem)] leading-[0.8] text-line`}>404</p>

      <ul className="mt-12 grid gap-10 border-t border-line pt-10 sm:grid-cols-2">
        {LOCALES.map((locale, i) => (
          <li key={locale} lang={locale}>
            <p className="label text-ink-soft">{LOCALE_LABELS[locale]}</p>
            <h1 className={`${DISPLAY_QUIET} mt-3 text-3xl`}>{dicts[i].common.notFound.title}</h1>
            <p className="mt-2 max-w-xl text-ink-soft">{dicts[i].common.notFound.body}</p>
            <Link href={`/${locale}`} className="link-line mt-4 inline-block text-sm font-medium">
              {dicts[i].common.cta.back}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
