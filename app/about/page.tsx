"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code2, MonitorPlay, Sparkles, Target, Zap, Diamond, Users, Lightbulb, Compass } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "10+" },
  { label: "Projects Delivered", value: "250+" },
  { label: "Global Clients", value: "50+" },
  { label: "Design Awards", value: "15" },
];

const values = [
  {
    icon: <Diamond className="w-6 h-6 text-primary-500" />,
    title: "Premium Quality",
    description: "We don't settle for 'good enough'. Every pixel, every line of code is meticulously crafted to perfection."
  },
  {
    icon: <Users className="w-6 h-6 text-primary-500" />,
    title: "Client Partnership",
    description: "We work with you, not just for you. Your goals become our goals, ensuring total alignment."
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-primary-500" />,
    title: "Continuous Innovation",
    description: "The digital landscape evolves rapidly. We stay ahead of the curve to leverage the latest tech."
  },
  {
    icon: <Compass className="w-6 h-6 text-primary-500" />,
    title: "Strategic Focus",
    description: "Everything we build is rooted in strategy. We design for conversion, engagement, and growth."
  }
];

const team = [
  {
    name: "Alex Sterling",
    role: "Founder & Creative Director",
    image: "https://picsum.photos/seed/alexs/400/500",
    bio: "Visionary designer with 15 years crafting digital experiences for top global brands."
  },
  {
    name: "Samantha Wright",
    role: "Head of Engineering",
    image: "https://picsum.photos/seed/samanthaw/400/500",
    bio: "Full-stack architect obsessed with performance, scale, and clean code architecture."
  },
  {
    name: "Marcus Chen",
    role: "Lead Product Designer",
    image: "https://picsum.photos/seed/marcusc/400/500",
    bio: "Design systems expert blending aesthetic beauty with functional usability."
  },
  {
    name: "Elena Rodriguez",
    role: "Growth Strategy Lead",
    image: "https://picsum.photos/seed/elenar/400/500",
    bio: "Data-driven marketing mind focused on optimizing conversions and user acquisition."
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-stone-50 overflow-hidden selection:bg-primary-200">
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 max-w-7xl mb-32 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-200/40 via-sky-100/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex flex-col items-center gap-4 mb-8">
              <span className="uppercase tracking-widest text-sm font-semibold text-primary-600 bg-primary-100/50 border border-primary-200/50 rounded-full px-5 py-2">Our Story</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-stone-950 mb-8 leading-[1.1]">
              We build the digital <br className="hidden md:block" />
              <span className="text-stone-400">foundations of tomorrow.</span>
            </h1>
            
            <p className="text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto">
              QubiQode is a premium digital product agency. We blend strategic design with elite engineering to create web experiences that elevate brands and dominate markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Parallax/Showcase */}
      <section className="container mx-auto px-4 md:px-6 max-w-[90rem] mb-32">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative h-[60vh] md:h-[80vh] w-full rounded-[2rem] overflow-hidden"
        >
          <Image 
            src="https://picsum.photos/seed/aboutagency/1920/1080"
            alt="QubiQode Agency Studio"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-stone-900/20 mix-blend-multiply" />
        </motion.div>
      </section>

      {/* Philosophy & Stats */}
      <section className="container mx-auto px-6 max-w-7xl mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-stone-950 mb-6">
              Driven by <span className="text-primary-600">purpose</span>,<br />
              obsessed with <span className="text-primary-600">craft</span>.
            </h2>
            <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
              <p>
                Founded on the belief that digital presence is the most critical asset for modern businesses, QubiQode set out to redefine industry standards. We saw too many companies settling for generic templates and bloated code.
              </p>
              <p>
                Our philosophy is simple: Every project must be a masterpiece. We bring together the world's best designers and engineers to build bespoke solutions that perform as beautifully as they look.
              </p>
            </div>
            
            <div className="mt-10 inline-flex items-center gap-4 text-stone-900 font-semibold uppercase tracking-wider text-sm border-b-2 border-stone-900 pb-2">
              <Sparkles className="w-5 h-5 text-primary-500" />
              Award Winning Agency
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4 md:gap-8"
          >
            {stats.map((stat, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-center">
                <div className="font-display text-4xl md:text-5xl font-bold text-stone-950 mb-2">{stat.value}</div>
                <div className="text-sm font-semibold text-stone-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Journey Timeline */}
      <section className="container mx-auto px-6 max-w-7xl mb-32">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-stone-950">Our Journey</h2>
          <p className="text-xl text-stone-600">A timeline of our relentless pursuit of digital excellence.</p>
        </div>

        <div className="relative border-l border-stone-200 mx-4 md:mx-auto md:border-l-0">
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-stone-200 -translate-x-1/2" />
          
          {[
            { year: "2018", title: "The Inception", desc: "Started as a boutique design studio focused strictly on premium brand identity." },
            { year: "2020", title: "Engineering Added", desc: "Expanded into full-stack development to ensure our designs were built to our exacting standards." },
            { year: "2022", title: "Global Expansion", desc: "Opened our second office and started partnering with international enterprise clients." },
            { year: "2024", title: "AI & Innovation", desc: "Integrated advanced AI strategies into our workflow, supercharging our digital deliverables." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative pl-8 md:pl-0 mb-12 last:mb-0 md:w-1/2 ${
                i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:ml-auto"
              }`}
            >
              {/* Timeline dot */}
              <div className={`absolute top-1 left-[-10.5px] md:top-2 md:left-auto w-3 h-3 rounded-full bg-primary-500 border-4 box-content border-stone-50 z-10 ${
                i % 2 === 0 ? "md:-right-[10.5px]" : "md:-left-[10.5px]"
              }`} />
              
              <div className="font-display text-2xl font-bold text-stone-300 mb-2">{item.year}</div>
              <h3 className="font-bold text-xl text-stone-950 mb-3">{item.title}</h3>
              <p className="text-stone-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-stone-950 text-white py-32 mb-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Our Core Principles</h2>
            <p className="text-xl text-stone-400">The unshakeable foundations that guide our every decision, line of code, and design choice.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 font-display">{value.title}</h3>
                <p className="text-stone-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="container mx-auto px-6 max-w-7xl mb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-950 mb-6">Meet the minds behind the magic</h2>
            <p className="text-xl text-stone-600">A diverse collective of thinkers, builders, and dreamers.</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] mb-6 rounded-2xl overflow-hidden bg-stone-200">
                <Image 
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-colors duration-700" />
              </div>
              <h3 className="font-display text-2xl font-bold text-stone-950 mb-1">{member.name}</h3>
              <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">{member.role}</p>
              <p className="text-stone-600 text-sm leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Approach */}
      <section className="container mx-auto px-6 max-w-7xl mb-32">
        <div className="bg-white rounded-[3rem] p-10 md:p-20 border border-stone-200 shadow-[0_20px_50px_rgba(0,0,0,0.05)] text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-primary-100/50 rounded-b-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-stone-950 mb-6">Our Engineering Approach</h2>
            <p className="text-xl text-stone-600 mb-16">
              We build on modern, scalable stacks. No technical debt, no bloated systems. Just clean, performant, and maintainable code.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Logos represent tech stack - using placeholders/icons here */}
               <div className="flex flex-col items-center gap-3">
                 <div className="w-16 h-16 rounded-2xl bg-stone-100 flex items-center justify-center text-stone-950 border border-stone-200 shadow-sm">
                   <Code2 className="w-8 h-8" />
                 </div>
                 <span className="font-bold font-mono text-sm">Next.js / React</span>
               </div>
               <div className="flex flex-col items-center gap-3">
                 <div className="w-16 h-16 rounded-2xl bg-stone-100 flex items-center justify-center text-stone-950 border border-stone-200 shadow-sm">
                   <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M12 12v9"></path><path d="m8 17 4 4 4-4"></path></svg>
                 </div>
                 <span className="font-bold font-mono text-sm">Tailwind CSS</span>
               </div>
               <div className="flex flex-col items-center gap-3">
                 <div className="w-16 h-16 rounded-2xl bg-stone-100 flex items-center justify-center text-stone-950 border border-stone-200 shadow-sm">
                   <Target className="w-8 h-8" />
                 </div>
                 <span className="font-bold font-mono text-sm">Framer Motion</span>
               </div>
               <div className="flex flex-col items-center gap-3">
                 <div className="w-16 h-16 rounded-2xl bg-stone-100 flex items-center justify-center text-stone-950 border border-stone-200 shadow-sm">
                   <Zap className="w-8 h-8" />
                 </div>
                 <span className="font-bold font-mono text-sm">Vercel / Edge</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA replacement - just integrated here to make it complete */}
      <section className="container mx-auto px-6 max-w-7xl">
         <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="relative rounded-[3rem] overflow-hidden bg-stone-950 text-white p-12 md:p-24 text-center"
         >
           <div className="absolute inset-0 z-0">
              <Image 
                src="https://picsum.photos/seed/ctabackground/1920/1080"
                alt="Background"
                fill
                className="object-cover opacity-20 mix-blend-luminosity"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-950" />
           </div>

           <div className="relative z-10 max-w-3xl mx-auto">
             <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">Let's build the future together.</h2>
             <p className="text-xl text-stone-400 mb-10">
               Join ambitious brands building world-class platforms.
             </p>
             <Link
               href="/contact"
               className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-stone-950 shadow-xl hover:bg-stone-200 transition-all duration-300"
             >
               Start a Project
               <ArrowRight className="ml-2 h-4 w-4" />
             </Link>
           </div>
         </motion.div>
      </section>

    </main>
  );
}
