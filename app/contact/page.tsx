"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Mail,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
import Link from "next/link";

const services = [
  "Web Development",
  "UI/UX Design",
  "SEO & Marketing",
  "Video Editing",
  "Brand Identity",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset after showing success state for a while
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          service: "",
          message: "",
        });
      }, 5000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <>
      <section className="pt-32 pb-24 bg-stone-50 min-h-screen">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl mb-16">
            <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight text-stone-950 mb-6">
              Let&apos;s build something{" "}
              <span className="text-orange-600">extraordinary</span>.
            </h1>
            <p className="text-xl text-stone-600 leading-relaxed">
              We&apos;re ready to turn your vision into reality. Tell us about
              your project, and we&apos;ll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left Column: Contact Info */}
            <div className="lg:col-span-5 space-y-12">
              {/* Contact Blocks */}
              <div className="space-y-6">
                <a
                  href="mailto:hello@qubiqode.com"
                  className="flex items-start gap-4 group p-6 bg-white rounded-3xl shadow-sm border border-stone-100 hover:border-orange-200 hover:shadow-orange-100/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-stone-50 flex items-center justify-center group-hover:bg-orange-50 transition-colors flex-shrink-0">
                    <Mail className="w-5 h-5 text-stone-700 group-hover:text-orange-600 transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-stone-950 mb-1">
                      Email Us
                    </h3>
                    <p className="text-sm text-stone-600 mb-2">
                      For general inquiries and project proposals.
                    </p>
                    <p className="font-medium text-stone-950 group-hover:text-orange-600 transition-colors">
                      hello@qubiqode.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group p-6 bg-white rounded-3xl shadow-sm border border-stone-100 hover:border-green-200 hover:shadow-green-100/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-stone-50 flex items-center justify-center group-hover:bg-green-50 transition-colors flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-stone-700 group-hover:text-green-600 transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-stone-950 mb-1">
                      WhatsApp Chat
                    </h3>
                    <p className="text-sm text-stone-600 mb-2">
                      For quick questions and urgent matters.
                    </p>
                    <p className="font-medium text-stone-950 group-hover:text-green-600 transition-colors">
                      +1 (234) 567-890
                    </p>
                  </div>
                </a>
              </div>

              {/* Location */}
              <div>
                <h3 className="font-display text-xl font-bold text-stone-950 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-stone-400" /> Output Location
                </h3>
                <address className="not-italic text-stone-600 pl-7">
                  123 Innovation Drive
                  <br />
                  Tech District, Suite 400
                  <br />
                  San Francisco, CA 94103
                </address>
              </div>

              {/* Socials */}
              <div>
                <h3 className="font-display text-xl font-bold text-stone-950 mb-4">
                  Follow along
                </h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center text-stone-600 hover:bg-stone-950 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center text-stone-600 hover:bg-stone-950 hover:text-white transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center text-stone-600 hover:bg-stone-950 hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl shadow-stone-200/50 border border-stone-100 relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center p-8 text-center"
                    >
                      <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-500" />
                      </div>
                      <h3 className="font-display text-3xl font-bold text-stone-950 mb-4">
                        Message Sent!
                      </h3>
                      <p className="text-stone-600 max-w-sm mx-auto">
                        Thank you for reaching out. A member of our team will
                        review your inquiry and get back to you within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label
                            htmlFor="firstName"
                            className="text-sm font-semibold text-stone-950"
                          >
                            First name{" "}
                            <span className="text-orange-500">*</span>
                          </label>
                          <input
                            id="firstName"
                            type="text"
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 text-stone-950 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                            placeholder="John"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="lastName"
                            className="text-sm font-semibold text-stone-950"
                          >
                            Last name <span className="text-orange-500">*</span>
                          </label>
                          <input
                            id="lastName"
                            type="text"
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 text-stone-950 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                            placeholder="Doe"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-semibold text-stone-950"
                        >
                          Work email <span className="text-orange-500">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 text-stone-950 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                          placeholder="john@company.com"
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="service"
                          className="text-sm font-semibold text-stone-950"
                        >
                          What are you looking for?{" "}
                          <span className="text-orange-500">*</span>
                        </label>
                        <div className="relative">
                          <select
                            id="service"
                            required
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 text-stone-950 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all appearance-none"
                          >
                            <option value="" disabled>
                              Select a service
                            </option>
                            {services.map((service, idx) => (
                              <option key={idx} value={service}>
                                {service}
                              </option>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-stone-500">
                            <svg
                              className="fill-current h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="text-sm font-semibold text-stone-950"
                        >
                          Project details{" "}
                          <span className="text-orange-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 text-stone-950 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                          placeholder="Tell us about your goals, timeline, and budget..."
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-stone-950 hover:bg-stone-800 disabled:bg-stone-400 text-white rounded-xl px-8 py-4 font-semibold flex items-center justify-center gap-2 transition-colors group"
                      >
                        {isSubmitting ? "Sending..." : "Send Inquiry"}
                        {!isSubmitting && (
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        )}
                      </button>

                      <p className="text-xs text-stone-500 text-center mt-4">
                        By submitting this form, you agree to our <Link href="/privacy-policy" className="underline hover:text-stone-800">privacy policy</Link>
                        and <Link href="/terms-of-service" className="underline hover:text-stone-800">terms of service</Link>.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
