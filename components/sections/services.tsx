"use client";

import { motion } from "motion/react";
import { Code, PenTool, LayoutTemplate, Video } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "High-performance websites and web applications built with modern frameworks like Next.js and React.",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description:
      "User-centric interfaces that combine stunning aesthetics with frictionless user journeys.",
  },
  {
    icon: LayoutTemplate,
    title: "Brand Identity",
    description:
      "Memorable visual identities, logos, and design systems that communicate your brand values.",
  },
  {
    icon: Video,
    title: "Video Editing",
    description:
      "Professional video production and editing to engage your audience on social and digital channels.",
  },
];

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
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-8 rounded-3xl bg-stone-50 border border-stone-100 hover:bg-stone-100 hover:border-stone-200 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-white border border-stone-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:bg-stone-950 group-hover:text-white transition-all duration-300">
                <service.icon className="w-6 h-6 text-stone-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display text-xl font-bold text-stone-950 mb-3">
                {service.title}
              </h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
