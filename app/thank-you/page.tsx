"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, CheckCircle, Home, Grid, MessageCircle } from "lucide-react";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-stone-50 flex items-center justify-center p-6 relative overflow-hidden selection:bg-orange-200">
      
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-100/40 via-stone-50 to-stone-50 pointer-events-none" />

      <div className="relative z-10 max-w-2xl w-full text-center">
         
         <motion.div
           initial={{ scale: 0 }}
           animate={{ scale: 1 }}
           transition={{ 
             type: "spring",
             stiffness: 260,
             damping: 20,
             duration: 0.6 
           }}
           className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm border border-green-100"
         >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
               <CheckCircle className="w-12 h-12 text-green-500" />
            </motion.div>
         </motion.div>

         <motion.h1
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.1 }}
           className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-stone-950 mb-6 tracking-tight"
         >
            Message received.
         </motion.h1>

         <motion.p
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="text-lg md:text-xl text-stone-600 mb-10 max-w-lg mx-auto leading-relaxed"
         >
            Thank you for reaching out. A member of our strategy team will review your inquiry and get back to you within 24 hours.
         </motion.p>
         
         {/* Next Steps Card */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.3 }}
           className="bg-white border border-stone-200 rounded-[2rem] p-8 md:p-10 shadow-sm max-w-xl mx-auto mb-12 text-left"
         >
            <h3 className="font-bold text-stone-950 mb-4 text-lg">What happens next?</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                 <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center shrink-0 text-stone-600 font-bold text-sm">
                   1
                 </div>
                 <p className="text-stone-600 text-sm mt-1.5 leading-relaxed">
                   We review your details and align them with the right strategist on our team.
                 </p>
              </li>
              <li className="flex items-start gap-4">
                 <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center shrink-0 text-stone-600 font-bold text-sm">
                   2
                 </div>
                 <p className="text-stone-600 text-sm mt-1.5 leading-relaxed">
                   We&apos;ll send an email offering a quick introductory discovery call if necessary.
                 </p>
              </li>
              <li className="flex items-start gap-4">
                 <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center shrink-0 text-orange-600 font-bold text-sm">
                   3
                 </div>
                 <p className="text-stone-600 text-sm mt-1.5 leading-relaxed">
                   We formulate a plan and send over a clear proposal for your project.
                 </p>
              </li>
            </ul>
         </motion.div>

         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.4 }}
           className="flex flex-col sm:flex-row items-center justify-center gap-4"
         >
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-stone-950 text-white font-semibold shadow-xl hover:bg-stone-800 hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <Home className="w-4 h-4 mr-2" />
              Return Home
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-stone-900 border border-stone-200 font-semibold shadow-sm hover:bg-stone-50 hover:border-stone-300 hover:-translate-y-0.5 transition-all duration-300"
            >
              <Grid className="w-4 h-4 mr-2 text-stone-500" />
              View Portfolio
            </Link>
            <Link
              href="https://wa.me/1234567890" // Placeholder WhatsApp link
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-green-50 text-green-700 border border-green-200 font-semibold shadow-sm hover:bg-green-100 hover:border-green-300 hover:-translate-y-0.5 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp Us
            </Link>
         </motion.div>
      </div>

    </main>
  );
}
