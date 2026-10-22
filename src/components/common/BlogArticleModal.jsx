import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, Sparkles, CheckCircle2, ShieldCheck, BookOpen, ExternalLink } from 'lucide-react';
import { getLenis } from '../../utils/scroll';
import ComplianceDisclaimerBox from './ComplianceDisclaimerBox';
import { renderWithFootnotes } from './FootnoteSup';

export default function BlogArticleModal({ article, onClose }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock background scroll and stop Lenis while article modal is open
  useEffect(() => {
    if (article) {
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
  }, [article]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {article && (
        <div
          data-lenis-prevent
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8"
        >
          {/* Dark Full-Screen Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-noventra-dark/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Dialog Content */}
          <motion.div
            data-lenis-prevent
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.45, bounce: 0.15 }}
            className="relative w-full max-w-3xl max-h-[88vh] bg-white rounded-3xl shadow-2xl border border-noventra-gold/40 flex flex-col overflow-hidden z-10"
            onClick={(e) => e.stopPropagation()}
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar (Sticky Header) */}
            <div className="px-6 sm:px-8 py-4 sm:py-5 border-b border-gray-100 flex items-center justify-between bg-white/95 backdrop-blur-sm z-20 flex-shrink-0">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-noventra-forest text-noventra-gold">
                  {article.category}
                </span>
                <span className="text-xs text-gray-500 font-medium">
                  {article.readTime} • {article.date}
                </span>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-noventra-sand hover:bg-noventra-sand-200 text-noventra-forest transition-colors shadow-xs flex-shrink-0 cursor-pointer"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Article Body */}
            <div
              data-lenis-prevent
              className="p-6 sm:p-8 md:p-10 overflow-y-auto flex-1 min-h-0 space-y-6 text-gray-700 overscroll-contain"
              style={{
                WebkitOverflowScrolling: 'touch',
                overscrollBehavior: 'contain'
              }}
              onWheel={(e) => e.stopPropagation()}
            >
              {/* Article Header */}
              <div className="space-y-3 pb-6 border-b border-gray-100">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-noventra-forest leading-snug">
                  {renderWithFootnotes(article.title)}
                </h2>
                <p className="text-sm text-noventra-leaf font-medium">
                  {renderWithFootnotes(article.subtitle)}
                </p>
                <div className="text-xs text-gray-500 pt-1">
                  Written by <strong className="text-noventra-forest">{article.author}</strong> ({article.authorRole})
                </div>
              </div>

              {/* Key Takeaways Box */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-noventra-sand to-[#f5edd9] border border-noventra-gold/30 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-noventra-forest">
                    <Sparkles className="w-4 h-4 text-noventra-gold" />
                    <span>Executive Summary & Key Takeaways</span>
                  </div>
                  <span className="text-[10px] text-gray-500 font-medium tracking-wide">
                    *See regulatory disclosures below
                  </span>
                </div>
                <ul className="space-y-2 text-xs text-gray-700">
                  {article.keyTakeaways.map((takeaway, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-noventra-leaf flex-shrink-0 mt-0.5" />
                      <span>{renderWithFootnotes(takeaway)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Full Article Content */}
              <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-gray-700 font-light">
                {article.paragraphs.map((para, pIdx) => {
                  if (typeof para === 'string' && para.startsWith('### ')) {
                    return (
                      <h4 key={pIdx} className="font-serif font-bold text-lg sm:text-xl text-noventra-forest pt-5 pb-1 border-b border-noventra-gold/25 flex items-center gap-2">
                        <span className="w-1.5 h-4 bg-noventra-gold rounded-full inline-block flex-shrink-0" />
                        <span>{renderWithFootnotes(para.replace('### ', ''))}</span>
                      </h4>
                    );
                  }
                  if (typeof para === 'string' && para.startsWith('## ')) {
                    return (
                      <h3 key={pIdx} className="font-serif font-bold text-xl sm:text-2xl text-noventra-forest pt-6 pb-2 border-b border-noventra-gold/30">
                        {renderWithFootnotes(para.replace('## ', ''))}
                      </h3>
                    );
                  }
                  if (typeof para === 'string' && para.startsWith('• ')) {
                    return (
                      <div key={pIdx} className="flex items-start gap-2.5 pl-2 text-xs sm:text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-noventra-leaf mt-2 flex-shrink-0" />
                        <span>{renderWithFootnotes(para.replace('• ', ''))}</span>
                      </div>
                    );
                  }
                  return (
                    <p key={pIdx} className="leading-relaxed">
                      {renderWithFootnotes(para)}
                    </p>
                  );
                })}
              </div>

              {/* Related Product Action Banner */}
              {article.relatedProduct && (
                <div className="p-5 rounded-2xl bg-noventra-forest text-white border border-noventra-gold/40 flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-widest text-amber-300">
                      Related Formulation
                    </div>
                    <div className="font-serif font-bold text-base text-white">
                      {article.relatedProduct === 'magnesium'
                        ? 'AMG Nutra Magnesium Glycinate'
                        : 'AMG Nutra Liposomal Glutathione'}
                    </div>
                    <div className="text-xs text-noventra-sand-200/80">
                      {renderWithFootnotes('100% Pure • Third-Party Lab Tested • Daily Wellness Support†', true)}
                    </div>
                  </div>

                  <Link
                    to={article.relatedProduct === 'magnesium'
                      ? '/products/magnesium-glycinate'
                      : '/products/liposomal-glutathione'}
                    onClick={onClose}
                    className="px-5 py-2.5 rounded-full bg-noventra-gold hover:bg-amber-400 text-noventra-dark font-bold text-xs uppercase tracking-wider transition-colors flex-shrink-0"
                  >
                    View Formulation
                  </Link>
                </div>
              )}

              {/* Scientific References & Literature Citations */}
              {article.references && article.references.length > 0 && (
                <div className="mt-8 pt-6 border-t border-noventra-sand-200 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-noventra-forest">
                      <BookOpen className="w-4 h-4 text-noventra-gold" />
                      <span>Scientific References & Clinical Citations ({article.references.length})</span>
                    </div>
                    <span className="text-[10px] text-gray-400 font-mono">Peer-Reviewed Literature</span>
                  </div>

                  <div className="space-y-2.5">
                    {article.references.map((ref, rIdx) => (
                      <div
                        key={rIdx}
                        className="p-3 rounded-xl bg-noventra-sand/60 border border-noventra-sand-200 text-[11px] sm:text-xs text-gray-600 flex items-start justify-between gap-3 hover:border-noventra-gold/40 transition-colors"
                      >
                        <div className="flex items-start gap-2.5 flex-1">
                          <span className="font-mono text-[10px] font-bold text-noventra-leaf bg-white px-1.5 py-0.5 rounded border border-noventra-sand-200 flex-shrink-0">
                            [{rIdx + 1}]
                          </span>
                          <span className="leading-relaxed text-gray-700">
                            {ref.citation}
                          </span>
                        </div>

                        {ref.url && (
                          <a
                            href={ref.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[10px] font-bold text-noventra-forest hover:text-noventra-leaf transition-colors bg-white px-2.5 py-1 rounded-full border border-noventra-gold/30 shadow-2xs flex-shrink-0 whitespace-nowrap group"
                          >
                            <span>{ref.source || 'View Study'}</span>
                            <ExternalLink className="w-3 h-3 text-noventra-leaf group-hover:translate-x-0.5 transition-transform" />
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Regulatory & FDA Compliance Footnotes Box */}
              <ComplianceDisclaimerBox variant="sand" className="mt-8" />

            </div>

            {/* Modal Footer (Sticky Bottom) */}
            <div className="px-6 sm:px-8 py-3.5 sm:py-4 border-t border-gray-100 bg-noventra-sand/60 flex items-center justify-between text-xs text-gray-500 flex-shrink-0 z-20">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-noventra-leaf" />
                <span>AMG Nutra Evidence-Based Education</span>
              </span>
              <button
                onClick={onClose}
                className="px-4 py-1.5 rounded-full bg-white border border-gray-200 font-semibold text-noventra-forest hover:bg-noventra-forest hover:text-white transition-colors cursor-pointer"
              >
                Close Article
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
