import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Flame, FileText, Layers } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      title: 'LOCAL SERVICE',
      description: 'Serving Lisburn and the surrounding area with dependable home plumbing and heating support.',
      icon: MapPin,
      number: '01'
    },
    {
      title: 'OIL BOILER EXPERTISE',
      description: 'A service offering focused on oil boiler systems, tailored specifically to your home heating needs.',
      icon: Flame,
      number: '02'
    },
    {
      title: 'FREE QUOTATIONS',
      description: 'Discuss your requirements openly and request a clear, upfront quotation with no obligation.',
      icon: FileText,
      number: '03'
    },
    {
      title: 'A RANGE OF SERVICES',
      description: 'Comprehensive assistance spanning installations, repairs, routine servicing, and emergency enquiries.',
      icon: Layers,
      number: '04'
    }
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#080B0C] border-t border-b border-[#151B1D] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#89BAC1]" />
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#89BAC1] uppercase">
              WHY CHOOSE CD PLUMBING &amp; HEATING
            </span>
            <span className="w-6 h-[2px] bg-[#89BAC1]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Practical Solutions.{' '}
            <span className="text-[#89BAC1]">Professional Service.</span>
          </h2>
        </div>

        {/* 4 Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#151B1D]/70 rounded-xl p-8 border border-[#151B1D] hover:border-[#89BAC1]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top line with Icon and Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-[#080B0C] border border-[#89BAC1]/30 flex items-center justify-center text-[#89BAC1] group-hover:scale-105 group-hover:border-[#89BAC1] transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-neutral-500 font-semibold tracking-wider">
                      {feature.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white tracking-tight mb-3">
                    {feature.title}
                  </h3>

                  {/* Teal Divider */}
                  <div className="w-10 h-[2px] bg-[#89BAC1]/50 mb-4 group-hover:w-16 transition-all duration-300" />

                  {/* Description */}
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
