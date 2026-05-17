"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Layout, Server, Database, Cloud, PenTool, GitBranch, Terminal, Shield, Zap, CheckCircle2 } from "lucide-react";

const techCategories = [
  {
    title: "Frontend Engineering",
    description: "Building responsive, accessible, and highly interactive user interfaces.",
    icon: <Layout className="w-6 h-6" />,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    glowColor: "group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.2)]",
    technologies: [
      { name: "Next.js", desc: "React Framework" },
      { name: "React", desc: "UI Library" },
      { name: "TypeScript", desc: "Type-safe JavaScript" },
      { name: "Tailwind CSS", desc: "Utility-first Styling" },
      { name: "Framer Motion", desc: "Animation Library" }
    ]
  },
  {
    title: "Backend & Data",
    description: "Robust, scalable server architectures and secure databases.",
    icon: <Server className="w-6 h-6" />,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    glowColor: "group-hover:shadow-[0_0_30px_-5px_rgba(34,197,94,0.2)]",
    technologies: [
      { name: "Node.js", desc: "JavaScript Runtime" },
      { name: "Python", desc: "AI & Scripting" },
      { name: "PostgreSQL", desc: "Relational Database" },
      { name: "Supabase", desc: "Backend as a Service" },
      { name: "Redis", desc: "In-memory Caching" }
    ]
  },
  {
    title: "Cloud & DevOps",
    description: "Automated deployments and resilient infrastructure.",
    icon: <Cloud className="w-6 h-6" />,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    glowColor: "group-hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.2)]",
    technologies: [
      { name: "AWS", desc: "Cloud Infrastructure" },
      { name: "Vercel", desc: "Edge Deployment" },
      { name: "Docker", desc: "Containerization" },
      { name: "GitHub Actions", desc: "CI/CD Pipelines" },
      { name: "Cloudflare", desc: "Security & CDN" }
    ]
  },
  {
    title: "Design & Prototyping",
    description: "Creating beautiful, user-centered visual experiences.",
    icon: <PenTool className="w-6 h-6" />,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    glowColor: "group-hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.2)]",
    technologies: [
      { name: "Figma", desc: "UI/UX Design" },
      { name: "Spline", desc: "3D Rendering" },
      { name: "Adobe CC", desc: "Assets & Branding" },
      { name: "Webflow", desc: "Marketing Sites" },
      { name: "Storybook", desc: "Component Library" }
    ]
  }
];

const principles = [
  {
    title: "Performance First",
    description: "We choose tools that compile to fast, lightweight code, ensuring optimal Core Web Vitals and lightning-fast load times.",
    icon: <Zap className="w-5 h-5 text-yellow-500" />
  },
  {
    title: "Type Safety",
    description: "Using TypeScript across the stack prevents entire classes of bugs before they ever reach production environments.",
    icon: <Shield className="w-5 h-5 text-green-500" />
  },
  {
    title: "Maintainable Code",
    description: "We enforce strict linting, modern ES features, and predictable architectures to save you technical debt down the road.",
    icon: <Terminal className="w-5 h-5 text-blue-500" />
  },
  {
    title: "Scalability",
    description: "From serverless functions to auto-scaling databases, our stack is designed to handle your growth seamlessly.",
    icon: <GitBranch className="w-5 h-5 text-purple-500" />
  }
];

export default function TechStackPage() {
  return (
    <main className="min-h-screen bg-stone-950 text-stone-50 selection:bg-orange-500/30">
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center rounded-full border border-stone-800 bg-stone-900/60 backdrop-blur-md px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-stone-300 mb-8"
            >
              Our Engineering Stack
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8"
            >
              Built with <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-indigo-400">
                modern technology.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-stone-400 leading-relaxed max-w-2xl mx-auto"
            >
              We don&apos;t use legacy systems. We build robust, scalable, and secure digital products using the same modern frameworks trusted by top-tier tech companies.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Tech Grid Section */}
      <section className="py-20 bg-stone-900 border-t border-stone-800 relative z-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {techCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group bg-stone-950 border border-stone-800 rounded-3xl p-8 sm:p-10 transition-all duration-500 hover:-translate-y-1 ${category.glowColor}`}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${category.bgColor} ${category.color} border ${category.borderColor}`}>
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-white">
                      {category.title}
                    </h2>
                    <p className="text-stone-400 text-sm mt-1">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div 
                      key={tech.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + (techIndex * 0.05) }}
                      className="flex justify-between items-center py-3 border-b border-stone-800/50 last:border-0"
                    >
                      <span className="font-semibold text-stone-200">{tech.name}</span>
                      <span className="text-sm text-stone-500">{tech.desc}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters / Philosophy */}
      <section className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-16 md:mb-20">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Why our stack matters
            </h2>
            <p className="text-stone-400 text-lg max-w-2xl leading-relaxed">
              Technology choices aren&apos;t just details for developers. They directly impact your bottom line, user acquisition, and security. Here is why we insist on quality.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-stone-900 border border-stone-800 rounded-3xl p-8 hover:bg-stone-800/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-stone-950 flex items-center justify-center border border-stone-800 mb-6">
                  {principle.icon}
                </div>
                <h3 className="font-bold text-xl text-white mb-3">{principle.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-stone-800">
         <div className="container mx-auto px-6 max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-stone-900 to-stone-950 border border-stone-800 rounded-[3rem] p-12 md:p-20 shadow-2xl relative overflow-hidden"
            >
               {/* Abstract glow inside CTA */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[400px] max-h-[400px] bg-orange-500/10 blur-[80px] rounded-full pointer-events-none" />

               <div className="relative z-10">
                 <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                   Ready to build?
                 </h2>
                 <p className="text-stone-400 text-lg mb-10 max-w-xl mx-auto">
                   Bring us your toughest technical challenges. We have the tools and the talent to deliver.
                 </p>
                 <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                   <Link
                     href="/book"
                     className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-orange-600 px-8 py-4 font-bold text-white shadow-[0_0_40px_-10px_rgba(234,88,12,0.4)] hover:bg-orange-500 hover:shadow-[0_0_60px_-15px_rgba(234,88,12,0.5)] hover:-translate-y-0.5 transition-all duration-300"
                   >
                     Discuss Your Project
                     <ArrowRight className="w-5 h-5 ml-2" />
                   </Link>
                   <Link
                     href="/services"
                     className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-stone-800 border border-stone-700 px-8 py-4 font-bold text-white shadow-sm hover:bg-stone-700 hover:-translate-y-0.5 transition-all duration-300"
                   >
                     View Services
                   </Link>
                 </div>
               </div>
            </motion.div>
         </div>
      </section>

    </main>
  );
}
