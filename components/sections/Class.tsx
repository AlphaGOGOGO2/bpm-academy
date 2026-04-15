"use client";

import { motion } from "framer-motion";
import { GrungeHeading } from "@/components/ui/GrungeHeading";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const CURRICULUM = [
  {
    n: "01",
    t: "History & Context",
    t_ko: "디제잉의 역사와 개요",
    d: "힙합 디제잉의 유래와 주요 개념. 음악적 배경.",
    time: "WEEK 01",
  },
  {
    n: "02",
    t: "Gear Anatomy",
    t_ko: "장비 및 작동 원리",
    d: "턴테이블 · 믹서 구조와 각 기능, 기본 작동 원리.",
    time: "WEEK 02",
  },
  {
    n: "03",
    t: "Serato DJ PRO",
    t_ko: "디제잉 소프트웨어",
    d: "전문 DJ 소프트웨어 운용과 디지털 믹싱 이해.",
    time: "WEEK 03",
  },
  {
    n: "04",
    t: "Track Dissection",
    t_ko: "DJ 관점의 곡 분석",
    d: "비트 · 장르 · 구성 요소를 DJ 관점에서 분석.",
    time: "WEEK 04",
  },
  {
    n: "05",
    t: "Mix It Yourself",
    t_ko: "직접 믹스하기",
    d: "배운 이론과 기술 기반, 나만의 음악을 실전 믹싱.",
    time: "WEEK 05+",
  },
];

const GEAR = [
  {
    name: "Technics SL-1200MK7",
    spec: "DIRECT-DRIVE TURNTABLE",
    qty: "× 2",
    note: "실전 프로 DJ 스탠다드",
  },
  {
    name: "Pioneer DJM-S11",
    spec: "BATTLE MIXER · SCRATCH",
    qty: "× 1",
    note: "디지털 퍼포먼스 올인원",
  },
];

