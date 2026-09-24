# Brand source files

Drop the client's original logo here (PNG with transparent background, or
SVG) and run:

```sh
npm run brand:build -- brand/logo.png          # multi-colour logo
npm run brand:build -- brand/logo.png --mono   # single-colour logo, recoloured per band
```

It writes `public/logo/*` and `app/icon.png` / `app/apple-icon.png`, and
prints the lockup size to paste into `components/site/logo.tsx`.

Nothing in this folder is served. It is the source of truth for the assets
the script generates, so keep the original here and regenerate rather than
editing the outputs by hand.

## Tarida MC

- `IMG_1421.JPG` is what the client sent: a 640 px JPEG, no vector.
- `logo.svg` / `mark.svg` are a vector rebuild of it (waves fitted to the
  raster, lettering in Montserrat SemiBold / Bold matched to its width and cap
  height). `components/site/logo-paths.ts` holds the same paths split per
  wave and per letter, which is what the site renders inline.
- Assets were generated with `npm run brand:build -- brand/logo.svg --mono`;
  `app/icon.svg` (waves on the logo blue) and `app/apple-icon.png` were drawn
  from `mark.svg` because the full lockup is illegible at favicon size.
- Replace all of it the day the client sends the original vector logo.
