"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, LayoutGrid, Calendar, Target, CheckCircle2 } from "lucide-react";
import { portfolioProjects } from "@/lib/portfolio";

export function CaseStudyClient({ project }: { project: typeof portfolioProjects[0] }) {
  return (
    <main className="min-h-screen bg-stone-50 selection:bg-orange-200">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-stone-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={project.image}
            alt={project.title}
            fill
            className="object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-950/40" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <Link href="/portfolio" className="inline-flex items-center text-sm font-medium text-stone-400 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>

          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center rounded-full border border-stone-800 bg-stone-900/60 backdrop-blur-md px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-stone-300 mb-8 shadow-sm">
                {project.category}
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6"
            >
              {project.title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-stone-400 max-w-2xl leading-relaxed"
            >
              {project.summary}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Project Overview Details */}
      <section className="py-8 bg-white border-b border-stone-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             <div className="space-y-1">
               <div className="text-sm font-semibold text-stone-400 uppercase tracking-wider flex items-center gap-2">
                 <Target className="w-4 h-4" /> Client
               </div>
               <div className="font-bold text-stone-950 text-lg">{project.client}</div>
             </div>
             <div className="space-y-1">
               <div className="text-sm font-semibold text-stone-400 uppercase tracking-wider flex items-center gap-2">
                 <LayoutGrid className="w-4 h-4" /> Category
               </div>
               <div className="font-bold text-stone-950 text-lg">{project.category}</div>
             </div>
             <div className="space-y-1">
               <div className="text-sm font-semibold text-stone-400 uppercase tracking-wider flex items-center gap-2">
                 <Calendar className="w-4 h-4" /> Timeline
               </div>
               <div className="font-bold text-stone-950 text-lg">{project.timeline}</div>
             </div>
             <div className="space-y-1">
               <div className="text-sm font-semibold text-stone-400 uppercase tracking-wider flex items-center gap-2">
                 <CheckCircle2 className="w-4 h-4" /> Status
               </div>
               <div className="font-bold text-stone-950 text-lg">Completed</div>
             </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-16">
             
             {/* Left Column - Narrative */}
             <div className="lg:col-span-8 space-y-20">
                {/* The Challenge */}
                <motion.div
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: "-100px" }}
                   transition={{ duration: 0.6 }}
                >
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-950 mb-6">The Challenge</h2>
                  <div className="prose prose-lg prose-stone max-w-none text-stone-600 leading-relaxed">
                    <p>{project.challenge}</p>
                  </div>
                </motion.div>

                {/* Main Image */}
                <motion.div
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.8 }}
                   className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl border border-stone-200"
                >
                  <Image 
                    src={project.image}
                    alt={`${project.title} Hero Image`}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>

                {/* The Solution */}
                <motion.div
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: "-100px" }}
                   transition={{ duration: 0.6 }}
                >
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-950 mb-6">The Solution</h2>
                  <div className="prose prose-lg prose-stone max-w-none text-stone-600 leading-relaxed">
                    <p>{project.solution}</p>
                  </div>
                </motion.div>

                {/* Gallery */}
                <motion.div
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: "-100px" }}
                   transition={{ duration: 0.6 }}
                   className="space-y-6"
                >
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-950 mb-6">Visuals</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {project.gallery.map((img: string, i: number) => (
                      <div key={i} className={`relative rounded-[2rem] overflow-hidden shadow-lg border border-stone-200 hover:shadow-xl transition-shadow ${i === 2 ? 'md:col-span-2 aspect-video' : 'aspect-[4/3]'}`}>
                         <Image 
                           src={img}
                           alt={`${project.title} Gallery Image ${i + 1}`}
                           fill
                           className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                           referrerPolicy="no-referrer"
                         />
                      </div>
                    ))}
                  </div>
                </motion.div>

             </div>

             {/* Right Column - Sticky Sidebar */}
             <div className="lg:col-span-4">
                <div className="sticky top-32 space-y-12">
                   
                   {/* Results / Impact */}
                   <motion.div
                     initial={{ opacity: 0, x: 20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6 }}
                     className="bg-stone-950 text-white rounded-[2rem] p-8 shadow-2xl"
                   >
                     <h3 className="font-display text-2xl font-bold mb-8">Outcomes</h3>
                     <div className="space-y-8">
                       {project.impact.map((item: any, i: number) => (
                         <div key={i} className="border-l-2 border-stone-800 pl-6">
                            <div className="font-display text-4xl md:text-5xl font-bold text-orange-500 mb-2">{item.metric}</div>
                            <div className="text-stone-400 text-sm tracking-wide uppercase font-semibold">{item.label}</div>
                         </div>
                       ))}
                     </div>
                   </motion.div>

                </div>
             </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-stone-100 border-t border-stone-200">
         <div className="container mx-auto px-6 max-w-7xl text-center">
             <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-950 mb-6">Ready for similar results?</h2>
             <p className="text-xl text-stone-600 mb-10 max-w-2xl mx-auto">
               Partner with QubiQode to elevate your digital presence and achieve measurable business outcomes.
             </p>
             <Link
               href="/contact"
               className="inline-flex items-center justify-center rounded-full bg-stone-950 px-8 py-4 text-sm font-semibold text-white shadow-xl hover:bg-stone-800 transition-all duration-300"
             >
               Start Your Project
               <ArrowRight className="ml-2 h-4 w-4" />
             </Link>
         </div>
      </section>
      
    </main>
  );
}
