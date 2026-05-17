"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Zap, Target, Flame, Compass, Laptop, Heart, BookOpen, Coffee, MapPin, Users } from "lucide-react";

const values = [
  {
    title: "Craftsmanship First",
    description: "We don't settle for 'good enough'. We take pride in writing elegant code, designing thoughtful interfaces, and delivering premium outcomes.",
    icon: <Flame className="w-6 h-6 text-primary-500" />
  },
  {
    title: "Extreme Ownership",
    description: "Autonomy is our default. We hire smart people and trust them to lead projects, make critical decisions, and own the results.",
    icon: <Target className="w-6 h-6 text-primary-500" />
  },
  {
    title: "Radical Candor",
    description: "Feedback is a gift. We champion honest, direct, and kind communication across all levels of the organization.",
    icon: <Zap className="w-6 h-6 text-primary-500" />
  },
  {
    title: "Always Exploring",
    description: "The digital landscape shifts daily. We allocate time and significant budget for continuous learning and R&D.",
    icon: <Compass className="w-6 h-6 text-primary-500" />
  }
];

const benefits = [
  {
    title: "Remote First",
    description: "Work from anywhere in the world. We are an async-first company that values outcomes over hours logged.",
    icon: <MapPin className="w-6 h-6 text-stone-500" />
  },
  {
    title: "Premium Gear",
    description: "Top-of-the-line MacBook Pro, an ultra-wide monitor, and a generous home office setup stipend.",
    icon: <Laptop className="w-6 h-6 text-stone-500" />
  },
  {
    title: "Health & Wellness",
    description: "Comprehensive medical, dental, and vision coverage, plus a monthly mental health and fitness allowance.",
    icon: <Heart className="w-6 h-6 text-stone-500" />
  },
  {
    title: "Growth Budget",
    description: "$2,500 annual stipend for courses, books, conferences, and continual professional development.",
    icon: <BookOpen className="w-6 h-6 text-stone-500" />
  },
  {
    title: "Annual Retreats",
    description: "Once a year, we fly the entire team to a beautiful destination for a week of strategy, connection, and fun.",
    icon: <Users className="w-6 h-6 text-stone-500" />
  },
  {
    title: "Flexible Time Off",
    description: "We encourage the team to disconnect. Take the time you need to recharge with our unlimited PTO policy.",
    icon: <Coffee className="w-6 h-6 text-stone-500" />
  }
];

const jobs = [
  {
    id: 1,
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Remote (US/Canada)",
    type: "Full-time",
  },
  {
    id: 2,
    title: "Lead Product Designer",
    department: "Design",
    location: "Remote (Global)",
    type: "Full-time",
  },
  {
    id: 3,
    title: "Digital Growth Strategist",
    department: "Marketing",
    location: "San Francisco / Hybrid",
    type: "Full-time",
  },
  {
    id: 4,
    title: "Full-Stack Developer",
    department: "Engineering",
    location: "Remote (Europe)",
    type: "Full-time",
  }
];

