import fs from "node:fs";
import path from "node:path";

/**
 * true if the asset exists under /public. Lets <Figure> fall back to
 * <ImagePlaceholder> instead of breaking the build over a photo the client
 * has not delivered yet. Server Components only.
 */
export const hasPublicImage = (src: string) =>
  fs.existsSync(path.join(process.cwd(), "public", src));
