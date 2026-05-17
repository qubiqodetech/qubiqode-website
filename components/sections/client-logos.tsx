"use client";

import { motion } from "motion/react";
import Image from "next/image";

const logos = [
  { name: "Acme Corp", url: "https://picsum.photos/seed/logo1/200/100" },
  { name: "Global Tech", url: "https://picsum.photos/seed/logo2/200/100" },
  { name: "Nexus Solutions", url: "https://picsum.photos/seed/logo3/200/100" },
  { name: "Echo Systems", url: "https://picsum.photos/seed/logo4/200/100" },
  { name: "Stark Industries", url: "https://picsum.photos/seed/logo5/200/100" },
];

export function ClientLogos() {
  return (
    <section className="py-20 bg-stone-50/50 border-y border-stone-200 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-medium text-stone-500 uppercase tracking-widest mb-12"
        >
          Trusted by innovative brands worldwide
        </motion.p>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-[0.2] transition-all duration-700 mix-blend-multiply">
          {logos.map((logo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative w-28 h-10 hover:opacity-100 transition-opacity duration-300"
            >
              <Image
                src={logo.url}
                alt={`${logo.name} logo`}
                fill
                sizes="112px"
                className="object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
