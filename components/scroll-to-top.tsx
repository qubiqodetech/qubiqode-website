"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Smooth out the scroll progress for a premium feel
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Check on initial load
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20, transition: { duration: 0.2 } }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed z-[99000]"
          style={{ bottom: "24px", right: "104px" }}
        >
          {/* Subtle floating animation */}
          <motion.div
             animate={{ y: [0, -4, 0] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.button
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="relative w-14 h-14 rounded-full bg-stone-950/80 backdrop-blur-xl border border-stone-800 flex justify-center items-center cursor-pointer shadow-[0_8px_30px_rgba(0,0,0,0.5)] group overflow-hidden"
              aria-label="Scroll to top"
              type="button"
            >
              {/* Ambient inner glow */}
              <div className="absolute inset-0 rounded-full bg-primary-500/5 group-hover:bg-primary-500/20 transition-colors duration-500" />
              
              {/* Hover pulse effect */}
              <motion.div
                variants={{
                  hover: { scale: 1.5, opacity: 0 },
                }}
                className="absolute inset-0 rounded-full bg-primary-500/30 opacity-0"
                transition={{ duration: 0.8, ease: "easeOut" }}
              />

              {/* Progress Ring */}
              <svg
                className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="46"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.05)"
                  strokeWidth="4"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="46"
                  fill="none"
                  stroke="#1E90FF"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className="opacity-70 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_0_8px_rgba(30,144,255,0.8)]"
                  style={{
                    pathLength: pathLength,
                  }}
                />
              </svg>

              {/* Icon */}
              <ArrowUp className="w-5 h-5 text-white relative z-10 group-hover:text-primary-400 group-hover:-translate-y-0.5 transition-all duration-300" />
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
