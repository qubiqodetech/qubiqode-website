"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Star, Quote, ChevronRight } from "lucide-react";
import { portfolioProjects } from "@/lib/portfolio";
import { Contact } from "@/components/sections/contact";

// Extract unique categories from portfolio projects
const uniqueCategories = Array.from(new Set(portfolioProjects.map(p => p.category)));
const categories = ["All", ...uniqueCategories];

const testimonials = [
  {
    quote: "QubiQode transformed our entire digital presence. The new web application is not only stunning but perfectly engineered for scale.",
    author: "Sarah Jenkins",
    role: "CTO, Nova Technologies",
    avatar: "https://picsum.photos/seed/avatar1/150/150"
  },
  {
    quote: "Their design team redefined our brand. The visual identity they created elevated us to a premium market position overnight.",
    author: "David Chen",
    role: "Founder, Aura Botanicals",
    avatar: "https://picsum.photos/seed/avatar2/150/150"
  }
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = portfolioProjects.filter(project => 
    activeCategory === "All" || project.category === activeCategory
  );

  return (
    <main className="min-h-screen bg-stone-50 selection:bg-stone-200 pt-32 pb-20 lg:pt-48 lg:pb-32">
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 max-w-7xl mb-24 md:mb-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center rounded-full border border-stone-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-stone-600 mb-8 shadow-sm">
              Our Work
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-stone-950 leading-[1.1] mb-6"
          >
            A showcase of <br className="hidden md:block"/>
            <span className="text-stone-400">digital excellence.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed"
          >
            Explore our curated portfolio of premium web applications, brand identities, and digital experiences engineered for industry leaders.
          </motion.p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-6 max-w-7xl mb-32">
        <div className="grid lg:grid-cols-2 gap-8">
          {portfolioProjects.slice(0, 2).map((project, i) => (
             <motion.div
               key={project.slug}
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: i * 0.1 }}
               className="group relative"
             >
                <Link href={`/portfolio/${project.slug}`} className="block p-4 sm:p-6 bg-white rounded-[2rem] sm:rounded-[3rem] border border-stone-200 shadow-sm hover:shadow-xl hover:border-stone-300 transition-all duration-500">
                  <div className="relative aspect-video sm:aspect-[4/3] rounded-2xl sm:rounded-[2rem] overflow-hidden mb-8">
                     <Image 
                       src={project.image}
                       alt={project.title}
                       fill
                       className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                       referrerPolicy="no-referrer"
                     />
                     <div className="absolute inset-0 bg-stone-950/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
                     
                     <div className="absolute top-4 sm:top-6 left-4 sm:left-6 flex flex-wrap gap-2">
                         <div className="block bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-stone-900 border border-white/20 shadow-sm whitespace-nowrap">
                           Featured
                         </div>
                     </div>
                  </div>
                  
                  <div className="px-2 sm:px-4 flex justify-between items-end">
                     <div className="flex-1 pr-4">
                       <div className="text-sm font-semibold text-stone-500 mb-2 uppercase tracking-wider">{project.category}</div>
                       <h3 className="font-display text-2xl sm:text-3xl font-bold text-stone-950 group-hover:text-orange-600 transition-colors duration-300 mb-2">{project.title}</h3>
                       <p className="text-sm text-stone-500 line-clamp-2">{project.summary}</p>
                     </div>
                     <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-stone-100 flex items-center justify-center shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300 mb-2">
                        <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6" />
                     </div>
                  </div>
                </Link>
             </motion.div>
          ))}
        </div>
      </section>

      {/* Filter and Grid Area */}
      <section className="bg-white border-y border-stone-200 py-24 md:py-32 mb-32">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="font-display text-4xl font-bold text-stone-950 mb-4">All Projects</h2>
              <p className="text-lg text-stone-600">A comprehensive look at our recent collaborations across various disciplines.</p>
            </div>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeCategory === category 
                      ? "bg-stone-950 text-white shadow-md shadow-stone-900/10" 
                      : "bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.slug}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                >
                   <Link href={`/portfolio/${project.slug}`} className="block group">
                     <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 bg-stone-100">
                        <Image 
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-stone-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />
                        
                        {/* Hover Overlay Details */}
                        <div className="absolute inset-0 bg-stone-950/80 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-white">
                          <p className="text-sm font-semibold text-stone-300 mb-3">{project.client}</p>
                          <p className="text-sm text-stone-400 mb-6 line-clamp-3">{project.summary}</p>
                          <div className="flex items-center text-sm font-bold text-white group/btn">
                             View Case Study <ChevronRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </div>
                        </div>
                     </div>
                     
                     <div className="flex justify-between items-start gap-4 px-2">
                       <div>
                         <h3 className="font-display font-bold text-xl text-stone-950 mb-1 group-hover:text-stone-600 transition-colors">{project.title}</h3>
                         <div className="text-sm text-stone-500">{project.category}</div>
                       </div>
                     </div>
                   </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center"
            >
              <div className="text-stone-400 text-lg">No projects found in this category.</div>
              <button 
                onClick={() => setActiveCategory("All")}
                className="mt-4 text-stone-950 font-semibold underline underline-offset-4 hover:text-stone-600 transition-colors"
              >
                Clear filters
              </button>
            </motion.div>
          )}
          
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-6 max-w-7xl mb-32">
         <div className="bg-stone-950 text-white rounded-[3rem] p-10 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col lg:flex-row gap-16 lg:items-center">
              <div className="lg:w-1/3">
                 <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Client Outcomes</h2>
                 <p className="text-stone-400 text-lg leading-relaxed">
                   We let our work speak for itself, but occasionally, our clients do the talking. Here&apos;s what they have to say about partnering with QubiQode.
                 </p>
              </div>
              
              <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8">
                {testimonials.map((testimonial, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="bg-stone-900/50 backdrop-blur-md p-8 rounded-3xl border border-stone-800"
                  >
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 fill-orange-500 text-orange-500" />
                      ))}
                    </div>
                    
                    <Quote className="w-10 h-10 text-stone-800 mb-4" />
                    
                    <p className="text-stone-300 leading-relaxed mb-8 text-sm md:text-base">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-stone-800">
                        <Image src={testimonial.avatar} alt={testimonial.author} width={48} height={48} className="object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm">{testimonial.author}</div>
                        <div className="text-stone-500 text-xs">{testimonial.role}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 max-w-7xl">
         <motion.div 
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="bg-stone-100 rounded-[3rem] p-12 md:p-24 text-center shadow-inner border border-stone-200"
         >
           <div className="max-w-3xl mx-auto">
             <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-950 mb-6">Have a project in mind?</h2>
             <p className="text-xl text-stone-600 mb-10">
               Let&apos;s collaborate to build something extraordinary. Our team is ready to tackle your most complex challenges.
             </p>
             <Link
               href="/contact"
               className="inline-flex items-center justify-center rounded-full bg-stone-950 px-8 py-4 text-sm font-semibold text-white shadow-xl hover:bg-stone-800 transition-all duration-300"
             >
               Start a Conversation
               <ArrowRight className="ml-2 h-4 w-4" />
             </Link>
           </div>
         </motion.div>
      </section>
      
    </main>
  );
}
