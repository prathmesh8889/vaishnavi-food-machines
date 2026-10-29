import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">VE</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Vaishnavi Engineers</h3>
                <p className="text-xs text-gray-400">Innovation | Quality | Your Growth Partner</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Leading manufacturer of food processing machines. We help food businesses grow with 
              high-quality, efficient, and reliable machinery solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-orange-400 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white text-sm transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white text-sm transition-colors">Products</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white text-sm transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-orange-400 mb-4">Our Machines</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400 text-sm">Pani Puri Machine</span></li>
              <li><span className="text-gray-400 text-sm">Papad Machine</span></li>
              <li><span className="text-gray-400 text-sm">Atta Mixer Machine</span></li>
              <li><span className="text-gray-400 text-sm">Namkeen Making Machine</span></li>
              <li><span className="text-gray-400 text-sm">Samosa Making Machine</span></li>
              <li><span className="text-gray-400 text-sm">Chakli Making Machine</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Vaishnavi Engineers. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">
            Make Your Food Business Grow...
          </p>
        </div>
      </div>
    </footer>
  );
}
