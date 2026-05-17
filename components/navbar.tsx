"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { 
  Menu, 
  X, 
  ArrowRight, 
  Sparkles, 
  ChevronDown,
  Home,
  Users,
  Rocket,
  Star,
  Briefcase,
  LayoutGrid,
  Code,
  PenTool,
  LineChart,
  Video,
  Cpu,
  Image as ImageIcon,
  FileText,
  Layers,
  Building2,
  Palette,
  BookOpen,
  Download,
  HelpCircle,
  Phone,
  Calendar,
  LifeBuoy
} from "lucide-react";
import { usePathname } from "next/navigation";

const navGroups = [
  {
    name: "Company",
    items: [
      { name: "Home", href: "/", icon: Home, description: "Return to the homepage" },
      { name: "About", href: "/about", icon: Users, description: "Learn about our mission and team" },
      { name: "Process", href: "/process", icon: Rocket, description: "How we build digital products" },
      { name: "Testimonials", href: "/testimonials", icon: Star, description: "What our clients say" },
      { name: "Careers", href: "/careers", icon: Briefcase, description: "Join our growing team" },
    ]
  },
  {
    name: "Services",
    items: [
      { name: "Overview", href: "/services", icon: LayoutGrid, description: "All our digital services" },
      { name: "Web Development", href: "/services/web-development", icon: Code, description: "Custom Next.js & React apps" },
      { name: "UI/UX Design", href: "/services/ui-ux-design", icon: PenTool, description: "Premium interface design" },
      { name: "SEO Optimization", href: "/services/seo", icon: LineChart, description: "Technical & content SEO" },
      { name: "Branding", href: "/services/branding", icon: Sparkles, description: "Modern brand identity" },
      { name: "Video & Animation", href: "/services/video", icon: Video, description: "Motion graphics & editing" },
      { name: "AI Solutions", href: "/services/ai", icon: Cpu, description: "Smart business solutions" },
    ]
  },
  {
    name: "Work",
    items: [
      { name: "Portfolio", href: "/portfolio", icon: ImageIcon, description: "Our latest featured projects" },
      { name: "Case Studies", href: "/case-studies", icon: FileText, description: "In-depth project reviews" },
      { name: "Tech Stack", href: "/tech", icon: Layers, description: "The tools we use to build" },
      { name: "Industries", href: "/industries", icon: Building2, description: "Sectors we specialize in" },
      { name: "Design System", href: "/design-system", icon: Palette, description: "UI component showcase" },
    ]
  },
  {
    name: "Content",
    items: [
      { name: "Blog", href: "/blog", icon: BookOpen, description: "Articles and industry insights" },
      { name: "Resources", href: "/resources", icon: Download, description: "Free templates and guides" },
      { name: "FAQ", href: "/faq", icon: HelpCircle, description: "Common questions answered" },
    ]
  },
  {
    name: "Contact",
    items: [
      { name: "Contact Us", href: "/contact", icon: Phone, description: "Get in touch with our team" },
      { name: "Book Consultation", href: "/contact", icon: Calendar, description: "Schedule a discussion" },
      { name: "Maintenance Plans", href: "/maintenance", icon: LifeBuoy, description: "Ongoing support & SLAs" },
    ]
  }
];

