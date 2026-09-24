import Image from "next/image";
import { ORG } from "@/lib/seo";

/**
 * The client's logo, in two variants rendered AT THE SAME TIME: the band
 * decides which one shows, not a prop. The header is transparent over a dark
 * hero and solid over the page background once scrolled, so both the
 * light-ink and the dark-ink version are needed; with `[.band-dark_&]:` the
 * component does not need to know where it is. `opacity`, not `display`, so
 * it crossfades with the header's colour transition.
 *
 * Both PNGs come from scripts/build-brand-assets.mjs. Update LOCKUP with the
 * native size the script prints.
 */

/** Native size of public/logo/logo-*.png. Printed by the build script. */
const LOCKUP = { width: 1200, height: 400 };

/** Without `sizes`, next/image would serve the srcset from the native width. */
const SIZES = "200px";

const LAYER = "h-full w-auto transition-opacity duration-300";

type Props = {
  /** Height comes from here: the images are `h-full w-auto`. */
  className?: string;
  /** Header only, which is above the fold. */
  priority?: boolean;
};

export function Logo({ className = "", priority = false }: Props) {
  return (
    <span className={`relative inline-block ${className}`}>
      {/* Both images are decorative: the accessible name is said once. */}
      <span className="sr-only">{ORG.name}</span>
      <Image
        {...LOCKUP}
        src="/logo/logo-light.png"
        alt=""
        sizes={SIZES}
        priority={priority}
        className={`${LAYER} [.band-dark_&]:opacity-0`}
      />
      <Image
        {...LOCKUP}
        src="/logo/logo-dark.png"
        alt=""
        sizes={SIZES}
        priority={priority}
        className={`${LAYER} absolute top-0 left-0 opacity-0 [.band-dark_&]:opacity-100`}
      />
    </span>
  );
}
