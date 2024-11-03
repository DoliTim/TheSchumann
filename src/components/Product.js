import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import { CheckCircleIcon, ShieldCheckIcon, TruckIcon, SparklesIcon } from '@heroicons/react/24/solid';

function Product() {
  const [selectedOption, setSelectedOption] = useState(null);
  const { addToCart } = useCart();

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

  return (
    <div className="bg-black text-white min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Product Images */}
          <div className="flex flex-col space-y-4">
            {/* Main Product Image */}
            <div className="aspect-w-3 aspect-h-4 rounded-2xl overflow-hidden bg-zinc-800/50 backdrop-blur-xl border border-white/10">
              <img
                src="/product-front.jpg"
                alt="Schumann Device Front View"
                className="w-full h-full object-center object-cover"
              />
            </div>
            
            {/* Additional Product Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative group">
                <div className="aspect-w-1 aspect-h-1 rounded-xl overflow-hidden bg-zinc-800/50 backdrop-blur-xl border border-white/10">
                  <img
                    src="/product-side.jpg"
                    alt="Schumann Device Side View"
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center p-4">
                  <p className="text-sm text-white text-center">
                    Sleek, portable design fits perfectly on your nightstand or desk. Built with premium materials for durability and style.
                  </p>
                </div>
              </div>
              
              <div className="relative group">
                <div className="aspect-w-1 aspect-h-1 rounded-xl overflow-hidden bg-zinc-800/50 backdrop-blur-xl border border-white/10">
                  <img
                    src="/product-lifestyle.jpg"
                    alt="Schumann Device in Use"
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center p-4">
                  <p className="text-sm text-white text-center">
                    Experience the perfect sleep environment. Users report falling asleep 47% faster and waking up feeling refreshed.
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-zinc-800/30 backdrop-blur-xl border border-white/10 p-6 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <ShieldCheckIcon className="h-6 w-6 text-green-500 mr-2" />
                  <span className="text-green-400">30-Day Money Back Guarantee</span>
                </div>
                <div className="flex items-center">
                  <TruckIcon className="h-6 w-6 text-blue-500 mr-2" />
                  <span className="text-blue-400">Free Express Shipping</span>
                </div>
              </div>
              <div className="text-center text-sm text-gray-400">
                🔥 <span className="text-yellow-500 font-semibold">Limited Time Offer</span> - Only {Math.floor(Math.random() * 10) + 5} units left at this price
              </div>
            </div>

            {/* Additional Benefits */}
            <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-6 rounded-xl">
              <h4 className="text-lg font-semibold mb-3">Why Customers Love It:</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start">
                  <SparklesIcon className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-1" />
                  <span>"I've never slept better in my life" - Sarah M.</span>
                </li>
                <li className="flex items-start">
                  <SparklesIcon className="h-5 w-5 text-purple-400 mr-2 flex-shrink-0 mt-1" />
                  <span>"My anxiety levels dropped significantly" - Michael R.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Product Details */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-white mb-4">{product.name}</h1>
            
            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-bold text-white mb-3">Transform Your Life Today</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  <span className="text-gray-300">94% report better sleep within first week</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  <span className="text-gray-300">Reduce stress & anxiety naturally</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  <span className="text-gray-300">NASA-inspired technology</span>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product; 