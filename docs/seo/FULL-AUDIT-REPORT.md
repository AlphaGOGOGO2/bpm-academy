# BPM 뮤직 스튜디오 · SEO 감사 보고서

**감사일:** 2026-04-15
**감사 대상:** https://bpm-academy.vercel.app/
**감사 방식:** 소스코드 + 라이브 페칭 (단일 페이지 랜딩)

---

## 📊 SEO Health Score

**기준일(감사 전):** `52 / 100`
**수정 후 예상:** `88 / 100`

| 카테고리 | 가중치 | 감사 전 | 감사 후 |
|---|---|---|---|
| Technical SEO | 25% | 40 | 90 |
| Content Quality | 25% | 75 | 85 |
| On-Page SEO | 20% | 55 | 92 |
| Schema / Structured Data | 10% | 0 | 100 |
| Performance (CWV) | 10% | 80 | 85 |
| Images | 5% | 80 | 85 |
| AI Search Readiness | 5% | 30 | 80 |

---

## 🏢 비즈니스 타입

**Detected:** Local Business — Music School / DJ Academy
**Region:** 대전광역시 서구 둔산동

권고 스키마: `MusicSchool` > `EducationalOrganization`
관련 인물: `Person` (강사 DJ KNDRX)

---

## 🔴 Critical Issues (즉시 수정 완료)

### C1. robots.txt 미존재 → ✅ 생성 완료
- `app/robots.ts` 추가, `/robots.txt` 자동 발행. 모든 UA allow + sitemap 참조.

### C2. sitemap.xml 미존재 → ✅ 생성 완료
- `app/sitemap.ts` 추가, 단일 페이지 sitemap 자동 발행.

### C3. 구조화 데이터(JSON-LD) 0건 → ✅ 3종 추가
- `MusicSchool` — 학원 본체 (주소·좌표·전화·서비스 카탈로그 포함)
- `Person` — DJ KNDRX 프로필
- `WebSite` — 사이트 메타
- 로컬 SEO / Knowledge Panel / Rich Results 인식 가능.

### C4. Open Graph 이미지 + Twitter Card 부재 → ✅ 추가
- OG image: `/images/kndrx/01.jpg` (1200×630 권장 메타 선언)
- Twitter Card: `summary_large_image`

---

## 🟡 High Priority

### H1. 메타 description 최적화 → ✅ 확장 완료
- 감사 전: 짧고 일반적 (93자)
- 감사 후: 지역·강사 이력·장비·타겟 키워드 모두 포함 (약 150자, 최적)

### H2. Title Template 적용 → ✅ 완료
- `%s | BPM 뮤직 스튜디오` 템플릿. 향후 서브페이지 추가 시 자동 브랜딩.

### H3. Canonical URL → ✅ 완료
- `alternates.canonical: "/"` 설정 → 중복 콘텐츠 리스크 차단.

### H4. Keywords 메타 추가
- 로컬 + 서비스 + 인물명 + 경쟁 키워드 9개 등록.

---

## 🟢 Medium Priority (권장 후속 작업)

### M1. og-image 전용 이미지 제작
- 현재 KNDRX 인물사진을 OG로 씀. 브랜드 로고+카피+배경 조합한 **전용 1200×630 소셜 썸네일** 추가 시 공유 시 브랜드 노출 ↑
- 파일 위치 제안: `public/og/og-default.jpg`

### M2. Favicon 다해상도
- 현재 `app/icon.png` 하나. 32×32 · 180×180 (apple) · 192×192 · 512×512 생성 권장
- Next App Router는 `app/icon-{size}.png` 또는 `app/apple-icon.png` 별도 파일로 지원

### M3. 주요 키워드 랜딩 H2 보강
- 현재 H1: `HIPHOP DJ LESSON` (영문만)
- 한국어 검색어 대응을 위해 **본문에 "대전 DJ 학원", "힙합 디제잉 레슨"** 같은 자연스러운 문장 노출 필요
  - 현재 About lead에 포함돼 있음 (OK) — 다만 Hero나 H2 레벨에도 한국어 키워드가 하나 있으면 더 좋음

### M4. 블로그/스토리 섹션 고려
- E-E-A-T (Experience · Expertise · Authority · Trust) 강화를 위해 추후 수강생 후기, DJ 관련 짧은 콘텐츠 페이지 추가 권장
- AI Search (Perplexity, ChatGPT Search)에서 인용될 passage-level 콘텐츠 확보

### M5. FAQPage 스키마
- "레슨 비용은?", "초보자 가능?", "주차 가능?" 같은 FAQ 섹션 추가 시 Rich Results 가능
- 현재 랜딩에 FAQ 섹션 없음 → 추가 여부는 비즈니스 판단

---

## 🔵 Low Priority (백로그)

### L1. Pretendard 폰트 — self-host 고려
- 현재 jsDelivr CDN. 안정적이나, 자체 호스팅 시 CWV LCP 약 20~50ms 개선 가능.

### L2. 이미지 포맷 업그레이드
- `kndrx/01~05.jpg` 사이즈 큰 편 (원본 약 2~4MB). Next/image가 자동 WebP 변환하지만, 원본을 WebP/AVIF로 전환해 전송량 줄이기 권장.

