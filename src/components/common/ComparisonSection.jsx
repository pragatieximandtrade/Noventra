import React from 'react';
import { motion } from 'framer-motion';
import {
  Check,
  X,
  Sparkles,
  ShieldCheck,
  Award,
  ArrowRight
} from 'lucide-react';
import AmazonButton from './AmazonButton';
import { renderWithFootnotes } from './FootnoteSup';

export default function ComparisonSection({ product }) {
  if (!product || !product.comparison) return null;

  const comp = product.comparison;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Section Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-noventra-gold/40 shadow-sm text-noventra-forest text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-noventra-gold" />
          <span>{comp.tagline}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-noventra-forest">
          {comp.title}
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
          {renderWithFootnotes(comp.subtitle)}
        </p>
      </div>

      {/* DESKTOP & TABLET COMPARISON TABLE (Hidden on small mobile) */}
      <div className="hidden md:block bg-white rounded-3xl border-2 border-noventra-gold/30 shadow-xl overflow-hidden">
        {/* Table Head */}
        <div className="grid grid-cols-12 border-b-2 border-noventra-gold/30 bg-noventra-sand/60">
          <div className="col-span-3 p-5 flex items-center">
            <span className="text-xs uppercase tracking-widest font-bold text-gray-500">
              Key Evaluation Criteria
            </span>
          </div>

          {/* Noventra Highlight Header */}
          <div className="col-span-5 p-5 bg-gradient-to-b from-noventra-forest to-[#0c3829] text-white flex flex-col justify-center border-x-2 border-noventra-gold/40 relative shadow-md">
            <div className="flex items-center justify-between mb-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold tracking-wider uppercase border border-emerald-400/40">
                <Check className="w-3 h-3 text-emerald-300" />
                AMG Nutra Advantage
              </span>
              <Award className="w-4 h-4 text-noventra-gold" />
            </div>
            <h3 className="font-serif font-bold text-lg text-white">
              {comp.noventraLabel}
            </h3>
          </div>

          {/* Other Brands Header */}
          <div className="col-span-4 p-5 flex flex-col justify-center bg-gray-100/70 text-gray-700">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gray-200 text-gray-600 text-[10px] font-semibold tracking-wider uppercase w-max mb-1">
              Standard Market Alternatives
            </span>
            <h3 className="font-serif font-bold text-base text-gray-600">
              {comp.othersLabel}
            </h3>
          </div>
        </div>

        {/* Table Body Rows */}
        <div className="divide-y divide-gray-200/80">
          {comp.features.map((row, idx) => (
            <div
              key={idx}
              className="grid grid-cols-12 items-stretch hover:bg-gray-50/50 transition-colors"
            >
              {/* Feature Factor */}
              <div className="col-span-3 p-5 flex flex-col justify-center bg-[#fdfbf8]">
                <span className="font-serif font-bold text-sm text-noventra-forest">
                  {renderWithFootnotes(row.factor)}
                </span>
              </div>

              {/* Noventra Column Cell (Highlighted with subtle emerald-sand glow) */}
              <div className="col-span-5 p-5 bg-gradient-to-r from-emerald-50/40 to-[#faf6ed]/60 border-x-2 border-noventra-gold/30 flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div className="space-y-1">
                  <span className="font-bold text-sm text-noventra-forest block leading-snug">
                    {renderWithFootnotes(row.noventra)}
                  </span>
                  <p className="text-xs text-gray-600 font-light leading-relaxed">
                    {renderWithFootnotes(row.noventraDetail)}
                  </p>
                </div>
              </div>

              {/* Other Brands Column Cell */}
              <div className="col-span-4 p-5 bg-gray-50/40 flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5" />
                </div>
                <div className="space-y-1">
                  <span className="font-semibold text-sm text-gray-700 block leading-snug">
                    {renderWithFootnotes(row.others)}
                  </span>
                  <p className="text-xs text-gray-500 font-light leading-relaxed">
                    {renderWithFootnotes(row.othersDetail)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE COMPARISON CARDS (Visible on small screens) */}
      <div className="md:hidden space-y-4">
        {comp.features.map((row, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-white border border-noventra-gold/30 shadow-md space-y-3"
          >
            {/* Factor Header */}
            <div className="flex items-center justify-between pb-2 border-b border-gray-100">
              <span className="font-serif font-bold text-base text-noventra-forest">
                {renderWithFootnotes(row.factor)}
              </span>
              <span className="text-[10px] font-mono text-gray-400">
                0{idx + 1}
              </span>
            </div>

            {/* AMG Nutra Box */}
            <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-300 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900">
                <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px]">
                  ✓
                </span>
                <span>AMG Nutra Standard:</span>
              </div>
              <div className="text-xs font-bold text-noventra-forest">
                {renderWithFootnotes(row.noventra)}
              </div>
              <p className="text-[11px] text-gray-600 font-light leading-relaxed">
                {renderWithFootnotes(row.noventraDetail)}
              </p>
            </div>

            {/* Others Box */}
            <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-600">
                <span className="w-4 h-4 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-[10px]">
                  ✕
                </span>
                <span>Typical Market Brands:</span>
              </div>
              <div className="text-xs font-semibold text-gray-700">
                {renderWithFootnotes(row.others)}
              </div>
              <p className="text-[11px] text-gray-500 font-light leading-relaxed">
                {renderWithFootnotes(row.othersDetail)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Summary Callout Banner */}
      <div className="bg-gradient-to-r from-noventra-forest via-[#0d3f2e] to-noventra-forest rounded-3xl p-6 sm:p-8 text-white border border-noventra-gold/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-noventra-gold flex-shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-serif font-bold text-base sm:text-lg text-white">
              The AMG Nutra Formulation Guarantee
            </h4>
            <p className="text-xs sm:text-sm text-noventra-sand-200/90 font-light mt-0.5">
              Exact elemental weights, bioavailable forms, third-party lab tested, and manufactured in a cGMP certified facility and USFDA approved plant on every batch.
            </p>
          </div>
        </div>

        <div className="w-full md:w-auto flex-shrink-0">
          <AmazonButton
            url={product.amazonUrl}
            productName={product.name}
            size="md"
            variant="gold"
          />
        </div>
      </div>
    </section>
  );
}
