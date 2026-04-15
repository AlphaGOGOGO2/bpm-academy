"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { NeonButton } from "@/components/ui/NeonButton";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { EASE } from "@/lib/motion";

/**
 * Hero — "Masthead" edition.
 *
 * 구성 3단:
 * 1) Top masthead (magazine cover top strip)
 * 2) Main stage — 풀블리드 BPM 레터 + KNDRX 포트레이트 오버랩 + 편집적 카피
 * 3) Bottom ledger — 주소/전화/지역 (매거진 커버 하단 편집 정보)
 */

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-[#060606] text-white"
    >
      {/* atmospheric gradients */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 12% 18%, rgba(255,0,128,0.22), transparent 40%), radial-gradient(circle at 88% 82%, rgba(0,200,255,0.20), transparent 50%), radial-gradient(circle at 50% 60%, rgba(120,40,180,0.10), transparent 65%)",
        }}
      />
      {/* grid */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <GrainOverlay opacity={0.06} blendMode="soft-light" />

      {/* ===== MASTHEAD (top) — logo + nav + call CTA ===== */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="relative z-10 flex items-center justify-between gap-6 px-6 md:px-14 pt-6 md:pt-8 pb-3 md:pb-4 border-b border-white/10"
      >
        <a href="#top" aria-label="BPM 뮤직 스튜디오 홈">
          <Image
            src="/images/logo/bpm-plain.png"
            alt="BPM 뮤직 스튜디오"
            width={280}
            height={112}
            priority
            className="h-14 md:h-20 w-auto object-contain invert brightness-200"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8 font-[family-name:var(--font-plex-mono)] text-[11px] tracking-[0.28em] text-white/70">
          <a href="#about" className="hover:text-white transition">ABOUT</a>
          <a href="#class" className="hover:text-white transition">CLASS</a>
          <a href="#instructor" className="hover:text-white transition">INSTRUCTOR</a>
          <a href="#visit" className="hover:text-white transition">VISIT</a>
        </nav>

        <a
          href="tel:01046374987"
          className="inline-flex items-center gap-2 font-[family-name:var(--font-plex-mono)] font-bold text-[12px] md:text-[13px] tracking-[0.18em] text-white hover:text-[color:var(--color-neon-pink)] transition"
        >
          <span aria-hidden className="text-[color:var(--color-neon-pink)]">☎</span>
          010-4637-4987
        </a>
      </motion.div>

      {/* ===== MAIN STAGE ===== */}
      <div className="relative z-10 min-h-[calc(100vh-140px)] md:min-h-[calc(100vh-180px)] flex items-center px-5 sm:px-6 md:px-14 py-8 sm:py-10 md:py-16">
        {/* giant BPM letters — full bleed background */}
        <GiantBPM />

        {/* vertical "HIP-HOP DJ ACADEMY" rail running text (hidden on mobile — IssueRail handles it) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          aria-hidden
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 hidden lg:block font-[family-name:var(--font-plex-mono)] text-[10px] tracking-[0.4em] text-white/40"
          style={{ writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}
        >
          SIDE A · BPM/001 · 33⅓ RPM
        </motion.div>

        {/* left-side darkening for text legibility over vinyl backdrop */}
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 right-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(6,6,6,0.95) 0%, rgba(6,6,6,0.82) 40%, rgba(6,6,6,0.35) 70%, transparent 100%)",
          }}
        />

        {/* content grid */}
        <div className="relative z-[2] grid md:grid-cols-12 gap-8 md:gap-10 items-end w-full">
          {/* Left copy column: cols 1-7 */}
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1, ease: EASE }}
              className="flex items-center gap-3 font-[family-name:var(--font-plex-mono)] text-[10px] md:text-[11px] tracking-[0.35em] text-[color:var(--color-neon-cyan)] mb-8"
            >
              <span className="w-6 h-px bg-[color:var(--color-neon-cyan)]" />
              대전 · 둔산동 · SINCE 2010
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3, ease: EASE }}
              className="mb-6 font-[family-name:var(--font-grunt)] text-[52px] sm:text-[72px] md:text-[104px] leading-[0.9] tracking-[-0.03em] text-white [text-shadow:0_0_30px_rgba(0,0,0,0.8),0_0_60px_rgba(255,0,128,0.25)]"
            >
              HIPHOP DJ
              <br />
              LESSON
            </motion.h1>

            {/* Studio brand emphasis */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.85 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-px w-8 bg-[color:var(--color-neon-pink)]" />
              <span className="font-[family-name:var(--font-grunt)] text-[18px] sm:text-[22px] md:text-[26px] tracking-[0.08em] bg-[linear-gradient(90deg,#ff0080,#00c8ff)] bg-clip-text text-transparent">
                BPM MUSIC STUDIO
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.95 }}
              className="relative text-white text-[15px] md:text-[17px] leading-[1.7] max-w-[500px] mb-8 font-medium"
            >
              한국 최고의 베테랑 힙합 DJ와의 1:1 밀착 레슨.
              <br />
              <span className="text-white/85 font-normal">턴테이블 앞에 앉아본 적 없어도, 무대 위까지.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.1 }}
              className="flex flex-wrap gap-3"
            >
              <NeonButton href="#visit" variant="primary">
                상담 문의 →
              </NeonButton>
              <NeonButton href="#class" variant="ghost">
                클래스 둘러보기
              </NeonButton>
            </motion.div>
          </div>

          {/* Right portrait — vinyl sleeve frame: cols 8-12 */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.0, delay: 1.4, ease: EASE }}
            className="md:col-span-5 md:justify-self-end w-full max-w-[360px] mx-auto md:mx-0"
          >
            <VinylSleevePortrait />
          </motion.div>
        </div>
      </div>

      {/* ===== BOTTOM LEDGER ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.3 }}
        className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8 px-6 md:px-14 py-4 md:py-5 border-t border-white/10 font-[family-name:var(--font-plex-mono)] text-[9px] md:text-[10px] tracking-[0.25em] text-white/50 uppercase"
      >
        <Ledger label="Address" value="대덕대로 223, 1112" />
        <Ledger label="Instructor" value="DJ KNDRX" />
        <Ledger label="Equipment" value="Technics × Pioneer" />
        <Ledger label="Format" value="1:1 · MAX 2:1" />
      </motion.div>
    </section>
  );
}

function Ledger({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-white/30 mb-1">// {label}</div>
      <div className="text-white">{value}</div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   GIANT BPM — 실제 로고 아트워크 풀블리드
   ───────────────────────────────────────────── */
function GiantBPM() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, scale: 1.1, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.4, delay: 0.5, ease: EASE }}
        className="absolute right-[-8%] md:right-[-4%] bottom-[-12%] md:top-[15%] md:bottom-auto w-[85%] md:w-[48%] aspect-square opacity-[0.12] md:opacity-[0.16] blur-[2px] md:blur-[3px]"
        style={{
          maskImage: "radial-gradient(circle, black 35%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(circle, black 35%, transparent 75%)",
        }}
      >
        <Image
          src="/images/logo/bpm-vinyl.png"
          alt=""
          fill
          priority
          sizes="85vw"
          className="object-contain select-none"
        />
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   VINYL SLEEVE PORTRAIT — 12" record jacket frame
   ───────────────────────────────────────────── */
