"use client";

import { Marquee } from "@/components/ui/marquee";

const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "10B+", label: "Data Points Processed" },
  { value: "99.9%", label: "Uptime Guaranteed" },
  { value: "12+", label: "Industry Awards" },
  { value: "4x", label: "Average ROI" },
  { value: "24/7", label: "Priority Support" },
];

export function StatsMarquee() {
  return (
    <section className="py-12 bg-white overflow-hidden relative border-y border-stone-200">
      <div className="relative flex flex-col items-center justify-center [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] w-full">
        <Marquee className="[--duration:40s]">
          {stats.concat(stats).map((stat, i) => (
            <div key={i} className="flex items-center gap-12 px-8">
              <div className="flex items-center gap-4">
                <span className="font-display font-medium text-4xl sm:text-5xl text-stone-950">
                  {stat.value}
                </span>
                <span className="text-sm font-semibold tracking-widest uppercase text-stone-500 w-32 leading-tight">
                  {stat.label}
                </span>
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
