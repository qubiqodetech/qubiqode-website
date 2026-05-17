"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";

const logos = [
  { name: "React", url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "Next.js", url: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" },
  { name: "Tailwind CSS", url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
  { name: "TypeScript", url: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
  { name: "Node.js", url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
  { name: "Vercel", url: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Vercel_logo_black.svg" },
  { name: "PostgreSQL", url: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },
  { name: "Framer Motion", url: "https://pagepro.co/blog/wp-content/uploads/2020/03/framer-motion.png" },
  { name: "Figma", url: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
  { name: "GitHub", url: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
  { name: "Stripe", url: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
  { name: "Google Cloud", url: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" },
  { name: "AWS", url: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "OpenAI", url: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
];

export function ClientLogos() {
  return (
    <section className="py-20 bg-stone-950 border-t border-stone-800 overflow-hidden relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-primary-500/5 blur-[80px] pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-medium text-stone-500 uppercase tracking-[0.2em] mb-12 px-6"
        >
          Built with premium technologies
        </motion.p>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <Marquee pauseOnHover className="[--duration:40s] flex items-center">
            {logos.map((logo, idx) => (
              <div key={idx} className="flex items-center px-10">
                <Image
                  src={logo.url}
                  alt={`${logo.name} logo`}
                  width={140}
                  height={50}
                  className="object-contain max-h-12 w-auto brightness-0 invert opacity-40 hover:opacity-100 transition-all duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                  unoptimized
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
