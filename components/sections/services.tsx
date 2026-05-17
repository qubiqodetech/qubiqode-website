"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-stone-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl md:text-5xl font-bold tracking-tight text-stone-950 mb-4"
            >
              Capabilities that drive{" "}
              <span className="text-orange-600">growth</span>.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-stone-600 leading-relaxed"
            >
              We offer end-to-end digital services, from initial strategy and
              design to development, launch, and marketing.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/services"
              className="group flex items-center text-sm font-semibold text-stone-950 hover:text-orange-600 transition-colors bg-white px-6 py-3 rounded-full shadow-sm border border-stone-200"
            >
              View all services
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.slice(0, 4).map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.slug}
                variants={itemVariants}
                className="group p-8 rounded-3xl bg-white border border-stone-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-stone-50 rounded-bl-full -z-10 group-hover:bg-orange-50 transition-colors duration-500" />
                <div className="w-14 h-14 rounded-2xl bg-stone-50 border border-stone-100 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-orange-600 group-hover:border-orange-500 transition-all duration-300 shadow-sm">
                  <Icon className="w-6 h-6 text-stone-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display text-xl font-bold text-stone-950 mb-3">
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-orange-600 transition-colors after:absolute after:inset-0"
                  >
                    {service.title}
                  </Link>
                </h3>
                <p className="text-stone-600 leading-relaxed text-sm">
                  {service.summary}
                </p>
                <div className="mt-auto pt-6 flex items-center text-sm font-medium text-stone-400 group-hover:text-orange-600 transition-colors">
                  <span className="mr-2">Learn more</span>
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
