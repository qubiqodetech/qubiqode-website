"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-24 pb-32 lg:pt-36 lg:pb-48 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 bg-stone-50">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-orange-100 rounded-full blur-[120px] opacity-60 pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-stone-200 rounded-full blur-[100px] opacity-60 pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center rounded-full border border-stone-200 bg-white/50 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-stone-800 mb-8">
              <span className="flex h-2 w-2 rounded-full bg-orange-500 mr-2.5"></span>
              Award-winning digital agency
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-stone-950 leading-[1.05] mb-8"
          >
            We build digital <br className="hidden md:block" />
            products that <span className="text-orange-600">perform</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-stone-600 mb-10 max-w-2xl leading-relaxed"
          >
            QubiQode is a premium creative agency specializing in world-class
            web development, UI/UX design, and brand identity for
            forward-thinking companies.
          </motion.p>

          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full bg-stone-950 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-stone-900/20 hover:bg-stone-800 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              Start a Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/#portfolio"
              className="inline-flex items-center justify-center rounded-full bg-white border border-stone-200 px-8 py-4 text-base font-semibold text-stone-900 hover:bg-stone-50 hover:border-stone-300 transition-all duration-200"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
