"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { ArrowRight, Check, HelpCircle, ChevronDown, Rocket, Briefcase, Building2, Zap } from "lucide-react";

const pricingPlans = [
  {
    name: "Ignite",
    description: "Perfect for early-stage startups needing a premium foundation.",
    price: "10k+",
    period: "per project",
    icon: <Rocket className="w-6 h-6 text-stone-500" />,
    features: [
      "Custom Brand Identity",
      "5-Page Marketing Website",
      "Responsive UI/UX Design",
      "Basic SEO Setup",
      "1 Month Post-Launch Support",
    ],
    popular: false,
    cta: "Start with Ignite"
  },
  {
    name: "Momentum",
    description: "Comprehensive digital solutions for scaling businesses.",
    price: "25k+",
    period: "per project",
    icon: <Zap className="w-6 h-6 text-primary-500" />,
    features: [
      "Everything in Ignite",
      "Custom Web Application",
      "Advanced Interactions & Animation",
      "CMS Integration & Architecture",
      "Comprehensive Technical SEO",
      "3 Months Post-Launch Support",
    ],
    popular: true,
    cta: "Scale with Momentum"
  },
  {
    name: "Enterprise",
    description: "Dedicated teams for complex platforms and digital transformation.",
    price: "Custom",
    period: "retainer or project",
    icon: <Building2 className="w-6 h-6 text-stone-500" />,
    features: [
      "Unlimited Scoping",
      "Dedicated Product Team",
      "Custom Enterprise APIs",
      "System Migrations",
      "24/7 SLA Support",
      "Consulting & Strategy Meetings",
    ],
    popular: false,
    cta: "Contact Sales"
  }
];

const faqs = [
  {
    question: "Do you offer flexible payment terms?",
    answer: "Yes, standard project payments are typically split into milestones (e.g., 30% deposit, 40% halfway, 30% at launch), but we can configure terms that suit your specific financial cycles."
  },
  {
    question: "What is the difference between project-based and retainer pricing?",
    answer: "Project-based pricing is best for well-defined scopes like a new website or app launch. Retainers are ideal for ongoing design, continuous feature development, and long-term marketing execution."
  },
  {
    question: "Are there any hidden costs or ongoing fees?",
    answer: "We believe in absolute transparency. Any ongoing costs like server hosting, third-party software licenses, or maintenance plans will be clearly outlined before the project begins."
  },
  {
    question: "Do you work with equity or revenue-share models?",
    answer: "We occasionally partner with high-potential tech startups under hybrid cash/equity models, subject to a rigorous vetting process. Reach out if you believe there is a strategic fit."
  }
];

const comparisonFeatures = [
  { name: "Custom Brand Identity", plans: [true, true, true] },
  { name: "Responsive UI/UX Design", plans: [true, true, true] },
  { name: "Basic SEO Setup", plans: [true, true, true] },
  { name: "CMS Integration", plans: [false, true, true] },
  { name: "Custom Web Application", plans: [false, true, true] },
  { name: "Advanced Animations", plans: [false, true, true] },
  { name: "Dedicated Product Team", plans: [false, false, true] },
  { name: "Custom Enterprise APIs", plans: [false, false, true] },
  { name: "24/7 SLA Support", plans: [false, false, true] },
];