function VinylSleevePortrait() {
  return (
    <div className="relative aspect-square w-full">
      {/* record peeking out behind */}
      <div className="absolute -right-8 top-4 bottom-4 w-[88%] rounded-full bg-[radial-gradient(circle,#000_20%,#1a1a1a_21%,#000_22%,#1a1a1a_23%,#000_24%)] border border-white/5 shadow-[inset_0_0_0_1px_rgba(255,0,128,0.15)]">
        <div className="absolute inset-0 rounded-full" style={{
          background: "repeating-radial-gradient(circle at center, transparent 0 2px, rgba(255,255,255,0.03) 2px 3px)",
        }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] h-[30%] rounded-full bg-[linear-gradient(135deg,#ff0080,#00c8ff)]" />
      </div>

      {/* sleeve */}
      <div className="relative aspect-square w-[92%] bg-[#0a0a0a] border border-white/15 overflow-hidden shadow-[0_0_0_1px_rgba(255,0,128,0.25),0_40px_80px_-20px_rgba(255,0,128,0.35),0_30px_60px_-20px_rgba(0,200,255,0.25)]">
        {/* sleeve top strip */}
        <div className="absolute top-0 inset-x-0 flex items-center justify-between px-3 py-2 border-b border-white/15 font-[family-name:var(--font-plex-mono)] text-[9px] tracking-[0.25em] text-white/70 z-10">
          <span>BPM/001</span>
          <span className="text-[color:var(--color-neon-pink)]">SIDE A</span>
        </div>

        {/* image */}
        <div className="absolute inset-0">
          <Image
            src="/images/kndrx/01.jpg"
            alt="DJ KNDRX — 블루 네온 아래 부스에서 디제잉 중"
            fill
            priority
            sizes="(min-width:768px) 360px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,0,128,0.3),transparent_60%)]" />
        </div>

        {/* sleeve bottom strip — credit */}
        <div className="absolute bottom-0 inset-x-0 flex items-end justify-between px-3 py-3 border-t border-white/15 bg-gradient-to-t from-black/90 to-transparent z-10">
          <div>
            <div className="font-[family-name:var(--font-plex-mono)] text-[8px] tracking-[0.3em] text-white/50">
              FEATURING
            </div>
            <div className="font-[family-name:var(--font-grunt)] text-white text-[22px] leading-none mt-0.5 tracking-tight">
              DJ KNDRX
            </div>
          </div>
          <div className="font-[family-name:var(--font-plex-mono)] text-[8px] tracking-[0.25em] text-white/40 text-right">
            SINCE
            <br />
            <span className="text-white">2010</span>
          </div>
        </div>

        {/* punched hole (catalog sticker) */}
        <div className="absolute top-12 right-3 w-10 h-10 rounded-full border-2 border-white/20 flex items-center justify-center font-[family-name:var(--font-plex-mono)] text-[8px] tracking-[0.2em] text-white/60 z-10 rotate-[8deg]">
          33⅓
        </div>
      </div>
    </div>
  );
}
