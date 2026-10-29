/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Services } from './components/Services.tsx';
import { WhyChooseUs } from './components/WhyChooseUs.tsx';
import { FeaturedSection } from './components/FeaturedSection.tsx';
import { About } from './components/About.tsx';
import { TrustSection } from './components/TrustSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { WhatsAppButton } from './components/WhatsAppButton.tsx';

export default function App() {
  const [selectedService, setSelectedService] = useState('Plumbing');

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#080B0C] text-white flex flex-col relative selection:bg-[#89BAC1] selection:text-[#080B0C]">
      {/* Navigation Bar */}
      <Navbar onQuoteClick={scrollToContact} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onQuoteClick={scrollToContact} />

        {/* Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* Why Choose CD Plumbing and Heating */}
        <WhyChooseUs />

        {/* Featured Image Showcase */}
        <FeaturedSection onCtaClick={scrollToContact} />

        {/* About Section */}
        <About onContactClick={scrollToContact} />

        {/* Customer Trust Section */}
        <TrustSection onQuoteClick={scrollToContact} />

        {/* Contact Section */}
        <ContactSection selectedService={selectedService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action in Bottom Right Corner */}
      <WhatsAppButton />
    </div>
  );
}
