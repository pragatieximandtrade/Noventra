import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  ShieldAlert,
  Flame,
  Globe,
  Leaf,
  CheckCircle2,
  ChevronDown,
  Info,
  Clock,
  ExternalLink,
  ShieldCheck,
  Zap,
  Activity,
  Award,
  Atom,
  HeartHandshake,
  Dna,
  Check,
  FlaskConical
} from 'lucide-react';
import { products, fdaDisclaimer, brandInfo } from '../data/products';
import ProductBottle3D from '../components/3d/ProductBottle3D';
import MolecularCanvas from '../components/3d/MolecularCanvas';
import AmazonButton from '../components/common/AmazonButton';
import SupplementFactsModal from '../components/common/SupplementFactsModal';
import CoaModal from '../components/common/CoaModal';
import CoaSection from '../components/common/CoaSection';
import ComparisonSection from '../components/common/ComparisonSection';

export default function GlutathionePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [coaModalOpen, setCoaModalOpen] = useState(false);
  const [activeIngredientCard, setActiveIngredientCard] = useState('card-1');
  const [activeFaq, setActiveFaq] = useState(null);

  const product = products.glutathione;
  const facts = product.supplementFacts;
  const edu = product.education;

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const getCardIcon = (id) => {
    switch (id) {
      case 'card-1': return <ShieldAlert className="w-6 h-6 text-noventra-gold" />;
      case 'card-2': return <Sparkles className="w-6 h-6 text-amber-400" />;
      case 'card-3': return <Flame className="w-6 h-6 text-orange-400" />;
      case 'card-4': return <Globe className="w-6 h-6 text-emerald-400" />;
      case 'card-5': return <Leaf className="w-6 h-6 text-green-500" />;
      default: return <Sparkles className="w-6 h-6 text-noventra-gold" />;
    }
  };

  const getPillarIcon = (idx) => {
    switch (idx) {
      case 0: return <Atom className="w-5 h-5 text-noventra-gold" />;
      case 1: return <ShieldCheck className="w-5 h-5 text-noventra-gold" />;
      case 2: return <Sparkles className="w-5 h-5 text-noventra-gold" />;
      case 3: return <Activity className="w-5 h-5 text-noventra-gold" />;
      case 4: return <Dna className="w-5 h-5 text-noventra-gold" />;
      case 5: return <HeartHandshake className="w-5 h-5 text-noventra-gold" />;
      default: return <Sparkles className="w-5 h-5 text-noventra-gold" />;
    }
  };

  return (
    <div className="space-y-24 md:space-y-32 pb-20 overflow-hidden">
      
      {/* 1. HERO SECTION & 3D BOTTLE SHOWCASE WITH MOLECULAR PARTICLES */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-6 pb-12 px-4 sm:px-6 lg:px-8">
        
        {/* Ambient Molecular Lights */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-gradient-radial from-amber-400/15 via-noventra-leaf/10 to-transparent blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Column: 3D Bottle with Molecular Particles Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex items-center justify-center min-h-[480px] order-2 lg:order-1"
          >
            <MolecularCanvas />
            <div className="relative z-10">
              <ProductBottle3D type="glutathione" scale={1} />
            </div>
          </motion.div>

          {/* Right Column: Copy & Formulated Nutrient Badges */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-6 space-y-6 text-center lg:text-left order-1 lg:order-2"
          >
            {/* Category & Tagline Badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-noventra-forest text-noventra-gold border border-noventra-gold/50 shadow-sm text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-noventra-gold" />
                <span>{product.badgeTitle}</span>
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/80 border border-noventra-sand-200 text-gray-700 text-xs font-medium">
                Advanced Liposomal Formulation
              </span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-noventra-forest leading-tight">
                {product.subtitle}
              </h1>
              <p className="font-serif italic text-lg sm:text-xl text-noventra-leaf mt-1">
                L-Glutathione Base Powered by a Synergistic Nutrient Complex
              </p>
            </div>

            {/* Subheadline & Product Philosophy */}
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
              {product.aboutProduct}
            </p>

            {/* Numerical Reveals Information Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              
              <div className="p-4 rounded-2xl bg-white border border-noventra-gold/40 shadow-md">
                <span className="text-xs text-gray-500 font-medium block">Core Active Ingredient</span>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-noventra-forest block mt-0.5">
                  1000 mg
                </span>
                <span className="text-[11px] text-noventra-leaf font-bold">500mg Pure L-Glutathione</span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-noventra-gold/40 shadow-md">
                <span className="text-xs text-gray-500 font-medium block">Supporting Matrix</span>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-noventra-forest block mt-0.5">
                  4 Co-Actives
                </span>
                <span className="text-[11px] text-noventra-leaf font-bold">Vit C, B2, Selenium, Resveratrol</span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-noventra-gold/40 shadow-md col-span-2 sm:col-span-1">
                <span className="text-xs text-gray-500 font-medium block">Packaging</span>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-noventra-forest block mt-0.5">
                  60 Caps
                </span>
                <span className="text-[11px] text-noventra-leaf font-bold">30 Servings (2/Day)</span>
              </div>

            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 pt-4">
              <AmazonButton
                url={product.amazonUrl}
                productName={product.name}
                size="md"
                variant="gold"
              />
              <button
                onClick={() => setModalOpen(true)}
                className="px-6 py-2.5 sm:px-7 sm:py-3 rounded-full bg-white hover:bg-noventra-sand border border-noventra-forest/30 text-noventra-forest font-semibold text-xs uppercase tracking-wider transition-all shadow-sm text-center"
              >
                View Supplement Facts
              </button>
            </div>

            {/* Vegetarian Note & cGMP certification */}
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
                <CheckCircle2 className="w-4 h-4 text-noventra-leaf" />
                <span>100% Vegan</span>
              </span>
            </div>

          </motion.div>

        </div>
      </section>

      {/* 2. SIX DAILY WELLNESS SUPPORT PILLARS (FROM PRODUCT LABEL RIBBON) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-noventra-leaf font-bold">
            Targeted Physiological Roles
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-noventra-forest">
            Daily Wellness Support For:
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 font-light">
            Formulated around L-Glutathione to provide comprehensive multi-pathway support throughout your body.
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

      {/* 3. CORE L-GLUTATHIONE ARCHITECTURE & 5 COMBINATION INGREDIENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-noventra-leaf font-bold">
            Formula Formulation Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-noventra-forest">
            L-Glutathione Core with Supporting Synergistic Cofactors
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 font-light leading-relaxed">
            L-Glutathione is the <strong>primary active anchor</strong> of this formula. To maximize its biological efficiency, we combine it with four supporting nutrients that participate directly in the cellular glutathione regeneration cycle.
          </p>
        </div>

        {/* 5 Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {edu.cards.map((card) => {
            const isSelected = activeIngredientCard === card.id;

            return (
              <motion.div
                key={card.id}
                onMouseEnter={() => setActiveIngredientCard(card.id)}
                onClick={() => setActiveIngredientCard(card.id)}
                whileHover={{ y: -4 }}
                className={`cursor-pointer p-6 sm:p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-gradient-to-b from-white via-amber-50/40 to-white border-noventra-gold shadow-xl ring-2 ring-noventra-gold/40'
                    : 'bg-white border-noventra-sand-200 hover:border-noventra-gold/40 shadow-sm hover:shadow-md'
                } ${card.id === 'card-1' ? 'md:col-span-2 lg:col-span-1 border-amber-400 bg-amber-50/30' : ''}`}
              >
                <div className="space-y-4">
                  {/* Card Header */}
                  <div className="flex items-start justify-between">
                    <div className="p-3 rounded-2xl bg-noventra-forest text-white shadow-md">
                      {getCardIcon(card.id)}
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                      card.id === 'card-1'
                        ? 'bg-amber-400 text-noventra-dark border-amber-500 font-extrabold'
                        : 'bg-amber-100 text-amber-900 border-amber-200'
                    }`}>
                      {card.tag}
                    </span>
                  </div>

                  {/* Title & Amount */}
                  <div>
                    <h3 className="font-serif font-bold text-lg sm:text-xl text-noventra-forest">
                      {card.name}
                    </h3>
                    <div className="flex items-baseline gap-2 mt-1 flex-nowrap whitespace-nowrap">
                      <span className="text-xl sm:text-2xl font-serif font-extrabold text-noventra-leaf whitespace-nowrap">
                        {card.amount}
                      </span>
                      <span className="text-xs font-semibold text-gray-500 whitespace-nowrap">
                        ({card.dv})
                      </span>
                    </div>
                    <p className="text-xs font-medium text-amber-800/90 mt-0.5">
                      {card.details}
                    </p>
                  </div>

                  {/* Educational Content */}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light pt-2 border-t border-gray-100">
                    {card.role}
                  </p>
                </div>

                <div className="pt-4 mt-2 flex items-center text-[11px] text-noventra-leaf font-semibold">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Exact Label Yield
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </section>

      {/* 4. FORMULATION STANDARDS & QUALITY EXCELLENCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="bg-gradient-to-r from-noventra-forest via-noventra-emerald to-noventra-dark text-white rounded-3xl p-8 sm:p-12 shadow-2xl space-y-8">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-bold block">
              Formulation Standards
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Purity, Bioavailability & Rigorous Testing
            </h3>
            <p className="text-xs sm:text-sm text-noventra-sand-200/85 leading-relaxed font-light">
              Every batch of Noventra Liposomal Glutathione is engineered with precision active dosages, verified cofactor synergy, third-party lab tested, and manufactured in a cGMP certified facility and USFDA approved plant under rigorous quality controls.
            </p>
          </div>

          {/* 4 Formulation Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2 border-t border-white/10">
            {product.labelFeatures.map((feat, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2 hover:bg-white/10 transition-colors">
                <div className="text-amber-300 font-bold text-xs uppercase tracking-wider">
                  {feat.title}
                </div>
                <p className="text-xs text-noventra-sand-200/80 leading-relaxed font-light">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </section>

      {/* 5. NOVENTRA VS. TYPICAL MARKET ALTERNATIVES COMPARISON */}
      <ComparisonSection product={product} />

      {/* 6. OFFICIAL SUPPLEMENT FACTS PANEL & OTHER INGREDIENTS */}
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
                Serving Size: 2 Capsules
              </div>
              <div className="text-xs font-semibold border-b-8 border-black pb-1 mb-2">
                Servings Per Container: 30
              </div>

              <div className="flex items-center justify-between text-xs font-bold border-b-2 border-black pb-1.5 mb-1">
                <span>Amount Per Serving</span>
                <span className="w-24 text-right">%DV</span>
              </div>

              <div className="divide-y divide-gray-200 text-xs font-medium">
                {facts.nutrients.map((item, idx) => (
                  <div key={idx} className="py-2.5 flex items-start justify-between text-xs">
                    <div className="flex-1 pr-2">
                      <span className="font-bold text-black">{item.name}</span>
                      {item.subtext && (
                        <div className="text-[11px] text-noventra-leaf font-bold italic mt-0.5">{item.subtext}</div>
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

              <div className="border-t-4 border-black pt-2 mt-3 text-[11px] text-gray-600">
                {facts.footnote}
              </div>
            </div>

            {/* Other Ingredients & Suggested Use */}
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
              {['NON-GMO', 'GLUTEN FREE', 'DAIRY FREE', 'SOY FREE', 'VEGAN', 'THIRD PARTY LAB TESTED'].map((tag, i) => (
                <span key={i} className="px-2.5 py-1 rounded-full bg-emerald-50 border border-noventra-leaf/30 text-noventra-leaf">
                  ✓ {tag}
                </span>
              ))}
            </div>

            {/* FDA Disclaimer Box */}
            <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-[11px] text-amber-900 leading-snug">
              <strong>FDA Notice: </strong>{fdaDisclaimer}
            </div>

          </div>

          {/* Right: Formulation Synergy Details & Manufacturer Info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-gradient-to-br from-noventra-dark to-noventra-forest text-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold">
                <Info className="w-3.5 h-3.5" />
                <span>Multi-Nutrient Synergy</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                How the Combination Amplifies L-Glutathione
              </h3>

              <p className="text-sm text-noventra-sand-200/90 leading-relaxed font-light">
                In biological systems, glutathione continuously oxidizes into GSSG as it neutralizes free radicals. By combining L-Glutathione with key synergistic cofactors, this formula supports continuous regeneration:
              </p>

              <div className="space-y-3 text-xs text-noventra-sand-200">
                <div className="p-3 rounded-xl bg-white/10 border border-white/10 flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-amber-300 flex-shrink-0 mt-0.5" />
                  <span><strong>Vitamin C (50 mg):</strong> Essential water-soluble antioxidant that actively regenerates reduced glutathione.</span>
                </div>
                <div className="p-3 rounded-xl bg-white/10 border border-white/10 flex items-start gap-2.5">
                  <Flame className="w-4 h-4 text-orange-300 flex-shrink-0 mt-0.5" />
                  <span><strong>Riboflavin B2 (5 mg):</strong> Powers the FAD coenzyme required by the glutathione reductase recycling enzyme.</span>
                </div>
                <div className="p-3 rounded-xl bg-white/10 border border-white/10 flex items-start gap-2.5">
                  <Globe className="w-4 h-4 text-emerald-300 flex-shrink-0 mt-0.5" />
                  <span><strong>Selenium Yeast (55 mcg):</strong> Integral structural mineral of glutathione peroxidase.</span>
                </div>
                <div className="p-3 rounded-xl bg-white/10 border border-white/10 flex items-start gap-2.5">
                  <Leaf className="w-4 h-4 text-green-300 flex-shrink-0 mt-0.5" />
                  <span><strong>Resveratrol (100 mg):</strong> Botanical polyphenol providing complementary cellular balance.</span>
                </div>
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

            {/* Distribution & Manufacturer Info */}
            <div className="p-6 rounded-2xl bg-white border border-noventra-sand-200 shadow-sm space-y-2 text-xs text-gray-700">
              <strong className="text-noventra-forest uppercase tracking-wider block text-[11px]">
                Distributed By:
              </strong>
              <div className="font-semibold text-noventra-forest">NOVENTRA</div>
              <p className="text-gray-600">{brandInfo.address}</p>
              <div className="text-noventra-leaf font-medium">{brandInfo.website}</div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. CERTIFICATE OF ANALYSIS (COA) THIRD-PARTY LAB VERIFICATION */}
      <CoaSection
        product={product}
        onOpenCoa={() => setCoaModalOpen(true)}
      />

      {/* 7. PRODUCT FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-widest text-noventra-leaf font-bold">Answers & Clarity</span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-noventra-forest">
            Liposomal Glutathione Questions
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
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 font-light">
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
