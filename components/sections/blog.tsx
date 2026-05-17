"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "10 Principles for Designing High-Converting Agency Websites",
    category: "Web Design",
    date: "May 12, 2026",
    image: "https://picsum.photos/seed/blog1/800/500",
    slug: "#",
  },
  {
    title: "Why Next.js is the Ultimate Framework for Premium Brands",
    category: "Development",
    date: "May 08, 2026",
    image: "https://picsum.photos/seed/blog2/800/500",
    slug: "#",
  },
  {
    title: "Building a Minimalist Brand Identity that Scales Globally",
    category: "Branding",
    date: "May 01, 2026",
    image: "https://picsum.photos/seed/blog3/800/500",
    slug: "#",
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-24 lg:py-32 bg-stone-50 border-t border-stone-200/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-stone-950 mb-4"
            >
              Latest from the <span className="text-stone-400">journal</span>.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-stone-600"
            >
              Insights, thoughts, and industry trends from the QubiQode team.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="#blog"
              className="group flex items-center text-sm font-semibold text-stone-950 hover:text-orange-600 transition-colors bg-white border border-stone-200 rounded-full px-6 py-3 shadow-sm"
            >
              Read all articles
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex flex-col"
            >
              <Link
                href={post.slug}
                className="block overflow-hidden rounded-[2rem] mb-6 relative aspect-[4/3] bg-stone-100 border border-stone-200/50"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <div className="flex items-center gap-4 text-xs font-semibold text-stone-500 mb-4 px-2">
                <span className="text-orange-600 bg-orange-50 px-3 py-1 rounded-full uppercase tracking-widest border border-orange-100">
                  {post.category}
                </span>
                <span>{post.date}</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-stone-950 group-hover:text-orange-600 transition-colors line-clamp-3 leading-snug px-2">
                <Link href={post.slug} className="before:absolute before:inset-0">
                  {post.title}
                </Link>
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
