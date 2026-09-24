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

Until the client delivers a logo, `public/logo/` holds neutral placeholders
and `app/icon.svg` is the favicon.
