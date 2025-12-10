import React from 'react';
import Button from '../common/Button';

const Footer: React.FC = () => {
  const footerLinks = {
    Product: ['Features', 'Pricing', 'API', 'Integrations', 'Changelog'],
    Company: ['About', 'Blog', 'Careers', 'Press', 'Partners'],
    Resources: ['Documentation', 'Help Center', 'Community', 'Contact', 'Status'],
    Legal: ['Privacy', 'Terms', 'Security', 'Cookies'],
    Social: ['Twitter', 'LinkedIn', 'Facebook', 'Instagram', 'YouTube'],
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with AI Insights
            </h3>
            <p className="text-gray-400 mb-6">
              Get the latest AI trends, tips, and exclusive content delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
              />
              <Button variant="primary" size="md">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm hover:text-purple-400 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">AI</span>
            </div>
            <span className="text-white font-semibold">AI Tool</span>
          </div>
          <p className="text-sm text-gray-400">
            © 2024 AI Tool. All rights reserved.
          </p>
        </div>
      </div>

      {/* Animated Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-3 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-white font-medium mx-8">🚀 Limited Time Offer</span>
          <span className="text-white font-medium mx-8">✨ Get 50% Off Pro Plan</span>
          <span className="text-white font-medium mx-8">🎉 Join 10,000+ Users</span>
          <span className="text-white font-medium mx-8">💎 Premium Features</span>
          <span className="text-white font-medium mx-8">🚀 Limited Time Offer</span>
          <span className="text-white font-medium mx-8">✨ Get 50% Off Pro Plan</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
