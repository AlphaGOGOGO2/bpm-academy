import { cn } from "@/lib/cn";

/**
 * 바이닐 레코드 그루브 배경 (동심원 링).
 * About 섹션 배경 질감으로 사용.
 */
export function VinylGrooves({
  className,
  color = "rgba(255,255,255,0.04)",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn("absolute pointer-events-none", className)}
      style={{
        backgroundImage: `repeating-radial-gradient(circle at center, transparent 0 5px, ${color} 5px 6px)`,
      }}
    />
  );
}
