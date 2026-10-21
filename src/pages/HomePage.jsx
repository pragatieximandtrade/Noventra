import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Zap,
  Activity,
  Layers,
  Award,
  HelpCircle,
  Truck,
  RotateCcw,
  Check
} from 'lucide-react';
import { products, brandInfo, comparisonData, fdaDisclaimer } from '../data/products';
import ProductBottle3D from '../components/3d/ProductBottle3D';
import GoldenHaloCanvas from '../components/3d/GoldenHaloCanvas';
import MolecularCanvas from '../components/3d/MolecularCanvas';
import AmazonButton from '../components/common/AmazonButton';
import SupplementFactsModal from '../components/common/SupplementFactsModal';
import { renderWithFootnotes } from '../components/common/FootnoteSup';

export default function HomePage() {
  const [selectedProductModal, setSelectedProductModal] = useState(null);
  const [activeHeroTab, setActiveHeroTab] = useState('magnesium');

  const mag = products.magnesium;
  const glut = products.glutathione;

  return (
    <div className="space-y-24 md:space-y-36 pb-16 overflow-hidden">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative min-h-[88vh] flex items-center justify-center pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        {/* Ambient Halo & Molecular Lights in Hero */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-radial from-noventra-gold/15 via-noventra-leaf/10 to-transparent blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Column: Hero Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6 text-center lg:text-left"
          >
            {/* Top Brand Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-noventra-gold/30 shadow-sm backdrop-blur-sm text-noventra-forest text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-noventra-gold" />
              <span>{renderWithFootnotes('Recommended by Healthcare Professionals¹ • Thoughtfully Formulated')}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-noventra-forest leading-[1.15] tracking-tight">
              Elevate Your <br />
              <span className="italic font-normal text-noventra-leaf">Everyday Wellness.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
              Premium dietary supplements formulated with bioavailable nutrient forms, accurate elemental labeling, and zero artificial fillers.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <AmazonButton
                url={brandInfo.amazonStoreUrl}
                productName="Noventra Amazon Collection"
                size="lg"
                variant="primary"
              />
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white hover:bg-noventra-sand border border-noventra-forest/20 text-noventra-forest font-semibold text-xs sm:text-sm transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <span>Explore Formulations</span>
                <ArrowRight className="w-4 h-4 text-noventra-leaf" />
              </Link>
            </div>

            {/* Trust Micro-Metrics */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-noventra-sand-200/90 text-center lg:text-left">
              <div>
                <div className="text-xl sm:text-2xl font-bold font-serif text-noventra-forest">100%</div>
                <div className="text-[11px] text-gray-600 font-medium">Label Accuracy</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-serif text-noventra-forest">Vegan</div>
                <div className="text-[11px] text-gray-600 font-medium">Plant Capsules</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-serif text-noventra-forest">Prime</div>
                <div className="text-[11px] text-gray-600 font-medium">Fast US Shipping</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Dual 3D Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-6 relative flex flex-col items-center justify-center min-h-[460px]"
          >
            {/* Ambient Background for active bottle */}
            {activeHeroTab === 'magnesium' ? (
              <GoldenHaloCanvas intensity={0.9} />
            ) : (
              <MolecularCanvas />
            )}

            {/* 3D Bottle View */}
            <div className="relative z-10">
              <ProductBottle3D
                type={activeHeroTab}
                enableTilt={true}
                scale={1.05}
              />
            </div>

            {/* Toggle switch between Magnesium and Glutathione in Hero */}
            <div className="relative z-20 mt-6 inline-flex p-1.5 rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-noventra-gold/30">
              <button
                onClick={() => setActiveHeroTab('magnesium')}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeHeroTab === 'magnesium'
                    ? 'bg-noventra-forest text-white shadow-md'
                    : 'text-noventra-forest hover:text-noventra-leaf'
                }`}
              >
                Magnesium Glycinate (120mg)
              </button>
              <button
                onClick={() => setActiveHeroTab('glutathione')}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeHeroTab === 'glutathione'
                    ? 'bg-noventra-forest text-white shadow-md'
                    : 'text-noventra-forest hover:text-noventra-leaf'
                }`}
              >
                Liposomal Glutathione (1000mg)
              </button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. BRAND PHILOSOPHY & ETHOS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-noventra-gold/20 shadow-xl text-center space-y-8">
          
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-noventra-leaf font-semibold">
              The Noventra Standard
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-noventra-forest">
              "Thoughtfully formulated. Transparently presented. Designed for your daily wellness journey."
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light">
              We reject proprietary blends, artificial additives, and inflated claims. Instead, we create balanced formulations with transparent dosages and clinically researched nutrient formats.
            </p>
          </div>

          {/* 4 Brand Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 text-left">
            {brandInfo.about.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-noventra-sand/70 border border-noventra-sand-200 hover:border-noventra-gold/50 transition-all duration-300 hover:shadow-md group"
              >
                <div className="w-10 h-10 rounded-xl bg-noventra-forest text-noventra-gold flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-lg text-noventra-forest mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. DISCOVER THE NOVENTRA COLLECTION — ALTERNATING PRODUCT SHOWCASES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-noventra-leaf font-bold">
            Featured Formulations
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-noventra-forest">
            Discover the Noventra Collection
          </h2>
          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            Two distinct, precision-crafted supplements designed to complement your everyday health ritual.
          </p>
        </div>

        {/* SHOWCASE 01: MAGNESIUM GLYCINATE (Product Left, Text Right) */}
        <div className="bg-gradient-to-br from-white via-noventra-sand/60 to-white rounded-3xl border border-noventra-gold/25 p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Product Left with Golden Halo */}
            <div className="lg:col-span-6 relative flex items-center justify-center min-h-[420px]">
              <GoldenHaloCanvas intensity={0.85} />
              <div className="relative z-10">
                <ProductBottle3D type="magnesium" scale={1.05} />
              </div>
            </div>

            {/* Copy Right */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-noventra-forest text-xs font-semibold">
                <Activity className="w-3.5 h-3.5 text-noventra-leaf" />
                <span>{mag.category} • 90-Day Supply</span>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-serif font-bold text-noventra-forest">
                  {mag.name}
                </h3>
                <p className="font-serif italic text-lg text-noventra-leaf mt-1">
                  "{mag.subtitle}"
                </p>
              </div>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light">
                {renderWithFootnotes(mag.description)}
              </p>

              {/* Highlight Badges */}
              <div className="grid grid-cols-2 gap-3 py-2">
                {mag.highlights.map((h, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white border border-noventra-sand-200 shadow-sm">
                    <div className="text-xs text-gray-500">{renderWithFootnotes(h.label)}</div>
                    <div className="text-base font-serif font-bold text-noventra-forest">{renderWithFootnotes(h.value)}</div>
                    <div className="text-[10px] text-noventra-leaf font-medium">{renderWithFootnotes(h.sub)}</div>
                  </div>
                ))}
              </div>

              {/* Actions: View Details, Supplement Facts, Amazon Buy */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <AmazonButton
                  url={mag.amazonUrl}
                  productName={mag.name}
                  size="md"
                  variant="primary"
                />
                <Link
                  to="/products/magnesium-glycinate"
                  className="px-5 py-3.5 rounded-full bg-noventra-forest hover:bg-noventra-emerald text-white text-xs font-semibold tracking-wide transition-all shadow-md"
                >
                  View Product Details
                </Link>
                <button
                  onClick={() => setSelectedProductModal(mag)}
                  className="text-xs text-noventra-forest font-semibold underline underline-offset-4 hover:text-noventra-leaf transition-colors"
                >
                  Supplement Facts
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* SHOWCASE 02: LIPOSOMAL GLUTATHIONE (Text Left, Product Right) */}
        <div className="bg-gradient-to-bl from-white via-noventra-sand/60 to-white rounded-3xl border border-noventra-gold/25 p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Copy Left */}
            <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-noventra-dark text-xs font-semibold">
                <Zap className="w-3.5 h-3.5 text-amber-600" />
                <span>{renderWithFootnotes(glut.badgeTitle)} • 5-Nutrient Synergy</span>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl font-serif font-bold text-noventra-forest">
                  {glut.name}
                </h3>
                <p className="font-serif italic text-lg text-noventra-leaf mt-1">
                  "{glut.subtitle}"
                </p>
              </div>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light">
                {renderWithFootnotes(glut.description)}
              </p>

              {/* Highlight Badges */}
              <div className="grid grid-cols-2 gap-3 py-2">
                {glut.highlights.map((h, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white border border-noventra-sand-200 shadow-sm">
                    <div className="text-xs text-gray-500">{renderWithFootnotes(h.label)}</div>
                    <div className="text-base font-serif font-bold text-noventra-forest">{renderWithFootnotes(h.value)}</div>
                    <div className="text-[10px] text-noventra-leaf font-medium">{renderWithFootnotes(h.sub)}</div>
                  </div>
                ))}
              </div>

              {/* Actions: View Details, Supplement Facts, Amazon Buy */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <AmazonButton
                  url={glut.amazonUrl}
                  productName={glut.name}
                  size="md"
                  variant="gold"
                />
                <Link
                  to="/products/liposomal-glutathione"
                  className="px-5 py-3.5 rounded-full bg-noventra-forest hover:bg-noventra-emerald text-white text-xs font-semibold tracking-wide transition-all shadow-md"
                >
                  View Product Details
                </Link>
                <button
                  onClick={() => setSelectedProductModal(glut)}
                  className="text-xs text-noventra-forest font-semibold underline underline-offset-4 hover:text-noventra-leaf transition-colors"
                >
                  Supplement Facts
                </button>
              </div>
            </div>

            {/* Product Right with Molecular Canvas */}
            <div className="lg:col-span-6 relative flex items-center justify-center min-h-[420px] order-1 lg:order-2">
              <MolecularCanvas />
              <div className="relative z-10">
                <ProductBottle3D type="glutathione" scale={1.05} />
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* 4. PRODUCT COMPARISON MATRIX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-noventra-gold/20 p-6 sm:p-10 md:p-12 shadow-xl space-y-8">
          
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.25em] text-noventra-leaf font-bold">
              Transparent Formulation Matrix
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-noventra-forest">
              Comparing Our Formulations
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Each Noventra product is formulated for distinct nutritional roles in your everyday routine.
            </p>
          </div>

          {/* Responsive Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="border-b-2 border-noventra-forest">
                  <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-gray-500 w-1/4">
                    Feature
                  </th>
                  <th className="py-4 px-4 font-serif font-bold text-lg text-noventra-forest w-3/8 bg-noventra-sand/50 rounded-t-xl">
                    Magnesium Glycinate
                  </th>
                  <th className="py-4 px-4 font-serif font-bold text-lg text-noventra-forest w-3/8 bg-amber-50/50 rounded-t-xl">
                    Liposomal Glutathione
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-xs sm:text-sm">
                {comparisonData.rows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-noventra-sand/30 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-gray-700">
                      {renderWithFootnotes(row.feature)}
                    </td>
                    <td className="py-3.5 px-4 text-noventra-forest bg-noventra-sand/20 font-medium">
                      {renderWithFootnotes(row.magnesium)}
                    </td>
                    <td className="py-3.5 px-4 text-noventra-forest bg-amber-50/20 font-medium">
                      {renderWithFootnotes(row.glutathione)}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td className="py-6 px-4"></td>
                  <td className="py-6 px-4 bg-noventra-sand/50 rounded-b-xl">
                    <AmazonButton url={mag.amazonUrl} productName={mag.name} size="sm" />
                  </td>
                  <td className="py-6 px-4 bg-amber-50/50 rounded-b-xl">
                    <AmazonButton url={glut.amazonUrl} productName={glut.name} size="sm" variant="gold" />
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

        </div>
      </section>

      {/* 5. AMAZON SHOPPING CONFIDENCE & FULFILLMENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-noventra-forest via-noventra-emerald to-noventra-dark text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-amber-300 text-xs font-semibold">
                <Truck className="w-3.5 h-3.5" />
                <span>Fulfilled Directly by Amazon Prime</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                Fast, Temperature-Controlled Delivery Across the USA
              </h2>
              <p className="text-sm text-noventra-sand-200/80 leading-relaxed max-w-2xl font-light">
                We partner with Amazon's premier fulfillment network to guarantee authentic, freshly batched product delivery with standard 1-2 day Prime shipping and frictionless 30-day customer protection.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-3">
              <AmazonButton
                url={brandInfo.amazonStoreUrl}
                productName="Noventra Amazon Storefront"
                size="lg"
                variant="gold"
                className="w-full"
              />
              <span className="text-[11px] text-gray-300">
                Official Noventra Storefront • Verified Prime Stock
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Supplement Facts Modal for Quick Access */}
      <SupplementFactsModal
        isOpen={Boolean(selectedProductModal)}
        onClose={() => setSelectedProductModal(null)}
        product={selectedProductModal}
      />

    </div>
  );
}
