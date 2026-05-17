"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";

const logos = [
  { name: "React", url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "Next.js", url: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" },
  { name: "Tailwind CSS", url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
  { name: "Node.js", url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
  { name: "Framer Motion", url: "https://pagepro.co/blog/wp-content/uploads/2020/03/framer-motion.png" },
  { name: "Figma", url: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
  { name: "AWS", url: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
];

export function ClientLogos() {
  return (
    <section className="py-20 bg-stone-50/50 border-y border-stone-200 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-medium text-stone-500 uppercase tracking-widest mb-12 px-6"
        >
          Built with premium technologies
        </motion.p>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <Marquee pauseOnHover className="[--duration:30s] opacity-60 grayscale hover:grayscale-[0.2] transition-all duration-700 mix-blend-multiply flex items-center">
            {logos.map((logo, idx) => (
              <div key={idx} className="flex items-center px-8">
                <Image
                  src={logo.url}
                  alt={`${logo.name} logo`}
                  width={120}
                  height={50}
                  className="object-contain max-h-10 w-auto"
                  referrerPolicy="no-referrer"
                  unoptimized // since we are using external random images which might not be configured
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
