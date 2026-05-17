import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | QubiQode',
  description: 'Privacy Policy for QubiQode Digital Agency',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-6 max-w-4xl py-32 prose pindigo-stone">
      <h1 className="font-display text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-stone-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
      
      <h2>1. Information We Collect</h2>
      <p>
        Currently, we collect personal information such as your name, email address, and message content when you voluntarily submit a message through our contact form.
      </p>

      <h2>2. Use of Information</h2>
      <p>
        The information you provide is used solely to respond to your inquiries, provide the requested services, and improve our website experience. We do not sell or share your information with third parties for marketing purposes.
      </p>

      <h2>3. Cookies and Tracking</h2>
      <p>
        We may use cookies and similar tracking technologies to analyze trends, administer the website, track users&apos; movements around the website, and gather demographic information about our user base as a whole.
      </p>

      <h2>4. Data Security</h2>
      <p>
        We take reasonable steps to protect the personal information provided via the Website from loss, misuse, and unauthorized access, disclosure, alteration, or destruction.
      </p>

      <h2>5. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
      </p>

      <h2>6. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at info@qubiqode.com.
      </p>
    </div>
  );
}
