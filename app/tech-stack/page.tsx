"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useState, useMemo } from "react";
import {
  Layout, Server, Cloud, BrainCircuit, Palette, PenTool, Database,
  Smartphone, Search, ShieldCheck, ShoppingCart, Users, LineChart,
  Box, Webhook, FileJson, Rocket, ArrowRight, CheckCircle2
} from "lucide-react";
import Link from "next/link";
import { TechMarquee } from "@/components/sections/tech-marquee";

const categories = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: Layout,
    items: [
      { name: "React", slug: "react", desc: "UI Library Component" },
      { name: "Next.js", slug: "nextdotjs", desc: "React Framework" },
      { name: "Tailwind CSS", slug: "tailwindcss", desc: "Utility-first CSS" },
      { name: "TypeScript", slug: "typescript", desc: "Typed JavaScript" },
      { name: "Framer Motion", slug: "framer", desc: "Animation Library" }
    ]
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: Server,
    items: [
      { name: "Node.js", slug: "nodedotjs", desc: "JavaScript Runtime" },
      { name: "Python", slug: "python", desc: "Programming Language" },
      { name: "Go", slug: "go", desc: "High-performance Systems" },
      { name: "NestJS", slug: "nestjs", desc: "Node.js Framework" },
      { name: "GraphQL", slug: "graphql", desc: "API Query Language" }
    ]
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    icon: Cloud,
    items: [
      { name: "AWS", slug: "amazonaws", desc: "Cloud Provider" },
      { name: "Google Cloud", slug: "googlecloud", desc: "Cloud Infrastructure" },
      { name: "Docker", slug: "docker", desc: "Containerization" },
      { name: "Kubernetes", slug: "kubernetes", desc: "Orchestration" },
      { name: "Vercel", slug: "vercel", desc: "Edge Deployment" }
    ]
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    icon: BrainCircuit,
    items: [
      { name: "OpenAI", slug: "openai", desc: "LLM Provider" },
      { name: "Anthropic", slug: "anthropic", desc: "Claude Models" },
      { name: "Hugging Face", slug: "huggingface", desc: "AI Community Hub" },
      { name: "TensorFlow", slug: "tensorflow", desc: "ML Framework" },
      { name: "PyTorch", slug: "pytorch", desc: "Deep Learning" }
    ]
  },
  {
    id: "design",
    title: "Graphic Design & Creative",
    icon: Palette,
    items: [
      { name: "Photoshop", slug: "adobephotoshop", desc: "Image Editing" },
      { name: "Illustrator", slug: "adobeillustrator", desc: "Vector Graphics" },
      { name: "After Effects", slug: "adobeaftereffects", desc: "Motion Graphics" },
      { name: "Blender", slug: "blender", desc: "3D Creation Suite" },
      { name: "Premiere Pro", slug: "adobepremierepro", desc: "Video Editing" }
    ]
  },
  {
    id: "uiux",
    title: "UI/UX & Product Design",
    icon: PenTool,
    items: [
      { name: "Figma", slug: "figma", desc: "Collaborative Design" },
      { name: "Framer", slug: "framer", desc: "Interactive Prototyping" },
      { name: "Sketch", slug: "sketch", desc: "Vector UI Design" },
      { name: "InVision", slug: "invision", desc: "Design Workflow" },
      { name: "Zeplin", slug: "zeplin", desc: "Developer Handoff" }
    ]
  },
  {
    id: "database",
    title: "Database & Storage",
    icon: Database,
    items: [
      { name: "PostgreSQL", slug: "postgresql", desc: "Relational DB" },
      { name: "MongoDB", slug: "mongodb", desc: "NoSQL DB" },
      { name: "Redis", slug: "redis", desc: "In-memory Cache" },
      { name: "Supabase", slug: "supabase", desc: "Open Source Firebase" },
      { name: "Prisma", slug: "prisma", desc: "Next-gen ORM" }
    ]
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    icon: Smartphone,
    items: [
      { name: "React Native", slug: "react", desc: "Cross-platform Apps" },
      { name: "Flutter", slug: "flutter", desc: "Native Interfaces" },
      { name: "Swift", slug: "swift", desc: "iOS Development" },
      { name: "Kotlin", slug: "kotlin", desc: "Android Development" },
      { name: "Expo", slug: "expo", desc: "React Native Framework" }
    ]
  },
  {
    id: "seo",
    title: "SEO & Marketing",
    icon: Search,
    items: [
      { name: "Google Analytics", slug: "googleanalytics", desc: "Web Analytics" },
      { name: "Ahrefs", slug: "ahrefs", desc: "SEO Toolset" },
      { name: "Semrush", slug: "semrush", desc: "Visibility Management" },
      { name: "Mailchimp", slug: "mailchimp", desc: "Email Marketing" },
      { name: "HubSpot", slug: "hubspot", desc: "Inbound Marketing" }
    ]
  },
  {
    id: "security",
    title: "Cybersecurity & Auth",
    icon: ShieldCheck,
    items: [
      { name: "Auth0", slug: "auth0", desc: "Identity & Access" },
      { name: "Clerk", slug: "clerk", desc: "User Authentication" },
      { name: "Cloudflare", slug: "cloudflare", desc: "Web Security & CDN" },
      { name: "Okta", slug: "okta", desc: "Identity Provider" },
      { name: "JWT", slug: "jsonwebtokens", desc: "Secure Tokens" }
    ]
  },
  {
    id: "ecommerce",
    title: "E-Commerce & Payments",
    icon: ShoppingCart,
    items: [
      { name: "Stripe", slug: "stripe", desc: "Payment Infrastructure" },
      { name: "Shopify", slug: "shopify", desc: "Commerce Platform" },
      { name: "WooCommerce", slug: "woocommerce", desc: "WordPress eCommerce" },
      { name: "PayPal", slug: "paypal", desc: "Digital Payments" },
      { name: "Square", slug: "square", desc: "Point of Sale" }
    ]
  },
  {
    id: "collaboration",
    title: "Collaboration & Productivity",
    icon: Users,
    items: [
      { name: "Slack", slug: "slack", desc: "Team Communication" },
      { name: "Notion", slug: "notion", desc: "Workspace Platform" },
      { name: "Linear", slug: "linear", desc: "Issue Tracking" },
      { name: "GitHub", slug: "github", desc: "Code Collaboration" },
      { name: "Jira", slug: "jira", desc: "Agile Project Management" }
    ]
  },
  {
    id: "data",
    title: "Data Science & Analytics",
    icon: LineChart,
    items: [
      { name: "Pandas", slug: "pandas", desc: "Data Analysis" },
      { name: "Jupyter", slug: "jupyter", desc: "Interactive Computing" },
      { name: "Snowflake", slug: "snowflake", desc: "Data Cloud" },
      { name: "Apache Spark", slug: "apachespark", desc: "Big Data Processing" },
      { name: "Tableau", slug: "tableau", desc: "Visual Analytics" }
    ]
  },
  {
    id: "3d",
    title: "3D, Motion & Interactive",
    icon: Box,
    items: [
      { name: "Three.js", slug: "threedotjs", desc: "3D JavaScript Library" },
      { name: "WebGL", slug: "webgl", desc: "2D/3D Web Graphics" },
      { name: "GSAP", slug: "greensock", desc: "Professional Animation" },
      { name: "Unity", slug: "unity", desc: "Real-time 3D Platform" },
      { name: "Unreal Engine", slug: "unrealengine", desc: "Advanced 3D Engine" }
    ]
  },
  {
    id: "api",
    title: "API & Integrations",
    icon: Webhook,
    items: [
      { name: "REST API", slug: "json", desc: "Architectural Style" }, // Using JSON icon as generic placeholder
      { name: "Postman", slug: "postman", desc: "API Development" },
      { name: "Swagger", slug: "swagger", desc: "API Design Tools" },
      { name: "Apollo", slug: "apollographql", desc: "GraphQL Platform" },
      { name: "Zapier", slug: "zapier", desc: "Workflow Automation" }
    ]
  },
  {
    id: "cms",
    title: "CMS & Website Platforms",
    icon: FileJson,
    items: [
      { name: "WordPress", slug: "wordpress", desc: "Open Source CMS" },
      { name: "Contentful", slug: "contentful", desc: "Headless CMS" },
      { name: "Sanity", slug: "sanity", desc: "Structured Content" },
      { name: "Strapi", slug: "strapi", desc: "Node.js Headless CMS" },
      { name: "Webflow", slug: "webflow", desc: "Visual Web Development" }
    ]
  },
  {
    id: "startup",
    title: "Startup & SaaS Stack",
    icon: Rocket,
    items: [
      { name: "PostHog", slug: "posthog", desc: "Product OS" },
      { name: "Resend", slug: "resend", desc: "Developer Email" },
      { name: "Sentry", slug: "sentry", desc: "Error Tracking" },
      { name: "Datadog", slug: "datadog", desc: "Cloud Monitoring" },
      { name: "Raycast", slug: "raycast", desc: "Productivity Tools" }
    ]
  }
];

