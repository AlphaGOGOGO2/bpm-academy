"use client";

import { motion } from "framer-motion";
import { GrungeHeading } from "@/components/ui/GrungeHeading";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { PhoneIcon } from "@/components/ui/SocialIcons";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const ADDRESS = "대전 서구 대덕대로 223 대우토피아 1112호";
// 좌표 (Google/네이버 검증 완료): 36.352856, 127.3788255
const LAT = 36.352856;
const LNG = 127.3788255;
// iframe 임베드 URL (API 불필요)
const EMBED_SRC = `https://maps.google.com/maps?q=${LAT},${LNG}&hl=ko&z=17&output=embed`;
// 새 탭 링크: 네이버 지도 정확 위치
const NAVER_MAP_URL =
  "https://map.naver.com/p/search/%EB%8C%80%EC%A0%84%20%EC%84%9C%EA%B5%AC%20%EB%8C%80%EB%8D%95%EB%8C%80%EB%A1%9C%20223/address/3zytW6,2zX7Tc,%EB%8C%80%EC%A0%84%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%84%9C%EA%B5%AC%20%EB%8C%80%EB%8D%95%EB%8C%80%EB%A1%9C%20223?c=3zyj1J,2zX7SJ,15.00,0,0,0,dh&isCorrectAnswer=true";

