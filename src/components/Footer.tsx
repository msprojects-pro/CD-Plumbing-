import React from 'react';
import { Phone, MessageSquare, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#080B0C] text-white border-t border-[#151B1D] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12">
          
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#89BAC1]" />
              <span className="text-xl font-bold tracking-tight text-white">
                CD Plumbing and Heating
              </span>
            </div>
            <p className="text-sm text-[#89BAC1] font-medium mb-4">
              Plumbing &amp; Heating Services in Lisburn
            </p>
            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
              Providing professional plumbing, oil boiler servicing, installations, repairs, and emergency enquiries across Lisburn and surrounding areas.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, '#home')}
                  className="hover:text-[#89BAC1] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="hover:text-[#89BAC1] transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#why-us"
                  onClick={(e) => handleNavClick(e, '#why-us')}
                  className="hover:text-[#89BAC1] transition-colors"
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, '#about')}
                  className="hover:text-[#89BAC1] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="hover:text-[#89BAC1] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300 mb-4">
              Get in Touch
            </h4>
            <div className="space-y-3 text-sm text-neutral-300">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#89BAC1] shrink-0" />
                <span>Lisburn, United Kingdom</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#89BAC1] shrink-0" />
                <a
                  href="tel:+447749994637"
                  className="hover:text-[#89BAC1] transition-colors font-semibold"
                >
                  +44 7749 994637
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#89BAC1] shrink-0" />
                <a
                  href="https://wa.me/447749994637"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#89BAC1] transition-colors text-xs font-semibold uppercase tracking-wider text-[#89BAC1]"
                >
                  Message on WhatsApp
                </a>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-[#151B1D] text-xs text-neutral-400">
              Free quotations available upon request.
            </div>
          </div>

        </div>

        {/* Subtle Teal Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#89BAC1]/40 to-transparent my-4" />

        {/* Copyright notice */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-xs text-neutral-500">
          <p>
            &copy; {currentYear} CD Plumbing and Heating. All rights reserved.
          </p>
          <p className="text-neutral-500">
            Professional Plumbing &amp; Heating Demo
          </p>
        </div>

      </div>
    </footer>
  );
};
