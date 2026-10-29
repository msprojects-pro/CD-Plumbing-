import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MapPin, Phone, ShieldCheck, UserCheck } from 'lucide-react';
import { siteImages } from '../assets/images.ts';

interface AboutProps {
  onContactClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onContactClick }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="py-20 md:py-28 bg-white text-[#080B0C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Realistic Professional Plumber/Heating Photograph */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#DDE7E8] shadow-xl bg-[#EDF6F6]">
              {!imageError ? (
                <img
                  src={siteImages.about}
                  alt="CD Plumbing and Heating engineer serving Lisburn and surrounding area"
                  className="w-full h-full object-cover max-h-[520px]"
                  onError={() => setImageError(true)}
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="h-[420px] flex flex-col items-center justify-center p-8 text-center bg-[#151B1D] text-white">
                  <UserCheck className="w-12 h-12 text-[#89BAC1] mb-3" />
                  <p className="font-bold text-lg">CD Plumbing and Heating</p>
                  <p className="text-xs text-neutral-400 mt-1">Lisburn, United Kingdom</p>
                </div>
              )}

              {/* Discreet badge */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-lg border border-[#DDE7E8] shadow-md flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#89BAC1]" />
                <span className="text-xs font-bold text-[#080B0C]">Based in Lisburn, UK</span>
              </div>
            </div>

            {/* Subtle offset border */}
            <div className="absolute -bottom-3 -left-3 w-full h-full border border-[#89BAC1]/40 rounded-2xl -z-10 hidden sm:block pointer-events-none" />
          </motion.div>

          {/* Right Column: About Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#89BAC1]" />
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#53767c] uppercase">
                ABOUT THE BUSINESS
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#080B0C] tracking-tight mb-6">
              Your Local Plumbing &amp; Heating Contact
            </h2>

            {/* Teal Accent Line */}
            <div className="w-16 h-[3px] bg-[#89BAC1] mb-6 rounded-full" />

            {/* Body Text */}
            <p className="text-base sm:text-lg text-[#687578] leading-relaxed mb-8">
              CD Plumbing and Heating provides plumbing and heating services in Lisburn, United Kingdom. With services covering installations, repairs, servicing, oil boilers, and emergency enquiries, the business offers a straightforward way to discuss your home service requirements and request a free quotation.
            </p>

            {/* Core Values Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-9 pt-6 border-t border-[#DDE7E8]">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-md bg-[#EDF6F6] text-[#3c646a] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#080B0C]">Customer Recommended</h4>
                  <p className="text-xs text-[#687578] mt-0.5">100% recommend rating from local customers</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-md bg-[#EDF6F6] text-[#3c646a] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#080B0C]">Direct Communication</h4>
                  <p className="text-xs text-[#687578] mt-0.5">Call or WhatsApp anytime to discuss your job</p>
                </div>
              </div>
            </div>

            {/* Button */}
            <div>
              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-2.5 px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#080B0C] bg-[#89BAC1] hover:bg-[#72a6ad] active:scale-[0.98] rounded-md transition-all shadow-md shadow-[#89BAC1]/20 cursor-pointer group"
              >
                <span>GET IN TOUCH</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
