"use client";

import { Marquee } from "@/components/ui/marquee";

const items = [
  "Premium Design",
  "React & Next.js",
  "Modern UIs",
  "Fast Performance",
  "Creative Solutions",
  "Framer Motion",
  "Tailwind CSS",
  "Responsive",
];

export function VerticalMarquee() {
  return (
    <div className="absolute top-0 right-0 h-full w-32 md:w-48 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] hidden lg:flex space-x-4 opacity-40 pointer-events-none">
      <Marquee vertical className="[--duration:30s] h-[200vh]">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-8 py-4">
             <span className="font-display text-4xl font-bold uppercase tracking-tighter text-transparent -rotate-90 whitespace-nowrap" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}>
              {item}
            </span>
          </div>
        ))}
      </Marquee>
      <Marquee vertical reverse className="[--duration:40s] h-[200vh]">
        {[...items].reverse().map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-8 py-4">
             <span className="font-display text-4xl font-bold uppercase tracking-tighter text-transparent -rotate-90 whitespace-nowrap" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>
              {item}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
