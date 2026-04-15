"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

const NAV = [
  { href: "#about", label: "ABOUT" },
  { href: "#class", label: "CLASS" },
  { href: "#instructor", label: "INSTRUCTOR" },
  { href: "#visit", label: "VISIT" },
];

/**
 * Hero 이후에만 나타나는 상단 플로팅 헤더.
 * Hero 안엔 Masthead가 있어서 이중 노출되지 않도록.
 */
export function FloatingHeader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Hero 높이를 대략 지나면 나타남
      setVisible(window.scrollY > window.innerHeight - 80);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        visible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none",
        "backdrop-blur-md bg-black/70 border-b border-white/10",
      )}
    >
      <div className="flex items-center justify-between px-6 md:px-14 py-3.5 font-[family-name:var(--font-plex-mono)]">
        <a href="#top" className="inline-flex items-center">
          <Image
            src="/images/logo/bpm-plain.png"
            alt="BPM"
            width={200}
            height={80}
            className="h-10 sm:h-12 w-auto object-contain invert brightness-200"
          />
        </a>
        <nav className="hidden md:flex gap-7 text-[10px] tracking-[0.3em] text-white/70">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="hover:text-white transition"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="tel:01046374987"
          className="inline-flex items-center gap-2 font-bold text-[12px] tracking-[0.18em] text-white hover:text-[color:var(--color-neon-pink)] transition"
        >
          <span aria-hidden className="text-[color:var(--color-neon-pink)]">☎</span>
          010-4637-4987
        </a>
      </div>
    </header>
  );
}