export function Visit() {
  return (
    <section
      id="visit"
      className="relative bg-[#060606] overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 20% 100%, rgba(255,0,128,0.15), transparent 50%), radial-gradient(circle at 80% 0%, rgba(0,200,255,0.10), transparent 50%)",
        }}
      />
      <GrainOverlay opacity={0.05} blendMode="soft-light" />

      <div className="relative z-10 px-5 sm:px-6 md:px-14 py-20 md:py-32">
        <div className="flex items-end justify-between gap-6 border-b border-white/15 pb-4 mb-16">
          <div className="flex items-baseline gap-5 font-[family-name:var(--font-plex-mono)] text-[11px] tracking-[0.3em] text-white/50">
            <span className="text-[color:var(--color-neon-pink)] font-bold">CH. 04</span>
            <span>LOCATION</span>
          </div>
          <div className="font-[family-name:var(--font-plex-mono)] text-[10px] tracking-[0.3em] text-white/30 hidden md:block">
            VISIT · WALK-IN WELCOME
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-12 mb-14">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={stagger}
            className="md:col-span-7"
          >
            <motion.span
              variants={fadeUp}
              className="block font-[family-name:var(--font-fraunces)] italic font-light text-[24px] md:text-[32px] leading-[1.1] text-white/60 mb-2"
            >
              come through,
            </motion.span>
            <motion.div variants={fadeUp}>
              <GrungeHeading className="text-[56px] sm:text-[84px] md:text-[128px] leading-[0.9] tracking-[-0.03em]">
                <span className="bg-[linear-gradient(90deg,#ff0080,#00c8ff)] bg-clip-text text-transparent">
                  LOCATION
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
              WALK-IN
            </div>
            <p className="text-white/70 text-[15px] leading-[1.75] font-light">
              전화로 일정 문의 후 방문 가능합니다. 직접 장비를 만져보고, 레슨
              분위기를 확인해보세요.
              <span className="block mt-3 font-[family-name:var(--font-fraunces)] italic text-white/50 text-[14px]">
                — 부담 없이 연락 주세요.
              </span>
            </p>
          </motion.div>
        </div>

        {/* map + info grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="grid md:grid-cols-[1.2fr_1fr] gap-0 border border-white/15"
        >
          {/* MAP — real iframe + stylized frame */}
          <motion.div
            variants={fadeUp}
            className="relative aspect-[16/11] md:aspect-auto md:min-h-[480px] overflow-hidden border-r border-white/15 bg-[#0a0a0a]"
          >
            <iframe
              src={EMBED_SRC}
              title="BPM 뮤직 스튜디오 지도"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full border-0 [filter:invert(0.92)_hue-rotate(180deg)_saturate(0.85)_contrast(0.9)]"
            />
            {/* corner markers (over map) */}
            <div aria-hidden className="pointer-events-none absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-white/60 z-[2]" />
            <div aria-hidden className="pointer-events-none absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-white/60 z-[2]" />
            <div aria-hidden className="pointer-events-none absolute bottom-12 left-4 w-5 h-5 border-b-2 border-l-2 border-white/60 z-[2]" />
            <div aria-hidden className="pointer-events-none absolute bottom-12 right-4 w-5 h-5 border-b-2 border-r-2 border-white/60 z-[2]" />

            {/* footer bar — links out to Naver */}
            <a
              href={NAVER_MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="네이버 지도에서 BPM 뮤직 스튜디오 위치 열기"
              className="absolute bottom-0 inset-x-0 px-4 py-3 bg-black/85 backdrop-blur flex items-center justify-between font-[family-name:var(--font-plex-mono)] text-[10px] tracking-[0.25em] text-white/70 hover:text-white transition border-t border-white/15 z-[2]"
            >
              <span>BPM STUDIO · 대덕대로 223, 1112</span>
              <span>OPEN IN NAVER MAP →</span>
            </a>
          </motion.div>

          {/* INFO column */}
          <div className="divide-y divide-white/15">
            {/* ADDRESS */}
            <motion.div variants={fadeUp} className="p-8 md:p-10">
              <div className="flex items-center justify-between mb-3">
                <div className="font-[family-name:var(--font-plex-mono)] text-[10px] tracking-[0.3em] text-[color:var(--color-neon-cyan)]">
                  ADDRESS
                </div>
                <div className="font-[family-name:var(--font-plex-mono)] text-[10px] tracking-[0.25em] text-white/30">
                  // 01
                </div>
              </div>
              <div className="font-[family-name:var(--font-grunt)] text-[24px] md:text-[28px] leading-tight tracking-[-0.02em]">
                대전 서구 대덕대로 223
              </div>
              <div className="font-[family-name:var(--font-fraunces)] italic text-white/65 text-[16px] mt-1">
                대우토피아 1112호
              </div>
            </motion.div>

            {/* HOURS */}
            <motion.div variants={fadeUp} className="p-8 md:p-10">
              <div className="flex items-center justify-between mb-3">
                <div className="font-[family-name:var(--font-plex-mono)] text-[10px] tracking-[0.3em] text-[color:var(--color-neon-cyan)]">
                  HOURS
                </div>
                <div className="font-[family-name:var(--font-plex-mono)] text-[10px] tracking-[0.25em] text-white/30">
                  // 02
                </div>
              </div>
              <div className="text-white/80 text-[15px] leading-relaxed">
                전화로 일정 문의 후 방문
              </div>
              <div className="font-[family-name:var(--font-fraunces)] italic text-white/45 text-[13px] mt-1">
                by appointment
              </div>
            </motion.div>

            {/* PULL-TAB CONTACT (phone + kakao) */}
            <motion.div
              variants={fadeUp}
              className="relative p-7 md:p-10 bg-[linear-gradient(135deg,rgba(255,0,128,0.08),rgba(0,200,255,0.06))] overflow-hidden"
            >
              {/* dashed top edge (tear indicator) */}
              <div
                aria-hidden
                className="absolute top-0 inset-x-0 h-[1px]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(90deg, rgba(255,255,255,0.3) 0 6px, transparent 6px 12px)",
                }}
              />
              <div className="flex items-center justify-between mb-3">
                <div className="font-[family-name:var(--font-plex-mono)] text-[10px] tracking-[0.3em] text-[color:var(--color-neon-pink)]">
                  ✂ ─ PULL TAB ─ ✂
                </div>
                <div className="font-[family-name:var(--font-plex-mono)] text-[10px] tracking-[0.25em] text-white/40">
                  // 03
                </div>
              </div>
              <div className="font-[family-name:var(--font-grunt)] text-[32px] sm:text-[38px] md:text-[48px] bg-[linear-gradient(90deg,#ff0080,#00c8ff)] bg-clip-text text-transparent leading-none tracking-[-0.02em] mb-2 break-all">
                010-4637-4987
              </div>
              <div className="font-[family-name:var(--font-fraunces)] italic text-white/55 text-[13px] mb-5">
                전화 · 문자 모두 가능
              </div>
              <div className="flex flex-wrap gap-2 mb-5">
                <a
                  href="tel:01046374987"
                  className="inline-flex items-center gap-2 bg-white text-black rounded-full px-5 py-3 font-extrabold text-[12px] sm:text-[13px] tracking-[0.1em] hover:bg-white/90 transition"
                >
                  <PhoneIcon size={14} />
                  바로 전화
                </a>
                <a
                  href="sms:01046374987"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 font-bold text-[12px] sm:text-[13px] tracking-[0.1em] text-white hover:border-white/70 hover:bg-white/5 transition"
                >
                  문자 보내기
                </a>
              </div>

            </motion.div>
          </div>
        </motion.div>

        {/* small print footer */}
        <div className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 font-[family-name:var(--font-plex-mono)] text-[10px] tracking-[0.25em] text-white/35">
          <span>BPM MUSIC STUDIO · HIP-HOP DJ ACADEMY</span>
          <span>EST. 2025 · DAEJEON, KR</span>
        </div>
      </div>
    </section>
  );
}
