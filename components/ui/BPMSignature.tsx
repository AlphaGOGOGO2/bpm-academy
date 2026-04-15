"use client";

import { motion } from "framer-motion";
import { heroLetter } from "@/lib/motion";

type LetterConfig = {
  ch: string;
  style: React.CSSProperties;
};

const LETTERS: LetterConfig[] = [
  {
    ch: "B",
    style: {
      background:
        "repeating-radial-gradient(circle at center, #0a0a0a 0 3px, #1a1a1a 3px 5px, #0a0a0a 5px 7px), radial-gradient(circle, #c9a961 0 14%, transparent 15%)",
      backgroundSize: "100% 100%, 100% 100%",
    },
  },
  {
    ch: "P",
    style: {
      background: "linear-gradient(135deg, #ff0080 0%, #b4008e 50%, #00c8ff 100%)",
    },
  },
  {
    ch: "M",
    style: {
      background:
        "repeating-linear-gradient(45deg, #0f3a1a 0 8px, #1e5a2e 8px 12px, #0a2a14 12px 16px)",
    },
  },
];

export function BPMSignature() {
  return (
    <div
      aria-hidden
      className="absolute right-[-40px] md:right-[-30px] top-1/2 -translate-y-1/2 flex gap-0.5 opacity-90 pointer-events-none select-none hidden sm:flex"
    >
      {LETTERS.map((l, i) => (
        <motion.span
          key={l.ch}
          custom={i}
          variants={heroLetter}
          initial="hidden"
          animate="show"
          className="font-[family-name:var(--font-grunt)] text-[140px] md:text-[200px] leading-[0.85] tracking-[-0.08em] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(255,0,128,0.35)]"
          style={{
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            ...l.style,
          }}
        >
          {l.ch}
        </motion.span>
      ))}
    </div>
  );
}
