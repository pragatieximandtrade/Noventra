import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CinematicPreloader({ onFinish }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Only show preloader on first session visit or quick 1.6s duration
    const hasSeen = sessionStorage.getItem('noventra_seen_preloader');
    if (hasSeen) {
      setIsVisible(false);
      onFinish && onFinish();
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('noventra_seen_preloader', 'true');
      onFinish && onFinish();
    }, 1600);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-noventra-dark text-white overflow-hidden"
        >
          {/* Ambient golden halo glow in background */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 0.35 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="absolute w-96 h-96 rounded-full bg-gradient-to-tr from-noventra-leaf via-noventra-gold to-transparent blur-3xl pointer-events-none"
          />

          {/* Logo container */}
          <div className="relative z-10 flex flex-col items-center text-center px-4">
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative px-8 py-5 bg-white/95 backdrop-blur-xl rounded-3xl border border-noventra-gold/50 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_35px_rgba(212,175,55,0.3)] mb-6"
            >
              <img
                src="/logo.png"
                alt="NOVENTRA"
                className="h-12 md:h-16 w-auto object-contain filter drop-shadow-sm"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-xs md:text-sm font-sans tracking-[0.3em] uppercase text-noventra-sand-200 font-light"
            >
              Elevate Your Everyday Wellness
            </motion.p>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
              className="h-[1.5px] bg-gradient-to-r from-transparent via-noventra-gold to-transparent mt-4"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
