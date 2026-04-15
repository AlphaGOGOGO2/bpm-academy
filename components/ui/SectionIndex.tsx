"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function SectionIndex({ num, label }: { num: string; label: string }) {
  return (
    <motion.div
      className="flex items-center gap-3.5 font-mono text-[11px] tracking-[0.3em] text-white/40 mb-8"
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={fadeUp}
    >
      <span className="text-[#ff0080] font-bold">{num}</span>
      <span>{label}</span>
      <motion.div
        className="flex-1 h-px max-w-[200px] origin-left"
        style={{
          background: "linear-gradient(90deg, rgba(255,0,128,0.4), transparent)",
        }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.div>
  );
}
