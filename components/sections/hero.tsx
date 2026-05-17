"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export function Hero() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={targetRef} className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-stone-50 min-h-screen flex items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-200/40 via-amber-100/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-stone-300/40 via-stone-200/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div style={{ y: y3, opacity }} className="lg:col-span-6 relative z-20 pt-10 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center rounded-full border border-stone-200 bg-white/40 backdrop-blur-xl px-5 py-2 text-xs font-semibold text-stone-800 mb-8 shadow-sm tracking-wide uppercase">
                <Sparkles className="w-4 h-4 text-orange-500 mr-2.5" />
                Creative Technology Partner
              </div>
            </motion.div>

            <div className="mb-6 relative">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-stone-950 leading-[1.05]"
              >
                We architect <br className="hidden md:block" />
                <span className="relative inline-block mt-2">
                  <span className="relative z-10">digital futures.</span>
                  <span className="absolute bottom-1 left-0 w-full h-4 bg-orange-200/60 -z-10 rounded-sm" />
                </span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-stone-600 mb-10 max-w-md leading-relaxed"
            >
              QubiQode blends premium design aesthetics with elite engineering to build platforms that dominate markets and captivate users.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center gap-5"
            >
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-stone-950 px-8 py-4 text-sm font-semibold text-white shadow-xl hover:bg-stone-800 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                Start a Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <button
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white/50 backdrop-blur-md border border-stone-200 px-8 py-4 text-sm font-semibold text-stone-900 shadow-sm hover:bg-white hover:border-stone-300 transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center mr-3 group-hover:bg-orange-100 transition-colors">
                  <Play className="w-3.5 h-3.5 text-stone-900 group-hover:text-orange-600 transition-colors ml-0.5" fill="currentColor" />
                </div>
                Watch Showreel
              </button>
            </motion.div>
          </motion.div>

          {/* Creative UI Presentation */}
          <div className="lg:col-span-6 relative min-h-[500px] sm:min-h-[600px] w-full mt-12 lg:mt-0 flex items-center justify-center">
            
            {/* Main App Window */}
            <motion.div
              style={{ y: y1 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg aspect-[4/3] bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-stone-200 z-20 flex flex-col"
            >
              {/* Window Header */}
              <div className="h-12 bg-stone-50/80 backdrop-blur border-b border-stone-100 flex items-center px-6 gap-2 shrink-0">
                <div className="w-3 h-3 rounded-full bg-rose-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              
              {/* Window Body */}
              <div className="flex-1 p-6 relative bg-stone-50/30 overflow-hidden">
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div className="space-y-2">
                    <div className="w-32 h-6 bg-stone-200 rounded-md" />
                    <div className="w-20 h-4 bg-stone-100 rounded-md" />
                  </div>
                  <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center shadow-sm">
                     <Sparkles className="w-6 h-6" />
                  </div>
                </div>
                
                <div className="space-y-4 relative z-10">
                  <div className="w-full h-24 bg-white rounded-2xl border border-stone-100 shadow-sm flex items-center px-6 gap-4 p-4">
                    <div className="w-12 h-12 rounded-full bg-stone-100 overflow-hidden relative shrink-0">
                        <Image src="https://picsum.photos/seed/userux/100/100" fill className="object-cover" alt="User" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <div className="w-1/2 h-4 bg-stone-200 rounded-md" />
                      <div className="w-3/4 h-3 bg-stone-100 rounded-md" />
                    </div>
                  </div>
                  <div className="flex gap-4 h-36">
                    <div className="flex-1 bg-white rounded-2xl border border-stone-100 shadow-sm p-4 flex flex-col justify-end">
                      <div className="w-full h-1/2 flex items-end gap-2">
                         {[40, 70, 45, 90, 65].map((h, i) => (
                           <motion.div 
                             key={i} 
                             initial={{ height: 0 }}
                             animate={{ height: `${h}%` }}
                             transition={{ duration: 1, delay: 1 + (i * 0.1) }}
                             className="flex-1 bg-stone-200 overflow-hidden rounded-sm relative" 
                           >
                             <div className="absolute bottom-0 left-0 right-0 bg-stone-300" style={{ height: '100%' }} />
                           </motion.div>
                         ))}
                      </div>
                    </div>
                    <div className="flex-1 bg-stone-950 rounded-2xl shadow-lg relative overflow-hidden p-5 flex flex-col justify-end">
                       <div className="text-white/60 text-xs font-semibold mb-1 uppercase tracking-wider">Growth</div>
                       <div className="text-white text-4xl font-display font-medium tracking-tight">+124%</div>
                       <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500 rounded-bl-full opacity-20 blur-2xl" />
                    </div>
                  </div>
                </div>
                
                {/* Decorative background blur inside window */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />
              </div>
            </motion.div>

            {/* Floating Elements */}
            {/* 1. Code Snippet Panel */}
            <motion.div
              style={{ y: y2 }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-[5%] -right-4 lg:-right-12 xl:-right-8 z-30 w-[280px] bg-stone-950/90 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-stone-800 p-5 hidden sm:block overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-amber-500" />
              <div className="flex items-center gap-2 mb-4 border-b border-stone-800 pb-3">
                 <div className="text-xs font-mono text-stone-400">app/page.tsx</div>
              </div>
              <div className="space-y-2 font-mono text-[11px] leading-relaxed">
                <div className="text-orange-400"><span className="text-stone-500">export default function</span> <span className="text-stone-100">Hero</span>() {'{'}</div>
                <div className="text-stone-400 pl-4">return (</div>
                <div className="text-emerald-400 pl-8">&lt;<span className="text-stone-100">main className</span>=<span className="text-emerald-300">"flex"</span>&gt;</div>
                <div className="text-amber-400 pl-12">&lt;<span className="text-stone-100">CreativeUI</span> /&gt;</div>
                <div className="text-emerald-400 pl-8">&lt;/<span className="text-stone-100">main</span>&gt;</div>
                <div className="text-stone-400 pl-4">)</div>
                <div className="text-orange-400">{'}'}</div>
              </div>
            </motion.div>

            {/* 2. Floating Design Badge */}
            <motion.div
              style={{ y: y3 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-[10%] -left-4 lg:-left-12 xl:-left-8 z-40 bg-white/90 backdrop-blur-xl border border-white p-4 rounded-2xl shadow-xl flex items-center gap-4 hidden sm:flex"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center shadow-inner">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="pr-2">
                <div className="text-stone-950 font-bold font-display text-lg leading-tight tracking-tight">Pixel Perfect</div>
                <div className="text-xs font-medium text-stone-500 uppercase tracking-widest mt-0.5">Delivery</div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
