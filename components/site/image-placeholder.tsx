type Props = {
  label?: string;
  className?: string;
};

/**
 * Fallback when a photo is missing: an espresso plate with a plan-drawing
 * cross and the alt text as an annotation. Reads as intentional, never as a
 * broken image, and never fails the build over a photo not yet delivered.
 */
export function ImagePlaceholder({ label, className = "" }: Props) {
  return (
    <div className={`band-dark grain flex h-full w-full items-center justify-center overflow-hidden bg-stock ${className}`}>
      <svg aria-hidden className="absolute inset-0 h-full w-full text-line" preserveAspectRatio="none" viewBox="0 0 100 100">
        <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.15" vectorEffect="non-scaling-stroke" />
        <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.15" vectorEffect="non-scaling-stroke" />
      </svg>
      {label && <span className="label relative max-w-[16rem] bg-stock px-3 py-1 text-center text-ink-soft">{label}</span>}
    </div>
  );
}
