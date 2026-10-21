import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, ShieldCheck, ArrowRight, CheckCircle2, SlidersHorizontal, Info } from 'lucide-react';
import { products, brandInfo } from '../data/products';
import ProductBottle3D from '../components/3d/ProductBottle3D';
import AmazonButton from '../components/common/AmazonButton';
import SupplementFactsModal from '../components/common/SupplementFactsModal';
import { renderWithFootnotes } from '../components/common/FootnoteSup';

export default function ShopPage() {
  const [filter, setFilter] = useState('all');
  const [selectedProductModal, setSelectedProductModal] = useState(null);

  const productList = [
    {
      ...products.magnesium,
      tag: 'relaxation',
      tagLabel: 'Everyday Relaxation & Energy'
    },
    {
      ...products.glutathione,
      tag: 'antioxidant',
      tagLabel: 'Cellular Antioxidant Complex'
    }
  ];

  const filtered = filter === 'all'
    ? productList
    : productList.filter((p) => p.tag === filter);

  return (
    <div className="space-y-16 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center space-y-4 pt-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-noventra-gold/30 shadow-sm text-noventra-forest text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-noventra-gold" />
          <span>The Complete Collection</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-noventra-forest">
          Explore Noventra Formulations
        </h1>
        <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
          Pure, bioavailable dietary supplements formulated with full label transparency and fulfilled directly through Amazon Prime.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
            filter === 'all'
              ? 'bg-noventra-forest text-white shadow-md'
              : 'bg-white text-noventra-dark hover:bg-noventra-sand border border-noventra-sand-200'
          }`}
        >
          All Products (2)
        </button>
        <button
          onClick={() => setFilter('relaxation')}
          className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
            filter === 'relaxation'
              ? 'bg-noventra-forest text-white shadow-md'
              : 'bg-white text-noventra-dark hover:bg-noventra-sand border border-noventra-sand-200'
          }`}
        >
          Magnesium Chelate
        </button>
        <button
          onClick={() => setFilter('antioxidant')}
          className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
            filter === 'antioxidant'
              ? 'bg-noventra-forest text-white shadow-md'
              : 'bg-white text-noventra-dark hover:bg-noventra-sand border border-noventra-sand-200'
          }`}
        >
          Antioxidant Complex
        </button>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {filtered.map((prod) => (
          <motion.div
            key={prod.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl border border-noventra-gold/30 shadow-xl overflow-hidden flex flex-col justify-between hover:border-noventra-gold transition-all duration-300 group"
          >
            {/* Top Showcase with 3D Bottle */}
            <div className="p-8 bg-gradient-to-b from-noventra-sand/60 to-white flex items-center justify-center min-h-[360px] relative">
              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white border border-noventra-gold/30 text-noventra-leaf shadow-sm">
                  {prod.tagLabel}
                </span>
              </div>
              <div className="relative z-10">
                <ProductBottle3D type={prod.id === 'magnesium-glycinate' ? 'magnesium' : 'glutathione'} scale={0.95} />
              </div>
            </div>

            {/* Bottom Content & CTAs */}
            <div className="p-6 sm:p-8 space-y-6 flex-grow flex flex-col justify-between border-t border-noventra-sand-200">
              
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-noventra-forest">
                      {prod.name}
                    </h2>
                    <p className="text-xs font-serif italic text-noventra-leaf mt-0.5">
                      "{prod.subtitle}"
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                  {renderWithFootnotes(prod.description)}
                </p>

                {/* Specs List */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <div className="p-2.5 rounded-xl bg-noventra-sand/70 border border-noventra-sand-200">
                    <span className="text-[10px] text-gray-500 block uppercase">Serving Size</span>
                    <span className="text-xs font-bold text-noventra-forest">{prod.servingSize}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-noventra-sand/70 border border-noventra-sand-200">
                    <span className="text-[10px] text-gray-500 block uppercase">Supply</span>
                    <span className="text-xs font-bold text-noventra-forest">{prod.supplyDays}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <div className="flex flex-col sm:flex-row gap-3">
                  <AmazonButton
                    url={prod.amazonUrl}
                    productName={prod.name}
                    size="md"
                    variant={prod.id === 'magnesium-glycinate' ? 'primary' : 'gold'}
                    className="w-full sm:flex-1"
                  />
                  <Link
                    to={`/products/${prod.slug}`}
                    className="px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-noventra-forest hover:bg-noventra-emerald text-white text-xs font-semibold tracking-wide transition-all shadow-md text-center flex items-center justify-center whitespace-nowrap"
                  >
                    View Details
                  </Link>
                </div>

                <button
                  onClick={() => setSelectedProductModal(prod)}
                  className="w-full text-center text-xs text-noventra-forest font-semibold hover:text-noventra-leaf transition-colors py-1 flex items-center justify-center gap-1.5"
                >
                  <Info className="w-3.5 h-3.5 text-noventra-gold" />
                  <span>Inspect Supplement Facts Panel</span>
                </button>
              </div>

            </div>
          </motion.div>
        ))}
      </div>

      {/* Supplement Facts Modal */}
      <SupplementFactsModal
        isOpen={Boolean(selectedProductModal)}
        onClose={() => setSelectedProductModal(null)}
        product={selectedProductModal}
      />

    </div>
  );
}
