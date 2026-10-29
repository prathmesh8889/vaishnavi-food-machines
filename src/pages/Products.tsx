import { Link } from 'react-router-dom';

export default function Products() {
  const products = [
    {
      name: 'Pani Puri Machine',
      emoji: '🥟',
      description: 'Automated pani puri making machine that produces uniform, hygienic puris at high speed. Perfect for street food businesses and catering services.',
      features: ['High production capacity', 'Uniform size & shape', 'Easy to operate', 'Stainless steel body'],
    },
    {
      name: 'Papad Machine',
      emoji: '🫓',
      description: 'Efficient papad making machine that rolls and shapes papads consistently. Ideal for small to large-scale papad manufacturing units.',
      features: ['Adjustable thickness', 'Multiple size options', 'Low maintenance', 'Energy efficient'],
    },
    {
      name: 'Atta Mixer Machine',
      emoji: '🥣',
      description: 'Heavy-duty atta (dough) mixer designed for consistent mixing of flour and water. Essential for any food processing unit.',
      features: ['Powerful motor', 'Even mixing action', 'Large capacity', 'Durable construction'],
    },
    {
      name: 'Namkeen Making Machine',
      emoji: '🍿',
      description: 'Complete namkeen production line that handles mixing, forming, and frying. Perfect for traditional Indian snack manufacturing.',
      features: ['Multi-purpose design', 'Consistent output', 'Easy cleaning', 'Various shapes possible'],
    },
    {
      name: 'Samosa Making Machine',
      emoji: '📐',
      description: 'Automatic samosa making machine that produces perfectly shaped samosa covers. Greatly increases production speed and consistency.',
      features: ['Perfect shape every time', 'High speed production', 'Adjustable size', 'Minimal wastage'],
    },
    {
      name: 'Chakli Making Machine',
      emoji: '🌀',
      description: 'Precision chakli (murukku) making machine for producing uniform, beautifully shaped chaklis at scale.',
      features: ['Multiple die options', 'Consistent pressure', 'Easy dough loading', 'Smooth operation'],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Explore our range of food processing machines designed to help your business grow efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.name}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
              >
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 text-center group-hover:from-orange-100 group-hover:to-red-100 transition-colors">
                  <div className="text-6xl mb-2">{product.emoji}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{product.description}</p>
                  <div className="space-y-2">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm">
                        <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 text-sm transition-colors"
                  >
                    Enquire Now
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Machines */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 md:p-12 border border-orange-100">
            <div className="text-5xl mb-4">🔧</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Other Food Processing Machines
            </h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              We also manufacture custom food processing machines tailored to your specific requirements. 
              Contact us to discuss your needs and we'll design the perfect solution for your business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              Discuss Your Requirements
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
