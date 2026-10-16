import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PageWrapper from './components/layout/PageWrapper';
import CinematicPreloader from './components/common/CinematicPreloader';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ShopPage from './pages/ShopPage';
import MagnesiumPage from './pages/MagnesiumPage';
import GlutathionePage from './pages/GlutathionePage';
import QualityPage from './pages/QualityPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsPage from './pages/TermsPage';
import DisclaimerPage from './pages/DisclaimerPage';

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <>
      <CinematicPreloader onFinish={() => setPreloaderDone(true)} />
      
      <Router>
        <PageWrapper>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/products/magnesium-glycinate" element={<MagnesiumPage />} />
            <Route path="/products/liposomal-glutathione" element={<GlutathionePage />} />
            <Route path="/quality" element={<QualityPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </PageWrapper>
      </Router>
    </>
  );
}
