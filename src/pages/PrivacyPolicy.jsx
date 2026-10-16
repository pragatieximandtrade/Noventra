import React from 'react';
import { Shield, Lock } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-24 space-y-8 text-noventra-dark">
      
      <div className="border-b pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-noventra-leaf">
          <Lock className="w-3.5 h-3.5" />
          <span>Legal & Compliance</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-noventra-forest">
          Privacy Policy
        </h1>
        <p className="text-xs text-gray-500">
          Last Updated: October 2026
        </p>
      </div>

      <div className="space-y-6 text-sm text-gray-700 leading-relaxed font-light">
        <section className="space-y-2">
          <h2 className="text-lg font-serif font-bold text-noventra-forest">1. Introduction</h2>
          <p>
            NOVENTRA ("we," "our," or "us") respects your privacy and is committed to protecting the personal information you may provide while visiting our brand website. This Privacy Policy explains how information is collected, used, and protected when you access our digital properties.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-serif font-bold text-noventra-forest">2. Information We Collect</h2>
          <p>
            When you visit our website, submit a contact inquiry, or subscribe to our newsletter, we may collect information including your name, email address, and any specific inquiries you provide. We also collect standard analytical data (such as browser type, device information, and pages visited) to optimize website performance.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-serif font-bold text-noventra-forest">3. Amazon Fulfillment & Third-Party Purchases</h2>
          <p>
            Our website redirects users to Amazon for product purchases. When you navigate to Amazon via our links, your transaction, payment details, and shipping address are governed entirely by Amazon’s Privacy Notice and Conditions of Use. Noventra does not collect or store your payment card numbers on this website.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-serif font-bold text-noventra-forest">4. Use of Information</h2>
          <p>
            We use collected information solely to respond to customer inquiries, distribute educational newsletter content (if opted in), and improve website accessibility. We do not sell, rent, or trade your personal data to third parties.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-serif font-bold text-noventra-forest">5. Contact Us</h2>
          <p>
            If you have questions regarding this Privacy Policy or your data rights, please contact our team via our official Contact page.
          </p>
        </section>
      </div>

    </div>
  );
}
