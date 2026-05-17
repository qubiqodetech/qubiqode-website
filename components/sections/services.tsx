"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 1, y: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-stone-950 mb-4">
              Capabilities that drive{" "}
              <span className="text-stone-400">growth</span>.
            </h2>
            <p className="text-lg text-stone-600">
              We offer end-to-end digital services, from initial strategy and
              design to development and launch.
            </p>
          </div>
          <Link
            href="/services"
            className="group flex items-center text-sm font-semibold text-stone-950 hover:text-orange-600 transition-colors"
          >
            View all services
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.slice(0, 4).map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.slug}
                variants={itemVariants}
                className="group p-8 rounded-3xl bg-stone-50 border border-stone-100 hover:bg-stone-100 hover:border-stone-200 transition-all duration-300 flex flex-col"
              >
                <div className="w-12 h-12 rounded-2xl bg-white border border-stone-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:bg-stone-950 group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6 text-stone-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display text-xl font-bold text-stone-950 mb-3">
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-orange-600 transition-colors"
                  >
                    {service.title}
                  </Link>
                </h3>
                <p className="text-stone-600 leading-relaxed text-sm">
                  {service.summary}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
