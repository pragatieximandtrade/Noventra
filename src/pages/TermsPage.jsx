import React from 'react';
import { FileText } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-24 space-y-8 text-noventra-dark">
      
      <div className="border-b pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-noventra-leaf">
          <FileText className="w-3.5 h-3.5" />
          <span>Legal & Compliance</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-noventra-forest">
          Terms & Conditions
        </h1>
        <p className="text-xs text-gray-500">
          Last Updated: October 2026
        </p>
      </div>

      <div className="space-y-6 text-sm text-gray-700 leading-relaxed font-light">
        <section className="space-y-2">
          <h2 className="text-lg font-serif font-bold text-noventra-forest">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the AMG NUTRA website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-serif font-bold text-noventra-forest">2. Educational & Non-Medical Content</h2>
          <p>
            All content on this website—including text, graphics, animations, ingredient breakdowns, and supplement facts—is provided exclusively for informational and educational purposes. It is not intended to substitute for professional medical consultation, diagnosis, or treatment.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-serif font-bold text-noventra-forest">3. Intellectual Property</h2>
          <p>
            The AMG NUTRA brand name, original logo, packaging design, custom product animations, and written copy are the proprietary intellectual property of AMG NUTRA. Unauthorized reproduction or commercial use is strictly prohibited.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-serif font-bold text-noventra-forest">4. Product Purchasing via Amazon</h2>
          <p>
            All retail product purchases are conducted through Amazon. When completing a purchase on Amazon, pricing, tax calculations, shipping speeds, returns, and fulfillment policies are managed directly by Amazon.
          </p>
        </section>
      </div>

    </div>
  );
}
