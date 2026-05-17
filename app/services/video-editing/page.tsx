"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Film, Video, Play, Scissors, Clapperboard, Wand2, Layers, MonitorPlay, FastForward } from "lucide-react";

const capabilities = [
  {
    icon: <Film className="w-8 h-8 text-indigo-400" />,
    title: "Commercial Promos",
    description: "High-impact promotional videos designed to grab attention and drive conversions across digital platforms."
  },
  {
    icon: <Scissors className="w-8 h-8 text-indigo-400" />,
    title: "Social Media Reels",
    description: "Fast-paced, engaging short-form content optimized for TikTok, Instagram Reels, and YouTube Shorts."
  },
  {
    icon: <Wand2 className="w-8 h-8 text-indigo-400" />,
    title: "Motion Graphics",
    description: "Complex 2D and 3D animations that explain your product, visualize data, or add flair to your content."
  },
  {
    icon: <Layers className="w-8 h-8 text-indigo-400" />,
    title: "Logo Animation",
    description: "Dynamic logo reveals that make your brand identity memorable and bring static designs to life."
  }
];

const portfolioItems = [
  { image: "https://picsum.photos/seed/video1/800/600", title: "Tech Product Launch", category: "Commercial" },
  { image: "https://picsum.photos/seed/video2/800/600", title: "Apparel Summer Reel", category: "Social Media" },
  { image: "https://picsum.photos/seed/video3/800/600", title: "SaaS Explainer App", category: "Motion Graphics" },
  { image: "https://picsum.photos/seed/video4/800/600", title: "Corporate Event Aftermovie", category: "Editing" },
];

const processSteps = [
  {
    number: "01",
    title: "Pre-Production & Storyboarding",
    description: "Scripting, scene planning, and establishing the visual direction before the timeline is even touched."
  },
  {
    number: "02",
    title: "Rough Cut & Pacing",
    description: "Assembling the footage to find the story, focusing on rhythm, timing, and narrative flow."
  },
  {
    number: "03",
    title: "VFX & Motion Design",
    description: "Adding graphic elements, text animations, and visual effects to elevate the production value."
  },
  {
    number: "04",
    title: "Color Grading & Sound Design",
    description: "Cinematic color treatments and immersive audio mixing that bring the final piece to life."
  }
];

