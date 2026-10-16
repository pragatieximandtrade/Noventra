import React from 'react';
import { ExternalLink, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AmazonButton({
  url,
  productName,
  variant = 'primary', // 'primary' | 'secondary' | 'gold' | 'compact'
  className = '',
  showPrime = true,
  size = 'md' // 'sm' | 'md' | 'lg'
}) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs gap-2',
    md: 'px-6 py-2.5 sm:px-7 sm:py-3 text-xs sm:text-sm gap-2.5',
    lg: 'px-7 py-3 sm:px-8 sm:py-3.5 text-xs sm:text-sm md:text-base gap-2.5'
  };

  const variantStyles = {
    primary: 'bg-gradient-to-r from-[#FF9900] via-[#FF8C00] to-[#E67A00] text-noventra-dark font-semibold shadow-md hover:shadow-orange-500/25 border border-amber-300/40',
    gold: 'bg-gradient-to-r from-noventra-gold via-amber-400 to-noventra-gold-dark text-noventra-dark font-semibold shadow-md hover:shadow-amber-400/30 border border-amber-200/60',
    secondary: 'bg-noventra-emerald text-white hover:bg-noventra-forest border border-noventra-gold/30 hover:border-noventra-gold shadow-md',
    dark: 'bg-noventra-dark text-white hover:bg-noventra-charcoal border border-amber-500/30 hover:border-amber-400 shadow-md'
  };

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center rounded-full font-semibold tracking-wide transition-all duration-300 relative group overflow-hidden whitespace-nowrap select-none ${sizeClasses[size]} ${variantStyles[variant] || variantStyles.primary} ${className}`}
      aria-label={`Shop ${productName || 'Noventra'} on Amazon`}
    >
      {/* Subtle Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

      <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 transition-transform group-hover:rotate-6" />
      
      <span className="whitespace-nowrap leading-none font-semibold">
        Shop on Amazon
      </span>

      {showPrime && (
        <span className="inline-flex items-center text-[9px] sm:text-[10px] font-black px-2 py-0.5 rounded-full bg-black/15 text-noventra-dark tracking-wider uppercase flex-shrink-0 leading-none border border-black/10">
          prime
        </span>
      )}

      <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0" />
    </motion.a>
  );
}
