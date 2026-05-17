"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { ArrowRight, Mail, MessageSquare, MapPin, CheckCircle2, ChevronDown, Send, Linkedin, Twitter, Instagram } from "lucide-react";

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary depending on complexity. A standard corporate website takes 4-6 weeks, while a custom web application can take 3-6 months. We will provide a detailed timeline during the proposal phase."
  },
  {
    question: "Do you work with startups?",
    answer: "Absolutely. We love partnering with ambitious startups to build scalable MVPs and establish strong brand identities from day one."
  },
  {
    question: "What is your pricing structure?",
    answer: "We offer both fixed-price contracts for well-defined projects and retainer models for ongoing product development and marketing. Minimum project size usually starts at $10k."
  }
];

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    
    // Simulate API call
    setTimeout(() => {
      setFormState("success");
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-stone-50 selection:bg-primary-200">
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-48 lg:pb-24 bg-stone-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-600/20 via-stone-950/5 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="max-w-3xl">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               className="inline-flex items-center rounded-full border border-stone-800 bg-stone-900/60 backdrop-blur-md px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-stone-300 mb-8 shadow-sm"
             >
               Get in Touch
             </motion.div>
             
             <motion.h1
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.1 }}
               className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8"
             >
               Let&apos;s build something <span className="text-primary-500 italic">extraordinary.</span>
             </motion.h1>
             
             <motion.p
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="text-lg md:text-xl text-stone-400 leading-relaxed max-w-2xl"
             >
               Whether you have a fully formed RFP or just a spark of an idea, our team is ready to listen, strategize, and execute. We typically respond within 24 hours.
             </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-24 -mt-16 sm:-mt-24 lg:-mt-32 relative z-20">
         <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
               
               {/* Left Column: Form Submittal */}
               <motion.div 
                 initial={{ opacity: 0, y: 40 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.3 }}
                 className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-stone-200"
               >
                  <AnimatePresence mode="wait">
                    {formState === "success" ? (
                       <motion.div
                         key="success"
                         initial={{ opacity: 0, scale: 0.95 }}
                         animate={{ opacity: 1, scale: 1 }}
                         className="h-full min-h-[500px] flex flex-col items-center justify-center text-center py-12"
                       >
                          <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-8">
                             <CheckCircle2 className="w-12 h-12 text-green-500" />
                          </div>
                          <h3 className="font-display text-3xl font-bold text-stone-950 mb-4">Message Received</h3>
                          <p className="text-stone-600 text-lg mb-8 max-w-md mx-auto">
                            Thank you for reaching out to QubiQode. A member of our strategy team will follow up with you shortly.
                          </p>
                          <button
                            onClick={() => setFormState("idle")}
                            className="text-stone-900 font-semibold underline underline-offset-4 hover:text-primary-600 transition-colors"
                          >
                            Send another message
                          </button>
                       </motion.div>
                    ) : (
                       <motion.div
                         key="form"
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         exit={{ opacity: 0 }}
                       >
                         <div className="mb-10">
                           <h3 className="font-display text-2xl md:text-3xl font-bold text-stone-950 mb-3">Project Inquiry</h3>
                           <p className="text-stone-600">Fill out the form below and we&apos;ll get back to you promptly.</p>
                         </div>
                         
                         <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                               <div className="space-y-2">
                                 <label htmlFor="firstName" className="text-sm font-semibold text-stone-950">First name <span className="text-primary-500">*</span></label>
                                 <input 
                                   id="firstName"
                                   type="text" 
                                   required
                                   className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-stone-900 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all font-medium placeholder:text-stone-400"
                                   placeholder="John"
                                 />
                               </div>
                               <div className="space-y-2">
                                 <label htmlFor="lastName" className="text-sm font-semibold text-stone-950">Last name <span className="text-primary-500">*</span></label>
                                 <input 
                                   id="lastName"
                                   type="text" 
                                   required
                                   className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-stone-900 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all font-medium placeholder:text-stone-400"
                                   placeholder="Doe"
                                 />
                               </div>
                            </div>
                            
                            <div className="space-y-2">
                              <label htmlFor="email" className="text-sm font-semibold text-stone-950">Work email <span className="text-primary-500">*</span></label>
                              <input 
                                id="email"
                                type="email" 
                                required
                                className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-stone-900 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all font-medium placeholder:text-stone-400"
                                placeholder="john@company.com"
                              />
                            </div>

                            <div className="space-y-2">
                              <label htmlFor="interest" className="text-sm font-semibold text-stone-950">What are you looking for? <span className="text-primary-500">*</span></label>
                              <div className="relative">
                                <select 
                                  id="interest"
                                  required
                                  defaultValue=""
                                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-stone-900 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all font-medium appearance-none"
                                >
                                  <option value="" disabled>Select a service...</option>
                                  <option value="web-dev">Web Development</option>
                                  <option value="ui-ux">UI/UX Design</option>
                                  <option value="branding">Brand Identity</option>
                                  <option value="seo">SEO & Marketing</option>
                                  <option value="other">Other</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500 pointer-events-none" />
                              </div>
                            </div>
                            
                            <div className="space-y-2">
                              <label htmlFor="message" className="text-sm font-semibold text-stone-950">Project details <span className="text-primary-500">*</span></label>
                              <textarea 
                                id="message"
                                required
                                rows={5}
                                className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-stone-900 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all font-medium placeholder:text-stone-400 resize-y"
                                placeholder="Tell us about your goals, timeline, and budget..."
                              />
                            </div>

                            <p className="text-xs text-stone-500 mt-4 leading-relaxed">
                              By submitting this form, you agree to our <Link href="/privacy-policy" className="underline hover:text-stone-800">privacy policy</Link> and <Link href="/terms-of-service" className="underline hover:text-stone-800">terms of service</Link>.
                            </p>
                            
                            <button
                              type="submit"
                              disabled={formState === "submitting"}
                              className={`w-full group flex items-center justify-center rounded-xl px-8 py-4 text-sm font-semibold text-white shadow-xl transition-all duration-300 ${
                                formState === "submitting" ? "bg-stone-400 cursor-not-allowed" : "bg-primary-600 hover:bg-primary-500"
                              }`}
                            >
                              {formState === "submitting" ? "Sending..." : "Submit Inquiry"}
                              {formState !== "submitting" && <Send className="ml-2 w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />}
                            </button>
                         </form>
                       </motion.div>
                    )}
                  </AnimatePresence>
               </motion.div>

               {/* Right Column: Contact Info & FAQs */}
               <motion.div 
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.8, delay: 0.4 }}
                 className="lg:col-span-5 space-y-8"
               >
                  {/* Direct Contact Cards */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
                     <a href="mailto:hello@qubiqode.com" className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-stone-200 hover:border-primary-500 hover:shadow-lg transition-all group">
                        <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                           <Mail className="w-5 h-5" />
                        </div>
                        <div>
                           <div className="text-sm font-semibold text-stone-500 mb-1">Email Us</div>
                           <div className="font-bold text-stone-950 group-hover:text-primary-600 transition-colors">hello@qubiqode.com</div>
                        </div>
                     </a>
                     
                     <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-stone-200 hover:border-green-500 hover:shadow-lg transition-all group">
                        <div className="w-12 h-12 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                           <MessageSquare className="w-5 h-5" />
                        </div>
                        <div>
                           <div className="text-sm font-semibold text-stone-500 mb-1">WhatsApp Chat</div>
                           <div className="font-bold text-stone-950 group-hover:text-[#25D366] transition-colors">Available 9am - 6pm EST</div>
                        </div>
                     </a>

                     <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-stone-200">
                        <div className="w-12 h-12 bg-stone-100 text-stone-600 rounded-full flex items-center justify-center shrink-0">
                           <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                           <div className="text-sm font-semibold text-stone-500 mb-1">Output Location</div>
                           <div className="font-bold text-stone-950">
                             123 Innovation Drive<br/>Tech District, Suite 400<br/>San Francisco, CA 94103
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Socials */}
                  <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm">
                    <h3 className="font-display font-bold text-xl text-stone-950 mb-4 flex items-center gap-2">
                       Follow along
                    </h3>
                    <div className="flex gap-4">
                      <a href="#" className="w-12 h-12 rounded-full bg-stone-50 border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-stone-950 hover:text-white transition-colors" aria-label="LinkedIn">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href="#" className="w-12 h-12 rounded-full bg-stone-50 border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-stone-950 hover:text-white transition-colors" aria-label="Twitter">
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a href="#" className="w-12 h-12 rounded-full bg-stone-50 border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-stone-950 hover:text-white transition-colors" aria-label="Instagram">
                        <Instagram className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  {/* FAQs */}
                  <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm">
                     <h3 className="font-display font-bold text-xl text-stone-950 mb-6">Frequently Asked Questions</h3>
                     <div className="space-y-4">
                       {faqs.map((faq, idx) => (
                          <div key={idx} className="border-b border-stone-100 pb-4 last:border-0 last:pb-0">
                            <button 
                              onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                              className="w-full flex items-center justify-between text-left font-semibold text-stone-900 group"
                            >
                              {faq.question}
                              <ChevronDown className={`w-4 h-4 text-stone-400 group-hover:text-stone-900 transition-all ${activeFaq === idx ? 'rotate-180' : ''}`} />
                            </button>
                            <AnimatePresence>
                              {activeFaq === idx && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="overflow-hidden"
                                >
                                  <p className="pt-4 text-sm text-stone-600 leading-relaxed">
                                    {faq.answer}
                                  </p>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                       ))}
                     </div>
                  </div>
               </motion.div>

            </div>
         </div>
      </section>

      {/* Global Presence Map or Banner */}
      <section className="py-24 bg-stone-950 text-white relative overflow-hidden mt-12">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/noise/800/800')] opacity-5 mix-blend-overlay pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-primary-600/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
           <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Global reach. Local impact.</h2>
           <p className="text-xl text-stone-400 mb-12 max-w-2xl mx-auto">
             While headquartered in San Francisco, our distributed team partners with organizations across North America, Europe, and Asia.
           </p>

           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-stone-800">
             <div>
               <div className="font-display text-3xl font-bold text-white mb-2">SF</div>
               <div className="text-stone-500 text-sm">Headquarters</div>
             </div>
             <div>
               <div className="font-display text-3xl font-bold text-white mb-2">LDN</div>
               <div className="text-stone-500 text-sm">Design Lab</div>
             </div>
             <div>
               <div className="font-display text-3xl font-bold text-white mb-2">NY</div>
               <div className="text-stone-500 text-sm">Engineering Hub</div>
             </div>
             <div>
               <div className="font-display text-3xl font-bold text-white mb-2">SGP</div>
               <div className="text-stone-500 text-sm">APAC Office</div>
             </div>
           </div>
        </div>
      </section>
      
    </main>
  );
}