### L3. 404 페이지 커스터마이즈
- 현재 기본 Next.js 404. 브랜드 톤으로 디자인한 `app/not-found.tsx` 제작 권장 (낮은 우선순위).

---

## 📋 상세 카테고리별 분석

### Technical SEO

| 항목 | 상태 |
|---|---|
| HTTPS | ✅ (Vercel 자동) |
| Mobile Responsive | ✅ (전수 검증 완료) |
| Robots.txt | ✅ (수정 후) |
| Sitemap.xml | ✅ (수정 후) |
| Canonical | ✅ (수정 후) |
| hreflang | N/A (단일 언어) |
| 404 handling | ⚠ 기본 Next.js |
| Security headers | 🟡 Vercel 기본 (CSP 미설정) |

### Content Quality (E-E-A-T)

| 요소 | 평가 |
|---|---|
| Experience | ✅ DJ KNDRX 16년 경력 명시 |
| Expertise | ✅ BewhY/JUSTHIS/쿤디판다 백업 이력, 클럽 운영 이력 |
| Authority | ✅ 홍대·신림 유명 클럽 설립 운영 언급 |
| Trust | 🟡 수강생 후기·수업료 미공개 (추후 추가 권장) |
| Readability | ✅ 단문 중심, AI 클리셰 없음 |
| Thin Content | ✅ 단일 랜딩이지만 충분한 정보 밀도 |

### On-Page SEO

| 항목 | 감사 전 | 감사 후 |
|---|---|---|
| Title tag | 짧음 (24자) | 최적 (약 42자, 키워드 풍부) |
| Meta description | 93자 | 150자 (최적) |
| H1 (1개만) | ✅ `HIPHOP DJ LESSON` | ✅ 유지 |
| H2/H3 위계 | ✅ 섹션별 `CH.XX` 인덱스 | ✅ 유지 |
| 내부 링크 | ✅ 앵커 4개 (#about/#class/#instructor/#visit) | ✅ 유지 |
| 외부 링크 | ✅ 네이버 지도 (`rel=noopener`) | ✅ 유지 |

### Schema / Structured Data

**수정 후 적용된 JSON-LD:**
1. `MusicSchool` (organization root) — 주소, 좌표, 전화, 서비스 카탈로그(DJ Class · 랩 Class)
2. `Person` (DJ KNDRX) — 직함, 이력, worksFor 연결
3. `WebSite` — 사이트 레벨 메타

**검증 권장:**
- https://search.google.com/test/rich-results
- https://validator.schema.org/

### Performance (Core Web Vitals)

**예상 스코어 (배포 환경 기준):**
- LCP: ~1.8s (Hero 포트레이트 `priority` 적용) ✅
- CLS: ~0.02 (Framer Motion `y` transform 사용, 레이아웃 안 흔들림) ✅
- INP: ~150ms (Framer Motion 스크롤 핸들러) ✅

*실제 측정은 PageSpeed Insights 필요: https://pagespeed.web.dev/*

### Images

| 이미지 | Alt 존재 | 비고 |
|---|---|---|
| Hero 포트레이트 | ✅ "DJ KNDRX — 블루 네온 아래 부스에서 디제잉 중" | 좋음 |
| Instructor 포트레이트 | ✅ "DJ KNDRX — 스튜디오 부스에서 믹싱 중" | 좋음 |
| BPM 로고들 | ✅ "BPM 뮤직 스튜디오" | 좋음 |
| BPM 배경 바이닐 | ✅ `alt=""` (장식 이미지, 올바른 처리) | 정확 |

### AI Search Readiness (GEO)

**평가:**
- llms.txt 부재 (Low Priority 추가 고려)
- 구조화 데이터로 AI 크롤러 이해도 확보 (MusicSchool)
- 인물·지역·서비스 fact 명확히 드러남 → ChatGPT/Perplexity 인용 가능성 ↑

---

## ✅ 이번 감사로 적용된 변경 파일

```
app/layout.tsx                    # 메타 전면 확장
app/page.tsx                      # StructuredData 주입
app/robots.ts                     # 신규 (자동 /robots.txt)
app/sitemap.ts                    # 신규 (자동 /sitemap.xml)
components/seo/StructuredData.tsx # 신규 (JSON-LD 3종)
```

---

## 🎯 배포 후 체크리스트

Vercel 재배포 완료 후 아래 확인:

1. https://bpm-academy.vercel.app/robots.txt → 200 OK, sitemap 참조 확인
2. https://bpm-academy.vercel.app/sitemap.xml → XML 정상 노출
3. https://search.google.com/test/rich-results → URL 입력, Rich Results 3종(Organization/MusicSchool, Person, WebSite) 인식 확인
4. https://www.opengraph.xyz/url/https%3A%2F%2Fbpm-academy.vercel.app → OG 프리뷰 확인
5. https://pagespeed.web.dev/ → CWV 실측
6. Google Search Console 등록 → sitemap 제출, 색인 요청

---

## 🚀 다음 단계 권장 순서

1. **즉시** — Vercel 재배포 (이번 커밋)
2. **24시간 내** — Google Search Console 등록 + sitemap 제출
3. **1주 내** — Rich Results Test 통과 확인
4. **1개월 내** — OG 전용 이미지 제작, 수강생 후기 섹션 또는 FAQ 추가
