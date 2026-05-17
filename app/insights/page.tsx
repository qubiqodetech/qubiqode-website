"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search, Calendar, Clock, ChevronRight, Mail } from "lucide-react";

// Mock data for blog posts and categories
const categories = ["All", "Design", "Engineering", "Strategy", "Culture"];

const articles = [
  {
    title: "The Future of AI in Digital Product Design",
    excerpt: "How generative AI is reshaping the way we approach user interfaces, rapid prototyping, and automated user testing.",
    category: "Design",
    date: "Oct 24, 2026",
    readTime: "6 min read",
    image: "https://picsum.photos/seed/blog1/1200/800",
    slug: "future-of-ai-design",
    author: "Elena Rodriguez",
    featured: true
  },
  {
    title: "Why Next.js 15 is Our Default React Framework",
    excerpt: "An engineering deep-dive into the performance, developer experience, and architectural benefits we see with App Router and Turbopack.",
    category: "Engineering",
    date: "Oct 18, 2026",
    readTime: "8 min read",
    image: "https://picsum.photos/seed/blog2/800/600",
    slug: "nextjs-default-framework",
    author: "David Chen",
    featured: false
  },
  {
    title: "Beyond Aesthetics: Measuring Brand Equity",
    excerpt: "Visual identity is only half the battle. Here is how we quantify the impact of a rebrand on customer acquisition and retention.",
    category: "Strategy",
    date: "Oct 12, 2026",
    readTime: "5 min read",
    image: "https://picsum.photos/seed/blog3/800/600",
    slug: "measuring-brand-equity",
    author: "Sarah Jenkins",
    featured: false
  },
  {
    title: "Building High-Performing Remote Engineering Teams",
    excerpt: "The rituals, tools, and cultural pillars required to ship world-class software when your team is distributed across five time zones.",
    category: "Culture",
    date: "Oct 05, 2026",
    readTime: "7 min read",
    image: "https://picsum.photos/seed/blog4/800/600",
    slug: "remote-engineering-teams",
    author: "James Harding",
    featured: false
  },
  {
    title: "Micro-Interactions that Drive Macro Conversions",
    excerpt: "A look at five subtle UI animations that significantly improved our client's checkout completion rates.",
    category: "Design",
    date: "Sep 28, 2026",
    readTime: "4 min read",
    image: "https://picsum.photos/seed/blog5/800/600",
    slug: "micro-interactions-conversions",
    author: "Elena Rodriguez",
    featured: false
  },
  {
    title: "The Zero-Downtime Migration Playbook",
    excerpt: "Lessons learned from migrating a legacy monolithic database to a modern distributed architecture without losing a single transaction.",
    category: "Engineering",
    date: "Sep 20, 2026",
    readTime: "12 min read",
    image: "https://picsum.photos/seed/blog6/800/600",
    slug: "zero-downtime-migration",
    author: "David Chen",
    featured: false
  }
];

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const featuredArticle = articles.find(a => a.featured);
  const gridArticles = articles.filter(a => {
    if (a.featured && activeCategory === "All") return false; // Show featured only at top when "All" is selected
    if (activeCategory === "All") return true;
    return a.category === activeCategory;
  });

  return (
    <main className="min-h-screen bg-stone-50 selection:bg-primary-200">
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-48 lg:pb-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center rounded-full border border-stone-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-stone-600 mb-8 shadow-sm"
          >
            Insights & Thinking
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-stone-950 leading-[1.1] mb-6 max-w-4xl"
          >
             Thoughts on design, <br className="hidden md:block"/>
            <span className="text-stone-400">technology & growth.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-stone-600 max-w-2xl leading-relaxed"
          >
            Deep dives, essays, and technical write-ups from the team at QubiQode.
          </motion.p>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && activeCategory === "All" && (
        <section className="pb-24">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
               <Link href={`/insights/${featuredArticle.slug}`} className="group block">
                 <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-stone-200 shadow-sm hover:shadow-2xl transition-all duration-500">
                   
                   <div className="relative aspect-square md:aspect-video lg:aspect-auto h-full overflow-hidden">
                     <Image 
                       src={featuredArticle.image}
                       alt={featuredArticle.title}
                       fill
                       className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                       referrerPolicy="no-referrer"
                     />
                     <div className="absolute inset-0 bg-stone-950/10 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500" />
                   </div>

                   <div className="p-8 md:p-16 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="text-primary-600 bg-primary-50 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                          {featuredArticle.category}
                        </span>
                        <div className="flex items-center gap-1 text-stone-400 text-sm font-medium">
                          <Calendar className="w-4 h-4" />
                          {featuredArticle.date}
                        </div>
                      </div>
                      
                      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-stone-950 mb-6 group-hover:text-primary-600 transition-colors duration-300 line-clamp-3">
                        {featuredArticle.title}
                      </h2>
                      
                      <p className="text-lg text-stone-600 leading-relaxed mb-8 line-clamp-3">
                        {featuredArticle.excerpt}
                      </p>
                      
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center font-bold text-stone-500 text-sm">
                            {featuredArticle.author.charAt(0)}
                          </div>
                          <div className="text-sm font-medium text-stone-950">{featuredArticle.author}</div>
                        </div>
                        
                        <div className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-primary-600 group-hover:border-primary-600 group-hover:text-white transition-all duration-300">
                          <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                        </div>
                      </div>
                   </div>

                 </div>
               </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Categories & Blog Grid */}
      <section className="py-24 bg-white border-y border-stone-200">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
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

            <div className="relative">
              <input 
                type="text" 
                placeholder="Search insights..." 
                className="pl-11 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-full text-sm font-medium text-stone-900 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 w-full md:w-64 transition-all"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            </div>
          </div>

          {/* Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {gridArticles.map((article, i) => (
                <motion.div
                  layout
                  key={article.slug}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                >
                   <Link href={`/insights/${article.slug}`} className="block group h-full focus:outline-none">
                     <div className="h-full flex flex-col bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-primary-200 transition-all duration-500">
                        {/* Image */}
                        <div className="relative aspect-[4/3] overflow-hidden bg-stone-100 shrink-0">
                           <Image 
                             src={article.image}
                             alt={article.title}
                             fill
                             className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                             referrerPolicy="no-referrer"
                           />
                           <div className="absolute inset-0 bg-stone-950/0 group-hover:bg-stone-950/10 transition-colors duration-500" />
                           <div className="absolute top-4 left-4">
                              <span className="bg-white/90 backdrop-blur text-stone-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                                {article.category}
                              </span>
                           </div>
                        </div>
                        
                        {/* Content */}
                        <div className="p-6 md:p-8 flex flex-col flex-1">
                           <div className="flex items-center gap-4 text-xs font-medium text-stone-400 mb-4">
                             <div className="flex items-center gap-1.5">
                               <Calendar className="w-3.5 h-3.5" />
                               {article.date}
                             </div>
                             <div className="flex items-center gap-1.5">
                               <Clock className="w-3.5 h-3.5" />
                               {article.readTime}
                             </div>
                           </div>
                           
                           <h3 className="font-display font-bold text-xl md:text-2xl text-stone-950 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                             {article.title}
                           </h3>
                           
                           <p className="text-stone-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                             {article.excerpt}
                           </p>
                           
                           <div className="mt-auto pt-6 border-t border-stone-100 flex items-center justify-between">
                              <span className="text-sm font-semibold text-stone-900">{article.author}</span>
                              <span className="flex items-center text-sm font-bold text-primary-600 group-hover:translate-x-1 transition-transform">
                                Read <ChevronRight className="w-4 h-4 ml-0.5" />
                              </span>
                           </div>
                        </div>
                     </div>
                   </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {gridArticles.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center"
            >
              <div className="text-stone-400 text-lg">No articles found in this category.</div>
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

      {/* Newsletter CTA Section */}
      <section className="py-24 bg-stone-50">
         <div className="container mx-auto px-6 max-w-7xl">
           <motion.div 
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="bg-stone-950 rounded-[3rem] p-10 md:p-20 shadow-2xl relative overflow-hidden"
           >
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[100px] pointer-events-none" />
             
             <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                   <div className="w-12 h-12 bg-stone-800 rounded-full flex items-center justify-center mb-6">
                      <Mail className="w-6 h-6 text-primary-500" />
                   </div>
                   <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Subscribe to our newsletter</h2>
                   <p className="text-lg text-stone-400 leading-relaxed mb-6">
                     Get our latest essays, case studies, and engineering deep-dives delivered straight to your inbox once a month. No spam, just high-signal content.
                   </p>
                </div>
                
                <div className="w-full max-w-md lg:ml-auto">
                   <form className="relative flex flex-col sm:flex-row gap-3">
                     <input 
                       type="email" 
                       placeholder="Enter your email address"
                       required
                       className="w-full bg-stone-900 border border-stone-800 rounded-full px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all font-medium placeholder:text-stone-500"
                     />
                     <button 
                       type="submit"
                       className="shrink-0 rounded-full bg-primary-600 px-8 py-4 text-sm font-semibold text-white shadow-xl hover:bg-primary-500 transition-all duration-300"
                     >
                       Subscribe
                     </button>
                   </form>
                   <p className="text-xs text-stone-500 mt-4 ml-4">
                     By subscribing, you agree to our Privacy Policy.
                   </p>
                </div>
             </div>
           </motion.div>
         </div>
      </section>
      
    </main>
  );
}
