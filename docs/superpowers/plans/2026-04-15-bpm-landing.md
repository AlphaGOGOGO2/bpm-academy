# BPM 뮤직 스튜디오 랜딩 — 구현 계획

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Next.js App Router 기반 DJ 아카데미 랜딩 페이지 구현. 시네마틱 히어로 + 5개 정보 섹션 + 모션 + 반응형.

**Architecture:** 단일 페이지 (`app/page.tsx`). 각 섹션은 `components/sections/*.tsx`의 독립 컴포넌트. 공통 UI는 `components/ui/`, 레이아웃은 `components/layout/`. Framer Motion은 각 섹션의 진입 애니메이션을 자체 관리.

**Tech Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Pretendard (웹) + Grunt (로컬)

**Reference:** 설계 문서 `docs/superpowers/specs/2026-04-15-bpm-landing-design.md`

---

## File Structure

```
app/
  layout.tsx                       # HTML shell, 폰트 로드, 메타
  page.tsx                         # 섹션 조립
  globals.css                      # Tailwind + CSS 변수 + @font-face
components/
  layout/
    FloatingHeader.tsx             # 상단 내비 + 전화 CTA + scroll blur
    ScrollProgress.tsx             # 우측 네온 진행바
    Footer.tsx                     # 4열 푸터
  sections/
    Hero.tsx                       # 시네마틱 히어로
    About.tsx                      # 3 필러
    Class.tsx                      # 커리큘럼 + 장비 + 카드
    Instructor.tsx                 # KNDRX 소개 + 타임라인
    Visit.tsx                      # 지도 + 연락 카드
  ui/
    SectionIndex.tsx               # "01 / ABOUT" 인덱스
    NeonButton.tsx                 # primary / ghost 버튼
    BPMSignature.tsx               # 텍스처드 BPM 레터
    GrungeHeading.tsx              # Grunt 폰트 헤드라인 (그라디언트 옵션)
lib/
  motion.ts                        # Framer Motion variants 상수
public/
  fonts/                           # Grunt.woff2 (사용자 제공)
  images/
    kndrx/                         # 제공받은 5장
    bpm/                           # BPM 로고 + 텍스처 3종
tailwind.config.ts
tsconfig.json
next.config.ts
```

---

### Task 1: 프로젝트 초기화

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `tailwind.config.ts`, `postcss.config.js`, `.gitignore`

- [ ] **Step 1: Next.js 스캐폴드**

```bash
cd "d:/저장용/djkndrx"
npx create-next-app@latest . --typescript --tailwind --app --no-src-dir --import-alias "@/*" --yes
```

예상: Next.js 15 + TS + Tailwind + App Router 기본 구조 생성.

- [ ] **Step 2: 추가 의존성 설치**

```bash
npm install framer-motion clsx
npm install --save-dev @types/node
```

- [ ] **Step 3: `.gitignore` 확인**

`.superpowers/` 추가 (브레인스토밍 파일 커밋 방지).

```bash
echo ".superpowers/" >> .gitignore
```

- [ ] **Step 4: 기본 파일 정리**

기본 `app/page.tsx`와 `app/globals.css` 내용 초기화 (다음 태스크에서 재작성).

- [ ] **Step 5: 개발 서버 기동 확인**

```bash
npm run dev
```

브라우저 `http://localhost:3000` 접속 → 빈 페이지/기본 페이지 확인.

- [ ] **Step 6: 커밋**

```bash
git init
git add -A
git commit -m "chore: scaffold Next.js + Tailwind + framer-motion"
```

---

### Task 2: 디자인 토큰 & 전역 스타일

**Files:**
- Modify: `app/globals.css`
- Modify: `tailwind.config.ts`
- Create: `app/layout.tsx` (재작성)

- [ ] **Step 1: `app/globals.css` 재작성**

```css
@import "tailwindcss";

@font-face {
  font-family: "Grunt";
  src: url("/fonts/Grunt.woff2") format("woff2");
  font-weight: 900;
  font-style: normal;
  font-display: swap;
}

@theme {
  --color-bg: #050505;
  --color-surface: #0a0a0a;
  --color-surface-2: #121212;
  --color-line: #222;
  --color-text: #fff;
  --color-text-dim: #aaa;
  --color-text-mute: #666;
  --color-neon-pink: #ff0080;
  --color-neon-cyan: #00c8ff;
  --font-grunt: "Grunt", "Arial Black", Impact, sans-serif;
  --font-sans: "Pretendard Variable", "Pretendard", -apple-system, BlinkMacSystemFont,
               "Segoe UI", sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, monospace;
}

html, body {
  background: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 2: Pretendard 웹폰트 로드**

`app/layout.tsx`에 Pretendard CDN 링크 추가:

```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BPM 뮤직 스튜디오 · DJ 아카데미",
  description: "대전 BPM 뮤직 스튜디오 — 현업 DJ에게 직접 배우는 1:1 힙합 DJ 레슨.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

- [ ] **Step 3: 임시 Grunt 폴백**

실제 폰트 파일이 오기 전에는 `Arial Black`이 fallback으로 잡힘. `public/fonts/Grunt.woff2` 없어도 빌드는 통과.

- [ ] **Step 4: 커밋**

