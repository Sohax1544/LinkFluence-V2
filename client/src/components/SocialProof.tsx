import React from 'react';
import { Star, Users, CheckCircle } from 'lucide-react';

const SocialProof = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        {/* Testimonial */}
        <div className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-white mb-6 leading-relaxed transition-colors">
              "Saved 20hrs/month on sponsor coordination! Now I can focus on what I do best – creating content that my audience loves."
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">SC</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900 dark:text-white transition-colors">Sarah Chen</div>
                <div className="text-gray-600 dark:text-gray-400 transition-colors">Tech Creator, 500K followers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4 transition-colors">
              <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">100+</div>
            <div className="text-gray-600 dark:text-gray-400 transition-colors">Campaigns Managed</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4 transition-colors">
              <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">95%</div>
            <div className="text-gray-600 dark:text-gray-400 transition-colors">Satisfaction Rate</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4 transition-colors">
              <Star className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">4.9/5</div>
            <div className="text-gray-600 dark:text-gray-400 transition-colors">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;