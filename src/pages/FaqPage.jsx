import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown, Sparkles, ShieldCheck, ShoppingBag, Truck } from 'lucide-react';
import { products, brandInfo, fdaDisclaimer } from '../data/products';
import AmazonButton from '../components/common/AmazonButton';

export default function FaqPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: 'magnesium',
      q: "What makes AMG Nutra Magnesium Glycinate gentle on digestion?",
      a: "Magnesium Glycinate binds elemental magnesium to the amino acid glycine. Unlike inorganic forms (such as magnesium oxide) which draw water into the digestive tract and can cause loose stools, glycinate is absorbed intact via peptide/amino acid pathways, resulting in superior tolerability."
    },
    {
      category: 'magnesium',
      q: "Why does each capsule provide 120 mg of elemental magnesium?",
      a: "120 mg represents 29% of the Daily Value for elemental magnesium in a single easy-to-swallow vegetable capsule. This provides a balanced, safe daily dose that complements dietary intake without overwhelming your digestive system."
    },
    {
      category: 'magnesium',
      q: "When is the best time of day to take Magnesium Glycinate?",
      a: "Many individuals take their daily capsule with an evening meal or approximately 30 to 60 minutes before bedtime to complement their evening relaxation ritual."
    },
    {
      category: 'glutathione',
      q: "What is Liposomal Glutathione and why is liposomal delivery used?",
      a: "Glutathione is a tripeptide antioxidant synthesized naturally inside human cells. Unmodified glutathione can be degraded by stomach acids and digestive enzymes. Our formulation uses phospholipid liposomal encapsulation (1000 mg complex delivering 500 mg active glutathione) to protect the compound during digestive transit."
    },
    {
      category: 'glutathione',
      q: "What supporting nutrients are included in AMG Nutra Liposomal Glutathione?",
      a: "Our formula includes Vitamin C (50 mg / 56% DV), Riboflavin B2 (5 mg / 385% DV), Selenium (55 mcg / 100% DV), and Resveratrol (100 mg from Polygonum cuspidatum root) to support synergistic antioxidant and metabolic cellular pathways."
    },
    {
      category: 'glutathione',
      q: "How should I take Liposomal Glutathione?",
      a: "Take 2 capsules daily with water, preferably alongside a meal containing healthy dietary fats to aid nutrient dispersion, or as directed by your healthcare practitioner."
    },
    {
      category: 'purchasing',
      q: "Why does AMG Nutra sell through Amazon?",
      a: "Selling through our official Amazon Storefront enables our customers to enjoy temperature-controlled storage, 1-2 day Amazon Prime delivery across the US, transparent buyer reviews, and 30-day hassle-free customer protection."
    },
    {
      category: 'general',
      q: "Are AMG Nutra capsules 100% vegetarian?",
      a: "Yes. Both AMG Nutra Magnesium Glycinate and Liposomal Glutathione use plant-derived vegetable cellulose capsules and are free from animal gelatin, artificial dyes, and harsh chemical binders."
    },
    {
      category: 'general',
      q: "Are AMG Nutra supplements evaluated by the FDA?",
      a: `In accordance with federal dietary supplement law: ${fdaDisclaimer} Dietary supplements do not require pre-market FDA approval, but our products comply strictly with dietary supplement regulations and labeling guidelines.`
    }
  ];

  const filteredFaqs = activeTab === 'all'
    ? faqs
    : faqs.filter((f) => f.category === activeTab);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-16 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center space-y-4 pt-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-noventra-gold/30 shadow-sm text-noventra-forest text-xs font-semibold uppercase tracking-wider">
          <HelpCircle className="w-3.5 h-3.5 text-noventra-gold" />
          <span>Frequently Asked Questions</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-noventra-forest">
          Clarity on Every Formulation
        </h1>
        <p className="text-sm sm:text-base text-gray-600 font-light max-w-xl mx-auto">
          Find transparent answers regarding dosages, ingredient forms, daily usage, and Amazon fulfillment.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {[
          { id: 'all', label: 'All Questions' },
          { id: 'magnesium', label: 'Magnesium Glycinate' },
          { id: 'glutathione', label: 'Liposomal Glutathione' },
          { id: 'purchasing', label: 'Amazon & Shipping' },
          { id: 'general', label: 'General & Safety' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              setOpenIndex(null);
            }}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              activeTab === tab.id
                ? 'bg-noventra-forest text-white shadow-md'
                : 'bg-white text-noventra-dark hover:bg-noventra-sand border border-noventra-sand-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* FAQ Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-noventra-gold/20 shadow-sm overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-noventra-sand/40 transition-colors"
              >
                <span className="font-serif font-bold text-base sm:text-lg text-noventra-forest">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-noventra-forest flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-noventra-leaf' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-700 leading-relaxed border-t border-gray-100 font-light">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Amazon Purchasing Assistance Card */}
      <div className="p-8 rounded-3xl bg-white border border-noventra-gold/30 shadow-md text-center space-y-4">
        <h3 className="font-serif font-bold text-2xl text-noventra-forest">
          Have a Question About Your Amazon Order?
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 max-w-lg mx-auto font-light">
          For fast order tracking, Prime delivery questions, or returns, please access your Amazon account or reach out to our customer care team.
        </p>
        <div className="pt-2">
          <AmazonButton url={brandInfo.amazonStoreUrl} productName="AMG Nutra Amazon Storefront" size="md" variant="primary" />
        </div>
      </div>

    </div>
  );
}