```bash
git add -A
git commit -m "feat: design tokens, fonts, global styles"
```

---

### Task 3: 공통 모션 variants & 유틸

**Files:**
- Create: `lib/motion.ts`
- Create: `lib/cn.ts`

- [ ] **Step 1: `lib/cn.ts`**

```ts
import clsx from "clsx";
export const cn = clsx;
```

- [ ] **Step 2: `lib/motion.ts`**

```ts
import type { Variants } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export const heroLetter: Variants = {
  hidden: { opacity: 0, y: 60, rotate: -6 },
  show: (i: number) => ({
    opacity: 1, y: 0, rotate: 0,
    transition: { duration: 0.7, ease: EASE, delay: 0.5 + i * 0.18 },
  }),
};

export const viewportOnce = { once: true, margin: "-10% 0px -10% 0px" } as const;
```

- [ ] **Step 3: 커밋**

```bash
git add -A
git commit -m "feat: shared motion variants & cn util"
```

---

### Task 4: UI 프리미티브

**Files:**
- Create: `components/ui/SectionIndex.tsx`
- Create: `components/ui/NeonButton.tsx`
- Create: `components/ui/GrungeHeading.tsx`

- [ ] **Step 1: `SectionIndex.tsx`**

```tsx
"use client";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function SectionIndex({ num, label }: { num: string; label: string }) {
  return (
    <motion.div
      className="flex items-center gap-3.5 font-mono text-[11px] tracking-[0.3em] text-[color:var(--color-text-mute)] mb-8"
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={fadeUp}
    >
      <span className="text-[color:var(--color-neon-pink)] font-bold">{num}</span>
      <span>{label}</span>
      <motion.div
        className="flex-1 h-px max-w-[200px] origin-left"
        style={{ background: "linear-gradient(90deg, rgba(255,0,128,0.4), transparent)" }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
    </motion.div>
  );
}
```

- [ ] **Step 2: `NeonButton.tsx`**

```tsx
"use client";
import { cn } from "@/lib/cn";
import type { ReactNode, AnchorHTMLAttributes } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "ghost" | "gradient";
  children: ReactNode;
};

export function NeonButton({ variant = "primary", className, children, ...rest }: Props) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-5 py-3 text-[13px] font-extrabold tracking-[0.08em] transition";
  const styles = {
    primary: "bg-white text-black hover:bg-white/90",
    ghost: "border border-white/30 text-white hover:border-white/60",
    gradient:
      "text-white bg-[linear-gradient(90deg,#ff0080,#00c8ff)] hover:brightness-110",
  }[variant];
  return (
    <a className={cn(base, styles, className)} {...rest}>
      {children}
    </a>
  );
}
```

- [ ] **Step 3: `GrungeHeading.tsx`**

```tsx
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export function GrungeHeading({
  children,
  className,
  as: As = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <As
      className={cn(
        "font-[family-name:var(--font-grunt)] font-black leading-[0.95] tracking-[-0.03em]",
        className,
      )}
    >
      {children}
    </As>
  );
}

export const NeonGradientText = ({ children }: { children: ReactNode }) => (
  <span className="bg-[linear-gradient(90deg,#ff0080,#00c8ff)] bg-clip-text text-transparent">
    {children}
  </span>
);
```

- [ ] **Step 4: 커밋**

```bash
git add -A
git commit -m "feat: ui primitives (SectionIndex, NeonButton, GrungeHeading)"
```

---

### Task 5: 레이아웃 — FloatingHeader + ScrollProgress + Footer

**Files:**
- Create: `components/layout/FloatingHeader.tsx`
- Create: `components/layout/ScrollProgress.tsx`
- Create: `components/layout/Footer.tsx`

- [ ] **Step 1: `FloatingHeader.tsx`**

스크롤 시 배경 블러 적용. `BPM` 로고, 앵커 메뉴 4개, 전화 CTA.

```tsx
"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

const NAV = [
  { href: "#about", label: "ABOUT" },
  { href: "#class", label: "CLASS" },
  { href: "#instructor", label: "INSTRUCTOR" },
  { href: "#visit", label: "VISIT" },
];

export function FloatingHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "backdrop-blur-md bg-black/60 border-b border-white/5" : "",
      )}
    >
      <div className="flex items-center justify-between px-6 md:px-10 py-4">
        <a href="#top" className="font-[family-name:var(--font-grunt)] text-xl tracking-tight">
          BPM
        </a>
        <nav className="hidden md:flex gap-6 text-[11px] tracking-[0.2em] text-white/80">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-white">{n.label}</a>
          ))}
        </nav>
        <a
          href="tel:01046374987"
          className="rounded-full bg-[linear-gradient(90deg,#ff0080,#00c8ff)] px-4 py-2 text-[10px] font-bold tracking-[0.15em]"
        >
          📞 010-4637-4987
        </a>
      </div>
    </header>
  );
}
```

- [ ] **Step 2: `ScrollProgress.tsx`**

```tsx
"use client";
import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 w-px h-36 bg-white/10 hidden md:block">
      <motion.div
        style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
        className="w-full h-full bg-[linear-gradient(180deg,#ff0080,#00c8ff)]"
      />
    </div>
  );
}
```

- [ ] **Step 3: `Footer.tsx`**

