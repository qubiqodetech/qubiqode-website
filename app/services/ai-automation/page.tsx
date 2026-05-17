"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Bot, Cpu, Network, Zap, Workflow, BrainCircuit, Sparkles, Database, Settings, ShieldCheck, BarChart4, TrendingUp } from "lucide-react";

const capabilities = [
  {
    icon: <Bot className="w-8 h-8 text-cyan-400" />,
    title: "Intelligent Agents",
    description: "Custom AI chatbots and virtual assistants that handle customer support, qualify leads, and provide 24/7 engagement."
  },
  {
    icon: <Workflow className="w-8 h-8 text-cyan-400" />,
    title: "Workflow Automation",
    description: "Eliminate manual data entry and repetitive tasks by connecting your tools and automating complex business processes."
  },
  {
    icon: <BrainCircuit className="w-8 h-8 text-cyan-400" />,
    title: "Predictive Analytics",
    description: "Leverage machine learning to analyze historical data, forecast trends, and make proactive, data-driven decisions."
  },
  {
    icon: <Network className="w-8 h-8 text-cyan-400" />,
    title: "System Integrations",
    description: "Seamlessly connect disparate software systems via APIs to ensure data flows securely and accurately across your organization."
  }
];

const benefits = [
  {
    icon: <Zap className="w-6 h-6 text-cyan-400" />,
    title: "Increased Velocity",
    description: "Tasks that took hours are completed in seconds."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
    title: "Error Reduction",
    description: "Automated systems don't make human transcription errors."
  },
  {
    icon: <Settings className="w-6 h-6 text-cyan-400" />,
    title: "Scalability",
    description: "Software processes scale instantly without hiring overhead."
  },
  {
    icon: <BarChart4 className="w-6 h-6 text-cyan-400" />,
    title: "Higher ROI",
    description: "Reallocate human capital to high-value strategic work."
  }
];

const processSteps = [
  {
    number: "01",
    title: "Process Mapping",
    description: "We audit your current operations to identify bottlenecks and repetitive tasks ripe for automation."
  },
  {
    number: "02",
    title: "Solution Architecture",
    description: "Designing the logic, selecting the right AI models, and mapping out the API integrations."
  },
  {
    number: "03",
    title: "Development & Training",
    description: "Building the automation flows and fine-tuning AI models on your proprietary company data."
  },
  {
    number: "04",
    title: "Deployment & Monitoring",
    description: "Rolling out the solution, monitoring performance, and optimizing for maximum efficiency."
  }
];

