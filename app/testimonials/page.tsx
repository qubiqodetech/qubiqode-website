"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Quote, ShieldCheck, Trophy, Target, Globe, Building2, Hexagon, CircleDashed, Triangle } from "lucide-react";

// Mock data for testimonials
const testimonials = [
  {
    quote: "QubiQode completely transformed our digital infrastructure. Their attention to detail and technical prowess is unmatched. Our new platform handles 10x the traffic with zero downtime.",
    author: "Sarah Jenkins",
    role: "CTO",
    company: "Nova Technologies",
    avatar: "https://picsum.photos/seed/avatar1/150/150",
    rating: 5,
    featured: true
  },
  {
    quote: "The branding and design work exceeded all our expectations. They didn't just give us a logo; they gave us a complete visual identity that resonates perfectly with our target market.",
    author: "David Chen",
    role: "Founder & CEO",
    company: "Aura Botanicals",
    avatar: "https://picsum.photos/seed/avatar2/150/150",
    rating: 5,
    featured: true
  },
  {
    quote: "Working with QubiQode was the best decision we made this year. Their SEO strategies practically doubled our organic reach within six months.",
    author: "Emily Lawson",
    role: "Marketing Director",
    company: "Vertex Financial",
    avatar: "https://picsum.photos/seed/avatar3/150/150",
    rating: 5,
    featured: false
  },
  {
    quote: "Clean code, transparent communication, and stunning design. They delivered our bespoke web application ahead of schedule.",
    author: "Marcus Thorne",
    role: "Product Manager",
    company: "Nexus Logistics",
    avatar: "https://picsum.photos/seed/avatar4/150/150",
    rating: 5,
    featured: false
  },
  {
    quote: "Their video production team created an incredible explainer video for our new SaaS product. It's currently our highest converting asset.",
    author: "Alicia Reyes",
    role: "VP of Growth",
    company: "CloudSync",
    avatar: "https://picsum.photos/seed/avatar5/150/150",
    rating: 5,
    featured: false
  },
  {
    quote: "From discovery to launch, the QubiQode team demonstrated absolute professionalism. The new UI/UX design has significantly reduced our user churn rate.",
    author: "James Harding",
    role: "Head of Digital",
    company: "Oasis Resorts",
    avatar: "https://picsum.photos/seed/avatar6/150/150",
    rating: 5,
    featured: false
  }
];

const metrics = [
  { value: "4.9/5", label: "Average Client Rating", icon: <Star className="w-6 h-6 text-primary-500" /> },
  { value: "98%", label: "Client Retention Rate", icon: <ShieldCheck className="w-6 h-6 text-primary-500" /> },
  { value: "150+", label: "Projects Delivered", icon: <Trophy className="w-6 h-6 text-primary-500" /> },
  { value: "12", label: "Countries Served", icon: <Globe className="w-6 h-6 text-primary-500" /> }
];

const clientLogos = [
  { name: "NovaTech", icon: <Hexagon className="w-8 h-8 text-stone-400" /> },
  { name: "Aura", icon: <CircleDashed className="w-8 h-8 text-stone-400" /> },
  { name: "Vertex", icon: <Triangle className="w-8 h-8 text-stone-400" /> },
  { name: "Nexus", icon: <Building2 className="w-8 h-8 text-stone-400" /> },
  { name: "CloudSync", icon: <Globe className="w-8 h-8 text-stone-400" /> }
];

