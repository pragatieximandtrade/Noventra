import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Download,
  Image as ImageIcon,
  Table as TableIcon,
  Award,
  Check,
  ZoomIn
} from 'lucide-react';
import { getLenis } from '../../utils/scroll';

export default function CoaModal({ isOpen, onClose, product }) {
  const [mounted, setMounted] = useState(false);
  const [viewMode, setViewMode] = useState('image'); // 'image' | 'table'

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock background scroll and pause Lenis smoothly
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

  if (!product || !product.coa || !mounted) return null;

  const coa = product.coa;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div
          data-lenis-prevent
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-noventra-dark/85 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            data-lenis-prevent
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5, bounce: 0.15 }}
            className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl shadow-2xl border border-noventra-gold/40 text-noventra-dark z-10 flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            onWheel={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between px-6 sm:px-8 py-4 border-b border-gray-200 bg-noventra-forest text-white z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-noventra-gold">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-amber-300">
                      Official Certificate of Analysis
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-semibold border border-emerald-400/30">
                      Report: {coa.reportCode}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-white leading-tight">
                    {product.name}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* Download Certificate Image Button */}
                <a
                  href={coa.imageFile}
                  download={coa.downloadFileName}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-noventra-gold to-amber-400 hover:from-amber-400 hover:to-noventra-gold text-noventra-dark font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg cursor-pointer"
                  title="Download Certificate Image"
                >
                  <Download className="w-4 h-4 text-noventra-dark" />
                  <span className="hidden sm:inline">Download Image (PNG)</span>
                  <span className="sm:hidden">Download</span>
                </a>

                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* View Mode Switcher Tab Bar */}
            <div className="px-6 sm:px-8 py-3 bg-noventra-sand/60 border-b border-gray-200 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('image')}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-semibold transition-all ${
                    viewMode === 'image'
                      ? 'bg-noventra-forest text-white shadow-sm'
                      : 'bg-white hover:bg-white/80 text-gray-700 border border-gray-200'
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>Official Certificate Document</span>
                </button>

                <button
                  onClick={() => setViewMode('table')}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-semibold transition-all ${
                    viewMode === 'table'
                      ? 'bg-noventra-forest text-white shadow-sm'
                      : 'bg-white hover:bg-white/80 text-gray-700 border border-gray-200'
                  }`}
                >
                  <TableIcon className="w-3.5 h-3.5" />
                  <span>Interactive Test Matrix</span>
                </button>
              </div>

              <div className="flex items-center gap-2 text-noventra-forest font-semibold text-[11px]">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Overall Status: <strong className="text-emerald-700">CONFORMS (100% PASS)</strong></span>
              </div>
            </div>

            {/* Scrollable Modal Content */}
            <div
              data-lenis-prevent
              className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 space-y-6 font-sans bg-gray-50/50"
              style={{ overscrollBehavior: 'contain' }}
            >
              {/* VIEW 1: OFFICIAL CERTIFICATE IMAGE VIEW */}
              {viewMode === 'image' && (
                <div className="space-y-4">
                  {/* Download Action Banner */}
                  <div className="p-4 rounded-2xl bg-white border border-noventra-gold/30 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="space-y-0.5 text-center sm:text-left">
                      <div className="text-xs font-bold text-noventra-forest uppercase tracking-wider flex items-center justify-center sm:justify-start gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>High-Resolution Laboratory Document</span>
                      </div>
                      <p className="text-[11px] text-gray-500">
                        Official analytical report issued for batch #{coa.batchNo}
                      </p>
                    </div>

                    <a
                      href={coa.imageFile}
                      download={coa.downloadFileName}
                      className="px-5 py-2.5 rounded-full bg-noventra-forest hover:bg-noventra-emerald text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-sm hover:shadow-md flex items-center gap-2"
                    >
                      <Download className="w-4 h-4 text-noventra-gold" />
                      <span>Download Certificate Image</span>
                    </a>
                  </div>

                  {/* High-Resolution Certificate Document Canvas Container */}
                  <div className="p-4 sm:p-6 bg-white rounded-2xl border-2 border-gray-200 shadow-lg flex justify-center overflow-hidden">
                    <img
                      src={coa.imageFile}
                      alt={`${product.name} Certificate of Analysis`}
                      className="w-full max-w-2xl h-auto object-contain rounded-lg shadow-sm border border-gray-100"
                      loading="eager"
                    />
                  </div>
                </div>
              )}

              {/* VIEW 2: INTERACTIVE TEST MATRIX VIEW (Exact user table structure) */}
              {viewMode === 'table' && (
                <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-gray-200 shadow-md space-y-6">
                  {/* Header info */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-4 border-b-2 border-black">
                    <div>
                      <h4 className="font-serif font-black text-lg text-black">NOVENTRA LLC</h4>
                      <p className="text-xs text-gray-600">500 Horizon Drive, Suite 540</p>
                      <p className="text-xs text-gray-600">Robbinsville NJ 08691 USA</p>
                    </div>
                    <div className="text-left md:text-right font-mono text-xs">
                      <div><strong className="text-gray-800">Report Code:</strong> {coa.reportCode}</div>
                      <div><strong className="text-gray-800">Report Date:</strong> {coa.reportDate}</div>
                    </div>
                  </div>

                  <div className="text-center py-1">
                    <h3 className="font-serif font-bold text-2xl text-black">Certificate of Analysis</h3>
                    <div className="h-0.5 bg-black w-full mt-2" />
                    <div className="h-px bg-gray-300 w-full mt-0.5" />
                  </div>

                  {/* Metadata Table */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs bg-gray-50/80 p-3.5 rounded-xl border border-gray-200">
                    <div>
                      <span className="text-gray-500 font-semibold block text-[10px] uppercase">Sample Code:</span>
                      <span className="font-bold text-black">{coa.sampleCode}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 font-semibold block text-[10px] uppercase">Received On:</span>
                      <span className="font-bold text-black">{coa.receivedOn}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 font-semibold block text-[10px] uppercase">Sample Name:</span>
                      <span className="font-bold text-noventra-forest">{coa.sampleName}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 font-semibold block text-[10px] uppercase">Batch No.:</span>
                      <span className="font-mono font-bold text-black">{coa.batchNo}</span>
                    </div>
                  </div>

                  {/* Main Analytical Table */}
                  <div className="overflow-x-auto border-t-2 border-b-2 border-black">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-black font-bold italic text-black bg-gray-50">
                          <th className="py-2.5 px-3">Test</th>
                          <th className="py-2.5 px-3">Method</th>
                          <th className="py-2.5 px-3">Claim</th>
                          <th className="py-2.5 px-3">Result</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-dashed divide-gray-200">
                        {coa.tests.map((row, idx) => (
                          <tr key={idx} className="hover:bg-amber-50/30 transition-colors">
                            <td className="py-2 px-3 font-medium text-black whitespace-pre-line">{row.test}</td>
                            <td className="py-2 px-3 font-mono text-[11px] text-gray-700">{row.method}</td>
                            <td className="py-2 px-3 text-gray-600 font-mono text-[11px]">{row.claim}</td>
                            <td className="py-2 px-3 font-bold text-noventra-forest font-mono text-[11px]">{row.result}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Notes & Signatory Section */}
                  <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
                    <div className="space-y-1">
                      <span className="font-bold text-xs text-black block">Note:</span>
                      <p className="text-xs text-gray-600">Serving Size (S): {coa.servingSize}</p>
                    </div>

                    <div className="space-y-1 pt-2 sm:pt-0">
                      <div className="font-serif italic font-bold text-xl text-blue-900 border-b border-black pb-1">
                        Wenjun Wei
                      </div>
                      <div className="font-bold text-xs text-black">{coa.labDirector}</div>
                      <div className="text-[11px] text-gray-500">Lab Director</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 sm:px-8 py-3.5 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-gray-500 text-[11px]">
                Noventra guarantees 100% batch transparency. For custom batch inquiries, contact quality@noventra.com.
              </span>
              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <a
                  href={coa.imageFile}
                  download={coa.downloadFileName}
                  className="px-5 py-2 rounded-full bg-gradient-to-r from-noventra-gold to-amber-400 text-noventra-dark font-bold text-xs uppercase tracking-wider hover:brightness-105 transition-all shadow-sm flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Image (PNG)</span>
                </a>
                <button
                  onClick={onClose}
                  className="px-5 py-2 rounded-full bg-noventra-forest text-white font-semibold text-xs uppercase tracking-wider hover:bg-noventra-emerald transition-colors shadow-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
