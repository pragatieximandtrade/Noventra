import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ShieldCheck,
  Eye,
  BookOpen,
  Award,
  CheckCircle2,
  ArrowRight,
  Layers,
  HeartHandshake
} from 'lucide-react';
import { brandInfo, products } from '../data/products';
import AmazonButton from '../components/common/AmazonButton';
import { renderWithFootnotes } from '../components/common/FootnoteSup';

export default function AboutPage() {
  return (
    <div className="space-y-20 md:space-y-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 1. HERO SECTION */}
      <section className="text-center space-y-6 pt-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-noventra-gold/30 shadow-sm text-noventra-forest text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-noventra-gold" />
          <span>About AMG Nutra • Pure Wellness Integrity</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-noventra-forest leading-tight">
          Mindful Supplementation Rooted in <span className="italic font-normal text-noventra-leaf">Transparency.</span>
        </h1>

        <p className="text-lg sm:text-xl font-serif italic text-noventra-leaf max-w-2xl mx-auto">
          "{brandInfo.tagline}"
        </p>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light max-w-2xl mx-auto">
          {brandInfo.philosophy}
        </p>
      </section>

      {/* 2. THE AMG NUTRA PHILOSOPHY & STORY */}
      <section className="bg-white rounded-3xl p-8 sm:p-12 md:p-16 border border-noventra-gold/25 shadow-xl space-y-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 bg-gradient-to-b from-noventra-sand/70 to-white rounded-2xl border border-noventra-gold/30 shadow-inner text-center space-y-6">
            <img
              src="/logo.png"
              alt="AMG NUTRA"
              className="h-16 w-auto object-contain drop-shadow-sm"
            />
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-noventra-leaf">
                Brand Core
              </span>
              <p className="text-xs text-gray-600 font-light">
                Elevate Your Everyday Wellness
              </p>
            </div>
            <div className="w-20 h-[1.5px] bg-noventra-gold/50" />
            <div className="text-xs text-gray-500 italic">
              "What goes on the label is precisely what goes into the bottle."
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-gray-700 leading-relaxed font-light text-sm sm:text-base">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-noventra-forest">
              Our Dedication to Thoughtful Wellness
            </h2>
            
            {brandInfo.about.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}

            <div className="pt-2 flex items-center gap-3">
              <Link
                to="/shop"
                className="px-6 py-3.5 rounded-full bg-noventra-forest hover:bg-noventra-emerald text-white text-xs font-semibold tracking-wide transition-all shadow-md inline-flex items-center gap-2"
              >
                <span>View Our Formulations</span>
                <ArrowRight className="w-4 h-4 text-noventra-gold" />
              </Link>
            </div>
          </div>

        </div>

      </section>

      {/* 3. FOUR CORE BRAND PILLARS */}
      <section className="space-y-10">
        
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-noventra-leaf font-bold">
            The Foundation
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-noventra-forest">
            Four Pillars of Every AMG Nutra Bottle
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="p-8 rounded-3xl bg-white border border-noventra-gold/20 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-noventra-forest text-noventra-gold flex items-center justify-center shadow-md">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-2xl text-noventra-forest">
              1. Thoughtfully Formulated
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed font-light">
              We prioritize bioavailable chelated minerals and synergistic cofactors over cheap, poorly absorbed generic ingredients. Every formula is designed to integrate harmoniously into your daily lifestyle.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-noventra-gold/20 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-noventra-forest text-noventra-gold flex items-center justify-center shadow-md">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-2xl text-noventra-forest">
              2. Transparently Presented
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed font-light">
              No proprietary blends that hide active doses. No ambiguous compound weights. We state exact elemental yields and % Daily Values directly on our labels so you are fully informed.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-noventra-gold/20 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-noventra-forest text-noventra-gold flex items-center justify-center shadow-md">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-2xl text-noventra-forest">
              3. Quality-Conscious Practices
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed font-light">
              We use 100% vegetarian plant capsules (cellulose and water) and clean excipients. We avoid harsh synthetic binders, artificial dyes, chemical colorants, and unnecessary animal gelatin.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-noventra-gold/20 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-noventra-forest text-noventra-gold flex items-center justify-center shadow-md">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-2xl text-noventra-forest">
              4. Informed Wellness Choices
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed font-light">
              We empower consumers through transparent nutritional education. We explain how our nutrients interact with human biochemistry without resorting to unscientific medical claims or fear marketing.
            </p>
          </div>

        </div>

      </section>

      {/* 4. AMAZON PRIME PARTNERSHIP */}
      <section className="bg-gradient-to-r from-noventra-forest to-noventra-emerald text-white rounded-3xl p-8 sm:p-12 shadow-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Official Storefront on Amazon
            </h3>
            <p className="text-sm text-noventra-sand-200/85 leading-relaxed font-light">
              All authentic AMG Nutra formulations are stored in climate-controlled facilities and fulfilled directly via Amazon Prime for guaranteed freshness and fast doorstep arrival.
            </p>
          </div>
          <AmazonButton
            url={brandInfo.amazonStoreUrl}
            productName="AMG Nutra Amazon Collection"
            size="lg"
            variant="gold"
          />
        </div>
      </section>

    </div>
  );
}
