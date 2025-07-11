import { useState, FormEvent } from 'react';
import { ArrowRight, Shield, CheckCircle, Users, Target } from 'lucide-react';
import { saveSubmission } from '../utils/dataManager';

const EmailCapture = () => {
  const [creatorForm, setCreatorForm] = useState({
    name: '',
    email: '',
    niche: ''
  });

  const [brandForm, setBrandForm] = useState({
    name: '',
    email: '',
    category: ''
  });

  const [creatorSubmitted, setCreatorSubmitted] = useState(false);
  const [brandSubmitted, setBrandSubmitted] = useState(false);

  const niches = ['Gaming', 'Fashion', 'Tech', 'Lifestyle', 'Fitness', 'Food', 'Travel', 'Beauty'];
  const categories = ['E-commerce', 'SaaS', 'Consumer Goods', 'Fashion', 'Tech', 'Health', 'Finance', 'Entertainment'];

  const handleCreatorSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    saveSubmission({
      name: creatorForm.name,
      email: creatorForm.email,
      niche: creatorForm.niche,
      type: 'creator'
    });

    setCreatorSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setCreatorForm({ name: '', email: '', niche: '' });
      setCreatorSubmitted(false);
    }, 3000);
  };

  const handleBrandSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    saveSubmission({
      name: brandForm.name,
      email: brandForm.email,
      category: brandForm.category,
      type: 'brand'
    });

    setBrandSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setBrandForm({ name: '', email: '', category: '' });
      setBrandSubmitted(false);
    }, 3000);
  };

  return (
    <section id="email-capture" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Creator Side */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 border border-gray-200 dark:border-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500 mb-4">
                Unlock Sponsorships
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg transition-colors duration-300">
                Get matched with brands that align with your content
              </p>
            </div>

            {creatorSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                  <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400 transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Thank You!</h4>
                <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">We'll be in touch with sponsorship opportunities soon.</p>
              </div>
            ) : (
              <form onSubmit={handleCreatorSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Name
                  </label>
                  <input
                    type="text"
                    value={creatorForm.name}
                    onChange={(e) => setCreatorForm({...creatorForm, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Email
                  </label>
                  <input
                    type="email"
                    value={creatorForm.email}
                    onChange={(e) => setCreatorForm({...creatorForm, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Niche
                  </label>
                  <select
                    value={creatorForm.niche}
                    onChange={(e) => setCreatorForm({...creatorForm, niche: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  >
                    <option value="">Select your niche</option>
                    {niches.map(niche => (
                      <option key={niche} value={niche}>{niche}</option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <span>Get Started as Creator</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>

          {/* Brand Side */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 border border-gray-200 dark:border-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500 mb-4">
                Launch Influencer Campaigns
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg transition-colors duration-300">
                Connect with creators who resonate with your audience
              </p>
            </div>

            {brandSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                  <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400 transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Thank You!</h4>
                <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">We'll connect you with perfect creators for your brand.</p>
              </div>
            ) : (
              <form onSubmit={handleBrandSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Name
                  </label>
                  <input
                    type="text"
                    value={brandForm.name}
                    onChange={(e) => setBrandForm({...brandForm, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Email
                  </label>
                  <input
                    type="email"
                    value={brandForm.email}
                    onChange={(e) => setBrandForm({...brandForm, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="your@company.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Product Category
                  </label>
                  <select
                    value={brandForm.category}
                    onChange={(e) => setBrandForm({...brandForm, category: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  >
                    <option value="">Select your category</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <span>Get Started as Brand</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Privacy Note */}
        <div className="text-center mt-8">
          <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400 transition-colors duration-300">
            <Shield className="w-4 h-4" />
            <span className="text-sm">We respect your inbox. No spam, ever.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailCapture;