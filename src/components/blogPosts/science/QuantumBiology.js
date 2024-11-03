import { motion } from 'framer-motion';
import { SparklesIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

export default function QuantumBiology() {
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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/30 rounded-full blur-[120px]"></div>
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
            <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-3 rounded-lg w-fit">
              <SparklesIcon className="h-6 w-6 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold">Quantum Biology and Cellular Resonance</h1>
            
            <div className="flex items-center space-x-4 text-gray-400">
              <span>Dr. Elena Rodriguez</span>
              <span>•</span>
              <span>March 13, 2024</span>
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
            New research reveals how cells communicate using electromagnetic frequencies, revolutionizing our understanding of biological processes at the quantum level.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Quantum Cellular Communication</h2>
            <p className="text-gray-300">
              Recent discoveries in quantum biology have revealed that cells utilize electromagnetic frequencies for communication in ways previously thought impossible. This quantum coherence allows for instantaneous information transfer across biological systems.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Resonance in DNA</h2>
            <p className="text-gray-300">
              DNA molecules have been shown to exhibit specific frequency responses, suggesting a role for electromagnetic resonance in genetic expression and cellular repair mechanisms. These findings open new possibilities for frequency-based therapeutic approaches.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Clinical Applications</h2>
            <p className="text-gray-300">
              Understanding cellular frequency responses has led to breakthrough treatments in regenerative medicine and cancer therapy. By targeting specific cellular frequencies, researchers can influence cellular behavior with unprecedented precision.
            </p>
          </section>
        </div>
      </motion.article>
    </div>
  );
} 