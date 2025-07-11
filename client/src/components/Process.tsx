
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
    <section id="how-it-works" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-400 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-400">
            Simple, streamlined, and stress-free
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12">
          {steps.map((step, index) => (
            <div key={index}>
              <div className="text-center max-w-xs">
                <div className="w-20 h-20 bg-gray-800 rounded-full shadow-lg flex items-center justify-center mx-auto mb-6 border-4 border-blue-800">
                  <step.icon className="w-10 h-10 text-blue-400" />
                </div>
                
                <h3 className="text-xl font-semibold text-blue-400 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-emerald-600"></div>
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