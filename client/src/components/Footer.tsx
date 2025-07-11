
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="text-2xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500">LinkFluence</span>
            </div>
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto transition-colors duration-300">
            Focus on creating, not coordinating. We handle sponsorships so you don't have to.
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400 transition-colors duration-300">
            <Mail className="w-5 h-5" />
            <a 
              href="mailto:linkfluence@gmail.com" 
              className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-emerald-500 hover:to-blue-500 transition-colors duration-300"
            >
              linkfluence@gmail.com
            </a>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-sm text-gray-500 dark:text-gray-600 transition-colors duration-300">
            <p>&copy; 2025 LinkFluence. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;