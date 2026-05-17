"use client";

import { Marquee } from "@/components/ui/marquee";
import { Sparkles } from "lucide-react";

const words = ["LET'S", "BUILD", "SOMETHING", "AMAZING"];

export function CTAMarquee() {
  return (
    <section className="py-4 bg-primary-600 text-white overflow-hidden relative border-y border-primary-500">
      <div className="relative flex flex-col items-center justify-center">
        <Marquee className="[--duration:40s]">
          {Array(10).fill(words).flat().map((word, i) => (
            <div key={i} className="flex items-center gap-6 px-3">
              <span className="font-display font-bold text-2xl md:text-4xl tracking-tight whitespace-nowrap opacity-90 hover:opacity-100 transition-opacity">
                {word}
              </span>
              <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-white/50" />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
