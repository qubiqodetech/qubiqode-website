"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Search, Map, PenTool, Code2, Bug, Rocket, LifeBuoy } from "lucide-react";

const processSteps = [
  {
    icon: <Search className="w-8 h-8 text-orange-500" />,
    title: "Discovery & Strategy",
    description: "We dive deep into your business goals, target audience, and competitive landscape. We identify the core problems to solve and outline a strategic roadmap to ensure the final product aligns perfectly with your vision.",
    deliverables: ["Stakeholder Interviews", "Market Research", "Project Roadmap", "Technical Requirements"]
  },
  {
    icon: <Map className="w-8 h-8 text-orange-500" />,
    title: "Planning & Architecture",
    description: "Before a single pixel is pushed or line of code is written, we architect the entire system. We map out user journeys, define data structures, and establish the technical stack.",
    deliverables: ["User Stories", "Information Architecture", "Wireframes", "Tech Stack Selection"]
  },
  {
    icon: <PenTool className="w-8 h-8 text-orange-500" />,
    title: "UI/UX Design",
    description: "Our design team translates wireframes into high-fidelity, visually stunning interfaces. We focus on modern aesthetics, intuitive interactions, and a distinctive brand presence.",
    deliverables: ["High-Fidelity Mockups", "Interactive Prototypes", "Design System", "Animation Guidelines"]
  },
  {
    icon: <Code2 className="w-8 h-8 text-orange-500" />,
    title: "Development engineering",
    description: "We build robust, scalable applications using modern technologies. Our engineers write clean, maintainable code following industry best practices and our strict internal quality standards.",
    deliverables: ["Frontend Implementation", "Backend Architecture", "API Integration", "CMS Setup"]
  },
  {
    icon: <Bug className="w-8 h-8 text-orange-500" />,
    title: "Quality Assurance",
    description: "Rigorous testing across multiple devices and browsers ensures a flawless user experience. We perform functional testing, performance optimization, and security audits.",
    deliverables: ["Cross-Browser Testing", "Performance Optimization", "Security Audits", "Accessibility Checks"]
  },
  {
    icon: <Rocket className="w-8 h-8 text-orange-500" />,
    title: "Deployment & Launch",
    description: "We orchestrate a smooth transition to production. We handle server configuration, domain mapping, and final health checks to ensure your application goes live without a hitch.",
    deliverables: ["Production Environment Setup", "Data Migration", "Final Health Checks", "Go-Live Protocol"]
  },
  {
    icon: <LifeBuoy className="w-8 h-8 text-orange-500" />,
    title: "Support & Evolution",
    description: "Launch is just the beginning. We provide ongoing support, monitor system performance, and iterate based on user feedback and changing business needs.",
    deliverables: ["SLA Support Plans", "Performance Monitoring", "Feature Iteration", "Regular Maintenance"]
  }
];

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-stone-50 selection:bg-orange-200">
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-stone-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/noise/800/800')] opacity-5 mix-blend-overlay pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center rounded-full border border-stone-800 bg-stone-900/60 backdrop-blur-md px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-stone-400 mb-8"
          >
            How We Work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6 max-w-4xl mx-auto"
          >
            A proven framework for <span className="text-orange-500 italic">digital success.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-stone-400 max-w-2xl mx-auto leading-relaxed"
          >
            We've refined our methodology over years of building premium digital products. We believe in transparency, rigorous planning, and flawless execution.
          </motion.p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 md:py-32 relative">
        <div className="container mx-auto px-6 max-w-5xl relative">
          
          {/* Main Vertical Track */}
          <div className="hidden md:block absolute top-0 bottom-0 left-[2rem] md:left-1/2 md:-ml-[1px] w-[2px] bg-stone-200" />

          <div className="space-y-16 md:space-y-32">
            {processSteps.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="relative flex flex-col md:flex-row items-center group"
                >
                  {/* Center Node/Marker */}
                  <div className="absolute left-0 md:left-1/2 -ml-2.5 md:-ml-3 w-5 h-5 md:w-6 md:h-6 rounded-full border-4 border-white bg-stone-300 shadow-sm z-10 group-hover:bg-orange-500 transition-colors duration-500" />
                  
                  {/* Connector Line on Mobile */}
                  <div className="md:hidden absolute top-0 bottom-0 left-[9px] w-[2px] bg-stone-200 -z-10 group-first:top-10 group-last:bottom-auto group-last:h-full" />

                  {/* Content Container */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto'}`}>
                    <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-stone-200 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 relative overflow-hidden">
                      <div className={`absolute top-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isEven ? 'right-0' : 'left-0'}`} />
                      
                      <div className={`mb-6 p-4 bg-orange-50 rounded-2xl inline-block ${isEven ? 'md:float-right md:ml-6' : ''}`}>
                         {step.icon}
                      </div>
                      
                      <div className="clear-both">
                        <div className="text-orange-500 font-mono font-bold text-sm mb-2">Phase 0{idx + 1}</div>
                        <h3 className="font-display text-2xl md:text-3xl font-bold text-stone-950 mb-4">{step.title}</h3>
                        <p className="text-stone-600 leading-relaxed mb-6">
                          {step.description}
                        </p>
                        
                        <div className="border-t border-stone-100 pt-6">
                           <h4 className="text-xs uppercase tracking-wider font-bold text-stone-400 mb-4">Key Deliverables</h4>
                           <ul className={`space-y-2 ${isEven ? 'md:flex md:flex-col md:items-end' : ''}`}>
                             {step.deliverables.map((item, i) => (
                               <li key={i} className={`flex items-center gap-2 text-sm font-medium text-stone-700 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                                  {item}
                               </li>
                             ))}
                           </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-stone-950 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
           <QuoteIcon className="w-16 h-16 mx-auto text-stone-800 mb-8" />
           <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-8">
             "Our process is designed to eliminate surprises, mitigate risk, and guarantee a premium outcome."
           </h2>
           <div className="text-stone-400 font-semibold uppercase tracking-widest text-sm">
             The QubiQode Standard
           </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-24 bg-stone-50">
         <div className="container mx-auto px-6 max-w-7xl">
           <motion.div 
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="bg-white rounded-[3rem] p-12 md:p-24 text-center shadow-xl border border-stone-200"
           >
             <div className="max-w-3xl mx-auto">
               <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-950 mb-6">Ready to start the process?</h2>
               <p className="text-xl text-stone-600 mb-10">
                 Let's discuss your next project. We're ready to bring our expertise to your unique challenges.
               </p>
               <Link
                 href="/contact"
                 className="inline-flex items-center justify-center rounded-full bg-orange-600 px-8 py-4 text-sm font-semibold text-white shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:bg-orange-500 transition-all duration-300"
               >
                 Start Your Project
                 <ArrowRight className="ml-2 h-4 w-4" />
               </Link>
             </div>
           </motion.div>
         </div>
      </section>
      
    </main>
  );
}

function QuoteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      stroke="none"
      {...props}
    >
      <path d="M10 11H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H6c0 1.654 1.346 3 3 3h1v2H9c-2.757 0-5-2.243-5-5V5c0-1.103.897-2 2-2h4c1.103 0 2 .897 2 2v4c0 1.103-.897 2-2 2zm10 0h-4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4c0 1.654 1.346 3 3 3h1v2h-1c-2.757 0-5-2.243-5-5V5c0-1.103.897-2 2-2h4c1.103 0 2 .897 2 2v4c0 1.103-.897 2-2 2z"></path>
    </svg>
  );
}