export default function AiAutomationPage() {
  return (
    <main className="min-h-screen bg-stone-950 text-white selection:bg-cyan-500/30">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-600/20 via-blue-900/10 to-transparent rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-[20%] left-[5%] w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-600/20 via-cyan-900/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
          
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/gridpattern/800/800')] opacity-[0.02] mix-blend-overlay animate-[spin_240s_linear_infinite]" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            <div className="max-w-3xl">
              <Link href="/services" className="inline-flex items-center text-sm font-medium text-stone-400 hover:text-white transition-colors mb-8">
                <ArrowRight className="w-4 h-4 ml-0 mr-2 rotate-180" />
                Back to Services
              </Link>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center rounded-full border border-stone-800 bg-stone-900/60 backdrop-blur-md px-4 py-1.5 text-xs font-medium text-cyan-300 mb-8 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400 mr-2" />
                  Next-Gen Efficiency
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6"
              >
                Automate operations. <br className="hidden lg:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Accelerate growth.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-stone-400 mb-10 max-w-xl leading-relaxed"
              >
                We build intelligent workflows and integrate cutting-edge AI to eliminate busywork, reduce errors, and scale your business effortlessly.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-600 px-8 py-4 text-sm font-semibold text-white shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:bg-cyan-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300"
                >
                  Explore AI Solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            </div>

            {/* Futuristic Floating Graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative lg:h-[600px] flex justify-center lg:justify-end items-center mt-12 lg:mt-0 viewpoint-group"
            >
              <div className="relative w-full max-w-lg aspect-square">
                 {/* Central AI Node */}
                 <motion.div
                   animate={{ y: [0, -10, 0] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-stone-900 rounded-2xl shadow-[0_0_50px_rgba(6,182,212,0.3)] border border-cyan-500/30 flex items-center justify-center z-30 backdrop-blur-xl"
                 >
                   <BrainCircuit className="w-16 h-16 text-cyan-400" />
                   <div className="absolute inset-0 rounded-2xl border border-cyan-400/50 animate-ping opacity-20" />
                 </motion.div>

                 {/* Orbiting Elements */}
                 <motion.div
                   animate={{ rotate: 360 }}
                   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                   className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full border border-stone-800 border-dashed z-20"
                 >
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-stone-900 border border-stone-700 rounded-lg flex items-center justify-center">
                      <Database className="w-4 h-4 text-cyan-500" />
                    </div>
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-stone-900 border border-stone-700 rounded-lg flex items-center justify-center">
                      <Network className="w-4 h-4 text-cyan-500" />
                    </div>
                 </motion.div>

                 <motion.div
                   animate={{ rotate: -360 }}
                   transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                   className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-stone-800 z-10"
                 >
                    <div className="absolute top-1/2 -left-5 -translate-y-1/2 w-10 h-10 bg-stone-900 border border-stone-700 rounded-lg flex items-center justify-center shadow-lg">
                      <Bot className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div className="absolute top-1/2 -right-5 -translate-y-1/2 w-10 h-10 bg-stone-900 border border-stone-700 rounded-lg flex items-center justify-center shadow-lg">
                      <Workflow className="w-5 h-5 text-blue-400" />
                    </div>
                 </motion.div>
                 
                 {/* Decorative background glow */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-cyan-600/10 rounded-full blur-3xl z-0" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Intro Overview */}
      <section className="py-24 border-b border-stone-800 bg-stone-900/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              Stop treating your software like isolated islands.
            </h2>
            <p className="text-xl text-stone-400 leading-relaxed">
              In the modern digital landscape, efficiency is a competitive advantage. We deploy intelligent automation to seamlessly connect your tools, process data in real-time, and free your team to focus on strategic growth.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-16">
             <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-2 block">Our Expertise</span>
            <h2 className="font-display text-4xl font-bold text-white mb-6">AI & Automation Solutions</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-stone-900/50 p-8 lg:p-10 rounded-3xl border border-stone-800 hover:bg-stone-900 hover:border-cyan-900 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-stone-800 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cyan-900/30 transition-all duration-300">
                  {cap.icon}
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">{cap.title}</h3>
                <p className="text-stone-400 leading-relaxed">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Workflow/Process Section */}
      <section className="py-24 bg-stone-900/20 overflow-hidden relative border-y border-stone-800">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-4xl font-bold mb-6">The Automation Pipeline</h2>
            <p className="text-xl text-stone-400">See how raw data is transformed into actionable intelligence through a structured, automated workflow.</p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative">
             {/* Connecting Line */}
             <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-0.5 bg-stone-800 -translate-y-1/2 z-0" />
             
             {[
               { icon: <Database className="w-6 h-6 text-stone-400" />, title: "Data Ingestion", desc: "APIs extract raw data from your CRM or platforms." },
               { icon: <Bot className="w-6 h-6 text-cyan-400" />, title: "AI Processing", desc: "Models classify, structure, and analyze the input." },
               { icon: <Workflow className="w-6 h-6 text-indigo-400" />, title: "Logic Router", desc: "Rules-based engines determine the next action." },
               { icon: <Zap className="w-6 h-6 text-emerald-400" />, title: "Execution", desc: "Automated updates, notifications, or task creations." }
             ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="relative z-10 w-full lg:w-64 bg-stone-900 border border-stone-800 p-6 rounded-2xl shadow-xl text-center group hover:border-cyan-500/50 transition-colors"
                >
                   <div className="w-14 h-14 mx-auto rounded-xl bg-stone-950 border border-stone-800 flex items-center justify-center mb-4 shadow-inner group-hover:scale-110 transition-transform">
                     {step.icon}
                   </div>
                   <h4 className="text-white font-bold mb-2">{step.title}</h4>
                   <p className="text-stone-400 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Efficiency Benefits Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Scale without the overhead.</h2>
              <p className="text-xl text-stone-400 mb-10 leading-relaxed">
                Automation isn't about replacing humans; it's about amplifying them. By taking robotic work out of human hands, your team can focus on strategy, creativity, and relationship building.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                 {benefits.map((benefit, i) => (
                   <div key={i} className="bg-stone-900/50 border border-stone-800 p-5 rounded-2xl">
                     <div className="mb-3">{benefit.icon}</div>
                     <h4 className="font-bold text-white mb-1">{benefit.title}</h4>
                     <p className="text-stone-400 text-sm">{benefit.description}</p>
                   </div>
                 ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-video lg:aspect-square bg-stone-900 rounded-[3rem] overflow-hidden border border-stone-800 shadow-2xl p-8 flex items-center justify-center"
            >
               <div className="absolute inset-0 opacity-10 bg-[url('https://picsum.photos/seed/techpattern/800/800')] mix-blend-overlay" />
               
               {/* Abstract dashboard/metrics graphic */}
               <div className="relative z-10 w-full max-w-md space-y-4">
                  <div className="bg-stone-950 border border-stone-800 p-6 rounded-2xl">
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-stone-400 text-sm font-mono">Tasks Automated (Monthly)</div>
                      <div className="text-cyan-400 text-xs bg-cyan-950 px-2 py-1 rounded-full">+124%</div>
                    </div>
                    <div className="text-4xl font-display font-bold text-white">45,200</div>
                    <div className="w-full h-2 bg-stone-800 rounded-full mt-4 overflow-hidden">
                       <motion.div 
                         initial={{ width: 0 }}
                         whileInView={{ width: "85%" }}
                         transition={{ duration: 1.5, delay: 0.5 }}
                         className="h-full bg-cyan-500 rounded-full" 
                       />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-stone-950 border border-stone-800 p-5 rounded-2xl">
                      <div className="text-emerald-400 mb-2"><TrendingUp className="w-5 h-5" /></div>
                      <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                      <div className="text-stone-500 text-xs uppercase tracking-wider">Accuracy Level</div>
                    </div>
                    <div className="bg-stone-950 border border-stone-800 p-5 rounded-2xl">
                       <div className="text-indigo-400 mb-2"><Zap className="w-5 h-5" /></div>
                      <div className="text-2xl font-bold text-white mb-1">120h</div>
                      <div className="text-stone-500 text-xs uppercase tracking-wider">Saved per week</div>
                    </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 border-t border-stone-800 bg-stone-900/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-4xl font-bold text-white mb-6">Our Implementation Framework</h2>
            <p className="text-xl text-stone-400">A rigorous, step-by-step approach to digitally transforming your operations securely and effectively.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: i * 0.1 }}
                 className="relative group"
               >
                 <div className="text-5xl font-display font-bold text-stone-800 mb-4 group-hover:text-cyan-900 transition-colors">{step.number}</div>
                 <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                 <p className="text-stone-400 leading-relaxed text-sm">{step.description}</p>
                 
               </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-24 border-t border-stone-800 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />
         
         <div className="container mx-auto px-6 max-w-7xl relative z-10">
           <motion.div 
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="bg-stone-900 border border-stone-800 rounded-[3rem] p-12 md:p-24 text-center shadow-2xl relative overflow-hidden"
           >
             <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/noise2/800/800')] opacity-5 mix-blend-overlay"></div>
             
             <div className="relative z-10 max-w-3xl mx-auto">
               <div className="inline-flex items-center gap-2 text-cyan-400 font-semibold uppercase tracking-widest text-sm mb-6">
                 <Cpu className="w-5 h-5" />
                 Future-Proof Your Business
               </div>
               <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-white">Ready to automate your success?</h2>
               <p className="text-xl text-stone-400 mb-10">
                 Schedule a technical consultation to discover how much time and revenue you could unlock with custom AI solutions.
               </p>
               <Link
                 href="/contact"
                 className="inline-flex items-center justify-center rounded-full bg-cyan-600 px-8 py-4 text-sm font-semibold text-white shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:bg-cyan-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300"
               >
                 Book a Discovery Call
                 <ArrowRight className="ml-2 h-4 w-4" />
               </Link>
             </div>
           </motion.div>
         </div>
      </section>
      
    </main>
  );
}
