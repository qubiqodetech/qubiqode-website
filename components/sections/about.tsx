"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const features = [
  "Award-winning design team",
  "Scalable & secure architecture",
  "SEO-optimized out of the box",
  "Dedicated ongoing support"
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column: Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative shadow-2xl">
              <Image
                src="https://picsum.photos/seed/agency-office/800/1000"
                alt="QubiQode team collaborating"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply"></div>
            </div>

            {/* Stat Card Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 bg-stone-950 p-8 rounded-3xl shadow-xl border border-stone-800 hidden md:block max-w-[280px]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-stone-950 overflow-hidden relative">
                      <Image src={`https://picsum.photos/seed/avatar${i}/100/100`} alt="Team avatar" fill className="object-cover" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
              </div>
              <p className="font-display text-4xl font-bold text-white mb-2">
                10+ <span className="text-orange-500">Years</span>
              </p>
              <p className="text-stone-400 font-medium leading-tight text-sm">
                Of combined experience crafting digital excellence.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:max-w-xl"
          >
            <div className="inline-flex items-center rounded-full border border-stone-200 bg-stone-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-stone-600 mb-8">
              About QubiQode
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-stone-950 mb-6 leading-tight">
              A boutique agency with{" "}
              <span className="text-stone-400">global reach</span>.
            </h2>
            <p className="text-lg text-stone-600 mb-6 leading-relaxed">
              We are a team of passionate designers, developers, and strategists
              dedicated to building digital experiences that define the future
              of ambitious brands.
            </p>
            
            <ul className="space-y-4 mb-10">
              {features.map((feature, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center text-stone-700"
                >
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mr-3 shrink-0" />
                  <span className="font-medium">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full bg-stone-950 px-8 py-4 text-sm font-semibold text-white shadow-xl hover:bg-stone-800 hover:shadow-2xl active:scale-95 transition-all duration-200 group"
            >
              Discover Our Story
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
