"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, FileText, Figma, Code, BookOpen, Layers, CheckCircle2 } from "lucide-react";

// Mock data for resources
const categories = ["All", "Design", "Development", "Strategy", "Templates"];

const resources = [
  {
    id: 1,
    title: "QubiQode UI Kit v1.0",
    description: "A comprehensive Figma UI kit containing over 200+ components, typography styles, and color palettes we use for enterprise projects.",
    category: "Design",
    type: "Figma File",
    icon: <Figma className="w-5 h-5" />,
    image: "https://picsum.photos/seed/resource1/800/600",
    featured: true
  },
  {
    id: 2,
    title: "SaaS Landing Page Boilerplate",
    description: "A production-ready Next.js 15 & Tailwind CSS boilerplate tailored for high-converting SaaS landing pages.",
    category: "Development",
    type: "Code Repository",
    icon: <Code className="w-5 h-5" />,
    image: "https://picsum.photos/seed/resource2/800/600",
    featured: true
  },
  {
    id: 3,
    title: "The B2B Brand Strategy Workshop",
    description: "Our internal FigJam template used to conduct high-value brand strategy workshops with enterprise clients.",
    category: "Strategy",
    type: "FigJam Template",
    icon: <Layers className="w-5 h-5" />,
    image: "https://picsum.photos/seed/resource3/800/600",
    featured: false
  },
  {
    id: 4,
    title: "Web App Launch Checklist",
    description: "A 50-point QA, SEO, and performance checklist to ensure your Next.js application is ready for production.",
    category: "Development",
    type: "Notion Template",
    icon: <FileText className="w-5 h-5" />,
    image: "https://picsum.photos/seed/resource4/800/600",
    featured: false
  },
  {
    id: 5,
    title: "High-Converting Pitch Deck",
    description: "The exact presentation template we used to close our first 7-figure enterprise retainer.",
    category: "Templates",
    type: "Keynote File",
    icon: <BookOpen className="w-5 h-5" />,
    image: "https://picsum.photos/seed/resource5/800/600",
    featured: false
  },
  {
    id: 6,
    title: "Motion Guidelines & CSS Tokens",
    description: "A standardized set of Framer Motion variants and Tailwind CSS configurations for premium micro-interactions.",
    category: "Design",
    type: "Code Snippets",
    icon: <Code className="w-5 h-5" />,
    image: "https://picsum.photos/seed/resource6/800/600",
    featured: false
  }
];

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredResources = resources.filter(res => {
    if (activeCategory === "All") return true;
    return res.category === activeCategory;
  });

  return (
    <main className="min-h-screen bg-stone-50 selection:bg-primary-200">
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-48 lg:pb-24 border-b border-stone-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center rounded-full border border-stone-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-stone-600 mb-8 shadow-sm"
          >
            Resources & Freebies
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-stone-950 leading-[1.1] mb-6 max-w-4xl"
          >
             Tools for builders & <br className="hidden md:block"/>
            <span className="text-primary-600">creative professionals.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-stone-600 max-w-2xl leading-relaxed"
          >
            A curated library of UI kits, boilerplates, templates, and strategic frameworks we use internally. Available for you, absolutely free.
          </motion.p>
        </div>
      </section>

      {/* Featured Resources (Lead Magnets) */}
      <section className="py-24 bg-white relative z-10">
         <div className="container mx-auto px-6 max-w-7xl">
            <div className="mb-16">
               <h2 className="font-display text-3xl font-bold text-stone-950 mb-4">Featured Downloads</h2>
               <p className="text-stone-600 text-lg">Our most requested, high-value assets.</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
               {resources.filter(r => r.featured).map((resource, i) => (
                  <motion.div
                    key={resource.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    className="group bg-stone-950 flex flex-col sm:flex-row rounded-[2rem] overflow-hidden shadow-xl border border-stone-800"
                  >
                     <div className="sm:w-2/5 relative min-h-[250px] sm:min-h-full bg-stone-900 border-r border-stone-800 overflow-hidden">
                        <Image 
                          src={resource.image}
                          alt={resource.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                            {resource.icon} {resource.type}
                          </span>
                        </div>
                     </div>
                     <div className="sm:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                        <div className="text-primary-500 text-xs font-bold uppercase tracking-wider mb-3">
                          {resource.category}
                        </div>
                        <h3 className="font-display text-2xl font-bold text-white mb-4 leading-tight">
                          {resource.title}
                        </h3>
                        <p className="text-stone-400 text-sm leading-relaxed mb-8">
                          {resource.description}
                        </p>
                        
                        <button className="mt-auto inline-flex items-center text-sm font-semibold text-white bg-stone-800 hover:bg-primary-600 w-fit px-6 py-3 rounded-xl transition-colors duration-300 group/btn">
                           Download File 
                           <Download className="w-4 h-4 ml-2 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                        </button>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Resource Library Grid */}
      <section className="py-24 bg-stone-50 border-t border-stone-200" id="library">
         <div className="container mx-auto px-6 max-w-7xl">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
               <div>
                  <h2 className="font-display text-4xl font-bold text-stone-950 mb-4">Complete Library</h2>
                  <p className="text-lg text-stone-600">Browse by category to find the exact tool you need.</p>
               </div>
               
               <div className="flex flex-wrap gap-2">
                 {categories.map(category => (
                   <button
                     key={category}
                     onClick={() => setActiveCategory(category)}
                     className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                       activeCategory === category 
                         ? "bg-stone-950 text-white shadow-md" 
                         : "bg-white border border-stone-200 text-stone-600 hover:bg-stone-100"
                     }`}
                   >
                     {category}
                   </button>
                 ))}
               </div>
            </div>

            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredResources.map((resource, i) => (
                  <motion.div
                    layout
                    key={resource.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-primary-200 transition-all duration-500 group flex flex-col"
                  >
                     <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden border-b border-stone-100">
                        <Image 
                          src={resource.image}
                          alt={resource.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-stone-900 px-3 py-1.5 rounded-full text-xs font-bold tracking-wider shadow-sm flex items-center gap-1.5">
                          {resource.icon} {resource.type}
                        </div>
                     </div>
                     
                     <div className="p-8 flex flex-col flex-1">
                        <div className="text-primary-600 text-xs font-bold uppercase tracking-wider mb-2">
                          {resource.category}
                        </div>
                        <h3 className="font-display font-bold text-xl text-stone-950 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                          {resource.title}
                        </h3>
                        <p className="text-stone-600 text-sm leading-relaxed mb-8 flex-1 line-clamp-3">
                          {resource.description}
                        </p>
                        
                        <div className="mt-auto border-t border-stone-100 pt-6 flex items-center justify-between">
                           <span className="text-sm font-semibold text-stone-400">Free Download</span>
                           <button className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-900 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                              <Download className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                           </button>
                        </div>
                     </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
            
            {filteredResources.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-20 text-center"
              >
                <div className="text-stone-400 text-lg">More resources in this category coming soon.</div>
                <button 
                  onClick={() => setActiveCategory("All")}
                  className="mt-4 text-stone-950 font-semibold underline underline-offset-4 hover:text-stone-600 transition-colors"
                >
                  View all resources
                </button>
              </motion.div>
            )}

         </div>
      </section>

      {/* Newsletter / CTA Section */}
      <section className="py-24 bg-white border-t border-stone-200">
         <div className="container mx-auto px-6 max-w-5xl">
           <motion.div 
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="bg-primary-600 rounded-[3rem] p-10 md:p-16 shadow-xl relative overflow-hidden text-center text-white"
           >
             <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/noise/800/800')] opacity-10 mix-blend-overlay"></div>
             
             <div className="relative z-10 max-w-2xl mx-auto">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-md">
                   <Download className="w-8 h-8 text-white" />
                </div>
                <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">Get new resources directly in your inbox.</h2>
                <p className="text-lg text-primary-100 leading-relaxed mb-10">
                  Join 10,000+ designers and developers who receive our latest tools, UI kits, and frameworks before anyone else.
                </p>
                
                <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                   <input 
                     type="email" 
                     placeholder="Enter your email"
                     required
                     className="w-full bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all font-medium placeholder:text-primary-200"
                   />
                   <button 
                     type="submit"
                     className="shrink-0 rounded-full bg-stone-950 px-8 py-4 text-sm font-semibold text-white shadow-xl hover:bg-stone-800 transition-all duration-300"
                   >
                     Subscribe
                   </button>
                </form>
             </div>
           </motion.div>
         </div>
      </section>

    </main>
  );
}
