"use client";

import { Marquee } from "@/components/ui/marquee";

const text = "LET'S BUILD SOMETHING AMAZING";

export function CTAMarquee() {
  return (
    <section className="py-12 bg-primary-600 text-white overflow-hidden relative border-y border-primary-500">
      <div className="relative flex flex-col items-center justify-center">
        <Marquee className="[--duration:20s]">
          {Array(8).fill(text).map((phrase, i) => (
            <div key={i} className="flex items-center gap-12 px-6">
              <span className="font-display font-black text-6xl md:text-8xl tracking-tight whitespace-nowrap opacity-90 hover:opacity-100 transition-opacity">
                {phrase}
              </span>
              <span className="w-4 h-4 rounded-full bg-white/50" />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
