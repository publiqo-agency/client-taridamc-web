import { z } from "zod";
import { LOCALES } from "@/lib/i18n/config";
import { SERVICE_IDS } from "@/lib/services";

/**
 * Contact form validation. The same schema validates on the client (per-field
 * messages) and in the Server Action (the only one that actually decides):
 * a form is never the trust boundary.
 *
 * Every extra field lowers the conversion of a form that competes with a
 * WhatsApp button, so the burden of proof is on whoever wants to add one.
 */

/** Options of the service <select>: the services + a general enquiry. */
export const CONTACT_SERVICES = [...SERVICE_IDS, "other"] as const;
export type ContactService = (typeof CONTACT_SERVICES)[number];

/** A human does not fill the form in less than this. */
const MIN_FILL_MS = 2000;
/** Any real `ts` (the client's Date.now()) is far above this. */
const TS_FLOOR_MS = 1_700_000_000_000;

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.email().max(254),
  /** Optional: many visitors prefer email. */
  phone: z.string().trim().max(24).optional().or(z.literal("")),
  service: z.enum(CONTACT_SERVICES),
  message: z.string().trim().min(10).max(3000),
  /** GDPR checkbox. Literal "on": an unchecked box does not travel. */
  consent: z.literal("on"),
  /** Language the visitor browsed in: tells the client which language to reply in. */
  locale: z.enum(LOCALES),
  /** Honeypot: humans never see it; if it arrives filled, it is a bot. */
  website: z.literal(""),
  /**
   * Timing trap: the client stamps Date.now() when the form mounts. A
   * submission that arrives before MIN_FILL_MS (or without the field) is
   * automated.
   */
  ts: z
    .string()
    .transform((value) => Number(value))
    .refine(
      (value) =>
        Number.isFinite(value) &&
        value > TS_FLOOR_MS &&
        Date.now() - value >= MIN_FILL_MS,
    ),
});

export type ContactInput = z.infer<typeof contactSchema>;

/**
 * State the Server Action returns to useActionState.
 *
 * `fields` are field NAMES, not messages: the error texts live in the
 * dictionary of the language being viewed, and the server does not know
 * which language anyone browses in.
 */
export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; fields?: string[] };
