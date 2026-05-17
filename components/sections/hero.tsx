"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { ArrowRight, Play, Cpu, Sparkles, Activity } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";
import { TechMarquee } from "./tech-marquee"; // Wait, I might not need this if I build a small inline one, but let's just make an inline marquee

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-stone-950 pt-32 pb-32 sm:pb-24 selection:bg-primary-500/30"
    >
      {/* Background System */}
      <motion.div style={{ y: yBackground }} className="absolute inset-0 pointer-events-none">
        {/* Glow Orbs */}
        <div className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] bg-primary-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[20%] right-[20%] w-[30vw] h-[30vw] bg-indigo-600/10 rounded-full blur-[100px] mix-blend-screen animate-pulse" style={{ animationDuration: '10s' }} />
        
        {/* Layered Noise and Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_20%,transparent_100%)]" />
      </motion.div>

      {/* Hero Marquee Background (Subtle) */}
      <div className="absolute top-[35%] -left-[10%] w-[120%] rotate-[-3deg] pointer-events-none select-none opacity-[0.03] overflow-hidden whitespace-nowrap z-0 hidden lg:block">
         <motion.div
           animate={{ x: ["0%", "-50%"] }}
           transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
           className="inline-block font-display text-[15rem] font-bold text-white tracking-widest uppercase"
         >
           DIGITAL EXPERIENCES • PREMIUM ENGINEERING • CREATIVE TECHNOLOGY • DIGITAL EXPERIENCES • PREMIUM ENGINEERING • 
         </motion.div>
      </div>

      {/* Main Content Container */}
      <motion.div 
        style={{ opacity, scale }}
        className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col items-center text-center"
      >
        {/* Dark radial center backdrop to ensure text readability over any overlapping cards */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[50vh] bg-[radial-gradient(ellipse_at_center,_rgba(12,10,9,0.9)_0%,_rgba(12,10,9,0.7)_40%,_transparent_70%)] pointer-events-none -z-10 blur-[20px]" />
        
        <motion.div
           initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
           animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           className="inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-2 text-sm font-medium text-primary-400 mb-8 backdrop-blur-md shadow-[0_0_30px_-5px_rgba(30,144,255,0.3)]"
        >
           <Sparkles className="w-4 h-4" />
           Premium Creative Technology Partner
        </motion.div>

        <motion.h1
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
           className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05] max-w-5xl mx-auto"
        >
          We engineer digital platforms that <br className="hidden md:block" />
          <span className="relative whitespace-nowrap">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-300 to-primary-500">
               shape the future.
            </span>
          </span>
        </motion.h1>

        <motion.p
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
           className="mt-8 text-lg md:text-xl text-stone-400 max-w-2xl mx-auto leading-relaxed"
        >
          Building premium digital systems for ambitious brands. We blend cutting-edge engineering with world-class design to create platforms that captivate and dominate.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
           className="mt-10 mb-10 flex flex-col sm:flex-row items-center gap-6"
        >
           <Link
             href="/book"
             className="group relative inline-flex items-center justify-center rounded-xl bg-primary-600 px-8 py-4 font-bold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(30,144,255,0.8)]"
           >
             <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
               <div className="relative h-full w-8 bg-white/20" />
             </div>
             <span className="relative z-10 flex items-center">
               Start a Project
               <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
             </span>
           </Link>

           <button className="group inline-flex items-center justify-center rounded-xl border border-stone-800 bg-stone-900/50 backdrop-blur-md px-8 py-4 font-bold text-white transition-all duration-300 hover:bg-stone-800 hover:border-stone-700">
             <div className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center mr-3 group-hover:bg-primary-500/20 group-hover:text-primary-400 transition-colors">
                <Play className="w-3.5 h-3.5 ml-1" fill="currentColor" />
             </div>
             Watch Showreel
           </button>
        </motion.div>
      </motion.div>

      {/* Floating Interactive Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        
        {/* Top Left: Code Snippet */}
        <motion.div
           initial={{ opacity: 0, x: -50, y: -20, rotate: -5 }}
           animate={{ opacity: 1, x: 0, y: 0, rotate: -3 }}
           transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
           className="absolute top-[12%] lg:top-[15%] left-[2%] xl:left-[6%] w-[260px] xl:w-[280px] p-5 rounded-2xl bg-stone-900/40 backdrop-blur-xl border border-stone-800 shadow-2xl hidden lg:block"
        >
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-stone-800/50">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-stone-700" />
              <div className="w-2.5 h-2.5 rounded-full bg-stone-700" />
              <div className="w-2.5 h-2.5 rounded-full bg-stone-700" />
            </div>
            <div className="text-[10px] uppercase tracking-widest font-mono text-stone-500 ml-2">architecture.ts</div>
          </div>
          <div className="space-y-2 font-mono text-[11px] leading-relaxed">
             <div className="text-pink-400"><span className="text-stone-500">import {'{'}</span> Engine <span className="text-stone-500">{'}'} from</span> <span className="text-green-400">'@qubiqode/core'</span>;</div>
             <br/>
             <div className="text-blue-400"><span className="text-pink-400">const</span> <span className="text-white">system</span> <span className="text-pink-400">=</span> new <span className="text-yellow-200">Engine</span>({'{'}</div>
             <div className="text-stone-300 pl-4">performance: <span className="text-orange-300">100</span>,</div>
             <div className="text-stone-300 pl-4">scale: <span className="text-green-400">'infinite'</span>,</div>
             <div className="text-stone-300 pl-4">aiPowered: <span className="text-pink-400">true</span></div>
             <div className="text-blue-400">{'}'});</div>
          </div>
        </motion.div>

        {/* Bottom Right: Analytics / Performance */}
        <motion.div
           initial={{ opacity: 0, x: 50, y: 20, rotate: 5 }}
           animate={{ opacity: 1, x: 0, y: 0, rotate: 4 }}
           transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" }}
           className="absolute bottom-[10%] lg:bottom-[15%] right-[2%] xl:right-[5%] w-[260px] p-5 rounded-2xl bg-stone-900/40 backdrop-blur-xl border border-stone-800 shadow-2xl hidden lg:block"
        >
           <div className="flex items-start justify-between mb-6">
             <div className="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400">
               <Activity className="w-5 h-5" />
             </div>
             <div className="text-right">
                <div className="text-white font-bold font-display text-2xl tracking-tight">+124%</div>
                <div className="text-[10px] text-stone-400 uppercase tracking-widest">Performance</div>
             </div>
           </div>
           
           <div className="flex items-end gap-[3px] h-16 w-full">
              {[30, 45, 25, 60, 40, 75, 50, 90, 65, 100].map((h, i) => (
                 <motion.div 
                   key={i}
                   initial={{ height: 0 }}
                   animate={{ height: `${h}%` }}
                   transition={{ duration: 1, delay: 1 + i * 0.05, ease: "easeOut" }}
                   className="flex-1 bg-gradient-to-t from-primary-600 to-primary-400 rounded-sm opacity-80"
                 />
              ))}
           </div>
        </motion.div>

        {/* Top Right: AI Badge */}
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
           className="absolute top-[18%] right-[5%] xl:right-[10%] z-40 bg-stone-900/60 backdrop-blur-xl border border-stone-800 p-3 pr-5 rounded-full shadow-2xl flex items-center gap-3 hidden md:flex"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shadow-inner relative overflow-hidden">
            <div className="absolute inset-0 bg-white/20 animate-pulse" style={{ animationDuration: '2s' }} />
            <Cpu className="w-5 h-5 text-white relative z-10" />
          </div>
          <div>
            <div className="text-white font-bold text-sm tracking-tight">AI Integrated</div>
            <div className="text-[10px] uppercase font-medium text-stone-400 tracking-wider">Smart Systems</div>
          </div>
        </motion.div>

        {/* Bottom Left: Trust Element */}
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
           className="absolute bottom-[18%] left-[5%] xl:left-[10%] z-40 bg-stone-900/60 backdrop-blur-xl border border-stone-800 py-3 px-4 rounded-2xl shadow-2xl flex items-center gap-4 hidden md:flex"
        >
          <div className="flex -space-x-3">
             {[1, 2, 3].map((i) => (
                <div key={i} className={`w-10 h-10 rounded-full border-2 border-stone-900 bg-stone-800 relative z-[${4-i}] overflow-hidden`}>
                  <Image src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" fill className="object-cover" unoptimized/>
                </div>
             ))}
             <div className="w-10 h-10 rounded-full border-2 border-stone-900 bg-primary-600 relative z-0 flex items-center justify-center text-xs font-bold text-white shadow-[0_0_15px_rgba(30,144,255,0.5)]">
               50+
             </div>
          </div>
          <div>
             <div className="text-white font-bold text-sm">Trusted by Brands</div>
             <div className="flex text-yellow-500 gap-0.5 mt-0.5">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
             </div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 1, delay: 1.5 }}
         className="absolute bottom-2 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-3 pointer-events-none z-20"
      >
         <span className="text-[9px] uppercase tracking-[0.25em] text-stone-500 font-bold">Scroll to explore</span>
         <div className="w-[2px] h-12 bg-stone-800 rounded-full relative overflow-hidden">
            <motion.div 
               animate={{ y: [-48, 48] }}
               transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
               className="w-full h-1/2 bg-gradient-to-b from-transparent via-primary-500 to-transparent absolute top-0 left-0"
            />
         </div>
      </motion.div>
    </section>
  );
}
