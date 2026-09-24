import { notFound } from "next/navigation";

/**
 * Any unknown route INSIDE a valid locale. Without this catch-all,
 * /es/whatever would match no page and Next would serve the root 404,
 * skipping the [locale] layout. With it, it lands on this segment's
 * not-found and keeps the site structure.
 */
export default function CatchAll() {
  notFound();
}
