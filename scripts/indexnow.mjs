#!/usr/bin/env node
/**
 * Tells the IndexNow engines (Bing, Yandex, Seznam, Naver…) that URLs are
 * new or changed. Google does not take part: for Google the sitemap rules.
 *
 *   node scripts/indexnow.mjs                 # every URL in the sitemap
 *   node scripts/indexnow.mjs /es/contacto …  # only those (paths or URLs)
 *
 * Needs NEXT_PUBLIC_SITE_URL and INDEXNOW_KEY in the environment (or
 * .env.local). The key file public/<KEY>.txt must already be deployed to
 * production: the endpoint downloads it to verify the submission is ours.
 * So this runs AFTER the production deploy, never before. The script checks
 * and aborts if the key does not answer.
 *
 * To set up: generate a key (`openssl rand -hex 16`), write it to
 * public/<KEY>.txt, add INDEXNOW_KEY to .env.local, deploy.
 */
import { readFileSync, existsSync } from "node:fs";

function loadDotEnv(path) {
  if (!existsSync(path)) return;
  for (const line of readFileSync(path, "utf8").split("\n")) {
    const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*"?([^"\n]*)"?\s*$/);
    if (match && !process.env[match[1]]) process.env[match[1]] = match[2];
  }
}
loadDotEnv(".env.local");

const SITE = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "");
const KEY = process.env.INDEXNOW_KEY;
if (!SITE || !KEY) {
  console.error("NEXT_PUBLIC_SITE_URL and INDEXNOW_KEY are required.");
  process.exit(1);
}
const KEY_LOCATION = `${SITE}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

async function sitemapUrls() {
  const res = await fetch(`${SITE}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap.xml answered ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

const toUrl = (arg) => new URL(arg, SITE).toString();

const keyRes = await fetch(KEY_LOCATION);
const keyBody = keyRes.ok ? (await keyRes.text()).trim() : "";
if (keyBody !== KEY) {
  console.error(
    `The key is not published at ${KEY_LOCATION} (HTTP ${keyRes.status}). Deploy production before notifying IndexNow.`,
  );
  process.exit(1);
}

const args = process.argv.slice(2);
const urlList = [...new Set(args.length ? args.map(toUrl) : await sitemapUrls())];
const host = new URL(SITE).host;
const foreign = urlList.filter((u) => new URL(u).host !== host);
if (foreign.length) {
  console.error(`URLs outside ${host}:\n  ${foreign.join("\n  ")}`);
  process.exit(1);
}

const res = await fetch(ENDPOINT, {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key: KEY, keyLocation: KEY_LOCATION, urlList }),
});

// 200 = received, 202 = received and the key is validated later.
if (res.status === 200 || res.status === 202) {
  console.log(`IndexNow ${res.status}: ${urlList.length} URLs submitted.`);
} else {
  console.error(`IndexNow ${res.status}: ${await res.text()}`);
  process.exit(1);
}
