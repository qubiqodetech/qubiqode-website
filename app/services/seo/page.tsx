"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Search, BarChart3, Globe, FileText, Target, CheckCircle2, Activity, Zap, TrendingUp, SearchCheck, LineChart } from "lucide-react";

const seoPillars = [
  {
    icon: <Zap className="w-8 h-8 text-emerald-500" />,
    title: "Technical SEO",
    description: "We optimize site architecture, crawlability, and indexing to ensure search engines can effortlessly understand your platform.",
    features: ["Core Web Vitals Optimization", "Schema Markup", "XML Sitemaps", "Mobile-first Indexing"]
  },
  {
    icon: <FileText className="w-8 h-8 text-emerald-500" />,
    title: "On-Page SEO",
    description: "Strategic placement of targeted keywords within highly optimized meta tags, headers, and perfectly structured HTML.",
    features: ["Meta Tag Optimization", "Header Tag Structure", "Internal Linking Strategy", "Image SEO & Alt Texts"]
  },
  {
    icon: <Target className="w-8 h-8 text-emerald-500" />,
    title: "Keyword Strategy",
    description: "Data-driven research to identify high-intent keywords that your target audience is actively searching for.",
    features: ["Competitor Gap Analysis", "Long-tail Keyword Discovery", "Search Intent Mapping", "Search Volume Tracking"]
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-emerald-500" />,
    title: "Content Optimization",
    description: "Producing and structuring high-quality content that satisfies user intent and establishes topical authority.",
    features: ["Content Audits", "Topic Clusters", "Readability Improvements", "E-E-A-T Compliance"]
  }
];

const outcomes = [
  { metric: "+150%", label: "Organic Traffic Growth", desc: "Average increase in targeted organic traffic within 6-12 months." },
  { metric: "Page 1", label: "Rankings", desc: "Achieving first-page visibility for high-value competitive keywords." },
  { metric: "+85%", label: "Conversion Rate", desc: "Driving relevant intent-based traffic that naturally converts." }
];

