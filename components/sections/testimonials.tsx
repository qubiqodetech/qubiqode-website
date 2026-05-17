'use client';

import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    quote: "QubiQode completely transformed our digital presence. The new platform isn't just beautiful; it's converted 40% more leads in the first month.",
    name: "Sarah Jenkins",
    role: "CMO, TechFlow",
    avatar: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    quote: "Their attention to detail and understanding of modern UI patterns is unmatched. They worked fast and delivered beyond our expectations.",
    name: "David Chen",
    role: "Founder, Elevate App",
    avatar: "https://picsum.photos/seed/david/100/100"
  },
  {
    quote: "Working with QubiQode was seamless. From the brand identity to the final code, everything was executed with precision and creativity.",
    name: "Elena Rodriguez",
    role: "Director of Marketing, CoreRetail",
    avatar: "https://picsum.photos/seed/elena/100/100"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-stone-950 mb-4">
            Don't just take our word for it.
          </h2>
          <p className="text-lg text-stone-600">
            Hear from the founders and marketing leaders who have partnered with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm relative"
            >
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-orange-500 text-orange-500" />
                ))}
              </div>
              <p className="text-stone-700 leading-relaxed mb-8 relative z-10 text-base md:text-lg">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-stone-200">
                  <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-950">{testimonial.name}</h4>
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
