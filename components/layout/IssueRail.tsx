"use client";

import { motion, useScroll } from "framer-motion";

/**
 * 좌측 고정 수직 레일 — 매거진 마진 같은 역할.
 * 이슈 번호, 세로 라벨, 스크롤 진행도.
 */
export function IssueRail() {
  const { scrollYProgress } = useScroll();
  return (
    <div
      aria-hidden
      className="fixed left-0 top-0 bottom-0 z-40 w-12 hidden md:flex flex-col items-center justify-between py-8 pointer-events-none"
    >
      <div className="font-[family-name:var(--font-plex-mono)] text-[10px] tracking-[0.25em] text-white/40 writing-vertical">
        № 001
      </div>

      <div
        className="font-[family-name:var(--font-plex-mono)] text-[10px] tracking-[0.4em] text-white/60"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        BPM · HIP-HOP DJ ACADEMY · DAEJEON
      </div>

      <div className="relative w-px h-32 bg-white/10">
        <motion.div
          style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
          className="w-full h-full bg-[linear-gradient(180deg,#ff0080,#00c8ff)]"
        />
      </div>
    </div>
  );
}
