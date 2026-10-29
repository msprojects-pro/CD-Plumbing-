import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, MessageSquare, MapPin, CheckCircle2, AlertCircle, Send, Check } from 'lucide-react';

interface ContactSectionProps {
  selectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedService = 'Plumbing' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: selectedService || 'Plumbing',
    details: ''
  });

  // Keep service synced if selectedService changes from card clicks
  React.useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter a contact phone number.';
    } else if (!/^[0-9+() -]{7,20}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number.';
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.details.trim()) {
      errs.details = 'Please briefly describe your requirements.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulating form handling (ready for Web3Forms connection)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const serviceOptions = [
    'Plumbing',
    'Oil Boiler',
    'Installation',
    'Repair',
    'Servicing',
    'Emergency Enquiry',
    'Other'
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-white text-[#080B0C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#89BAC1]" />
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#53767c] uppercase">
              GET IN TOUCH
            </span>
            <span className="w-6 h-[2px] bg-[#89BAC1]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#080B0C] tracking-tight">
            Let's Talk About Your Plumbing or Heating Needs
          </h2>
          <p className="text-base sm:text-lg text-[#687578] mt-4 leading-relaxed">
            Need an installation, repair, service, or help with an oil boiler? Get in touch to discuss your requirements and request a free quotation.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Contact Details & Direct Actions */}
          <div className="lg:col-span-5 bg-[#EDF6F6] rounded-2xl p-8 sm:p-10 border border-[#DDE7E8] flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-[#080B0C] tracking-tight mb-6">
                Direct Contact
              </h3>

              <div className="space-y-6 mb-8">
                {/* Business */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#687578] block mb-1">
                    Business
                  </span>
                  <p className="text-lg font-bold text-[#080B0C]">
                    CD Plumbing and Heating
                  </p>
                </div>

                {/* Location */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#687578] block mb-1">
                    Location
                  </span>
                  <div className="flex items-center gap-2 text-base text-[#080B0C] font-medium">
                    <MapPin className="w-4 h-4 text-[#53767c] shrink-0" />
                    <span>Lisburn, United Kingdom</span>
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#687578] block mb-1">
                    Phone
                  </span>
                  <a
                    href="tel:+447749994637"
                    className="text-lg font-bold text-[#080B0C] hover:text-[#3e686f] transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-[#53767c]" />
                    <span>+44 7749 994637</span>
                  </a>
                </div>

                {/* Quotations */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#687578] block mb-1">
                    Quotations
                  </span>
                  <div className="flex items-center gap-2 text-base font-semibold text-[#2f555b]">
                    <CheckCircle2 className="w-4 h-4 text-[#89BAC1]" />
                    <span>Free quotes available</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="space-y-3.5 pt-6 border-t border-[#DDE7E8]">
              <a
                href="tel:+447749994637"
                className="w-full flex items-center justify-center gap-3 py-3.5 px-6 text-sm font-bold uppercase tracking-wider text-white bg-[#080B0C] hover:bg-[#151B1D] active:scale-[0.99] rounded-md transition-all shadow-md"
              >
                <Phone className="w-4 h-4 text-[#89BAC1]" />
                <span>CALL NOW</span>
              </a>

              <a
                href="https://wa.me/447749994637"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 py-3.5 px-6 text-sm font-bold uppercase tracking-wider text-[#080B0C] bg-[#89BAC1] hover:bg-[#72a6ad] active:scale-[0.99] rounded-md transition-all shadow-md shadow-[#89BAC1]/20"
              >
                <MessageSquare className="w-4 h-4" />
                <span>MESSAGE ON WHATSAPP</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Enquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 sm:p-10 border border-[#DDE7E8] shadow-sm">
            <h3 className="text-2xl font-bold text-[#080B0C] tracking-tight mb-2">
              Request a Free Quote
            </h3>
            <p className="text-sm text-[#687578] mb-8">
              Fill in your details below and we will get back to you regarding your plumbing or heating requirements.
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-8 rounded-xl bg-[#EDF6F6] border border-[#89BAC1]/50 text-center"
              >
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#3e686f] mx-auto mb-4 shadow-sm">
                  <Check className="w-7 h-7 text-[#89BAC1]" />
                </div>
                <h4 className="text-xl font-bold text-[#080B0C] mb-2">
                  Enquiry Received
                </h4>
                <p className="text-sm text-[#687578] max-w-md mx-auto mb-6 leading-relaxed">
                  Thank you, <span className="font-semibold text-[#080B0C]">{formData.fullName}</span>! Your request for <span className="font-semibold text-[#080B0C]">{formData.service}</span> has been noted for this demo.
                </p>
                <div className="p-4 bg-white rounded-lg border border-[#DDE7E8] text-xs text-[#53767c] max-w-sm mx-auto mb-6">
                  For immediate assistance, call directly on{' '}
                  <a href="tel:+447749994637" className="font-bold underline text-[#080B0C]">
                    +44 7749 994637
                  </a>{' '}
                  or message on WhatsApp.
                </div>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullName: '',
                      phone: '',
                      email: '',
                      service: 'Plumbing',
                      details: ''
                    });
                  }}
                  className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#080B0C] bg-[#89BAC1] hover:bg-[#72a6ad] rounded-md transition-colors cursor-pointer"
                >
                  SEND ANOTHER ENQUIRY
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-[#080B0C] mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. David Campbell"
                    className={`w-full px-4 py-3 rounded-lg border text-sm text-[#080B0C] bg-[#EDF6F6]/40 focus:bg-white focus:outline-none transition-colors ${
                      errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-[#DDE7E8] focus:border-[#89BAC1]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Contact Phone & Email Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#080B0C] mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 07700 900000"
                      className={`w-full px-4 py-3 rounded-lg border text-sm text-[#080B0C] bg-[#EDF6F6]/40 focus:bg-white focus:outline-none transition-colors ${
                        errors.phone ? 'border-red-500 bg-red-50/20' : 'border-[#DDE7E8] focus:border-[#89BAC1]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#080B0C] mb-1.5">
                      Email Address <span className="text-neutral-400 font-normal lowercase">(optional)</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. name@example.co.uk"
                      className={`w-full px-4 py-3 rounded-lg border text-sm text-[#080B0C] bg-[#EDF6F6]/40 focus:bg-white focus:outline-none transition-colors ${
                        errors.email ? 'border-red-500 bg-red-50/20' : 'border-[#DDE7E8] focus:border-[#89BAC1]'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Service Required Dropdown */}
                <div>
                  <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-[#080B0C] mb-1.5">
                    Service Required <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-[#DDE7E8] text-sm text-[#080B0C] bg-white focus:outline-none focus:border-[#89BAC1] transition-colors cursor-pointer"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Describe Your Requirements */}
                <div>
                  <label htmlFor="details" className="block text-xs font-bold uppercase tracking-wider text-[#080B0C] mb-1.5">
                    Describe Your Requirements <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={4}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="Tell us about the job (e.g. oil boiler servicing, leak repair, new installation)..."
                    className={`w-full px-4 py-3 rounded-lg border text-sm text-[#080B0C] bg-[#EDF6F6]/40 focus:bg-white focus:outline-none transition-colors resize-y ${
                      errors.details ? 'border-red-500 bg-red-50/20' : 'border-[#DDE7E8] focus:border-[#89BAC1]'
                    }`}
                  />
                  {errors.details && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.details}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 text-sm font-bold uppercase tracking-wider text-[#080B0C] bg-[#89BAC1] hover:bg-[#72a6ad] active:scale-[0.99] rounded-md transition-all shadow-md shadow-[#89BAC1]/20 cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>PROCESSING...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>REQUEST A FREE QUOTE</span>
                    </>
                  )}
                </button>

                {/* Web3Forms Integration Note */}
                <p className="text-[11px] text-[#687578] text-center pt-2">
                  Form structure is ready for Web3Forms or direct server dispatch. Free quotations with no obligation.
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
