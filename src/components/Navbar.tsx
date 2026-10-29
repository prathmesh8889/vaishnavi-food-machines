import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
    {/* Top Contact Bar */}
    <div className="bg-[#0a1929] text-white text-xs py-1.5 hidden md:block border-b border-[#c9a227]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <a href="tel:+917083944413" className="flex items-center gap-1.5 hover:text-[#c9a227] transition-colors">
            <svg className="w-3.5 h-3.5 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +91 70839 44413
          </a>
          <span className="text-gray-600">|</span>
          <a href="mailto:pankajbagar4@gmail.com" className="flex items-center gap-1.5 hover:text-[#c9a227] transition-colors">
            <svg className="w-3.5 h-3.5 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            pankajbagar4@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://wa.me/917083944413" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-green-400 transition-colors">
            <svg className="w-3.5 h-3.5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>
          <span className="text-gray-600">|</span>
          <span className="text-gray-400">Mon-Sat: 9AM - 7PM</span>
        </div>
      </div>
    </div>
    <nav className="bg-gradient-to-r from-[#0c2340] to-[#1a365d] shadow-xl sticky top-0 z-50 border-b border-[#c9a227]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow overflow-hidden">
              <img
                src="https://image.qwenlm.ai/generated-images/cb2bc48c-b5ee-40fc-afb5-a285a7156f52/_result.png"
                alt="Vaishnavi Engineers Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-white">
              <h1 className="text-lg font-bold leading-tight tracking-wide">Vaishnavi Engineers</h1>
              <p className="text-xs text-[#c9a227] leading-tight font-medium">Food Processing Machines</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'bg-[#c9a227] text-[#0c2340] shadow-md'
                    : 'text-white hover:bg-white/10 hover:text-[#c9a227]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-3 px-5 py-2.5 bg-[#c9a227] text-[#0c2340] rounded-lg text-sm font-bold hover:bg-[#f5d060] transition-all shadow-md hover:shadow-lg"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#0c2340]/98 backdrop-blur-md border-t border-[#c9a227]/20">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  isActive(link.path)
                    ? 'bg-[#c9a227] text-[#0c2340]'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 bg-[#c9a227] text-[#0c2340] rounded-lg text-sm font-bold text-center mt-3"
            >
              Get Quote
            </Link>
            {/* Mobile contact info */}
            <div className="border-t border-[#c9a227]/20 mt-3 pt-3 space-y-2">
              <a href="tel:+917083944413" className="flex items-center gap-2 text-sm text-gray-300">
                <svg className="w-4 h-4 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 70839 44413
              </a>
              <a href="mailto:pankajbagar4@gmail.com" className="flex items-center gap-2 text-sm text-gray-300">
                <svg className="w-4 h-4 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                pankajbagar4@gmail.com
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
    </>
  );
}
