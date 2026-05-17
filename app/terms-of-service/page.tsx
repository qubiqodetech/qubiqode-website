import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | QubiQode',
  description: 'Terms of Service for QubiQode Digital Agency',
};

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-6 max-w-4xl py-32 prose prose-stone">
      <h1 className="font-display text-4xl font-bold mb-8">Terms of Service</h1>
      <p className="text-stone-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using the QubiQode website, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access the service.
      </p>

      <h2>2. Intellectual Property</h2>
      <p>
        The website and its original content, features, and functionality are owned by QubiQode and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
      </p>

      <h2>3. Disclaimer</h2>
      <p>
        Your use of the website is at your sole risk. The website is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. The website is provided without warranties of any kind, whether express or implied.
      </p>

      <h2>4. Limitation of Liability</h2>
      <p>
        In no event shall QubiQode, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the website.
      </p>

      <h2>5. Changes</h2>
      <p>
        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.
      </p>

      <h2>6. Contact Us</h2>
      <p>
        If you have any questions about these Terms, please contact us at info@qubiqode.com.
      </p>
    </div>
  );
}
