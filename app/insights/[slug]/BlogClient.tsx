"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock, ChevronRight, Share2, Twitter, Linkedin, Facebook } from "lucide-react";

export function BlogClient({ article, relatedPosts }: { article: any, relatedPosts: any[] }) {
  return (
    <main className="min-h-screen bg-white selection:bg-primary-200">
      
      {/* Article Hero */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-stone-50 border-b border-stone-200">
        <div className="container mx-auto px-6 max-w-4xl">
           <Link href="/insights" className="inline-flex items-center text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors mb-10">
             <ArrowLeft className="w-4 h-4 mr-2" />
             Back to Insights
           </Link>

           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="flex items-center gap-4 mb-6"
           >
             <span className="text-primary-600 bg-primary-50 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
               {article.category}
             </span>
             <div className="flex items-center gap-4 text-sm font-medium text-stone-500">
               <div className="flex items-center gap-1.5">
                 <Calendar className="w-4 h-4" />
                 {article.date}
               </div>
               <div className="flex items-center gap-1.5">
                 <Clock className="w-4 h-4" />
                 {article.readTime}
               </div>
             </div>
           </motion.div>

           <motion.h1
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.1 }}
             className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-stone-950 leading-[1.1] mb-8"
           >
             {article.title}
           </motion.h1>

           <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="text-xl md:text-2xl text-stone-600 leading-relaxed mb-10"
           >
             {article.excerpt}
           </motion.p>
           
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.6, delay: 0.4 }}
             className="flex items-center justify-between pt-8 border-t border-stone-200"
           >
             <div className="flex items-center gap-4">
               <div className="relative w-12 h-12 rounded-full overflow-hidden bg-stone-200">
                  <Image src={article.authorAvatar} alt={article.author} fill className="object-cover" referrerPolicy="no-referrer" />
               </div>
               <div>
                  <div className="font-bold text-stone-950">{article.author}</div>
                  <div className="text-sm text-stone-500">{article.authorRole}</div>
               </div>
             </div>
             
             <div className="flex items-center gap-3">
               <span className="text-sm font-semibold text-stone-400 mr-2 hidden sm:block">Share:</span>
               <button className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition-colors">
                 <Twitter className="w-4 h-4" />
               </button>
               <button className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition-colors">
                 <Linkedin className="w-4 h-4" />
               </button>
             </div>
           </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12 bg-white">
         <div className="container mx-auto px-6 max-w-6xl">
            <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, delay: 0.3 }}
               className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl border border-stone-100"
            >
               <Image 
                 src={article.image}
                 alt={article.title}
                 fill
                 className="object-cover"
                 referrerPolicy="no-referrer"
                 priority
               />
            </motion.div>
         </div>
      </section>

      {/* Article Content */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl flex flex-col lg:flex-row gap-16">
           
           {/* Sidebar / Table of Contents (Sticky) */}
           <div className="lg:w-1/4 hidden lg:block">
              <div className="sticky top-32 space-y-8">
                 <div>
                   <h3 className="font-semibold text-stone-950 mb-4 uppercase tracking-widest text-xs">Table of Contents</h3>
                   <ul className="space-y-3 text-sm text-stone-500 font-medium border-l border-stone-200">
                      <li><a href="#" className="block pl-4 border-l-2 border-transparent hover:border-primary-500 hover:text-primary-600 transition-colors">Introduction</a></li>
                      <li><a href="#" className="block pl-4 border-l-2 border-primary-500 text-stone-900 transition-colors">Automating the Prototype</a></li>
                      <li><a href="#" className="block pl-4 border-l-2 border-transparent hover:border-primary-500 hover:text-primary-600 transition-colors">Dynamic Personalization</a></li>
                      <li><a href="#" className="block pl-4 border-l-2 border-transparent hover:border-primary-500 hover:text-primary-600 transition-colors">Key areas of impact</a></li>
                      <li><a href="#" className="block pl-4 border-l-2 border-transparent hover:border-primary-500 hover:text-primary-600 transition-colors">Conclusion</a></li>
                   </ul>
                 </div>

                 <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200">
                    <h3 className="font-bold text-stone-950 mb-2">Need strategic guidance?</h3>
                    <p className="text-sm text-stone-600 mb-4">Our specialized teams help enterprise clients navigate digital shifts.</p>
                    <Link href="/contact" className="text-primary-600 text-sm font-bold flex items-center hover:text-primary-700 transition-colors">
                      Book a consultation <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                 </div>
              </div>
           </div>

           {/* Main Body */}
           <div className="lg:w-2/3 max-w-3xl">
              <article 
                className="prose prose-lg md:prose-xl prose-stone max-w-none 
                           prose-headings:font-display prose-headings:font-bold prose-headings:text-stone-950 prose-headings:tracking-tight 
                           prose-p:text-stone-600 prose-p:leading-relaxed 
                           prose-a:text-primary-600 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                           prose-blockquote:border-l-4 prose-blockquote:border-primary-500 prose-blockquote:bg-stone-50 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-xl prose-blockquote:my-10 prose-blockquote:font-medium prose-blockquote:text-stone-800 prose-blockquote:not-italic
                           prose-strong:font-bold prose-strong:text-stone-900
                           prose-li:text-stone-600"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Tags & Footer items */}
              <div className="mt-16 pt-8 border-t border-stone-200 flex flex-wrap items-center justify-between gap-6">
                 <div className="flex flex-wrap gap-2">
                   <span className="px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-xs font-semibold hover:bg-stone-200 transition-colors cursor-pointer">AI</span>
                   <span className="px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-xs font-semibold hover:bg-stone-200 transition-colors cursor-pointer">Product Design</span>
                   <span className="px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-xs font-semibold hover:bg-stone-200 transition-colors cursor-pointer">Future of Work</span>
                 </div>
                 
                 <div className="flex items-center gap-3">
                   <span className="text-sm font-semibold text-stone-400">Share:</span>
                   <button className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 hover:text-stone-900 hover:bg-stone-200 transition-colors">
                     <Share2 className="w-3.5 h-3.5" />
                   </button>
                 </div>
              </div>
           </div>

        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts && relatedPosts.length > 0 && (
         <section className="py-24 bg-stone-50 border-t border-stone-200">
           <div className="container mx-auto px-6 max-w-7xl">
              <div className="flex items-center justify-between mb-12">
                <h2 className="font-display text-3xl font-bold text-stone-950">Read Next</h2>
                <Link href="/insights" className="hidden sm:flex items-center text-primary-600 font-bold hover:text-primary-700 transition-colors">
                  View all <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {relatedPosts.map((post, i) => (
                    <motion.div
                      key={post.slug}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <Link href={`/insights/${post.slug}`} className="block group h-full focus:outline-none">
                        <div className="h-full flex flex-col bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-primary-200 transition-all duration-500">
                           <div className="relative aspect-[4/3] overflow-hidden bg-stone-100 shrink-0">
                              <Image 
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                referrerPolicy="no-referrer"
                              />
                           </div>
                           
                           <div className="p-6 md:p-8 flex flex-col flex-1">
                              <div className="flex items-center gap-3 text-xs font-medium text-stone-400 mb-4">
                                <span className="text-primary-600 font-bold uppercase tracking-wider">{post.category}</span>
                                <span>&bull;</span>
                                <span>{post.readTime}</span>
                              </div>
                              
                              <h3 className="font-display font-bold text-xl text-stone-950 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                                {post.title}
                              </h3>
                              
                              <div className="mt-auto pt-6 flex items-center justify-between">
                                 <span className="text-sm font-semibold text-stone-900">{post.author}</span>
                                 <span className="flex items-center text-sm font-bold text-primary-600 group-hover:translate-x-1 transition-transform">
                                   Read <ChevronRight className="w-4 h-4 ml-0.5" />
                                 </span>
                              </div>
                           </div>
                        </div>
                      </Link>
                    </motion.div>
                 ))}
              </div>
           </div>
         </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-white border-t border-stone-200">
         <div className="container mx-auto px-6 max-w-7xl">
           <motion.div 
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="bg-stone-950 rounded-[3rem] p-12 md:p-24 text-center shadow-2xl relative overflow-hidden"
           >
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-[120px] pointer-events-none" />
             
             <div className="relative z-10 max-w-3xl mx-auto text-white">
               <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Want to apply these insights to your business?</h2>
               <p className="text-xl text-stone-400 mb-10 leading-relaxed">
                 Our multidisciplinary team helps ambitious brands leverage design and technology to drive measurable growth.
               </p>
               <Link
                 href="/contact"
                 className="inline-flex items-center justify-center rounded-full bg-primary-600 px-8 py-4 text-sm font-semibold text-white shadow-xl hover:bg-primary-500 transition-all duration-300"
               >
                 Start a Project
                 <ArrowRight className="ml-2 h-4 w-4" />
               </Link>
             </div>
           </motion.div>
         </div>
      </section>
      
    </main>
  );
}
