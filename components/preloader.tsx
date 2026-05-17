"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Hexagon, Sparkles } from "lucide-react";

const phrases = [
  "Initializing framework...",
  "Loading digital experiences...",
  "Crafting innovation...",
];

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    // Hide preloader after 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (phraseIndex >= phrases.length - 1) return;
    // Switch phrase every 800ms
    const timer = setTimeout(() => {
      setPhraseIndex((prev) => prev + 1);
    }, 800);
    return () => clearTimeout(timer);
  }, [phraseIndex]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            filter: "blur(10px)",
            transition: { duration: 0.8, ease: "easeInOut" } 
          }}
          className="fixed inset-0 z-[9999] bg-stone-950 flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
             <motion.div 
               animate={{ 
                 scale: [1, 1.2, 1],
                 opacity: [0.3, 0.5, 0.3],
               }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] md:w-[600px] aspect-square bg-primary-600/20 rounded-full blur-[100px]" 
              />
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Logo Reveal */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4 mb-20"
            >
              <div className="relative flex items-center justify-center w-14 h-14">
                {/* Rotating Border */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border border-primary-500/30 rounded-xl"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-1 border border-primary-400/20 rounded-lg"
                />
                
                {/* Glowing Hexagon */}
                <div className="relative">
                  <div className="absolute inset-0 bg-primary-500 blur-md opacity-50" />
                  <Hexagon className="w-8 h-8 text-primary-400 relative z-10" fill="currentColor" fillOpacity={0.2} strokeWidth={1.5} />
                </div>
              </div>

              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display font-bold text-4xl tracking-tight text-white flex items-center gap-1"
                >
                  QubiQode
                  <Sparkles className="w-4 h-4 text-primary-400 -mt-4 animate-pulse" />
                </motion.h1>
              </div>
            </motion.div>

            {/* Progress Section */}
            <div className="flex flex-col items-center w-64 md:w-80">
              {/* Progress Line */}
              <div className="w-full h-[2px] bg-stone-900 overflow-hidden relative rounded-full mb-6">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.8, ease: "easeInOut" }}
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-transparent via-primary-500 to-white"
                >
                   {/* Leading Glow */}
                   <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full blur-sm" />
                </motion.div>
              </div>

              {/* Dynamic Text */}
              <div className="overflow-hidden h-6">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={phraseIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-stone-400 text-sm font-medium tracking-widest uppercase flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
                    {phrases[phraseIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
