"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Palette, Fingerprint, Layers, MonitorPlay, Image as ImageIcon, Crosshair, Shapes } from "lucide-react";

const capabilities = [
  {
    icon: <Fingerprint className="w-8 h-8 text-rose-500" />,
    title: "Brand Identity Systems",
    description: "Comprehensive visual identities including logos, typography, color palettes, and brand guidelines that tell your unique story."
  },
  {
    icon: <Palette className="w-8 h-8 text-rose-500" />,
    title: "Visual Direction",
    description: "Establishing a cohesive aesthetic language across all touchpoints, ensuring your brand looks premium everywhere."
  },
  {
    icon: <MonitorPlay className="w-8 h-8 text-rose-500" />,
    title: "Creative Content",
    description: "High-impact visual assets, from engaging social media creatives to bespoke illustrations and 3D graphics."
  },
  {
    icon: <Layers className="w-8 h-8 text-rose-500" />,
    title: "Marketing Collateral",
    description: "Beautifully designed digital and physical assets, including pitch decks, brochures, and corporate stationery."
  }
];

const portfolioItems = [
  { image: "https://picsum.photos/seed/brand1/800/600", title: "Nova Tech Identity", span: "col-span-1 md:col-span-2" },
  { image: "https://picsum.photos/seed/brand2/800/600", title: "Aura Skincare", span: "col-span-1" },
  { image: "https://picsum.photos/seed/brand3/800/600", title: "Oasis Resort", span: "col-span-1" },
  { image: "https://picsum.photos/seed/brand4/800/600", title: "Flow FinTech app", span: "col-span-1 md:col-span-2" },
];

