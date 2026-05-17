"use client";

import { motion } from "motion/react";
import { Code2, Sparkles, Cpu, ShieldCheck, Fingerprint } from "lucide-react";

export function DigitalDNA() {
  return (
    <section className="py-24 lg:py-32 bg-stone-950 relative overflow-hidden border-t border-stone-800/50">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-full md:w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_top_right,_rgba(30,144,255,0.08)_0%,_transparent_60%)] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-full md:w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center_left,_rgba(139,92,246,0.06)_0%,_transparent_60%)] pointer-events-none -translate-y-1/2" />
      
      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-end justify-between mb-16 lg:mb-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 rounded-full border border-stone-800 bg-stone-900/50 px-3 py-1.5 text-xs font-medium text-stone-400 mb-6 backdrop-blur-md"
            >
              <Fingerprint className="w-3.5 h-3.5 text-primary-400" />
              Our DNA
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]"
            >
              Engineering excellence <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-400 to-stone-600">without compromise.</span>
            </motion.h2>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-stone-400 text-lg max-w-md leading-relaxed pb-2"
          >
            We utilize bleeding-edge frameworks, robust cloud architectures, and generative AI to craft digital systems that are fast, secure, and effortlessly scalable.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           
           {/* Item 1 - Wide */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-50px" }}
             transition={{ duration: 0.8, delay: 0.1 }}
             className="lg:col-span-2 group relative overflow-hidden rounded-[2rem] bg-stone-900/30 border border-stone-800/80 p-8 md:p-12 transition-all hover:bg-stone-900/60 hover:border-primary-500/30"
           >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col h-full justify-between gap-16 min-h-[300px]">
                 <div className="w-14 h-14 rounded-2xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400 transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary-500/20">
                    <Code2 className="w-7 h-7" />
                 </div>
                 <div className="max-w-xl">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">Modern Web Architecture</h3>
                    <p className="text-stone-400 leading-relaxed text-lg">Server-side rendered, edge-deployed, and entirely type-safe. We build responsive platforms that load instantly across the globe using Next.js and modern React paradigms.</p>
                 </div>
              </div>
           </motion.div>

           {/* Item 2 - Tall/Square */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-50px" }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="group relative overflow-hidden rounded-[2rem] bg-stone-900/30 border border-stone-800/80 p-8 md:p-10 transition-all hover:bg-stone-900/60 hover:border-purple-500/30"
           >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col h-full justify-between gap-16 min-h-[300px]">
                 <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 transition-transform duration-500 group-hover:scale-110 group-hover:bg-purple-500/20">
                    <Cpu className="w-7 h-7" />
                 </div>
                 <div>
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">AI Integration</h3>
                    <p className="text-stone-400 leading-relaxed">Embedding intelligent contextual models directly into your workflows to automate processes and unlock new possibilities.</p>
                 </div>
              </div>
           </motion.div>

           {/* Item 3 - Tall/Square */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-50px" }}
             transition={{ duration: 0.8, delay: 0.3 }}
             className="group relative overflow-hidden rounded-[2rem] bg-stone-900/30 border border-stone-800/80 p-8 md:p-10 transition-all hover:bg-stone-900/60 hover:border-sky-500/30"
           >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col h-full justify-between gap-16 min-h-[300px]">
                 <div className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 transition-transform duration-500 group-hover:scale-110 group-hover:bg-sky-500/20">
                    <Sparkles className="w-7 h-7" />
                 </div>
                 <div>
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Pixel-Perfect UI</h3>
                    <p className="text-stone-400 leading-relaxed">Micro-interactions, fluid animations, and rigorous consistency. We design component-driven interfaces for maximum emotional impact.</p>
                 </div>
              </div>
           </motion.div>

           {/* Item 4 - Wide */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-50px" }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="lg:col-span-2 group relative overflow-hidden rounded-[2rem] bg-stone-900/30 border border-stone-800/80 p-8 md:p-12 transition-all hover:bg-stone-900/60 hover:border-emerald-500/30"
           >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col h-full justify-between gap-16 min-h-[300px]">
                 <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 transition-transform duration-500 group-hover:scale-110 group-hover:bg-emerald-500/20">
                    <ShieldCheck className="w-7 h-7" />
                 </div>
                 <div className="max-w-xl">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">Enterprise Infrastructure</h3>
                    <p className="text-stone-400 leading-relaxed text-lg">Built on resilient cloud native foundations. Automatic scaling, zero-downtime deployments, edge caching, and robust data protection from day one.</p>
                 </div>
              </div>
           </motion.div>

        </div>
      </div>
    </section>
  );
}
