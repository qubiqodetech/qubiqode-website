"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code2, Server, Smartphone, Zap, CheckCircle2, Layout, Database, Terminal, Shield, Blocks } from "lucide-react";

const siteTypes = [
  {
    icon: <Layout className="w-8 h-8 text-primary-500" />,
    title: "E-Commerce Platforms",
    description: "High-converting online stores built on headless architecture for blazing fast load times and limitless scalability."
  },
  {
    icon: <Server className="w-8 h-8 text-primary-500" />,
    title: "Corporate Websites",
    description: "Premium digital presences for B2B brands that establish authority, build trust, and generate qualified leads."
  },
  {
    icon: <Smartphone className="w-8 h-8 text-primary-500" />,
    title: "Web Applications",
    description: "Complex SaaS products and custom dashboards with rich interactivity and seamless user experiences."
  },
  {
    icon: <Database className="w-8 h-8 text-primary-500" />,
    title: "Headless CMS Solutions",
    description: "Flexible content management setups using Sanity or Contentful, decoupled from the frontend for ultimate speed."
  }
];

const benefits = [
  {
    title: "Sub-Second Load Times",
    description: "We optimize every asset and use edge caching to ensure your site loads instantly globally."
  },
  {
    title: "Perfect Core Web Vitals",
    description: "Our builds consistently hit 100/100 on Lighthouse, giving you a massive SEO advantage."
  },
  {
    title: "Modern Tech Stack",
    description: "We build with Next.js, React, and Tailwind—the same stack powering the world's most successful tech companies."
  },
  {
    title: "Aesthetic Excellence",
    description: "We don't sacrifice design for performance. You get award-winning visuals with flawless code."
  }
];

const processSteps = [
  {
    number: "01",
    title: "Technical Discovery",
    description: "We analyze your requirements, plan the data architecture, and define the optimal technology stack."
  },
  {
    number: "02",
    title: "Prototyping",
    description: "We build interactive wireframes and validate core user flows before writing any production code."
  },
  {
    number: "03",
    title: "Agile Engineering",
    description: "Our developers build your application in sprints, providing regular updates and staging environments."
  },
  {
    number: "04",
    title: "QA & Launch",
    description: "Rigorous cross-browser testing, accessibility checks, and performance audits ensure a flawless launch."
  }
];

