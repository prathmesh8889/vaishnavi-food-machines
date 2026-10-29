import { Link } from 'react-router-dom';

const LOGO_URL = 'https://image.qwenlm.ai/generated-images/cb2bc48c-b5ee-40fc-afb5-a285a7156f52/_result.png';
const HERO_URL = 'https://image.qwenlm.ai/generated-images/fe0f9af0-d2a8-46fa-b679-d28976a22ee9/_result.png';

const machineImages: Record<string, string> = {
  'Pani Puri Machine': 'https://image.qwenlm.ai/generated-images/e818550d-8541-45e4-a5a9-16e2cd8ac81e/_result.png',
  'Papad Machine': 'https://image.qwenlm.ai/generated-images/ba1d8569-a72b-4705-8453-e02aeaf0f12d/_result.png',
  'Atta Mixer Machine': 'https://image.qwenlm.ai/generated-images/f70b9ce3-bacf-4d22-a335-93b32b002bd8/_result.png',
  'Namkeen Making Machine': 'https://image.qwenlm.ai/generated-images/a258f8aa-7837-4805-984d-2202f12edc15/_result.png',
  'Samosa Making Machine': 'https://image.qwenlm.ai/generated-images/e1569c18-ed52-4817-8e98-2fadbb87a055/_result.png',
  'Chakli Making Machine': 'https://image.qwenlm.ai/generated-images/2b73ad86-15d5-44c0-aafb-87a64d5791a7/_result.png',
};

export default function Home() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: 'High Quality',
      description: 'Premium materials and precision engineering for long-lasting performance.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Efficient Performance',
      description: 'Optimized machines that boost your production capacity significantly.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Reliable Support',
      description: 'Dedicated after-sales service and maintenance support for all machines.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: 'On-Time Delivery',
      description: 'Timely manufacturing and delivery to keep your business on track.',
    },
  ];

  const machines = Object.entries(machineImages);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#0c2340] text-white overflow-hidden min-h-[600px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={HERO_URL}
            alt="Food Processing Factory"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c2340] via-[#0c2340]/90 to-[#0c2340]/70"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center bg-[#c9a227]/20 border border-[#c9a227]/40 rounded-full px-4 py-1.5 mb-6">
                <span className="text-sm font-medium text-[#c9a227]">Innovation | Quality | Your Growth Partner</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Make Your Food Business{' '}
                <span className="gradient-text">Grow...</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Food Processing Machines for Your Business Success. We manufacture high-quality 
                machines that help you scale your food production efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-[#c9a227] text-[#0c2340] rounded-lg font-bold text-lg hover:bg-[#f5d060] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  View Our Machines
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-[#c9a227] text-[#c9a227] rounded-lg font-bold text-lg hover:bg-[#c9a227] hover:text-[#0c2340] transition-all"
                >
                  Send Enquiry
                </Link>
              </div>
            </div>
            <div className="hidden md:flex justify-center animate-fade-in">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#c9a227]/30 animate-pulse-glow">
                  <img
                    src="https://image.qwenlm.ai/generated-images/f70b9ce3-bacf-4d22-a335-93b32b002bd8/_result.png"
                    alt="Food Processing Machine"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#c9a227] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-[#0c2340] font-bold text-xs text-center leading-tight">Since<br/>Years</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-[#0c2340] text-xl">✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 100L1440 100L1440 0C1440 0 1080 80 720 80C360 80 0 0 0 0L0 100Z" fill="#f8fafc"/>
          </svg>
        </div>
      </section>

      {/* Machines Overview */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-[#0c2340] text-[#c9a227] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">Our Products</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2340] mb-4">
              Food Processing Machines
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We manufacture a wide range of food processing machines to help your business thrive.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {machines.map(([name, image]) => (
              <Link
                to="/products"
                key={name}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-sm md:text-base font-bold text-[#0c2340] group-hover:text-[#c9a227] transition-colors">{name}</h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center text-[#1e40af] font-semibold hover:text-[#c9a227] transition-colors border-b-2 border-[#c9a227] pb-1"
            >
              View All Products
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-[#0c2340] text-[#c9a227] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">Why Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2340] mb-4">
              Why Choose Vaishnavi Engineers?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are committed to delivering excellence in every machine we build.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="text-center p-8 rounded-2xl hover:bg-[#0c2340] group transition-all duration-300 border border-gray-100 hover:border-[#c9a227]/30 hover:shadow-xl"
              >
                <div className="w-16 h-16 bg-[#0c2340] group-hover:bg-[#c9a227] rounded-xl flex items-center justify-center mx-auto mb-5 text-[#c9a227] group-hover:text-[#0c2340] transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0c2340] group-hover:text-white mb-2 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-300 text-sm leading-relaxed transition-colors">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-[#0c2340] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #c9a227 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Scale Your Food Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Send us your enquiry today and let us help you find the perfect machine for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#c9a227] text-[#0c2340] rounded-lg font-bold text-lg hover:bg-[#f5d060] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Send Enquiry
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="tel:+917083944413"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#c9a227] text-[#c9a227] rounded-lg font-bold text-lg hover:bg-[#c9a227] hover:text-[#0c2340] transition-all"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm">
            <a href="tel:+917083944413" className="flex items-center gap-2 text-gray-300 hover:text-[#c9a227] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 70839 44413
            </a>
            <a href="mailto:pankajbagar4@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-[#c9a227] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              pankajbagar4@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#0a1929] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="text-3xl md:text-4xl font-bold text-[#c9a227] mb-2">6+</div>
              <p className="text-gray-400 text-sm">Machine Types</p>
            </div>
            <div className="p-4">
              <div className="text-3xl md:text-4xl font-bold text-[#c9a227] mb-2">100%</div>
              <p className="text-gray-400 text-sm">Quality Assured</p>
            </div>
            <div className="p-4">
              <div className="text-3xl md:text-4xl font-bold text-[#c9a227] mb-2">24/7</div>
              <p className="text-gray-400 text-sm">Support Available</p>
            </div>
            <div className="p-4">
              <div className="text-3xl md:text-4xl font-bold text-[#c9a227] mb-2">On-Time</div>
              <p className="text-gray-400 text-sm">Delivery Guaranteed</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
