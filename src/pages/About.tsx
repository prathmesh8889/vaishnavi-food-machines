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
      <section className="bg-gradient-to-br from-orange-600 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Learn about Vaishnavi Engineers and our commitment to powering your food business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Your Growth Partner in Food Processing
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-gray-900">Vaishnavi Engineers</strong> is a leading manufacturer 
                  of food processing machines, dedicated to helping food businesses grow and succeed. 
                  With our tagline <em>"Innovation | Quality | Your Growth Partner"</em>, we embody the 
                  values that drive everything we do.
                </p>
                <p>
                  We specialize in manufacturing a wide range of food processing machines including 
                  Pani Puri Machines, Papad Machines, Atta Mixer Machines, Namkeen Making Machines, 
                  Samosa Making Machines, Chakli Making Machines, and various other custom food 
                  processing equipment.
                </p>
                <p>
                  Our mission is simple: <strong className="text-orange-600">Make Your Food Business Grow.</strong> 
                  We achieve this by providing high-quality, efficient, and reliable machines that 
                  help food entrepreneurs scale their production while maintaining the quality and 
                  taste their customers love.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100">
              <div className="text-center">
                <div className="text-7xl mb-6">🏭</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Vaishnavi Engineers</h3>
                <div className="inline-flex items-center bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  <span>Innovation | Quality | Your Growth Partner</span>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-2xl font-bold text-orange-600">6+</div>
                    <div className="text-xs text-gray-500">Machine Types</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-2xl font-bold text-orange-600">100%</div>
                    <div className="text-xs text-gray-500">Quality Focus</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-2xl font-bold text-orange-600">Custom</div>
                    <div className="text-xs text-gray-500">Solutions</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-2xl font-bold text-orange-600">24/7</div>
                    <div className="text-xs text-gray-500">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These values guide everything we do at Vaishnavi Engineers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <div className="w-14 h-14 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">High Quality</h3>
              <p className="text-sm text-gray-600">Premium materials and expert craftsmanship in every machine.</p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <div className="w-14 h-14 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Efficient Performance</h3>
              <p className="text-sm text-gray-600">Machines designed for maximum output with minimum effort.</p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <div className="w-14 h-14 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Reliable Support</h3>
              <p className="text-sm text-gray-600">Comprehensive after-sales service and maintenance support.</p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <div className="w-14 h-14 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">On-Time Delivery</h3>
              <p className="text-sm text-gray-600">We respect your time and deliver within committed timelines.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
