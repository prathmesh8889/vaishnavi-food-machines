import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    machine: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#0c2340] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://image.qwenlm.ai/generated-images/fe0f9af0-d2a8-46fa-b679-d28976a22ee9/_result.png"
            alt="Factory"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c2340] to-[#0c2340]/80"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <span className="inline-block bg-[#c9a227]/20 border border-[#c9a227]/40 text-[#c9a227] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Contact Us</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Send Your Enquiry</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We're here to help you find the right machine for your food business. Get in touch today!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
              <h2 className="text-2xl font-bold text-[#0c2340] mb-2">Enquiry Form</h2>
              <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you shortly.</p>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#0c2340] mb-2">Thank You!</h3>
                  <p className="text-gray-600 mb-6">
                    Your enquiry has been received. Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', machine: '', message: '' });
                    }}
                    className="text-[#1e40af] font-semibold hover:text-[#c9a227] transition-colors"
                  >
                    ← Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e40af] focus:border-[#1e40af] transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e40af] focus:border-[#1e40af] transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e40af] focus:border-[#1e40af] transition-colors"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="machine" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Machine of Interest
                    </label>
                    <select
                      id="machine"
                      name="machine"
                      value={formData.machine}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e40af] focus:border-[#1e40af] transition-colors bg-white"
                    >
                      <option value="">Select a machine</option>
                      <option value="pani-puri">Pani Puri Machine</option>
                      <option value="papad">Papad Machine</option>
                      <option value="atta-mixer">Atta Mixer Machine</option>
                      <option value="namkeen">Namkeen Making Machine</option>
                      <option value="samosa">Samosa Making Machine</option>
                      <option value="chakli">Chakli Making Machine</option>
                      <option value="other">Other Food Processing Machine</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e40af] focus:border-[#1e40af] transition-colors resize-none"
                      placeholder="Tell us about your requirements, production capacity needed, budget range..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3.5 bg-[#0c2340] text-white rounded-lg font-bold text-lg hover:bg-[#c9a227] hover:text-[#0c2340] transition-all shadow-md hover:shadow-lg"
                  >
                    Send Enquiry
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Info Cards */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-[#0c2340] mb-6">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#0c2340] rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0c2340]">Phone / WhatsApp</h4>
                      <a href="tel:+917083944413" className="text-[#1e40af] hover:text-[#c9a227] font-medium text-sm transition-colors">+91 70839 44413</a>
                      <p className="text-gray-500 text-xs mt-0.5">Call or WhatsApp anytime</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#0c2340] rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0c2340]">Email</h4>
                      <a href="mailto:pankajbagar4@gmail.com" className="text-[#1e40af] hover:text-[#c9a227] font-medium text-sm transition-colors">pankajbagar4@gmail.com</a>
                      <p className="text-gray-500 text-xs mt-0.5">We reply within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#0c2340] rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0c2340]">Owner Contact</h4>
                      <p className="text-gray-600 text-sm">Direct communication with the owner</p>
                      <a href="tel:+917083944413" className="text-[#c9a227] hover:underline text-sm font-medium">+91 70839 44413</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-[#0c2340] mb-6">Business Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-600">Monday - Saturday</span>
                    <span className="font-semibold text-[#0c2340]">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-semibold text-red-500">Closed</span>
                  </div>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-[#0c2340] mb-4 text-center">Quick Contact</h3>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="tel:+917083944413"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-[#0c2340] text-white rounded-xl font-semibold hover:bg-[#1a365d] transition-colors shadow-md"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/917083944413?text=Hi%2C%20I%20am%20interested%20in%20your%20food%20processing%20machines.%20Please%20share%20more%20details."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors shadow-md"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </a>
                </div>
                <p className="text-center text-xs text-gray-500 mt-3">
                  📞 +91 70839 44413 • ✉️ pankajbagar4@gmail.com
                </p>
              </div>

              {/* Quick Info */}
              <div className="bg-gradient-to-br from-[#0c2340] to-[#1a365d] rounded-2xl p-8 text-white border border-[#c9a227]/20">
                <h3 className="text-xl font-bold mb-5">Why Enquire With Us?</h3>
                <ul className="space-y-3">
                  {[
                    'Free consultation & guidance',
                    'Custom machine solutions available',
                    'Competitive pricing',
                    'After-sales support guaranteed',
                    'Quick response to enquiries',
                  ].map((item) => (
                    <li key={item} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-[#c9a227]/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#c9a227]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
