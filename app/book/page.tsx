"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Video, CheckCircle2, ChevronRight, ChevronLeft, Target, Lightbulb, ShieldCheck, HelpCircle } from "lucide-react";

const benefits = [
  {
    title: "Strategic Alignment",
    description: "We don't just take orders. We dive deep into your business goals to ensure our solution actually solves your core problems.",
    icon: <Target className="w-6 h-6 text-primary-500" />
  },
  {
    title: "Technical Feasibility",
    description: "Get immediate feedback on what's possible, what's complex, and what structural approach will scale best.",
    icon: <Lightbulb className="w-6 h-6 text-primary-500" />
  },
  {
    title: "Risk Mitigation",
    description: "Identify potential roadblocks early and establish a clear minimum viable product (MVP) blueprint to reduce project risk.",
    icon: <ShieldCheck className="w-6 h-6 text-primary-500" />
  }
];

const prepSteps = [
  "Outline your core business objective for this project.",
  "Gather any existing design assets, brand guidelines, or wireframes.",
  "Have a rough idea of your desired timeline and budget constraints.",
  "Identify who the key stakeholders will be during the engagement."
];

// Mock calendar for UI purposes
const timeSlots = [
  "09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM"
];

export default function BookConsultationPage() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookingStep, setBookingStep] = useState<1 | 2 | 3>(1);
  const [currentMonth] = useState("October 2026");
  
  // Fake days to render a little calendar grid
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const startDayOffset = 4; // Arbitrary start day

  const handleDateSelect = (day: number) => {
    setSelectedDate(day);
    setSelectedTime(null);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleContinue = () => {
    if (selectedDate && selectedTime) {
      setBookingStep(2);
    }
  };

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingStep(3);
  };

  return (
    <main className="min-h-screen bg-stone-50 selection:bg-primary-200">
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-48 lg:pb-24 border-b border-stone-200 bg-stone-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-600/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center rounded-full border border-stone-800 bg-stone-900/60 backdrop-blur-md px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-stone-300 mb-8 shadow-sm"
          >
            Discovery Call
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto"
          >
             Let&apos;s discuss your <br className="hidden md:block"/>
            <span className="text-primary-500 italic">next big move.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-stone-400 max-w-2xl mx-auto leading-relaxed"
          >
            Book a complimentary 30-minute consultation with our strategy team to discuss your project feasibility, timelines, and potential ROI.
          </motion.p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-24 -mt-16 sm:-mt-24 relative z-20">
         <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
               
               {/* Left Column: Benefits & Prep */}
               <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.8, delay: 0.3 }}
                 className="lg:col-span-5 space-y-12"
               >
                  <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl border border-stone-200">
                     <h3 className="font-display text-2xl font-bold text-stone-950 mb-6">What to expect</h3>
                     <div className="space-y-8">
                       {benefits.map((benefit, i) => (
                         <div key={i} className="flex items-start gap-4">
                           <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                             {benefit.icon}
                           </div>
                           <div>
                             <h4 className="font-bold text-stone-950 mb-1">{benefit.title}</h4>
                             <p className="text-stone-600 text-sm leading-relaxed">{benefit.description}</p>
                           </div>
                         </div>
                       ))}
                     </div>
                  </div>

                  <div className="bg-stone-100 rounded-[2rem] p-8 md:p-10 border border-stone-200">
                     <h3 className="font-display text-xl font-bold text-stone-950 mb-4">How to prepare</h3>
                     <ul className="space-y-4">
                       {prepSteps.map((step, i) => (
                         <li key={i} className="flex items-start gap-3">
                           <div className="w-6 h-6 rounded-full bg-stone-200 flex items-center justify-center shrink-0 mt-0.5 text-stone-600 font-bold text-xs">
                             {i + 1}
                           </div>
                           <p className="text-stone-700 text-sm">{step}</p>
                         </li>
                       ))}
                     </ul>
                  </div>
               </motion.div>

               {/* Right Column: Active Scheduler UI */}
               <motion.div 
                 initial={{ opacity: 0, y: 40 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.4 }}
                 className="lg:col-span-7 bg-white rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-stone-200 overflow-hidden"
               >
                  <div className="flex bg-stone-50 border-b border-stone-200 p-6 md:p-8">
                     <div className="flex-1">
                       <h2 className="font-display text-2xl font-bold text-stone-950">Strategy & Discovery</h2>
                       <div className="flex flex-wrap gap-4 mt-3 text-sm font-semibold text-stone-500">
                         <div className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 30 min</div>
                         <div className="flex items-center gap-1.5"><Video className="w-4 h-4" /> Video Call</div>
                       </div>
                     </div>
                     <div className="shrink-0 hidden sm:block">
                        <div className="w-16 h-16 rounded-full bg-stone-200 border-4 border-white shadow-sm overflow-hidden relative">
                           {/* Using a placeholder for avatar */}
                           <div className="absolute inset-0 bg-primary-100 flex items-center justify-center text-primary-600 font-bold text-xl">
                             Q
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="p-6 md:p-8 min-h-[500px] relative">
                     <AnimatePresence mode="wait">
                       {bookingStep === 1 && (
                          <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                          >
                             <h3 className="font-bold text-lg text-stone-950 mb-6">Select a Date & Time</h3>
                             
                             <div className="grid md:grid-cols-2 gap-8">
                                {/* Fake Calendar */}
                                <div>
                                   <div className="flex items-center justify-between mb-4">
                                     <button className="w-8 h-8 rounded-full hover:bg-stone-100 flex items-center justify-center transition-colors">
                                       <ChevronLeft className="w-5 h-5 text-stone-600" />
                                     </button>
                                     <span className="font-bold text-stone-950">{currentMonth}</span>
                                     <button className="w-8 h-8 rounded-full hover:bg-stone-100 flex items-center justify-center transition-colors">
                                       <ChevronRight className="w-5 h-5 text-stone-600" />
                                     </button>
                                   </div>
                                   
                                   <div className="grid grid-cols-7 gap-1 text-center mb-2">
                                     {['S','M','T','W','T','F','S'].map((d, i) => (
                                       <div key={i} className="text-xs font-bold text-stone-400 py-2">{d}</div>
                                     ))}
                                   </div>
                                   
                                   <div className="grid grid-cols-7 gap-1">
                                      {Array.from({ length: startDayOffset }).map((_, i) => (
                                        <div key={`empty-${i}`} className="aspect-square"></div>
                                      ))}
                                      {days.map(day => {
                                        const isSelected = selectedDate === day;
                                        const isPast = day < 15; // Fake past logic
                                        
                                        return (
                                          <button
                                            key={day}
                                            disabled={isPast}
                                            onClick={() => handleDateSelect(day)}
                                            className={`aspect-square rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                                              isSelected 
                                                ? "bg-primary-600 text-white shadow-md shadow-primary-600/30 font-bold" 
                                                : isPast 
                                                  ? "text-stone-300 cursor-not-allowed" 
                                                  : "text-stone-700 hover:bg-primary-50 hover:text-primary-600"
                                            }`}
                                          >
                                            {day}
                                          </button>
                                        )
                                      })}
                                   </div>
                                </div>
                                
                                {/* Fake Time Slots */}
                                <div>
                                  {selectedDate ? (
                                    <div className="space-y-3">
                                      <div className="font-semibold text-stone-950 mb-4">{currentMonth.split(' ')[0]} {selectedDate}</div>
                                      <div className="flex flex-col gap-2 max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
                                        {timeSlots.map(time => (
                                          <div key={time} className="flex items-center gap-2">
                                             <button
                                              onClick={() => handleTimeSelect(time)}
                                              className={`flex-1 py-3 px-4 rounded-xl text-center text-sm font-semibold border transition-all duration-300 ${
                                                selectedTime === time 
                                                  ? "bg-stone-900 border-stone-900 text-white" 
                                                  : "bg-white border-stone-200 text-stone-700 hover:border-primary-500 hover:text-primary-600"
                                              }`}
                                            >
                                              {time}
                                            </button>
                                            {selectedTime === time && (
                                              <button 
                                                onClick={handleContinue}
                                                className="shrink-0 bg-primary-600 hover:bg-primary-500 text-white py-3 px-6 rounded-xl text-sm font-bold transition-all shadow-md"
                                              >
                                                Next
                                              </button>
                                            )}
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  ) : (
                                    <div className="h-full flex items-center justify-center text-stone-400 text-sm font-medium border-2 border-dashed border-stone-100 rounded-2xl">
                                      Select a date to view times
                                    </div>
                                  )}
                                </div>
                             </div>
                          </motion.div>
                       )}

                       {bookingStep === 2 && (
                          <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                          >
                             <div className="flex items-center gap-4 mb-8">
                               <button 
                                 onClick={() => setBookingStep(1)}
                                 className="w-10 h-10 rounded-full border border-stone-200 hover:bg-stone-50 flex items-center justify-center transition-colors"
                               >
                                 <ChevronLeft className="w-5 h-5 text-stone-600" />
                               </button>
                               <div>
                                 <h3 className="font-bold text-xl text-stone-950">Enter Details</h3>
                                 <div className="text-sm font-medium text-stone-500 flex items-center gap-2 mt-1">
                                   <Calendar className="w-3.5 h-3.5" /> 
                                   October {selectedDate}, 2026 at {selectedTime}
                                 </div>
                               </div>
                             </div>

                             <form onSubmit={handleConfirm} className="space-y-5">
                                <div className="space-y-2">
                                  <label className="text-sm font-semibold text-stone-950">Name *</label>
                                  <input 
                                    required
                                    type="text" 
                                    className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-stone-900 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all font-medium" 
                                  />
                                </div>
                                <div className="space-y-2">
                                  <label className="text-sm font-semibold text-stone-950">Email *</label>
                                  <input 
                                    required
                                    type="email" 
                                    className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-stone-900 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all font-medium" 
                                  />
                                </div>
                                <div className="space-y-2">
                                  <label className="text-sm font-semibold text-stone-950">What do you want to discuss? *</label>
                                  <textarea 
                                    required
                                    rows={4}
                                    className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-stone-900 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all font-medium resize-y" 
                                    placeholder="Briefly describe your project..."
                                  />
                                </div>
                                <button
                                  type="submit"
                                  className="w-full bg-primary-600 hover:bg-primary-500 text-white rounded-xl px-4 py-4 font-bold text-sm transition-all duration-300 shadow-xl mt-4"
                                >
                                  Schedule Event
                                </button>
                             </form>
                          </motion.div>
                       )}

                       {bookingStep === 3 && (
                          <motion.div
                            key="step3"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-white z-10"
                          >
                             <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                                <CheckCircle2 className="w-10 h-10 text-green-500" />
                             </div>
                             <h3 className="font-display font-bold text-2xl md:text-3xl text-stone-950 mb-3">You are booked!</h3>
                             <p className="text-stone-600 mb-8 max-w-sm">
                               A calendar invitation with the Google Meet link has been sent to your email. We look forward to speaking with you.
                             </p>
                             
                             <div className="bg-stone-50 border border-stone-200 rounded-xl p-5 mb-8 text-left w-full max-w-sm">
                               <div className="font-bold text-stone-950 mb-1">Strategy & Discovery</div>
                               <div className="text-sm font-medium text-stone-600">October {selectedDate}, 2026</div>
                               <div className="text-sm font-medium text-stone-600">{selectedTime} - 30 minutes</div>
                             </div>

                             <Link 
                               href="/"
                               className="text-primary-600 font-bold hover:text-primary-700 transition-colors flex items-center gap-1"
                             >
                               Return to Homepage
                               <ArrowRight className="w-4 h-4 ml-1" />
                             </Link>
                          </motion.div>
                       )}
                     </AnimatePresence>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* Trust / FAQ Area */}
      <section className="py-24 bg-white border-t border-stone-200">
         <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="font-display text-3xl font-bold text-stone-950 mb-10">Frequently Asked</h2>
            <div className="grid sm:grid-cols-2 gap-8 text-left">
               <div className="bg-stone-50 rounded-2xl p-8 border border-stone-100">
                  <h3 className="font-bold text-lg text-stone-950 mb-3 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-primary-500" /> Do I need a full brief?
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Not at all. Whether you have a 30-page RFP or just a rough idea sketched on a napkin, our strategy team is adept at drawing out the core requirements and guiding you toward the optimal path forward.
                  </p>
               </div>
               <div className="bg-stone-50 rounded-2xl p-8 border border-stone-100">
                  <h3 className="font-bold text-lg text-stone-950 mb-3 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-primary-500" /> Am I committing to anything?
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Our initial 30-minute discovery calls are completely complementary and non-binding. We believe in providing upfront value, regardless of whether we end up partnering together.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* Global Style overrides for fake scrollbar */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f5f5f4;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d6d3d1;
          border-radius: 4px;
        }
      `}} />
      
    </main>
  );
}
