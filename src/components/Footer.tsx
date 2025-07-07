import React from 'react';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 dark:bg-black text-white py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="text-2xl font-bold">
              <span className="text-blue-400">Link</span>
              <span className="text-cyan-400">Fluence</span>
            </div>
          </div>
          
          <p className="text-gray-400 dark:text-gray-500 mb-6 max-w-2xl mx-auto transition-colors">
            Connecting creators and brands through seamless partnership management. 
            Focus on what you do best while we handle the rest.
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-gray-300 dark:text-gray-400 transition-colors">
            <Mail className="w-5 h-5" />
            <a 
              href="mailto:hello@linkfluence.com" 
              className="hover:text-white transition-colors"
            >
              hello@linkfluence.com
            </a>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 dark:border-gray-900 text-sm text-gray-500 dark:text-gray-600 transition-colors">
            <p>&copy; 2025 LinkFluence. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;