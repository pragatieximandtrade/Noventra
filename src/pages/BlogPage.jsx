import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { getLenis } from '../utils/scroll';
import {
  BookOpen,
  Clock,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  FlaskConical,
  CheckCircle2,
  X,
  Share2,
  ChevronRight,
  Tag,
  Zap,
  Atom,
  Award,
  ExternalLink
} from 'lucide-react';
import { brandInfo, products } from '../data/products';
import { blogArticles } from '../data/blogArticles';
import AmazonButton from '../components/common/AmazonButton';
import ProductBottle3D from '../components/3d/ProductBottle3D';
import ComplianceDisclaimerBox from '../components/common/ComplianceDisclaimerBox';
import BlogArticleModal from '../components/common/BlogArticleModal';
import { renderWithFootnotes } from '../components/common/FootnoteSup';

const renderTextWithFootnotes = renderWithFootnotes;

export default function BlogPage() {
  const [searchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-open article modal if query ?id= is present in URL
  useEffect(() => {
    const articleId = searchParams.get('id');
    if (articleId) {
      const target = blogArticles.find((a) => a.id === articleId);
      if (target) {
        setSelectedArticle(target);
      }
    }
  }, [searchParams]);

  // Lock background scroll and stop Lenis while article modal is open
  useEffect(() => {
    if (selectedArticle) {
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
  }, [selectedArticle]);

  const categories = [
    'All',
    'Detox & Lifestyle',
    'Mineral Science',
    'Antioxidant Defense',
    'Cellular Biochemistry',
    'Supplement Transparency',
    'Quality & Testing',
    'Wellness Science'
  ];

  const filteredArticles = activeCategory === 'All'
    ? blogArticles
    : blogArticles.filter(art => art.category === activeCategory);

  const featuredArticle = blogArticles.find(art => art.featured) || blogArticles[0];

  return (
    <div className="space-y-16 md:space-y-24 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
      
      {/* 1. Header & Hero Intro */}
      <section className="text-center space-y-5 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-noventra-gold/30 shadow-sm text-noventra-forest text-xs font-semibold uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5 text-noventra-gold" />
          <span>The AMG Nutra Journal • Evidence-Based Wellness</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-noventra-forest leading-tight">
          Science, Sourcing & Cellular Health
        </h1>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light max-w-2xl mx-auto">
          Explore in-depth articles on bioavailable nutrient forms, clinical cofactors, label transparency, and the rigorous science behind mindful daily supplementation.
        </p>

        {/* Quick Highlights Strip */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs text-gray-600">
          <span className="inline-flex items-center gap-1.5 bg-noventra-sand/70 px-3 py-1 rounded-full border border-noventra-gold/25 font-medium">
            <FlaskConical className="w-3.5 h-3.5 text-noventra-leaf" />
            <span>Third-Party Lab Tested</span>
          </span>
          <span className="inline-flex items-center gap-1.5 bg-noventra-sand/70 px-3 py-1 rounded-full border border-noventra-gold/25 font-medium">
            <Award className="w-3.5 h-3.5 text-amber-500" />
            <span>cGMP Certified & USFDA Plant</span>
          </span>
          <span className="inline-flex items-center gap-1.5 bg-noventra-sand/70 px-3 py-1 rounded-full border border-noventra-gold/25 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-noventra-leaf" />
            <span>100% Label Transparency</span>
          </span>
        </div>
      </section>

      {/* 2. Featured Article Banner */}
      {featuredArticle && (
        <section>
          <div className="relative rounded-3xl bg-gradient-to-br from-noventra-forest via-[#0f4433] to-noventra-dark text-white p-8 sm:p-12 md:p-14 border border-noventra-gold/40 shadow-2xl overflow-hidden group">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-noventra-gold/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-noventra-leaf/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full bg-noventra-gold text-noventra-dark text-[11px] font-bold uppercase tracking-wider shadow-sm">
                    Featured Article
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-amber-300 text-[11px] font-semibold border border-white/15">
                    {featuredArticle.category}
                  </span>
                  <span className="text-xs text-noventra-sand-200/70 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{featuredArticle.readTime}</span>
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white leading-snug">
                  {renderTextWithFootnotes(featuredArticle.title, true)}
                </h2>

                <p className="text-xs sm:text-sm text-noventra-sand-200/90 leading-relaxed font-light line-clamp-3">
                  {renderTextWithFootnotes(featuredArticle.summary, true)}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setSelectedArticle(featuredArticle)}
                    className="px-6 py-3 rounded-full bg-noventra-gold hover:bg-amber-400 text-noventra-dark font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-amber-400/25 cursor-pointer"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <Link
                    to="/products/magnesium-glycinate"
                    className="text-xs font-semibold text-noventra-sand-200 hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Magnesium Glycinate</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Article Science Visual Callout */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center">
                <div
                  onClick={() => setSelectedArticle(featuredArticle)}
                  className="relative p-5 rounded-3xl bg-white/5 hover:bg-white/10 border border-white/15 hover:border-noventra-gold/50 backdrop-blur-md text-center max-w-xs w-full shadow-2xl space-y-3.5 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center justify-between text-[10px] uppercase font-bold tracking-widest text-amber-300">
                    <span>Molecular Science</span>
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-noventra-gold/20 text-noventra-gold border border-noventra-gold/40">
                      100% Pure Chelate
                    </span>
                  </div>

                  {/* 1:1 Square Image Showcase */}
                  <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-noventra-gold/30 shadow-lg bg-noventra-dark/40">
                    <img
                      src="/blog-magnesium-science.png"
                      alt="Magnesium Glycinate Molecular Chelate Structure"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="eager"
                    />
                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-noventra-dark/60 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Badge on Image */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[10px] text-white font-medium bg-noventra-dark/75 backdrop-blur-sm px-2.5 py-1 rounded-xl border border-white/10">
                      <span>Glycinate Chelate Ring</span>
                      <span className="text-amber-300 font-semibold">{renderTextWithFootnotes('High Bioavailability', true)}</span>
                    </div>
                  </div>

                  <div>
                    <div className="font-serif font-bold text-sm text-white group-hover:text-amber-300 transition-colors">
                      {renderTextWithFootnotes('100% Pure Magnesium Glycinate', true)}
                    </div>
                    <div className="text-[11px] text-noventra-sand-200/80 mt-0.5">
                      {renderTextWithFootnotes('Zero Oxide Spiking • 120mg Elemental Yield', true)}
                    </div>
                  </div>

                  <div className="text-[10px] text-amber-300/80 font-semibold uppercase tracking-wider pt-0.5 flex items-center justify-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>Read Full Science Review</span>
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* 3. Category Filter Tabs */}
      <section className="space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-gray-200">
          <div>
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-noventra-forest">
              Browse All Articles
            </h3>
            <p className="text-xs text-gray-500">
              Filter by biological pathway, ingredient science, or quality standard.
            </p>
          </div>
          <span className="text-xs font-semibold text-noventra-leaf bg-noventra-sand/80 px-3 py-1 rounded-full border border-noventra-gold/20">
            {filteredArticles.length} Article{filteredArticles.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 pt-1">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-noventra-forest text-noventra-gold shadow-md scale-105'
                  : 'bg-white hover:bg-noventra-sand text-gray-700 border border-gray-200 hover:border-noventra-gold/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 4. Articles Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article, idx) => (
          <motion.article
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className="flex flex-col justify-between p-7 rounded-3xl bg-white border border-noventra-gold/25 shadow-sm hover:shadow-xl hover:border-noventra-gold/60 transition-all duration-300 group"
          >
            <div className="space-y-4">
              
              {/* Category & Read Time */}
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                  article.categoryColor === 'amber'
                    ? 'bg-amber-100 text-amber-900 border border-amber-300'
                    : 'bg-emerald-50 text-emerald-900 border border-emerald-300'
                }`}>
                  {article.category}
                </span>
                <span className="text-[11px] text-gray-500 flex items-center gap-1 font-medium">
                  <Clock className="w-3.5 h-3.5 text-gray-400" />
                  <span>{article.readTime}</span>
                </span>
              </div>

              {/* Article Title */}
              <h3
                onClick={() => setSelectedArticle(article)}
                className="font-serif font-bold text-lg text-noventra-forest group-hover:text-noventra-leaf transition-colors cursor-pointer leading-snug line-clamp-2"
              >
                {renderTextWithFootnotes(article.title)}
              </h3>

              {/* Subtitle / Excerpt */}
              <p className="text-xs text-gray-600 font-light leading-relaxed line-clamp-3">
                {renderTextWithFootnotes(article.summary)}
              </p>

              {/* Key Takeaways Preview Pills */}
              <div className="p-3.5 rounded-2xl bg-noventra-sand/50 border border-noventra-gold/20 space-y-1.5">
                <div className="text-[10px] font-bold uppercase tracking-wider text-noventra-forest flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-noventra-gold" />
                  <span>Key Science Insight:</span>
                </div>
                <p className="text-[11px] text-gray-700 leading-snug">
                  {renderTextWithFootnotes(article.keyTakeaways[0])}
                </p>
              </div>

            </div>

            {/* Card Footer: Author & Read CTA */}
            <div className="pt-5 mt-5 border-t border-gray-100 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold text-noventra-forest block">
                  {article.author}
                </span>
                <span className="text-[10px] text-gray-400 block">
                  {article.date}
                </span>
              </div>

              <button
                onClick={() => setSelectedArticle(article)}
                className="inline-flex items-center gap-1 text-xs font-bold text-noventra-forest group-hover:text-noventra-leaf transition-colors cursor-pointer"
              >
                <span>Read</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.article>
        ))}
      </section>

      {/* 5. Bottom Brand Transparency Guarantee Callout */}
      <section className="rounded-3xl bg-white border border-noventra-gold/30 p-8 sm:p-12 shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-noventra-leaf font-bold text-xs uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-noventra-leaf" />
            <span>Formulation Integrity Guarantee</span>
          </div>
          <h3 className="font-serif font-bold text-2xl sm:text-3xl text-noventra-forest">
            Ready to experience thoughtful supplementation?
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
            Every AMG Nutra batch is 100% vegetarian, manufactured in a cGMP certified facility and USFDA approved plant, and third-party lab tested with downloadable Certificates of Analysis.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto flex-shrink-0">
          <Link
            to="/shop"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-noventra-forest hover:bg-noventra-leaf text-white font-semibold text-xs uppercase tracking-wider text-center transition-colors shadow-md"
          >
            All Products
          </Link>
          <AmazonButton
            url={brandInfo.amazonStoreUrl}
            productName="AMG Nutra Store"
            size="md"
            variant="gold"
          />
        </div>
      </section>

      {/* 6. Interactive Article Reading Modal */}
      <BlogArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

    </div>
  );
}
