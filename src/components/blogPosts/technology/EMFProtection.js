import { motion } from 'framer-motion';
import { ShieldCheckIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

export default function EMFProtection() {
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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/30 rounded-full blur-[120px]"></div>
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
            <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-3 rounded-lg w-fit">
              <ShieldCheckIcon className="h-6 w-6 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold">EMF Protection Innovation</h1>
            
            <div className="flex items-center space-x-4 text-gray-400">
              <span>Dr. James Wilson</span>
              <span>•</span>
              <span>March 09, 2024</span>
              <span>•</span>
              <span>7 min read</span>
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
            Latest developments in technology that helps maintain healthy frequency exposure while protecting against harmful electromagnetic frequencies.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Advanced Shielding Technology</h2>
            <p className="text-gray-300">
              Recent breakthroughs in metamaterial science have led to the development of selective frequency shielding, capable of filtering harmful EMF while preserving beneficial natural frequencies. These innovations represent a significant advancement in EMF protection.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Smart Frequency Management</h2>
            <p className="text-gray-300">
              New adaptive EMF protection systems use AI-driven sensors to monitor and adjust shielding responses in real-time, providing optimal protection while maintaining essential connectivity. This dynamic approach ensures maximum effectiveness in varying electromagnetic environments.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Integration Solutions</h2>
            <p className="text-gray-300">
              The latest generation of EMF protection technology seamlessly integrates into everyday items, from clothing to building materials, making comprehensive protection both practical and accessible for daily life.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Research Validation</h2>
            <p className="text-gray-300">
              According to 
              <a 
                href="https://signalsdefense.com/future-of-emf-shielding/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:text-blue-300 transition-colors mx-1"
              >
                recent developments in EMF shielding technology
              </a>
              , next-generation metamaterials and AI-driven solutions show unprecedented effectiveness in selective frequency management while maintaining beneficial electromagnetic exposure.
            </p>
          </section>

          <div className="my-12 relative">
            <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-zinc-800">
              <img
                src="/blog/technology/emf-protection.jpg"
                alt="Advanced visualization of EMF shielding technology and selective frequency filtering"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-3 text-sm text-gray-400 text-center">
              Visualization of next-generation EMF shielding technology using metamaterials and AI-driven frequency management. © 2024 EMF Research Institute
            </p>
          </div>
        </div>
      </motion.article>
    </div>
  );
} 