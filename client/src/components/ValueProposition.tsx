
import { FileText, MessageCircle, RefreshCw, Zap } from 'lucide-react';

const ValueProposition = () => {
  const features = [
    {
      icon: FileText,
      title: 'Paperwork Handled',
      description: 'Contracts, NDAs, payment terms',
      benefit: 'Free your time'
    },
    {
      icon: MessageCircle,
      title: 'Communication Managed',
      description: 'Meeting scheduling, negotiation, updates',
      benefit: 'Zero back-and-forth'
    },
    {
      icon: RefreshCw,
      title: 'Proactive Follow-ups',
      description: 'Bi-weekly progress reports for both parties',
      benefit: 'Guaranteed updates'
    },
    {
      icon: Zap,
      title: 'Zero Intervention',
      description: 'We act as your dedicated partnership ops team',
      benefit: 'Complete automation'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500 mb-4">
            Why Spend Hours Managing Sponsorships?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
            Focus on creating, not coordinating. We handle sponsorships so you don't have to.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group text-center p-8 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-emerald-600 group-hover:to-blue-600 transition-all duration-300 transform group-hover:scale-110">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed transition-colors duration-300">
                {feature.description}
              </p>
              
              <div className="text-sm font-medium text-white bg-gradient-to-r from-emerald-500 to-blue-500 px-3 py-1 rounded-full inline-block transition-colors duration-300">
                {feature.benefit}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;