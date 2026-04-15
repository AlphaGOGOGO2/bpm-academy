import { cn } from "@/lib/cn";
import type { ReactNode, JSX } from "react";

type HeadingLevel = "h1" | "h2" | "h3";

export function GrungeHeading({
  children,
  className,
  as: As = "h2" as HeadingLevel,
}: {
  children: ReactNode;
  className?: string;
  as?: HeadingLevel;
}) {
  const Tag = As as keyof JSX.IntrinsicElements;
  return (
    <Tag
      className={cn(
        "font-[family-name:var(--font-grunt)] leading-[0.95] tracking-[-0.02em]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function NeonGradientText({ children }: { children: ReactNode }) {
  return (
    <span className="bg-[linear-gradient(90deg,#ff0080,#00c8ff)] bg-clip-text text-transparent">
      {children}
    </span>
  );
}
