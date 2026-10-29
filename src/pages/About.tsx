export default function About() {
  const values = [
    {
      icon: '💡',
      title: 'Innovation',
      description: 'We constantly innovate to bring the latest technology in food processing machinery.',
    },
    {
      icon: '🏆',
      title: 'Quality',
      description: 'Every machine is built with premium materials and undergoes rigorous quality checks.',
    },
    {
      icon: '🤝',
      title: 'Partnership',
      description: 'We see ourselves as your growth partner, committed to your business success.',
    },
    {
      icon: '🎯',
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority. We provide end-to-end support from purchase to maintenance.',
    },
  ];

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
            <span className="inline-block bg-[#c9a227]/20 border border-[#c9a227]/40 text-[#c9a227] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Vaishnavi Engineers</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Learn about our commitment to powering your food business growth through innovation and quality.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <span className="inline-block bg-[#0c2340] text-[#c9a227] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0c2340] mb-6">
                Your Growth Partner in Food Processing
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-[#0c2340]">Vaishnavi Engineers</strong> is a leading manufacturer 
                  of food processing machines, dedicated to helping food businesses grow and succeed. 
                  With our tagline <em className="text-[#c9a227] font-semibold">"Innovation | Quality | Your Growth Partner"</em>, we embody the 
                  values that drive everything we do.
                </p>
                <p>
                  We specialize in manufacturing a wide range of food processing machines including 
                  Pani Puri Machines, Papad Machines, Atta Mixer Machines, Namkeen Making Machines, 
                  Samosa Making Machines, Chakli Making Machines, and various other custom food 
                  processing equipment.
                </p>
                <p>
                  Our mission is simple: <strong className="text-[#0c2340]">Make Your Food Business Grow.</strong> 
                  We achieve this by providing high-quality, efficient, and reliable machines that 
                  help food entrepreneurs scale their production while maintaining the quality and 
                  taste their customers love.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#0c2340] to-[#1a365d] rounded-2xl p-8 border border-[#c9a227]/20 text-white">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white rounded-xl mx-auto mb-6 flex items-center justify-center overflow-hidden shadow-lg">
                    <img
                      src="https://image.qwenlm.ai/generated-images/cb2bc48c-b5ee-40fc-afb5-a285a7156f52/_result.png"
                      alt="Vaishnavi Engineers Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Vaishnavi Engineers</h3>
                  <div className="inline-flex items-center bg-[#c9a227] text-[#0c2340] px-4 py-2 rounded-full text-sm font-bold">
                    <span>Innovation | Quality | Your Growth Partner</span>
                  </div>
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                      <div className="text-2xl font-bold text-[#c9a227]">6+</div>
                      <div className="text-xs text-gray-300">Machine Types</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                      <div className="text-2xl font-bold text-[#c9a227]">100%</div>
                      <div className="text-xs text-gray-300">Quality Focus</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                      <div className="text-2xl font-bold text-[#c9a227]">Custom</div>
                      <div className="text-xs text-gray-300">Solutions</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                      <div className="text-2xl font-bold text-[#c9a227]">24/7</div>
                      <div className="text-xs text-gray-300">Support</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -top-3 -right-3 w-20 h-20 bg-[#c9a227]/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-[#1e40af]/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-[#0c2340] text-[#c9a227] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2340] mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These values guide everything we do at Vaishnavi Engineers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-[#c9a227]/30 group hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-bold text-[#0c2340] mb-2 group-hover:text-[#1e40af] transition-colors">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-[#0c2340] text-[#c9a227] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">Our Promise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c2340] mb-4">Why Choose Us?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-7 bg-gradient-to-br from-[#0c2340] to-[#1a365d] rounded-2xl text-white hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-[#c9a227]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">High Quality</h3>
              <p className="text-sm text-gray-300">Premium materials and expert craftsmanship in every machine.</p>
            </div>
            <div className="text-center p-7 bg-gradient-to-br from-[#0c2340] to-[#1a365d] rounded-2xl text-white hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-[#c9a227]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Efficient Performance</h3>
              <p className="text-sm text-gray-300">Machines designed for maximum output with minimum effort.</p>
            </div>
            <div className="text-center p-7 bg-gradient-to-br from-[#0c2340] to-[#1a365d] rounded-2xl text-white hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-[#c9a227]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">Reliable Support</h3>
              <p className="text-sm text-gray-300">Comprehensive after-sales service and maintenance support.</p>
            </div>
            <div className="text-center p-7 bg-gradient-to-br from-[#0c2340] to-[#1a365d] rounded-2xl text-white hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-[#c9a227]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="font-bold mb-2">On-Time Delivery</h3>
              <p className="text-sm text-gray-300">We respect your time and deliver within committed timelines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-[#0c2340] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="border-t border-b border-[#c9a227]/30 py-10">
            <p className="text-xl md:text-2xl italic text-gray-200 leading-relaxed">
              "Make Your Food Business Grow..."
            </p>
            <p className="mt-4 text-[#c9a227] font-semibold">— Vaishnavi Engineers</p>
          </div>
        </div>
      </section>
    </div>
  );
}
