import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Droplet, 
  Flame, 
  Cog, 
  Wrench, 
  ClipboardCheck, 
  AlertCircle, 
  ArrowUpRight 
} from 'lucide-react';
import { siteImages } from '../assets/images.ts';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ElementType;
  alt: string;
}

const servicesData: ServiceItem[] = [
  {
    id: 'Plumbing',
    title: 'Plumbing',
    description: 'Plumbing services for residential needs, from general repairs to new installations.',
    image: siteImages.plumbing,
    icon: Droplet,
    alt: 'Residential plumbing pipework and valve installation'
  },
  {
    id: 'Oil Boiler',
    title: 'Oil Boiler Expertise',
    description: 'Oil boiler services tailored to your heating requirements. Contact us to discuss your system and the work needed.',
    image: siteImages.oilBoiler,
    icon: Flame,
    alt: 'Residential oil boiler heating system equipment'
  },
  {
    id: 'Installation',
    title: 'Installations',
    description: 'Planning a new plumbing or heating installation? Discuss your project and requirements with CD Plumbing and Heating.',
    image: siteImages.installations,
    icon: Cog,
    alt: 'Clean heating installation with neat pipe manifold'
  },
  {
    id: 'Repair',
    title: 'Repairs',
    description: 'Experiencing a plumbing or heating problem? Get in touch to discuss the issue and available repair options.',
    image: siteImages.repairs,
    icon: Wrench,
    alt: 'Heating and plumbing pipe repair using specialist tools'
  },
  {
    id: 'Servicing',
    title: 'Servicing',
    description: 'Arrange a service for your plumbing or heating system and discuss the maintenance it requires.',
    image: siteImages.servicing,
    icon: ClipboardCheck,
    alt: 'Boiler combustion and diagnostic system servicing'
  },
  {
    id: 'Emergency Enquiry',
    title: 'Emergency Enquiries',
    description: 'Need urgent plumbing or heating assistance? Contact the business to discuss your situation and availability.',
    image: siteImages.emergency,
    icon: AlertCircle,
    alt: 'Emergency plumbing diagnostics and water pipe check'
  }
];

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#EDF6F6] text-[#080B0C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#89BAC1]" />
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#53767c] uppercase">
              WHAT WE DO
            </span>
            <span className="w-6 h-[2px] bg-[#89BAC1]" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#080B0C] tracking-tight mb-4">
            Plumbing &amp; Heating Services
          </h2>
          
          <p className="text-base sm:text-lg text-[#687578] leading-relaxed">
            Whether you need an installation, a repair, or routine servicing, get in touch to discuss your plumbing or heating requirements.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            const hasError = imageErrors[service.id];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white rounded-xl overflow-hidden border border-[#DDE7E8] shadow-sm hover:shadow-xl hover:border-[#89BAC1]/60 transition-all duration-300 flex flex-col group"
              >
                {/* Image Container with Consistent Ratio */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#151B1D]">
                  {!hasError ? (
                    <img
                      src={service.image}
                      alt={service.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      onError={() => handleImageError(service.id)}
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#151B1D] text-white">
                      <Icon className="w-10 h-10 text-[#89BAC1] mb-2" />
                      <span className="text-sm font-semibold">{service.title}</span>
                    </div>
                  )}

                  {/* Gradient Scrim for Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-[#080B0C]/85 backdrop-blur-md border border-[#89BAC1]/30 flex items-center justify-center text-[#89BAC1] shadow-md group-hover:bg-[#89BAC1] group-hover:text-[#080B0C] transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-7 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#080B0C] tracking-tight mb-2.5 group-hover:text-[#4a7277] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#687578] leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Make an Enquiry Link */}
                  <button
                    onClick={() => onSelectService(service.id)}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#35585d] hover:text-[#080B0C] pt-4 border-t border-[#DDE7E8] transition-colors group/link cursor-pointer w-full text-left"
                  >
                    <span>Make an Enquiry</span>
                    <ArrowUpRight className="w-4 h-4 text-[#89BAC1] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
