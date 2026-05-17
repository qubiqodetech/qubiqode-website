"use client";

import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We dive deep into your business goals, target audience, and competition to craft a precise roadmap for success.",
  },
  {
    number: "02",
    title: "Design & Prototyping",
    description:
      "Our design team creates Wireframes and high-fidelity prototypes, focusing on premium user experience and absolute brand alignment.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "We build scalable, high-performance applications using modern web technologies, focusing on clean code, security, and speed.",
  },
  {
    number: "04",
    title: "Launch & Scale",
    description:
      "After rigorous QA testing, we launch your product and provide dedicated ongoing support to help your team scale with confidence.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-stone-50 border-t border-stone-200/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center rounded-full border border-stone-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-stone-600 mb-8"
              >
                How We Work
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-display text-4xl md:text-5xl font-bold tracking-tight text-stone-950 mb-6"
              >
                Our proven <span className="text-orange-600">process</span>.
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-stone-600 mb-8 leading-relaxed"
              >
                We believe in absolute transparency, proactive communication, and clear milestones. 
                Here&apos;s how we turn complex ideas into elegant digital realities.
              </motion.p>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="flex flex-col space-y-16">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative group pl-8 md:pl-0"
                >
                  <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-stone-200 group-last:bg-transparent overflow-hidden">
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                      className="w-full bg-orange-200"
                    />
                  </div>
                  <div className="md:pl-12 flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                    <div className="flex-shrink-0 relative">
                      <div className="hidden md:flex absolute -left-[53px] top-3 w-3 h-3 rounded-full bg-stone-300 border-[3px] border-stone-50 group-hover:bg-orange-500 transition-colors duration-300 z-10" />
                      <span className="font-display text-5xl md:text-6xl font-light text-stone-300 group-hover:text-orange-500 transition-colors duration-500 block">
                        {step.number}
                      </span>
                    </div>
                    <div className="pt-2 md:pt-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-stone-950 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-lg text-stone-600 leading-relaxed max-w-xl">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
