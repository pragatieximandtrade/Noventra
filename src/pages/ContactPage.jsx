import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Clock, ShieldCheck, CheckCircle2, Send, ShoppingBag } from 'lucide-react';
import { brandInfo } from '../data/products';
import AmazonButton from '../components/common/AmazonButton';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    product: 'general',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center space-y-4 pt-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-noventra-gold/30 shadow-sm text-noventra-forest text-xs font-semibold uppercase tracking-wider">
          <MessageSquare className="w-3.5 h-3.5 text-noventra-gold" />
          <span>Customer Support & Inquiries</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-noventra-forest">
          Connect With Noventra
        </h1>
        <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
          Have an inquiry regarding our formulations, label details, or Amazon availability? Our team is dedicated to providing prompt, accurate support.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-noventra-gold/25 shadow-xl">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-noventra-leaf/10 text-noventra-leaf flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-noventra-forest">
                Message Received
              </h2>
              <p className="text-sm text-gray-600 font-light max-w-md mx-auto">
                Thank you for reaching out to Noventra. A member of our wellness support team will review your inquiry and respond within 24–48 business hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', product: 'general', message: '' });
                }}
                className="mt-4 px-6 py-2.5 rounded-full bg-noventra-forest text-white text-xs font-semibold"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-noventra-forest mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Eleanor Vance"
                  className="w-full px-4 py-3 rounded-xl bg-noventra-sand border border-noventra-sand-200 text-noventra-dark text-sm focus:outline-none focus:border-noventra-leaf transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-noventra-forest mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-noventra-sand border border-noventra-sand-200 text-noventra-dark text-sm focus:outline-none focus:border-noventra-leaf transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-noventra-forest mb-1.5">
                  Inquiry Topic
                </label>
                <select
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-noventra-sand border border-noventra-sand-200 text-noventra-dark text-sm focus:outline-none focus:border-noventra-leaf transition-colors"
                >
                  <option value="general">General Brand Inquiry</option>
                  <option value="magnesium">Noventra Magnesium Glycinate</option>
                  <option value="glutathione">Noventra Liposomal Glutathione</option>
                  <option value="amazon">Amazon Order & Delivery Support</option>
                  <option value="wholesale">Retail & Distribution Partnerships</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-noventra-forest mb-1.5">
                  Message Details
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can our team assist your wellness journey?"
                  className="w-full px-4 py-3 rounded-xl bg-noventra-sand border border-noventra-sand-200 text-noventra-dark text-sm focus:outline-none focus:border-noventra-leaf transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-noventra-forest hover:bg-noventra-emerald text-white font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-md flex items-center justify-center gap-2"
              >
                <span>Submit Inquiry</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

        {/* Right Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="p-8 rounded-3xl bg-white border border-noventra-gold/20 shadow-md space-y-4">
            <div className="w-10 h-10 rounded-xl bg-noventra-forest text-noventra-gold flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-xl text-noventra-forest">
              Response Timeframe
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
              Our team operates Monday through Friday, 9:00 AM – 5:00 PM EST. Inquiries are generally responded to within 24 to 48 business hours.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-br from-noventra-forest to-noventra-dark text-white shadow-xl space-y-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 text-amber-300 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-xl text-white">
              Amazon Order Support
            </h3>
            <p className="text-xs sm:text-sm text-noventra-sand-200/80 leading-relaxed font-light">
              For rapid updates regarding shipping tracking numbers, Prime delivery status, or returns on Amazon purchases, please visit your Amazon Order Portal.
            </p>
            <div className="pt-2">
              <AmazonButton
                url={brandInfo.amazonStoreUrl}
                productName="Noventra Amazon Portal"
                size="sm"
                variant="gold"
              />
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
