import { useCart } from '../context/CartContext';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheckIcon, TruckIcon } from '@heroicons/react/24/solid';
import stripeLogo from '../assets/logos-png/stripe-logo.png';

export default function Cart() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, getTotalPrice, getStripeLink } = useCart();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    const stripeLinks = {
      1: 'https://buy.stripe.com/8wMaH22qO2yxeWc7ss',
      2: 'https://buy.stripe.com/7sI3eAc1oc97g0g289',
      3: 'https://buy.stripe.com/4gwcPa3uS0qpaFW5kn'
    };
    
    // Assuming there's only one item in cart for now
    const quantity = cart[0]?.quantity || 1;
    window.location.href = stripeLinks[quantity] || stripeLinks[1]; // Default to 1x package if quantity not found
  };

  const getPackageLabel = (quantity) => {
    switch (quantity) {
      case 1:
        return "Personal Wellness Package";
      case 2:
        return "Dual Package";
      case 3:
        return "Family Package";
      default:
        return "Package";
    }
  };

  const getPricePerUnit = (total, quantity) => {
    return (total / quantity).toFixed(2);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsCartOpen(false)}
        />
        
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-zinc-900 shadow-2xl"
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="text-xl font-semibold text-white">Your Cart</h2>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsCartOpen(false)}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <XMarkIcon className="h-6 w-6 text-white" />
              </motion.button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white/5 rounded-xl p-6 mb-4"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-medium text-white text-lg">{item.name}</h3>
                      <p className="text-purple-400 font-medium">
                        {getPackageLabel(item.quantity)}
                      </p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={removeFromCart}
                      className="text-red-400 hover:text-red-300 transition-colors"
                    >
                      <XMarkIcon className="h-5 w-5" />
                    </motion.button>
                  </div>

                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex justify-between">
                      <span>Quantity:</span>
                      <span className="text-white">{item.quantity} {item.quantity > 1 ? 'devices' : 'device'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Price per device:</span>
                      <span className="text-white">${getPricePerUnit(item.price, item.quantity)}</span>
                    </div>
                    {item.quantity > 1 && (
                      <div className="flex justify-between text-green-400">
                        <span>Savings:</span>
                        <span>${((69.99 * item.quantity) - item.price).toFixed(2)}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-white/10 p-6">
              {getTotalPrice() < 80 && (
                <div className="mb-4 text-center bg-blue-900/20 p-3 rounded-lg border border-blue-500/20">
                  <span className="text-sm text-blue-400">
                    Add ${(80 - getTotalPrice()).toFixed(2)} more for FREE Worldwide Shipping
                  </span>
                </div>
              )}
              
              <div className="flex justify-between mb-6">
                <span className="text-lg font-semibold text-white">Total</span>
                <span className="text-lg font-semibold text-white">
                  ${getTotalPrice().toFixed(2)}
                </span>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between p-4 bg-zinc-900/50 rounded-lg border border-white/5 hover:border-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <img 
                      src={stripeLogo} 
                      alt="Stripe" 
                      className="h-7 w-auto object-contain"
                    />
                    <div className="h-6 w-px bg-white/10" /> {/* Vertical divider */}
                    <div className="flex flex-col">
                      <span className="text-white/90 text-sm font-medium">Secure Checkout</span>
                      <span className="text-white/50 text-xs">Bank-level encryption</span>
                    </div>
                  </div>
                  <ShieldCheckIcon className="h-5 w-5 text-[#635BFF]" /> {/* Stripe's purple color */}
                </div>
                
                <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center">
                    <ShieldCheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="font-medium">256-bit SSL Security</span>
                  </div>
                  <div className="flex items-center">
                    <TruckIcon className="h-5 w-5 text-blue-500 mr-2" />
                    <span className="font-medium">{getTotalPrice() >= 80 ? 'Free Global Shipping' : 'Express Shipping'}</span>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCheckout}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-6 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg"
              >
                Secure Checkout
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
} 