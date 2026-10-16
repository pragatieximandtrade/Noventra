import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, ChevronDown, Sparkles, ShieldCheck, ShoppingBag } from 'lucide-react';
import { products, brandInfo } from '../../data/products';
import AmazonButton from '../common/AmazonButton';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const location = useLocation();

  // Real-time hardware-accelerated scroll progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 35,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
      name: 'Products',
      isDropdown: true,
      items: [
        {
          name: 'Magnesium Glycinate',
          sub: '120mg Elemental • 90 Servings',
          path: '/products/magnesium-glycinate',
          badge: 'Everyday Relaxation'
        },
        {
          name: 'Liposomal Glutathione',
          sub: '1000mg Complex • 5-in-1 Synergy',
          path: '/products/liposomal-glutathione',
          badge: 'Antioxidant Defense'
        },
        {
          name: 'Explore All Products',
          sub: 'Side-by-side comparison',
          path: '/shop',
          isShopAll: true
        }
      ]
    },
    { name: 'Quality & Sourcing', path: '/quality' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-noventra-sand/90 backdrop-blur-md shadow-md border-b border-noventra-sand-200/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      {/* Real-time Hardware-Accelerated Scroll Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-noventra-leaf via-noventra-gold to-amber-400 origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src="/logo.png"
              alt="NOVENTRA"
              className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, idx) => {
              if (link.isDropdown) {
                return (
                  <div
                    key={idx}
                    className="relative"
                    onMouseEnter={() => setProductDropdownOpen(true)}
                    onMouseLeave={() => setProductDropdownOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 ${
                        location.pathname.startsWith('/products') || location.pathname === '/shop'
                          ? 'text-noventra-leaf font-semibold'
                          : 'text-noventra-dark/80 hover:text-noventra-forest'
                      }`}
                      aria-expanded={productDropdownOpen}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          productDropdownOpen ? 'rotate-180 text-noventra-leaf' : ''
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {productDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 top-full mt-2 w-80 rounded-2xl bg-white/95 backdrop-blur-lg shadow-2xl border border-noventra-gold/20 p-2.5 z-50 overflow-hidden before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3"
                        >
                          <div className="space-y-1">
                            {link.items.map((item, itemIdx) => (
                              <Link
                                key={itemIdx}
                                to={item.path}
                                className={`block p-3 rounded-xl transition-all text-left ${
                                  item.isShopAll
                                    ? 'bg-noventra-sand hover:bg-noventra-sand-200 text-left text-xs font-semibold text-noventra-forest border-t border-noventra-sand-200 mt-1'
                                    : 'hover:bg-noventra-sand hover:translate-x-1'
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <span className="font-serif font-bold text-noventra-forest text-sm">
                                    {item.name}
                                  </span>
                                  {item.badge && (
                                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-noventra-leaf/10 text-noventra-leaf">
                                      {item.badge}
                                    </span>
                                  )}
                                </div>
                                {item.sub && (
                                  <p className="text-[11px] text-gray-500 mt-0.5 text-left">
                                    {item.sub}
                                  </p>
                                )}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={idx}
                  to={link.path}
                  className={`text-sm font-medium relative transition-colors duration-200 ${
                    isActive
                      ? 'text-noventra-leaf font-semibold'
                      : 'text-noventra-dark/80 hover:text-noventra-forest'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-noventra-leaf rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Action: Amazon CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/shop"
              className="text-xs uppercase tracking-wider font-semibold text-noventra-forest hover:text-noventra-leaf px-3 py-2"
            >
              Shop Catalog
            </Link>
            <AmazonButton
              url={brandInfo.amazonStoreUrl}
              productName="Noventra Store"
              size="sm"
              variant="primary"
            />
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link to="/shop" className="p-2 rounded-full bg-noventra-sand hover:bg-noventra-sand-200 text-noventra-forest">
              <ShoppingBag className="w-5 h-5" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-noventra-sand hover:bg-noventra-sand-200 text-noventra-forest transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-Over Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-noventra-gold/20 shadow-2xl px-6 py-6 overflow-hidden"
          >
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-lg font-serif font-bold text-noventra-forest hover:text-noventra-leaf py-1 border-b border-gray-100"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-lg font-serif font-bold text-noventra-forest hover:text-noventra-leaf py-1 border-b border-gray-100"
              >
                About Noventra
              </Link>

              {/* Mobile Product Section */}
              <div className="py-2 bg-noventra-sand/60 rounded-xl p-3 border border-noventra-sand-200">
                <span className="text-[11px] uppercase tracking-widest text-noventra-leaf font-bold block mb-2">
                  Our Products
                </span>
                <div className="space-y-2">
                  <Link
                    to="/products/magnesium-glycinate"
                    className="flex items-center justify-between p-2 rounded-lg bg-white shadow-sm"
                  >
                    <div>
                      <div className="font-serif font-bold text-sm text-noventra-forest">Magnesium Glycinate</div>
                      <div className="text-[10px] text-gray-500">120mg Elemental • 90 Servings</div>
                    </div>
                    <span className="text-[10px] bg-noventra-leaf/10 text-noventra-leaf font-semibold px-2 py-0.5 rounded-full">
                      Relaxation
                    </span>
                  </Link>

                  <Link
                    to="/products/liposomal-glutathione"
                    className="flex items-center justify-between p-2 rounded-lg bg-white shadow-sm"
                  >
                    <div>
                      <div className="font-serif font-bold text-sm text-noventra-forest">Liposomal Glutathione</div>
                      <div className="text-[10px] text-gray-500">1000mg Complex • 5 Nutrients</div>
                    </div>
                    <span className="text-[10px] bg-noventra-gold/20 text-noventra-forest font-semibold px-2 py-0.5 rounded-full">
                      Antioxidant
                    </span>
                  </Link>
                </div>
              </div>

              <Link
                to="/shop"
                className="text-base font-semibold text-noventra-forest hover:text-noventra-leaf py-1"
              >
                Explore All Products
              </Link>
              <Link
                to="/quality"
                className="text-base font-semibold text-noventra-forest hover:text-noventra-leaf py-1"
              >
                Quality & Transparency
              </Link>
              <Link
                to="/faq"
                className="text-base font-semibold text-noventra-forest hover:text-noventra-leaf py-1"
              >
                FAQ
              </Link>
              <Link
                to="/contact"
                className="text-base font-semibold text-noventra-forest hover:text-noventra-leaf py-1"
              >
                Contact
              </Link>

              <div className="pt-4 border-t border-gray-200 flex flex-col gap-2.5">
                <AmazonButton
                  url={brandInfo.amazonStoreUrl}
                  productName="Noventra Store"
                  size="md"
                  className="w-full"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
