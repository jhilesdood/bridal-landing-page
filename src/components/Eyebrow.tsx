import { cn } from "../lib/cn";

/**
 * Monospace section marker, e.g. §02 — PACKAGES. Heads every section for a
 * consistent editorial rhythm. `dark` switches the accent for use on the
 * cinematic night bands (amber-glow reads on dark; amber-deep reads on paper).
 */
export function Eyebrow({
  index,
  children,
  dark = false,
  className,
}: {
  index: string;
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em]",
        dark ? "text-amber-glow" : "text-amber-deep",
        className
      )}
    >
      <span className="text-muted">§{index}</span>
      <span
        className={cn("h-px w-8", dark ? "bg-amber-glow/50" : "bg-amber-deep/40")}
      />
      <span>{children}</span>
    </div>
  );
}
