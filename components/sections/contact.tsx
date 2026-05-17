'use client';

import { motion } from 'motion/react';
import { Mail, MessageCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-stone-900 border-t border-stone-800 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="bg-stone-950/80 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-16 lg:p-24 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <div>
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Let's build something <span className="text-orange-500">amazing</span> together.
              </h2>
              <p className="text-lg text-stone-400 mb-10 max-w-md">
                Whether you have a specific project in mind or just want to explore possibilities, we're ready to help.
              </p>
              
              <div className="space-y-6">
                <a href="mailto:hello@qubiqode.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 transition-colors">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-400">Send us an email</p>
                    <p className="font-medium">hello@qubiqode.com</p>
                  </div>
                </a>
                
                <Link href="https://wa.me/1234567890" target="_blank" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-green-500 group-hover:border-green-500 transition-colors">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-400">Chat on WhatsApp</p>
                    <p className="font-medium">+1 (234) 567-890</p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 relative">
              <h3 className="text-2xl font-bold mb-6">Send a message</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-stone-300">First name</label>
                    <input id="firstName" type="text" className="w-full bg-stone-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-stone-300">Last name</label>
                    <input id="lastName" type="text" className="w-full bg-stone-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-stone-300">Email address</label>
                  <input id="email" type="email" className="w-full bg-stone-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-stone-300">Message</label>
                  <textarea id="message" rows={4} className="w-full bg-stone-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all resize-none" required></textarea>
                </div>
                <button type="submit" className="w-full bg-orange-600 hover:bg-orange-500 text-white rounded-xl px-4 py-4 font-semibold flex items-center justify-center gap-2 transition-colors">
                  Send Message
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
