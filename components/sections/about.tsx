"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Image/Visual */}
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative">
              <Image
                src="https://picsum.photos/seed/agency-office/800/1000"
                alt="QubiQode team collaborating"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-stone-900/10"></div>
            </div>

            {/* Stat Card Overlay */}
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 bg-white p-8 rounded-3xl shadow-xl shadow-stone-200/50 hidden md:block max-w-xs"
            >
              <p className="font-display text-5xl font-bold text-stone-950 mb-2">
                10+
              </p>
              <p className="text-stone-600 font-medium leading-tight">
                Years of combined experience crafting digital excellence.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:pl-8 lg:max-w-xl"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-stone-950 mb-6">
              A boutique agency with{" "}
              <span className="text-orange-600">global reach</span>.
            </h2>
            <p className="text-lg text-stone-600 mb-6 leading-relaxed">
              We are a team of passionate designers, developers, and strategists
              dedicated to building digital experiences that define the future
              of brands.
            </p>
            <p className="text-lg text-stone-600 mb-10 leading-relaxed">
              Our approach is rooted in understanding your core business
              objectives and translating them into functional, aesthetic, and
              high-performing solutions that convert.
            </p>

            <Link
              href="#about"
              className="inline-flex items-center text-sm font-semibold text-stone-950 group"
            >
              <span className="border-b-2 border-stone-950 group-hover:border-orange-600 transition-colors pb-1">
                More About Us
              </span>
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform group-hover:text-orange-600" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
