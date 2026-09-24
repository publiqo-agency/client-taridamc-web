#!/usr/bin/env node
/**
 * Generates the brand assets the site expects from ONE source logo with a
 * transparent background (PNG or SVG), placed in brand/.
 *
 *   node scripts/build-brand-assets.mjs brand/logo.png [--mono]
 *
 * Writes:
 *   public/logo/logo-light.png  logo for light surfaces (the header when solid)
 *   public/logo/logo-dark.png   logo for dark surfaces (transparent header, footer)
 *   public/logo/logo-192.png    manifest icon
 *   public/logo/logo-512.png    manifest icon + Organization.logo (≥112px raster)
 *   app/icon.png                favicon
 *   app/apple-icon.png          iOS home screen
 *
 * With `--mono` the light/dark variants are recoloured from the alpha mask
 * (for single-colour logos: the shapes stay, the fill becomes INK_ON_LIGHT /
 * INK_ON_DARK from app/globals.css). Without it, the source is used as-is
 * for both — right for multi-colour logos that already work on both bands.
 *
 * It prints the native size of the lockup: paste it into LOCKUP in
 * components/site/logo.tsx. The logo is never redrawn or vectorised here.
 */
import { mkdirSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const args = process.argv.slice(2);
const mono = args.includes("--mono");
const SRC = args.find((a) => !a.startsWith("--"));
if (!SRC) {
  console.error("Usage: node scripts/build-brand-assets.mjs <brand/logo.png|svg> [--mono]");
  process.exit(1);
}

/** Output colours: the tokens in app/globals.css. Keep in sync. */
const INK_ON_LIGHT = "#07588c"; // :root --ink
const INK_ON_DARK = "#f3f1ea"; // .band-dark --ink
const ICON_BG = "#07588c"; // icon tile background

const OUT_LOGO = "public/logo";
mkdirSync(OUT_LOGO, { recursive: true });

const source = sharp(SRC, { density: 300 });
const meta = await source.metadata();
if (!meta.hasAlpha && meta.format !== "svg") {
  console.error("The source needs a transparent background (PNG with alpha, or SVG).");
  process.exit(1);
}

/** Fills the alpha mask of the source with a flat colour. */
async function recolour(colour) {
  const png = await source.clone().png().toBuffer();
  const { width, height } = await sharp(png).metadata();
  return sharp({ create: { width, height, channels: 4, background: colour } })
    .composite([{ input: png, blend: "dest-in" }])
    .png()
    .toBuffer();
}

const light = mono ? await recolour(INK_ON_LIGHT) : await source.clone().png().toBuffer();
const dark = mono ? await recolour(INK_ON_DARK) : await source.clone().png().toBuffer();

await sharp(light).trim().toFile(path.join(OUT_LOGO, "logo-light.png"));
await sharp(dark).trim().toFile(path.join(OUT_LOGO, "logo-dark.png"));

/** Square icon: the logo centred on a tile, with padding. */
async function icon(size, file) {
  const inner = Math.round(size * 0.72);
  const mark = await sharp(dark).trim().resize(inner, inner, { fit: "inside" }).png().toBuffer();
  await sharp({ create: { width: size, height: size, channels: 4, background: ICON_BG } })
    .composite([{ input: mark, gravity: "centre" }])
    .png()
    .toFile(file);
}

await icon(192, path.join(OUT_LOGO, "logo-192.png"));
await icon(512, path.join(OUT_LOGO, "logo-512.png"));
await icon(64, "app/icon.png");
await icon(180, "app/apple-icon.png");

const lockup = await sharp(path.join(OUT_LOGO, "logo-light.png")).metadata();
console.log(`Done. Lockup native size: { width: ${lockup.width}, height: ${lockup.height} } → components/site/logo.tsx`);
