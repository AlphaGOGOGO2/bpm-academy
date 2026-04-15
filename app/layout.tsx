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

export const metadata: Metadata = {
  title: "BPM 뮤직 스튜디오 · DJ KNDRX Academy",
  description:
    "대전 BPM 뮤직 스튜디오 — 현업 힙합 DJ에게 직접 배우는 1:1 DJ 레슨. DJ KNDRX, SINCE 2010.",
  openGraph: {
    title: "BPM 뮤직 스튜디오 · DJ KNDRX Academy",
    description: "대전 BPM 뮤직 스튜디오 — 현업 힙합 DJ에게 직접 배우는 1:1 DJ 레슨.",
    locale: "ko_KR",
    type: "website",
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
