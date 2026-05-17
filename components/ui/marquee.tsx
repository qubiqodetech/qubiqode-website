"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

export function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <>
      <style suppressHydrationWarning>{`
        @keyframes marquee-horizontal {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-100% - var(--gap))); }
        }
        @keyframes marquee-vertical {
          from { transform: translateY(0); }
          to { transform: translateY(calc(-100% - var(--gap))); }
        }
        .anim-marquee-horizontal {
          animation: marquee-horizontal var(--duration) linear infinite;
        }
        .anim-marquee-vertical {
          animation: marquee-vertical var(--duration) linear infinite;
        }
      `}</style>
      <div
        {...props}
        className={cn(
          "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
          {
            "flex-row": !vertical,
            "flex-col": vertical,
          },
          className,
        )}
      >
        {Array(repeat)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
                "anim-marquee-horizontal flex-row": !vertical,
                "anim-marquee-vertical flex-col": vertical,
                "group-hover:[animation-play-state:paused]": pauseOnHover,
                "[animation-direction:reverse]": reverse,
              })}
            >
              {children}
            </div>
          ))}
      </div>
    </>
  );
}
