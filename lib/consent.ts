/**
 * Cookie consent. One question, two answers: accept (analytics + ads storage
 * granted together) or reject (everything stays denied, Google's tags send a
 * cookieless ping only). The answer lives in localStorage — same reasoning as
 * the theme: the site is static and a cookie read on the server would make it
 * dynamic. Under LSSI-CE 22.2 localStorage is storage on terminal equipment
 * exactly like a cookie, so the privacy policy names it.
 *
 * The stored value carries a schema version: if what is being asked ever
 * changes, an old answer is refused and the banner asks again, rather than
 * silently reinterpreting a "yes" given to a different question.
 */

export const CONSENT_STORAGE_KEY = "consent";
export const CONSENT_SCHEMA_VERSION = 1;

export type ConsentChoice = "accepted" | "rejected";

type StoredConsent = {
  v: number;
  choice: ConsentChoice;
  /** ISO timestamp of the answer, for the "when did they say so" question. */
  at: string;
};

/** The stored answer for the current schema version, or null if none. */
export function readConsent(): ConsentChoice | null {
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<StoredConsent>;
    if (parsed.v !== CONSENT_SCHEMA_VERSION) return null;
    if (parsed.choice === "accepted" || parsed.choice === "rejected") {
      return parsed.choice;
    }
  } catch {
    /* localStorage blocked or corrupt value: ask again */
  }
  return null;
}

export function writeConsent(choice: ConsentChoice) {
  const value: StoredConsent = {
    v: CONSENT_SCHEMA_VERSION,
    choice,
    at: new Date().toISOString(),
  };
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(value));
  } catch {
    /* localStorage blocked: the answer holds for this page load only */
  }
}

/**
 * Tells the container what the visitor decided. Must run on every document
 * load for a stored answer too (the consent default is re-declared by each
 * page load, and a returning visitor who accepted would otherwise be measured
 * as consentless). `gtag` is defined by GTM_INIT_SCRIPT; without the container
 * it is a no-op.
 */
export function applyConsent(choice: ConsentChoice) {
  const granted = choice === "accepted" ? "granted" : "denied";
  window.gtag?.("consent", "update", {
    ad_storage: granted,
    ad_user_data: granted,
    ad_personalization: granted,
    analytics_storage: granted,
  });
}

/*
 * Banner visibility as an external store, so the banner and the footer link
 * that reopens it (a server component tree away) share one bit of state
 * without lifting it into React, and so the banner can read localStorage
 * without setState-in-effect. `null` means "not asked localStorage yet".
 */
let bannerOpen: boolean | null = null;
const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((fn) => fn());
}

export function subscribeBanner(onChange: () => void) {
  listeners.add(onChange);
  return () => {
    listeners.delete(onChange);
  };
}

/** Client snapshot: open when there is no valid stored answer. */
export function getBannerOpen(): boolean {
  if (bannerOpen === null) bannerOpen = readConsent() === null;
  return bannerOpen;
}

/** Server snapshot: the static HTML never carries the banner. */
export function getBannerOpenServer(): boolean {
  return false;
}

export function reopenConsent() {
  bannerOpen = true;
  notify();
}

export function answerConsent(choice: ConsentChoice) {
  writeConsent(choice);
  applyConsent(choice);
  bannerOpen = false;
  notify();
}
