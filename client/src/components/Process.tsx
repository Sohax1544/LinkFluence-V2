
import { Target, Users, TrendingUp } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Target,
      title: 'You Share Goals',
      description: 'Tell us your objectives, audience, and preferences'
    },
    {
      icon: Users,
      title: 'We Match & Manage',
      description: 'Perfect partnerships with full coordination handled'
    },
    {
      icon: TrendingUp,
      title: 'You Grow',
      description: 'Focus on content while we ensure campaign success'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 transition-colors">
            Simple, streamlined, and stress-free
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12">
          {steps.map((step, index) => (
            <div key={index}>
              <div className="text-center max-w-xs">
                <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center mx-auto mb-6 border-4 border-blue-100 dark:border-blue-900 transition-colors">
                  <step.icon className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-blue-300 to-cyan-300 dark:from-blue-600 dark:to-cyan-600"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;