"use client";

import { Marquee } from "@/components/ui/marquee";
import { Zap, Target, Code2, Cpu } from "lucide-react";

const keywords = [
  "NEXT.JS",
  "REACT",
  "TYPESCRIPT",
  "UI/UX",
  "SEO",
  "AI",
  "AUTOMATION",
  "CLOUD",
  "PERFORMANCE",
  "DESIGN SYSTEM",
];

const Row1 = keywords.slice(0, 5);
const Row2 = keywords.slice(5, 10);

export function TechMarquee() {
  return (
    <section className="py-24 bg-stone-950 text-white overflow-hidden relative border-t border-stone-900">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary-600/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative flex flex-col items-center justify-center gap-6 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <Marquee className="[--duration:35s]" pauseOnHover>
          {keywords.map((word, i) => (
            <div key={i} className="flex items-center gap-6 px-4">
              <span className="font-display font-medium text-4xl sm:text-5xl md:text-6xl text-white/90 tracking-wide uppercase">
                {word}
              </span>
              <Cpu className="w-8 h-8 text-primary-500/50" />
            </div>
          ))}
        </Marquee>

        <Marquee reverse className="[--duration:25s]" pauseOnHover>
          {[...keywords].reverse().map((word, i) => (
            <div key={i} className="flex items-center gap-6 px-4">
              <span 
                className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-transparent tracking-wide uppercase"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}
              >
                {word}
              </span>
              <Zap className="w-8 h-8 text-primary-500/50" />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