function DesktopDropdown({ group, activeGroup, setActiveGroup, useLightText }: { group: typeof navGroups[0], activeGroup: string | null, setActiveGroup: (name: string | null) => void, useLightText?: boolean }) {
  const isOpen = activeGroup === group.name;

  return (
    <div 
      className="relative"
      onMouseEnter={() => setActiveGroup(group.name)}
      onMouseLeave={() => setActiveGroup(null)}
    >
      <button 
        className={`relative px-4 py-2 flex items-center gap-1 rounded-full overflow-hidden shrink-0 group/btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 transition-colors duration-200 ${isOpen ? 'text-stone-950' : (useLightText ? 'text-stone-300 hover:text-white' : 'text-stone-500 hover:text-stone-900')}`}
        aria-expanded={isOpen}
      >
        <span className="relative z-10 text-[13px] font-semibold tracking-wide uppercase">
          {group.name}
        </span>
        <ChevronDown className={`w-3 h-3 relative z-10 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary-500' : (useLightText ? 'text-stone-400' : '')}`} />
        {isOpen && (
          <motion.div
            layoutId="activeNavIndicator"
            className="absolute inset-0 bg-white rounded-full shadow-sm border border-stone-100"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95, transition: { duration: 0.15 } }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-12 left-1/2 -translate-x-1/2 w-[320px] sm:w-[480px] bg-white/95 backdrop-blur-xl border border-stone-200 shadow-2xl shadow-stone-900/10 rounded-3xl overflow-hidden z-50 p-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 flex-col gap-x-2 gap-y-1">
              {group.items.map((item, idx) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-start gap-3 p-3 rounded-2xl hover:bg-stone-50 hover:scale-[1.02] active:scale-[0.98] transition-all group/link"
                  onClick={() => setActiveGroup(null)}
                >
                  <div className="bg-stone-100 p-2 rounded-xl text-stone-500 group-hover/link:text-primary-600 group-hover/link:bg-primary-50 transition-colors shrink-0">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-stone-900 group-hover/link:text-primary-600 transition-colors">
                      {item.name}
                    </div>
                    <div className="text-xs text-stone-500 mt-0.5 leading-snug">
                      {item.description}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileGroup({ group, setMobileMenuOpen }: { group: typeof navGroups[0], setMobileMenuOpen: (v: boolean) => void }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="w-full text-left">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-2xl font-display font-bold tracking-tight text-stone-900 focus:outline-none"
      >
        {group.name}
        <motion.div
           animate={{ rotate: isOpen ? 180 : 0 }}
           transition={{ duration: 0.3 }}
           className="bg-stone-100 p-1.5 rounded-full"
        >
          <ChevronDown className="w-5 h-5 text-stone-500" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-2 pb-6 flex flex-col gap-4 pl-4 border-l-2 border-stone-200 ml-2">
              {group.items.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-stone-600 flex items-center gap-3 text-lg font-medium hover:text-primary-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="w-4 h-4 opacity-50" />
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeGroup, setActiveGroup] = React.useState<string | null>(null);
  
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const isDarkHero = 
    pathname === '/services/ai-automation' || 
    pathname === '/services/video-editing' || 
    pathname === '/tech-stack';

  // Determine if we should use dark text (default) or light text (on dark heroes when not scrolled)
  const useLightText = isDarkHero && !isScrolled;

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setMobileMenuOpen(false);
      setActiveGroup(null);
    }, 0);
    return () => clearTimeout(timeout);
  }, [pathname]);

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
        className="fixed top-0 left-0 right-0 h-1 bg-primary-600 origin-left z-[70]"
        style={{ scaleX }}
      />
      
      {/* Announcement Strip */}
      <div 
        className={`bg-stone-950 text-white text-xs font-medium py-2 px-4 flex justify-center items-center transition-all duration-500 overflow-hidden ${
          isScrolled ? "h-0 opacity-0 py-0" : "h-9 opacity-100"
        }`}
      >
        <Sparkles className="w-3.5 h-3.5 text-primary-500 mr-2" />
        <span className="hidden sm:inline">Award-winning premium digital agency for forward-thinking brands.</span>
        <span className="sm:hidden">Premium digital agency.</span>
        <Link href="/contact" className="ml-3 underline decoration-white/30 hover:decoration-white transition-colors underline-offset-2">
          Start your project
        </Link>
      </div>

      <header
        className={`fixed left-0 right-0 z-[60] transition-all duration-500 will-change-transform ${
          isScrolled ? "top-1 py-4" : "top-9 py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative">
          <div
            className={`flex items-center justify-between rounded-full px-6 py-3 transition-all duration-500 ${
              isScrolled
                ? "bg-white/80 backdrop-blur-xl border border-stone-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                : "bg-transparent border border-transparent"
            }`}
          >
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-2 z-50 relative shrink-0" onClick={() => setMobileMenuOpen(false)}>
              <Image 
                src={useLightText ? "/logo_light.png" : "/logo_dark.png"} 
                alt="QubiQode Logo" 
                width={200} 
                height={50}
                className="h-12 sm:h-14 w-auto transition-opacity group-hover:opacity-80"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2" onMouseLeave={() => setActiveGroup(null)}>
              <div className={`flex items-center gap-1 backdrop-blur-md p-1 rounded-full shadow-sm relative transition-colors duration-500 border ${useLightText ? "bg-white/10 border-white/10" : "bg-stone-100/50 border-stone-200/50"}`}>
                {navGroups.map((group) => (
                  <DesktopDropdown 
                    key={group.name} 
                    group={group} 
                    activeGroup={activeGroup} 
                    setActiveGroup={setActiveGroup} 
                    useLightText={useLightText}
                  />
                ))}
              </div>
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center space-x-3 z-50 shrink-0">
              <Link
                href="/contact"
                className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 transition-all border ${
                  useLightText 
                    ? "bg-white/10 text-white border-white/20 hover:bg-white/20 focus-visible:ring-white/50" 
                    : "bg-stone-50 text-stone-900 border-stone-200/50 hover:bg-stone-100 hover:shadow focus-visible:ring-stone-200"
                }`}
              >
                Let&apos;s Talk
              </Link>
              <Link
                href="/contact"
                className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-all group overflow-hidden relative ${
                  useLightText
                    ? "bg-primary-600 hover:bg-primary-500 focus-visible:ring-primary-600"
                    : "bg-stone-950 hover:bg-stone-800 hover:shadow-lg focus-visible:ring-stone-950"
                }`}
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${useLightText ? "bg-white" : "bg-gradient-to-r from-primary-500 to-sky-500"}`} />
                Get a Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className={`lg:hidden relative z-50 p-2 focus:outline-none rounded-full transition-colors ${useLightText ? "text-white hover:bg-white/10" : "text-stone-950 hover:bg-stone-200 bg-stone-100/80"}`}
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
      </header>

      {/* Full-screen Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-stone-50/98 backdrop-blur-2xl z-[50] lg:hidden flex flex-col pt-24 pb-12 px-6 overflow-y-auto"
          >
            <div className="w-full max-w-md mx-auto flex flex-col space-y-2 flex-1 mt-8 mb-12">
              {navGroups.map((group, i) => (
                <motion.div
                  key={group.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.05 + 0.1, duration: 0.4 }}
                  className="border-b border-stone-200/60 last:border-0"
                >
                  <MobileGroup group={group} setMobileMenuOpen={setMobileMenuOpen} />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="w-full max-w-md mx-auto flex flex-col gap-4 mt-auto pt-8"
            >
              <Link
                href="/contact"
                className="w-full inline-flex justify-center items-center gap-2 rounded-xl bg-primary-600 px-6 py-4 text-sm font-bold text-white shadow-xl shadow-primary-900/10 hover:bg-primary-500 active:scale-95 transition-all duration-200 uppercase tracking-widest"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="w-full inline-flex justify-center items-center rounded-xl bg-white border border-stone-200 px-6 py-4 text-sm font-bold text-stone-900 shadow-sm hover:bg-stone-50 active:scale-95 transition-all duration-200 uppercase tracking-widest"
                onClick={() => setMobileMenuOpen(false)}
              >
                Let&apos;s Talk
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
