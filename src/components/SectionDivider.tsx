import type { HTMLAttributes } from "react";

/**
 * Soft editorial divider: a hairline rule with a small terracotta glyph centered.
 * Use between major sections to add visual rhythm without harsh breaks.
 */
export function SectionDivider({
  className = "",
  glyph = "❦",
  ...rest
}: HTMLAttributes<HTMLDivElement> & { glyph?: string }) {
  return (
    <div
      role="presentation"
      aria-hidden="true"
      className={`mx-auto flex max-w-3xl items-center gap-4 px-6 ${className}`}
      {...rest}
    >
      <span className="h-px flex-1 bg-taupe/40" />
      <span className="text-clay/80 text-base font-serif leading-none">{glyph}</span>
      <span className="h-px flex-1 bg-taupe/40" />
    </div>
  );
}

export default SectionDivider;