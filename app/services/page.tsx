"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code2, PenTool, Search, Sparkles, Video, Bot, ArrowUpRight, CheckCircle2 } from "lucide-react";

const servicesList = [
  {
    id: "web-development",
    icon: <Code2 className="w-8 h-8 text-orange-500" />,
    title: "Web Development",
    description: "High-performance, scalable web applications built with modern frameworks. We deliver robust architecture and pristine code quality.",
    features: ["Next.js & React", "E-commerce Platforms", "Custom Web Apps", "CMS Integration"],
    href: "/services/web-development"
  },
  {
    id: "ui-ux-design",
    icon: <PenTool className="w-8 h-8 text-orange-500" />,
    title: "UI/UX Design",
    description: "Intuitive, beautiful, and conversion-focused design. We create interfaces that captivate users and elevate your brand aesthetic.",
    features: ["User Research", "Wireframing & Prototyping", "Design Systems", "Web & Mobile App Design"],
    href: "/services/ui-ux-design"
  },
  {
    id: "seo",
    icon: <Search className="w-8 h-8 text-orange-500" />,
    title: "SEO Optimization",
    description: "Data-driven SEO strategies that drive organic growth. We ensure your digital presence dominates search engine results.",
    features: ["Technical SEO", "On-page Optimization", "Content Strategy", "Performance Audits"],
    href: "/services/seo"
  },
  {
    id: "branding",
    icon: <Sparkles className="w-8 h-8 text-orange-500" />,
    title: "Branding & Creative Media",
    description: "Strategic brand identities that leave a lasting impression. From logos to comprehensive brand guidelines.",
    features: ["Brand Strategy", "Visual Identity", "Typography & Color", "Brand Guidelines"],
    href: "/services/branding"
  },
  {
    id: "video-editing",
    icon: <Video className="w-8 h-8 text-orange-500" />,
    title: "Video Editing & Animation",
    description: "Cinematic quality video production and editing. We tell your brand's story through compelling visual narratives.",
    features: ["Commercial Video", "Motion Graphics", "Social Media Content", "Post-production"],
    href: "/services/video-editing"
  },
  {
    id: "ai-automation",
    icon: <Bot className="w-8 h-8 text-orange-500" />,
    title: "AI & Automation Solutions",
    description: "Leverage cutting-edge AI to streamline operations and create intelligent, personalized user experiences.",
    features: ["AI Integrations", "Workflow Automation", "Chatbots", "Data Analytics"],
    href: "/services/ai-automation"
  }
];

