import { Link } from 'react-router-dom';

const products = [
  {
    name: 'Pani Puri Machine',
    image: 'https://image.qwenlm.ai/generated-images/e818550d-8541-45e4-a5a9-16e2cd8ac81e/_result.png',
    description: 'Automated pani puri making machine that produces uniform, hygienic puris at high speed. Perfect for street food businesses and catering services looking to scale production.',
    features: ['High production capacity', 'Uniform size & shape', 'Easy to operate', 'Stainless steel body', 'Low maintenance cost'],
  },
  {
    name: 'Papad Machine',
    image: 'https://image.qwenlm.ai/generated-images/ba1d8569-a72b-4705-8453-e02aeaf0f12d/_result.png',
    description: 'Efficient papad making machine that rolls and shapes papads consistently. Ideal for small to large-scale papad manufacturing units with consistent quality output.',
    features: ['Adjustable thickness', 'Multiple size options', 'Low maintenance', 'Energy efficient', 'Consistent quality'],
  },
  {
    name: 'Atta Mixer Machine',
    image: 'https://image.qwenlm.ai/generated-images/f70b9ce3-bacf-4d22-a335-93b32b002bd8/_result.png',
    description: 'Heavy-duty atta (dough) mixer designed for consistent mixing of flour and water. Essential for any food processing unit that needs reliable dough preparation.',
    features: ['Powerful motor', 'Even mixing action', 'Large capacity', 'Durable construction', 'Easy cleaning'],
  },
  {
    name: 'Namkeen Making Machine',
    image: 'https://image.qwenlm.ai/generated-images/a258f8aa-7837-4805-984d-2202f12edc15/_result.png',
    description: 'Complete namkeen production line that handles mixing, forming, and frying. Perfect for traditional Indian snack manufacturing with high output capacity.',
    features: ['Multi-purpose design', 'Consistent output', 'Easy cleaning', 'Various shapes possible', 'High throughput'],
  },
  {
    name: 'Samosa Making Machine',
    image: 'https://image.qwenlm.ai/generated-images/e1569c18-ed52-4817-8e98-2fadbb87a055/_result.png',
    description: 'Automatic samosa making machine that produces perfectly shaped samosa covers. Greatly increases production speed and consistency for your food business.',
    features: ['Perfect shape every time', 'High speed production', 'Adjustable size', 'Minimal wastage', 'User friendly'],
  },
  {
    name: 'Chakli Making Machine',
    image: 'https://image.qwenlm.ai/generated-images/2b73ad86-15d5-44c0-aafb-87a64d5791a7/_result.png',
    description: 'Precision chakli (murukku) making machine for producing uniform, beautifully shaped chaklis at scale. Perfect for snack manufacturers and food businesses.',
    features: ['Multiple die options', 'Consistent pressure', 'Easy dough loading', 'Smooth operation', 'High output'],
  },
];

export default function Products() {
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
            <span className="inline-block bg-[#c9a227]/20 border border-[#c9a227]/40 text-[#c9a227] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Our Products</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Machines</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our range of food processing machines designed to help your business grow efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={product.name}
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group hover:-translate-y-2"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0c2340] text-[#c9a227] text-xs font-bold px-3 py-1 rounded-full">
                    #{index + 1}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0c2340] mb-3 group-hover:text-[#1e40af] transition-colors">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-5 leading-relaxed">{product.description}</p>
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm">
                        <svg className="w-4 h-4 text-[#c9a227] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center w-full justify-center px-4 py-3 bg-[#0c2340] text-white rounded-lg font-semibold hover:bg-[#c9a227] hover:text-[#0c2340] transition-all text-sm"
                  >
                    Enquire Now
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-[#0c2340] to-[#1a365d] rounded-2xl p-10 md:p-14 border border-[#c9a227]/20 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, #c9a227 1px, transparent 0)',
                backgroundSize: '30px 30px'
              }}></div>
            </div>
            <div className="relative">
              <div className="w-16 h-16 bg-[#c9a227]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#c9a227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Other Food Processing Machines
              </h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                We also manufacture custom food processing machines tailored to your specific requirements. 
                Contact us to discuss your needs and we'll design the perfect solution for your business.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3.5 bg-[#c9a227] text-[#0c2340] rounded-lg font-bold hover:bg-[#f5d060] transition-all shadow-lg"
              >
                Discuss Your Requirements
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
