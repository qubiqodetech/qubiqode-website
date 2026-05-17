"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { 
  ArrowRight, 
  Paintbrush, 
  Type, 
  MousePointer2, 
  Box, 
  Settings2, 
  Image as ImageIcon,
  Check,
  AlertCircle,
  Info,
  CreditCard,
  User,
  Mail,
  Search,
  CheckCircle2
} from "lucide-react";

const colors = [
  { name: "Blue 50", hex: "#eff6ff", class: "bg-primary-50", text: "text-primary-900" },
  { name: "Blue 100", hex: "#dbeafe", class: "bg-primary-100", text: "text-primary-900" },
  { name: "Blue 500", hex: "#1E90FF", class: "bg-primary-500", text: "text-white" },
  { name: "Blue 600", hex: "#0F6FD6", class: "bg-primary-600", text: "text-white" },
  { name: "Blue 900", hex: "#1e3a8a", class: "bg-primary-900", text: "text-primary-100" },
];

const neutrals = [
  { name: "Stone 50", hex: "#fafaf9", class: "bg-stone-50", text: "text-stone-900" },
  { name: "Stone 100", hex: "#f5f5f4", class: "bg-stone-100", text: "text-stone-900" },
  { name: "Stone 200", hex: "#e7e5e4", class: "bg-stone-200", text: "text-stone-900" },
  { name: "Stone 500", hex: "#78716c", class: "bg-stone-500", text: "text-white" },
  { name: "Stone 800", hex: "#292524", class: "bg-stone-800", text: "text-white" },
  { name: "Stone 950", hex: "#0c0a09", class: "bg-stone-950", text: "text-white" },
];