const processSteps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We dive deep into your business, understanding your goals, audience, and market to formulate a winning strategy."
  },
  {
    number: "02",
    title: "Design & Architecture",
    description: "Our team crafts wireframes, visual designs, and technical architecture plans that set the foundation for success."
  },
  {
    number: "03",
    title: "Development & Build",
    description: "We bring designs to life with clean, scalable code, keeping you informed at every sprint."
  },
  {
    number: "04",
    title: "QA & Launch",
    description: "Rigorous testing ensures everything works flawlessly before we push your project live to the world."
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-stone-50 overflow-hidden selection:bg-orange-200">
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 max-w-7xl mb-24 md:mb-32 relative">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-200/40 via-amber-100/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex flex-col items-center gap-4 mb-8">
              <span className="uppercase tracking-widest text-sm font-semibold text-orange-600 bg-orange-100/50 border border-orange-200/50 rounded-full px-5 py-2">Our Expertise</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-stone-950 mb-8 leading-[1.1]">
              Solutions designed to <br className="hidden md:block" />
              <span className="text-stone-400">accelerate your growth.</span>
            </h1>
            
            <p className="text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto">
              From pixel-perfect design to robust cloud architecture, we provide end-to-end digital services tailored to ambitious brands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-6 max-w-7xl mb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={service.href} className="block h-full group">
                <div className="h-full bg-white rounded-3xl p-8 border border-stone-200 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 relative overflow-hidden flex flex-col">
                  {/* Hover Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-16 h-16 rounded-2xl bg-stone-50 border border-stone-100 flex items-center justify-center mb-6 group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-sm">
                      {service.icon}
                    </div>
                    
                    <h3 className="font-display text-2xl font-bold text-stone-950 mb-4 group-hover:text-orange-600 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-stone-600 mb-8 leading-relaxed flex-grow">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-stone-500 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-orange-500 mr-3 shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-auto inline-flex items-center font-semibold text-stone-950 group-hover:text-orange-600 transition-colors">
                      Learn more <ArrowUpRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Service Highlight */}
      <section className="container mx-auto px-6 max-w-7xl mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-stone-950 rounded-[3rem] p-8 md:p-16 lg:p-20 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
            <div>
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-orange-400 mb-8 tracking-wide uppercase">
                Featured Specialty
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Premium eCommerce & Web Applications
              </h2>
              <p className="text-stone-400 text-lg leading-relaxed mb-8">
                We specialize in building complex, high-performance web applications that demand elite engineering and flawless design. Whether it's a bespoke headless eCommerce platform or a data-heavy SaaS dashboard, we deliver excellence.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start">
                  <div className="bg-orange-500/20 p-1 rounded-full mr-4 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <span className="block font-bold text-white mb-1">Blazing Fast Performance</span>
                    <span className="text-stone-400 text-sm">Optimized for sub-second load times and perfect Core Web Vitals.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-orange-500/20 p-1 rounded-full mr-4 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <span className="block font-bold text-white mb-1">Scalable Architecture</span>
                    <span className="text-stone-400 text-sm">Built on headless, modern stacks designed to grow with you.</span>
                  </div>
                </li>
              </ul>
              
              <Link href="/services/web-development" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-stone-950 shadow-xl hover:bg-stone-200 transition-all duration-300">
                Explore Web Engineering
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl skew-y-3 lg:-skew-y-3 group">
               <Image 
                  src="https://picsum.photos/seed/webapp/1200/1000"
                  alt="Web Application Interface"
                  fill
                  className="object-cover object-left-top group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white border-y border-stone-200 py-24 md:py-32 mb-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-950 mb-6">The QubiQode Advantage</h2>
            <p className="text-xl text-stone-600">Why top-tier brands trust us with their digital presence.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Bespoke Solutions", desc: "No templates, no shortcuts. Every line of code and every pixel is crafted specifically for your brand's unique needs." },
              { title: "Elite Talent", desc: "Our team consists of senior-level designers and engineers who have delivered products for global enterprise brands." },
              { title: "Results Driven", desc: "We don't just build pretty websites. We build platforms optimized for conversion, engagement, and ROI." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center px-4"
              >
                <div className="w-16 h-16 mx-auto bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-display text-2xl font-bold mb-6">
                  {i + 1}
                </div>
                <h3 className="font-bold text-2xl text-stone-950 mb-4">{item.title}</h3>
                <p className="text-stone-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container mx-auto px-6 max-w-7xl mb-32">
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-1">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-950 mb-6">Our Process</h2>
            <p className="text-xl text-stone-600 mb-8">
              A refined workflow designed for clarity, speed, and exceptional results.
            </p>
            <Link href="/contact" className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors uppercase tracking-widest text-sm">
              Start your project <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
            {processSteps.map((step, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: i * 0.1 }}
                 className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm relative overflow-hidden group hover:border-orange-200 transition-colors"
               >
                 <div className="text-6xl font-display font-bold text-stone-100 mb-6 group-hover:text-orange-50 transition-colors">
                   {step.number}
                 </div>
                 <h3 className="text-xl font-bold text-stone-950 mb-3 relative z-10">{step.title}</h3>
                 <p className="text-stone-600 relative z-10">{step.description}</p>
               </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 max-w-7xl">
         <motion.div 
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="bg-stone-100 rounded-[3rem] p-12 md:p-24 text-center border border-stone-200"
         >
           <div className="max-w-3xl mx-auto">
             <h2 className="font-display text-4xl md:text-6xl font-bold text-stone-950 mb-6">Ready to elevate your brand?</h2>
             <p className="text-xl text-stone-600 mb-10">
               Let's discuss how our services can solve your most complex digital challenges.
             </p>
             <Link
               href="/contact"
               className="inline-flex items-center justify-center rounded-full bg-stone-950 px-8 py-4 text-sm font-semibold text-white shadow-xl hover:bg-stone-800 hover:-translate-y-0.5 transition-all duration-300"
             >
               Book a Consultation
               <ArrowRight className="ml-2 h-4 w-4" />
             </Link>
           </div>
         </motion.div>
      </section>
      
    </main>
  );
}
