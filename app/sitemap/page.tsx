"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Map, Grid, Info, Phone, FileText, Briefcase, Zap, HelpCircle, Star, Calendar, BookOpen } from "lucide-react";

const sitemapData = [
  {
    category: "Main Pages",
    icon: <Map className="w-5 h-5" />,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    links: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Book Consultation", href: "/book" },
      { name: "Careers", href: "/careers" },
      { name: "Resources", href: "/resources" },
    ]
  },
  {
    category: "Services",
    icon: <Grid className="w-5 h-5" />,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    links: [
      { name: "All Services", href: "/services" },
      { name: "Web Development", href: "/services/web-development" },
      { name: "AI Automation", href: "/services/ai-automation" },
      { name: "UI/UX Design", href: "/services/ui-ux-design" },
      { name: "Brand Identity", href: "/services/branding" },
      { name: "SEO Strategy", href: "/services/seo" },
      { name: "Video Editing", href: "/services/video-editing" },
    ]
  },
  {
    category: "Discover",
    icon: <Star className="w-5 h-5" />,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    links: [
      { name: "Testimonials", href: "/testimonials" },
      { name: "FAQ", href: "/faq" },
    ]
  },
  {
    category: "Legal",
    icon: <FileText className="w-5 h-5" />,
    color: "text-stone-600",
    bgColor: "bg-stone-200",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Sitemap", href: "/sitemap" },
    ]
  }
];

export default function SitemapPage() {
  return (
    <main className="min-h-screen bg-stone-50 selection:bg-orange-200 pb-24">
      
      {/* Header Section */}
      <section className="pt-32 pb-16 lg:pt-48 lg:pb-24 border-b border-stone-200 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center rounded-full border border-stone-200 bg-stone-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-stone-600 mb-8 shadow-sm"
          >
            Directory
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-stone-950 mb-6"
          >
            Sitemap
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-stone-600 max-w-2xl leading-relaxed"
          >
            A complete overview of QubiQode&apos;s pages, services, and resources. Quickly find what you&apos;re looking for.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-24">
         <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {sitemapData.map((group, groupIndex) => (
                  <motion.div
                    key={group.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + groupIndex * 0.1 }}
                  >
                     <div className="bg-white rounded-[2rem] p-8 border border-stone-200 shadow-sm hover:shadow-md hover:border-stone-300 transition-all duration-300 h-full">
                        <div className="flex items-center gap-4 mb-8">
                           <div className={`w-12 h-12 rounded-xl ${group.bgColor} flex items-center justify-center`}>
                              <span className={group.color}>{group.icon}</span>
                           </div>
                           <h2 className="font-display text-2xl font-bold text-stone-950">
                             {group.category}
                           </h2>
                        </div>
                        
                        <ul className="space-y-4">
                           {group.links.map((link) => (
                              <li key={link.href}>
                                 <Link 
                                    href={link.href}
                                    className="group flex items-center justify-between py-2 border-b border-transparent hover:border-stone-200 transition-colors"
                                 >
                                    <span className="text-stone-600 font-medium group-hover:text-orange-600 transition-colors">
                                       {link.name}
                                    </span>
                                    <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-orange-600 group-hover:translate-x-1 transition-all" />
                                 </Link>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="pt-10">
         <div className="container mx-auto px-6 max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-stone-950 text-white rounded-[2rem] p-10 md:p-14 shadow-xl"
            >
               <h2 className="font-display text-3xl font-bold mb-4">Still can&apos;t find it?</h2>
               <p className="text-stone-400 mb-8 max-w-lg mx-auto">
                 Reach out to our team directly. We&apos;re here to help point you in the right direction.
               </p>
               <Link
                 href="/contact"
                 className="inline-flex items-center justify-center rounded-xl bg-orange-600 px-8 py-4 font-semibold text-white shadow-xl hover:bg-orange-500 hover:-translate-y-0.5 transition-all duration-300"
               >
                 Contact Support
               </Link>
            </motion.div>
         </div>
      </section>

    </main>
  );
}
