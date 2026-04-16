/**
 * JSON-LD 구조화 데이터.
 * - MusicSchool (학원 본체, 지역·연락처·서비스 포함)
 * - Person (DJ KNDRX 강사 프로필, 활동 이력)
 * - FAQPage (Coming Soon: 추후 FAQ 섹션 추가 시)
 *
 * Google Search Console → Rich Results 인식 목표.
 */

const BASE_URL = "https://bpmmusicstudio.co.kr";

export function StructuredData() {
  const musicSchool = {
    "@context": "https://schema.org",
    "@type": "MusicSchool",
    "@id": `${BASE_URL}/#organization`,
    name: "BPM 뮤직 스튜디오",
    alternateName: ["BPM Music Studio", "비피엠 뮤직 스튜디오"],
    url: BASE_URL,
    logo: `${BASE_URL}/images/logo/bpm-plain.webp`,
    image: [
      `${BASE_URL}/images/kndrx/01.webp`,
      `${BASE_URL}/images/kndrx/02.webp`,
    ],
    description:
      "대전 둔산동에 위치한 힙합 DJ 아카데미. 16년차 현업 힙합 DJ KNDRX의 1:1 (최대 2:1) 맞춤 DJ 레슨.",
    telephone: "+82-10-4637-4987",
    priceRange: "₩₩",
    address: {
      "@type": "PostalAddress",
      streetAddress: "대덕대로 223 대우토피아 1112호",
      addressLocality: "서구",
      addressRegion: "대전광역시",
      postalCode: "35243",
      addressCountry: "KR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 36.352856,
      longitude: 127.3788255,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "대전광역시",
    },
    founder: {
      "@id": `${BASE_URL}/#kndrx`,
    },
    employee: {
      "@id": `${BASE_URL}/#kndrx`,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "DJ 레슨 프로그램",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "DJ Class",
            description:
              "힙합 DJ 1:1 또는 최대 2:1 맞춤 레슨. 5단계 커리큘럼(디제잉 역사 · 장비 구조 · Serato DJ PRO · 곡 분석 · 실전 믹싱). 실제 프로 DJ 장비(Technics SL-1200MK7, Pioneer DJM-S11) 사용.",
            provider: { "@id": `${BASE_URL}/#organization` },
            serviceType: "DJ Lesson",
          },
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "랩 Class",
            description: "래핑 · 작사 · 플로우. 준비 중.",
            provider: { "@id": `${BASE_URL}/#organization` },
            serviceType: "Rap Lesson",
          },
          availability: "https://schema.org/PreOrder",
        },
      ],
    },
    sameAs: ["https://www.instagram.com/djkndrx"],
  };

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${BASE_URL}/#kndrx`,
    name: "DJ KNDRX",
    alternateName: ["DJ 켄드릭스", "디제이 켄드릭스"],
    jobTitle: "힙합 DJ · DJ 강사",
    description:
      "2010년부터 활동해온 베테랑. 한국 힙합씬 최고의 DJ 중 한 명. BewhY · JUSTHIS · 쿤디판다 등의 전담 백업 DJ로 활약. 홍대 블루프린트 · 신림 파이프 · 홍대 Mhood 설립 및 운영.",
    worksFor: { "@id": `${BASE_URL}/#organization` },
    image: `${BASE_URL}/images/kndrx/02.webp`,
    url: BASE_URL,
    sameAs: ["https://www.instagram.com/djkndrx"],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: "BPM 뮤직 스튜디오 · DJ KNDRX Academy",
    inLanguage: "ko-KR",
    publisher: { "@id": `${BASE_URL}/#organization` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(musicSchool) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
