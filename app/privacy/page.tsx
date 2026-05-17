"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

const sections = [
  {
    id: "information-collection",
    title: "1. Information We Collect",
    content: "We collect information you provide directly to us, such as when you fill out a contact form, request a quote, subscribe to our newsletter, or communicate with us via email or social media. This may include your name, email address, phone number, company name, and details about your project or inquiry. We also automatically collect certain technical information when you visit our website, including your IP address, browser type, operating system, referring URLs, and interaction data.",
  },
  {
    id: "how-we-use",
    title: "2. How We Use Your Information",
    content: "We use the information we collect to provide, maintain, and improve our services; to process and complete transactions; to respond to your inquiries and customer service requests; to send technical notices, updates, security alerts, and support messages; and to communicate with you about products, services, offers, and events offered by QubiQode. We may also use the information to monitor and analyze trends, usage, and activities in connection with our website.",
  },
  {
    id: "cookies",
    title: "3. Cookies and Tracking Technologies",
    content: "We use cookies, web beacons, and similar tracking technologies to collect information about your interactions with our website. Cookies are small data files stored on your hard drive or in device memory that help us improve our website and your experience, see which areas and features of our website are popular, and count visits. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. However, if you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.",
  },
  {
    id: "data-sharing",
    title: "4. Sharing of Information",
    content: "We do not sell, trade, or rent your personal information to third parties. We may share your information with third-party vendors, consultants, and other service providers who need access to such information to carry out work on our behalf (e.g., website hosting, email delivery, analytics). We may also disclose your information if required to do so by law or in the good faith belief that such action is necessary to comply with a legal obligation, protect and defend our rights or property, act in urgent circumstances to protect the personal safety of users of the website or the public, or protect against legal liability.",
  },
  {
    id: "data-security",
    title: "5. Data Security",
    content: "We implement reasonable and appropriate security measures to protect your personal information from unauthorized access, use, alteration, and disclosure. However, no data transmission over the Internet or storage system can be guaranteed to be 100% secure. Therefore, while we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.",
  },
  {
    id: "your-rights",
    title: "6. Your Data Rights",
    content: "Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, delete, or restrict the use of your data. If you have subscribed to our marketing emails, you may opt out at any time by clicking the 'unsubscribe' link at the bottom of the emails. If you wish to exercise any of these rights, please contact us using the information provided below.",
  },
  {
    id: "changes",
    title: "7. Changes to This Privacy Policy",
    content: "We may update this Privacy Policy from time to time. If we make material changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide you with additional notice (such as adding a statement to our homepage or sending you a notification). We encourage you to review the Privacy Policy whenever you access our website to stay informed about our information practices and the choices available to you.",
  },
  {
    id: "contact",
    title: "8. Contact Us",
    content: "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at privacy@qubiqode.com or by mail at: QubiQode Digital Agency, 123 Tech Lane, Suite 400, San Francisco, CA 94105.",
  }
];

export default function PrivacyPolicyPage() {
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
              <Shield className="w-6 h-6 text-orange-600" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-950">Privacy Policy</h1>
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
              At QubiQode ("we", "our", or "us"), we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website qubiqode.com or engage with our services. Please read this policy carefully to understand our practices regarding your personal data.
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
              Need to contact us regarding your data?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-stone-950 px-6 py-3 text-sm font-semibold text-white shadow-xl hover:bg-stone-800 transition-all duration-300"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
