# BPM 뮤직 스튜디오 랜딩 — 설계 문서

**작성일:** 2026-04-15
**상태:** 브레인스토밍 완료 → 구현 대기

---

## 1. 개요

BPM 뮤직 스튜디오(대전)의 DJ 레슨 랜딩 페이지. 소속 DJ인 **DJ KNDRX**가 전담으로 가르치는 1:1 힙합 DJ 클래스를 중심으로, 비기너 수강생 유입을 목표로 한다.

**핵심 목표**
- 비기너의 진입 장벽 낮추기 (CTA: 상담 문의 · 전화)
- 고급스러운 시각적 인상(= "1억짜리")으로 신뢰감 형성
- 스튜디오 소속 DJ의 전문성 전달

**1차 성공 지표**
- 전화 / 문자 문의 전환율

---

## 2. 브랜드 &amp; 비주얼

| 항목 | 값 |
|---|---|
| 방향성 | **네온 사이버 (Dark Neon)** — 딥블랙 + 네온 핑크/시안 + 글리치 |
| 영문 헤드라인 | **Grunt** (Evgeniy Artsebasov, 무료 상업 사용) |
| 한글 본문 | **Pretendard** (한글 가변 폰트) |
| 주요 컬러 | `#050505` / `#0a0a0a` (배경), `#ff0080` (네온 핑크), `#00c8ff` (네온 시안), `#fff` (텍스트) |
| 시그니처 에셋 | **BPM 텍스처드 레터** (바이닐 / CD / 회로기판) — 히어로에서 애니메이션으로 조립됨 |
| 사진 | DJ KNDRX 실사 5장 (블루 네온 부스 · 스튜디오 · 공연) |

**카피 톤 원칙**
- 팩트 중심, 쿨하고 담백하게
- 금칙어: "짜릿한", "여정", "새로운 세계", "꿈꾸던", "함께 만들어가는", "첫걸음", "경험하세요" 등 AI/광고 클리셰

---

## 3. 정보 구조

```
[0] HERO           풀스크린 · BPM 레터 시네마틱 · KNDRX 포트레이트
[1] ABOUT          한 줄 임팩트 + 3 필러(1:1 레슨 / 무대 경험 / 커뮤니티)
[2] CLASS          DJ Class 5단계 커리큘럼 + 장비 쇼케이스 + MIC Class(Coming Soon)
[3] INSTRUCTOR     DJ KNDRX 포트레이트 + 경력 타임라인
[4] VISIT          네이버 지도 임베드 + 주소/전화 카드 (최종 CTA)
[5] FOOTER         미니멀 4열 (브랜드 / 메뉴 / 연락처 / SNS)
```

**플로팅 헤더:** BPM 로고 + 앵커 메뉴(About/Class/Instructor/Visit) + 전화 CTA 버튼. 스크롤 시 배경 블러.
**우측 스크롤 진행바:** `useScroll` 기반 얇은 네온 그라디언트 바.

---

## 4. 섹션별 상세

### 4.1 히어로
- 좌측: eyebrow `DAEJEON · HIP-HOP DJ ACADEMY` / 헤드라인 `FEEL THE BEAT.` (Grunt) / 메타 `DJ KNDRX // 1:1 LESSON // SINCE 2010` / 서브카피 2줄 / CTA 2개(`상담 문의` 주 / `클래스 둘러보기` 보조)
- 우측: KNDRX 포트레이트(1번 사진 · 블루 네온 부스) + 네온 림라이트 + `SINCE 2010 / DJ KNDRX` 태그
- 배경: BPM 거대 레터 3개 (B=바이닐 텍스처, P=네온 그라디언트, M=회로기판 텍스처) — 우측에 걸침
- 상단: 라이브 칩 `BPM STUDIO · DAEJEON`
- 하단: 스크롤 힌트

**모션 시퀀스 (Framer Motion)**
1. `0.0~0.5s` 블랙 → 네온 그라디언트 번짐 (radial pulse)
2. `0.5~1.5s` BPM 레터 3개 비트 타이밍에 맞춰 drop-in (stagger 0.2s)
3. `1.3~2.0s` KNDRX 포트레이트 scale 1.05→1, rim-light fade-in
4. `1.8~2.4s` 헤드라인 글자 단위 슬라이드업
5. `2.2~2.7s` 서브카피 + CTA fade-in
6. 지속: BPM 레터 미세 float / 그라디언트 pulse / LIVE 칩 점멸
7. 스크롤 시: BPM 레터 parallax, 히어로 opacity 감소