export function Class() {
  return (
    <section
      id="class"
      className="relative bg-[#060606] overflow-hidden"
    >
      {/* circuit-trace pattern bg */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent 0 80px, rgba(0,200,255,0.5) 80px 81px), repeating-linear-gradient(0deg, transparent 0 120px, rgba(255,0,128,0.4) 120px 121px)",
        }}
      />
      <GrainOverlay opacity={0.05} blendMode="soft-light" />

      <div className="relative z-10 px-5 sm:px-6 md:px-14 py-20 md:py-32">
        <div className="flex items-end justify-between gap-6 border-b border-white/15 pb-4 mb-16">
          <div className="flex items-baseline gap-5 font-[family-name:var(--font-plex-mono)] text-[11px] tracking-[0.3em] text-white/50">
            <span className="text-[color:var(--color-neon-pink)] font-bold">CH. 02</span>
            <span>CLASS PROGRAM</span>
          </div>
          <div className="font-[family-name:var(--font-plex-mono)] text-[10px] tracking-[0.3em] text-white/30 hidden md:block">
            CURRICULUM — 5 STEPS
          </div>
        </div>

        {/* headline */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-10 mb-20">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={stagger}
            className="md:col-span-7"
          >
            <motion.span
              variants={fadeUp}
              className="block font-[family-name:var(--font-fraunces)] italic font-light text-[28px] md:text-[36px] leading-[1.1] text-white/70 mb-2"
            >
              tailored, for every
            </motion.span>
            <motion.div variants={fadeUp}>
              <GrungeHeading className="text-[56px] sm:text-[72px] md:text-[96px] leading-[0.9]">
                BEGINNER
                <br />
                <span className="bg-[linear-gradient(90deg,#ff0080,#00c8ff)] bg-clip-text text-transparent">
                  OR PRO
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
              FORMAT
            </div>
            <p className="text-white/70 text-[15px] leading-[1.75] font-light">
              1:1 또는 최대 2:1 소수 정예. 저가형 입문 장비가 아닌 실제 프로 DJ가
              쓰는 최고급 장비. 장비 조작을 넘어 디제잉의 본질과 섬세한 테크닉까지.
              <span className="block mt-4 font-[family-name:var(--font-fraunces)] italic text-white/50 text-[14px]">
                — 프로 데뷔까지도 보조해드립니다.
              </span>
            </p>
          </motion.div>
        </div>

        {/* === curriculum tracklist === */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="border-t border-white/15 mb-16"
        >
          <div className="flex items-center justify-between py-3 font-[family-name:var(--font-plex-mono)] text-[9px] tracking-[0.3em] text-white/35 border-b border-white/10">
            <span>// TRACK</span>
            <span className="hidden md:block">// TIMELINE</span>
          </div>
          {CURRICULUM.map((c) => (
            <motion.div
              key={c.n}
              variants={fadeUp}
              className="group grid grid-cols-[auto_1fr_auto] md:grid-cols-[100px_1fr_140px] items-start gap-4 md:gap-8 py-7 md:py-8 border-b border-white/10 hover:bg-white/[0.02] transition"
            >
              <div className="font-[family-name:var(--font-grunt)] text-[44px] md:text-[64px] leading-none text-[color:var(--color-neon-pink)] tracking-[-0.04em]">
                {c.n}
              </div>
              <div>
                <div className="font-[family-name:var(--font-fraunces)] italic text-white/50 text-[14px] mb-1">
                  {c.t}
                </div>
                <div className="font-[family-name:var(--font-grunt)] text-[22px] md:text-[28px] leading-tight tracking-[-0.02em] mb-2">
                  {c.t_ko}
                </div>
                <div className="text-white/60 text-[13px] md:text-[14px] leading-[1.65] max-w-[580px]">
                  {c.d}
                </div>
              </div>
              <div className="hidden md:block font-[family-name:var(--font-plex-mono)] text-[10px] tracking-[0.3em] text-white/40 text-right">
                {c.time}
              </div>
              <div className="md:hidden col-span-3 font-[family-name:var(--font-plex-mono)] text-[10px] tracking-[0.25em] text-white/35">
                — {c.time}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* === gear spec sheet === */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mb-16"
        >
          <div className="flex items-baseline justify-between border-b border-white/15 pb-3 mb-5">
            <div className="font-[family-name:var(--font-grunt)] text-[32px] md:text-[40px] leading-none">
              GEAR
            </div>
            <div className="font-[family-name:var(--font-plex-mono)] text-[10px] tracking-[0.3em] text-white/40">
              SPEC SHEET · PRO-GRADE
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-0">
            {GEAR.map((g, i) => (
              <div
                key={g.name}
                className={`p-7 md:p-8 border-b border-white/10 ${
                  i === 0 ? "md:border-r" : ""
                }`}
              >
                <div className="font-[family-name:var(--font-plex-mono)] text-[10px] tracking-[0.3em] text-[color:var(--color-neon-cyan)] mb-3">
                  ITEM {String(i + 1).padStart(2, "0")}
                </div>
                <div className="flex items-baseline justify-between gap-4 mb-3">
                  <div className="font-[family-name:var(--font-grunt)] text-[24px] md:text-[28px] tracking-[-0.02em] leading-tight">
                    {g.name}
                  </div>
                  <div className="font-[family-name:var(--font-grunt)] text-[28px] md:text-[32px] bg-[linear-gradient(90deg,#ff0080,#00c8ff)] bg-clip-text text-transparent leading-none">
                    {g.qty}
                  </div>
                </div>
                <div className="font-[family-name:var(--font-plex-mono)] text-[11px] tracking-[0.2em] text-white/50 mb-2">
                  {g.spec}
                </div>
                <div className="font-[family-name:var(--font-fraunces)] italic text-white/50 text-[13px]">
                  — {g.note}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* === A / B side cards === */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="grid md:grid-cols-2 gap-0 border-t border-white/15"
        >
          <motion.div
            variants={fadeUp}
            className="p-8 md:p-10 md:border-r border-white/15 relative overflow-hidden group"
          >
            <div
              className="absolute -right-16 -top-16 w-64 h-64 rounded-full opacity-10 group-hover:opacity-25 transition"
              style={{ background: "radial-gradient(circle, #ff0080, transparent 70%)" }}
            />
            <div className="relative">
              <div className="flex items-center justify-between mb-5">
                <div className="font-[family-name:var(--font-plex-mono)] text-[10px] tracking-[0.3em] text-[color:var(--color-neon-pink)]">
                  ● NOW OPEN
                </div>
                <div className="font-[family-name:var(--font-grunt)] text-[18px] tracking-tight text-white/60">
                  SIDE A
                </div>
              </div>
              <div className="font-[family-name:var(--font-grunt)] text-[40px] md:text-[56px] leading-[0.95] mb-2">
                DJ Class
              </div>
              <p className="text-white/60 text-[14px] leading-relaxed mb-5 max-w-[400px]">
                힙합 DJ · 1:1 / 최대 2:1 · 5단계 커리큘럼 기반.
              </p>
              <a
                href="#visit"
                className="inline-flex items-center gap-2 font-[family-name:var(--font-plex-mono)] text-[11px] tracking-[0.25em] text-white hover:text-[color:var(--color-neon-pink)] transition"
              >
                상담 문의 <span aria-hidden>→</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="p-8 md:p-10 relative overflow-hidden bg-white/[0.015] opacity-80"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="font-[family-name:var(--font-plex-mono)] text-[10px] tracking-[0.3em] text-white/35">
                ○ COMING SOON
              </div>
              <div className="font-[family-name:var(--font-grunt)] text-[18px] tracking-tight text-white/30">
                SIDE B
              </div>
            </div>
            <div className="font-[family-name:var(--font-grunt)] text-[40px] md:text-[56px] leading-[0.95] mb-2 text-white/40">
              랩 Class
            </div>
            <p className="text-white/35 text-[14px] leading-relaxed mb-5 max-w-[400px]">
              래핑 · 작사 · 플로우. 준비 중.
            </p>
            <span className="inline-block font-[family-name:var(--font-plex-mono)] text-[11px] tracking-[0.25em] text-white/30">
              TBA
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
