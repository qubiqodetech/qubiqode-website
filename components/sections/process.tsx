'use client';

import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description: 'We dive deep into your business goals, target audience, and competition to craft a roadmap for success.'
  },
  {
    number: '02',
    title: 'Design & Prototyping',
    description: 'Our design team creates Wireframes and high-fidelity prototypes, focusing on user experience and brand alignment.'
  },
  {
    number: '03',
    title: 'Development',
    description: 'We build scalable, high-performance applications using modern web technologies and best practices.'
  },
  {
    number: '04',
    title: 'Launch & Scale',
    description: 'After rigorous testing, we launch your product and provide ongoing support to help your team scale.'
  }
];

export function Process() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row gap-16 lg:gap-24">
          <div className="md:w-1/3">
            <div className="sticky top-32">
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-stone-950 mb-4">
                Our proven <span className="text-orange-600">process</span>.
              </h2>
              <p className="text-lg text-stone-600 mb-8">
                We believe in transparency, communication, and clear milestones. Here's how we turn ideas into reality.
              </p>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <div className="flex flex-col space-y-12">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="flex-shrink-0">
                    <span className="font-display text-5xl font-light text-stone-300 group-hover:text-orange-500 transition-colors">
                      {step.number}
                    </span>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-2xl font-bold text-stone-950 mb-3">{step.title}</h3>
                    <p className="text-stone-600 leading-relaxed">{step.description}</p>
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
