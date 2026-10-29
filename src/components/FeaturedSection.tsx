import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Check, Flame } from 'lucide-react';
import { siteImages } from '../assets/images.ts';

interface FeaturedSectionProps {
  onCtaClick: () => void;
}

export const FeaturedSection: React.FC<FeaturedSectionProps> = ({ onCtaClick }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="py-20 md:py-28 bg-[#151B1D] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Large Image on Left (7 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#89BAC1]/20 shadow-2xl bg-[#080B0C]">
              {!imageError ? (
                <img
                  src={siteImages.featured}
                  alt="Modern residential domestic central heating and boiler installation in a contemporary home utility area"
                  className="w-full h-auto max-h-[500px] object-cover"
                  onError={() => setImageError(true)}
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="h-[400px] flex flex-col items-center justify-center p-8 text-center bg-[#080B0C]">
                  <Flame className="w-12 h-12 text-[#89BAC1] mb-3" />
                  <p className="text-white font-bold text-lg">Modern Residential Heating Systems</p>
                </div>
              )}

              {/* Discreet photo context note */}
              <div className="absolute bottom-3 right-3 bg-[#080B0C]/80 backdrop-blur-sm px-3 py-1 rounded text-[11px] text-neutral-400">
                Representative modern heating installation
              </div>
            </div>
          </motion.div>

          {/* Content Panel on Right (5 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-[2px] bg-[#89BAC1]" />
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#89BAC1] uppercase">
                DOMESTIC HEATING CARE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-5 leading-tight">
              Keep Your Home Running Smoothly
            </h2>

            <p className="text-base text-neutral-300 leading-relaxed mb-6">
              From plumbing improvements to oil boiler servicing, get in touch to discuss the right solution for your home.
            </p>

            {/* Practical Points */}
            <ul className="space-y-3 mb-8 text-sm text-neutral-200">
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#89BAC1]/20 text-[#89BAC1] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span>Tailored advice on oil boiler efficiency and system upkeep</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#89BAC1]/20 text-[#89BAC1] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span>Prompt assistance for home plumbing maintenance and upgrades</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#89BAC1]/20 text-[#89BAC1] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span>Free, no-obligation quotation tailored to your job</span>
              </li>
            </ul>

            {/* CTA Button */}
            <div>
              <button
                onClick={onCtaClick}
                className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-[#080B0C] bg-[#89BAC1] hover:bg-[#72a6ad] active:scale-[0.98] rounded-md transition-all shadow-md shadow-[#89BAC1]/20 cursor-pointer group"
              >
                <span>DISCUSS YOUR REQUIREMENTS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