export default function BrandingPage() {
  return (
    <main className="min-h-screen bg-stone-50 selection:bg-rose-200">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-stone-950 text-white">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-600/30 via-pink-900/10 to-transparent rounded-full blur-[120px] pointer-events-none" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/20 via-rose-900/10 to-transparent rounded-full blur-[100px] pointer-events-none" 
          />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            <div className="max-w-3xl">
              <Link href="/services" className="inline-flex items-center text-sm font-medium text-stone-400 hover:text-white transition-colors mb-8">
                <ArrowRight className="w-4 h-4 ml-0 mr-2 rotate-180" />
                Back to Services
              </Link>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center rounded-full border border-stone-800 bg-stone-900/60 backdrop-blur-md px-4 py-1.5 text-xs font-medium text-stone-300 mb-8 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-rose-500 mr-2" />
                  Creative & Strategy
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6"
              >
                Brands that command <br className="hidden lg:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-500">attention.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-stone-400 mb-10 max-w-xl leading-relaxed"
              >
                We build visually striking, culturally relevant brand identities that break through the noise and leave a lasting impression.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-stone-950 shadow-xl hover:bg-stone-200 transition-all duration-300"
                >
                  Start Your Brand Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            </div>

            {/* Floating Abstract Brand Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative lg:h-[600px] flex justify-center lg:justify-end items-center mt-12 lg:mt-0 viewpoint-group"
            >
              <div className="relative w-full max-w-lg aspect-square">
                 {/* Main Poster */}
                 <motion.div
                   animate={{ y: [0, -10, 0], rotate: [-2, -2, -2] }}
                   transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute top-[10%] right-[10%] w-[70%] h-[70%] bg-stone-900 rounded-2xl shadow-2xl overflow-hidden z-20 border border-stone-800 p-6 flex flex-col"
                 >
                   <div className="flex-1 rounded-xl bg-gradient-to-br from-rose-500 to-orange-500 relative overflow-hidden flex items-center justify-center">
                      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/noise/400/400')] opacity-20 mix-blend-overlay" />
                      <Shapes className="w-24 h-24 text-white opacity-80 mix-blend-overlay" />
                   </div>
                   <div className="mt-4 flex justify-between items-end">
                     <div>
                       <div className="text-white font-bold font-display text-lg">Aura</div>
                       <div className="text-stone-500 text-xs uppercase tracking-widest">Brand Guidelines</div>
                     </div>
                     <div className="text-rose-500 text-sm font-mono">2026</div>
                   </div>
                 </motion.div>

                 {/* Typography Card */}
                 <motion.div
                   animate={{ y: [0, 15, 0], rotate: [5, 5, 5] }}
                   transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                   className="absolute bottom-[10%] left-[5%] w-[45%] bg-white rounded-2xl shadow-xl p-5 z-30"
                 >
                    <div className="text-xs font-bold text-stone-400 mb-2 uppercase tracking-wider">Typography</div>
                    <div className="font-display text-5xl font-bold text-stone-950 mb-1">Aa</div>
                    <div className="text-stone-500 text-sm">Inter Grotesk</div>
                 </motion.div>

                 {/* Color Palette Card */}
                 <motion.div
                   animate={{ y: [0, -15, 0] }}
                   transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                   className="absolute top-[20%] left-[0%] w-[35%] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] p-4 z-10"
                 >
                    <div className="text-xs font-bold text-stone-400 mb-3 uppercase tracking-wider">Colors</div>
                    <div className="space-y-2">
                      <div className="h-8 rounded-lg bg-rose-500 flex items-center px-2 text-[10px] text-white/80 font-mono">#F43F5E</div>
                      <div className="h-8 rounded-lg bg-orange-500 flex items-center px-2 text-[10px] text-white/80 font-mono">#F97316</div>
                      <div className="h-8 rounded-lg bg-stone-900 flex items-center px-2 text-[10px] text-white/80 font-mono">#1C1917</div>
                    </div>
                 </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Intro Overview */}
      <section className="py-24 bg-white border-b border-stone-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-stone-950 leading-tight mb-6">
              A great brand is a <span className="italic text-rose-500">promise</span>, beautifully delivered.
            </h2>
            <p className="text-xl text-stone-600 leading-relaxed">
              We translate your business objectives into powerful visual stories. From logo design to comprehensive media campaigns, we engineer aesthetics that resonate and convert.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-16">
             <span className="text-rose-500 font-semibold tracking-wider uppercase text-sm mb-2 block">Our Expertise</span>
            <h2 className="font-display text-4xl font-bold text-stone-950 mb-6">Creative Services</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 lg:p-10 rounded-3xl border border-stone-200 shadow-sm hover:shadow-xl hover:border-rose-200 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-rose-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-rose-100 transition-transform">
                  {cap.icon}
                </div>
                <h3 className="font-display text-2xl font-bold text-stone-950 mb-4">{cap.title}</h3>
                <p className="text-stone-600 leading-relaxed">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid Portfolio / Outputs */}
      <section className="py-24 bg-stone-950 text-white overflow-hidden relative">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-4xl font-bold mb-6">Creative Outputs</h2>
            <p className="text-xl text-stone-400">A glimpse into the visual identities and campaigns we've crafted for forward-thinking brands.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {portfolioItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative aspect-[4/3] rounded-3xl overflow-hidden group ${item.span}`}
              >
                <Image 
                  src={item.image} 
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-stone-950/40 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="text-white font-display font-bold text-2xl">{item.title}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Brand Value */}
      <section className="py-24 bg-white border-y border-stone-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-950 mb-6">Value beyond aesthetics.</h2>
              <p className="text-xl text-stone-600 mb-8 leading-relaxed">
                A strong brand identity is your most valuable asset. It builds trust instantly, justifies premium pricing, and creates irrational loyalty among your audience.
              </p>
              
              <ul className="space-y-6">
                {[
                  { title: "Recognition", desc: "Stand out in crowded markets with a distinctive visual voice." },
                  { title: "Trust", desc: "Professional, cohesive branding implies quality and reliability." },
                  { title: "Equity", desc: "A great brand increases the overall enterprise value of your company." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                     <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center shrink-0 mt-1">
                       <Crosshair className="w-4 h-4 text-rose-500" />
                     </div>
                     <div>
                       <h4 className="font-bold text-lg text-stone-950">{item.title}</h4>
                       <p className="text-stone-600">{item.desc}</p>
                     </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl"
            >
               <Image 
                 src="https://picsum.photos/seed/brandvalue/1000/1000"
                 alt="Brand Value Illustration"
                 fill
                 className="object-cover"
                 referrerPolicy="no-referrer"
               />
            </motion.div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-24 bg-stone-50">
         <div className="container mx-auto px-6 max-w-7xl">
           <motion.div 
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="bg-rose-600 rounded-[3rem] p-12 md:p-24 text-center shadow-2xl relative overflow-hidden"
           >
             <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/noise/800/800')] opacity-10 mix-blend-overlay"></div>
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
             
             <div className="relative z-10 max-w-3xl mx-auto text-white">
               <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">Let's craft your identity.</h2>
               <p className="text-xl text-rose-100 mb-10">
                 Partner with our creative team to build a brand that leaves a legacy.
               </p>
               <Link
                 href="/contact"
                 className="inline-flex items-center justify-center rounded-full bg-stone-950 px-8 py-4 text-sm font-semibold text-white shadow-xl hover:bg-stone-800 transition-all duration-300"
               >
                 Discuss Your Vision
                 <ArrowRight className="ml-2 h-4 w-4" />
               </Link>
             </div>
           </motion.div>
         </div>
      </section>
      
    </main>
  );
}
