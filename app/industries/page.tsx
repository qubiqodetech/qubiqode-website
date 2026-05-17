"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { 
  ArrowRight, 
  Activity, 
  GraduationCap, 
  Rocket, 
  ShoppingBag, 
  UserCircle, 
  Store,
  CheckCircle2
} from "lucide-react";

const industries = [
  {
    id: "startups",
    title: "Startups & Tech",
    description: "Rapid MVPs, scalable architectures, and pitch-ready product design that helps you secure funding and attract early adopters.",
    icon: <Rocket className="w-6 h-6" />,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    features: ["Fast MVP Delivery", "Investor Deck Design", "Growth-ready Architecture"]
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    description: "High-converting online stores, secure payment integrations, and inventory automation to scale your retail business globally.",
    icon: <ShoppingBag className="w-6 h-6" />,
    color: "text-primary-500",
    bgColor: "bg-primary-50",
    features: ["Custom Storefronts", "Payment Integration", "Conversion Optimization"]
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description: "HIPAA-compliant platforms, patient portals, and telehealth integrations designed for security and ease of use.",
    icon: <Activity className="w-6 h-6" />,
    color: "text-teal-500",
    bgColor: "bg-teal-50",
    features: ["Secure Patient Data", "Telehealth Solutions", "Accessible Design"]
  },
  {
    id: "education",
    title: "Education & EdTech",
    description: "Engaging learning management systems (LMS), online course platforms, and student dashboard experiences.",
    icon: <GraduationCap className="w-6 h-6" />,
    color: "text-indigo-500",
    bgColor: "bg-indigo-50",
    features: ["LMS Development", "Course Creators Tools", "Interactive Dashboards"]
  },
  {
    id: "personal-brands",
    title: "Personal Brands",
    description: "Premium portfolios, membership sites, and monetization funnels for creators, authors, and industry experts.",
    icon: <UserCircle className="w-6 h-6" />,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
    features: ["Premium Portfolios", "Membership Portals", "Newsletter Integration"]
  },
  {
    id: "local-business",
    title: "Local Businesses",
    description: "Lead-generating websites, localized SEO, and booking systems that turn community traffic into loyal customers.",
    icon: <Store className="w-6 h-6" />,
    color: "text-green-500",
    bgColor: "bg-green-50",
    features: ["Local SEO Strategy", "Booking & Scheduling", "Lead Generation"]
  }
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-stone-50 selection:bg-primary-200">
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-48 lg:pb-24 relative overflow-hidden bg-white border-b border-stone-200">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary-600/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center rounded-full border border-stone-200 bg-stone-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-stone-500 mb-8"
          >
            Industries Served
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-stone-950 mb-6 max-w-4xl mx-auto"
          >
            Tailored solutions for <span className="text-primary-600 italic">your sector.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed"
          >
            We don&apos;t believe in one-size-fits-all. Different industries face unique challenges, and we engineer digital products specifically designed to solve them.
          </motion.p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 sm:py-32 relative z-20 -mt-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white border border-stone-200 hover:border-primary-200 rounded-[2rem] p-8 md:p-10 shadow-sm hover:shadow-xl hover:shadow-primary-900/5 transition-all duration-500 flex flex-col h-full"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${industry.bgColor} ${industry.color} group-hover:scale-110 transition-transform duration-500`}>
                  {industry.icon}
                </div>
                
                <h2 className="font-display text-2xl font-bold text-stone-950 mb-4">
                  {industry.title}
                </h2>
                
                <p className="text-stone-600 leading-relaxed mb-8 flex-1">
                  {industry.description}
                </p>

                <div className="space-y-3 pt-6 border-t border-stone-100">
                  {industry.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className={`w-5 h-5 ${industry.color}`} />
                      <span className="text-sm font-semibold text-stone-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Industry Value / The QubiQode Approach */}
      <section className="py-24 bg-stone-950 text-stone-50 border-t border-stone-900">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-6">
                Universal principles, <br/>
                <span className="text-primary-500 italic">specialized application.</span>
              </h2>
              <p className="text-stone-400 text-lg leading-relaxed mb-8">
                While every industry requires a different tactical approach, our core methodology remains strict. We bring enterprise-grade engineering, obsessive attention to UI/UX, and performance-first architecture to every project, regardless of the vertical.
              </p>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center shrink-0 border border-stone-800">
                    <span className="text-primary-500 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Deep Discovery</h3>
                    <p className="text-stone-400 text-sm leading-relaxed">We take the time to deeply understand your market constraints, compliance requirements, and audience expectations before writing a single line of code.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center shrink-0 border border-stone-800">
                    <span className="text-primary-500 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Scalable Foundation</h3>
                    <p className="text-stone-400 text-sm leading-relaxed">Whether you are a startup handling early traffic or an enterprise managing sensitive data, we build on scalable, modern infrastructure.</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-stone-900 rounded-[2rem] p-8 md:p-12 border border-stone-800 relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/20 blur-[80px] rounded-full pointer-events-none" />
               <h3 className="font-display text-2xl font-bold text-white mb-8">Ready to disrupt your industry?</h3>
               <p className="text-stone-400 mb-10 leading-relaxed font-medium">
                 See how we&apos;ve helped companies in your sector achieve their digital goals, or speak directly with our strategy team to discuss your particular use case.
               </p>
               <div className="flex flex-col gap-4">
                 <Link
                   href="/services"
                   className="w-full inline-flex items-center justify-between rounded-xl bg-white px-6 py-4 font-bold text-stone-900 shadow-xl hover:bg-stone-100 transition-all duration-300 group"
                 >
                   Explore Our Services
                   <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                 </Link>
                 <Link
                   href="/book"
                   className="w-full inline-flex items-center justify-between rounded-xl bg-stone-800 border border-stone-700 px-6 py-4 font-bold text-white hover:bg-stone-700 transition-all duration-300 group"
                 >
                   Book Technical Consultation
                   <ArrowRight className="w-5 h-5 text-stone-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                 </Link>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
}
