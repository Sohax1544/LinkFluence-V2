
import { Star, Users, CheckCircle } from 'lucide-react';

const SocialProof = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6">


        {/* Trust Badges */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mb-4 transition-colors">
              <Users className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
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
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4 transition-colors">
              <Star className="w-8 h-8 text-blue-600 dark:text-blue-400" />
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