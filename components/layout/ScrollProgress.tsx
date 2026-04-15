"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <div
      aria-hidden
      className="fixed right-4 top-1/2 -translate-y-1/2 z-40 w-px h-36 bg-white/10 hidden md:block"
    >
      <motion.div
        style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
        className="w-full h-full bg-[linear-gradient(180deg,#ff0080,#00c8ff)]"
      />
    </div>
  );
}
