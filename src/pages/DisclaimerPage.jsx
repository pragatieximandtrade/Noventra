import React from 'react';
import { ShieldAlert, AlertTriangle } from 'lucide-react';
import { fdaDisclaimer } from '../data/products';
import ComplianceDisclaimerBox from '../components/common/ComplianceDisclaimerBox';

export default function DisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-24 space-y-8 text-noventra-dark">
      
      <div className="border-b pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>Mandatory Regulatory Notice</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-noventra-forest">
          FDA Dietary Supplement Disclaimer
        </h1>
        <p className="text-xs text-gray-500">
          Applicable to all NOVENTRA Formulations & Web Pages
        </p>
      </div>

      {/* Official Footnotes & Regulatory Matrix */}
      <ComplianceDisclaimerBox className="shadow-lg" />

      {/* Prominent Callout Box */}
      <div className="p-6 sm:p-8 rounded-2xl bg-amber-50 border-2 border-amber-300 text-amber-950 space-y-4">
        <div className="flex items-center gap-3">
          <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
          <h2 className="text-xl font-bold font-serif text-amber-900">
            Official FDA Label Disclaimer
          </h2>
        </div>
        <p className="text-base font-serif italic leading-relaxed">
          "{fdaDisclaimer}"
        </p>
      </div>

      <div className="space-y-6 text-sm text-gray-700 leading-relaxed font-light">
        <section className="space-y-2">
          <h3 className="text-lg font-serif font-bold text-noventra-forest">
            1. No Medical Advice or Disease Claims
          </h3>
          <p>
            The products and statements made on this website have not been evaluated by the United States Food and Drug Administration (FDA). Our dietary supplements are not intended to diagnose, treat, cure, mitigate, or prevent any disease, illness, or medical condition.
          </p>
          <p>
            No statement on this site should be interpreted as medical advice or as a guarantee of clinical efficacy for any physiological ailment.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-lg font-serif font-bold text-noventra-forest">
            2. Healthcare Professional Consultation
          </h3>
          <p>
            Individuals who are pregnant, nursing, attempting to conceive, taking prescription medications (including blood thinners, blood pressure medications, or immunosuppressants), or who have a pre-existing medical condition should always consult with a licensed physician or qualified healthcare professional before incorporating dietary supplements into their routine.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="text-lg font-serif font-bold text-noventra-forest">
            3. Individual Variability
          </h3>
          <p>
            Individual biological responses to dietary supplements can vary based on genetics, lifestyle, overall diet, age, and existing physiological status. Dietary supplements are intended strictly to support general nutritional intake as part of a balanced diet.
          </p>
        </section>
      </div>

    </div>
  );
}
