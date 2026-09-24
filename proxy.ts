import { NextResponse, type NextRequest } from "next/server";
import {
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_COOKIE,
  hasLocale,
  type Locale,
} from "@/lib/i18n/config";
import {
  isStaleCanonical,
  splitLocale,
  toCanonical,
  toPublic,
} from "@/lib/i18n/localized-paths";
import { LEGACY_REDIRECTS } from "@/lib/legacy-redirects";

/**
 * Next 16: the middleware is called `proxy`. It does three things, in this
 * order: (1) 308 the old site's URLs, (2) resolve language and slug for
 * prefixed URLs, (3) prefix unprefixed URLs with the negotiated language.
 */

/** Cookie > Accept-Language (own q-value parser: a handful of locales do not justify a dependency). */
function negotiate(request: NextRequest): Locale {
  const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookie && hasLocale(cookie)) return cookie;

  const ranked = (request.headers.get("accept-language") ?? "")
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { lang: tag.toLowerCase().split("-")[0], q: q ? parseFloat(q) : 1 };
    })
    .filter((r) => !Number.isNaN(r.q))
    .sort((a, b) => b.q - a.q);

  const match = ranked.find((r) => hasLocale(r.lang));
  return match ? (match.lang as Locale) : DEFAULT_LOCALE;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const clean = pathname.replace(/\/+$/, "") || "/";

  // 1) Legacy URLs from the previous site → one 308, before anything else,
  //    so a migration is a single hop and never chains 308 + 307.
  const legacy = LEGACY_REDIRECTS[clean];
  if (legacy) {
    const url = request.nextUrl.clone();
    url.pathname = legacy;
    return NextResponse.redirect(url, 308);
  }

  // 2) Already prefixed with a valid locale → translate the slug and go on.
  if (
    LOCALES.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`))
  ) {
    const { locale, rest } = splitLocale(clean);

    // 2a) They asked for the canonical folder from another language (e.g.
    //     /en/servicios). 308 to the public URL: otherwise every page lives at
    //     two URLs and Google splits the signals between them.
    if (isStaleCanonical(locale, rest)) {
      const url = request.nextUrl.clone();
      url.pathname = `/${locale}${toPublic(locale, rest)}`;
      return NextResponse.redirect(url, 308);
    }

    // 2b) Localized public URL → internal rewrite to the real folder.
    //     Rewrite, not redirect: the browser URL does not change.
    const canonical = toCanonical(locale, rest);
    if (canonical !== rest) {
      const url = request.nextUrl.clone();
      url.pathname = `/${locale}${canonical}`;
      return NextResponse.rewrite(url);
    }

    return NextResponse.next();
  }

  // 3) Prefix with the negotiated locale. 307 (temporary) on purpose: the
  //    destination varies per visitor; a 308 would be cached by the browser
  //    and pin the first language seen forever.
  const url = request.nextUrl.clone();
  url.pathname = `/${negotiate(request)}${clean === "/" ? "" : clean}`;
  return NextResponse.redirect(url, 307);
}

export const config = {
  // Excludes _next, api, opengraph-image (no extension) and any path with a
  // dot (favicon.ico, icon.svg, robots.txt, sitemap.xml, /public assets).
  matcher: ["/((?!_next|api|opengraph-image|.*\\..*).*)"],
};
