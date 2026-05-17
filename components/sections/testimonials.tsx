"use client";

import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";

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
  {
    quote:
      "The best development agency we have ever partnered with. The communication was excellent and the final product is stunning.",
    name: "Michael Chang",
    role: "CEO, Nexus Innovations",
    avatar: "https://picsum.photos/seed/michael/100/100",
  },
  {
    quote:
      "They didn't just build a website, they built a scalable digital platform that will support our growth for years to come. Brilliant work.",
    name: "Sophia Martinez",
    role: "Product Lead, Vista Ventures",
    avatar: "https://picsum.photos/seed/sophia/100/100",
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-stone-950 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-primary-950/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10 mb-16">
        <div className="text-center max-w-2xl mx-auto">
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
      </div>

      <div className="relative flex flex-col items-center justify-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] w-full">
        <Marquee pauseOnHover className="[--duration:50s] py-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-[350px] md:w-[450px] bg-stone-900 border border-white/10 p-8 rounded-[2rem] relative group hover:border-primary-500/50 hover:shadow-[0_0_30px_rgba(30,144,255,0.1)] hover:-translate-y-1 transition-all duration-300 mx-4 flex flex-col"
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
              <p className="text-stone-300 leading-relaxed mb-10 relative z-10 text-base flex-1">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="flex items-center gap-4 mt-auto relative z-10">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-stone-800 group-hover:border-primary-500 transition-colors duration-300">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                    unoptimized
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-stone-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
