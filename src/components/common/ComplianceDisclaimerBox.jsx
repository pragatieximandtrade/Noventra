import React from 'react';

/**
 * ComplianceDisclaimerBox
 * Official FDA & Regulatory compliance disclosure box matching Noventra branding standards.
 * Required for dietary supplement claims, structure/function benefits, and analytical lab verification.
 * 
 * Supports:
 * - variant="forest" (default): Deep luxury emerald forest green & warm gold for dark backgrounds (Footer, dark sections).
 * - variant="sand": Warm cream & gold for light backgrounds (Modals, light pages).
 */
export default function ComplianceDisclaimerBox({ variant = 'forest', className = '' }) {
  const isSand = variant === 'sand' || variant === 'light';

  return (
    <div
      className={`p-5 sm:p-6 rounded-2xl text-[11px] leading-relaxed transition-colors ${
        isSand
          ? 'bg-gradient-to-br from-[#faf7f0] to-[#f3ece0] text-noventra-dark/90 border border-noventra-gold/40 shadow-sm'
          : 'bg-gradient-to-br from-[#061d15] via-[#09291e] to-[#04160f] text-noventra-sand-200/90 border border-noventra-gold/30 shadow-xl'
      } ${className}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3.5">
        
        {/* Left Column */}
        <div className="space-y-3">
          <p className="leading-normal flex items-start">
            <span
              className={`inline-flex items-center justify-center text-[10px] font-bold mr-2 min-w-[14px] leading-none pt-0.5 select-none ${
                isSand ? 'text-[#a87d15]' : 'text-noventra-gold'
              }`}
            >
              †
            </span>
            <span>
              Provides nutritional support as part of a healthy lifestyle with a varied diet and regular exercise.
            </span>
          </p>

          <p
            className={`text-[10px] leading-normal pt-2 flex items-start ${
              isSand
                ? 'text-gray-500 border-t border-noventra-gold/25'
                : 'text-noventra-sand-300/70 border-t border-noventra-emerald/40'
            }`}
          >
            <span
              className={`inline-flex items-center justify-center text-[10px] font-bold mr-2 min-w-[14px] leading-none pt-0.5 select-none ${
                isSand ? 'text-gray-400' : 'text-noventra-sand-300/70'
              }`}
            >
              *
            </span>
            <span>
              The information contained herein is for informational and educational purposes only and does not establish a doctor-patient relationship. Consult your healthcare provider before use.
            </span>
          </p>
        </div>

        {/* Right Column */}
        <div className="space-y-3">
          <p
            className={`font-medium leading-normal p-3 rounded-xl flex items-start ${
              isSand
                ? 'bg-[#ebdcb4]/35 border border-noventra-gold/45 text-noventra-forest'
                : 'bg-noventra-gold/10 border border-noventra-gold/30 text-noventra-sand-100'
            }`}
          >
            <span
              className={`inline-flex items-center justify-center text-[11px] font-bold mr-2 min-w-[14px] leading-none pt-0.5 select-none ${
                isSand ? 'text-[#a87d15]' : 'text-noventra-gold'
              }`}
            >
              ‡
            </span>
            <span>
              These statements have not been evaluated by the Food & Drug Administration. This product is not intended to diagnose, treat, cure or prevent any disease.
            </span>
          </p>

          <p className="leading-normal flex items-start text-[10.5px]">
            <span className="text-noventra-leaf mr-2 font-bold leading-none pt-0.5">✓</span>
            <span>
              Manufactured in a cGMP certified facility and USFDA approved plant; verified by independent ISO/IEC 17025 accredited third-party analytical laboratories.
            </span>
          </p>
        </div>

      </div>
    </div>
  );
}
