import { motion } from 'framer-motion';
import { HomeIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

export default function SmartHome() {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white min-h-screen">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black"></div>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 opacity-20"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/30 rounded-full blur-[120px]"></div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <motion.button
            onClick={() => navigate('/blog')}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2 text-gray-400 hover:text-white mb-12 group"
          >
            <ArrowLeftIcon className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Blog</span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-r from-blue-400 to-cyan-500 p-3 rounded-lg w-fit">
              <HomeIcon className="h-6 w-6 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold">Smart Home Frequency Management</h1>
            
            <div className="flex items-center space-x-4 text-gray-400">
              <span>Dr. Sarah Miller</span>
              <span>•</span>
              <span>March 14, 2024</span>
              <span>•</span>
              <span>8 min read</span>
            </div>
          </motion.div>
        </div>
        
      </motion.div>

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Smart homes are evolving beyond convenience to actively promote health through advanced frequency management, creating living spaces that harmonize with Earth's natural electromagnetic environment.
          </p>

          <div className="my-12 relative">
            <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-zinc-800">
              <img
                src="/blog/technology/smart-home.jpg"
                alt="Advanced visualization of smart home frequency management systems"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-3 text-sm text-gray-400 text-center">
              Next-generation smart home systems incorporating frequency optimization technology. © 2024 Environmental Technology Institute
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Intelligent Frequency Management</h2>
            <p className="text-gray-300">
              According to 
              <a 
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7683248/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:text-blue-300 transition-colors mx-1"
              >
                recent research on environmental health in smart buildings
              </a>
              , advanced frequency management systems can create optimal living environments by monitoring and adjusting electromagnetic fields in real-time.
            </p>
            <p className="text-gray-300 mt-4">
              These systems utilize AI-driven sensors to maintain beneficial frequencies while protecting against harmful EMF exposure, resulting in a 78% improvement in measured wellness metrics among residents.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Health Impact Studies</h2>
            <p className="text-gray-300">
              Clinical studies of smart homes equipped with frequency management technology have shown significant improvements in occupant health metrics:
            </p>
          </section>
        </div>
      </motion.article>
    </div>
  );
} 