import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkles, Shield, Award, CheckCircle2, Dna, Activity, HeartHandshake } from 'lucide-react';

export default function ProductBottle3D({
  type = 'magnesium', // 'magnesium' | 'glutathione'
  className = '',
  enableTilt = true,
  scale = 1,
  loading = 'lazy'
}) {
  const isMag = type === 'magnesium';
  const cardRef = useRef(null);

  // Mouse tracking 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['8deg', '-8deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);
  const shadowX = useTransform(mouseXSpring, [-0.5, 0.5], [16, -16]);
  const shadowY = useTransform(mouseYSpring, [-0.5, 0.5], [24, 8]);

  const handleMouseMove = (e) => {
    if (!enableTilt || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative flex items-center justify-center select-none cursor-grab active:cursor-grabbing perspective-[1000px] ${className}`}
      style={{ transform: scale === 1 ? undefined : `scale(${scale})` }}
    >
      {/* 3D Container with Parallax Tilt */}
      <motion.div
        style={{
          rotateX: enableTilt ? rotateX : 0,
          rotateY: enableTilt ? rotateY : 0,
          transformStyle: "preserve-3d",
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden"
        }}
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="relative flex flex-col items-center justify-center p-2"
      >
        {/* Ground Ambient Reflection / Shadow */}
        <motion.div
          style={{ x: shadowX, y: shadowY }}
          className="absolute -bottom-6 w-52 sm:w-64 h-8 rounded-full bg-noventra-dark/35 blur-xl pointer-events-none"
        />

        {!isMag ? (
          /* REAL STUDIO PHOTOSHOOT BOTTLE (GLUTATHIONE) - RAZOR SHARP RENDERING */
          <div className="relative w-64 sm:w-72 md:w-80 lg:w-[350px] flex flex-col items-center">
            {/* Ambient Backlight Glow behind photoshoot bottle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 sm:w-64 h-64 sm:h-80 rounded-full bg-gradient-radial from-amber-400/25 via-amber-300/10 to-transparent blur-2xl pointer-events-none" />

            {/* Depth Shadow Layer (separate so img is not blurred by CSS filter) */}
            <div className="absolute inset-x-8 bottom-3 top-16 bg-black/35 rounded-3xl blur-2xl pointer-events-none" />

            <img
              src="/glutathione-bottle.png"
              alt="AMG Nutra Liposomal Glutathione"
              className="relative z-10 w-full h-auto max-h-[460px] sm:max-h-[500px] object-contain pointer-events-none select-none"
              style={{
                imageRendering: '-webkit-optimize-contrast',
                WebkitBackfaceVisibility: 'hidden',
                backfaceVisibility: 'hidden',
                transform: 'translateZ(0)',
                willChange: 'transform'
              }}
              loading={loading}
              decoding="async"
            />
          </div>
        ) : (
          /* BOTTLE STRUCTURE FOR MAGNESIUM (CSS 3D MODEL) */
          <div className="relative w-56 sm:w-64 md:w-72 flex flex-col items-center drop-shadow-2xl">
            
            {/* Bottle Cap (Metallic Gold) */}
            <div className="relative w-28 sm:w-32 h-10 rounded-t-lg bg-gradient-to-r from-amber-700 via-amber-400 to-amber-800 shadow-md border-b border-amber-900 flex flex-col justify-between overflow-hidden z-20">
              {/* Cap Vertical Ridges / Texture */}
              <div className="absolute inset-0 opacity-25 bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,rgba(0,0,0,0.6)_4px,rgba(0,0,0,0.6)_8px)]" />
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-amber-200 via-white to-amber-300 opacity-60" />
              <div className="absolute bottom-0 inset-x-0 h-1 bg-black/40" />
            </div>

            {/* Bottle Neck Ring */}
            <div className="w-32 sm:w-36 h-3 bg-gradient-to-r from-amber-800 via-amber-300 to-amber-900 rounded-sm z-20 shadow-sm" />

            {/* Bottle Shoulder */}
            <div className="w-44 sm:w-52 h-10 rounded-t-3xl bg-gradient-to-r from-[#041a13] via-[#0b3829] to-[#041a13] transition-colors duration-500 z-10 relative overflow-hidden">
              {/* Shoulder Glass Specular Shine */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-4 pointer-events-none" />
            </div>

            {/* Bottle Main Body & Premium Label */}
            <div className="w-52 sm:w-60 h-84 sm:h-96 rounded-b-3xl relative overflow-hidden transition-all duration-500 border-x border-b border-noventra-gold/30 shadow-2xl flex flex-col justify-between p-3 bg-gradient-to-b from-[#07241a] via-[#0a3325] to-[#041610]">
              {/* Glass Curvature Specular Highlights */}
              <div className="absolute left-2 top-0 bottom-0 w-3 bg-gradient-to-r from-white/30 to-transparent rounded-full blur-[1px] pointer-events-none z-30" />
              <div className="absolute right-3 top-0 bottom-0 w-1.5 bg-white/15 rounded-full blur-[1px] pointer-events-none z-30" />

              {/* PRODUCT LABEL EMBED */}
              <div className="relative w-full h-full bg-gradient-to-b from-[#fdfbf7] via-[#faf6ec] to-[#f4ede0] rounded-xl shadow-inner border border-noventra-gold/40 p-3.5 flex flex-col justify-between text-noventra-dark overflow-hidden">
                
                {/* Foil Gold Accent Stripes at Top & Bottom */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-noventra-gold-dark via-noventra-gold-light to-noventra-gold" />
                <div className="absolute bottom-0 inset-x-0 h-1.5 bg-gradient-to-r from-noventra-gold-dark via-noventra-gold-light to-noventra-gold" />

                {/* Label Top: Brand Logo */}
                <div className="flex flex-col items-center pt-1">
                  <img
                    src="/logo.png"
                    alt="AMG NUTRA"
                    className="h-7 sm:h-8 w-auto object-contain filter drop-shadow-sm"
                  />
                  <div className="text-[7.5px] uppercase tracking-[0.25em] text-amber-600 font-bold mt-0.5">
                    MAGNESIUM SUPPLEMENT
                  </div>
                </div>

                {/* Label Center: Product Title & Hero Structure */}
                <div className="flex flex-col items-center text-center my-auto py-1 space-y-1">
                  <h3 className="font-sans text-lg sm:text-xl font-black tracking-tight text-black leading-tight uppercase">
                    MAGNESIUM GLYCINATE
                  </h3>

                  {/* Subtitle Badge */}
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-noventra-forest text-noventra-gold border border-noventra-gold/60 text-[7px] sm:text-[7.5px] font-bold tracking-wider uppercase shadow-sm">
                    120 MG ELEMENTAL MAGNESIUM
                  </div>

                  {/* Subtext description */}
                  <p className="text-[7.5px] sm:text-[8px] text-gray-700 font-medium tracking-tight max-w-[190px]">
                    Pure Mineral Chelate • High Bioavailability
                  </p>
                </div>

                {/* Label Bottom: Servings & Quality Ribbons */}
                <div className="pt-1.5 border-t border-noventra-gold/30 flex items-center justify-between text-[7px] sm:text-[7.5px] text-noventra-forest font-bold">
                  <div className="flex flex-col items-start leading-tight">
                    <span className="text-gray-500 uppercase text-[6px]">Dietary Supplement</span>
                    <span className="text-black font-extrabold">
                      90 VEGETARIAN CAPSULES
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-noventra-forest">
                    <Award className="w-3 h-3 text-noventra-gold-dark" />
                    <span className="text-[6.5px] uppercase font-bold tracking-tight">
                      90 Servings
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        )}
      </motion.div>
    </div>
  );
}
