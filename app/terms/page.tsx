"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowLeft, Scale } from "lucide-react";

const sections = [
  {
    id: "agreement-to-terms",
    title: "1. Agreement to Terms",
    content: "These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity (\"you\") and QubiQode (\"we,\" \"us\" or \"our\"), concerning your access to and use of the qubiqode.com website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto. You agree that by accessing the site and our services, you have read, understood, and agree to be bound by all of these Terms and Conditions.",
  },
  {
    id: "service-terms",
    title: "2. Service Terms & Deliverables",
    content: "QubiQode provides digital agency services including but not limited to custom web development, UI/UX design, brand identity creation, and technical SEO. The specific scope, deliverables, timeline, and cost of any project will be agreed upon in a separate Statement of Work (SOW) or project proposal. These general terms apply to all engagements unless explicitly overridden by a signed SOW.",
  },
  {
    id: "user-responsibilities",
    title: "3. User Responsibilities",
    content: "To ensure the successful completion of projects, you agree to provide timely feedback, necessary brand assets, content, and approvals as outlined in the project schedule. Delays in providing required materials or feedback may result in project timeline extensions. You also warrant that any materials provided to us do not infringe on the intellectual property rights of any third party.",
  },
  {
    id: "payment-and-scope",
    title: "4. Payments and Scope of Work",
    content: "Payment terms will be specified in the project proposal or SOW. Typically, we require a deposit before commencing work, with subsequent milestone payments. All invoices are due upon receipt unless otherwise stated. Any requests for work outside the original scope (scope creep) will be estimated and billed separately. We reserve the right to pause work if payments are delayed.",
  },
  {
    id: "revision-policies",
    title: "5. Revision Policies",
    content: "We want you to be thrilled with the final result. Our standard project proposals include a designated number of revision rounds (usually two) at specific milestones. Revisions requested beyond the included rounds or changes that contradict previously approved milestones will be billed at our standard hourly rate.",
  },
  {
    id: "support-limitations",
    title: "6. Support and Warranty Limitations",
    content: "We provide a 30-day bug-fix warranty on all custom code and technical deliverables post-launch. This warrants that the deliverables will function substantially as specified in the agreed project scope. This warranty does not cover issues caused by third-party plugin updates, server environment changes, or modifications made by anyone other than QubiQode staff after delivery. Ongoing support beyond this period requires a separate maintenance retainer.",
  },
  {
    id: "intellectual-property",
    title: "7. Intellectual Property Rights",
    content: "Upon receipt of full and final payment, we grant you full ownership and rights to the final deliverables as defined in the SOW. We reserve the right to display the completed project in our portfolio, marketing materials, and case studies unless a specific Non-Disclosure Agreement (NDA) prohibits it. We retain ownership of any pre-existing code libraries or proprietary tools used during development.",
  },
  {
    id: "contact",
    title: "8. Contact Us",
    content: "In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: legal@qubiqode.com or by mail at QubiQode Digital Agency, 123 Tech Lane, Suite 400, San Francisco, CA 94105.",
  }
];

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-orange-200">
      
      {/* Header Section */}
      <section className="pt-32 pb-16 border-b border-stone-200 bg-stone-50">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link 
            href="/"
            className="inline-flex items-center text-sm font-semibold text-stone-500 hover:text-orange-600 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <Scale className="w-6 h-6 text-orange-600" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-950">Terms & Conditions</h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-stone-500 font-medium"
          >
            Last Updated: October 24, 2026
          </motion.p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-stone max-w-none"
          >
            <p className="text-lg text-stone-600 leading-relaxed mb-12">
              Please read these Terms and Conditions carefully before using our website or engaging QubiQode for digital services. These terms govern your use of the site and form the foundation of our working relationship.
            </p>

            <div className="space-y-12 md:space-y-16">
              {sections.map((section, index) => (
                <div key={section.id} id={section.id} className="scroll-mt-32">
                  <h2 className="font-display text-2xl font-bold text-stone-950 mb-4">
                    {section.title}
                  </h2>
                  <p className="text-stone-600 leading-loose text-[17px]">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Footer CTA Line */}
          <div className="mt-20 pt-10 border-t border-stone-200 text-center">
            <p className="text-stone-600 mb-6">
              Have questions about our terms of engagement?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-stone-950 px-6 py-3 text-sm font-semibold text-white shadow-xl hover:bg-stone-800 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
