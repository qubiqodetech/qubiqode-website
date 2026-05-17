"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { portfolioProjects } from "@/lib/portfolio";

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-24 lg:py-32 bg-stone-950 text-white rounded-t-[3rem] lg:rounded-t-[4rem] px-4 md:px-0"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
            >
              Selected <span className="text-stone-500">works</span>.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-stone-400 leading-relaxed md:max-w-lg"
            >
              A glimpse into the digital experiences we&apos;ve crafted for ambitious
              brands worldwide.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/portfolio"
              className="group flex items-center text-sm font-semibold hover:text-primary-500 transition-colors uppercase tracking-widest border border-white/20 rounded-full px-6 py-3 hover:border-primary-500"
            >
              View all projects
              <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {portfolioProjects.slice(0, 4).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group relative ${index % 2 !== 0 ? "md:mt-24" : ""}`}
            >
              <Link
                href={`/portfolio/${project.slug}`}
                className="block w-full overflow-hidden rounded-[2rem] bg-stone-900 border border-white/10 aspect-[4/3] relative"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-colors duration-500" />
              </Link>
              <div className="mt-8 flex justify-between items-start px-2">
                <div>
                  <h3 className="font-display text-3xl font-bold mb-2 group-hover:text-primary-500 transition-colors">
                    <Link href={`/portfolio/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h3>
                  <p className="text-stone-400 text-sm font-medium">{project.category}</p>
                </div>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary-500 group-hover:border-primary-500 group-hover:text-white transition-all duration-300"
                >
                  <ArrowUpRight className="w-6 h-6 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
