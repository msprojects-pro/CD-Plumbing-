import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X } from 'lucide-react';

interface NavbarProps {
  onQuoteClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onQuoteClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080B0C]/95 backdrop-blur-md border-b border-[#151B1D] shadow-lg shadow-black/20 py-3.5'
          : 'bg-[#080B0C] border-b border-[#151B1D]/60 py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Brand Wordmark (Zone 1) */}
          <a
            href="#home"
            className="flex items-center gap-2 group whitespace-nowrap shrink-0"
            onClick={(e) => handleNavClick(e, '#home')}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#89BAC1] group-hover:scale-125 transition-transform" />
            <span className="text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-[#89BAC1] transition-colors">
              CD Plumbing & Heating
            </span>
          </a>

          {/* Desktop Navigation Links (Zone 2) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-[#89BAC1] transition-colors whitespace-nowrap shrink-0 py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#89BAC1] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action (Zone 3) */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href="tel:+447749994637"
              className="hidden lg:flex items-center gap-2 text-xs font-semibold text-neutral-300 hover:text-white transition-colors py-2 px-3 rounded-lg border border-[#151B1D] hover:border-[#89BAC1]/50 bg-[#151B1D]/40"
              title="Call CD Plumbing & Heating"
            >
              <Phone className="w-3.5 h-3.5 text-[#89BAC1]" />
              <span>07749 994637</span>
            </a>

            <button
              onClick={onQuoteClick}
              className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#080B0C] bg-[#89BAC1] hover:bg-[#72a6ad] active:scale-[0.98] rounded-md transition-all shadow-sm shadow-[#89BAC1]/20 whitespace-nowrap shrink-0 cursor-pointer"
            >
              GET A FREE QUOTE
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onQuoteClick}
              className="px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#080B0C] bg-[#89BAC1] rounded-md cursor-pointer"
            >
              FREE QUOTE
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white hover:bg-[#151B1D] rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-[#89BAC1]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-[#080B0C] border-b border-[#151B1D] px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-base font-medium text-neutral-200 hover:text-[#89BAC1] hover:bg-[#151B1D]/70 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            
            <div className="pt-3 border-t border-[#151B1D] space-y-2">
              <a
                href="tel:+447749994637"
                className="flex items-center justify-center gap-2.5 w-full py-2.5 text-sm font-semibold text-white bg-[#151B1D] hover:bg-[#1e2528] rounded-md transition-colors"
              >
                <Phone className="w-4 h-4 text-[#89BAC1]" />
                <span>Call +44 7749 994637</span>
              </a>

              <a
                href="https://wa.me/447749994637"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full py-2.5 text-sm font-semibold text-[#89BAC1] border border-[#89BAC1]/40 hover:bg-[#89BAC1]/10 rounded-md transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Message on WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onQuoteClick();
                }}
                className="w-full py-3 text-sm font-bold uppercase tracking-wider text-[#080B0C] bg-[#89BAC1] hover:bg-[#72a6ad] rounded-md transition-colors shadow-sm"
              >
                GET A FREE QUOTE
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
