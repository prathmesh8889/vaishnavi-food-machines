import { Link } from 'react-router-dom';

export default function Home() {
  const features = [
    {
      icon: '⚙️',
      title: 'High Quality',
      description: 'Premium materials and precision engineering for long-lasting performance.',
    },
    {
      icon: '🚀',
      title: 'Efficient Performance',
      description: 'Optimized machines that boost your production capacity significantly.',
    },
    {
      icon: '🛠️',
      title: 'Reliable Support',
      description: 'Dedicated after-sales service and maintenance support for all machines.',
    },
    {
      icon: '📦',
      title: 'On-Time Delivery',
      description: 'Timely manufacturing and delivery to keep your business on track.',
    },
  ];

  const machines = [
    { name: 'Pani Puri Machine', emoji: '🥟' },
    { name: 'Papad Machine', emoji: '🫓' },
    { name: 'Atta Mixer Machine', emoji: '🥣' },
    { name: 'Namkeen Making Machine', emoji: '🍿' },
    { name: 'Samosa Making Machine', emoji: '📐' },
    { name: 'Chakli Making Machine', emoji: '🌀' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 via-red-600 to-red-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 mb-6">
                <span className="text-sm font-medium">Innovation | Quality | Your Growth Partner</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Make Your Food Business{' '}
                <span className="text-yellow-300">Grow...</span>
              </h1>
              <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                Food Processing Machines for Your Business Success. We manufacture high-quality 
                machines that help you scale your food production efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center px-8 py-3 bg-yellow-400 text-gray-900 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  View Our Machines
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white hover:text-orange-700 transition-all"
                >
                  Send Enquiry
                </Link>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                  <div className="w-56 h-56 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                    <div className="text-center">
                      <div className="text-6xl mb-2">🏭</div>
                      <p className="text-sm font-medium">Food Processing</p>
                      <p className="text-sm font-medium">Solutions</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <span className="text-2xl">⚡</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-green-400 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-xl">✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Machines Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Food Processing Machines
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We manufacture a wide range of food processing machines to help your business thrive.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {machines.map((machine) => (
              <div
                key={machine.name}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="text-4xl mb-3">{machine.emoji}</div>
                <h3 className="text-sm font-semibold text-gray-800">{machine.name}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/products"
              className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors"
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
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
                className="text-center p-6 rounded-xl hover:bg-orange-50 transition-colors duration-300"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Scale Your Food Business?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Send us your enquiry today and let us help you find the perfect machine for your needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-yellow-400 text-gray-900 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Send Your Enquiry Today!
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">6+</div>
              <p className="text-gray-400 text-sm">Machine Types</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">100%</div>
              <p className="text-gray-400 text-sm">Quality Assured</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">24/7</div>
              <p className="text-gray-400 text-sm">Support Available</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">On-Time</div>
              <p className="text-gray-400 text-sm">Delivery Guaranteed</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
