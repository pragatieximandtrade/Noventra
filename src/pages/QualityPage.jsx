import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  CheckCircle2,
  FileCheck,
  Sparkles,
  Award,
  Layers,
  FlaskConical,
  Leaf,
  Info
} from 'lucide-react';
import { brandInfo, fdaDisclaimer } from '../data/products';
import AmazonButton from '../components/common/AmazonButton';
import { renderWithFootnotes } from '../components/common/FootnoteSup';

export default function QualityPage() {
  const standards = [
    {
      title: "Bioavailable Nutrient Selection",
      desc: "We exclusively formulate with highly absorbable nutrient chelates and lipid-encapsulated complexes—such as Magnesium Glycinate and Liposomal Glutathione—ensuring maximum biological utilization.",
      icon: "Sparkles"
    },
    {
      title: "100% Label Accuracy & Elemental Yields",
      desc: "We clearly differentiate between raw compound weights and actual elemental yields (e.g. 120mg pure elemental magnesium per capsule) so you receive precisely what your body needs.",
      icon: "FileCheck"
    },
    {
      title: "Clean Excipients & Vegetarian Capsules",
      desc: "Our capsules are made of plant cellulose and water. We do not use animal gelatin, artificial dyes, chemical flavorings, or harsh synthetic binders.",
      icon: "Leaf"
    },
    {
      title: "FDA Dietary Supplement Compliance",
      desc: "We adhere strictly to dietary supplement regulations and maintain transparent, non-deceptive educational standards without making unsubstantiated disease claims.",
      icon: "ShieldCheck"
    }
  ];

  return (
    <div className="space-y-20 md:space-y-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <section className="text-center space-y-6 pt-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-noventra-gold/30 shadow-sm text-noventra-forest text-xs font-semibold uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5 text-noventra-leaf" />
          <span>Quality & Sourcing Principles</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-noventra-forest">
          Formulation Transparency in Every Dose
        </h1>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light">
          We believe that trust in dietary supplementation is earned through unwavering label honesty, bioavailable nutrient selection, and clean excipient profiles.
        </p>
      </section>

      {/* 4 Quality Standards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {standards.map((std, idx) => (
          <div
            key={idx}
            className="p-8 rounded-3xl bg-white border border-noventra-gold/20 shadow-md space-y-4 hover:shadow-xl transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-noventra-forest text-noventra-gold flex items-center justify-center shadow-md">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h2 className="font-serif font-bold text-2xl text-noventra-forest">
              {std.title}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed font-light">
              {std.desc}
            </p>
          </div>
        ))}
      </section>

      {/* What We Never Include Section */}
      <section className="bg-white rounded-3xl p-8 sm:p-12 border border-noventra-gold/20 shadow-xl space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest text-noventra-leaf font-bold">
            The Clean Standard
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-noventra-forest">
            What AMG Nutra Leaves Out
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 font-light">
            We hold ourselves to a strict non-compromise standard regarding unnecessary additives.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 pt-4 text-center">
          {[
            "No Animal Gelatin",
            "No Artificial Dyes",
            "No Titanium Dioxide",
            "No Synthetic Fillers",
            "No Hidden Blends",
            "No Gluten or Dairy"
          ].map((item, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-noventra-sand border border-noventra-sand-200 text-xs font-semibold text-noventra-forest">
              {renderWithFootnotes(item)}
            </div>
          ))}
        </div>
      </section>

      {/* Action Banner */}
      <section className="bg-noventra-forest text-white rounded-3xl p-8 sm:p-12 text-center space-y-6">
        <h3 className="text-3xl font-serif font-bold">Ready to Experience Pure Formulations?</h3>
        <p className="text-sm text-noventra-sand-200/80 max-w-xl mx-auto font-light">
          Browse our complete catalog on Amazon with official Prime fulfillment and hassle-free protection.
        </p>
        <AmazonButton url={brandInfo.amazonStoreUrl} productName="AMG Nutra Amazon Collection" size="lg" variant="gold" />
      </section>

    </div>
  );
}
