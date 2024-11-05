import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              TheSchumann
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Enhancing wellness through Earth's natural frequency. Experience the power of 7.83 Hz.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-200">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/product" className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200 flex items-center group">
                  <ArrowRightIcon className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200 flex items-center group">
                  <ArrowRightIcon className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                 Scientific Research
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200 flex items-center group">
                  <ArrowRightIcon className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                 About The Project 
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-200">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="hover:text-purple-400 transition-colors duration-200">
                <a href="mailto:contact@theschumann.com">contact@theschumann.com</a>
              </li>
              <li className="hover:text-purple-400 transition-colors duration-200">
                <a href="tel:+15551234567">(555) 123-4567</a>
              </li>
              <li className="text-gray-400">
      Schumann Technologies GmbH<br />
      Mariahilfer Straße 47<br />
      1060 Vienna, Austria
    </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Schumann. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here you would typically handle the API call
    }
  };

  return (
    <div>
      <h3 className="text-lg font-bold mb-6 text-gray-200">Stay Updated</h3>
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.form 
            className="space-y-3"
            onSubmit={handleSubmit}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-zinc-800/50 border border-white/10 rounded-xl text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors duration-200"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 py-3 rounded-xl text-sm font-medium transition-all duration-200"
            >
              Subscribe
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-zinc-800/30 backdrop-blur-xl border border-white/10 p-6 rounded-xl text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="mb-4"
            >
              <SparklesIcon className="h-12 w-12 mx-auto text-purple-400" />
            </motion.div>
            <h4 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              Welcome to Schumann!
            </h4>
            <p className="text-gray-400 text-sm">
              Thank you for joining our community. Get ready to experience the power of Earth's natural frequency.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Footer; 