export default function PricingPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-stone-50 selection:bg-primary-200">
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-48 lg:pb-24 border-b border-stone-200">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center rounded-full border border-stone-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-stone-600 mb-8 shadow-sm"
          >
            Pricing & Packages
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-stone-950 leading-[1.1] mb-6 max-w-4xl mx-auto"
          >
            Transparent pricing for <br className="hidden md:block"/>
            <span className="text-primary-600">world-class execution.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed"
          >
            No hidden fees or vague estimates. We partner with ambitious brands to deliver measurable outcomes and premium digital products.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 -mt-12 md:-mt-16 lg:-mt-24 relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + (i * 0.1) }}
                className={`relative bg-white rounded-3xl p-8 lg:p-10 shadow-xl border ${
                  plan.popular 
                    ? "border-primary-500 ring-4 ring-primary-500/10 lg:-translate-y-4" 
                    : "border-stone-200 hover:border-primary-200"
                } transition-all duration-300 flex flex-col h-full`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                    Most Popular
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-6">
                   <div className="w-12 h-12 rounded-2xl bg-stone-50 border border-stone-100 flex items-center justify-center shrink-0">
                     {plan.icon}
                   </div>
                   {plan.popular && <span className="text-primary-500 font-semibold text-sm">Best Value</span>}
                </div>
                
                <h3 className="font-display font-bold text-2xl text-stone-950 mb-2">{plan.name}</h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-8 flex-1">{plan.description}</p>
                
                <div className="mb-8 border-b border-stone-100 pb-8">
                  <div className="flex items-baseline gap-1">
                    {plan.price !== "Custom" && <span className="text-3xl font-bold text-stone-950">$</span>}
                    <span className="font-display text-5xl font-bold text-stone-950 tracking-tight">{plan.price}</span>
                  </div>
                  <div className="text-stone-400 text-sm font-medium mt-1">{plan.period}</div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-primary-50 flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary-600 stroke-[3]" />
                      </div>
                      <span className="text-stone-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href="/contact"
                  className={`mt-auto w-full inline-flex items-center justify-center rounded-xl px-6 py-4 text-sm font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? "bg-primary-600 text-white shadow-lg hover:bg-primary-500" 
                      : "bg-stone-100 text-stone-900 border border-stone-200 hover:bg-stone-200"
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-24 bg-white border-y border-stone-200">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-950 mb-4">Compare Features</h2>
            <p className="text-lg text-stone-600">A detailed breakdown of what is included in each engagement type.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr>
                  <th className="py-6 px-4 bg-white border-b-2 border-stone-100 font-display text-xl font-bold text-stone-950 w-2/5">Features</th>
                  {pricingPlans.map(plan => (
                    <th key={plan.name} className="py-6 px-4 bg-white border-b-2 border-stone-100 text-center font-bold text-stone-950 w-1/5">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, i) => (
                  <tr key={i} className="group hover:bg-stone-50 transition-colors">
                    <td className="py-4 px-4 border-b border-stone-100 text-stone-700 font-medium">{feature.name}</td>
                    {feature.plans.map((included, idx) => (
                      <td key={idx} className="py-4 px-4 border-b border-stone-100 text-center">
                        {included ? (
                          <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center mx-auto">
                            <Check className="w-4 h-4 text-primary-600" />
                          </div>
                        ) : (
                          <span className="text-stone-300 font-bold">-</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Custom Quote Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="bg-stone-950 rounded-[3rem] p-10 md:p-16 lg:p-20 text-white flex flex-col md:flex-row items-center justify-between gap-12 border border-stone-800 shadow-2xl relative"
           >
             <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-600/10 rounded-full blur-[100px] pointer-events-none" />
             
             <div className="max-w-xl relative z-10">
               <h3 className="font-display text-3xl md:text-5xl font-bold mb-6">Need something highly custom?</h3>
               <p className="text-stone-400 text-lg leading-relaxed">
                 From complex system integrations to multi-platform product launches, our engineering and design teams are ready to architect a bespoke solution tailored to your exact requirements.
               </p>
             </div>
             <div className="shrink-0 relative z-10 w-full md:w-auto">
               <Link
                 href="/contact"
                 className="inline-flex w-full md:w-auto items-center justify-center rounded-xl bg-primary-600 px-8 py-5 text-base font-semibold text-white shadow-[0_0_20px_rgba(30,144,255,0.3)] hover:bg-primary-500 transition-all duration-300 whitespace-nowrap"
               >
                 Request Custom Quote <ArrowRight className="w-5 h-5 ml-2" />
               </Link>
             </div>
           </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-stone-50 border-t border-stone-200">
         <div className="container mx-auto px-6 max-w-3xl">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-stone-950 mb-4">Pricing FAQs</h2>
              <p className="text-stone-600 text-lg">Clear answers to common questions about our billing and engagements.</p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:border-primary-200 transition-colors">
                  <button 
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between text-left font-bold text-stone-950 p-6 focus:outline-none"
                  >
                    <span className="pr-8">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-stone-400 shrink-0 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180 text-primary-500' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {activeFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-stone-600 leading-relaxed text-sm md:text-base border-t border-stone-100 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* Final CTA Area */}
      <section className="py-24 bg-white border-t border-stone-200">
         <div className="container mx-auto px-6 max-w-7xl text-center">
             <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-950 mb-6">Invest in exceptional quality.</h2>
             <p className="text-xl text-stone-600 mb-10 max-w-2xl mx-auto">
               The right digital product pays for itself in increased conversions, operational efficiency, and brand equity.
             </p>
             <Link
               href="/portfolio"
               className="inline-flex items-center justify-center rounded-full bg-stone-950 px-8 py-4 text-sm font-semibold text-white shadow-xl hover:bg-stone-800 transition-all duration-300 mr-4 w-full sm:w-auto mb-4 sm:mb-0"
             >
               View Our Work
             </Link>
             <Link
               href="/contact"
               className="inline-flex items-center justify-center rounded-full bg-stone-100 border border-stone-200 px-8 py-4 text-sm font-semibold text-stone-900 shadow-sm hover:bg-stone-200 transition-all duration-300 w-full sm:w-auto"
             >
               Contact Sales
             </Link>
         </div>
      </section>
      
    </main>
  );
}