### 4.2 ABOUT
- 섹션 인덱스 `01 / ABOUT` + draw-in line
- 헤드라인: `힙합의 한가운데, / 현업 DJ에게 직접.` (마지막 단어 그라디언트)
- 리드: `BPM 뮤직 스튜디오는 대전의 힙합 DJ 레슨 공간입니다. 현업에서 뛰는 DJ가 전담으로 가르치고, 수강생은 실제 무대에 올라 경험을 쌓습니다.`
- 3 필러(동일한 스타일 카드, 세로 디바이더):
  1. `1:1 맞춤 레슨` — 힙합 DJ, 프로듀싱, 턴테이블리즘. 최대 2:1. 태그 `PRIVATE · MAX 2:1`
  2. `실제 무대 경험` — 정기 BPM DJ 파티에서 수강생 직접 플레이. 태그 `LIVE · REAL STAGE`
  3. `커뮤니티 & 네트워킹` — 크리에이터와 자연스럽게 연결. 태그 `CONNECT · GROW`
- 하단 accent line: `— BPM MUSIC STUDIO / DAEJEON —`

### 4.3 CLASS
- 섹션 인덱스 `02 / CLASS`
- 헤드라인: `레슨은 / 사람마다 다르게.`
- 리드: `DJ Class는 1:1 (또는 최대 2:1) 맞춤 레슨입니다. 취미든 프로 데뷔든, 5단계 커리큘럼 기반 위에서 방향에 맞춰 조정됩니다.`
- 2열 레이아웃:
  - 좌측(1.3fr): **커리큘럼 5단계 카드** — 01 DJ의 역사와 개념 / 02 장비 구조 &amp; 작동 원리 / 03 Serato DJ PRO / 04 곡 분석 · DJ의 귀 / 05 직접 믹스하기
  - 우측(1fr): **장비 쇼케이스** — Technics SL-1200MK7 ×2 / Pioneer DJM-S11 ×1 + 설명 한 줄
- 하단 2카드:
  - `DJ Class` (NOW OPEN) — `자세히 보기 →`
  - `MIC Class` (COMING SOON) — 프로듀싱 · 작곡 · 랩 · `준비 중`

### 4.4 INSTRUCTOR
- 섹션 인덱스 `03 / INSTRUCTOR`
- 2열 레이아웃 (좌 440px 포트레이트, 우 바이오)
- 좌측: KNDRX 포트레이트(2번 사진 · 스튜디오 부스), 네온 쉐도우
- 우측:
  - 메타 `MEET THE INSTRUCTOR`
  - 이름(Grunt 72px) `DJ KNDRX`
  - 메타 `16 YRS · SINCE 2010`
  - 바이오: 2010년 데뷔, BewhY/JUSTHIS/쿤디판다 백업 DJ, 클럽 브루클린·파이프·Mhood 설립 및 운영, JJK/UNTELL 등 언더그라운드 앨범 작업
  - 타임라인 4줄:
    - `2010~` 힙합 DJ 데뷔 / 현역 활동 시작
    - `BACKUP` BewhY · JUSTHIS · 쿤디판다 백업 DJ
    - `CLUBS` 브루클린 · 파이프 · Mhood 설립 / 운영
    - `WORKS` JJK · UNTELL 등 언더그라운드 래퍼 앨범 작업

> **메모:** 원문 텍스트 중 인코딩 깨진 구간(메인 멜로디 관련)은 최종 확인 필요. 추가 경력 나오면 타임라인 확장.

### 4.5 VISIT
- 섹션 인덱스 `04 / VISIT`
- 헤드라인: `와서 만져보세요.`
- 리드: `전화로 일정 문의 후 방문 가능합니다. 직접 장비를 만져보고 레슨 분위기를 확인해보세요.`
- 2열 (좌 지도, 우 카드)
- 좌측: 네이버 지도 임베드 (대전 서구 둔산로 223 대성하이빌 1112호) + pulse 핑 오버레이
- 우측 2카드:
  1. 주소 카드 — `ADDRESS / 대전 서구 둔산로 223 · 대성하이빌 1112호` + `HOURS / 전화로 일정 문의 후 방문`
  2. 연락 카드 — `CALL · TEXT / 010-4637-4987` (그라디언트 대형 표시) + `📞 바로 전화` CTA

### 4.6 FOOTER
- 4열 레이아웃: `BPM` 로고 + 태그 / MENU / CONTACT / FOLLOW
- 하단 구분선: © BPM MUSIC STUDIO · ALL RIGHTS RESERVED / WEBSITE / 2026

