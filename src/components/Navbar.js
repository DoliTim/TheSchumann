import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpenIcon, 
  InformationCircleIcon, 
  PhoneIcon,
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import logo from '../assets/logo.png';
export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleMobileNavigation = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center space-x-3 group"
            >
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-r from-gray-300 via-purple-500 to-purple-600 p-[2px]">
  <div className="w-full h-full rounded-full bg-black flex items-center justify-center p-[2px]">
    <img 
      src={logo} 
      alt="TheSchumann Logo" 
      className="w-full h-full object-cover rounded-full"
    />
  </div>
</div>
              <span className="font-bold text-xl bg-gradient-to-r from-gray-300 via-purple-500 to-purple-600 text-transparent bg-clip-text hover:from-gray-200 hover:via-purple-400 hover:to-purple-500 transition-all">
                TheSchumann
              </span>
            </button>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => navigate('/product')}
              className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 rounded-lg"
            >
              <ShoppingCartIcon className="h-5 w-5" />
              <span>Buy Now</span>
            </button>
            <button 
              onClick={() => navigate('/blog')}
              className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2"
            >
              <BookOpenIcon className="h-5 w-5" />
              <span>Blog</span>
            </button>
            <button 
              onClick={() => navigate('/about')}
              className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2"
            >
              <InformationCircleIcon className="h-5 w-5" />
              <span>About</span>
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2"
            >
              <PhoneIcon className="h-5 w-5" />
              <span>Contact</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-b border-white/10"
          >
            <div className="px-4 py-4 space-y-4">
              <button 
                onClick={() => handleMobileNavigation('/product')}
                className="w-full text-gray-300 hover:text-white transition-colors flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 rounded-lg"
              >
                <ShoppingCartIcon className="h-5 w-5" />
                <span>Buy Now</span>
              </button>
              <button 
                onClick={() => handleMobileNavigation('/blog')}
                className="w-full text-gray-300 hover:text-white transition-colors flex items-center space-x-2"
              >
                <BookOpenIcon className="h-5 w-5" />
                <span>Blog</span>
              </button>
              <button 
                onClick={() => handleMobileNavigation('/about')}
                className="w-full text-gray-300 hover:text-white transition-colors flex items-center space-x-2"
              >
                <InformationCircleIcon className="h-5 w-5" />
                <span>About</span>
              </button>
              <button 
                onClick={() => handleMobileNavigation('/contact')}
                className="w-full text-gray-300 hover:text-white transition-colors flex items-center space-x-2"
              >
                <PhoneIcon className="h-5 w-5" />
                <span>Contact</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
} 