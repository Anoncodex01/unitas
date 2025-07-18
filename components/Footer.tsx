import { Mail, Phone, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                <span>Morogoro, Tanzania</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <span>+255 754 934340</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <span>info@unitassisters.org</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/" className="block text-gray-300 hover:text-white transition-colors">
                Home
              </a>
              <a href="/about" className="block text-gray-300 hover:text-white transition-colors">
                About Us
              </a>
              <a href="/mission" className="block text-gray-300 hover:text-white transition-colors">
                Mission
              </a>
              <a href="/contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* About Summary */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Unitas</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              We are Consecrated women called to Imitate the Life of Jesus in the World! Living amidst the people, brings hope!
            </p>
            <div className="flex items-center text-blue-400">
              <Heart className="w-5 h-5 mr-2" />
              <span className="text-sm">Serving with Love</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Unitas Sisters. All rights reserved. | 
            <span className="ml-2">Made with ❤️ for God's glory</span>
          </p>
        </div>
      </div>
    </footer>
  );
} 