---

## 5. 기술 스택

| 레이어 | 선택 | 비고 |
|---|---|---|
| 프레임워크 | **Next.js (App Router)** | 사용자 요청 |
| 언어 | TypeScript | |
| 스타일 | **Tailwind CSS** | + `globals.css`에 커스텀 변수/@font-face |
| 애니메이션 | **Framer Motion** | 사용자 요청 |
| 폰트 | Grunt(로컬 번들) + Pretendard(웹 / Cloudflare CDN) | |
| 이미지 | `next/image` | 최적화 자동 |
| 지도 | 네이버 지도 임베드 (iframe) | |
| 폼/상담 | 1차: `tel:` / `sms:` 링크. 2차(선택): 추후 폼 추가 | |
| 배포 | Vercel (예상) | |

**파일 구조 (예정)**
```
app/
  layout.tsx
  page.tsx                    # 랜딩 한 장
  globals.css                 # 변수 · @font-face · Tailwind
components/
  layout/
    FloatingHeader.tsx
    ScrollProgress.tsx
    Footer.tsx
  sections/
    Hero.tsx
    About.tsx
    Class.tsx
    Instructor.tsx
    Visit.tsx
  ui/
    SectionIndex.tsx          # "01 / ABOUT" 스타일
    NeonButton.tsx
    BPMSignature.tsx          # 텍스처드 레터 컴포넌트
public/
  fonts/
    Grunt.woff2               # 사용자 제공 예정
  images/
    kndrx-01.webp ~ kndrx-05.webp
    bpm-logo.svg
    bpm-texture-vinyl.webp
    bpm-texture-cd.webp
    bpm-texture-pcb.webp
```

---

## 6. 모션 원칙 (전 섹션 공통)

- 모든 섹션은 `IntersectionObserver` 진입 시 한 번만 트리거 (`whileInView` + `viewport={{ once: true }}`)
- 공통 stagger: 자식 `staggerChildren: 0.08`
- 진입 기본 패턴: `opacity 0→1`, `y: 16→0`, `duration: 0.6`, `ease: [0.22, 1, 0.36, 1]`
- 섹션 헤드라인: 글자/단어 단위 단계 애니메이션
- 네온 그라디언트 텍스트: 진입 후 그라디언트가 좌→우 wipe-in
- 접근성: `prefers-reduced-motion` 존중 — 모션 제거 또는 최소화
- 모바일: 히어로 BPM 레터 파랄랙스 disable (GPU 부담), 섹션 모션은 유지

---

## 7. 반응형

| 브레이크포인트 | 주요 변경 |
|---|---|
| `< 768px` | 히어로 포트레이트 아래로 / BPM 레터 축소 / 3 필러 세로 스택 / 2열 섹션 모두 단열 |
| `768 ~ 1024px` | 3 필러 가로 유지, 히어로 레이아웃 조정 |
| `≥ 1024px` | 데스크톱 풀 레이아웃 |

---

## 8. 접근성 / 성능

- 색 대비: 본문 `#aaa` on `#0a0a0a` WCAG AA 통과 확인
- 네온 그라디언트 텍스트는 `aria-label` 또는 대체 텍스트 제공
- 이미지 `alt` 필수
- LCP 타깃: 히어로 포트레이트 `priority` + `next/image` 자동 preload
- 폰트 FOUT 최소화: Grunt `font-display: swap`

---

## 9. 열린 항목 (구현 중 결정)

- 강사 바이오 원문 일부 인코딩 복원 필요 → 텍스트 나오면 교체
- SNS 실제 링크 (Instagram / YouTube / SoundCloud) → 없으면 해당 열 숨김
- Grunt 폰트 파일(`.woff2`) → 사용자 제공 또는 스크립트로 변환
- MIC 클래스 공개 시점 → Coming Soon 티저 유지
- 수업료 공개 여부 → 지금은 미공개 (`자세히 보기`만)

---

## 10. 수용 기준 (완료 정의)

- ✅ 모든 섹션이 제공된 텍스트/사진을 사용해 렌더링됨
- ✅ 데스크톱·태블릿·모바일에서 깨지지 않음
- ✅ 히어로 시네마틱 시퀀스 60fps로 작동
- ✅ 전화 CTA 클릭 시 `tel:01046374987` 트리거
- ✅ 네이버 지도 임베드 동작
- ✅ Lighthouse Performance 80+, Accessibility 90+
- ✅ AI 클리셰 카피 0건 (금칙어 검색)
