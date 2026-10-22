import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PageWrapper from './components/layout/PageWrapper';

// HomePage is loaded directly for instantaneous initial render
import HomePage from './pages/HomePage';

// Route-based code splitting for secondary pages to drastically speed up first load
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ShopPage = lazy(() => import('./pages/ShopPage'));
const MagnesiumPage = lazy(() => import('./pages/MagnesiumPage'));
const GlutathionePage = lazy(() => import('./pages/GlutathionePage'));
const QualityPage = lazy(() => import('./pages/QualityPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const FaqPage = lazy(() => import('./pages/FaqPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const DisclaimerPage = lazy(() => import('./pages/DisclaimerPage'));

function PageLoader() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 rounded-full border-2 border-noventra-gold/30 border-t-noventra-forest animate-spin" />
        <span className="text-[11px] font-semibold text-noventra-forest/70 uppercase tracking-widest">
          Loading AMG Nutra...
        </span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <PageWrapper>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/products/magnesium-glycinate" element={<MagnesiumPage />} />
            <Route path="/products/liposomal-glutathione" element={<GlutathionePage />} />
            <Route path="/quality" element={<QualityPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </PageWrapper>
    </Router>
  );
}
