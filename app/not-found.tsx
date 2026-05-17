"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Home, Grid, Mail } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-stone-50 flex items-center justify-center p-6 relative overflow-hidden selection:bg-primary-200">
      
      {/* Background Abstract Shapes */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-600/5 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div 
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-stone-900/5 rounded-full blur-[80px] pointer-events-none"
      />

      <div className="relative z-10 max-w-2xl w-full text-center">
         <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="mb-8"
         >
            <div className="font-display text-[150px] leading-none md:text-[200px] font-bold text-stone-950 tracking-tighter opacity-90 drop-shadow-sm">
               404
            </div>
         </motion.div>

         <motion.h1
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="font-display text-3xl md:text-5xl font-bold text-stone-950 mb-6"
         >
            Page not found.
         </motion.h1>

         <motion.p
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.3 }}
           className="text-lg md:text-xl text-stone-600 mb-12 max-w-lg mx-auto leading-relaxed"
         >
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
         </motion.p>

         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.4 }}
           className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none"
         >
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary-600 text-white font-semibold shadow-xl hover:bg-primary-500 hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <Home className="w-4 h-4 mr-2" />
              Return Home
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-stone-900 border border-stone-200 font-semibold shadow-sm hover:bg-stone-50 hover:border-stone-300 hover:-translate-y-0.5 transition-all duration-300"
            >
              <Grid className="w-4 h-4 mr-2 text-stone-500" />
              Our Services
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-stone-900 border border-stone-200 font-semibold shadow-sm hover:bg-stone-50 hover:border-stone-300 hover:-translate-y-0.5 transition-all duration-300"
            >
              <Mail className="w-4 h-4 mr-2 text-stone-500" />
              Contact Us
            </Link>
         </motion.div>
      </div>

    </main>
  );
}