export default function TestimonialsPage() {
  const featuredTestimonials = testimonials.filter(t => t.featured);
  const standardTestimonials = testimonials.filter(t => !t.featured);

  return (
    <main className="min-h-screen bg-stone-50 selection:bg-primary-200">
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-stone-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/noise/800/800')] opacity-5 mix-blend-overlay pointer-events-none" />
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-600/20 via-primary-900/5 to-transparent rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center rounded-full border border-stone-800 bg-stone-900/60 backdrop-blur-md px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-stone-400 mb-8"
          >
            Client Success Stories
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6 max-w-4xl mx-auto"
          >
            Don&apos;t just take <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-sky-600 italic">our word for it.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-stone-400 max-w-2xl mx-auto leading-relaxed"
          >
            We partner with ambitious brands to build exceptional digital products. Here&apos;s what they have to say about the QubiQode experience.
          </motion.p>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-12 border-b border-stone-200 bg-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
           <p className="text-center text-sm font-semibold text-stone-400 uppercase tracking-wider mb-8">Trusted by industry leaders globally</p>
           <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale filter hover:grayscale-0 transition-all duration-500">
             {clientLogos.map((logo, i) => (
                <div key={i} className="flex items-center gap-3">
                   {logo.icon}
                   <span className="font-display font-bold text-xl text-stone-800 tracking-tight">{logo.name}</span>
                </div>
             ))}
           </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-6 max-w-7xl">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
              {metrics.map((metric, i) => (
                 <motion.div
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.5, delay: i * 0.1 }}
                   className="flex flex-col items-center text-center p-6 bg-white rounded-3xl border border-stone-200 shadow-sm"
                 >
                    <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center mb-4">
                      {metric.icon}
                    </div>
                    <div className="font-display text-4xl font-bold text-stone-950 mb-2">{metric.value}</div>
                    <div className="text-sm font-semibold text-stone-500 uppercase tracking-wider">{metric.label}</div>
                 </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-24 bg-stone-950 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-primary-600/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="mb-16 text-center">
            <h2 className="font-display text-4xl font-bold mb-4">Featured Stories</h2>
            <p className="text-stone-400 text-lg">In-depth feedback from our closest partners.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredTestimonials.map((testimonial, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: i * 0.2 }}
                 className="bg-stone-900 border border-stone-800 rounded-[2.5rem] p-10 md:p-12 shadow-2xl relative"
               >
                  <Quote className="absolute top-10 right-10 w-24 h-24 text-stone-800/50 -z-0 pointer-events-none" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex gap-1 mb-8">
                      {[...Array(testimonial.rating)].map((_, idx) => (
                         <Star key={idx} className="w-5 h-5 fill-primary-500 text-primary-500" />
                      ))}
                    </div>
                    
                    <p className="text-xl md:text-2xl text-stone-300 leading-relaxed font-medium mb-12 flex-1">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    
                    <div className="flex items-center gap-5 border-t border-stone-800 pt-8 mt-auto">
                      <Image 
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        width={64}
                        height={64}
                        className="rounded-full object-cover border-2 border-stone-800"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <div className="font-bold text-lg text-white">{testimonial.author}</div>
                        <div className="text-stone-500 text-sm">{testimonial.role}, {testimonial.company}</div>
                      </div>
                    </div>
                  </div>
               </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Standard Testimonials Grid */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-16 text-center">
             <h2 className="font-display text-4xl font-bold text-stone-950 mb-4">More Client Love</h2>
             <p className="text-stone-600 text-lg">Consistent quality, consistent praise.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {standardTestimonials.map((testimonial, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: i * 0.1 }}
                 className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm hover:shadow-xl hover:border-primary-200 transition-all duration-300 flex flex-col"
               >
                 <div className="flex justify-between items-start mb-6">
                   <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, idx) => (
                         <Star key={idx} className="w-4 h-4 fill-primary-500 text-primary-500" />
                      ))}
                   </div>
                   <Quote className="w-8 h-8 text-stone-200" />
                 </div>
                 
                 <p className="text-stone-600 leading-relaxed mb-8 flex-1">
                   "{testimonial.quote}"
                 </p>
                 
                 <div className="flex items-center gap-4">
                    <Image 
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="rounded-full object-cover bg-stone-100"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <div className="font-bold text-stone-950">{testimonial.author}</div>
                      <div className="text-stone-500 text-sm">{testimonial.role}, {testimonial.company}</div>
                    </div>
                 </div>
               </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-24 bg-white border-t border-stone-200">
         <div className="container mx-auto px-6 max-w-7xl">
           <motion.div 
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="bg-primary-600 rounded-[3rem] p-12 md:p-24 text-center shadow-xl relative overflow-hidden text-white"
           >
             <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/noise/800/800')] opacity-10 mix-blend-overlay"></div>
             
             <div className="relative z-10 max-w-3xl mx-auto">
               <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">Ready to become our next success story?</h2>
               <p className="text-xl text-primary-100 mb-10 leading-relaxed">
                 We&apos;re currently taking on new projects. Let&apos;s discuss how we can build something incredible together.
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
         </div>
      </section>
      
    </main>
  );
}
