"use client";

import Link from "next/link";
import { ArrowRight, Instagram, Linkedin, Twitter, Github, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="relative bg-stone-950 text-white overflow-hidden pt-24 pb-12 lg:pt-32">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-stone-700 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        
        {/* Top CTA Section */}
        <div className="mb-20 lg:mb-24 flex flex-col md:flex-row items-center justify-between gap-8 bg-stone-900/50 backdrop-blur-md border border-white/5 rounded-[2.5rem] p-8 md:p-12 lg:p-16">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Ready to build something <span className="text-stone-400">amazing?</span>
            </h2>
            <p className="text-stone-400 text-lg">
              Let&apos;s turn your vision into a digital reality. Reach out today to start the conversation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-stone-950 shadow-xl hover:bg-stone-200 active:scale-95 transition-all duration-200"
            >
              Start a Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-stone-800 border border-stone-700 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-stone-700 active:scale-95 transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 pr-4">
            <Link href="/" className="inline-block group mb-6">
              <span className="font-display font-bold text-2xl tracking-tight text-white group-hover:opacity-80 transition-opacity">
                QubiQode<span className="text-orange-500">.</span>
              </span>
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed mb-8 max-w-sm">
              Building modern digital experiences through premium design, robust development, and strategic innovation.
            </p>
            <div className="flex flex-wrap gap-2">
              <SocialLink href="https://twitter.com" icon={<Twitter className="w-4 h-4" />} label="X / Twitter" />
              <SocialLink href="https://instagram.com" icon={<Instagram className="w-4 h-4" />} label="Instagram" />
              <SocialLink href="https://linkedin.com" icon={<Linkedin className="w-4 h-4" />} label="LinkedIn" />
              <SocialLink href="https://github.com" icon={<Github className="w-4 h-4" />} label="GitHub" />
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-stone-100 tracking-wide mb-6">Agency</h3>
              <ul className="space-y-4">
                <FooterLink href="/">Home</FooterLink>
                <FooterLink href="/about">About Us</FooterLink>
                <FooterLink href="/portfolio">Portfolio</FooterLink>
                <FooterLink href="/blog">Blog</FooterLink>
                <FooterLink href="/contact">Contact</FooterLink>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-stone-100 tracking-wide mb-6">Services</h3>
              <ul className="space-y-4">
                <FooterLink href="/services/web-development">Web Development</FooterLink>
                <FooterLink href="/services/ui-ux-design">UI/UX Design</FooterLink>
                <FooterLink href="/services/seo">SEO Optimization</FooterLink>
                <FooterLink href="/services/branding">Branding</FooterLink>
                <FooterLink href="/services/video-editing">Video Editing</FooterLink>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h3 className="font-semibold text-stone-100 tracking-wide mb-6">Stay Updated</h3>
              <p className="text-stone-400 text-sm mb-4">
                Subscribe for insights on digital design and engineering.
              </p>
              <form className="relative mt-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-stone-900 border border-white/10 rounded-full px-5 py-3.5 text-sm text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all pr-12"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 w-10 bg-white text-stone-950 rounded-full flex items-center justify-center hover:bg-stone-200 transition-colors"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-stone-500">
          <p>
            &copy; {new Date().getFullYear()} QubiQode. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-stone-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-stone-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
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
        <span className="absolute left-0 -bottom-1 w-0 h-px bg-orange-500 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100" />
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
      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-stone-400 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-300"
    >
      {icon}
    </Link>
  );
}

