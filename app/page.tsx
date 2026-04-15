import { FloatingHeader } from "@/components/layout/FloatingHeader";
import { IssueRail } from "@/components/layout/IssueRail";
import { Footer } from "@/components/layout/Footer";
import { Marquee } from "@/components/layout/Marquee";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Class } from "@/components/sections/Class";
import { Instructor } from "@/components/sections/Instructor";
import { Visit } from "@/components/sections/Visit";

const TICKER = [
  "BPM STUDIO",
  "HIP-HOP DJ ACADEMY",
  "DAEJEON 둔산동",
  "DJ CLASS OPEN",
  "RAP CLASS SOON",
  "TECHNICS SL-1200MK7 × 2",
  "PIONEER DJM-S11",
  "☎ 010-4637-4987",
  "SINCE 2010",
];

export default function Page() {
  return (
    <>
      <FloatingHeader />
      <IssueRail />
      <main>
        <Hero />
        <Marquee items={TICKER} variant="dark" />
        <About />
        <Marquee items={TICKER} variant="paper" speed={40} />
        <Class />
        <Marquee items={TICKER} variant="dark" />
        <Instructor />
        <Marquee items={TICKER} variant="neon" speed={25} />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
