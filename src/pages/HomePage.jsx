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
  Check,
  Sun,
  Moon,
  Clock,
  BookOpen,
  Calendar,
  ChevronDown,
  FlaskConical
} from 'lucide-react';
import { products, brandInfo, fdaDisclaimer } from '../data/products';
import { blogArticles } from '../data/blogArticles';
import ProductBottle3D from '../components/3d/ProductBottle3D';
import GoldenHaloCanvas from '../components/3d/GoldenHaloCanvas';
import MolecularCanvas from '../components/3d/MolecularCanvas';
import AmazonButton from '../components/common/AmazonButton';
import SupplementFactsModal from '../components/common/SupplementFactsModal';
import BlogArticleModal from '../components/common/BlogArticleModal';
import { renderWithFootnotes } from '../components/common/FootnoteSup';

export default function HomePage() {
  const [selectedProductModal, setSelectedProductModal] = useState(null);
  const [selectedArticleModal, setSelectedArticleModal] = useState(null);
  const [activeHeroTab, setActiveHeroTab] = useState('magnesium');
  const [openFaq, setOpenFaq] = useState(0);

  const mag = products.magnesium;
  const glut = products.glutathione;

  // Curated 3 featured articles for Home Page
  const featuredBlogs = [
    blogArticles.find(a => a.id === 'everyday-environmental-detox') || blogArticles[0],
    blogArticles.find(a => a.id === 'magnesium-glycinate-vs-oxide') || blogArticles[1],
    blogArticles.find(a => a.id === 'liposomal-glutathione-absorption') || blogArticles[2]
  ];

  const homeFaqs = [
    {
      q: "What makes AMG Nutra Magnesium Glycinate gentle on digestion?",
      a: "Magnesium Glycinate binds pure elemental magnesium to the calming amino acid glycine. Unlike cheap inorganic forms such as Magnesium Oxide (which has an absorption rate of only ~4% and draws excess water into the colon, causing painful cramps and diarrhea), true chelated glycinate absorbs intact via dipeptide channels with exceptional bioavailability and zero digestive upset."
    },
    {
      q: "Why is phospholipid liposomal delivery necessary for Glutathione?",
      a: "Glutathione is celebrated in cellular biology as the 'Master Antioxidant', but standard unencapsulated pills face almost total destruction from harsh stomach acid and digestive peptidases. AMG Nutra utilizes a 1000 mg advanced Liposomal matrix (providing 500 mg active L-Glutathione) encapsulated inside sunflower phospholipid spheres that survive gastric transit and deliver the active tripeptide directly to your cells."
    },
    {
      q: "Can I take Magnesium Glycinate and Liposomal Glutathione together?",
      a: "Yes! They are designed to work synergistically across your 24-hour circadian cycle. Take 2 capsules of Liposomal Glutathione in the morning with breakfast to fortify daytime cellular antioxidant defenses, and take 1 capsule of Magnesium Glycinate in the evening with dinner or 30-60 minutes before bed to promote restful sleep and neuromuscular relaxation."
    },
    {
      q: "How does AMG Nutra verify ingredient purity and absence of heavy metals?",
      a: "Every single production batch is manufactured in a cGMP certified facility and USFDA approved plant, followed by rigorous independent testing in an ISO/IEC 17025 accredited laboratory using ICP-OES and FTIR spectroscopy. We verify zero heavy metal contamination (Lead, Arsenic, Cadmium, Mercury) and confirm 100% label potency."
    },
    {
      q: "Why does AMG Nutra ship and fulfill through Amazon Prime?",
      a: "Partnering directly with Amazon Prime provides our customers with temperature-controlled warehousing, free 1-2 day nationwide delivery across the United States, verified buyer reviews, and Amazon's seamless 30-day customer satisfaction guarantee."
    }
  ];

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
              <span>Thoughtfully Formulated • Pure Purity Standards</span>
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
                productName="AMG Nutra Amazon Collection"
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
              The AMG Nutra Standard
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
            Discover the AMG Nutra Collection
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

      {/* 4. THE 24-HOUR WELLNESS PROTOCOL (COMPLEMENTARY DAILY RITUAL) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-noventra-gold/25 p-6 sm:p-10 md:p-14 shadow-xl space-y-10">
          
          {/* Section Header */}
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-noventra-sand/70 border border-noventra-gold/40 shadow-xs text-noventra-forest text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-noventra-gold" />
              <span>Designed to Work in Harmony</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-noventra-forest leading-tight">
              The AMG Nutra 24-Hour Wellness Protocol
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
              Our formulations are designed to complement each other across your daily circadian cycle—fueling daytime cellular defense and promoting nighttime neuromuscular recovery.‡
            </p>
          </div>

          {/* Dual Protocol Cards (AM & PM) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* CARD 1: MORNING CELLULAR DEFENSE */}
            <div className="rounded-3xl bg-gradient-to-br from-[#faf7ed] via-[#fffdf9] to-[#f5edd7] border-2 border-noventra-gold/40 p-7 sm:p-8 flex flex-col justify-between shadow-md relative overflow-hidden group hover:border-noventra-gold transition-all duration-300">
              <div className="absolute top-0 right-0 w-48 h-48 bg-amber-300/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="space-y-6 relative z-10">
                {/* Header Tag */}
                <div className="flex items-center justify-between pb-4 border-b border-noventra-gold/25">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-900 text-xs font-bold uppercase tracking-wider">
                    <Sun className="w-4 h-4 text-amber-600" />
                    <span>Morning Protocol • AM</span>
                  </div>
                  <span className="text-xs font-semibold text-gray-500 font-mono">
                    With Breakfast
                  </span>
                </div>

                {/* Product Name & Subtitle */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-noventra-forest">
                    Liposomal Glutathione
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-amber-700 font-bold mt-1">
                    Cellular Antioxidant Defense & Liver Vitality
                  </p>
                </div>

                {/* Dose & Technology Badge */}
                <div className="p-4 rounded-2xl bg-white/90 border border-noventra-gold/30 shadow-xs flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider block">Target Serving</span>
                    <span className="text-base font-serif font-bold text-noventra-forest">2 Vegetarian Capsules</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider block">Bioavailability</span>
                    <span className="text-xs font-bold text-noventra-leaf">Phospholipid Liposomes</span>
                  </div>
                </div>

                {/* Biological Actions Checklist */}
                <div className="space-y-3 pt-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block">
                    Why Take in the Morning:
                  </span>
                  
                  <div className="flex items-start gap-2.5 text-xs text-gray-700">
                    <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-800 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-[11px]">
                      ✓
                    </div>
                    <span>
                      <strong className="text-noventra-forest font-semibold">Master Cellular Defense:</strong> Shields cells from daytime oxidative stress, pollution, and free radicals.‡
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs text-gray-700">
                    <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-800 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-[11px]">
                      ✓
                    </div>
                    <span>
                      <strong className="text-noventra-forest font-semibold">5-in-1 Redox Recycling:</strong> Synergistic Vit C, B2, Selenium & Resveratrol continuously regenerate oxidized glutathione throughout active hours.‡
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs text-gray-700">
                    <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-800 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-[11px]">
                      ✓
                    </div>
                    <span>
                      <strong className="text-noventra-forest font-semibold">Phase II Hepatic Detox:</strong> Supports daily metabolic waste clearance and cellular ATP energy.‡
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 mt-6 border-t border-noventra-gold/25 flex flex-col sm:flex-row items-center justify-between gap-3 relative z-10">
                <Link
                  to="/products/liposomal-glutathione"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-xs font-bold text-noventra-forest hover:text-noventra-leaf transition-colors py-2"
                >
                  <span>Explore Science & Formula</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <div className="w-full sm:w-auto">
                  <AmazonButton
                    url={glut.amazonUrl}
                    productName={glut.name}
                    size="sm"
                    variant="gold"
                    className="w-full sm:w-auto"
                  />
                </div>
              </div>
            </div>

            {/* CARD 2: EVENING NEUROMUSCULAR RESTORATION */}
            <div className="rounded-3xl bg-gradient-to-br from-[#07241a] via-[#0b3829] to-[#041610] text-white border-2 border-noventra-gold/40 p-7 sm:p-8 flex flex-col justify-between shadow-md relative overflow-hidden group hover:border-noventra-gold transition-all duration-300">
              <div className="absolute top-0 right-0 w-48 h-48 bg-noventra-gold/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="space-y-6 relative z-10">
                {/* Header Tag */}
                <div className="flex items-center justify-between pb-4 border-b border-noventra-gold/25">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                    <Moon className="w-4 h-4 text-noventra-gold" />
                    <span>Evening Protocol • PM</span>
                  </div>
                  <span className="text-xs font-semibold text-noventra-sand-200/70 font-mono">
                    Before Bedtime
                  </span>
                </div>

                {/* Product Name & Subtitle */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                    Magnesium Glycinate
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-amber-300 font-bold mt-1">
                    Neuromuscular Relaxation & Restorative Sleep
                  </p>
                </div>

                {/* Dose & Technology Badge */}
                <div className="p-4 rounded-2xl bg-white/10 border border-noventra-gold/30 shadow-xs flex items-center justify-between gap-3 text-white">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-noventra-sand-200/70 tracking-wider block">Target Serving</span>
                    <span className="text-base font-serif font-bold text-white">1 Vegetarian Capsule</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-bold text-noventra-sand-200/70 tracking-wider block">Chelated Purity</span>
                    <span className="text-xs font-bold text-amber-300">100% Pure Glycinate (No Oxide)</span>
                  </div>
                </div>

                {/* Biological Actions Checklist */}
                <div className="space-y-3 pt-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-noventra-sand-200/70 block">
                    Why Take in the Evening:
                  </span>
                  
                  <div className="flex items-start gap-2.5 text-xs text-noventra-sand-200/90">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-[11px]">
                      ✓
                    </div>
                    <span>
                      <strong className="text-white font-semibold">Restful Sleep Architecture:</strong> Promotes natural nighttime relaxation rhythms and restful sleep, helping wake up energized.‡
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs text-noventra-sand-200/90">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-[11px]">
                      ✓
                    </div>
                    <span>
                      <strong className="text-white font-semibold">Soothes Muscular Tension:</strong> Facilitates muscle relaxation and helps alleviate nocturnal tightness and cramps.‡
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs text-noventra-sand-200/90">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-[11px]">
                      ✓
                    </div>
                    <span>
                      <strong className="text-white font-semibold">Gentle on Digestion:</strong> True organic bisglycinate chelate ensures zero laxative effect and zero stomach distress.‡
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 mt-6 border-t border-noventra-gold/25 flex flex-col sm:flex-row items-center justify-between gap-3 relative z-10">
                <Link
                  to="/products/magnesium-glycinate"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-xs font-bold text-noventra-sand-200 hover:text-white transition-colors py-2"
                >
                  <span>Explore Science & Formula</span>
                  <ArrowRight className="w-3.5 h-3.5 text-noventra-gold" />
                </Link>
                <div className="w-full sm:w-auto">
                  <AmazonButton
                    url={mag.amazonUrl}
                    productName={mag.name}
                    size="sm"
                    variant="gold"
                    className="w-full sm:w-auto"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Quality Foundation Strip */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-noventra-sand/70 via-white to-noventra-sand/70 border border-noventra-gold/30 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3 text-noventra-forest font-semibold">
              <ShieldCheck className="w-5 h-5 text-noventra-leaf flex-shrink-0" />
              <span>Standard Across All AMG Nutra Bottles:</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] font-bold text-noventra-forest">
              <span className="px-3 py-1 rounded-full bg-white border border-noventra-gold/30 shadow-xs">cGMP Certified Facility</span>
              <span className="px-3 py-1 rounded-full bg-white border border-noventra-gold/30 shadow-xs">USFDA Approved Plant</span>
              <span className="px-3 py-1 rounded-full bg-white border border-noventra-gold/30 shadow-xs">ISO/IEC 17025 Third-Party Tested</span>
              <span className="px-3 py-1 rounded-full bg-white border border-noventra-gold/30 shadow-xs">100% Plant Vegetarian Capsules</span>
            </div>
          </div>

        </div>
      </section>

      {/* 5. THE AMG NUTRA SCIENCE JOURNAL (CURATED RESEARCH & WELLNESS BLOGS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-noventra-gold/20">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-noventra-gold/30 shadow-xs text-noventra-forest text-xs font-semibold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5 text-noventra-gold" />
              <span>Evidence-Based Nutrition & Science</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-noventra-forest leading-tight">
              The AMG Nutra Science Journal
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
              Explore in-depth articles on bioavailable nutrient kinetics, antioxidant redox cascades, and label transparency crafted by our research team.
            </p>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-noventra-forest hover:bg-noventra-leaf text-white font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg flex-shrink-0 group self-start md:self-auto"
          >
            <span>Explore All Articles ({blogArticles.length})</span>
            <ArrowRight className="w-4 h-4 text-noventra-gold group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Featured Blog Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {featuredBlogs.map((article) => (
            <motion.article
              key={article.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-3xl border border-noventra-gold/30 shadow-md hover:shadow-xl hover:border-noventra-gold transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6 sm:p-7 space-y-5 flex-grow flex flex-col justify-between">
                <div className="space-y-4">
                  
                  {/* Category Pill & Read Time */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-noventra-sand border border-noventra-gold/30 text-noventra-leaf">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                      <Clock className="w-3.5 h-3.5 text-noventra-gold" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  {/* Article Title */}
                  <h3
                    onClick={() => setSelectedArticleModal(article)}
                    className="font-serif font-bold text-xl text-noventra-forest group-hover:text-noventra-leaf transition-colors leading-snug line-clamp-2 cursor-pointer"
                  >
                    {renderWithFootnotes(article.title)}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed line-clamp-3">
                    {renderWithFootnotes(article.summary)}
                  </p>

                  {/* Key Takeaway Pill */}
                  <div className="p-3.5 rounded-2xl bg-noventra-sand/60 border border-noventra-gold/25 space-y-1">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-noventra-forest flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-noventra-gold flex-shrink-0" />
                      <span>Key Research Finding:</span>
                    </div>
                    <p className="text-xs text-gray-700 leading-snug line-clamp-2">
                      {renderWithFootnotes(article.keyTakeaways[0])}
                    </p>
                  </div>
                </div>

                {/* Card Bottom: Date & Read CTA */}
                <div className="pt-4 mt-2 border-t border-noventra-sand-200 flex items-center justify-between">
                  <div className="text-[11px] text-gray-500 font-medium flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-gray-400" />
                    <span>{article.date}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedArticleModal(article)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-noventra-forest group-hover:text-noventra-leaf transition-colors cursor-pointer"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-noventra-leaf" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Banner inside Blog Section */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-noventra-forest via-[#0d4433] to-noventra-dark text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="space-y-1.5 text-center md:text-left relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300">
              <FlaskConical className="w-4 h-4 text-noventra-gold" />
              <span>Consumer Education First</span>
            </div>
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-white">
              Want to dive deeper into nutraceutical science?
            </h3>
            <p className="text-xs sm:text-sm text-noventra-sand-200/80 font-light leading-relaxed">
              Read our full library of research papers, bioavailability studies, ingredient monographs, and third-party laboratory verification standards.
            </p>
          </div>

          <Link
            to="/blog"
            className="px-6 py-3 rounded-full bg-noventra-gold hover:bg-amber-400 text-noventra-dark text-xs font-bold uppercase tracking-wider transition-all shadow-md whitespace-nowrap flex items-center gap-2 group cursor-pointer relative z-10 flex-shrink-0"
          >
            <span>View All Science Articles ({blogArticles.length})</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </section>

      {/* 6. FREQUENTLY ASKED QUESTIONS (INTERACTIVE ACCORDION) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-noventra-gold/30 shadow-xs text-noventra-forest text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-noventra-gold" />
            <span>Formulation & Purchasing Clarity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-noventra-forest leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
            Transparent answers regarding dosages, ingredient forms, daily usage, and Amazon Prime fulfillment.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {homeFaqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-noventra-gold/25 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-noventra-sand/30 transition-colors"
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-noventra-forest">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center bg-noventra-sand/70 text-noventra-forest transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180 bg-noventra-forest text-noventra-gold' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-gray-600 leading-relaxed font-light border-t border-noventra-sand-200 pt-3">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Link to Full FAQ Page */}
        <div className="text-center pt-2">
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-noventra-forest hover:text-noventra-leaf transition-colors group"
          >
            <span>Have more questions? Visit our complete FAQ Center (10+ Questions)</span>
            <ArrowRight className="w-4 h-4 text-noventra-gold group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </section>

      {/* 7. AMAZON SHOPPING CONFIDENCE & FULFILLMENT */}
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
                productName="AMG Nutra Amazon Storefront"
                size="lg"
                variant="gold"
                className="w-full"
              />
              <span className="text-[11px] text-gray-300">
                Official AMG Nutra Storefront • Verified Prime Stock
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

      {/* Interactive Blog Article Reading Modal (Direct on Home Page) */}
      <BlogArticleModal
        article={selectedArticleModal}
        onClose={() => setSelectedArticleModal(null)}
      />

    </div>
  );
}
