
import { Moon, Sun } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';

const Header = () => {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-blue-500 dark:text-blue-400 transition-colors duration-300">LinkFluence</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                How It Works
              </a>
              <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                Features
              </a>
              <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                Contact
              </a>
            </nav>
            
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;