4열 (BPM 로고 · MENU · CONTACT · FOLLOW) + 하단 저작권.

```tsx
export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 px-6 md:px-14 py-12 text-white/50 text-xs">
      <div className="flex flex-col md:flex-row md:justify-between gap-10">
        <div>
          <div className="font-[family-name:var(--font-grunt)] text-5xl text-white tracking-tight">BPM</div>
          <div className="mt-1 font-mono text-[11px] tracking-[0.25em] text-[color:var(--color-neon-pink)]">
            MUSIC STUDIO · DAEJEON
          </div>
        </div>
        <Col title="MENU" items={["About", "Class", "Instructor", "Visit"]} />
        <Col title="CONTACT" items={["010-4637-4987", "대전 서구 둔산로 223", "대성하이빌 1112호"]} />
        <Col title="FOLLOW" items={["Instagram", "YouTube", "SoundCloud"]} />
      </div>
      <div className="mt-8 pt-5 border-t border-white/5 flex flex-col md:flex-row justify-between font-mono tracking-[0.15em]">
        <span>© BPM MUSIC STUDIO · ALL RIGHTS RESERVED</span>
        <span>WEBSITE / 2026</span>
      </div>
    </footer>
  );
}

function Col({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="text-white font-bold tracking-[0.25em] mb-3 text-[11px]">{title}</div>
      <ul className="space-y-1.5 leading-relaxed">
        {items.map((i) => <li key={i}>{i}</li>)}
      </ul>
    </div>
  );
}
```

- [ ] **Step 4: 커밋**

```bash
git add -A
git commit -m "feat: layout components (header, scroll progress, footer)"
```

---

### Task 6: BPMSignature — 텍스처드 레터 컴포넌트

**Files:**
- Create: `components/ui/BPMSignature.tsx`

- [ ] **Step 1: 구현**

3개 레터 (B/P/M), 각자 다른 텍스처(이미지 또는 CSS 패턴), 히어로 시퀀스에 쓰일 motion variant 연결.

```tsx
"use client";
import { motion } from "framer-motion";
import { heroLetter } from "@/lib/motion";

const LETTERS: { ch: string; style: React.CSSProperties }[] = [
  {
    ch: "B",
    style: {
      backgroundImage: "url(/images/bpm/texture-vinyl.webp)",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },
  {
    ch: "P",
    style: { background: "linear-gradient(135deg, #ff0080, #00c8ff)" },
  },
  {
    ch: "M",
    style: {
      background:
        "url(/images/bpm/texture-pcb.webp) center/cover, repeating-linear-gradient(45deg,#1a3a1a 0 8px,#2a5a2a 8px 16px)",
    },
  },
];

export function BPMSignature() {
  return (
    <div className="absolute right-[-30px] top-1/2 -translate-y-1/2 flex gap-0.5 opacity-90 pointer-events-none select-none">
      {LETTERS.map((l, i) => (
        <motion.span
          key={l.ch}
          custom={i}
          variants={heroLetter}
          initial="hidden"
          animate="show"
          className="font-[family-name:var(--font-grunt)] text-[200px] leading-[0.85] tracking-[-0.08em] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,0,128,0.4)]"
          style={l.style}
        >
          {l.ch}
        </motion.span>
      ))}
    </div>
  );
}
```

> 이미지 없으면 fallback으로 gradient만. Task 11에서 실제 에셋 교체.

- [ ] **Step 2: 커밋**

```bash
git add -A
git commit -m "feat: BPMSignature textured letter component"
```

---

### Task 7: Hero 섹션

**Files:**
- Create: `components/sections/Hero.tsx`

- [ ] **Step 1: 구조 구현**

- 좌측: eyebrow / 헤드라인 (글자 단계 애니메이션) / 메타 / 서브카피 / CTA 2개
- 우측: KNDRX 포트레이트 (next/image) + rim-light
- 배경: gradient pulse + grid + BPMSignature
- 좌상단: 라이브 칩 / 좌하단: 스크롤 힌트

```tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { BPMSignature } from "@/components/ui/BPMSignature";
import { NeonButton } from "@/components/ui/NeonButton";
import { GrungeHeading, NeonGradientText } from "@/components/ui/GrungeHeading";
import { EASE } from "@/lib/motion";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-[#050505]">
      {/* bg pulses */}
      <div
        className="absolute inset-0 pointer-events-none animate-[pulse_4s_ease-in-out_infinite]"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(255,0,128,0.35), transparent 45%)," +
            "radial-gradient(circle at 80% 70%, rgba(0,200,255,0.3), transparent 50%)," +
            "radial-gradient(circle at 50% 50%, rgba(180,50,255,0.15), transparent 60%)",
        }}
      />
      {/* grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* LIVE chip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.4 }}
        className="absolute top-24 left-6 md:left-14 z-10 inline-flex items-center gap-1.5 rounded-full border border-[rgba(255,0,128,0.5)] px-2.5 py-1 font-mono text-[9px] tracking-[0.2em] text-[color:var(--color-neon-pink)]"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-neon-pink)] animate-pulse" />
        BPM STUDIO · DAEJEON
      </motion.div>

      <div className="relative z-10 flex items-center min-h-screen px-6 md:px-14">
        <div className="grid md:grid-cols-[1fr_340px] gap-10 items-center w-full">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.4, ease: EASE }}
              className="text-[11px] tracking-[0.4em] text-[color:var(--color-neon-cyan)] font-semibold mb-4"
            >
              DAEJEON · HIP-HOP DJ ACADEMY
            </motion.div>

            <GrungeHeading
              as="h1"
              className="text-[68px] md:text-[92px] leading-[0.88] text-white [text-shadow:0_0_40px_rgba(255,0,128,0.25)]"
            >
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.8, ease: EASE }}
                className="inline-block [-webkit-text-stroke:1.5px_#fff] text-transparent"
              >
                FEEL
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 2.0, ease: EASE }}
                className="inline-block"
              >
                THE
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 2.2, ease: EASE }}
                className="inline-block"
              >
                <NeonGradientText>BEAT.</NeonGradientText>
              </motion.span>
            </GrungeHeading>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.4 }}
              className="flex gap-3.5 text-[11px] tracking-[0.25em] text-white/60 mt-5 mb-5 font-mono"
            >
              <span>// DJ KNDRX</span>
              <span>// 1:1 LESSON</span>
              <span>// SINCE 2010</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.5 }}
              className="text-white/70 text-[14px] leading-relaxed max-w-[440px] mb-7"
            >
              턴테이블 앞에 앉아본 적 없어도 괜찮습니다.<br />
              BPM 뮤직 스튜디오에서 제대로 시작하세요.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.6 }}
              className="flex gap-3"
            >
              <NeonButton href="#visit" variant="primary">상담 문의 →</NeonButton>
              <NeonButton href="#class" variant="ghost">클래스 둘러보기</NeonButton>
            </motion.div>
          </div>

          {/* portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, delay: 1.3, ease: EASE }}
            className="relative w-full max-w-[340px] aspect-[3/4] rounded overflow-hidden justify-self-center md:justify-self-end shadow-[0_0_0_1px_rgba(255,0,128,0.3),0_0_60px_rgba(0,200,255,0.2),inset_0_0_40px_rgba(0,0,0,0.5)]"
          >
            <Image
              src="/images/kndrx/01.webp"
              alt="DJ KNDRX"
              fill
              priority
              sizes="(min-width:768px) 340px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
            <div className="absolute bottom-5 left-5 font-mono text-[10px] text-[color:var(--color-neon-cyan)] tracking-[0.2em]">
              SINCE 2010
              <div className="font-[family-name:var(--font-grunt)] text-white text-[22px] mt-1">DJ KNDRX</div>
            </div>
          </motion.div>
        </div>
      </div>

      <BPMSignature />

      {/* scroll hint */}
      <div className="absolute bottom-6 left-6 md:left-14 flex items-center gap-2.5 text-white/40 text-[10px] tracking-[0.3em] font-mono">
        <span className="w-10 h-px bg-[linear-gradient(90deg,#00c8ff,transparent)]" />
        SCROLL
      </div>
    </section>
  );
}
```

- [ ] **Step 2: `app/page.tsx`에 Hero 배치**

```tsx
import { Hero } from "@/components/sections/Hero";
import { FloatingHeader } from "@/components/layout/FloatingHeader";
import { ScrollProgress } from "@/components/layout/ScrollProgress";

export default function Page() {
  return (
    <>
      <FloatingHeader />
      <ScrollProgress />
      <main>
        <Hero />
      </main>
    </>
  );
}
```

- [ ] **Step 3: 브라우저 확인**

`npm run dev` → 히어로 시네마틱 시퀀스 동작, 포트레이트 자리에 이미지 (없으면 broken icon — Task 11에서 에셋 주입).

- [ ] **Step 4: 커밋**

```bash
git add -A
git commit -m "feat: hero section with cinematic motion"
```

---

### Task 8: About 섹션

**Files:**
- Create: `components/sections/About.tsx`

- [ ] **Step 1: 구현**