const processSteps = [
  {
    step: "01",
    title: "Application Review",
    description: "We review your portfolio, GitHub, and resume. We look for a clear history of craftsmanship and impact."
  },
  {
    step: "02",
    title: "Initial Chat",
    description: "A 30-minute casual conversation to align on expectations, culture, and your long-term career goals."
  },
  {
    step: "03",
    title: "Technical/Design Review",
    description: "A focused session to evaluate your hard skills. We don't do whiteboard hazing—expect real-world problem solving."
  },
  {
    step: "04",
    title: "Meet the Team",
    description: "A final culture-add interview with the founders and your potential peers to ensure a mutual fit."
  }
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-stone-50 selection:bg-primary-200">
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-stone-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/noise/800/800')] opacity-5 mix-blend-overlay pointer-events-none" />
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-600/20 via-primary-900/5 to-transparent rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center rounded-full border border-stone-800 bg-stone-900/60 backdrop-blur-md px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-stone-400 mb-8"
            >
              Join QubiQode
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6"
            >
               Do the best work <br />
               <span className="text-primary-500 italic">of your career.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-stone-400 leading-relaxed max-w-xl"
            >
               We are a collective of designers, engineers, and strategists building the next wave of digital products. We&apos;re always looking for exceptional talent.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square rounded-[3rem] overflow-hidden"
          >
            <Image 
              src="https://picsum.photos/seed/teamculture/800/800" 
              alt="QubiQode Team Culture" 
              fill 
              className="object-cover" 
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-24 bg-white border-b border-stone-200">
        <div className="container mx-auto px-6 max-w-7xl">
           <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-4xl font-bold text-stone-950 mb-6">Our Core Values</h2>
              <p className="text-lg text-stone-600">
                These aren&apos;t just words on a wall; they are the operating principles that guide our everyday decisions, hires, and product architecture.
              </p>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, i) => (
                 <motion.div
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.5, delay: i * 0.1 }}
                   className="bg-stone-50 rounded-3xl p-8 border border-stone-100 hover:border-primary-200 hover:bg-white transition-all duration-300 group"
                 >
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                       {value.icon}
                    </div>
                    <h3 className="font-display font-bold text-xl text-stone-950 mb-3">{value.title}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">{value.description}</p>
                 </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="py-24 bg-stone-50 border-b border-stone-200">
        <div className="container mx-auto px-6 max-w-7xl">
           <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
             <div className="max-w-2xl">
                <h2 className="font-display text-4xl font-bold text-stone-950 mb-4">Benefits & Perks</h2>
                <p className="text-lg text-stone-600">
                  We demand excellence, and in return, we provide an environment where you can thrive professionally and personally.
                </p>
             </div>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm flex flex-col"
                >
                  <div className="flex items-center gap-4 mb-4">
                     <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center">
                        {benefit.icon}
                     </div>
                     <h3 className="font-bold text-lg text-stone-950">{benefit.title}</h3>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed flex-1">
                     {benefit.description}
                  </p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-white" id="open-roles">
        <div className="container mx-auto px-6 max-w-5xl">
           <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-stone-950 mb-6">Open Roles</h2>
              <p className="text-lg text-stone-600">Join a team of hyper-focused creatives and engineers.</p>
           </div>
           
           <div className="space-y-4">
              {jobs.map((job, i) => (
                 <motion.div
                   key={job.id}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.4, delay: i * 0.1 }}
                 >
                    <Link href="#apply" className="group block bg-white border border-stone-200 rounded-2xl p-6 md:p-8 hover:border-primary-500 hover:shadow-lg transition-all duration-300">
                       <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                          <div>
                             <h3 className="font-display text-2xl font-bold text-stone-950 group-hover:text-primary-600 transition-colors mb-2">
                               {job.title}
                             </h3>
                             <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-stone-500">
                                <span>{job.department}</span>
                                <span>&bull;</span>
                                <span>{job.location}</span>
                                <span>&bull;</span>
                                <span>{job.type}</span>
                             </div>
                          </div>
                          
                          <div className="shrink-0 w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-primary-600 group-hover:border-transparent group-hover:text-white transition-all duration-300">
                             <ArrowUpRight className="w-5 h-5 text-stone-400 group-hover:text-white transition-colors" />
                          </div>
                       </div>
                    </Link>
                 </motion.div>
              ))}
           </div>
           
           <div className="mt-12 text-center bg-stone-50 rounded-2xl p-8 border border-stone-200">
              <h3 className="font-bold text-stone-950 mb-2">Don&apos;t see a perfect fit?</h3>
              <p className="text-stone-600 text-sm mb-4">We are always open to connecting with brilliant people.</p>
              <a href="mailto:careers@qubiqode.com" className="text-primary-600 font-bold hover:text-primary-700 transition-colors underline underline-offset-4">
                Send a general application
              </a>
           </div>

        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-24 bg-stone-950 text-white border-t border-stone-800">
         <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-20">
               <h2 className="font-display text-4xl font-bold mb-6">Our Hiring Process</h2>
               <p className="text-lg text-stone-400">
                 We respect your time. Our hiring process is streamlined, transparent, and designed to assess real-world skills rather than puzzle-solving ability.
               </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {processSteps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative"
                  >
                     <div className="font-display text-6xl md:text-7xl font-bold text-stone-800 mb-6">{step.step}</div>
                     <h3 className="font-bold text-xl mb-3 text-stone-200">{step.title}</h3>
                     <p className="text-stone-400 text-sm leading-relaxed">{step.description}</p>
                     
                     {/* Connector line for desktop */}
                     {i < processSteps.length - 1 && (
                        <div className="hidden lg:block absolute top-10 left-full w-full h-[1px] bg-stone-800 -ml-4" />
                     )}
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white" id="apply">
         <div className="container mx-auto px-6 max-w-7xl text-center">
             <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-950 mb-6">Ready to make an impact?</h2>
             <p className="text-xl text-stone-600 mb-10 max-w-2xl mx-auto">
               If you are passionate about your craft and want to work alongside people who care just as much, we would love to hear from you.
             </p>
             <Link
               href="mailto:careers@qubiqode.com"
               className="inline-flex items-center justify-center rounded-full bg-primary-600 px-8 py-4 text-sm font-semibold text-white shadow-xl hover:bg-primary-500 transition-all duration-300"
             >
               Apply Now via Email
               <ArrowRight className="ml-2 h-4 w-4" />
             </Link>
         </div>
      </section>
      
    </main>
  );
}
