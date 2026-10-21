import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ShieldCheck, Mail, ArrowRight, CheckCircle2, Lock } from 'lucide-react';
import { brandInfo, products, fdaDisclaimer } from '../../data/products';
import AmazonButton from '../common/AmazonButton';
import ComplianceDisclaimerBox from '../common/ComplianceDisclaimerBox';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-noventra-dark text-noventra-sand-100 relative overflow-hidden pt-16 pb-12 border-t border-noventra-gold/20">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-noventra-leaf/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-noventra-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Newsletter & Brand Promise Banner */}
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-noventra-gold/20 shadow-2xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-noventra-gold/10 border border-noventra-gold/30 text-amber-300 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>The Noventra Newsletter</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Wellness Education. No Spam. No Hype.
              </h3>
              <p className="text-sm text-noventra-sand-200/80 leading-relaxed max-w-lg">
                Receive evidence-based nutritional insights, ingredient breakdowns, and new batch updates.
              </p>
            </div>

            <div className="lg:col-span-6">
              {subscribed ? (
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-noventra-leaf/20 border border-noventra-leaf/40 text-emerald-300 text-sm">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>Thank you for joining Noventra. Check your inbox for welcome insights.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Mail className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full pl-12 pr-4 py-3.5 rounded-full bg-noventra-charcoal/80 border border-noventra-gold/30 text-white placeholder:text-gray-400 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3.5 rounded-full bg-noventra-gold hover:bg-amber-400 text-noventra-dark font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-amber-400/20"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
              <div className="flex items-center gap-2 text-[11px] text-gray-400 mt-2.5 ml-2">
                <Lock className="w-3 h-3" />
                <span>We respect your privacy. Unsubscribe anytime.</span>
              </div>
            </div>

          </div>
        </div>

        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block">
              <div className="p-3 bg-white rounded-xl inline-block shadow-md">
                <img
                  src="/logo.png"
                  alt="NOVENTRA"
                  className="h-10 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="font-serif italic text-base text-amber-200/90">
              "{brandInfo.tagline}"
            </p>
            <p className="text-xs text-noventra-sand-200/70 leading-relaxed">
              {brandInfo.philosophy}
            </p>
            <div className="pt-2">
              <AmazonButton
                url={brandInfo.amazonStoreUrl}
                productName="Noventra Amazon Store"
                size="sm"
                variant="gold"
              />
            </div>
          </div>

          {/* Col 2: The Formulations */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-300">
              Our Products
            </h4>
            <ul className="space-y-2.5 text-xs text-noventra-sand-200/80">
              <li>
                <Link
                  to="/products/magnesium-glycinate"
                  className="hover:text-white transition-colors block group"
                >
                  <span className="font-semibold text-white group-hover:text-amber-300 transition-colors">
                    Magnesium Glycinate
                  </span>
                  <span className="block text-[11px] text-gray-400">120 mg Elemental • 90 Capsules</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/products/liposomal-glutathione"
                  className="hover:text-white transition-colors block group"
                >
                  <span className="font-semibold text-white group-hover:text-amber-300 transition-colors">
                    Liposomal Glutathione
                  </span>
                  <span className="block text-[11px] text-gray-400">1000 mg Complex • 30 Servings</span>
                </Link>
              </li>
              <li className="pt-1">
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-1.5 text-amber-300 hover:text-amber-200 font-medium"
                >
                  <span>Compare Formulations</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Brand & Science */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-300">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-noventra-sand-200/80">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Noventra
                </Link>
              </li>
              <li>
                <Link to="/quality" className="hover:text-white transition-colors">
                  Quality & Sourcing
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  Wellness Journal & Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  FAQ & Guidelines
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Trust & Transparency */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-300">
              Purchasing & Trust
            </h4>
            <p className="text-xs text-noventra-sand-200/70 leading-relaxed">
              Official Noventra formulations are stored and fulfilled via Amazon Prime for temperature-controlled storage and rapid 1-2 day delivery.
            </p>
            <div className="flex flex-wrap gap-2 pt-1 text-[11px] text-gray-300">
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">100% Vegetarian</span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">Gluten-Free</span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">Zero Artificial Dyes</span>
            </div>
          </div>

        </div>

        {/* FDA Dietary Supplement Mandatory Compliance Box */}
        <ComplianceDisclaimerBox className="my-8" />

        {/* Copyright & Legal Sub-Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 pt-4">
          <div>
            © {new Date().getFullYear()} NOVENTRA. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/disclaimer" className="hover:text-white transition-colors">
              Supplement Disclaimer
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
