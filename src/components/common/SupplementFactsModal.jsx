import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, CheckCircle2 } from 'lucide-react';
import AmazonButton from './AmazonButton';
import ComplianceDisclaimerBox from './ComplianceDisclaimerBox';
import { fdaDisclaimer } from '../../data/products';
import { getLenis } from '../../utils/scroll';

export default function SupplementFactsModal({ isOpen, onClose, product }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent background scroll and pause Lenis while modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const lenis = getLenis();
      if (lenis) lenis.stop();
    } else {
      document.body.style.overflow = '';
      const lenis = getLenis();
      if (lenis) lenis.start();
    }
    return () => {
      document.body.style.overflow = '';
      const lenis = getLenis();
      if (lenis) lenis.start();
    };
  }, [isOpen]);

  if (!product || !mounted) return null;

  const facts = product.supplementFacts;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div
          data-lenis-prevent
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-10"
        >
          {/* Full-screen Dark Backdrop covering whole page + navbar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-noventra-dark/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Outer Card (Cleanly clips corners with overflow-hidden) */}
          <motion.div
            data-lenis-prevent
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
            className="relative w-full max-w-2xl max-h-[88vh] bg-white rounded-3xl shadow-2xl border border-noventra-gold/40 text-noventra-dark z-10 flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            onWheel={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 sm:px-8 pt-6 pb-4 border-b border-gray-100 bg-white/95 backdrop-blur-sm z-20">
              <div>
                <span className="text-xs uppercase tracking-widest font-semibold text-noventra-leaf">Official Label Panel</span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-noventra-forest mt-0.5">{product.name}</h3>
                <p className="text-[11px] text-gray-500">Compliant FDA standard dietary supplement facts panel</p>
              </div>
              <button
                onClick={onClose}
                className="p-2.5 rounded-full bg-noventra-sand hover:bg-noventra-sand-200 text-noventra-forest transition-colors shadow-xs ml-4 flex-shrink-0"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Inner Container with Contained Scrollbar */}
            <div className="overflow-y-auto overscroll-contain modal-scrollbar px-6 sm:px-8 py-6 space-y-6 flex-1">
              
              {/* Official Boxed Supplement Facts */}
              <div className="border-4 border-black p-4 bg-white rounded-sm font-sans">
                <h4 className="text-2xl font-extrabold uppercase tracking-tight leading-none">Supplement Facts</h4>
                <div className="text-xs font-semibold mt-1">
                  Serving Size: {facts.servingSize}
                </div>
                <div className="text-xs font-semibold border-b-8 border-black pb-1 mb-2">
                  Servings Per Container: {facts.servingsPerContainer}
                </div>

                {/* Header row */}
                <div className="flex items-center justify-between text-xs font-bold border-b-2 border-black pb-1.5 mb-1">
                  <span>Amount Per Serving</span>
                  <span className="w-24 text-right">% Daily Value</span>
                </div>

                {/* Nutrients List */}
                <div className="divide-y divide-gray-200">
                  {facts.nutrients.map((item, idx) => (
                    <div key={idx} className="py-2.5 flex items-start justify-between text-xs font-medium">
                      <div className="flex-1 pr-2">
                        <span className="font-bold text-black">{item.name}</span>
                        {item.subtext && (
                          <div className="text-[11px] text-noventra-leaf font-bold italic mt-0.5">
                            {item.subtext}
                          </div>
                        )}
                      </div>
                      <span className="w-20 text-right font-bold text-black pr-2 whitespace-nowrap">
                        {item.amount}
                      </span>
                      <span className="w-24 text-right font-bold text-black whitespace-nowrap">
                        {item.dailyValue}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Footnote */}
                <div className="border-t-4 border-black pt-2 mt-2 text-[11px] text-gray-700">
                  {facts.footnote ? (
                    <p>{facts.footnote}</p>
                  ) : (
                    <p>* Percent Daily Values are based on a 2,000 calorie diet.</p>
                  )}
                </div>
              </div>

              {/* Other Ingredients */}
              <div className="space-y-3 text-xs leading-relaxed text-gray-700 bg-noventra-sand p-4 rounded-2xl border border-noventra-sand-200">
                <div>
                  <strong className="text-noventra-forest uppercase tracking-wider text-[11px] block mb-1">Other Ingredients:</strong>
                  <p>{facts.otherIngredients}</p>
                </div>

                <div>
                  <strong className="text-noventra-forest uppercase tracking-wider text-[11px] block mb-1">Suggested Use:</strong>
                  <p>{facts.suggestedUse}</p>
                </div>

                {facts.freeFrom && (
                  <div>
                    <strong className="text-noventra-forest uppercase tracking-wider text-[11px] block mb-1.5">Free From:</strong>
                    <div className="flex flex-wrap gap-1.5">
                      {facts.freeFrom.map((free, idx) => (
                        <span key={idx} className="inline-flex items-center gap-1 text-[11px] bg-white px-2.5 py-0.5 rounded-full border border-noventra-leaf/30 text-noventra-leaf font-medium shadow-xs">
                          <CheckCircle2 className="w-3 h-3 text-noventra-leaf" />
                          {free}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* FDA Mandatory Compliance Disclaimer */}
              <ComplianceDisclaimerBox variant="sand" className="p-4 rounded-xl" />

            </div>

            {/* Modal Footer (Pinned at Bottom) */}
            <div className="px-6 sm:px-8 py-4 bg-noventra-sand/60 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3 z-20">
              <div className="text-xs text-gray-500 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-noventra-leaf" />
                <span>100% Label Transparency Guaranteed</span>
              </div>
              <AmazonButton url={product.amazonUrl} productName={product.name} size="sm" />
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