export default function SEOPage() {
  return (
    <main className="min-h-screen bg-stone-50 selection:bg-emerald-200">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-stone-950 text-white">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-600/20 via-emerald-900/10 to-transparent rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-zinc-900/10 to-transparent rounded-full blur-[100px] pointer-events-none" />
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
                  <Search className="w-3.5 h-3.5 text-emerald-500 mr-2" />
                  Data-Driven SEO
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6"
              >
                Dominate search. <br className="hidden lg:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-600">Drive organic growth.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-stone-400 mb-10 max-w-xl leading-relaxed"
              >
                We blend technical engineering with strategic content optimization to ensure your brand captures high-intent traffic and ranks above the competition.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-8 py-4 text-sm font-semibold text-stone-950 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300"
                >
                  Get a Free SEO Audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            </div>

            {/* Floating Analytics Graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative lg:h-[600px] flex justify-center lg:justify-end items-center mt-12 lg:mt-0"
            >
              <div className="relative w-full max-w-lg aspect-square bg-stone-900 border border-stone-800 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col p-6">
                
                {/* Simulated Dashboard Header */}
                <div className="flex justify-between items-center mb-8 border-b border-stone-800 pb-4">
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center">
                       <BarChart3 className="w-5 h-5 text-emerald-500" />
                     </div>
                     <div>
                       <div className="text-white font-semibold text-sm">Organic Performance</div>
                       <div className="text-stone-500 text-xs text-emerald-400/80">Last 30 Days</div>
                     </div>
                   </div>
                   <div className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-semibold border border-emerald-500/20">
                     +142% Traffic
                   </div>
                </div>

                {/* Simulated Chart Area */}
                <div className="flex-1 relative flex items-end justify-between gap-2 pb-4">
                   {/* Grid Lines */}
                   <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                     <div className="w-full h-px bg-stone-700"></div>
                     <div className="w-full h-px bg-stone-700"></div>
                     <div className="w-full h-px bg-stone-700"></div>
                     <div className="w-full h-px bg-stone-700"></div>
                   </div>

                   {/* Bars */}
                   {[30, 45, 40, 60, 55, 75, 70, 90, 85, 100].map((height, i) => (
                     <motion.div 
                       key={i}
                       className="relative w-full bg-stone-800 rounded-t-sm group"
                       initial={{ height: 0 }}
                       animate={{ height: `${height}%` }}
                       transition={{ duration: 1, delay: 0.5 + (i * 0.1), type: "spring" }}
                     >
                        <motion.div 
                          className="absolute bottom-0 left-0 right-0 bg-emerald-500 rounded-t-sm"
                          initial={{ height: 0 }}
                          animate={{ height: `${height * 0.7}%` }}
                          transition={{ duration: 1.2, delay: 0.7 + (i * 0.1), type: "spring" }}
                        />
                        {/* Tooltip on hover simulation */}
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-stone-900 text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointers-events-none">
                          {height * 102} Visits
                        </div>
                     </motion.div>
                   ))}
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-stone-800">
                  <div>
                    <div className="text-stone-500 text-xs mb-1">Keywords</div>
                    <div className="text-white font-mono text-lg">2,405</div>
                  </div>
                  <div>
                    <div className="text-stone-500 text-xs mb-1">Avg. Position</div>
                    <div className="text-emerald-400 font-mono text-lg flex items-center gap-1">2.4 <ArrowRight className="w-3 h-3 -rotate-45" /></div>
                  </div>
                  <div>
                    <div className="text-stone-500 text-xs mb-1">Health Score</div>
                    <div className="text-white font-mono text-lg">98/100</div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Intro Overview - SEO Philosophy */}
      <section className="py-24 bg-white border-b border-stone-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-stone-950 leading-tight mb-6">
              We decode search algorithms to bring your ideal customers directly to you.
            </h2>
            <p className="text-xl text-stone-600 leading-relaxed">
              SEO is no longer just about stuffing keywords. It's an intricate balance of technical performance, topical authority, and exceptional user experience. We engineer sites that Google loves to rank.
            </p>
          </div>
        </div>
      </section>

      {/* The 4 Pillars of SEO */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-16 text-center max-w-3xl mx-auto">
             <h2 className="font-display text-4xl font-bold text-stone-950 mb-6">Our SEO Methodology</h2>
             <p className="text-xl text-stone-600">A comprehensive approach that attacks search engine algorithms from every angle, ensuring long-term sustainable growth.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {seoPillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 lg:p-10 rounded-3xl border border-stone-200 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center mb-8 border border-emerald-100">
                  {pillar.icon}
                </div>
                <h3 className="font-display text-2xl font-bold text-stone-950 mb-4">{pillar.title}</h3>
                <p className="text-stone-600 leading-relaxed mb-8">{pillar.description}</p>
                
                <ul className="space-y-3">
                  {pillar.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm font-medium text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-3 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Web Vitals & Performance Highlight */}
      <section className="py-24 bg-stone-950 text-white overflow-hidden relative">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex flex-col items-start gap-4 mb-6">
                <span className="uppercase tracking-widest text-xs font-semibold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-4 py-1.5">Technical Edge</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Built for Speed & Indexing</h2>
              <p className="text-xl text-stone-400 mb-8 leading-relaxed">
                Page experience is a critical ranking factor. By utilizing Next.js, static site generation, and optimized edge networks, we guarantee perfect Core Web Vitals out of the box.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-10">
                 <div className="border-l-2 border-emerald-500 pl-4">
                    <div className="text-3xl font-display font-bold text-white mb-1">&lt; 0.5s</div>
                    <div className="text-sm text-stone-400">Largest Contentful Paint</div>
                 </div>
                 <div className="border-l-2 border-emerald-500 pl-4">
                    <div className="text-3xl font-display font-bold text-white mb-1">0ms</div>
                    <div className="text-sm text-stone-400">Cumulative Layout Shift</div>
                 </div>
                 <div className="border-l-2 border-emerald-500 pl-4">
                    <div className="text-3xl font-display font-bold text-white mb-1">100/100</div>
                    <div className="text-sm text-stone-400">Lighthouse SEO Score</div>
                 </div>
                 <div className="border-l-2 border-emerald-500 pl-4">
                    <div className="text-3xl font-display font-bold text-white mb-1">100%</div>
                    <div className="text-sm text-stone-400">Mobile Friendly</div>
                 </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-video lg:aspect-square bg-stone-900 rounded-[2rem] border border-stone-800 p-8 flex items-center justify-center overflow-hidden shadow-2xl"
            >
               {/* Abstract Performance Graphic */}
               <div className="absolute inset-0 flex items-center justify-center opacity-20">
                 <div className="w-[150%] h-[150%] bg-[url('https://picsum.photos/seed/gridpattern/800/800')] mix-blend-overlay animate-[spin_120s_linear_infinite]" />
               </div>
               
               <div className="relative z-10 w-full max-w-sm">
                 <div className="flex flex-col items-center justify-center w-48 h-48 mx-auto rounded-full border-[8px] border-stone-800 relative">
                   <svg className="absolute inset-0 w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                     <circle cx="50" cy="50" r="46" fill="none" stroke="#10b981" strokeWidth="8" strokeDasharray="289" strokeDashoffset="0" className="opacity-100" />
                   </svg>
                   <div className="text-5xl font-display font-bold text-emerald-400 text-center leading-none">100</div>
                   <div className="text-[10px] text-stone-400 uppercase tracking-widest mt-2">SEO Score</div>
                 </div>
                 
                 <div className="mt-8 space-y-4">
                   <div className="flex items-center justify-between text-sm bg-stone-800/50 p-3 rounded-lg border border-stone-700/50">
                     <span className="text-stone-300">Crawlability</span>
                     <span className="text-emerald-400 font-mono">Passed</span>
                   </div>
                   <div className="flex items-center justify-between text-sm bg-stone-800/50 p-3 rounded-lg border border-stone-700/50">
                     <span className="text-stone-300">Internal Links</span>
                     <span className="text-emerald-400 font-mono">Optimized</span>
                   </div>
                   <div className="flex items-center justify-between text-sm bg-stone-800/50 p-3 rounded-lg border border-stone-700/50">
                     <span className="text-stone-300">HTTPS Security</span>
                     <span className="text-emerald-400 font-mono">Secure</span>
                   </div>
                 </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reporting & Outcomes */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-4xl font-bold text-stone-950 mb-6">Measurable Outcomes</h2>
            <p className="text-xl text-stone-600">We track everything. You receive clear, comprehensive reporting on exactly how our SEO efforts are driving revenue.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             {outcomes.map((outcome, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-stone-50 p-8 rounded-3xl border border-stone-200 text-center"
                >
                  <div className="text-5xl font-display font-bold text-stone-950 mb-4">{outcome.metric}</div>
                  <h3 className="font-bold text-lg text-emerald-600 uppercase tracking-widest text-sm mb-3">{outcome.label}</h3>
                  <p className="text-stone-600">{outcome.desc}</p>
                </motion.div>
             ))}
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
             className="bg-emerald-950 rounded-[3rem] p-12 md:p-24 text-center shadow-xl relative overflow-hidden"
           >
             <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/seo-noise/800/800')] opacity-5 mix-blend-overlay"></div>
             
             <div className="relative z-10 max-w-3xl mx-auto text-white">
               <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Stop missing out on organic traffic.</h2>
               <p className="text-xl text-emerald-100/80 mb-10">
                 Request a comprehensive SEO audit today and discover exactly what's holding your website back from Page 1.
               </p>
               <Link
                 href="/contact"
                 className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-8 py-4 text-sm font-semibold text-stone-950 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300"
               >
                 Get Your Free Audit
                 <ArrowRight className="ml-2 h-4 w-4" />
               </Link>
             </div>
           </motion.div>
         </div>
      </section>
      
    </main>
  );
}
