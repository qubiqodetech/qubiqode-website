"use client";

import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "QubiQode completely transformed our digital presence. The new platform isn't just beautiful; it's converted 40% more leads in the first month.",
    name: "Sarah Jenkins",
    role: "CMO, TechFlow",
    avatar: "https://picsum.photos/seed/sarah/100/100",
  },
  {
    quote:
      "Their attention to detail and understanding of modern UI patterns is unmatched. They worked fast and delivered beyond our expectations.",
    name: "David Chen",
    role: "Founder, Elevate App",
    avatar: "https://picsum.photos/seed/david/100/100",
  },
  {
    quote:
      "Working with QubiQode was seamless. From the brand identity to the final code, everything was executed with absolute precision and creativity.",
    name: "Elena Rodriguez",
    role: "Director of Marketing, CoreRetail",
    avatar: "https://picsum.photos/seed/elena/100/100",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-stone-950 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-primary-950/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Don&apos;t just take our word for it.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-stone-400"
          >
            Hear from the founders and marketing leaders who have partnered with
            us to build incredible products.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-stone-900 border border-white/10 p-8 rounded-[2rem] relative group hover:border-primary-500/30 transition-colors duration-300"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5 rotate-180 group-hover:text-primary-500/10 transition-colors duration-300" />
              <div className="flex gap-1 mb-8">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 fill-primary-500 text-primary-500"
                  />
                ))}
              </div>
              <p className="text-stone-300 leading-relaxed mb-10 relative z-10 text-base md:text-lg">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-stone-800 group-hover:border-primary-500 transition-colors duration-300">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-stone-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
