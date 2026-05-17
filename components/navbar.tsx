"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  React.useEffect(() => {
    const timeout = setTimeout(() => setMobileMenuOpen(false), 0);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative">
        <div
          className={`flex items-center justify-between rounded-full px-6 py-3 transition-all duration-500 ${
            isScrolled
              ? "bg-white/70 backdrop-blur-lg border border-stone-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
              : "bg-transparent border border-transparent"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2 z-50 relative shrink-0">
            <span className="font-display font-bold text-xl tracking-tight text-stone-950 group-hover:opacity-80 transition-opacity">
              QubiQode<span className="text-orange-600">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-1 bg-stone-100/50 backdrop-blur-md p-1 rounded-full border border-stone-200/50">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative px-4 py-2 rounded-full overflow-hidden shrink-0 group"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-white rounded-full shadow-sm border border-stone-100"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span
                      className={`relative z-10 text-sm font-medium transition-colors duration-200 ${
                        isActive
                          ? "text-stone-950"
                          : "text-stone-600 group-hover:text-stone-900"
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
          <div className="hidden md:flex items-center space-x-3 z-50 shrink-0">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center justify-center rounded-full bg-stone-50 px-5 py-2.5 text-sm font-medium text-stone-900 shadow-sm hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-200 transition-all border border-stone-200/50"
            >
              Let&apos;s Talk
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-stone-950 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-stone-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-stone-950 focus:ring-offset-2 transition-all group"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden relative z-50 p-2 -mr-2 text-stone-950 focus:outline-none rounded-full hover:bg-stone-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <motion.div
              initial={false}
              animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
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
            className="fixed inset-0 bg-stone-50/95 backdrop-blur-xl z-40 lg:hidden flex items-center justify-center flex-col pt-20"
          >
            <div className="w-full max-w-sm px-6 flex flex-col items-center text-center space-y-6">
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
                    className="text-3xl font-display font-bold tracking-tight text-stone-900 hover:text-orange-600 transition-colors relative group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-orange-600 rounded-full transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="pt-8 w-full flex flex-col gap-4 mt-8 border-t border-stone-200/50"
              >
                <Link
                  href="/contact"
                  className="w-full inline-flex justify-center items-center gap-2 rounded-full bg-stone-950 px-6 py-4 text-sm font-medium text-white shadow-xl hover:bg-stone-800 transition-all font-display"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get a Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="w-full inline-flex justify-center items-center rounded-full bg-white border border-stone-200 px-6 py-4 text-sm font-medium text-stone-900 shadow-sm hover:bg-stone-50 transition-all font-display"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Let&apos;s Talk
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
