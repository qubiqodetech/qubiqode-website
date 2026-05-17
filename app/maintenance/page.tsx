"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Clock, 
  Wrench, 
  Check,
  LifeBuoy
} from "lucide-react";

const plans = [
  {
    name: "Essential Care",
    description: "Perfect for keeping your application secure, updated, and running smoothly.",
    price: "$299",
    period: "/mo",
    featured: false,
    buttonStyle: "bg-stone-100 text-stone-900 hover:bg-stone-200 border border-stone-200",
    features: [
      "24/7 Uptime Monitoring",
      "Weekly Dependency Updates",
      "Daily Encrypted Backups",
      "Basic Security Audits",
      "Email Support (24h SLA)",
    ]
  },
  {
    name: "Growth Retainer",
    description: "Proactive improvements, priority support, and hours dedicated to new features.",
    price: "$899",
    period: "/mo",
    featured: true,
    buttonStyle: "bg-orange-600 text-white hover:bg-orange-500 shadow-xl shadow-orange-900/10",
    features: [
      "Everything in Essential",
      "10 Hours of Development/mo",
      "Priority Bug Fixes (4h SLA)",
      "Monthly Performance Audits",
      "Dedicated Slack Channel",
      "Technical SEO Monitoring"
    ]
  },
  {
    name: "Enterprise SLA",
    description: "Mission-critical support for high-traffic applications and complex architectures.",
    price: "Custom",
    period: "",
    featured: false,
    buttonStyle: "bg-stone-950 text-white hover:bg-stone-800 shadow-xl shadow-stone-900/10",
    features: [
      "Everything in Growth",
      "Custom Response Times",
      "24/7 Emergency Phone Support",
      "Dedicated Account Manager",
      "Quarterly Strategy Reviews",
      "Infrastructure Scaling Management"
    ]
  }
];

const benefits = [
  {
    title: "Uncompromising Security",
    description: "We proactively patch vulnerabilities and keep your tech stack updated before issues become liabilities.",
    icon: <ShieldCheck className="w-6 h-6 text-orange-500" />
  },
  {
    title: "Peak Performance",
    description: "Continuous monitoring means we detect and resolve performance bottlenecks before your users notice them.",
    icon: <Zap className="w-6 h-6 text-blue-500" />
  },
  {
    title: "Guaranteed Response",
    description: "Stop waiting days for developers to reply. Our retainers guarantee strict SLAs for standard and emergency requests.",
    icon: <Clock className="w-6 h-6 text-green-500" />
  },
  {
    title: "Iterative Improvement",
    description: "Digital products shouldn't stagnate. Use your retainer hours to build new features and improve UI/UX consistently.",
    icon: <Wrench className="w-6 h-6 text-purple-500" />
  }
];

export default function MaintenancePage() {
  return (
    <main className="min-h-screen bg-stone-50 selection:bg-orange-200">
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-48 lg:pb-24 relative overflow-hidden bg-stone-950 text-white border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-500/10 via-stone-950 to-stone-950 pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center rounded-full border border-stone-800 bg-stone-900 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-stone-400 mb-8"
          >
            <LifeBuoy className="w-3 h-3 mr-2" />
            Support & Maintenance
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl mx-auto"
          >
            Keep your digital asset <span className="text-orange-500 italic">performing.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-stone-400 max-w-2xl mx-auto leading-relaxed"
          >
            Launch day is just the beginning. Protect your investment, ensure uptime, and continuously iterate with our dedicated retainer and SLA plans.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 relative z-20 -mt-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white rounded-[2.5rem] p-8 md:p-10 border ${plan.featured ? 'border-orange-200 shadow-2xl shadow-orange-900/5 relative scale-100 lg:scale-[1.02] z-10' : 'border-stone-200 shadow-sm'} transition-transform duration-300 flex flex-col h-full`}
              >
                {plan.featured && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                    Most Popular
                  </div>
                )}
                
                <h3 className="font-display text-2xl font-bold text-stone-950 mb-2">{plan.name}</h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-8 h-10">{plan.description}</p>
                
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="font-display text-5xl font-bold text-stone-950">{plan.price}</span>
                  <span className="text-stone-500 font-medium">{plan.period}</span>
                </div>
                
                <Link
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-4 rounded-xl font-bold transition-all duration-300 mb-10 ${plan.buttonStyle}`}
                >
                  Choose {plan.name.split(' ')[0]}
                </Link>
                
                <div className="space-y-4 flex-1">
                  <p className="text-sm font-semibold text-stone-950 uppercase tracking-wide mb-4">What&apos;s included</p>
                  {plan.features.map((feature, i) => (
                    <motion.div 
                      key={i} 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + (i * 0.1) }}
                    >
                      <CheckCircle2 className={`w-5 h-5 shrink-0 ${plan.featured ? 'text-orange-600' : 'text-stone-400'}`} />
                      <span className="text-stone-600 text-sm leading-relaxed">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white border-t border-stone-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-16 md:mb-20 max-w-3xl">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-stone-950 mb-6 tracking-tight">
              Why ongoing care matters
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              Software is not a physical building—it requires constant upkeep to remain secure, fast, and compatible with evolving web standards. Without maintenance, digital products degrade over time.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-stone-50 border border-stone-200 rounded-3xl p-8 hover:bg-stone-100 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-stone-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-xl text-stone-950 mb-3">{benefit.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-stone-950 text-white">
         <div className="container mx-auto px-6 max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
               <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                 Need a custom SLA?
               </h2>
               <p className="text-stone-400 text-lg mb-10 max-w-2xl mx-auto">
                 If you are operating a high-compliance platform, an enterprise SaaS, or complex multi-tenant architecture, we can structure a bespoke maintenance agreement.
               </p>
               <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                 <Link
                   href="/contact"
                   className="inline-flex items-center justify-center w-full sm:w-auto rounded-xl bg-orange-600 px-8 py-4 font-bold text-white shadow-xl hover:bg-orange-500 hover:-translate-y-0.5 transition-all duration-300"
                 >
                   Discuss Enterprise Support
                   <ArrowRight className="w-5 h-5 ml-2" />
                 </Link>
               </div>
            </motion.div>
         </div>
      </section>

    </main>
  );
}
