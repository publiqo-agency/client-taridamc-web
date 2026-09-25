type Props = {
  label?: string;
  className?: string;
};

/**
 * Fallback when a photo is missing: a plain deep-sea plate with the alt
 * text as a quiet annotation. Reads as intentional, never as a
 * broken image, and never fails the build over a photo not yet delivered.
 */
export function ImagePlaceholder({ label, className = "" }: Props) {
  return (
    <div className={`band-dark grain flex h-full w-full items-center justify-center overflow-hidden bg-stock ${className}`}>
      {label && <span className="label relative max-w-[16rem] px-3 text-center text-ink-soft">{label}</span>}
    </div>
  );
}
