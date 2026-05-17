"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when screen size increases
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close mobile menu on route change
  React.useEffect(() => {
    const timeout = setTimeout(() => setMobileMenuOpen(false), 0);
    return () => clearTimeout(timeout);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-orange-600 origin-left z-[60]"
        style={{ scaleX }}
      />
      
      {/* Announcement Strip */}
      <div 
        className={`bg-stone-950 text-white text-xs font-medium py-2 px-4 flex justify-center items-center transition-all duration-500 overflow-hidden ${
          isScrolled ? "h-0 opacity-0 py-0" : "h-9 opacity-100"
        }`}
      >
        <Sparkles className="w-3.5 h-3.5 text-orange-500 mr-2" />
        <span>Award-winning premium digital agency for forward-thinking brands.</span>
        <Link href="/contact" className="ml-3 underline decoration-white/30 hover:decoration-white transition-colors underline-offset-2">
          Start your project
        </Link>
      </div>

      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 will-change-transform ${
          isScrolled ? "top-1 py-4" : "top-9 py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative">
          <div
            className={`flex items-center justify-between rounded-full px-6 py-3 transition-all duration-500 ${
              isScrolled
                ? "bg-white/70 backdrop-blur-xl border border-stone-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                : "bg-transparent border border-transparent"
            }`}
          >
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-2 z-50 relative shrink-0" onClick={() => setMobileMenuOpen(false)}>
              <span className="font-display font-bold text-xl tracking-tight text-stone-950 group-hover:opacity-80 transition-opacity">
                QubiQode<span className="text-orange-600">.</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2">
              <div className="flex items-center gap-1 bg-stone-100/40 backdrop-blur-md p-1 rounded-full border border-stone-200/40 shadow-sm">
                {navLinks.map((link) => {
                  const isActive =
                    pathname === link.href ||
                    (link.href !== "/" && pathname.startsWith(link.href));
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="relative px-4 py-2 rounded-full overflow-hidden shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeNavIndicator"
                          className="absolute inset-0 bg-white rounded-full shadow-sm border border-stone-100"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      <span
                        className={`relative z-10 text-[13px] font-semibold tracking-wide uppercase transition-colors duration-200 ${
                          isActive
                            ? "text-stone-950"
                            : "text-stone-500 group-hover:text-stone-900"
                        }`}
                      >
                        {link.name}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center space-x-3 z-50 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-stone-50 px-5 py-2.5 text-sm font-semibold text-stone-900 shadow-sm hover:bg-stone-100 hover:shadow disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-200 transition-all border border-stone-200/50"
              >
                Let&apos;s Talk
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-stone-950 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-stone-800 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-2 transition-all group overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                Get a Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden relative z-50 p-2 text-stone-950 focus:outline-none rounded-full hover:bg-stone-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              <motion.div
                initial={false}
                animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
                className="w-6 h-6 flex items-center justify-center"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 absolute" />
                ) : (
                  <Menu className="w-5 h-5 absolute" />
                )}
              </motion.div>
            </button>
          </div>
        </div>

        {/* Full-screen Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
              animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
              exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              className="fixed inset-0 bg-stone-50/95 backdrop-blur-xl z-40 lg:hidden flex flex-col justify-center pt-24 pb-12 px-6"
            >
              <div className="w-full max-w-sm mx-auto flex flex-col items-center text-center space-y-6 flex-1 justify-center">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: i * 0.05 + 0.1, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-stone-900 hover:text-orange-600 transition-colors relative group block py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-1 bg-orange-600 rounded-full transition-all duration-300 group-hover:w-1/2" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="w-full max-w-sm mx-auto flex flex-col gap-4 mt-auto border-t border-stone-200/50 pt-8"
              >
                <Link
                  href="/contact"
                  className="w-full inline-flex justify-center items-center gap-2 rounded-full bg-stone-950 px-6 py-4 text-sm font-semibold text-white shadow-xl hover:bg-stone-800 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 font-display uppercase tracking-widest"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get a Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="w-full inline-flex justify-center items-center rounded-full bg-white border border-stone-200 px-6 py-4 text-sm font-semibold text-stone-900 shadow-sm hover:bg-stone-50 active:scale-95 transition-all duration-200 font-display uppercase tracking-widest"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Let&apos;s Talk
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
