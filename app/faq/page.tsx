"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { ArrowRight, ChevronDown, MessageSquare } from "lucide-react";

const faqGroups = [
  {
    category: "Services & Capabilities",
    faqs: [
      {
        question: "What exactly does QubiQode do?",
        answer: "QubiQode is a full-service digital agency. We specialize in building premium web applications, crafting distinctive brand identities, and executing data-driven SEO strategies for scaling businesses and enterprise clients."
      },
      {
        question: "Do you only work with Next.js and React?",
        answer: "While Next.js and React are our primary and preferred tools for building highly performant web applications, our engineering team is versatile. We adapt to the technical requirements of the project, including using Node.js, Python, or specialized Headless CMS solutions."
      },
      {
        question: "Do you handle copywriting and content creation?",
        answer: "Yes, we have an internal team of copywriters and content strategists who ensure the messaging on your site or application aligns perfectly with your brand identity and SEO goals."
      }
    ]
  },
  {
    category: "Pricing & Billing",
    faqs: [
      {
        question: "How do you price your projects?",
        answer: "We prefer value-based and fixed-price contracts for project work to eliminate surprise costs. For ongoing product development or marketing, we offer dedicated retainer models. Minimum project engagements usually start at $10,000."
      },
      {
        question: "Do you require a deposit?",
        answer: "Yes, we typically require a 30% to 50% deposit to secure your place in our production schedule and begin the discovery phase, depending on the total project size."
      },
      {
        question: "Are there any hidden maintenance fees after launch?",
        answer: "No. Any recurring costs for hosting, third-party licenses, or optional support retainers are outlined plainly in the initial proposal. You will never receive a surprise bill from us."
      }
    ]
  },
  {
    category: "Process & Timelines",
    faqs: [
      {
        question: "How long does a typical project take?",
        answer: "A standard corporate website takes around 4-6 weeks from discovery to launch. More complex web applications or comprehensive branding overhauls generally range from 3-6 months. We provide a detailed Gantt chart during onboarding."
      },
      {
        question: "How involved do we need to be during the process?",
        answer: "We need your active participation during the initial discovery phase and at key approval milestones. However, our goal is to take the heavy lifting off your plate so you can focus on running your business."
      },
      {
        question: "How many revisions are included?",
        answer: "We typically include two major revision rounds per deliverable (e.g., design mockups, initial build). Our thorough discovery process usually ensures we hit the mark early, minimizing the need for extensive rework."
      }
    ]
  },
  {
    category: "Support & Post-Launch",
    faqs: [
      {
        question: "Do you provide hosting and maintenance?",
        answer: "Yes, we offer managed hosting environments (typically on Vercel or AWS) and ongoing Technical SEO and maintenance retainers to ensure your product remains secure, fast, and up-to-date."
      },
      {
        question: "Who owns the code and design assets after launch?",
        answer: "Once the final invoice is settled, you own 100% of the deliverables, including the source code, design files (Figma), and brand assets. We do not hold your intellectual property hostage."
      },
      {
        question: "What if something breaks after we launch?",
        answer: "All our project builds include a standard 30-day bug-fix warranty post-launch. For long-term peace of mind, we highly recommend our ongoing support retainers that include active monitoring and SLA-backed response times."
      }
    ]
  }
];

export default function FAQPage() {
  // Store the active FAQ as "groupIndex-faqIndex"
  const [activeId, setActiveId] = useState<string | null>("0-0");

  const toggleFaq = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-stone-50 selection:bg-orange-200">
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-48 lg:pb-24 border-b border-stone-200">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center rounded-full border border-stone-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-stone-600 mb-8 shadow-sm"
          >
            Frequently Asked
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-stone-950 leading-[1.1] mb-6"
          >
            Clear answers to <br className="hidden md:block"/>
            <span className="text-orange-600">common questions.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed"
          >
            Everything you need to know about our process, pricing, capabilities, and what it&apos;s like to partner with QubiQode.
          </motion.p>
        </div>
      </section>

      {/* FAQs Groups */}
      <section className="py-24 bg-white relative z-10">
        <div className="container mx-auto px-6 max-w-4xl">
           
           <div className="space-y-20">
             {faqGroups.map((group, groupIdx) => (
               <motion.div 
                 key={groupIdx}
                 initial={{ opacity: 0, y: 40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 0.6 }}
               >
                  <h2 className="font-display text-3xl font-bold text-stone-950 mb-8 pb-4 border-b-2 border-stone-100">
                    {group.category}
                  </h2>
                  
                  <div className="space-y-4">
                    {group.faqs.map((faq, faqIdx) => {
                      const id = `${groupIdx}-${faqIdx}`;
                      const isActive = activeId === id;
                      
                      return (
                        <div 
                          key={faqIdx} 
                          className={`rounded-2xl border transition-all duration-300 ${isActive ? 'border-orange-500 shadow-md bg-white' : 'border-stone-200 bg-stone-50 hover:border-orange-200 hover:bg-white'}`}
                        >
                          <button 
                            onClick={() => toggleFaq(id)}
                            className="w-full flex items-center justify-between text-left font-bold text-stone-950 p-6 md:p-8 focus:outline-none group"
                          >
                            <span className={`text-lg md:text-xl pr-8 transition-colors ${isActive ? 'text-orange-600' : 'group-hover:text-stone-700'}`}>
                              {faq.question}
                            </span>
                            <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-orange-100' : 'bg-stone-200 group-hover:bg-orange-50'}`}>
                              <ChevronDown className={`w-5 h-5 transition-transform duration-500 ${isActive ? 'rotate-180 text-orange-600' : 'text-stone-500 group-hover:text-orange-500'}`} />
                            </div>
                          </button>
                          
                          <AnimatePresence>
                            {isActive && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                className="overflow-hidden"
                              >
                                <div className="px-6 md:px-8 pb-8 pt-2 text-stone-600 text-lg leading-relaxed border-t border-stone-100">
                                  {faq.answer}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
               </motion.div>
             ))}
           </div>
           
        </div>
      </section>

      {/* Support / Contact CTA */}
      <section className="py-24 bg-stone-100 border-t border-stone-200">
         <div className="container mx-auto px-6 max-w-4xl">
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="bg-stone-950 rounded-[3rem] p-10 md:p-16 text-center shadow-xl border border-stone-800 relative overflow-hidden"
            >
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[100px] pointer-events-none" />
               
               <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
                  <div className="w-16 h-16 bg-stone-800 rounded-full flex items-center justify-center mb-6">
                     <MessageSquare className="w-8 h-8 text-orange-500" />
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Still have questions?</h2>
                  <p className="text-xl text-stone-400 leading-relaxed mb-10">
                    Can&apos;t find the answer you&apos;re looking for? Reach out to our team directly. We&apos;re here to help clarify any details before we begin a partnership.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-xl bg-orange-600 px-8 py-4 text-sm font-semibold text-white shadow-xl hover:bg-orange-500 transition-all duration-300 w-full sm:w-auto"
                    >
                      Contact Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <a
                      href="mailto:hello@qubiqode.com"
                      className="inline-flex items-center justify-center rounded-xl bg-stone-800 border border-stone-700 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-stone-700 transition-all duration-300 w-full sm:w-auto"
                    >
                      Email Us Directly
                    </a>
                  </div>
               </div>
            </motion.div>
         </div>
      </section>

    </main>
  );
}
