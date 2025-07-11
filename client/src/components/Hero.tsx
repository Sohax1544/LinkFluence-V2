
import { ArrowRight, Users, Zap } from 'lucide-react';

const Hero = () => {
  const scrollToEmailCapture = () => {
    const emailSection = document.getElementById('email-capture');
    if (emailSection) {
      emailSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Do what you do best.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500">Let us worry about everything in between</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            We manage contracts, communication, and follow-ups so creators create and brands sell
          </p>

          {/* Abstract Collaboration Visual */}
          <div className="mb-12 flex justify-center">
            <div className="relative w-80 h-40">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center space-x-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center transition-colors">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-emerald-400 to-blue-500 relative">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center transition-colors">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToEmailCapture}
              className="group bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <span>Creators: Get Sponsors</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={scrollToEmailCapture}
              className="group border-2 border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <span>Brands: Find Influencers</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="mt-8 text-sm text-gray-500 dark:text-gray-400 transition-colors">
            <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full font-medium transition-colors">
              🔥 First 50 signups get free contract review
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;