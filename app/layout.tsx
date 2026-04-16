import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, Bowlby_One } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["italic", "normal"],
  weight: ["300", "400", "500", "700", "900"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
  weight: ["300", "400", "500", "700"],
});

// Grunt 대체 — CDN (Google Fonts) 로 서빙. 진짜 Grunt 파일 받으면 교체.
const bowlbyOne = Bowlby_One({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400"],
});

const SITE_URL = "https://bpmmusicstudio.co.kr";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "BPM 뮤직 스튜디오 · 대전 힙합 DJ 아카데미 | DJ KNDRX 1:1 레슨",
    template: "%s | BPM 뮤직 스튜디오",
  },
  description:
    "대전 둔산동 BPM 뮤직 스튜디오. 16년차 한국 최고의 베테랑 힙합 DJ, DJ KNDRX의 1:1 (최대 2:1) 맞춤 DJ 레슨. Technics SL-1200MK7 · Pioneer DJM-S11 최고급 장비. BewhY · JUSTHIS 백업 DJ 이력.",
  keywords: [
    "대전 DJ 학원",
    "힙합 DJ 레슨",
    "DJ KNDRX",
    "BPM 뮤직 스튜디오",
    "둔산동 DJ",
    "Serato DJ PRO",
    "턴테이블 레슨",
    "1:1 DJ 레슨",
    "대전 힙합",
  ],
  authors: [{ name: "DJ KNDRX" }],
  creator: "DJ KNDRX",
  publisher: "BPM 뮤직 스튜디오",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "BPM 뮤직 스튜디오 · DJ KNDRX 1:1 힙합 DJ 레슨",
    description:
      "대전 둔산동. 16년차 현업 힙합 DJ에게 직접 배우는 1:1 맞춤 레슨. 실제 프로 장비로 시작하세요.",
    url: SITE_URL,
    siteName: "BPM 뮤직 스튜디오",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/images/kndrx/01.webp",
        width: 1200,
        height: 630,
        alt: "DJ KNDRX — BPM 뮤직 스튜디오 부스에서 디제잉 중",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BPM 뮤직 스튜디오 · DJ KNDRX 1:1 힙합 DJ 레슨",
    description:
      "대전 둔산동. 16년차 현업 힙합 DJ의 1:1 맞춤 DJ 레슨. Since 2010.",
    images: ["/images/kndrx/01.webp"],
  },
  category: "education",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  formatDetection: {
    telephone: true,
  },
  verification: {
    other: {
      "naver-site-verification":
        "5e4da5efe0675a9a14a1d2ad4de9c99fd605ab9e",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${fraunces.variable} ${plexMono.variable} ${bowlbyOne.variable}`}>
      <head>
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
