"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-gradient-to-br from-orange-100 to-amber-50 rounded-full blur-[120px] pointer-events-none"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-gradient-to-tr from-stone-200 to-stone-50 rounded-full blur-[100px] pointer-events-none"
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center rounded-full border border-stone-200 bg-white/60 backdrop-blur-md px-4 py-1.5 text-xs font-medium text-stone-800 mb-8 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-orange-500 mr-2" />
                Premium Digital Solutions
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-stone-950 leading-[1.1] mb-6"
            >
              We craft digital <br className="hidden md:block" />
              experiences that <span className="text-orange-600">convert</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-stone-600 mb-10 max-w-xl leading-relaxed"
            >
              QubiQode is a modern digital agency specializing in high-performance web development, premium UI/UX design, and strategic branding for ambitious companies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-stone-950 px-8 py-4 text-sm font-semibold text-white shadow-xl hover:bg-stone-800 hover:shadow-2xl hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300"
              >
                Get a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-full bg-white border border-stone-200 px-8 py-4 text-sm font-semibold text-stone-900 shadow-sm hover:bg-stone-50 hover:border-stone-300 focus:ring-2 focus:ring-stone-200 transition-all duration-200"
              >
                View Portfolio
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:h-[600px] flex justify-center lg:justify-end items-center mt-12 lg:mt-0"
          >
            <div className="relative w-full max-w-lg aspect-[4/3] lg:aspect-auto lg:h-full">
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border border-stone-100">
                <div className="absolute inset-0 bg-stone-900/5 mix-blend-multiply z-10" />
                <Image
                  src="https://picsum.photos/seed/agencydashboard/800/1000"
                  alt="Creative Agency Dashboard Interface"
                  fill
                  className="object-cover object-left-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  referrerPolicy="no-referrer"
                  priority
                />
              </div>
              {/* Floating UI Elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-6 top-1/4 bg-white p-4 rounded-xl shadow-xl border border-stone-100 z-20 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                  98%
                </div>
                <div>
                  <div className="text-xs font-medium text-stone-500 uppercase tracking-wider">Performance</div>
                  <div className="font-bold text-stone-900">Score</div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-6 bottom-1/4 bg-stone-950 p-4 rounded-xl shadow-xl border border-stone-800 z-20 text-white"
              >
                <div className="flex -space-x-2 mb-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-stone-950 overflow-hidden relative">
                      <Image src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" fill className="object-cover" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-stone-950 bg-stone-800 flex items-center justify-center text-[10px] font-bold">
                    +12
                  </div>
                </div>
                <div className="text-sm font-medium">New Leads Today</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
