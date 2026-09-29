"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import { DISPLAY, FRAME } from "@/lib/styles";
import { Logo } from "./logo";
import { LocaleSwitcher } from "./locale-switcher";
import { PillButton } from "./pill-button";
import { LocalTime } from "./local-time";
import { PLACE } from "./place";
import { SCROLL_LOCK_EVENT, SCROLL_UNLOCK_EVENT } from "./motion/motion-root";

export type NavLink = { href: string; label: string };

/** A nav entry; a hub carries the pages it holds, shown in a dropdown. */
export type NavItem = NavLink & { children?: NavLink[] };

type Props = {
  locale: Locale;
  /** Exact paths whose hero sits under a transparent header (lib/routes.ts). */
  overlayPaths: string[];
  /** Inline desktop navigation. */
  nav: NavItem[];
  /** The full-screen menu: every page, home and contact included. */
  menu: NavItem[];
  contactHref: string;
  copy: {
    contact: string;
    menu: string;
    close: string;
    mainNavAria: string;
    /** Aria label of a dropdown's chevron; "{label}" is the entry's label. */
    submenu: string;
    localeAria: string;
    skipToContent: string;
  };
};

const normalize = (path: string) => path.replace(/\/+$/, "") || "/";

/**
 * Site header. Transparent over a hero (`band-dark`: logo and links turn
 * light), bone with a hairline once scrolled. It slips away while reading
 * down and comes back on the first scroll up. The menu is a full-screen
 * espresso curtain with large serif links; the page behind goes `inert`
 * while it is open and Escape closes it.
 *
 * All copy arrives resolved as props: reading the dictionary here would
 * ship every language to the browser.
 */