export default function DesignSystemPage() {
  return (
    <main className="min-h-screen bg-stone-50 selection:bg-primary-200 pb-24">
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-48 lg:pb-24 bg-stone-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900/20 via-stone-950 to-stone-950 pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center rounded-full border border-stone-800 bg-stone-900 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-stone-400 mb-8"
          >
            <Paintbrush className="w-3 h-3 mr-2" />
            Design System Reference
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Brand & UI Kit
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-stone-400 max-w-2xl leading-relaxed"
          >
            A comprehensive guide to QubiQode&apos;s digital aesthetics. Typography, colors, spacing, and reusable components that power our premium web experiences.
          </motion.p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 max-w-7xl mt-16 md:mt-24 space-y-24 md:space-y-32">

        {/* 1. Colors */}
        <section>
          <div className="flex items-center gap-3 mb-8 border-b border-stone-200 pb-4">
            <Paintbrush className="w-6 h-6 text-stone-400" />
            <h2 className="font-display text-3xl font-bold text-stone-950">Colors</h2>
          </div>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-6">Primary Palette (Orange)</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {colors.map((color, i) => (
                  <motion.div 
                    key={color.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col group"
                  >
                    <div className={`h-24 md:h-32 rounded-2xl w-full ${color.class} shadow-inner border border-stone-950/5 mb-3 group-hover:-translate-y-1 transition-transform`} />
                    <span className="font-semibold text-stone-950 text-sm">{color.name}</span>
                    <span className="text-stone-500 text-xs font-mono">{color.hex}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-6">Neutral Palette (Stone)</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {neutrals.map((color, i) => (
                  <motion.div 
                    key={color.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col group"
                  >
                    <div className={`h-24 rounded-2xl w-full ${color.class} shadow-inner border border-stone-950/5 mb-3 group-hover:-translate-y-1 transition-transform`} />
                    <span className="font-semibold text-stone-950 text-sm">{color.name}</span>
                    <span className="text-stone-500 text-xs font-mono">{color.hex}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 2. Typography */}
        <section>
          <div className="flex items-center gap-3 mb-8 border-b border-stone-200 pb-4">
            <Type className="w-6 h-6 text-stone-400" />
            <h2 className="font-display text-3xl font-bold text-stone-950">Typography</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-10">
              <div>
                <span className="text-sm font-semibold text-stone-500 uppercase tracking-wider block mb-4">Display & Headings</span>
                <div className="space-y-6">
                  <div>
                    <span className="text-xs text-stone-400 block mb-1">text-6xl font-display font-bold</span>
                    <h1 className="font-display text-6xl font-bold text-stone-950 tracking-tight leading-none">Headline 1</h1>
                  </div>
                  <div>
                    <span className="text-xs text-stone-400 block mb-1">text-5xl font-display font-bold</span>
                    <h2 className="font-display text-5xl font-bold text-stone-950 tracking-tight leading-tight">Headline 2</h2>
                  </div>
                  <div>
                    <span className="text-xs text-stone-400 block mb-1">text-4xl font-display font-bold</span>
                    <h3 className="font-display text-4xl font-bold text-stone-950 tracking-tight">Headline 3</h3>
                  </div>
                  <div>
                    <span className="text-xs text-stone-400 block mb-1">text-3xl font-display font-bold</span>
                    <h4 className="font-display text-3xl font-bold text-stone-950">Headline 4</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <div>
                <span className="text-sm font-semibold text-stone-500 uppercase tracking-wider block mb-4">Body & UI Text</span>
                <div className="space-y-8">
                  <div>
                    <span className="text-xs text-stone-400 block mb-2">text-xl / Large Intro Text</span>
                    <p className="text-xl text-stone-600 leading-relaxed">
                      This is introductory text, often used for hero subtitles or calling out important concepts. It has a generous line height for readability.
                    </p>
                  </div>
                  <div>
                    <span className="text-xs text-stone-400 block mb-2">text-base / Standard Body</span>
                    <p className="text-base text-stone-600 leading-relaxed">
                      This is the standard body text used across the site. We use Inter for its clean, legible sans-serif qualities, making long-form reading comfortable on all devices.
                    </p>
                  </div>
                  <div>
                    <span className="text-xs text-stone-400 block mb-2">text-sm font-semibold / UI Element</span>
                    <p className="text-sm font-semibold text-stone-950 tracking-wide">
                      BUTTON CONTENT & UI LABELS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Buttons & Actions */}
        <section>
          <div className="flex items-center gap-3 mb-8 border-b border-stone-200 pb-4">
            <MousePointer2 className="w-6 h-6 text-stone-400" />
            <h2 className="font-display text-3xl font-bold text-stone-950">Buttons & Actions</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-[2rem] border border-stone-200 shadow-sm flex flex-col items-start gap-4">
              <span className="text-sm font-medium text-stone-500 mb-2">Primary Button</span>
              <button className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold shadow-xl shadow-primary-900/10 hover:bg-primary-500 hover:-translate-y-0.5 transition-all duration-300 w-full active:scale-95">
                Primary Action
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold opacity-50 cursor-not-allowed w-full">
                Disabled State
              </button>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-stone-200 shadow-sm flex flex-col items-start gap-4">
              <span className="text-sm font-medium text-stone-500 mb-2">Secondary / Dark</span>
              <button className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-stone-950 text-white font-semibold shadow-xl shadow-stone-900/10 hover:bg-stone-800 hover:-translate-y-0.5 transition-all duration-300 w-full active:scale-95">
                Dark Button
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-stone-900 border border-stone-200 font-semibold hover:bg-stone-50 hover:border-stone-300 hover:-translate-y-0.5 transition-all duration-300 w-full active:scale-95">
                Outline Style
              </button>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-stone-200 shadow-sm flex flex-col items-start gap-4">
              <span className="text-sm font-medium text-stone-500 mb-2">Icon Buttons</span>
              <button className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary-100 text-primary-700 font-semibold hover:bg-primary-200 transition-colors w-full group">
                Continue
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-12 h-12 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-stone-600 hover:text-stone-950 hover:border-stone-300 transition-colors hover:shadow-sm">
                <Search className="w-5 h-5" />
              </button>
            </div>
            
            <div className="bg-stone-950 p-8 rounded-[2rem] border border-stone-800 shadow-sm flex flex-col items-start gap-4">
              <span className="text-sm font-medium text-stone-400 mb-2">Dark Mode Actions</span>
              <button className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-stone-900 font-semibold hover:bg-stone-200 hover:-translate-y-0.5 transition-all duration-300 w-full">
                Light Button
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-stone-800 text-stone-300 border border-stone-700 font-semibold hover:bg-stone-700 hover:text-white transition-all w-full">
                Subtle Action
              </button>
            </div>
          </div>
        </section>

        {/* 4. Inputs & Forms */}
        <section>
          <div className="flex items-center gap-3 mb-8 border-b border-stone-200 pb-4">
            <Settings2 className="w-6 h-6 text-stone-400" />
            <h2 className="font-display text-3xl font-bold text-stone-950">Inputs & Forms</h2>
          </div>

          <div className="bg-white border border-stone-200 shadow-sm rounded-[2rem] p-8 md:p-12">
             <div className="grid md:grid-cols-2 gap-12">
               <div className="space-y-6">
                 <div>
                   <label className="block text-sm font-semibold text-stone-950 mb-2">Default Standard Input</label>
                   <input 
                     type="text" 
                     placeholder="John Doe"
                     className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
                   />
                 </div>
                 
                 <div>
                   <label className="block text-sm font-semibold text-stone-950 mb-2">Input with Icon</label>
                   <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-stone-400" />
                      </div>
                      <input 
                        type="email" 
                        placeholder="you@example.com"
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-stone-200 bg-white text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
                      />
                   </div>
                 </div>

                 <div>
                   <label className="block text-sm font-semibold text-stone-950 mb-2">Textarea</label>
                   <textarea 
                     rows={3}
                     placeholder="Tell us about your project..."
                     className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors resize-none"
                   />
                 </div>
               </div>

               <div className="space-y-6">
                 <div>
                   <label className="block text-sm font-semibold text-stone-950 mb-2">Error State</label>
                   <div className="relative">
                      <input 
                        type="text" 
                        defaultValue="Invalid email address"
                        className="w-full px-4 py-3 rounded-xl border border-red-300 bg-red-50 text-red-900 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors"
                      />
                      <AlertCircle className="absolute right-4 top-3.5 h-5 w-5 text-red-500" />
                   </div>
                   <p className="text-sm text-red-600 mt-2">Please enter a valid email address.</p>
                 </div>

                 <div>
                   <label className="block text-sm font-semibold text-stone-950 mb-2">Disabled State</label>
                   <input 
                     type="text" 
                     disabled
                     value="System generated value"
                     className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-stone-500 cursor-not-allowed"
                   />
                 </div>

                 <div className="pt-4 flex items-center gap-3">
                   <div className="w-6 h-6 rounded border border-stone-300 flex items-center justify-center bg-primary-600 border-none">
                     <Check className="w-4 h-4 text-white" />
                   </div>
                   <span className="text-sm text-stone-700">Custom Checkbox Style (Checked)</span>
                 </div>
               </div>
             </div>
          </div>
        </section>

        {/* 5. Cards & Surface Elements */}
        <section>
          <div className="flex items-center gap-3 mb-8 border-b border-stone-200 pb-4">
            <Box className="w-6 h-6 text-stone-400" />
            <h2 className="font-display text-3xl font-bold text-stone-950">Cards & Surfaces</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Standard Item Card */}
            <div className="bg-white rounded-[2rem] p-8 border border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600 mb-6 group-hover:scale-110 transition-transform">
                <ImageIcon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-stone-950 mb-2">Feature Card</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                Used for abstracting services, features, and grid items. Hover me to see the premium elevation effect.
              </p>
              <span className="text-sm font-semibold text-primary-600 group-hover:text-primary-700 flex items-center">
                Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>

            {/* Profile / Testimonial Style */}
            <div className="bg-stone-50 rounded-[2rem] p-8 border border-stone-200">
               <div className="flex text-primary-400 mb-4">
                 {[...Array(5)].map((_, i) => (
                   <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                 ))}
               </div>
               <p className="text-stone-700 italic mb-6">
                 &quot;This container style is perfect for social proof, comments, and quoting clients. The slightly off-white background differentiates it.&quot;
               </p>
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center text-stone-500">
                   <User className="w-5 h-5" />
                 </div>
                 <div>
                   <h4 className="font-semibold text-sm text-stone-950">Jane Doe</h4>
                   <span className="text-xs text-stone-500">CEO, Example Corp</span>
                 </div>
               </div>
            </div>

            {/* Dark Premium Card */}
            <div className="bg-stone-950 rounded-[2rem] p-8 border border-stone-800 text-white relative overflow-hidden group hover:border-stone-700 transition-colors">
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-600/20 blur-[40px] rounded-full group-hover:bg-primary-500/30 transition-colors" />
               <h3 className="font-display text-2xl font-bold mb-2 relative z-10">Premium Tier</h3>
               <div className="text-3xl font-bold mb-6 relative z-10">$99<span className="text-lg text-stone-400 font-normal">/mo</span></div>
               <ul className="space-y-3 mb-8 relative z-10">
                 <li className="flex items-center text-sm text-stone-300 gap-2"><Check className="w-4 h-4 text-primary-500" /> Feature A</li>
                 <li className="flex items-center text-sm text-stone-300 gap-2"><Check className="w-4 h-4 text-primary-500" /> Feature B</li>
                 <li className="flex items-center text-sm text-stone-300 gap-2"><Check className="w-4 h-4 text-primary-500" /> Feature C</li>
               </ul>
               <button className="w-full py-3 rounded-xl bg-white text-stone-950 font-bold hover:bg-stone-200 transition-colors relative z-10">
                 Select Plan
               </button>
            </div>

          </div>
        </section>

        {/* 6. Alerts & Badges */}
        <section>
          <div className="flex items-center gap-3 mb-8 border-b border-stone-200 pb-4">
            <Info className="w-6 h-6 text-stone-400" />
            <h2 className="font-display text-3xl font-bold text-stone-950">Alerts & Badges</h2>
          </div>

          <div className="space-y-8 max-w-3xl">
            {/* Badges */}
            <div className="flex flex-wrap gap-4">
               <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-700 border border-stone-200">
                 Neutral Badge
               </span>
               <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary-50 text-primary-700 border border-primary-200">
                 Primary Badge
               </span>
               <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-50 text-green-700 border border-green-200">
                 Success
               </span>
               <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                 Information
               </span>
            </div>

            {/* Alerts */}
            <div className="space-y-4">
               <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 flex items-start gap-3">
                 <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                 <div>
                   <h4 className="text-sm font-semibold text-blue-900">Information Note</h4>
                   <p className="text-sm text-blue-700 mt-1">This is a standard informational alert used to provide additional context.</p>
                 </div>
               </div>

               <div className="p-4 rounded-xl bg-primary-50 border border-primary-200 flex items-start gap-3">
                 <AlertCircle className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                 <div>
                   <h4 className="text-sm font-semibold text-primary-900">Warning Notice</h4>
                   <p className="text-sm text-primary-800 mt-1">Please be aware of this warning before proceeding further.</p>
                 </div>
               </div>

               <div className="p-4 rounded-xl bg-green-50 border border-green-200 flex items-start gap-3">
                 <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                 <div>
                   <h4 className="text-sm font-semibold text-green-900">Success Message</h4>
                   <p className="text-sm text-green-800 mt-1">Your action was completed successfully.</p>
                 </div>
               </div>
            </div>
          </div>
        </section>

      </div>
      
    </main>
  );
}
