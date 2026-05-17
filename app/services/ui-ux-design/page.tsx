"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PenTool, Layout, Palette, Users, Eye, Target, MousePointer2, Smartphone, Layers } from "lucide-react";

const capabilities = [
  {
    icon: <Users className="w-8 h-8 text-primary-500" />,
    title: "User Research & Strategy",
    description: "Deep diving into user behavior, needs, and pain points to inform data-driven design decisions."
  },
  {
    icon: <Layout className="w-8 h-8 text-primary-500" />,
    title: "Wireframing & Prototyping",
    description: "Mapping out user journeys and creating interactive prototypes to validate concepts early."
  },
  {
    icon: <Palette className="w-8 h-8 text-primary-500" />,
    title: "Visual Interface Design",
    description: "Crafting beautiful, pixel-perfect interfaces that reflect your brand's identity and values."
  },
  {
    icon: <Layers className="w-8 h-8 text-primary-500" />,
    title: "Design Systems",
    description: "Building scalable, reusable component libraries to ensure consistency and speed up development."
  }
];

const benefits = [
  {
    title: "Increased Conversions",
    description: "Frictionless user journeys naturally lead to higher conversion rates and better ROI."
  },
  {
    title: "Enhanced Retention",
    description: "Users stick around when an application is intuitive, accessible, and a joy to use."
  },
  {
    title: "Reduced Development Costs",
    description: "Rigorous prototyping catches flaws before coding begins, saving significant engineering time."
  },
  {
    title: "Brand Loyalty",
    description: "A premium, consistent look and feel establishes trust and elevates your market positioning."
  }
];

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "Understanding your business goals, target audience, and market landscape."
  },
  {
    number: "02",
    title: "Define",
    description: "Creating user personas, journey maps, and information architecture."
  },
  {
    number: "03",
    title: "Design",
    description: "Developing wireframes, visual designs, and interactive prototypes."
  },
  {
    number: "04",
    title: "Deliver",
    description: "Handoff with comprehensive design systems and developer-ready assets."
  }
];