export function SiteHeader({ locale, overlayPaths, nav, menu, contactHref, copy }: Props) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  // The menu is open FOR a path: navigating anywhere closes it without an effect.
  const [openAt, setOpenAt] = useState<string | null>(null);
  const open = openAt === pathname;
  const setOpen = (value: boolean | ((v: boolean) => boolean)) =>
    setOpenAt((prev) => {
      const next = typeof value === "function" ? value(prev === pathname) : value;
      return next ? pathname : null;
    });
  const toggle = useRef<HTMLButtonElement>(null);
  const firstLink = useRef<HTMLAnchorElement>(null);
  // The open dropdown, also FOR a path: a navigation closes it.
  const [dropdownAt, setDropdownAt] = useState<{ href: string; at: string } | null>(null);
  const dropdown = dropdownAt?.at === pathname ? dropdownAt.href : null;
  const setDropdown = (href: string | null) => setDropdownAt(href ? { href, at: pathname } : null);
  const navRef = useRef<HTMLElement>(null);

  const current = normalize(pathname);
  const overlay = overlayPaths.includes(current);
  const transparent = overlay && !scrolled;

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (Math.abs(y - last) > 6) {
        setHidden(y > last && y > 160);
        last = y;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // An open dropdown closes on Escape (focus back to its chevron) and on a
  // pointer down anywhere outside the nav.
  useEffect(() => {
    if (!dropdown) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      navRef.current?.querySelector<HTMLButtonElement>(`[data-dropdown="${dropdown}"]`)?.focus();
      setDropdownAt(null);
    };
    const onPointer = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setDropdownAt(null);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointer);
    };
  }, [dropdown]);

  const wasOpen = useRef(false);
  useEffect(() => {
    const outside = [document.getElementById("main"), document.querySelector("footer")];
    if (open) {
      wasOpen.current = true;
      outside.forEach((el) => el?.setAttribute("inert", ""));
      window.dispatchEvent(new Event(SCROLL_LOCK_EVENT));
      firstLink.current?.focus({ preventScroll: true });
      const onKey = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          setOpenAt(null);
          toggle.current?.focus();
        }
      };
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }
    if (!wasOpen.current) return;
    wasOpen.current = false;
    outside.forEach((el) => el?.removeAttribute("inert"));
    window.dispatchEvent(new Event(SCROLL_UNLOCK_EVENT));
  }, [open]);

  const dark = transparent || open;

  return (
    <>
      <header
        data-placement="header"
        style={{ viewTransitionName: "site-header" }}
        // Tailwind v4 moves it with `translate`, not `transform`: that is the
        // property to transition. It drops in on a long expo-out and leaves
        // on a shorter, even ease so hiding never feels like a snap.
        className={`fixed inset-x-0 top-0 z-50 transition-[translate] ${
          hidden && !open
            ? "-translate-y-full duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]"
            : "translate-y-0 duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
        } ${dark ? "band-dark text-ink" : "text-ink"}`}
      >
        {/* The frosted fill lives on this layer, not on <header>: a
            backdrop-filter on the header would make it the backdrop root of
            the dropdown, whose own blur would then see nothing of the page. */}
        <span
          aria-hidden
          className={`absolute inset-0 -z-10 transition-colors duration-500 ${
            dark ? "bg-transparent" : "bg-stock/90 backdrop-blur-md"
          }`}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-stock"
        >
          {copy.skipToContent}
        </a>

        <div className={`${FRAME} grid h-20 grid-cols-[1fr_auto] items-center gap-6 lg:grid-cols-[1fr_auto_1fr]`}>
          <Link href={`/${locale}`} className="justify-self-start">
            <Logo className="h-9 md:h-10" />
          </Link>

          <nav ref={navRef} aria-label={copy.mainNavAria} className="hidden items-center gap-9 lg:flex">
            {nav.map((item) => {
              const link = (
                <Link
                  href={item.href}
                  aria-current={current === item.href ? "page" : undefined}
                  className="link-line text-[0.8125rem] tracking-[0.02em] text-ink/80 transition-colors hover:text-ink aria-[current=page]:text-ink"
                >
                  {item.label}
                </Link>
              );
              if (!item.children?.length) return <span key={item.href}>{link}</span>;

              const expanded = dropdown === item.href;
              const panelId = `nav-${item.href.replace(/\W+/g, "-")}`;
              return (
                <div
                  key={item.href}
                  className="relative flex h-20 items-center gap-1.5"
                  onMouseEnter={() => setDropdown(item.href)}
                  onMouseLeave={() => setDropdown(null)}
                >
                  {link}
                  <button
                    type="button"
                    data-dropdown={item.href}
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    aria-label={copy.submenu.replace("{label}", item.label)}
                    onClick={() => setDropdown(expanded ? null : item.href)}
                    className="-m-2 p-2 text-ink/70 transition-colors hover:text-ink"
                  >
                    <Chevron open={expanded} />
                  </button>

                  {/* The entry is as tall as the bar, so the panel hangs
                      exactly from the header's hairline: that line is its top
                      edge (no border-t of its own, or the two read double),
                      and there is no gap for the pointer to fall through. */}
                  <div
                    id={panelId}
                    inert={!expanded}
                    className={`absolute top-full -left-5 transition-[opacity,translate] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      expanded ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"
                    }`}
                  >
                    <ul className="band-light min-w-[17rem] border border-t-0 border-line bg-stock/90 py-2 backdrop-blur-md text-ink shadow-[0_18px_40px_-20px_rgba(6,26,42,0.35)]">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={() => setDropdownAt(null)}
                            aria-current={current === child.href ? "page" : undefined}
                            className="group flex items-center justify-between gap-6 px-5 py-3 text-[0.8125rem] tracking-[0.02em] text-ink/80 transition-colors hover:bg-stock-2 hover:text-ink aria-[current=page]:text-accent"
                          >
                            {child.label}
                            <span aria-hidden className="text-ink-soft transition-transform duration-300 group-hover:translate-x-1">
                              →
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="flex items-center justify-self-end gap-5">
            <span className="label hidden text-ink-soft 2xl:inline">
              {PLACE} · <LocalTime />
            </span>
            <LocaleSwitcher current={locale} aria={copy.localeAria} className="hidden md:flex" />
            <PillButton
              href={contactHref}
              tone={dark ? "white" : "ink"}
              cta="form"
              className="max-md:hidden"
            >
              {copy.contact}
            </PillButton>
            <button
              ref={toggle}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="site-menu"
              className="group flex h-10 items-center gap-3 lg:hidden"
            >
              <span className="label">{open ? copy.close : copy.menu}</span>
              <span aria-hidden className="relative block h-3 w-7">
                <span
                  className={`absolute left-0 h-px w-full bg-current transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                    open ? "top-1.5 rotate-[20deg]" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 h-px bg-current transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                    open ? "top-1.5 w-full -rotate-[20deg]" : "top-3 w-2/3 group-hover:w-full"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        <span
          aria-hidden
          className={`header-rule absolute inset-x-0 bottom-0 block h-px transition-colors duration-500 ${
            dark ? "bg-ink/20" : "bg-line"
          }`}
        />
      </header>

      <div
        id="site-menu"
        aria-hidden={!open}
        inert={!open}
        className={`band-dark grain fixed inset-0 z-40 flex flex-col overflow-y-auto overscroll-contain bg-stock text-ink transition-[clip-path] duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)] lg:hidden ${
          open ? "[clip-path:inset(0_0_0_0)]" : "[clip-path:inset(0_0_100%_0)]"
        }`}
      >
        <nav aria-label={copy.mainNavAria} className={`${FRAME} flex flex-1 flex-col justify-center gap-1 pt-24`}>
          {menu.map((item, i) => (
            <div key={item.href} className="border-b border-line">
              <Link
                ref={i === 0 ? firstLink : undefined}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={current === item.href ? "page" : undefined}
                className="group flex items-baseline gap-5 py-3"
              >
                <span className="label tnum w-6 text-ink-soft transition-colors group-hover:text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mask">
                  <span
                    className={`${DISPLAY} text-[clamp(2.5rem,10vw,5rem)] transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-3 group-aria-[current=page]:text-accent ${
                      open ? "translate-y-0" : "translate-y-[115%]"
                    }`}
                    style={{ transitionDelay: open ? `${0.25 + i * 0.06}s` : "0s" }}
                  >
                    {item.label}
                  </span>
                </span>
              </Link>
              {item.children?.length ? (
                <ul
                  className={`flex flex-wrap gap-x-6 gap-y-2 pb-4 pl-11 transition-opacity duration-700 ${
                    open ? "opacity-100 delay-500" : "opacity-0"
                  }`}
                >
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        onClick={() => setOpen(false)}
                        aria-current={current === child.href ? "page" : undefined}
                        className="link-line text-sm text-ink-2 transition-colors hover:text-ink aria-[current=page]:text-accent"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </nav>

        <div
          className={`${FRAME} flex flex-wrap items-center justify-between gap-4 pb-8 transition-opacity duration-700 ${
            open ? "opacity-100 delay-500" : "opacity-0"
          }`}
        >
          <LocaleSwitcher current={locale} aria={copy.localeAria} />
          <span className="label tnum text-ink-soft">
            <LocalTime />
          </span>
        </div>
      </div>
    </>
  );
}

/** The dropdown's chevron: points down, turns up while the panel is open. */
function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 10 6"
      className={`block h-[6px] w-[10px] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
    >
      <path d="M1 1l4 4 4-4" />
    </svg>
  );
}
