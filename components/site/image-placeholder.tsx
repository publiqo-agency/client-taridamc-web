type Props = {
  label?: string;
  className?: string;
};

/**
 * Fallback when an asset is missing. A gap that reads as intentional beats a
 * broken image, and both beat a build that fails over a photo the client has
 * not delivered yet.
 */
export function ImagePlaceholder({ label, className = "" }: Props) {
  return (
    <div
      className={`band-dark relative flex h-full w-full items-center justify-center overflow-hidden bg-stock ${className}`}
    >
      <div
        aria-hidden
        className="absolute -top-8 -right-8 size-40 rounded-full border-[10px] border-accent/20"
      />
      <div
        aria-hidden
        className="absolute -bottom-14 -left-14 size-60 rounded-full border-[14px] border-accent/10"
      />
      {label && (
        <span className="label relative px-6 text-center text-ink/50">{label}</span>
      )}
    </div>
  );
}
