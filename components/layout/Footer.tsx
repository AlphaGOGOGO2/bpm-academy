import Image from "next/image";
import { PhoneIcon } from "@/components/ui/SocialIcons";

type LinkItem = {
  label: string;
  href?: string;
  external?: boolean;
  icon?: React.ReactNode;
};

function Col({ title, items }: { title: string; items: (string | LinkItem)[] }) {
  return (
    <div>
      <div className="text-white font-bold tracking-[0.25em] mb-3 text-[11px]">
        {title}
      </div>
      <ul className="space-y-1.5 leading-relaxed text-white/55">
        {items.map((it) => {
          const item = typeof it === "string" ? { label: it } : it;
          const content = (
            <span className="inline-flex items-center gap-2">
              {item.icon}
              <span>{item.label}</span>
            </span>
          );
          if (item.href) {
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="hover:text-white transition"
                >
                  {content}
                </a>
              </li>
            );
          }
          return <li key={item.label}>{content}</li>;
        })}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 px-6 md:px-14 py-12 text-xs">
      <div className="flex flex-col md:flex-row md:justify-between gap-10">
        <div>
          <div className="relative h-16 w-auto inline-block">
            <Image
              src="/images/logo/bpm-plain.png"
              alt="BPM 뮤직 스튜디오 로고"
              width={240}
              height={96}
              className="h-16 w-auto object-contain invert brightness-200"
            />
          </div>
          <div className="mt-2 font-mono text-[11px] tracking-[0.25em] text-[#ff0080]">
            MUSIC STUDIO · DAEJEON
          </div>
        </div>

        <Col
          title="MENU"
          items={[
            { label: "About", href: "#about" },
            { label: "Class", href: "#class" },
            { label: "Instructor", href: "#instructor" },
            { label: "Visit", href: "#visit" },
          ]}
        />

        <Col
          title="CONTACT"
          items={[
            {
              label: "010-4637-4987",
              href: "tel:01046374987",
              icon: <PhoneIcon size={14} />,
            },
            "대전 서구 대덕대로 223",
            "대우토피아 1112호",
          ]}
        />
      </div>

      <div className="mt-10 pt-5 border-t border-white/5 flex flex-col md:flex-row justify-between gap-2 font-mono tracking-[0.15em] text-white/30 text-[11px]">
        <span>© BPM MUSIC STUDIO · ALL RIGHTS RESERVED</span>
        <span>WEBSITE / 2026</span>
      </div>
    </footer>
  );
}
