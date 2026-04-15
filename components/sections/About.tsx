"use client";

import { motion } from "framer-motion";
import { GrungeHeading } from "@/components/ui/GrungeHeading";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { VinylGrooves } from "@/components/ui/VinylGrooves";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const TRACKS = [
  {
    side: "A1",
    length: "MAX 2:1",
    title: "1:1 밀착 레슨",
    subtitle: "Private Tuition",
    desc: "현직 DJ · 프로듀서 · 래퍼의 밀착 레슨. 취미부터 프로 데뷔까지 방향에 맞춰 진행됩니다.",
  },
  {
    side: "A2",
    length: "LIVE",
    title: "실제 무대 경험",
    subtitle: "Real Stage",
    desc: "정기적으로 진행되는 BPM DJ 파티에 수강생이 직접 플레이합니다. 단순 연습이 아닌 진짜 무대.",
  },
  {
    side: "A3",
    length: "CONNECT",
    title: "커뮤니티 & 네트워킹",
    subtitle: "Community",
    desc: "음악을 좋아하는 사람들과 연결되는 공간. DJ · 뮤지션 · 크리에이터들과 교류하며 성장합니다.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative bg-[#0a0a0a] overflow-hidden"
    >
      {/* big vinyl rings in bg */}
      <VinylGrooves
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] opacity-60"
        color="rgba(255,255,255,0.035)"
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 100% 0%, rgba(0,200,255,0.10), transparent 40%), radial-gradient(circle at 0% 100%, rgba(255,0,128,0.08), transparent 40%)",
        }}
      />
      <GrainOverlay opacity={0.05} blendMode="soft-light" />

      <div className="relative z-10 px-5 sm:px-6 md:px-14 py-20 md:py-32">
        {/* ── section slug row ── */}
        <div className="flex items-end justify-between gap-6 border-b border-white/15 pb-4 mb-16">
          <div className="flex items-baseline gap-5 font-[family-name:var(--font-plex-mono)] text-[11px] tracking-[0.3em] text-white/50">
            <span className="text-[color:var(--color-neon-pink)] font-bold">
              CH. 01
            </span>
            <span>ABOUT THE STUDIO</span>
          </div>
          <div className="font-[family-name:var(--font-plex-mono)] text-[10px] tracking-[0.3em] text-white/30 hidden md:block">
            TRACKLIST — SIDE A
          </div>
        </div>

        {/* ── headline ── */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-10 mb-20">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={stagger}
            className="md:col-span-7"
          >
            <motion.div variants={fadeUp}>
              <GrungeHeading className="text-[56px] sm:text-[72px] md:text-[104px] leading-[0.9]">
                <span className="bg-[linear-gradient(90deg,#ff0080,#00c8ff)] bg-clip-text text-transparent">
                  MUSIC STUDIO
                </span>
              </GrungeHeading>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp}
            className="md:col-span-5 md:pl-10 md:border-l border-white/10 md:pt-6"
          >
            <div className="font-[family-name:var(--font-plex-mono)] text-[10px] tracking-[0.3em] text-[color:var(--color-neon-pink)] mb-4">
              LINER NOTES
            </div>
            <p className="text-white/70 text-[15px] leading-[1.75] font-light">
              대전 둔산동. 힙합 디제잉과 랩을 쉽고 재미있게 배우는 공간.
              현직 DJ가 전담으로 가르치고, 수강생은 실제 무대에 올라 경험을 쌓습니다.
              <span className="block mt-4 font-[family-name:var(--font-fraunces)] italic text-white/50 text-[14px]">
                — 장비, 레슨, 무대, 커뮤니티. 한 곳에서.
              </span>
            </p>
          </motion.div>
        </div>

        {/* ── tracklist ── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="border-t border-white/15"
        >
          {TRACKS.map((t) => (
            <motion.div
              key={t.side}
              variants={fadeUp}
              className="group grid grid-cols-[auto_1fr_auto] md:grid-cols-[80px_80px_1fr_120px] items-center gap-4 md:gap-8 py-7 md:py-8 border-b border-white/10 hover:bg-white/[0.02] transition-colors"
            >
              <div className="font-[family-name:var(--font-grunt)] text-[36px] md:text-[48px] leading-none text-[color:var(--color-neon-pink)] tracking-tight">
                {t.side}
              </div>
              <div className="hidden md:flex items-center gap-2 font-[family-name:var(--font-plex-mono)] text-[10px] tracking-[0.25em] text-white/40">
                <span className="w-6 h-px bg-white/20" />
                {t.length}
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className="font-[family-name:var(--font-grunt)] text-[22px] md:text-[28px] leading-tight tracking-[-0.02em]">
                  {t.title}
                </div>
                <div className="font-[family-name:var(--font-fraunces)] italic text-white/45 text-[13px] mt-1 mb-2">
                  {t.subtitle}
                </div>
                <div className="text-white/60 text-[13px] md:text-[14px] leading-[1.65] max-w-[560px]">
                  {t.desc}
                </div>
              </div>
              <div className="hidden md:flex items-center justify-end">
                <div className="font-[family-name:var(--font-plex-mono)] text-[10px] tracking-[0.3em] text-white/25 group-hover:text-white/60 transition">
                  → PLAY
                </div>
              </div>
              <div className="md:hidden font-[family-name:var(--font-plex-mono)] text-[10px] tracking-[0.25em] text-white/35 col-span-3">
                — {t.length}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