export default function VideoEditingPage() {
  return (
    <main className="min-h-screen bg-stone-950 text-white selection:bg-indigo-500/30">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-600/20 via-blue-900/10 to-transparent rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-[20%] right-[5%] w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-600/20 via-indigo-900/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
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
                <div className="inline-flex items-center rounded-full border border-stone-800 bg-stone-900/60 backdrop-blur-md px-4 py-1.5 text-xs font-medium text-indigo-300 mb-8 shadow-sm">
                  <MonitorPlay className="w-3.5 h-3.5 text-indigo-400 mr-2" />
                  Post-Production Studio
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6"
              >
                Stories that move. <br className="hidden lg:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">Content that connects.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-stone-400 mb-10 max-w-xl leading-relaxed"
              >
                From cinematic color grading to seamless motion graphics, we engineer visual narratives designed to captivate your audience.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:bg-indigo-500 hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] transition-all duration-300"
                >
                  Start Your Production
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            </div>

            {/* Cinematic Floating Timeline/Video Graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative lg:h-[600px] flex justify-center lg:justify-end items-center mt-12 lg:mt-0"
            >
              <div className="relative w-full max-w-lg aspect-video md:aspect-[4/3] bg-stone-900 border border-stone-800 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col pt-6">
                
                {/* Main Video Area */}
                <div className="px-6 flex-1 relative mb-6">
                  <div className="absolute inset-x-6 inset-y-0 rounded-2xl overflow-hidden shadow-2xl border border-stone-800">
                    <Image src="https://picsum.photos/seed/videomain/800/600" alt="Video Preview" fill className="object-cover opacity-80" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-indigo-950/20 mix-blend-overlay" />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group cursor-pointer hover:bg-white/20 transition-all">
                        <Play className="w-6 h-6 text-white ml-1 fill-white" />
                      </div>
                    </div>

                    {/* Scrub Bar Overlay */}
                     <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                       <span className="text-[10px] text-white font-mono">01:24</span>
                       <div className="flex-1 h-1 bg-white/20 rounded-full relative">
                         <div className="absolute top-0 left-0 h-full w-2/3 bg-indigo-500 rounded-full">
                           <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow" />
                         </div>
                       </div>
                       <span className="text-[10px] text-white/50 font-mono">02:15</span>
                     </div>
                  </div>
                </div>

                {/* Timeline UI Simulation */}
                <div className="h-32 bg-stone-950 border-t border-stone-800 p-4 space-y-2 overflow-hidden mask-image">
                  <div className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded flex items-center justify-center bg-stone-900 text-[10px] text-stone-500 font-mono">V1</div>
                    <div className="flex-1 flex gap-1 h-6">
                      <div className="w-1/4 h-full bg-indigo-600/40 rounded flex items-center px-2 overflow-hidden border border-indigo-500/20"><span className="text-[8px] text-indigo-200">A_Roll_01.mp4</span></div>
                      <div className="w-1/2 h-full bg-indigo-600/60 rounded flex items-center px-2 overflow-hidden border border-indigo-500/20"><span className="text-[8px] text-indigo-200">A_Roll_02_graded.mp4</span></div>
                      <div className="flex-1 h-full bg-indigo-600/40 rounded flex items-center px-2 overflow-hidden border border-indigo-500/20"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded flex items-center justify-center bg-stone-900 text-[10px] text-stone-500 font-mono">V2</div>
                    <div className="flex-1 flex gap-1 h-6 pl-12">
                      <div className="w-1/3 h-full bg-violet-600/50 rounded flex items-center px-2 overflow-hidden border border-violet-500/20"><span className="text-[8px] text-violet-200">B_Roll_overlay.mov</span></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded flex items-center justify-center bg-stone-900 text-[10px] text-stone-500 font-mono">A1</div>
                    <div className="flex-1 flex gap-1 h-6">
                      <div className="w-full h-full bg-emerald-600/30 rounded flex items-center px-2 overflow-hidden border border-emerald-500/20 relative">
                        {/* Audio waveform simulation */}
                        <div className="absolute inset-0 opacity-30 bg-[url('https://picsum.photos/seed/waveform/800/100')] bg-repeat-x" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Intro Overview */}
      <section className="py-24 border-b border-stone-800 bg-stone-900/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              Video is the most powerful medium to communicate your brand's essence.
            </h2>
            <p className="text-xl text-stone-400 leading-relaxed">
              We don't just edit footage; we architect emotion. We combine technical proficiency with narrative intuition to produce videos that compel action.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-16">
             <span className="text-indigo-400 font-semibold tracking-wider uppercase text-sm mb-2 block">Our Capabilities</span>
            <h2 className="font-display text-4xl font-bold text-white mb-6">Cinematic Delivery</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-stone-900/50 p-8 lg:p-10 rounded-3xl border border-stone-800 hover:bg-stone-900 transition-colors duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-stone-800 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-900/30 transition-all duration-300">
                  {cap.icon}
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">{cap.title}</h3>
                <p className="text-stone-400 leading-relaxed">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Grid */}
      <section className="py-24 bg-stone-900/20 overflow-hidden relative border-t border-stone-800">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-4xl font-bold mb-6">Recent Cuts</h2>
            <p className="text-xl text-stone-400">Award-winning edits and motion graphics produced for leading brands.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {portfolioItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative aspect-video rounded-3xl overflow-hidden group cursor-pointer border border-stone-800"
              >
                <Image 
                  src={item.image} 
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-stone-950/40 group-hover:bg-stone-950/20 transition-colors duration-500" />
                
                {/* Center Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100">
                  <div className="w-16 h-16 rounded-full bg-indigo-600/80 backdrop-blur flex items-center justify-center">
                     <Play className="w-6 h-6 text-white ml-1 fill-white" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-stone-950/90 to-transparent translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="text-indigo-400 text-sm font-semibold mb-2 uppercase tracking-wider">{item.category}</div>
                  <div className="text-white font-display font-bold text-2xl">{item.title}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 border-t border-stone-800">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-4xl font-bold text-white mb-6">The Editing Room</h2>
            <p className="text-xl text-stone-400">Our structured post-production workflow ensures high-quality output on time, every time.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: i * 0.1 }}
                 className="relative bg-stone-900/40 p-8 rounded-3xl border border-stone-800 hover:border-indigo-500/50 transition-colors"
               >
                 <div className="text-4xl font-display font-bold text-indigo-500/30 mb-6">{step.number}</div>
                 <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                 <p className="text-stone-400 leading-relaxed text-sm">{step.description}</p>
                 
               </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value prop / Detail Section */}
      <section className="py-24 bg-stone-900/50 border-t border-stone-800">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Polished to Perfection.</h2>
              <p className="text-xl text-stone-400 mb-8 leading-relaxed">
                Raw footage is just raw material. Sound design, pacing, and color grading dictate how your audience feels when they watch your content. We control every pixel and every audio wave.
              </p>
              
              <ul className="space-y-6 mt-10">
                 <li className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center shrink-0 mr-4">
                      <Film className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white mb-1">Color Grading</h4>
                      <p className="text-stone-400 text-sm">Consistent, cinematic looks that match your brand identity.</p>
                    </div>
                 </li>
                 <li className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center shrink-0 mr-4">
                      <Clapperboard className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white mb-1">Sound Design</h4>
                      <p className="text-stone-400 text-sm">Professional audio mixing, foley, and licensed soundtracks.</p>
                    </div>
                 </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square rounded-[3rem] overflow-hidden border border-stone-800 shadow-2xl"
            >
               <Image 
                 src="https://picsum.photos/seed/editingroom/1000/1000"
                 alt="Color Grading Interface"
                 fill
                 className="object-cover"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-stone-900/20 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-stone-800">
         <div className="container mx-auto px-6 max-w-7xl">
           <motion.div 
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="bg-stone-900 border border-stone-800 rounded-[3rem] p-12 md:p-24 text-center shadow-2xl relative overflow-hidden"
           >
             <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/noise2/800/800')] opacity-5 mix-blend-overlay"></div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[400px] bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none" />
             
             <div className="relative z-10 max-w-3xl mx-auto">
               <div className="inline-flex items-center gap-2 text-indigo-400 font-semibold uppercase tracking-widest text-sm mb-6">
                 <FastForward className="w-5 h-5" />
                 Ready to roll?
               </div>
               <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">Bring your vision to motion.</h2>
               <p className="text-xl text-stone-400 mb-10">
                 Let's collaborate to produce video content that elevates your brand and engages your audience.
               </p>
               <Link
                 href="/contact"
                 className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:bg-indigo-500 transition-all duration-300"
               >
                 Request a Quote
                 <ArrowRight className="ml-2 h-4 w-4" />
               </Link>
             </div>
           </motion.div>
         </div>
      </section>
      
    </main>
  );
}
