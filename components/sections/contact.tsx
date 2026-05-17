"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export function Contact() {
  return (
    <section className="py-24 bg-stone-900 border-t border-stone-800 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="bg-stone-950/80 backdrop-blur-xl border border-white/10 rounded-[3rem] p-12 md:p-20 overflow-hidden"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Ready to start your{" "}
            <span className="text-primary-500">project?</span>
          </h2>
          <p className="text-lg md:text-xl text-stone-400 mb-10 max-w-2xl mx-auto">
            We are ready to turn your vision into reality. Reach out today and
            let&apos;s craft something extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-primary-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary-600/20 hover:bg-primary-500 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
