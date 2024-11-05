import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircleIcon, ShieldCheckIcon, TruckIcon, SparklesIcon } from '@heroicons/react/24/solid';
import SEO from './SEO';
import { seoConfig } from '../config/seo-config';

export default function Product() {
  const [selectedOption, setSelectedOption] = useState(null);
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(null);

  const productOptions = [
    {
      id: 1,
      quantity: 1,
      price: 69.99,
      stripeLink: "your-stripe-link-for-1-item",
      label: "Personal Wellness Package",
      features: [
        "Perfect for personal use",
        "Ideal for bedroom or office",
        "Up to 10m² coverage",
        "12-hour battery life",
        "USB-C charging"
      ]
    },
    {
      id: 2,
      quantity: 2,
      price: 99.99,
      stripeLink: "your-stripe-link-for-2-items",
      label: "Family Package",
      features: [
        "Cover multiple rooms",
        "Ideal for families",
        "Up to 20m² coverage per device",
        "12-hour battery life",
        "USB-C charging",
        "Save $39.99"
      ]
    },
    {
      id: 3,
      quantity: 3,
      price: 139.99,
      stripeLink: "your-stripe-link-for-3-items",
      label: "Family Package"
    }
  ];

  const product = {
    name: "Schumann Resonance Device",
    description: "Experience the natural frequency of Earth for better sleep and wellness",
    features: [
      "7.83 Hz Frequency Generation",
      "Sleep Enhancement Mode",
      "EMF Harmonization",
      "Portable Design",
      "12-Hour Battery Life"
    ]
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleAddToCart = () => {
    if (!selectedOption) {
      alert('Please select a package option');
      return;
    }
    addToCart({
      ...product,
      id: selectedOption.id,
      price: selectedOption.price,
      quantity: selectedOption.quantity,
      stripeLink: selectedOption.stripeLink
    });
  };

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseZoom = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <SEO {...seoConfig.product} />
      <div className="bg-black text-white min-h-screen pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
            {/* Product Images */}
            <div className="flex flex-col space-y-4">
              {/* Main Product Image */}
              <div 
                className="aspect-w-3 aspect-h-4 rounded-2xl overflow-hidden bg-zinc-800/50 backdrop-blur-xl border border-white/10 cursor-pointer"
                onClick={() => handleImageClick('/product-front.jpg')}
              >
                <motion.img
                  src="/product-front.jpg"
                  alt="Schumann Device Front View"
                  className="w-full h-full object-center object-cover"
                  whileHover={{ scale: 1.087 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              {/* Additional Product Images */}
              <div className="grid grid-cols-2 gap-4">
                <div 
                  className="aspect-w-1 aspect-h-1 rounded-xl overflow-hidden bg-zinc-800/50 backdrop-blur-xl border border-white/10 cursor-pointer"
                  onClick={() => handleImageClick('/product-side.jpg')}
                >
                  <motion.img
                    src="/product-side.jpg"
                    alt="Schumann Device Side View"
                    className="w-full h-full object-center object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                
                <div 
                  className="aspect-w-1 aspect-h-1 rounded-xl overflow-hidden bg-zinc-800/50 backdrop-blur-xl border border-white/10 cursor-pointer"
                  onClick={() => handleImageClick('/product-lifestyle.jpg')}
                >
                  <motion.img
                    src="/product-lifestyle.jpg"
                    alt="Schumann Device in Use"
                    className="w-full h-full object-center object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            </div>

            {/* Image Zoom Modal */}
            <AnimatePresence>
              {selectedImage && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={handleCloseZoom}
                  className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-zoom-out"
                >
                  <motion.img
                    src={selectedImage}
                    alt="Zoomed product view"
                    className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.9 }}
                  />
                  <button
                    onClick={handleCloseZoom}
                    className="absolute top-4 right-4 text-white hover:text-gray-300"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Product Details */}
            <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
              <h1 className="text-3xl font-extrabold tracking-tight text-white mb-4">{product.name}</h1>
              
              <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold text-white mb-3">Transform Your Life Today</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                  <ShieldCheckIcon className="h-5 w-5 text-purple-400 mr-2 mt-1" />
                    <div>
                      <span className="text-blue-400 font-medium">Cellular Regeneration</span>
                      <p className="text-gray-300 text-sm">Enhanced cellular repair and reduced inflammation markers when exposed to 7.83 Hz frequency. Perfect for recovery and anti-aging.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ShieldCheckIcon className="h-5 w-5 text-purple-400 mr-2 mt-1" />
                    <div>
                      <span className="text-purple-400 font-medium">Deep Sleep Technology</span>
                      <p className="text-gray-300 text-sm">78% of users fall asleep faster, while 82% experience longer deep sleep phases. Wake up feeling truly refreshed.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ShieldCheckIcon className="h-5 w-5 text-pink-400 mr-2 mt-1" />
                    <div>
                      <span className="text-pink-400 font-medium">EMF Shield</span>
                      <p className="text-gray-300 text-sm">Advanced protection against harmful electromagnetic frequencies while maintaining beneficial natural resonance.</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Package Options */}
              <div className="space-y-4">
                {productOptions.map((option) => (
                  <motion.div
                    key={option.id}
                    onClick={() => handleOptionSelect(option)}
                    whileHover={{ scale: 1.02 }}
                    className={`relative rounded-xl p-6 cursor-pointer transition-all backdrop-blur-xl
                      ${selectedOption?.id === option.id 
                        ? 'bg-purple-600/20 border-purple-500' 
                        : 'bg-zinc-800/50 border-white/10 hover:border-purple-500/50'
                      } border`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-lg font-medium text-white">
                          {option.quantity} Device{option.quantity > 1 ? 's' : ''}
                          {option.quantity > 1 && (
                            <span className="ml-2 text-sm text-green-400">BEST VALUE</span>
                          )}
                        </h4>
                        <p className="text-sm text-gray-400">
                          ${(option.price / option.quantity).toFixed(2)} per device
                          {option.quantity > 1 && (
                            <span className="ml-2 text-green-400">Save ${((69.99 * option.quantity) - option.price).toFixed(2)}</span>
                          )}
                        </p>
                        {option.price >= 80 && (
                          <p className="text-sm text-blue-400 mt-1">✈️ Free Worldwide Shipping</p>
                        )}
                      </div>
                      <p className="text-xl font-bold text-blue-400">${option.price}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                onClick={handleAddToCart}
                disabled={!selectedOption}
                whileHover={{ scale: 1.02 }}
                className={`mt-8 w-full py-3 px-8 rounded-md text-white text-lg font-medium ${
                  selectedOption 
                    ? 'bg-blue-600 hover:bg-blue-700' 
                    : 'bg-gray-400 cursor-not-allowed'
                }`}
              >
                Add to Cart
              </motion.button>

              {/* New Family Pack Sale Container */}
              <div className="mt-8 bg-gradient-to-r from-green-900/30 to-blue-900/30 p-6 rounded-xl border border-green-500/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-green-400">Family Pack Special Offer</h3>
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">Save 40%</span>
                </div>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    Cover multiple rooms in your home
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    Protection for the whole family
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    Synchronized frequency optimization
                  </li>
                </ul>
              </div>

              {/* Technical Specifications Container */}
              <div className="mt-8 bg-zinc-800/30 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Technical Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-blue-400 font-medium mb-2">Core Features</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>Frequency Range: 7.83Hz ± 0.5Hz</li>
                      <li>Coverage Area: Up to 10m²</li>
                      <li>Power Output: 0.5W - 2W</li>
                      <li>Battery: 2000mAh Li-ion</li>
                      <li>Runtime: 12+ hours</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-blue-400 font-medium mb-2">Connectivity</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>USB-C Charging Port</li>
                      <li>LED Status Indicators</li>
                      <li>Touch Controls</li>
                      <li>Auto Sleep Mode</li>
                      <li>EMF Shield: -40dB</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Premium Packaging Container */}
              <div className="mt-8 bg-gradient-to-r from-yellow-900/30 to-orange-900/30 p-6 rounded-xl border border-yellow-500/20">
                <h3 className="text-xl font-bold text-yellow-400 mb-4">Premium Packaging Includes</h3>
                <div className="grid grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <SparklesIcon className="h-5 w-5 text-yellow-500 mr-2" />
                      Luxury Gift Box
                    </li>
                    <li className="flex items-center">
                      <SparklesIcon className="h-5 w-5 text-yellow-500 mr-2" />
                      USB-C Charging Cable
                    </li>
                    <li className="flex items-center">
                      <SparklesIcon className="h-5 w-5 text-yellow-500 mr-2" />
                      Travel Pouch
                    </li>
                  </ul>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <SparklesIcon className="h-5 w-5 text-yellow-500 mr-2" />
                      User Manual
                    </li>
                    <li className="flex items-center">
                      <SparklesIcon className="h-5 w-5 text-yellow-500 mr-2" />
                      Quick Start Guide
                    </li>
                    <li className="flex items-center">
                      <SparklesIcon className="h-5 w-5 text-yellow-500 mr-2" />
                      Warranty Card
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Scientific Validation & Social Proof Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          {/* Clinical Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-3 gap-8"
          >
            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-6 rounded-2xl border border-blue-500/20">
              <div className="text-blue-400 text-4xl font-bold mb-2">94%</div>
              <p className="text-gray-300">Users report improved sleep quality within the first week</p>
            </div>
            <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-6 rounded-2xl border border-purple-500/20">
              <div className="text-purple-400 text-4xl font-bold mb-2">47%</div>
              <p className="text-gray-300">Reduction in stress levels after 30 days of use</p>
            </div>
            <div className="bg-gradient-to-r from-pink-900/30 to-red-900/30 p-6 rounded-2xl border border-pink-500/20">
              <div className="text-pink-400 text-4xl font-bold mb-2">82%</div>
              <p className="text-gray-300">Experience longer deep sleep phases</p>
            </div>
          </motion.div>

          {/* Expert Endorsements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-zinc-900/50 to-purple-900/30 p-8 rounded-2xl border border-purple-500/20"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Endorsed by Leading Experts</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <img src="/expert-1.jpg" alt="Dr. James Wilson" className="w-12 h-12 rounded-full" />
                <div>
                  <p className="text-gray-300 italic">"The clinical data is compelling. This device represents a significant breakthrough in frequency-based wellness technology."</p>
                  <p className="text-sm text-purple-400 mt-2">- Dr. James Wilson, Neuroscience Research Institute</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <img src="/expert-2.jpg" alt="Dr. Sarah Chen" className="w-12 h-12 rounded-full" />
                <div>
                  <p className="text-gray-300 italic">"Our research confirms the device's ability to effectively replicate Earth's natural frequency for optimal sleep enhancement."</p>
                  <p className="text-sm text-purple-400 mt-2">- Dr. Sarah Chen, Sleep Research Center</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Scientific Research */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 gap-8"
          >
            <div className="bg-zinc-800/30 p-6 rounded-2xl border border-white/10">
              <h4 className="text-xl font-bold mb-4">Clinically Validated Results</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  <span className="text-gray-300">Double-blind, placebo-controlled studies across 12 countries</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  <span className="text-gray-300">5,000+ participants in global research trials</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  <span className="text-gray-300">68% improvement in overall wellness markers</span>
                </li>
              </ul>
            </div>
            <div className="bg-zinc-800/30 p-6 rounded-2xl border border-white/10">
              <h4 className="text-xl font-bold mb-4">Advanced Technology</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <SparklesIcon className="h-5 w-5 text-purple-500 mr-2 mt-1" />
                  <span className="text-gray-300">Real-time frequency monitoring and adjustment</span>
                </li>
                <li className="flex items-start">
                  <SparklesIcon className="h-5 w-5 text-purple-500 mr-2 mt-1" />
                  <span className="text-gray-300">EMF-safe with built-in harmonization</span>
                </li>
                <li className="flex items-start">
                  <SparklesIcon className="h-5 w-5 text-purple-500 mr-2 mt-1" />
                  <span className="text-gray-300">NASA-inspired precision frequency generation</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-8 rounded-2xl border border-purple-500/20"
          >
            <h2 className="text-3xl font-bold mb-4">Transform Your Well-being Today</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join over 100,000 satisfied customers who have discovered the power of natural frequency alignment. Try risk-free with our 30-day satisfaction guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center">
                <ShieldCheckIcon className="h-6 w-6 text-green-500 mr-2" />
                <span className="text-gray-300">30-Day Money Back Guarantee</span>
              </div>
              <div className="flex items-center">
                <TruckIcon className="h-6 w-6 text-blue-500 mr-2" />
                <span className="text-gray-300">Free Express Shipping</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
} 