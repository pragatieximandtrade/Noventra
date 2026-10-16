import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ShieldCheck,
  Zap,
  Activity,
  BatteryCharging,
  HelpCircle,
  CheckCircle2,
  Calendar,
  Layers,
  ChevronDown,
  Info,
  Clock,
  RotateCcw,
  Moon,
  Brain,
  Bone,
  HeartPulse,
  Award,
  FlaskConical
} from 'lucide-react';
import { products, fdaDisclaimer } from '../data/products';
import ProductBottle3D from '../components/3d/ProductBottle3D';
import GoldenHaloCanvas from '../components/3d/GoldenHaloCanvas';
import AmazonButton from '../components/common/AmazonButton';
import SupplementFactsModal from '../components/common/SupplementFactsModal';
import CoaModal from '../components/common/CoaModal';
import CoaSection from '../components/common/CoaSection';
import ComparisonSection from '../components/common/ComparisonSection';

export default function MagnesiumPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [coaModalOpen, setCoaModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const product = products.magnesium;
  const facts = product.supplementFacts;

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const getPillarIcon = (idx) => {
    switch (idx) {
      case 0: return <Zap className="w-5 h-5 text-noventra-gold" />;
      case 1: return <Moon className="w-5 h-5 text-noventra-gold" />;
      case 2: return <Brain className="w-5 h-5 text-noventra-gold" />;
      case 3: return <BatteryCharging className="w-5 h-5 text-noventra-gold" />;
      case 4: return <Bone className="w-5 h-5 text-noventra-gold" />;
      case 5: return <HeartPulse className="w-5 h-5 text-noventra-gold" />;
      default: return <Sparkles className="w-5 h-5 text-noventra-gold" />;
    }
  };

  return (
    <div className="space-y-24 md:space-y-32 pb-20">
      
      {/* 1. HERO SECTION & 3D BOTTLE SHOWCASE WITH GOLDEN HALO */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-12 sm:pt-16 md:pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        
        {/* Ambient Halo & Background Glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-noventra-gold/20 via-noventra-leaf/10 to-transparent blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Column: 3D Bottle with Golden Halo Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex items-center justify-center min-h-[480px] order-2 lg:order-1 pt-4 sm:pt-6"
          >
            <GoldenHaloCanvas intensity={1.1} />
            <div className="relative z-10">
              <ProductBottle3D type="magnesium" scale={1.05} />
            </div>
          </motion.div>

          {/* Right Column: Progressive Copy & Key Metrics Reveal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-6 space-y-6 text-center lg:text-left order-1 lg:order-2"
          >
            {/* Category Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-noventra-gold/40 shadow-sm text-noventra-forest text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-noventra-gold" />
              <span>{product.category}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-noventra-forest leading-tight">
              {product.subtitle}
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
              {product.description}
            </p>

            {/* Animated Information Cards (120mg Elemental & 90 Servings) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              
              <div className="p-4 rounded-2xl bg-white border border-noventra-gold/30 shadow-md">
                <span className="text-xs text-gray-500 font-medium block">Elemental Magnesium</span>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-noventra-forest block mt-0.5">
                  120 mg
                </span>
                <span className="text-[11px] text-noventra-leaf font-semibold">29% Daily Value</span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-noventra-gold/30 shadow-md">
                <span className="text-xs text-gray-500 font-medium block">Servings</span>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-noventra-forest block mt-0.5">
                  90 Caps
                </span>
                <span className="text-[11px] text-noventra-leaf font-semibold">3-Month Supply</span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-noventra-gold/30 shadow-md col-span-2 sm:col-span-1">
                <span className="text-xs text-gray-500 font-medium block">Form</span>
                <span className="text-lg font-serif font-bold text-noventra-forest block mt-1">
                  Bisglycinate
                </span>
                <span className="text-[11px] text-noventra-leaf font-semibold">Gentle Absorption</span>
              </div>

            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 pt-4">
              <AmazonButton
                url={product.amazonUrl}
                productName={product.name}
                size="md"
                variant="primary"
              />
              <button
                onClick={() => setModalOpen(true)}
                className="px-6 py-2.5 sm:px-7 sm:py-3 rounded-full bg-white hover:bg-noventra-sand border border-noventra-forest/30 text-noventra-forest font-semibold text-xs uppercase tracking-wider transition-all shadow-sm text-center"
              >
                View Supplement Facts
              </button>
            </div>

            {/* Capsule Excipient Note */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs text-gray-500 pt-1">
              <span className="inline-flex items-center gap-1 font-semibold text-noventra-forest bg-noventra-sand/70 px-2.5 py-1 rounded-full border border-noventra-gold/30 shadow-xs">
                <FlaskConical className="w-3.5 h-3.5 text-noventra-gold" />
                <span>Third-Party Lab Tested</span>
              </span>
              <span className="inline-flex items-center gap-1">
                <Award className="w-4 h-4 text-amber-500" />
                <span>cGMP Certified Facility • USFDA Approved Plant</span>
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-noventra-leaf" />
                <span>100% Pure Bisglycinate</span>
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-noventra-leaf" />
                <span>Zero Gelatin</span>
              </span>
            </div>

          </motion.div>

        </div>
      </section>

      {/* 2. SIX DAILY WELLNESS SUPPORT PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-noventra-leaf font-bold">
            Targeted Physiological Roles
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-noventra-forest">
            Daily Wellness Support For:
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 font-light">
            Formulated with pure Magnesium Glycinate to provide comprehensive multi-pathway support throughout your body.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-stretch">
          {product.wellnessSupportPillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="p-5 rounded-2xl bg-white border border-noventra-gold/25 shadow-sm hover:shadow-md hover:border-noventra-gold transition-all duration-300 text-center flex flex-col items-center h-full group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-noventra-forest to-noventra-emerald text-noventra-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm flex-shrink-0">
                {getPillarIcon(idx)}
              </div>
              <div className="h-12 flex items-center justify-center mb-2 px-1 w-full flex-shrink-0">
                <h3 className="font-serif font-bold text-sm text-noventra-forest leading-snug">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-[11px] text-gray-600 font-light leading-relaxed flex-1 flex items-start justify-center">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. NOVENTRA VS. TYPICAL MARKET ALTERNATIVES COMPARISON */}
      <ComparisonSection product={product} />

      {/* 4. OFFICIAL SUPPLEMENT FACTS PANEL & OTHER INGREDIENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Boxed Supplement Facts */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-noventra-gold/30 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h2 className="text-xl font-serif font-bold text-noventra-forest">
                Supplement Facts
              </h2>
              <span className="text-xs font-semibold text-noventra-leaf uppercase tracking-wider">
                Official Label Panel
              </span>
            </div>

            <div className="border-4 border-black p-4 bg-white rounded-sm font-sans">
              <h3 className="text-2xl font-black uppercase tracking-tight leading-none">Supplement Facts</h3>
              <div className="text-xs font-semibold mt-1">
                Serving Size: 1 Capsule
              </div>
              <div className="text-xs font-semibold border-b-8 border-black pb-1 mb-2">
                Servings Per Container: 90
              </div>

              <div className="flex items-center justify-between text-xs font-bold border-b-2 border-black pb-1.5 mb-1">
                <span>Amount Per Serving</span>
                <span className="w-24 text-right">% Daily Value</span>
              </div>

              <div className="py-2.5 flex items-start justify-between text-xs border-b border-gray-200">
                <div className="flex-1 pr-2">
                  <span className="font-bold text-black">Magnesium</span>
                  <div className="text-[11px] text-gray-600">(as Magnesium Glycinate)</div>
                </div>
                <span className="w-20 text-right font-bold text-black pr-2 whitespace-nowrap">
                  120 mg
                </span>
                <span className="w-24 text-right font-bold text-black whitespace-nowrap">
                  29%
                </span>
              </div>

              <div className="border-t-4 border-black pt-2 mt-3 text-[11px] text-gray-600">
                * Percent Daily Values are based on a 2,000 calorie diet.
              </div>
            </div>

            {/* Other Ingredients Box */}
            <div className="p-4 rounded-xl bg-noventra-sand border border-noventra-sand-200 text-xs space-y-2">
              <div>
                <strong className="text-noventra-forest block uppercase text-[10px] tracking-wider mb-0.5">
                  Other Ingredients:
                </strong>
                <p className="text-gray-700">{facts.otherIngredients}</p>
              </div>
              <div>
                <strong className="text-noventra-forest block uppercase text-[10px] tracking-wider mb-0.5">
                  Suggested Use:
                </strong>
                <p className="text-gray-700">{facts.suggestedUse}</p>
              </div>
            </div>

            {/* Quality & Dietary Badges */}
            <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-semibold text-noventra-forest">
              {['NON-GMO', 'GLUTEN FREE', 'DAIRY FREE', 'SOY FREE', '100% VEGAN', 'THIRD-PARTY LAB TESTED'].map((tag, i) => (
                <span key={i} className="px-2.5 py-1 rounded-full bg-emerald-50 border border-noventra-leaf/30 text-noventra-leaf flex items-center gap-1">
                  ✓ {tag}
                </span>
              ))}
            </div>

            {/* FDA Disclaimer Box */}
            <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-[11px] text-amber-900 leading-snug">
              <strong>FDA Notice: </strong>{fdaDisclaimer}
            </div>

          </div>

          {/* Right: Elemental Precision Explanation & Sourcing */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-gradient-to-br from-noventra-forest to-noventra-emerald text-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold">
                <Info className="w-3.5 h-3.5" />
                <span>Nutritional Precision</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Why Elemental Magnesium Matters
              </h3>

              <p className="text-sm text-noventra-sand-200/90 leading-relaxed font-light">
                In supplement chemistry, mineral chelate compounds consist of the elemental mineral bonded to an amino acid carrier. While the total chelate compound weighs several times more, only the elemental mineral is utilized by human enzymatic pathways.
              </p>

              <div className="p-4 rounded-2xl bg-white/10 border border-white/15 space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-amber-200">
                  <span>Pure Elemental Yield:</span>
                  <span className="text-sm font-bold text-white">120 mg Magnesium</span>
                </div>
                <div className="w-full bg-black/30 rounded-full h-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-amber-400 to-noventra-mint h-full rounded-full w-[29%]" />
                </div>
                <span className="text-[10px] text-gray-300 block">
                  Delivers a precise 29% DV in a single gentle vegetable capsule.
                </span>
              </div>

              <div className="pt-2">
                <AmazonButton
                  url={product.amazonUrl}
                  productName={product.name}
                  size="md"
                  variant="gold"
                />
              </div>

            </div>

            {/* Quality Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-2xl bg-white border border-noventra-sand-200 shadow-sm space-y-1">
                <div className="flex items-center gap-2 text-noventra-forest font-bold text-xs">
                  <FlaskConical className="w-4 h-4 text-noventra-gold" />
                  <span>Third-Party Lab Tested</span>
                </div>
                <p className="text-[11px] text-gray-600">
                  Every batch tested by ISO/IEC 17025 accredited labs for purity & potency.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-noventra-sand-200 shadow-sm space-y-1">
                <div className="flex items-center gap-2 text-noventra-forest font-bold text-xs">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span>cGMP & USFDA Plant</span>
                </div>
                <p className="text-[11px] text-gray-600">
                  Manufactured in a cGMP certified facility and USFDA approved plant.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-noventra-sand-200 shadow-sm space-y-1">
                <div className="flex items-center gap-2 text-noventra-leaf font-bold text-xs">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Gentle On Digestion</span>
                </div>
                <p className="text-[11px] text-gray-600">
                  Chelated with glycine for optimal gastric tolerability.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50/70 via-white to-amber-50/50 border border-noventra-gold/30 shadow-sm space-y-1">
                <div className="flex items-center gap-2 text-noventra-forest font-bold text-xs">
                  <ShieldCheck className="w-4 h-4 text-noventra-gold" />
                  <span>100% Pure Magnesium Glycinate</span>
                </div>
                <p className="text-[11px] text-gray-600 leading-relaxed">
                  Strictly pure, unbuffered Bisglycinate with zero oxide spiking.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. PRODUCT EDUCATION: 5 STAGGERED EDUCATIONAL CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-noventra-leaf font-bold">
            Evidence-Based Wellness Education
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-noventra-forest">
            {product.education.intro}
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 font-light">
            Learn the biochemistry behind magnesium glycinate and how it functions inside normal human physiology.
          </p>
        </div>

        {/* Staggered Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {product.education.cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-6 sm:p-8 rounded-3xl bg-white border border-noventra-gold/20 shadow-md hover:shadow-xl transition-all duration-300 space-y-4 flex flex-col justify-between ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1 bg-gradient-to-b from-white via-noventra-sand/40 to-white' : ''
              }`}
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-noventra-forest text-noventra-gold flex items-center justify-center shadow-md">
                  {idx === 0 && <Activity className="w-6 h-6" />}
                  {idx === 1 && <ShieldCheck className="w-6 h-6" />}
                  {idx === 2 && <Zap className="w-6 h-6" />}
                  {idx === 3 && <BatteryCharging className="w-6 h-6" />}
                  {idx === 4 && <HelpCircle className="w-6 h-6" />}
                </div>

                <h3 className="font-serif font-bold text-xl text-noventra-forest">
                  {card.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                  {card.content}
                </p>
              </div>

              <div className="pt-2 border-t border-gray-100 flex items-center gap-1.5 text-[11px] text-noventra-leaf font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Noventra Quality Standard</span>
              </div>
            </motion.div>
          ))}
        </div>

      </section>

      {/* 4. DAILY ROUTINE & USAGE SUGGESTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-noventra-sand-100 via-white to-noventra-sand-100 rounded-3xl p-8 sm:p-12 border border-noventra-gold/30 shadow-lg">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-noventra-leaf">
                <Clock className="w-4 h-4" />
                <span>Suggested Daily Protocol</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-noventra-forest">
                How to Integrate Magnesium Glycinate Into Your Evening
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-light">
                Take one capsule daily with 8 oz of water. Most individuals prefer taking magnesium alongside dinner or during their evening wind-down routine to support neuromuscular relaxation.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-noventra-gold/20 shadow-sm space-y-4">
              <div className="text-center">
                <div className="text-3xl font-serif font-bold text-noventra-forest">1 Capsule</div>
                <div className="text-xs text-gray-500 font-medium">Daily with water & meal</div>
              </div>
              <AmazonButton
                url={product.amazonUrl}
                productName={product.name}
                size="md"
                variant="primary"
                className="w-full"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 5. CERTIFICATE OF ANALYSIS (COA) THIRD-PARTY LAB VERIFICATION */}
      <CoaSection
        product={product}
        onOpenCoa={() => setCoaModalOpen(true)}
      />

      {/* 6. PRODUCT FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-widest text-noventra-leaf font-bold">Answers & Clarity</span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-noventra-forest">
            Magnesium Glycinate Questions
          </h2>
        </div>

        <div className="space-y-3">
          {product.faqList.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-noventra-gold/20 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-noventra-sand/40 transition-colors"
              >
                <span className="font-serif font-bold text-base text-noventra-forest">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-noventra-forest transition-transform duration-200 ${
                    activeFaq === idx ? 'rotate-180 text-noventra-leaf' : ''
                  }`}
                />
              </button>
              {activeFaq === idx && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Supplement Facts Modal */}
      <SupplementFactsModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        product={product}
      />

      {/* Certificate of Analysis (COA) Modal */}
      <CoaModal
        isOpen={coaModalOpen}
        onClose={() => setCoaModalOpen(false)}
        product={product}
      />

    </div>
  );
}