const techStack = [
  { name: "Next.js", category: "Framework" },
  { name: "React", category: "Library" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Framer Motion", category: "Animation" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Vercel", category: "Hosting" },
];

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen bg-stone-50 selection:bg-primary-200">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-stone-950 text-white">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-600/20 via-primary-900/10 to-transparent rounded-full blur-3xl pointer-events-none" />
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
                <div className="inline-flex items-center rounded-full border border-stone-800 bg-stone-900/60 backdrop-blur-md px-4 py-1.5 text-xs font-medium text-stone-300 mb-8 shadow-sm">
                  <Code2 className="w-3.5 h-3.5 text-primary-500 mr-2" />
                  Engineering Excellence
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6"
              >
                High-performance <br className="hidden lg:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-sky-600">web architecture.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-stone-400 mb-10 max-w-xl leading-relaxed"
              >
                We construct scalable, lightning-fast digital platforms using modern tech stacks. Designed for ambition, engineered for scale.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-stone-950 shadow-xl hover:bg-stone-200 transition-all duration-300"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            </div>

            {/* Floating Mockup / Code Graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative lg:h-[600px] flex justify-center lg:justify-end items-center mt-12 lg:mt-0"
            >
              <div className="relative w-full max-w-lg aspect-[4/3] bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl overflow-hidden shadow-primary-900/20">
                {/* Header */}
                <div className="flex items-center px-4 py-3 border-b border-stone-800 bg-stone-950/50">
                  <div className="flex gap-1.5 focus:outline-none">
                    <div className="w-3 h-3 rounded-full bg-stone-700"></div>
                    <div className="w-3 h-3 rounded-full bg-stone-700"></div>
                    <div className="w-3 h-3 rounded-full bg-stone-700"></div>
                  </div>
                  <div className="mx-auto text-xs font-mono text-stone-500">layout.tsx</div>
                </div>
                {/* Editor Content */}
                <div className="p-6 font-mono text-sm overflow-hidden select-none">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <span className="text-purple-400">export default</span> <span className="text-blue-400">function</span> <span className="text-yellow-200">RootLayout</span>({'{'}
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="pl-4"
                  >
                    children,
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    {'}'}: {'{'} children: <span className="text-green-300">React.ReactNode</span> {'}'}) {'{'}
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    className="pl-4 text-stone-300"
                  >
                    <span className="text-purple-400">return</span> (
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0, duration: 0.5 }}
                    className="pl-8 text-stone-400"
                  >
                    &lt;<span className="text-red-400">html</span> <span className="text-primary-300">lang</span>=<span className="text-green-300">"en"</span>&gt;
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.5 }}
                    className="pl-12 text-stone-400"
                  >
                    &lt;<span className="text-red-400">body</span> <span className="text-primary-300">className</span>=<span className="text-green-300">"antialiased"</span>&gt;
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className="pl-16 text-white font-bold"
                  >
                    {'{'}children{'}'}
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3, duration: 0.5 }}
                    className="pl-12 text-stone-400"
                  >
                    &lt;/<span className="text-red-400">body</span>&gt;
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 0.5 }}
                    className="pl-8 text-stone-400"
                  >
                    &lt;/<span className="text-red-400">html</span>&gt;
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="pl-4 text-stone-300"
                  >
                    )
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6, duration: 0.5 }}
                  >
                    {'}'}
                  </motion.div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Intro Overview */}
      <section className="py-24 bg-white border-b border-stone-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-stone-950 leading-tight mb-6">
              We don't use templates. We engineer digital products from the ground up.
            </h2>
            <p className="text-xl text-stone-600 leading-relaxed">
              Your business is unique, and your website should reflect that. At QubiQode, we build custom web solutions structured for speed, security, and limitless scalability.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Websites Built */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-16">
            <h2 className="font-display text-4xl font-bold text-stone-950 mb-6">What We Build</h2>
            <p className="text-xl text-stone-600 max-w-2xl">
              From sophisticated marketing sites to complex web applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {siteTypes.map((type, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm hover:shadow-xl hover:border-primary-200 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center mb-6">
                  {type.icon}
                </div>
                <h3 className="font-display text-2xl font-bold text-stone-950 mb-4">{type.title}</h3>
                <p className="text-stone-600 leading-relaxed">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-stone-950 text-white overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[600px] bg-primary-600/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">The QubiQode Standard</h2>
              <p className="text-xl text-stone-400 mb-10 leading-relaxed">
                When you partner with us for web development, you're investing in a technical foundation that will drive your business forward for years.
              </p>
              
              <div className="space-y-8">
                {benefits.map((benefit, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center">
                      <Zap className="w-3.5 h-3.5 text-primary-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">{benefit.title}</h4>
                      <p className="text-stone-400">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                 <Image 
                   src="https://picsum.photos/seed/codeenvironment/1000/1200"
                   alt="Modern Development Interface"
                   fill
                   className="object-cover"
                   referrerPolicy="no-referrer"
                 />
                 <div className="absolute inset-0 bg-stone-900/40 mix-blend-multiply" />
                 
                 {/* Floating Metric Card */}
                 <div className="absolute bottom-10 -left-6 md:-left-12 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full border-4 border-green-500 flex items-center justify-center font-display font-bold text-xl text-white">
                        100
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg">Performance</div>
                        <div className="text-stone-400 text-sm">Lighthouse Score</div>
                      </div>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-32 bg-stone-50 border-b border-stone-200">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h2 className="font-display text-4xl font-bold text-stone-950 mb-6">Our Technology Arsenal</h2>
          <p className="text-xl text-stone-600 mb-16 max-w-2xl mx-auto">
            We utilize the most modern, stable, and performant frameworks to build your digital presence.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative bg-white border border-stone-200 px-6 py-4 rounded-full shadow-sm hover:border-primary-500 hover:shadow-md transition-all cursor-default"
              >
                <div className="font-semibold text-stone-950 group-hover:text-primary-600 transition-colors">
                  {tech.name}
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-stone-950 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {tech.category}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-4xl font-bold text-stone-950 mb-6">How We Build</h2>
            <p className="text-xl text-stone-600">A transparent, agile workflow focused on velocity and quality.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: i * 0.1 }}
                 className="relative"
               >
                 <div className="text-5xl font-display font-bold text-stone-200 mb-4">{step.number}</div>
                 <h3 className="text-xl font-bold text-stone-950 mb-3">{step.title}</h3>
                 <p className="text-stone-600 leading-relaxed">{step.description}</p>
                 
                 {/* Connector Line */}
                 {i !== processSteps.length - 1 && (
                   <div className="hidden lg:block absolute top-8 -right-4 w-8 h-px bg-stone-200" />
                 )}
               </motion.div>
            ))}
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
             className="bg-primary-600 rounded-[3rem] p-12 md:p-24 text-center shadow-2xl relative overflow-hidden"
           >
             <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/noise/800/800')] opacity-5 mix-blend-overlay"></div>
             
             <div className="relative z-10 max-w-3xl mx-auto text-white">
               <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">Ready to upgrade your web presence?</h2>
               <p className="text-xl text-primary-100 mb-10">
                 Let's talk about your technical requirements and build something extraordinary.
               </p>
               <Link
                 href="/contact"
                 className="inline-flex items-center justify-center rounded-full bg-stone-950 px-8 py-4 text-sm font-semibold text-white shadow-xl hover:bg-stone-800 transition-all duration-300"
               >
                 Discuss Your Project
                 <ArrowRight className="ml-2 h-4 w-4" />
               </Link>
             </div>
           </motion.div>
         </div>
      </section>
      
    </main>
  );
}
