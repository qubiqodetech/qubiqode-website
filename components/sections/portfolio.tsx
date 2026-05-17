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
      className="py-24 bg-stone-950 text-white rounded-t-[3rem]"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Selected <span className="text-stone-500">works</span>.
            </h2>
            <p className="text-lg text-stone-400">
              A glimpse into the digital experiences we've crafted for ambitious
              brands worldwide.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="group flex items-center text-sm font-semibold hover:text-orange-500 transition-colors"
          >
            View all projects
            <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {portfolioProjects.slice(0, 4).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group relative ${index % 2 !== 0 ? "md:mt-16" : ""}`}
            >
              <Link
                href={`/portfolio/${project.slug}`}
                className="block w-full overflow-hidden rounded-3xl bg-stone-900 border border-white/10 aspect-[4/3] relative"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500" />
              </Link>
              <div className="mt-6 flex justify-between items-start">
                <div>
                  <h3 className="font-display text-2xl font-bold mb-1 group-hover:text-orange-500 transition-colors">
                    <Link href={`/portfolio/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h3>
                  <p className="text-stone-400 text-sm">{project.category}</p>
                </div>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-stone-950 transition-colors group-hover:-rotate-45"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
