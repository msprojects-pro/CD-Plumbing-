import React from 'react';
import { motion } from 'motion/react';
import { ThumbsUp, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface TrustSectionProps {
  onQuoteClick: () => void;
}

export const TrustSection: React.FC<TrustSectionProps> = ({ onQuoteClick }) => {
  return (
    <section className="py-20 md:py-24 bg-[#EDF6F6] text-[#080B0C] border-t border-b border-[#DDE7E8] relative overflow-hidden">
      {/* Subtle decorative background watermark */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DDE7E8] text-xs font-semibold text-[#35585d] mb-6 shadow-xs">
            <ThumbsUp className="w-3.5 h-3.5 text-[#89BAC1]" />
            <span>Customer Satisfaction</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#080B0C] tracking-tight mb-6">
            Recommended by Customers
          </h2>

          {/* Big Stat Display */}
          <div className="py-6 px-8 my-6 bg-white rounded-2xl border border-[#DDE7E8] shadow-sm max-w-md mx-auto">
            <div className="text-5xl sm:text-6xl font-extrabold tracking-tight text-[#080B0C] tabular-nums">
              100<span className="text-[#89BAC1]">%</span>
            </div>
            <div className="text-sm font-bold uppercase tracking-widest text-[#53767c] mt-2">
              Recommend
            </div>
          </div>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-[#687578] max-w-xl mx-auto leading-relaxed mb-8">
            Customer recommendations reflect the feedback shown on the business's existing profile.
          </p>

          {/* Trust Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-[#53767c] mb-9">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#89BAC1]" />
              <span>Transparent free quotations</span>
            </div>
            <span className="text-[#89BAC1] hidden sm:inline">·</span>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#89BAC1]" />
              <span>Reliable plumbing &amp; oil boiler service</span>
            </div>
          </div>

          {/* CTA */}
          <div>
            <button
              onClick={onQuoteClick}
              className="inline-flex items-center gap-2.5 px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#080B0C] bg-[#89BAC1] hover:bg-[#72a6ad] active:scale-[0.98] rounded-md transition-all shadow-md shadow-[#89BAC1]/20 cursor-pointer group"
            >
              <span>REQUEST A FREE QUOTE</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
