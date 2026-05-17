"use client";

import Link from "next/link";
import { ArrowRight, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-50 py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-1">
            <Link
              href="/"
              className="inline-block flex items-center gap-2 mb-6"
            >
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                QubiQode<span className="text-orange-600">.</span>
              </span>
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed max-w-xs mb-8">
              We design, build, and scale premium digital experiences for
              forward-thinking brands.
            </p>
            <div className="flex bg-white/5 rounded-full p-1 border border-white/10 w-fit">
              <Link
                href="https://twitter.com"
                className="p-2 text-stone-400 hover:text-white transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="https://instagram.com"
                className="p-2 text-stone-400 hover:text-white transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href="https://linkedin.com"
                className="p-2 text-stone-400 hover:text-white transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-display font-medium text-lg mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/services/web-development"
                  className="text-stone-400 hover:text-white transition-colors text-sm"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ui-ux-design"
                  className="text-stone-400 hover:text-white transition-colors text-sm"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/seo-optimized-websites"
                  className="text-stone-400 hover:text-white transition-colors text-sm"
                >
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link
                  href="/services/video-editing"
                  className="text-stone-400 hover:text-white transition-colors text-sm"
                >
                  Video Editing
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-display font-medium text-lg mb-6">Agency</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/#portfolio"
                  className="text-stone-400 hover:text-white transition-colors text-sm"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/#process"
                  className="text-stone-400 hover:text-white transition-colors text-sm"
                >
                  Our Process
                </Link>
              </li>
              <li>
                <Link
                  href="/#testimonials"
                  className="text-stone-400 hover:text-white transition-colors text-sm"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-stone-400 hover:text-white transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-display font-medium text-lg mb-6">
              Stay in the loop
            </h3>
            <p className="text-stone-400 text-sm mb-4">
              Subscribe to our newsletter for insights on digital design and
              scaling.
            </p>
            <form
              className="mt-4 flex max-w-md gap-x-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <div className="relative flex-grow">
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 w-full rounded-full bg-white/5 px-4 py-3 text-sm text-white placeholder-stone-500 ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-orange-600 outline-none transition-all"
                  placeholder="Enter your email"
                />
              </div>
              <button
                type="submit"
                className="flex rounded-full bg-white px-4 py-3 text-sm font-semibold text-stone-950 hover:bg-stone-200 transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-stone-500">
            &copy; {new Date().getFullYear()} QubiQode Agency. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="text-sm text-stone-500 hover:text-stone-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm text-stone-500 hover:text-stone-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