export default function TechStackPage() {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = useMemo(() => {
    if (!searchQuery) return categories;
    return categories.map(cat => ({
      ...cat,
      items: cat.items.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.desc.toLowerCase().includes(searchQuery.toLowerCase())
      )
    })).filter(cat => cat.items.length > 0);
  }, [searchQuery]);

  const activeCategoryData = useMemo(() => {
    return filteredCategories.find(c => c.id === activeCategory) || filteredCategories[0];
  }, [activeCategory, filteredCategories]);

  return (
    <main className="min-h-screen bg-stone-950 text-stone-50 selection:bg-primary-500/30 font-sans">
      
      {/* Premium Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-stone-800/60">
        {/* Dynamic Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] left-[20%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-primary-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
          <div className="absolute bottom-0 right-[10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-indigo-600/10 rounded-full blur-[100px] mix-blend-screen" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          
          {/* Animated Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-2 text-sm font-medium text-primary-400 mb-8 backdrop-blur-md shadow-[0_0_20px_-5px_rgba(30,144,255,0.4)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              Our Engineering Arsenal
            </div>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
              Built With <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-200 to-primary-500">
                Premium Technologies.
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-stone-400 leading-relaxed mb-12">
              We leverage the most advanced, scalable, and powerful technologies in the industry to build exceptional digital experiences, intelligent AI solutions, and robust modern software.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 relative z-20">
        <div className="container mx-auto px-6 max-w-[1400px]">
          
          {/* Interactive Filtering/Tabs area */}
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Sidebar Navigation */}
            <div className="lg:w-80 shrink-0">
               <div className="sticky top-32 space-y-6">
                 {/* Search Box */}
                 <div className="relative group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-500 group-focus-within:text-primary-500 transition-colors" />
                    <input 
                      type="text"
                      placeholder="Search technologies..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-800 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all placeholder:text-stone-600"
                    />
                 </div>

                 {/* Category Tabs */}
                 <div className="bg-stone-900/50 border border-stone-800 rounded-2xl p-2 hidden lg:flex flex-col gap-1">
                    {filteredCategories.map((category) => {
                      const isActive = activeCategory === category.id;
                      return (
                        <button
                          key={category.id}
                          onClick={() => setActiveCategory(category.id)}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-left ${isActive ? 'bg-primary-500/10 text-primary-400 border border-primary-500/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]' : 'text-stone-400 hover:text-white hover:bg-stone-800'}`}
                        >
                          <category.icon className={`w-5 h-5 ${isActive ? 'text-primary-400' : 'opacity-70'}`} />
                          {category.title}
                        </button>
                      );
                    })}
                 </div>

                 {/* Mobile Category Dropdown */}
                 <div className="lg:hidden flex overflow-x-auto pb-4 gap-2 snap-x hide-scrollbar">
                    {filteredCategories.map((category) => {
                      const isActive = activeCategory === category.id;
                      return (
                         <button
                          key={category.id}
                          onClick={() => setActiveCategory(category.id)}
                          className={`flex items-center gap-2 px-5 py-3 rounded-full transition-all font-medium whitespace-nowrap snap-start border ${isActive ? 'bg-primary-500 text-white border-primary-500 shadow-[0_0_20px_-5px_rgba(30,144,255,0.4)]' : 'bg-stone-900 text-stone-400 border-stone-800 hover:text-white'}`}
                        >
                          <category.icon className="w-4 h-4" />
                          {category.title}
                        </button>
                      )
                    })}
                 </div>
               </div>
            </div>

            {/* Grid Area */}
            <div className="flex-1 min-w-0">
               <AnimatePresence mode="wait">
                 {activeCategoryData && (
                    <motion.div
                      key={activeCategoryData.id}
                      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -20, filter: "blur(10px)", transition: { duration: 0.2 } }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <div className="mb-10 flex items-end justify-between border-b border-stone-800 pb-6">
                        <div>
                          <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-2 flex items-center gap-3">
                            <activeCategoryData.icon className="w-8 h-8 text-primary-500" />
                            {activeCategoryData.title}
                          </h2>
                          <p className="text-stone-400 text-lg">
                            {activeCategoryData.items.length} premium tech {activeCategoryData.items.length === 1 ? 'stack' : 'stacks'} selected
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                         {activeCategoryData.items.map((tech, i) => (
                           <motion.div
                             key={tech.slug}
                             initial={{ opacity: 0, scale: 0.9 }}
                             animate={{ opacity: 1, scale: 1 }}
                             transition={{ duration: 0.4, delay: i * 0.05 }}
                             className="group relative"
                           >
                             <div className="absolute -inset-[1px] bg-gradient-to-br from-primary-500/40 to-indigo-500/40 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
                             
                             <div className="relative h-full bg-stone-900 border border-stone-800 rounded-2xl p-6 transition-all duration-300 hover:bg-stone-800/80 group-hover:border-primary-500/50 group-hover:-translate-y-1">
                               <div className="flex items-start gap-4">
                                  <div className="w-14 h-14 bg-stone-950 border border-stone-800 rounded-xl flex items-center justify-center p-3 relative overflow-hidden group-hover:border-primary-500/30 transition-colors">
                                     {/* SimpleIcons image */}
                                     {tech.slug ? (
                                        <Image 
                                          src={`https://cdn.simpleicons.org/${tech.slug}/white`} 
                                          alt={tech.name} 
                                          width={32} 
                                          height={32} 
                                          className="w-full h-full object-contain relative z-10 transition-transform group-hover:scale-110 duration-500" 
                                          unoptimized
                                        />
                                     ) : (
                                        <div className="w-8 h-8 bg-stone-800 rounded-md" />
                                     )}
                                     
                                     {/* Hover background glow on icon */}
                                     <div className="absolute inset-0 bg-primary-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                  </div>
                                  <div>
                                    <h3 className="font-bold text-white text-lg group-hover:text-primary-400 transition-colors tracking-wide">
                                      {tech.name}
                                    </h3>
                                    <p className="text-stone-400 text-sm mt-1 leading-relaxed">
                                      {tech.desc}
                                    </p>
                                  </div>
                               </div>
                             </div>
                           </motion.div>
                         ))}
                      </div>

                    </motion.div>
                 )}
                 {!activeCategoryData && (
                    <div className="py-20 text-center text-stone-500">
                      No technologies found matching your search.
                    </div>
                 )}
               </AnimatePresence>
            </div>
          </div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-stone-800 bg-stone-900/30 relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-900/10 via-transparent to-transparent" />
         <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-stone-800/50">
               {[
                 { label: "Technologies Mastered", value: "85+" },
                 { label: "Cloud Deployments", value: "500+" },
                 { label: "AI Integrations", value: "120+" },
                 { label: "Lines of Code Automated", value: "2M+" }
               ].map((stat, i) => (
                  <motion.div 
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`text-center ${i === 0 ? 'pl-0' : 'pl-8'}`}
                  >
                    <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2 tracking-tight flex items-center justify-center gap-1">
                      {stat.value.replace('+', '')}
                      <span className="text-primary-500">+</span>
                    </div>
                    <div className="text-sm font-medium text-stone-400 uppercase tracking-wider">{stat.label}</div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Developer Philosophy Section */}
      <section className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                  Performance-first. <br/>
                  Scalable by design.
                </h2>
                <p className="text-stone-400 text-lg leading-relaxed mb-8">
                  We don&apos;t just string together random libraries. Every piece of our technology stack is carefully selected to ensure lightning-fast performance, rock-solid security, and effortless scalability as your business grows.
                </p>
                <ul className="space-y-4">
                  {[
                    "Zero legacy systems, 100% modern architecture.",
                    "AI-integrated workflows for maximum efficiency.",
                    "Type-safe deployments preventing runtime errors.",
                    "Global edge distribution via premium cloud partners."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-stone-300">
                      <CheckCircle2 className="w-6 h-6 text-primary-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
             </div>
             
             {/* Visual element */}
             <div className="relative">
                <div className="absolute inset-0 bg-primary-500/20 blur-[100px] rounded-full" />
                <div className="relative rounded-3xl border border-stone-800 bg-stone-900/50 backdrop-blur-xl p-8 shadow-2xl overflow-hidden group">
                   <div className="flex gap-2 mb-6 border-b border-stone-800 pb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500/50 border border-red-500/20" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50 border border-yellow-500/20" />
                      <div className="w-3 h-3 rounded-full bg-green-500/50 border border-green-500/20" />
                   </div>
                   <pre className="text-sm font-mono text-stone-400 overflow-x-auto">
                     <code>
                       <span className="text-pink-400">const</span> stack = <span className="text-yellow-300">{'{'}</span>{'\n'}
                       {'  '}frontend: <span className="text-green-400">'Next.js'</span>,{'\n'}
                       {'  '}styling: <span className="text-green-400">'Tailwind CSS'</span>,{'\n'}
                       {'  '}backend: <span className="text-green-400">'Node.js'</span>,{'\n'}
                       {'  '}database: <span className="text-green-400">'PostgreSQL'</span>,{'\n'}
                       {'  '}intelligence: <span className="text-green-400">'OpenAI'</span>{'\n'}
                       <span className="text-yellow-300">{'}'}</span>;{'\n\n'}
                       <span className="text-pink-400">export function</span> <span className="text-blue-400">initiateProject</span>() {'{'}{'\n'}
                       {'  '}deploy(stack, <span className="text-green-400">'Edge'</span>);{'\n'}
                       <span className="text-stone-500">{'  // Delivering excellence at scale'}</span>{'\n'}
                       {'}'}
                     </code>
                   </pre>
                </div>
             </div>
          </div>
        </div>
      </section>

      <TechMarquee />

      {/* CTA */}
      <section className="py-24 border-t border-stone-800">
         <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to harness modern tech?
            </h2>
            <p className="text-stone-400 text-lg mb-10 max-w-xl mx-auto">
              Let&apos;s build your next big idea with a premium stack designed for performance, scale, and modern aesthetic.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/book"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-primary-600 px-8 py-4 font-bold text-white shadow-[0_0_40px_-10px_rgba(30,144,255,0.4)] hover:bg-primary-500 hover:shadow-[0_0_60px_-15px_rgba(30,144,255,0.5)] hover:-translate-y-0.5 transition-all duration-300"
              >
                Start a Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
         </div>
      </section>

    </main>
  );
}
