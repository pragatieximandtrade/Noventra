import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Calendar, Sparkles, ArrowRight } from 'lucide-react';
import { blogArticles } from '../../data/blogArticles';
import BlogArticleModal from './BlogArticleModal';
import { renderWithFootnotes } from './FootnoteSup';

export default function ProductRelatedArticles({
  productId = 'magnesium', // 'magnesium' | 'glutathione'
  badgeText = 'Evidence-Based Nutrition & Science',
  title,
  subtitle,
  customArticleIds
}) {
  const [selectedArticleModal, setSelectedArticleModal] = useState(null);

  // Curate top 3 related articles per product
  const defaultArticleIds = {
    magnesium: [
      'science-nighttime-recovery-magnesium-glycinate',
      'magnesium-glycinate-vs-oxide',
      'magnesium-glycinate-sleep-stress-form-matters'
    ],
    glutathione: [
      'glutathione-master-antioxidant-cellular-decline',
      'liposomal-glutathione-absorption',
      'everyday-environmental-detox'
    ]
  };

  const targetIds = customArticleIds || defaultArticleIds[productId] || [];

  let articles = targetIds
    .map(id => blogArticles.find(a => a.id === id))
    .filter(Boolean)
    .slice(0, 3);

  // Fallback if not found by specific IDs
  if (articles.length < 3) {
    const fallback = blogArticles.filter(
      a => a.relatedProduct === productId && !articles.some(exist => exist.id === a.id)
    );
    articles = [...articles, ...fallback].slice(0, 3);
  }

  const defaultTitle = productId === 'magnesium'
    ? 'The Science Behind Magnesium Glycinate'
    : 'The Science Behind Liposomal Glutathione';

  const defaultSubtitle = productId === 'magnesium'
    ? 'Explore peer-reviewed publications and clinical studies on chelation bioavailability, GABAergic neurochemistry, and restorative sleep architecture.'
    : 'Explore peer-reviewed publications on liposomal phospholipid bioavailability, master antioxidant redox recycling, and cellular detoxification.';

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Section Header with "Explore All Articles" Button */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-noventra-gold/20">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-noventra-gold/30 shadow-xs text-noventra-forest text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-noventra-gold" />
            <span>{badgeText}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-noventra-forest leading-tight">
            {title || defaultTitle}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
            {subtitle || defaultSubtitle}
          </p>
        </div>

        {/* Small "Explore All Articles" Button matching Home Page */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-noventra-forest hover:bg-noventra-leaf text-white font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg flex-shrink-0 group self-start md:self-auto"
        >
          <span>Explore All Articles ({blogArticles.length})</span>
          <ArrowRight className="w-4 h-4 text-noventra-gold group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* 3 Featured Related Blog Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {articles.map((article) => (
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

                {/* Key Research Finding Pill */}
                {article.keyTakeaways && article.keyTakeaways.length > 0 && (
                  <div className="p-3.5 rounded-2xl bg-noventra-sand/60 border border-noventra-gold/25 space-y-1">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-noventra-forest flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-noventra-gold flex-shrink-0" />
                      <span>Key Research Finding:</span>
                    </div>
                    <p className="text-xs text-gray-700 leading-snug line-clamp-2">
                      {renderWithFootnotes(article.keyTakeaways[0])}
                    </p>
                  </div>
                )}
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

      {/* In-Page Blog Article Modal */}
      <BlogArticleModal
        article={selectedArticleModal}
        onClose={() => setSelectedArticleModal(null)}
      />

    </section>
  );
}