```tsx
"use client";
import { motion } from "framer-motion";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { GrungeHeading, NeonGradientText } from "@/components/ui/GrungeHeading";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const PILLARS = [
  {
    num: "01",
    icon: "🎧",
    title: "1:1 맞춤 레슨",
    desc: "힙합 DJ, 프로듀싱, 턴테이블리즘. 취미부터 프로 데뷔까지 방향에 맞춰 커리큘럼을 조정합니다. 최대 2:1.",
    tag: "PRIVATE · MAX 2:1",
  },
  {
    num: "02",
    icon: "🔊",
    title: "실제 무대 경험",
    desc: "정기적으로 열리는 BPM DJ 파티에 수강생이 직접 플레이할 기회를 제공합니다. 레슨만으로 끝나지 않습니다.",
    tag: "LIVE · REAL STAGE",
  },
  {
    num: "03",
    icon: "💬",
    title: "커뮤니티 & 네트워킹",
    desc: "DJ, 프로듀서, 래퍼 & 크리에이터들이 자연스럽게 연결되는 공간. 같은 취향의 사람들과 함께 성장합니다.",
    tag: "CONNECT · GROW",
  },
];

export function About() {
  return (
    <section id="about" className="relative bg-[#0a0a0a] px-6 md:px-14 py-20 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 100% 0%, rgba(0,200,255,0.12), transparent 40%)," +
            "radial-gradient(circle at 0% 100%, rgba(255,0,128,0.1), transparent 40%)",
        }}
      />
      <div className="relative">
        <SectionIndex num="01" label="ABOUT" />
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-16">
          <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={stagger}>
            <GrungeHeading className="text-[48px] md:text-[60px]">
              <motion.span variants={fadeUp} className="text-white/25 block">힙합의 한가운데,</motion.span>
              <motion.span variants={fadeUp} className="block">
                현업 DJ에게 <NeonGradientText>직접.</NeonGradientText>
              </motion.span>
            </GrungeHeading>
          </motion.div>
          <motion.p
            initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeUp}
            className="max-w-[420px] text-white/60 text-[15px] leading-relaxed"
          >
            BPM 뮤직 스튜디오는 대전의 힙합 DJ 레슨 공간입니다. 현업에서 뛰는 DJ가 전담으로 가르치고, 수강생은 실제 무대에 올라 경험을 쌓습니다.
          </motion.p>
        </div>

        <motion.div
          initial="hidden" whileInView="show" viewport={viewportOnce} variants={stagger}
          className="grid md:grid-cols-3 border-t border-white/10"
        >
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.num}
              variants={fadeUp}
              className={`px-8 py-10 ${i < 2 ? "md:border-r border-white/10" : ""} hover:bg-white/[0.02] transition`}
            >
              <div className="font-[family-name:var(--font-grunt)] text-[14px] text-[color:var(--color-neon-pink)] tracking-[0.2em] mb-5">{p.num}</div>
              <div className="w-14 h-14 rounded-full bg-[linear-gradient(135deg,rgba(255,0,128,0.15),rgba(0,200,255,0.15))] border border-[rgba(255,0,128,0.3)] flex items-center justify-center mb-7 text-2xl">{p.icon}</div>
              <h3 className="font-[family-name:var(--font-grunt)] text-2xl mb-3.5">{p.title}</h3>
              <p className="text-white/55 text-[13px] leading-relaxed">{p.desc}</p>
              <span className="inline-block mt-4 px-2.5 py-0.5 rounded-full border border-white/15 font-mono text-[10px] tracking-[0.15em] text-white/40">{p.tag}</span>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-14 flex items-center gap-5 text-white/40 text-[11px] tracking-[0.3em] font-mono">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <span>— BPM MUSIC STUDIO / DAEJEON —</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: `app/page.tsx`에 추가, 확인, 커밋**

```bash
git add -A && git commit -m "feat: about section (3 pillars)"
```

---

### Task 9: Class 섹션

**Files:**
- Create: `components/sections/Class.tsx`

- [ ] **Step 1: 구현**

좌측 커리큘럼 5단계, 우측 장비 쇼케이스, 하단 DJ Class(오픈) + MIC Class(Coming Soon) 카드.

```tsx
"use client";
import { motion } from "framer-motion";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { GrungeHeading, NeonGradientText } from "@/components/ui/GrungeHeading";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const CURRICULUM = [
  { n: "01", t: "DJ의 역사와 개념", d: "힙합 DJ의 주요 개념과 역사적 배경을 익힙니다." },
  { n: "02", t: "장비 구조 & 작동 원리", d: "턴테이블/믹서 구조, 기능, 작동 원리를 손으로 직접." },
  { n: "03", t: "Serato DJ PRO", d: "전문 DJ 소프트웨어 운용과 디지털 믹싱 이해." },
  { n: "04", t: "곡 분석 · DJ의 귀", d: "비트, 장르, 구성 요소를 DJ 관점에서 분석하는 법." },
  { n: "05", t: "직접 믹스하기", d: "나만의 음악을 직접 믹스. 실전 감각까지." },
];

const GEAR = [
  { name: "Technics SL-1200MK7", spec: "TURNTABLE · DIRECT DRIVE", qty: "×2" },
  { name: "Pioneer DJM-S11", spec: "BATTLE MIXER · SCRATCH", qty: "×1" },
];

