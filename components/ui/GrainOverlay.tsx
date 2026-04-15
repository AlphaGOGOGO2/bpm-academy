import { cn } from "@/lib/cn";

/**
 * 상시 노출 그레인 레이어. 페이지 전체 또는 섹션 단위에 얹어서 종이 질감을 만든다.
 * pointer-events: none.
 */
export function GrainOverlay({
  opacity = 0.055,
  blendMode = "overlay",
  fixed = false,
  className,
}: {
  opacity?: number;
  blendMode?: "overlay" | "soft-light" | "multiply" | "screen";
  fixed?: boolean;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        fixed ? "fixed" : "absolute",
        "inset-0 pointer-events-none z-[1]",
        className,
      )}
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 280 280' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.95 0 0 0 0 0.95 0 0 0 0 0.95 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        opacity,
        mixBlendMode: blendMode,
      }}
    />
  );
}
