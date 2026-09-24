import { IS_INDEXABLE } from "./seo";

/**
 * "Not final yet" notices.
 *
 * The repo already avoids inventing anything: no phone → no `tel:` link, no
 * photo → placeholder. The problem this solves is the OPPOSITE one: what is
 * missing disappears silently, which for whoever reviews the site is
 * indistinguishable from never having been planned.
 *
 * The notices are scaffolding, not product:
 *
 * - Only while the site is not indexable. They hang from the same switch
 *   that turns indexing and analytics off: without NEXT_PUBLIC_SITE_URL this
 *   is a preview and the notices show. In production they do not exist, so a
 *   forgotten notice can never reach a visitor.
 * - Written in the team's language and OUTSIDE the dictionary. Nobody outside
 *   the team reads them, and putting them in dictionaries/ would drag
 *   scaffolding into the copy contract.
 */
export const SHOW_PENDING = !IS_INDEXABLE;
