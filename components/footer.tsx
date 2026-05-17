"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Instagram, Linkedin, Twitter, Github, Mail, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="relative bg-stone-950 text-white overflow-hidden pt-24 pb-12 lg:pt-32">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-stone-700 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        
        {/* Top CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 lg:mb-24 flex flex-col items-center text-center bg-stone-900/50 backdrop-blur-md border border-white/5 rounded-[2.5rem] p-8 md:p-12 lg:p-16"
        >
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Ready to build something <span className="text-stone-400">great?</span>
            </h2>
            <p className="text-stone-400 text-lg mb-8">
              Let&apos;s create your next digital experience. We partner with ambitious brands to design and build world-class applications.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-orange-600 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-orange-900/10 hover:bg-orange-500 active:scale-95 transition-all duration-200"
            >
              Get a Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-sm font-bold text-stone-950 shadow-sm hover:bg-stone-200 active:scale-95 transition-all duration-200"
            >
              Book a Call
            </Link>
          </div>
        </motion.div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 pr-4 flex flex-col items-start"
          >
            <Link href="/" className="inline-block group mb-6">
              <Image 
                src="/logo_light.png" 
                alt="QubiQode Logo" 
                width={280} 
                height={70}
                className="h-16 sm:h-20 w-auto transition-opacity group-hover:opacity-80 pb-2"
              />
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed mb-6 max-w-sm">
              A modern creative technology studio focused on premium web development, design, and digital innovation.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center text-sm font-semibold text-orange-500 hover:text-orange-400 transition-colors mb-8"
            >
              Let&apos;s collaborate <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
            <div className="flex flex-wrap gap-2 mt-auto">
              <SocialLink href="https://twitter.com" icon={<Twitter className="w-4 h-4" />} label="X / Twitter" />
              <SocialLink href="https://instagram.com" icon={<Instagram className="w-4 h-4" />} label="Instagram" />
              <SocialLink href="https://linkedin.com" icon={<Linkedin className="w-4 h-4" />} label="LinkedIn" />
              <SocialLink href="https://github.com" icon={<Github className="w-4 h-4" />} label="GitHub" />
            </div>
          </motion.div>

          {/* Links Grid */}
          <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-semibold text-stone-100 tracking-wide mb-6 text-sm uppercase">Company</h3>
              <ul className="space-y-4">
                <FooterLink href="/">Home</FooterLink>
                <FooterLink href="/about">About</FooterLink>
                <FooterLink href="/process">Process</FooterLink>
                <FooterLink href="/testimonials">Testimonials</FooterLink>
                <FooterLink href="/careers">Careers</FooterLink>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="font-semibold text-stone-100 tracking-wide mb-6 text-sm uppercase">Services</h3>
              <ul className="space-y-4">
                <FooterLink href="/services">Overview</FooterLink>
                <FooterLink href="/services/web-development">Web Development</FooterLink>
                <FooterLink href="/services/ui-ux-design">UI/UX Design</FooterLink>
                <FooterLink href="/services/seo">SEO Optimization</FooterLink>
                <FooterLink href="/services/branding">Branding & Media</FooterLink>
                <FooterLink href="/services/video">Video & Animation</FooterLink>
                <FooterLink href="/services/ai">AI & Automation</FooterLink>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="font-semibold text-stone-100 tracking-wide mb-6 text-sm uppercase">Work</h3>
              <ul className="space-y-4">
                <FooterLink href="/portfolio">Portfolio</FooterLink>
                <FooterLink href="/case-studies">Case Studies</FooterLink>
                <FooterLink href="/tech">Technology Stack</FooterLink>
                <FooterLink href="/industries">Industries Served</FooterLink>
                <FooterLink href="/design-system">UI Showcase</FooterLink>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="font-semibold text-stone-100 tracking-wide mb-6 text-sm uppercase">Resources</h3>
              <ul className="space-y-4">
                <FooterLink href="/blog">Blog</FooterLink>
                <FooterLink href="/resources">Freebies</FooterLink>
                <FooterLink href="/faq">FAQ</FooterLink>
                <FooterLink href="/maintenance">Maintenance Plans</FooterLink>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="font-semibold text-stone-100 tracking-wide mb-6 text-sm uppercase">Contact</h3>
              <ul className="space-y-4 mb-6">
                <FooterLink href="/contact">Get in Touch</FooterLink>
                <FooterLink href="/contact">Book Consultation</FooterLink>
              </ul>
              
              <div className="space-y-3">
                <a href="mailto:hello@qubiqode.com" className="group flex items-center text-sm text-stone-400 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 mr-2" />
                  hello@qubiqode.com
                </a>
                <a href="https://wa.me/something" className="group flex items-center text-sm text-stone-400 hover:text-white transition-colors">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-stone-500"
        >
          <p>
            &copy; {new Date().getFullYear()} QubiQode. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-stone-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-stone-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/sitemap" className="hover:text-stone-300 transition-colors">
              Sitemap
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-stone-400 hover:text-white transition-colors text-sm font-medium relative group inline-flex items-center"
      >
        <span className="relative z-10">{children}</span>
        <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100" />
      </Link>
    </li>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-stone-400 hover:bg-orange-500 hover:border-orange-500 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm"
    >
      {icon}
    </Link>
  );
}

