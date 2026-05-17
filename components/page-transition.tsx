"use client";

import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import { ReactNode, useContext, useRef } from "react";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

function FrozenRoute({ children }: { children: ReactNode }) {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;
  
  if (!frozen) {
    return <>{children}</>;
  }

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {children}
    </LayoutRouterContext.Provider>
  );
}

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="popLayout">
      <motion.div key={pathname} className="flex-1 flex flex-col w-full h-full relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 15, filter: "blur(10px)" }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            y: 0, 
            filter: "blur(0px)",
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 } 
          }}
          exit={{ 
            opacity: 0, 
            scale: 0.98, 
            y: -15, 
            filter: "blur(10px)",
            transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="flex-1 flex flex-col w-full"
        >
          <FrozenRoute>{children}</FrozenRoute>
        </motion.div>

        {/* Cinematic Route Transition Overlay */}
        <motion.div
          initial={{ scaleY: 1 }}
          animate={{ 
            scaleY: 0, 
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
          }}
          exit={{ 
            scaleY: 1, 
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-[100] bg-stone-950 pointer-events-none origin-bottom flex flex-col justify-between"
        >
          {/* Top glow accent */}
          <div className="w-full h-[1px] bg-primary-500 shadow-[0_0_20px_10px_rgba(30,144,255,0.4)]" />
          
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900/20 via-stone-950 to-stone-950 opacity-50" />
          
          {/* Bottom glow accent */}
          <div className="w-full h-[1px] bg-primary-500 shadow-[0_0_20px_10px_rgba(30,144,255,0.4)]" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
