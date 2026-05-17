"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "The Future of Web Design in 2026",
    category: "Design Trends",
    date: "May 12, 2026",
    image: "https://picsum.photos/seed/blog1/800/500",
    slug: "#",
  },
  {
    title: "Why Next.js is the Ultimate Framework for Agencies",
    category: "Development",
    date: "May 08, 2026",
    image: "https://picsum.photos/seed/blog2/800/500",
    slug: "#",
  },
  {
    title: "Building a Brand Identity that Scales",
    category: "Branding",
    date: "May 01, 2026",
    image: "https://picsum.photos/seed/blog3/800/500",
    slug: "#",
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-stone-950 mb-4">
              Latest from the <span className="text-stone-400">journal</span>.
            </h2>
            <p className="text-lg text-stone-600">
              Insights, thoughts, and industry trends from the QubiQode team.
            </p>
          </div>
          <Link
            href="#blog"
            className="group flex items-center text-sm font-semibold text-stone-950 hover:text-orange-600 transition-colors"
          >
            Read all articles
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group"
            >
              <Link
                href={post.slug}
                className="block overflow-hidden rounded-2xl mb-6 relative aspect-[16/10]"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <div className="flex items-center gap-4 text-xs font-medium text-stone-500 mb-3">
                <span className="text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {post.category}
                </span>
                <span>{post.date}</span>
              </div>
              <h3 className="font-display text-xl font-bold text-stone-950 group-hover:text-orange-600 transition-colors line-clamp-2">
                <Link href={post.slug}>{post.title}</Link>
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
