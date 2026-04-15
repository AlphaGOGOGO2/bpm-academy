import { cn } from "@/lib/cn";

type Props = {
  items: string[];
  variant?: "dark" | "paper" | "neon";
  speed?: number;
  className?: string;
};

export function Marquee({
  items,
  variant = "dark",
  speed = 30,
  className,
}: Props) {
  const row = items.join(" ● ");
  const styles = {
    dark: "bg-[#060606] text-white/80 border-y border-white/10",
    paper:
      "bg-[var(--color-paper)] text-[var(--color-paper-ink)] border-y border-black/10",
    neon:
      "bg-[linear-gradient(90deg,#ff0080,#00c8ff)] text-white border-y border-white/20",
  }[variant];

  return (
    <div
      aria-hidden
      className={cn(
        "relative overflow-hidden py-3",
        styles,
        className,
      )}
    >
      <div
        className="flex whitespace-nowrap font-[family-name:var(--font-grunt)] text-[12px] md:text-[14px] tracking-[0.15em] md:tracking-[0.18em]"
        style={{ animation: `marquee ${speed}s linear infinite` }}
      >
        <span className="px-6 md:px-8">{row}</span>
        <span className="px-6 md:px-8">{row}</span>
        <span className="px-6 md:px-8">{row}</span>
        <span className="px-6 md:px-8">{row}</span>
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