export default function UiUxDesignPage() {
  return (
    <main className="min-h-screen bg-stone-50 selection:bg-primary-200">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-stone-50 text-stone-950">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-200/50 via-sky-100/20 to-transparent rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-[50%] left-[-10%] w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-stone-200/50 via-stone-100/20 to-transparent rounded-full blur-[100px] pointer-events-none" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            <div className="max-w-3xl">
              <Link href="/services" className="inline-flex items-center text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors mb-8">
                <ArrowRight className="w-4 h-4 ml-0 mr-2 rotate-180" />
                Back to Services
              </Link>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center rounded-full border border-stone-200 bg-white shadow-sm px-4 py-1.5 text-xs font-medium text-stone-600 mb-8">
                  <PenTool className="w-3.5 h-3.5 text-primary-500 mr-2" />
                  Premium Design
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-stone-950 leading-[1.1] mb-6"
              >
                Interfaces designed for <br className="hidden lg:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-sky-500">human connection.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-stone-600 mb-10 max-w-xl leading-relaxed"
              >
                We craft intuitive, accessible, and visually stunning digital experiences that captivate users and drive business results.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-stone-950 px-8 py-4 text-sm font-semibold text-white shadow-xl hover:bg-stone-800 transition-all duration-300"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            </div>

            {/* Floating Abstract UI */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative lg:h-[600px] flex justify-center lg:justify-end items-center mt-12 lg:mt-0 viewpoint-group"
            >
              <div className="relative w-full max-w-lg aspect-square">
                 {/* Background Blur */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary-400/20 rounded-full blur-3xl" />
                 
                 {/* Floating Element 1 - Main Mockup Card */}
                 <motion.div
                   animate={{ y: [0, -10, 0] }}
                   transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute top-[10%] right-[10%] w-[70%] h-[60%] bg-white rounded-3xl shadow-2xl border border-stone-100 overflow-hidden z-20 flex flex-col"
                 >
                   <div className="h-12 bg-stone-50 border-b border-stone-100 flex items-center px-4 space-x-2">
                     <div className="w-2.5 h-2.5 rounded-full bg-stone-300" />
                     <div className="w-2.5 h-2.5 rounded-full bg-stone-300" />
                     <div className="w-2.5 h-2.5 rounded-full bg-stone-300" />
                   </div>
                   <div className="p-6 flex-1 bg-stone-50/50">
                     <div className="flex gap-4 mb-6">
                       <div className="w-12 h-12 rounded-full bg-primary-100 shrink-0" />
                       <div className="space-y-2 flex-1 pt-1">
                         <div className="h-3 bg-stone-200 rounded w-1/2" />
                         <div className="h-2 bg-stone-100 rounded w-3/4" />
                       </div>
                     </div>
                     <div className="grid grid-cols-2 gap-4">
                       <div className="h-24 bg-white border border-stone-100 rounded-xl shadow-sm" />
                       <div className="h-24 bg-white border border-stone-100 rounded-xl shadow-sm" />
                     </div>
                   </div>
                 </motion.div>

                 {/* Floating Element 2 - Component Box */}
                 <motion.div
                   animate={{ y: [0, 15, 0] }}
                   transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                   className="absolute bottom-[20%] left-[5%] w-[45%] bg-stone-950 backdrop-blur-xl rounded-2xl shadow-xl border border-stone-800 p-5 z-30"
                 >
                    <div className="flex justify-between items-center mb-4">
                      <div className="w-16 h-3 bg-stone-700 rounded-full" />
                      <MousePointer2 className="w-4 h-4 text-primary-500 origin-top-left -rotate-12" />
                    </div>
                    <div className="h-10 bg-primary-500 rounded-xl flex items-center justify-center">
                       <span className="w-12 h-2 bg-white/50 rounded-full" />
                    </div>
                 </motion.div>

                 {/* Floating Element 3 - Image Asset */}
                 <motion.div
                   animate={{ y: [0, -15, 0] }}
                   transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                   className="absolute top-[25%] left-[0%] w-[35%] aspect-[4/5] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white overflow-hidden z-10"
                 >
                    <Image src="https://picsum.photos/seed/uidesign/400/500" alt="Design Detail" fill className="object-cover" referrerPolicy="no-referrer" />
                 </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Intro Overview */}
      <section className="py-24 bg-white border-y border-stone-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-stone-950 leading-tight mb-6">
              Design is not just what it looks like. Design is how it <span className="italic text-primary-600">works</span>.
            </h2>
            <p className="text-xl text-stone-600 leading-relaxed">
              We go beyond aesthetics. Our design process ensures every click, swipe, and scroll serves a purpose, driving engagement and creating delightful user journeys.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-16">
             <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-2 block">Our Expertise</span>
            <h2 className="font-display text-4xl font-bold text-stone-950 mb-6">Comprehensive UX/UI Services</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 lg:p-10 rounded-3xl border border-stone-200 shadow-sm hover:shadow-xl hover:border-primary-200 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary-100 transition-transform">
                  {cap.icon}
                </div>
                <h3 className="font-display text-2xl font-bold text-stone-950 mb-4">{cap.title}</h3>
                <p className="text-stone-600 leading-relaxed">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Systems & Components Visual Section */}
      <section className="py-24 bg-stone-950 text-white overflow-hidden relative">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Design Systems & Scalability</h2>
              <p className="text-xl text-stone-400 mb-8 leading-relaxed">
                We build comprehensive design systems that establish a single source of truth. By defining tokens, typography scales, and modular components, we bridge the gap between design and development.
              </p>
              <ul className="space-y-4">
                {['Consistent Brand Identity', 'Faster Development Cycles', 'Accessible Color Palettes', 'Reusable Code Components'].map((item, i) => (
                  <li key={i} className="flex items-center text-stone-300">
                    <Target className="w-5 h-5 text-primary-500 mr-3 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-video lg:aspect-square bg-stone-900 rounded-[2rem] border border-stone-800 p-8 flex flex-col gap-6 overflow-hidden"
            >
              {/* Decorative elements representing components */}
              <div className="flex justify-between items-end border-b border-stone-800 pb-4">
                <div className="text-sm font-mono text-stone-500">Design Tokens</div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary-500" />
                  <div className="w-8 h-8 rounded-full bg-blue-500" />
                  <div className="w-8 h-8 rounded-full bg-emerald-500" />
                  <div className="w-8 h-8 rounded-full bg-stone-100" />
                </div>
              </div>

              <div className="flex-1 grid grid-cols-2 gap-4">
                 <div className="bg-stone-950 rounded-xl border border-stone-800 p-4 flex flex-col justify-between hover:border-stone-600 transition-colors">
                   <div className="space-y-2">
                     <div className="w-1/2 h-3 bg-stone-700 rounded-sm" />
                     <div className="w-full h-2 bg-stone-800 rounded-sm" />
                   </div>
                   <div className="w-full h-8 bg-white text-stone-950 flex items-center justify-center text-xs font-semibold rounded-md">Primary Button</div>
                 </div>
                 <div className="bg-stone-950 rounded-xl border border-stone-800 p-4 flex flex-col justify-between hover:border-stone-600 transition-colors">
                   <div className="space-y-2">
                     <div className="w-1/2 h-3 bg-stone-700 rounded-sm" />
                     <div className="w-full h-2 bg-stone-800 rounded-sm" />
                   </div>
                   <div className="w-full h-8 bg-transparent border border-stone-700 text-stone-300 flex items-center justify-center text-xs font-semibold rounded-md">Secondary Button</div>
                 </div>
                 <div className="col-span-2 bg-stone-950 rounded-xl border border-stone-800 p-4 flex items-center gap-4 hover:border-stone-600 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-stone-800 shrink-0" />
                    <div className="space-y-2 flex-1">
                      <div className="w-1/3 h-3 bg-stone-700 rounded-sm" />
                      <div className="w-2/3 h-2 bg-stone-800 rounded-sm" />
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white border-b border-stone-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-4xl font-bold text-stone-950 mb-6">Our Design Process</h2>
            <p className="text-xl text-stone-600">A structured approach to solving complex design challenges.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
             <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-stone-200" />
             
            {processSteps.map((step, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: i * 0.1 }}
                 className="relative z-10 flex flex-col items-center text-center group"
               >
                 <div className="w-14 h-14 rounded-full bg-white border-2 border-primary-500 text-primary-600 flex items-center justify-center font-display font-bold text-xl mb-6 shadow-[0_0_0_8px_rgba(255,255,255,1)] group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                   {step.number}
                 </div>
                 <h3 className="text-xl font-bold text-stone-950 mb-3">{step.title}</h3>
                 <p className="text-stone-600 leading-relaxed text-sm">{step.description}</p>
               </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="font-display text-4xl font-bold text-stone-950 mb-6">The Business Value</h2>
              <p className="text-xl text-stone-600 mb-8 leading-relaxed">
                Great design isn't just an expense—it's an investment that directly impacts your bottom line.
              </p>
            </div>
            
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
               {benefits.map((benefit, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm"
                  >
                    <h3 className="font-bold text-xl text-stone-950 mb-3">{benefit.title}</h3>
                    <p className="text-stone-600">{benefit.description}</p>
                  </motion.div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white border-t border-stone-200">
         <div className="container mx-auto px-6 max-w-7xl">
           <motion.div 
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="bg-stone-950 rounded-[3rem] p-12 md:p-24 text-center shadow-xl relative overflow-hidden text-white"
           >
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/20 rounded-full blur-[80px]" />
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500/20 rounded-full blur-[80px]" />
             
             <div className="relative z-10 max-w-3xl mx-auto">
               <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Ready to redesign your digital presence?</h2>
               <p className="text-xl text-stone-400 mb-10">
                 Partner with us to create interfaces that users love and competitors envy.
               </p>
               <Link
                 href="/contact"
                 className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-stone-950 shadow-xl hover:bg-stone-200 transition-all duration-300"
               >
                 Start a Design Project
                 <ArrowRight className="ml-2 h-4 w-4" />
               </Link>
             </div>
           </motion.div>
         </div>
      </section>
      
    </main>
  );
}
