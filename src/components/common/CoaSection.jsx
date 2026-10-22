import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  CheckCircle2,
  FileText,
  ExternalLink,
  Award,
  Sparkles,
  Search,
  Check
} from 'lucide-react';

export default function CoaSection({ product, onOpenCoa }) {
  if (!product || !product.coa) return null;

  const coa = product.coa;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Section Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-noventra-gold/40 shadow-sm text-noventra-forest text-xs font-semibold uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5 text-noventra-gold" />
          <span>Third-Party Lab Tested & Verified</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-noventra-forest">
          Certificate of Analysis (COA)
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
          True quality requires zero guesswork. Every batch of AMG Nutra is independently third-party lab tested by an ISO/IEC 17025 accredited laboratory to verify active potency, heavy metals safety, and microbiological purity before reaching your hands.
        </p>
      </div>

      {/* Main Feature Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Batch Verification & Metrics */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-noventra-gold/30 shadow-xl flex flex-col justify-between space-y-6">
          
          <div className="space-y-4">
            {/* Live Lot & Facility Banner */}
            <div className="p-4 rounded-2xl bg-noventra-sand/60 border border-noventra-gold/25 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600" />
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-noventra-forest">
                    Active Verified Batch
                  </span>
                </div>
                <div className="text-base sm:text-lg font-mono font-bold text-noventra-forest">
                  Batch #{coa.batchNo || coa.lotNumber}
                </div>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-[10px] text-gray-500 uppercase block font-semibold">Analytical Report</span>
                <span className="text-xs font-bold text-noventra-emerald block font-mono">
                  {coa.reportCode || coa.reportId}
                </span>
                <span className="text-[10px] text-gray-500 block">
                  ISO/IEC 17025 Verified • {coa.labDirector}
                </span>
              </div>
            </div>

            {/* Headline Copy */}
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-noventra-forest mb-2">
                100% Independently Confirmed Quality
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                {coa.summary}
              </p>
            </div>

            {/* 4 Key Parameter Pill Cards */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {coa.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-[#faf8f5] border border-noventra-gold/20 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-[11px] font-medium text-gray-600 block truncate">
                      {item.label}
                    </span>
                    <span className="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      ✓ PASS
                    </span>
                  </div>
                  <div className="text-base sm:text-lg font-serif font-bold text-noventra-forest">
                    {item.value}
                  </div>
                  <span className="text-[10px] text-gray-500 font-light block mt-0.5">
                    {item.subtext}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Action Bar */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={onOpenCoa}
              className="flex-1 px-6 py-3.5 rounded-full bg-noventra-forest hover:bg-noventra-emerald text-white font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
            >
              <FileText className="w-4 h-4 text-noventra-gold group-hover:scale-110 transition-transform" />
              <span>View Full Certificate of Analysis (COA)</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
            </button>
            <span className="text-[11px] text-gray-500 text-center sm:text-left sm:max-w-[160px] leading-tight">
              Instant interactive view of chemical assays & microbiology
            </span>
          </div>

        </div>

        {/* Right Column: Interactive Document Replica Card */}
        <div
          onClick={onOpenCoa}
          className="lg:col-span-5 bg-gradient-to-br from-[#fcfbf9] to-[#f5f0e6] rounded-3xl p-6 sm:p-8 border-2 border-noventra-gold/35 shadow-xl flex flex-col justify-between cursor-pointer group hover:border-noventra-gold transition-all duration-300 relative overflow-hidden"
        >
          {/* Subtle Background Watermark */}
          <div className="absolute right-4 bottom-4 opacity-5 pointer-events-none">
            <Award className="w-64 h-64 text-noventra-forest" />
          </div>

          <div className="space-y-5 relative z-10">
            {/* Document Header Simulation */}
            <div className="flex items-center justify-between pb-3 border-b-2 border-noventra-gold/30">
              <div>
                <span className="text-[9px] uppercase tracking-[0.2em] font-black text-amber-700 block">
                  OFFICIAL THIRD-PARTY LAB REPORT
                </span>
                <span className="text-xs font-mono font-bold text-gray-800">
                  {coa.reportCode || coa.reportId}
                </span>
              </div>
              <div className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold flex items-center gap-1">
                <Check className="w-3 h-3" />
                <span>CONFORMS</span>
              </div>
            </div>

            {/* Document Body Simulation */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-noventra-gold/25 space-y-3 shadow-inner">
              <div className="flex items-center justify-between text-xs pb-2 border-b border-gray-100">
                <span className="text-gray-500 font-medium">Sample Name:</span>
                <span className="font-bold text-noventra-forest truncate max-w-[170px]" title={product.name}>
                  {product.name}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs pb-2 border-b border-gray-100">
                <span className="text-gray-500 font-medium">Batch No.:</span>
                <span className="font-mono font-bold text-black">{coa.batchNo || coa.lotNumber}</span>
              </div>
              <div className="flex items-center justify-between text-xs pb-2 border-b border-gray-100">
                <span className="text-gray-500 font-medium">Testing Method:</span>
                <span className="font-mono text-gray-700 text-[11px]">HPLC • ICP-MS • USP</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500 font-medium">Analytical Result:</span>
                <span className="font-bold text-emerald-700">100% Specification Met</span>
              </div>
            </div>

            {/* Lab Seal Badge */}
            <div className="p-3.5 rounded-xl border border-dashed border-emerald-600/50 bg-emerald-50/70 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-emerald-700 text-white flex items-center justify-center text-sm font-bold shadow-sm">
                ✓
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold text-emerald-900 tracking-wider">
                  Third-Party Certified
                </div>
                <div className="text-[11px] text-emerald-800 font-medium">
                  {coa.labDirector} • Lab Director
                </div>
              </div>
            </div>
          </div>

          {/* Click to open badge */}
          <div className="pt-6 relative z-10">
            <div className="w-full py-2.5 px-4 rounded-xl bg-white/90 group-hover:bg-noventra-forest group-hover:text-white border border-noventra-gold/40 text-noventra-forest text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-sm">
              <Search className="w-3.5 h-3.5 text-noventra-gold group-hover:text-amber-300" />
              <span>Click to Inspect Official Lab Sheet</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
