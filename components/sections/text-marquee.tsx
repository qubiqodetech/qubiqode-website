"use client";

import { motion } from "motion/react";
import { Marquee } from "@/components/ui/marquee";

const services = [
  "Web Development",
  "UI/UX Design",
  "SEO Optimization",
  "Branding",
  "Motion Graphics",
  "AI Automation",
  "Creative Technology",
  "Digital Solutions",
];

export function TextMarquee() {
  return (
    <section className="py-20 bg-stone-950 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <Marquee className="[--duration:40s]">
          {services.map((service, idx) => (
            <div key={idx} className="flex items-center gap-8 mx-4">
              <span className={`font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter ${idx % 2 === 0 ? "text-transparent" : "text-white/90"}`} style={idx % 2 === 0 ? { WebkitTextStroke: "1px rgba(255,255,255,0.3)" } : {}}>
                {service}
              </span>
              <span className="w-4 h-4 rounded-full bg-primary-500/50" />
            </div>
          ))}
        </Marquee>
        
        <Marquee reverse className="[--duration:50s] mt-8">
          {[...services].reverse().map((service, idx) => (
            <div key={idx} className="flex items-center gap-8 mx-4">
               <span className={`font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter ${idx % 2 === 1 ? "text-transparent" : "text-white/90"}`} style={idx % 2 === 1 ? { WebkitTextStroke: "1px rgba(255,255,255,0.3)" } : {}}>
                {service}
              </span>
              <span className="w-4 h-4 rounded-full bg-primary-500/50" />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
