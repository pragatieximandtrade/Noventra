import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { initLenis } from '../../utils/scroll';
import Navbar from './Navbar';
import Footer from './Footer';

export default function PageWrapper({ children }) {
  const location = useLocation();

  useEffect(() => {
    const lenis = initLenis();
    window.scrollTo(0, 0);
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-noventra-sand text-noventra-dark relative selection:bg-noventra-leaf selection:text-white">
      <Navbar />

      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="flex-grow pt-20 md:pt-24"
      >
        {children}
      </motion.main>

      <Footer />
    </div>
  );
}
