import { cn } from "@/lib/cn";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "ghost" | "gradient";
  children: ReactNode;
};

export function NeonButton({
  variant = "primary",
  className,
  children,
  ...rest
}: Props) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-5 py-3 text-[13px] font-extrabold tracking-[0.08em] transition-all";
  const styles = {
    primary: "bg-white text-black hover:bg-white/90 hover:scale-[1.02]",
    ghost:
      "border border-white/30 text-white hover:border-white/70 hover:bg-white/5",
    gradient:
      "text-white bg-[linear-gradient(90deg,#ff0080,#00c8ff)] hover:brightness-125",
  }[variant];
  return (
    <a className={cn(base, styles, className)} {...rest}>
      {children}
    </a>
  );
}
