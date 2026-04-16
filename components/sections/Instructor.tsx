"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GrungeHeading } from "@/components/ui/GrungeHeading";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const TIMELINE = [
  {
    side: "A1",
    year: "2010~",
    title: "힙합 DJ 데뷔",
    detail: "16년차 현역. 명실상부 국내 힙합씬 최고의 DJ 중 한 명.",
  },
  {
    side: "A2",
    year: "MSG",
    title: "뉴욕 매디슨 스퀘어 가든 공연",
    detail: "국내 힙합 DJ 중 유일한 MSG 공연 이력.",
  },
  {
    side: "B1",
    year: "BACKUP",
    title: "메이저 래퍼 전담 백업 DJ",
    detail: "BewhY · JUSTHIS · 쿤디판다 등.",
  },
  {
    side: "B2",
    year: "CLUBS",
    title: "힙합 클럽 설립 · 운영",
    detail: "홍대 블루프린트 · 신림 파이프 · 홍대 Mhood.",
  },
  {
    side: "B3",
    year: "WORKS",
    title: "언더그라운드 음반 제작",
    detail: "JJK · UNTELL 등 래퍼들의 앨범 작업 참여.",
  },
];

export function Instructor() {
  return (
    <section
      id="instructor"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #ece2cc 0%, #e3d5b5 100%)",
        color: "var(--color-paper-ink)",
      }}
    >
      {/* paper fibers / speckles */}
      <GrainOverlay opacity={0.14} blendMode="multiply" />
      {/* top & bottom torn edges */}
      <div
        aria-hidden
        className="absolute top-0 inset-x-0 h-3 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, #060606, transparent), repeating-linear-gradient(90deg, transparent 0 4px, rgba(0,0,0,0.15) 4px 5px)",
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 inset-x-0 h-3 pointer-events-none"
        style={{
          background:
            "linear-gradient(0deg, #060606, transparent), repeating-linear-gradient(90deg, transparent 0 4px, rgba(0,0,0,0.15) 4px 5px)",
        }}
      />

      <div className="relative z-10 px-5 sm:px-6 md:px-14 py-20 md:py-32">
        {/* masthead row */}
        <div className="flex items-end justify-between gap-6 border-b border-black/25 pb-4 mb-16">
          <div className="flex items-baseline gap-5 font-[family-name:var(--font-plex-mono)] text-[11px] tracking-[0.3em] text-black/60">
            <span className="text-[#d23079] font-bold">CH. 03</span>
            <span>THE INSTRUCTOR</span>
          </div>
          <div className="font-[family-name:var(--font-plex-mono)] text-[10px] tracking-[0.3em] text-black/40 hidden md:block">
            FEATURE · PRESS CLIPPING
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-14">
          {/* === portrait column (5) === */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8 }}
            className="md:col-span-5"
          >
            <div className="relative">
              {/* tape */}
              <div
                aria-hidden
                className="absolute -top-3 left-8 w-20 h-6 bg-[rgba(255,220,0,0.55)] rotate-[-4deg] z-20 shadow-sm border border-black/5"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(90deg, transparent 0 2px, rgba(0,0,0,0.04) 2px 3px)",
                }}
              />
              {/* sleeve */}
              <div className="relative aspect-square bg-[#1a1814] border border-black/30 shadow-[8px_10px_0_rgba(0,0,0,0.15)]">
                {/* top strip */}
                <div className="absolute top-0 inset-x-0 flex items-center justify-between px-3 py-2 border-b border-white/15 font-[family-name:var(--font-plex-mono)] text-[9px] tracking-[0.25em] text-white/70 z-10">
                  <span>BPM/001 · SIDE A</span>
                  <span className="text-[#ff0080]">12"</span>
                </div>

                <Image
                  src="/images/kndrx/02.webp"
                  alt="DJ KNDRX 포트레이트"
                  fill
                  sizes="(min-width:768px) 420px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />

                {/* credit */}
                <div className="absolute bottom-0 inset-x-0 flex items-end justify-between px-3 py-3 border-t border-white/15 bg-gradient-to-t from-black/95 to-transparent z-10">
                  <div>
                    <div className="font-[family-name:var(--font-plex-mono)] text-[8px] tracking-[0.3em] text-white/50">
                      FEATURING
                    </div>
                    <div className="font-[family-name:var(--font-grunt)] text-white text-[22px] leading-none mt-0.5 tracking-tight">
                      DJ KNDRX
                    </div>
                  </div>
                  <div className="font-[family-name:var(--font-plex-mono)] text-[8px] tracking-[0.25em] text-white/50 text-right">
                    SINCE
                    <br />
                    <span className="text-white">2010</span>
                  </div>
                </div>

                {/* catalog sticker */}
                <div className="absolute top-12 right-3 w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center font-[family-name:var(--font-plex-mono)] text-[8px] tracking-[0.2em] text-white/70 z-10 rotate-[8deg]">
                  33⅓
                </div>
              </div>

              {/* caption below sleeve */}
              <div className="mt-5 pl-1 font-[family-name:var(--font-fraunces)] italic text-black/60 text-[13px] leading-[1.6]">
                Fig. 1 — KNDRX in the booth, BPM 뮤직 스튜디오 (2025).
                <br />
                <span className="font-[family-name:var(--font-plex-mono)] not-italic text-[10px] tracking-[0.2em] text-black/40">
                  PHOTO · BPM STUDIO
                </span>
              </div>
            </div>
          </motion.div>

          {/* === bio column (7) === */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={stagger}
            className="md:col-span-7"
          >
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3 font-[family-name:var(--font-plex-mono)] text-[10px] tracking-[0.3em] text-[#d23079] mb-5"
            >
              <span className="w-5 h-px bg-[#d23079]" />
              DJ 켄드릭스 · KNDRX
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-[family-name:var(--font-grunt)] text-[52px] sm:text-[80px] md:text-[128px] leading-[0.9] tracking-[-0.04em] mb-6"
              style={{ color: "#1a1814" }}
            >
              DJ
              <br />
              KNDRX
            </motion.h2>

            {/* pull quote */}
            <motion.div
              variants={fadeUp}
              className="border-l-[3px] border-[#d23079] pl-5 mb-8 font-[family-name:var(--font-fraunces)] italic font-light text-[20px] md:text-[26px] leading-[1.4] text-black/85 max-w-[560px]"
            >
              한국 최고의 베테랑 힙합 DJ.
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-black/75 text-[14px] md:text-[15px] leading-[1.75] mb-10 max-w-[580px]"
            >
              2010년부터 활동해온 베테랑. BewhY · JUSTHIS · 쿤디판다 등의 전담 백업 DJ로
              활약. 홍대 블루프린트 · 신림 파이프 · 홍대 Mhood 등을 직접 설립 및 운영하며
              다양한 파티 · 콘서트 제작과 언더그라운드 래퍼들의 음반 작업에 참여. 한국 힙합씬에서
              지대한 영향을 끼치며 활동 중.
            </motion.p>

            {/* tracklist bio */}
            <motion.div variants={fadeUp}>
              <div className="flex items-baseline justify-between border-b border-black/30 pb-2 mb-3">
                <div className="font-[family-name:var(--font-plex-mono)] text-[10px] tracking-[0.3em] text-black/60">
                  TRACKLIST · CAREER
                </div>
                <div className="font-[family-name:var(--font-plex-mono)] text-[10px] tracking-[0.3em] text-black/40">
                  SIDE A / B
                </div>
              </div>
              {TIMELINE.map((t) => (
                <div
                  key={t.side}
                  className="grid grid-cols-[42px_70px_1fr] sm:grid-cols-[50px_90px_1fr] items-center gap-3 sm:gap-4 py-3.5 border-b border-black/10 last:border-b-0"
                >
                  <div className="font-[family-name:var(--font-grunt)] text-[#d23079] text-[20px] tracking-tight">
                    {t.side}
                  </div>
                  <div className="font-[family-name:var(--font-plex-mono)] text-[10px] tracking-[0.25em] text-black/60">
                    {t.year}
                  </div>
                  <div>
                    <div className="text-black/90 text-[14px] leading-tight mb-0.5">
                      {t.title}
                    </div>
                    <div className="font-[family-name:var(--font-fraunces)] italic text-black/55 text-[13px]">
                      — {t.detail}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
