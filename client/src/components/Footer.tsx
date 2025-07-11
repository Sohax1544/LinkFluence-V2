
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="text-2xl font-bold">
              <span className="text-blue-400">LinkFluence</span>
            </div>
          </div>
          
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Focus on creating, not coordinating. We handle sponsorships so you don't have to.
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <Mail className="w-5 h-5" />
            <a 
              href="mailto:linkfluence@gmail.com" 
              className="hover:text-blue-400 transition-colors"
            >
              linkfluence@gmail.com
            </a>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-gray-500">
            <p>&copy; 2025 LinkFluence. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;