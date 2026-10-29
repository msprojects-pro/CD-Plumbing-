import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, ArrowRight, ShieldCheck, Wrench, CheckCircle } from 'lucide-react';
import { siteImages } from '../assets/images.ts';

interface HeroProps {
  onQuoteClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onQuoteClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 bg-[#080B0C] overflow-hidden">
      {/* Subtle background atmospheric gradient */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#89BAC1]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#151B1D] rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Eyebrow with teal line */}
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-[2px] bg-[#89BAC1]" />
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#89BAC1] uppercase">
                LOCAL PLUMBING &amp; OIL BOILER EXPERT
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6 text-balance">
              Reliable Plumbing &amp; Heating.{' '}
              <span className="text-[#89BAC1]">Done Right.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed mb-8">
              From plumbing installations and repairs to oil boiler servicing and emergencies, CD Plumbing and Heating is here to help across Lisburn and the surrounding area.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <button
                onClick={onQuoteClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-bold uppercase tracking-wider text-[#080B0C] bg-[#89BAC1] hover:bg-[#72a6ad] active:scale-[0.98] rounded-md transition-all shadow-md shadow-[#89BAC1]/20 whitespace-nowrap shrink-0 cursor-pointer group"
              >
                <span>GET A FREE QUOTE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                href="tel:+447749994637"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm font-bold uppercase tracking-wider text-white bg-[#151B1D] hover:bg-[#1e2528] border border-[#151B1D] hover:border-[#89BAC1]/50 rounded-md transition-all whitespace-nowrap shrink-0"
              >
                <Phone className="w-4 h-4 text-[#89BAC1]" />
                <span>CALL 07749 994637</span>
              </a>
            </div>

            {/* Trust Markers Bar */}
            <div className="pt-6 border-t border-[#151B1D] flex flex-wrap items-center gap-6 text-xs sm:text-sm text-neutral-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#89BAC1] shrink-0" />
                <span className="font-semibold text-white">Free Quotations Available</span>
              </div>
              <span className="text-[#687578] hidden sm:inline" aria-hidden="true">·</span>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#89BAC1] shrink-0" />
                <span>100% Recommend Rating</span>
              </div>
              <span className="text-[#687578] hidden sm:inline" aria-hidden="true">·</span>
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-[#89BAC1] shrink-0" />
                <span>Lisburn &amp; Surrounding Area</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Realistic Photograph with Framing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-xl overflow-hidden border border-[#151B1D] bg-[#151B1D] shadow-2xl">
              {/* Image Container with aspect ratio */}
              <div className="aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] relative w-full overflow-hidden">
                {!imageError ? (
                  <img
                    src={siteImages.hero}
                    alt="CD Plumbing and Heating engineer inspecting residential heating system pipework and boiler equipment in a UK home"
                    className={`w-full h-full object-cover transition-opacity duration-500 ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageError(true)}
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-[#151B1D] text-center">
                    <Wrench className="w-12 h-12 text-[#89BAC1] mb-3" />
                    <p className="text-white font-semibold">CD Plumbing and Heating</p>
                    <p className="text-xs text-neutral-400 mt-1">Professional Heating &amp; Boiler Service</p>
                  </div>
                )}

                {/* Subtle gradient vignette to blend cleanly */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080B0C]/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating Badge in corner */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#080B0C]/90 backdrop-blur-md border border-[#89BAC1]/30 px-4 py-2.5 rounded-lg text-left">
                  <p className="text-xs font-bold text-white uppercase tracking-wider">
                    Domestic &amp; Oil Heating
                  </p>
                  <p className="text-[11px] text-[#89BAC1] font-medium">
                    Serving Lisburn &amp; Nearby Districts
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative subtle border shadow element */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-[#89BAC1]/20 rounded-xl -z-10 hidden sm:block pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
