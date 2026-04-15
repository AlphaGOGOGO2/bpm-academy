# BPM 뮤직 스튜디오 · DJ KNDRX Academy

대전 둔산동 BPM 뮤직 스튜디오 랜딩 페이지.
현업 힙합 DJ KNDRX의 1:1 DJ 레슨 소개.

## Stack

- **Next.js 15** (App Router) · TypeScript
- **Tailwind CSS v4**
- **Framer Motion** (인트로 시퀀스, 스크롤 트리거 모션)
- **next/font/google** — Bowlby One (display) / Fraunces (editorial) / IBM Plex Mono (메타)
- **Google Maps** `output=embed` iframe (API 키 불필요)

## 개발

```bash
npm install
npm run dev
```

로컬 서버 `http://localhost:3000`

## 빌드

```bash
npm run build
npm run start
```

## 구조

```
app/
  layout.tsx               # 루트 레이아웃 + 폰트
  page.tsx                 # 랜딩 페이지 조립
  globals.css              # Tailwind + 디자인 토큰
  icon.png                 # favicon
components/
  layout/
    FloatingHeader.tsx     # 스크롤 후 상단 플로팅 헤더
    IssueRail.tsx          # 좌측 매거진 레일
    Footer.tsx
    Marquee.tsx            # 섹션 간 티커
  sections/
    Hero.tsx               # 풀스크린 히어로
    About.tsx              # 트랙리스트 3필러
    Class.tsx              # 커리큘럼 + 장비 + Side A/B
    Instructor.tsx         # DJ KNDRX 소개 (크림 페이퍼)
    Visit.tsx              # 지도 + 연락
  ui/
    GrungeHeading.tsx
    NeonButton.tsx
    BPMSignature.tsx
    SectionIndex.tsx
    GrainOverlay.tsx
    SocialIcons.tsx
    VinylGrooves.tsx
lib/
  motion.ts                # Framer Motion variants
  cn.ts                    # clsx 래퍼
public/
  images/
    kndrx/                 # KNDRX 사진 5장
    logo/                  # BPM 로고 variants
  fonts/
    Grunt.otf              # (옵션) 진짜 Grunt 폰트
```

## 배포

Vercel에 git push 후 자동 배포. 프레임워크 자동 인식(Next.js).

## 주요 정보

- **주소** 대전 서구 대덕대로 223 대우토피아 1112호
- **전화** 010-4637-4987