export function Class() {
  return (
    <section id="class" className="bg-[#0a0a0a] px-6 md:px-14 py-20 border-t border-white/5">
      <SectionIndex num="02" label="CLASS" />

      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-16">
        <GrungeHeading className="text-[48px] md:text-[56px]">
          <span className="text-white/25 block">레슨은</span>
          <span className="block">사람마다 <NeonGradientText>다르게.</NeonGradientText></span>
        </GrungeHeading>
        <p className="max-w-[520px] text-white/60 text-[15px] leading-relaxed">
          DJ Class는 1:1 (또는 최대 2:1) 맞춤 레슨입니다. 취미든 프로 데뷔든, 5단계 커리큘럼 기반 위에서 방향에 맞춰 조정됩니다.
        </p>
      </div>

      <motion.div
        initial="hidden" whileInView="show" viewport={viewportOnce} variants={stagger}
        className="grid md:grid-cols-[1.3fr_1fr] gap-8 mb-10"
      >
        {/* curriculum */}
        <motion.div variants={fadeUp} className="border border-white/10 rounded-md p-7 bg-white/[0.015]">
          <div className="font-mono text-[12px] tracking-[0.3em] text-[color:var(--color-neon-cyan)] mb-5">CURRICULUM · 5 STEPS</div>
          <div>
            {CURRICULUM.map((s, i) => (
              <div key={s.n} className={`flex gap-4 py-4 ${i < CURRICULUM.length - 1 ? "border-b border-dashed border-white/10" : ""}`}>
                <div className="font-[family-name:var(--font-grunt)] text-3xl text-[color:var(--color-neon-pink)] leading-none shrink-0 w-11">{s.n}</div>
                <div>
                  <div className="font-bold text-[15px] mb-1">{s.t}</div>
                  <div className="text-white/55 text-[12px] leading-relaxed">{s.d}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* gear */}
        <motion.div variants={fadeUp} className="border border-white/10 rounded-md p-7 bg-white/[0.015]">
          <div className="font-mono text-[12px] tracking-[0.3em] text-[color:var(--color-neon-cyan)] mb-4">GEAR · PRO-GRADE</div>
          {GEAR.map((g) => (
            <div key={g.name} className="flex justify-between items-center py-4 border-b border-white/10 last:border-none">
              <div>
                <div className="font-bold text-[14px]">{g.name}</div>
                <div className="text-white/50 text-[11px] tracking-wide mt-1">{g.spec}</div>
              </div>
              <div className="font-[family-name:var(--font-grunt)] text-[22px] bg-[linear-gradient(90deg,#ff0080,#00c8ff)] bg-clip-text text-transparent">{g.qty}</div>
            </div>
          ))}
          <div className="mt-5 pt-5 border-t border-dashed border-white/10 text-[12px] text-white/55 leading-relaxed">
            입문용이 아닌 실전 프로 DJ들이 쓰는 최고급 구성. 장비에 대한 감각까지 같이 키워집니다.
          </div>
        </motion.div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-7 rounded-md border border-white/10 bg-[linear-gradient(135deg,rgba(255,0,128,0.08),transparent)]">
          <div className="font-mono text-[10px] tracking-[0.3em] text-[color:var(--color-neon-pink)] mb-3">▸ NOW OPEN</div>
          <h3 className="font-[family-name:var(--font-grunt)] text-2xl mb-2.5">DJ Class</h3>
          <p className="text-white/55 text-[13px] mb-4">힙합 DJ · 1:1 / 최대 2:1 · 커리큘럼 기반</p>
          <a href="#visit" className="text-white/70 text-[12px] font-mono tracking-[0.15em]">자세히 보기 →</a>
        </div>
        <div className="p-7 rounded-md border border-dashed border-white/10 bg-white/[0.02] opacity-70">
          <div className="font-mono text-[10px] tracking-[0.3em] text-white/40 mb-3">COMING SOON</div>
          <h3 className="font-[family-name:var(--font-grunt)] text-2xl mb-2.5">MIC Class</h3>
          <p className="text-white/55 text-[13px] mb-4">프로듀싱 · 작곡 · 랩</p>
          <div className="text-white/40 text-[12px] font-mono tracking-[0.15em]">준비 중</div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: page.tsx 추가, 확인, 커밋**

```bash
git add -A && git commit -m "feat: class section (curriculum + gear + cards)"
```

---

### Task 10: Instructor 섹션

**Files:**
- Create: `components/sections/Instructor.tsx`

- [ ] **Step 1: 구현**

좌측 포트레이트(2번 사진), 우측 바이오 + 타임라인.

```tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const TIMELINE = [
  { year: "2010~", desc: "힙합 DJ 데뷔 / 현역 활동 시작" },
  { year: "BACKUP", desc: "BewhY · JUSTHIS · 쿤디판다 백업 DJ" },
  { year: "CLUBS", desc: "브루클린 · 파이프 · Mhood 설립 / 운영" },
  { year: "WORKS", desc: "JJK · UNTELL 등 언더그라운드 래퍼 앨범 작업" },
];

export function Instructor() {
  return (
    <section id="instructor" className="bg-[#0a0a0a] px-6 md:px-14 py-20 border-t border-white/5">
      <SectionIndex num="03" label="INSTRUCTOR" />

      <motion.div
        initial="hidden" whileInView="show" viewport={viewportOnce} variants={stagger}
        className="grid md:grid-cols-[440px_1fr] gap-12 items-center"
      >
        <motion.div
          variants={fadeUp}
          className="relative w-full aspect-[3/4] rounded-md overflow-hidden shadow-[0_0_0_1px_rgba(255,0,128,0.3),0_0_60px_rgba(0,200,255,0.15)]"
        >
          <Image
            src="/images/kndrx/02.webp"
            alt="DJ KNDRX 강사 포트레이트"
            fill
            sizes="(min-width:768px) 440px, 100vw"
            className="object-cover"
          />
        </motion.div>
        <motion.div variants={fadeUp}>
          <div className="font-mono text-[12px] tracking-[0.25em] text-[color:var(--color-neon-pink)] mb-4">MEET THE INSTRUCTOR</div>
          <h2 className="font-[family-name:var(--font-grunt)] text-[64px] md:text-[72px] leading-[0.95] tracking-[-0.03em] mb-2">DJ KNDRX</h2>
          <div className="font-mono text-[12px] tracking-[0.25em] text-[color:var(--color-neon-pink)] mb-6">16 YRS · SINCE 2010</div>
          <p className="text-white/65 text-[14px] leading-relaxed mb-7 max-w-[560px]">
            2010년부터 활동해온 베테랑 힙합 DJ. BewhY, JUSTHIS, 쿤디판다 등 메이저 래퍼들의 백업 DJ로 활약했으며, 클럽 브루클린 · 파이프 · Mhood 설립 및 운영. JJK · UNTELL 등 언더그라운드 래퍼 앨범 작업 다수.
          </p>
          <div className="border-t border-white/10 pt-6">
            {TIMELINE.map((t, i) => (
              <div key={t.year} className={`grid grid-cols-[72px_1fr] gap-5 py-3 ${i < TIMELINE.length - 1 ? "border-b border-dashed border-white/10" : ""}`}>
                <div className="font-[family-name:var(--font-grunt)] text-[color:var(--color-neon-cyan)] text-[14px]">{t.year}</div>
                <div className="text-white/80 text-[13px] leading-relaxed">{t.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: page.tsx 추가, 확인, 커밋**

```bash
git add -A && git commit -m "feat: instructor section with timeline"
```

---

### Task 11: Visit 섹션

**Files:**
- Create: `components/sections/Visit.tsx`

- [ ] **Step 1: 구현**

네이버 지도 iframe + 주소/연락 카드 2개.

```tsx
"use client";
import { motion } from "framer-motion";
import { SectionIndex } from "@/components/ui/SectionIndex";
import { GrungeHeading, NeonGradientText } from "@/components/ui/GrungeHeading";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const NAVER_MAP_QUERY = encodeURIComponent("대전 서구 둔산로 223 대성하이빌 1112호");
const MAP_SRC = `https://map.naver.com/p/search/${NAVER_MAP_QUERY}`;

export function Visit() {
  return (
    <section id="visit" className="bg-[#0a0a0a] px-6 md:px-14 py-20 border-t border-white/5">
      <SectionIndex num="04" label="VISIT" />

      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-12">
        <GrungeHeading className="text-[48px] md:text-[56px]">
          <span className="text-white/25">와서</span> <NeonGradientText>만져보세요.</NeonGradientText>
        </GrungeHeading>
        <p className="max-w-[480px] text-white/60 text-[15px] leading-relaxed">
          전화로 일정 문의 후 방문 가능합니다. 직접 장비를 만져보고 레슨 분위기를 확인해보세요.
        </p>
      </div>

      <motion.div
        initial="hidden" whileInView="show" viewport={viewportOnce} variants={stagger}
        className="grid md:grid-cols-[1fr_380px] gap-10"
      >
        <motion.a
          variants={fadeUp}
          href={MAP_SRC}
          target="_blank"
          rel="noopener noreferrer"
          className="relative aspect-[16/11] rounded-md border border-white/10 overflow-hidden block group"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,0,128,0.1), transparent)," +
              "repeating-linear-gradient(0deg, #0f0f0f 0 40px, #121212 40px 80px)," +
              "repeating-linear-gradient(90deg, #0f0f0f 0 40px, #121212 40px 80px)",
          }}
        >
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[radial-gradient(circle,#ff0080,transparent_70%)] flex items-center justify-center text-xl animate-pulse">📍</span>
          <span className="absolute bottom-4 left-4 font-mono text-[10px] text-white/40 tracking-[0.2em] group-hover:text-white/70 transition">
            BPM MUSIC STUDIO · 네이버 지도에서 보기 →
          </span>
        </motion.a>

        <div className="flex flex-col gap-4">
          <motion.div
            variants={fadeUp}
            className="p-7 rounded-md border border-white/10 bg-[linear-gradient(135deg,rgba(255,0,128,0.05),rgba(0,200,255,0.05))]"
          >
            <div className="font-mono text-[11px] tracking-[0.3em] text-[color:var(--color-neon-cyan)] mb-2">ADDRESS</div>
            <p className="text-white text-[15px] leading-relaxed mb-5">대전 서구 둔산로 223<br />대성하이빌 1112호</p>
            <div className="font-mono text-[11px] tracking-[0.3em] text-[color:var(--color-neon-cyan)] mb-2">HOURS</div>
            <p className="text-white text-[15px] leading-relaxed">전화로 일정 문의 후 방문</p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="p-7 rounded-md border border-white/10 bg-[linear-gradient(135deg,rgba(255,0,128,0.05),rgba(0,200,255,0.05))]"
          >
            <div className="font-mono text-[11px] tracking-[0.3em] text-[color:var(--color-neon-cyan)] mb-2">CALL · TEXT</div>
            <div className="font-[family-name:var(--font-grunt)] text-[28px] bg-[linear-gradient(90deg,#ff0080,#00c8ff)] bg-clip-text text-transparent">010-4637-4987</div>
            <div className="text-white/50 text-[12px] mt-2">전화/문자 모두 가능</div>
            <a href="tel:01046374987" className="inline-block mt-4 bg-white text-black rounded-full px-6 py-3.5 font-extrabold text-[13px] tracking-[0.1em]">📞 바로 전화</a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: page.tsx 추가, 확인, 커밋**

```bash
git add -A && git commit -m "feat: visit section with map + contact"
```

---

### Task 12: 에셋 배치 (사진 · BPM 텍스처 · 폰트)

**Files:**
- Create: `public/images/kndrx/01.webp` ~ `05.webp`
- Create: `public/images/bpm/texture-vinyl.webp`, `texture-pcb.webp`
- Create: `public/fonts/Grunt.woff2` (사용자 제공 시)

- [ ] **Step 1: 사용자 제공 5장 이미지 변환·저장**

사용자가 이미지를 전달한 방식에 따라 처리. 제공된 5장을 `01.webp ~ 05.webp`로 WebP 저장. 임시로는 제공된 파일 그대로 `.jpg` 저장 후 파일명에 맞게 링크.

- [ ] **Step 2: BPM 텍스처 이미지**

사용자가 보낸 3종 BPM 레터(바이닐/CD/회로기판) 중 원본 이미지를 `public/images/bpm/` 아래에 저장.

- [ ] **Step 3: Grunt 폰트 파일**

`.ttf` 또는 `.otf` 파일 제공 시 woff2로 변환(`npx woff2-cli` 또는 온라인 변환) 후 `public/fonts/Grunt.woff2`로 저장.

- [ ] **Step 4: 시각 확인**

`npm run dev` → 히어로 포트레이트, Instructor 포트레이트, BPM 시그니처, Grunt 헤드라인 모두 정상 렌더링.

- [ ] **Step 5: 커밋**

```bash
git add -A && git commit -m "chore: add image + font assets"
```

---

### Task 13: 반응형 마감

**Files:**
- Modify: 필요 시 각 섹션 tsx

- [ ] **Step 1: 모바일(~768) 검증**

- 히어로: 포트레이트가 카피 아래로. BPM 시그니처 크기 축소 또는 숨김.
- About 3 필러: 세로 스택, 디바이더 조정.
- Class 2열: 단열로.
- Instructor: 사진 위, 바이오 아래.
- Visit: 지도 위, 연락 카드 아래.
- Header 내비 메뉴: `hidden md:flex` (모바일에선 로고 + 전화 CTA만).

- [ ] **Step 2: 태블릿(768~1024) 검증**

- About 3 필러 가로 유지.
- 나머지 데스크톱 레이아웃 적용.

- [ ] **Step 3: BPM Signature 모바일 대응**

Hero 컴포넌트에서 `hidden sm:flex` 또는 크기 축소 (`text-[120px]`)로 모바일 파랄랙스 부담 감소.

- [ ] **Step 4: 커밋**

```bash
git add -A && git commit -m "fix: responsive breakpoints pass"
```

---

### Task 14: 모션 폴리시 & 접근성

**Files:**
- Modify: `app/globals.css`, 각 섹션

- [ ] **Step 1: `prefers-reduced-motion` 확인**

Task 2의 글로벌 CSS에 이미 반영됨. Framer Motion 개별 컴포넌트도 `useReducedMotion` 훅으로 heroLetter 등 강한 모션 비활성화.

```ts
// lib/motion.ts에 추가
import { useReducedMotion } from "framer-motion";
export const useShouldAnimate = () => !useReducedMotion();
```

Hero.tsx에서 시네마틱 시퀀스를 감싸기.

- [ ] **Step 2: 키보드 포커스 스타일**

`globals.css`에 추가:

```css
:focus-visible {
  outline: 2px solid var(--color-neon-cyan);
  outline-offset: 3px;
}
```

- [ ] **Step 3: 이미지 alt 재점검**

포트레이트 2장, BPM 레터는 decorative이므로 `aria-hidden="true"`.

- [ ] **Step 4: 커밋**

```bash
git add -A && git commit -m "chore: a11y + reduced motion polish"
```

---

### Task 15: 최종 QA

- [ ] **Step 1: Lighthouse**

Chrome DevTools → Lighthouse → Performance, Accessibility, Best Practices 실행. Performance 80+, Accessibility 90+ 확인.

- [ ] **Step 2: 콘솔 에러 0건**

- [ ] **Step 3: 링크 동작**

`#about` `#class` `#instructor` `#visit` 앵커 스크롤, `tel:` 링크, 네이버 지도 외부 링크.

- [ ] **Step 4: AI 클리셰 검색**

```bash
grep -rE "(짜릿한|여정|꿈꾸던|함께 만들|새로운 세계|첫걸음)" components/ app/ || echo "clean"
```

출력: `clean`이 나와야 통과.

- [ ] **Step 5: 최종 커밋**

```bash
git add -A && git commit -m "chore: final QA pass"
```

---

## Self-Review 체크리스트 (계획 검수)

- ✅ 스펙의 모든 섹션 → Task 7-11 매핑
- ✅ 히어로 모션 시퀀스 → Task 7에 타이밍 명시 (1.4s eyebrow → 1.8-2.2s headline → 2.4-2.6s meta/sub/cta)
- ✅ 반응형 / 접근성 → Task 13-14
- ✅ 에셋 누락 리스크 → Task 12에서 명시 처리
- ✅ 금칙어 자동 점검 → Task 15 Step 4
- ⚠ 개방 이슈: 강사 바이오 원문 일부, SNS 실제 링크, 수업료 공개 여부 — 구현 중 사용자 확인 필요
