import { motion } from 'framer-motion';
import { ShieldCheckIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

export default function ImmuneSystem() {
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
            <div className="bg-gradient-to-r from-green-400 to-emerald-500 p-3 rounded-lg w-fit">
              <ShieldCheckIcon className="h-6 w-6 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold">Immune System Enhancement</h1>
            
            <div className="flex items-center space-x-4 text-gray-400">
              <span>Dr. Robert Kim</span>
              <span>•</span>
              <span>March 10, 2024</span>
              <span>•</span>
              <span>9 min read</span>
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
            How frequency alignment strengthens your body's natural defense mechanisms, leading to improved immune response and overall health resilience.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Cellular Defense Mechanisms</h2>
            <p className="text-gray-300">
              Research has demonstrated that exposure to Earth's natural frequency can enhance cellular repair processes and reduce inflammation markers. This optimization at the cellular level provides a foundation for stronger immune response.
            </p>
            <p className="text-gray-300 mt-4">
              Studies show that cells exposed to the 7.83 Hz frequency exhibit improved mitochondrial function and more efficient cellular communication, key factors in immune system performance.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Clinical Evidence</h2>
            <p className="text-gray-300">
              Long-term studies of frequency alignment therapy have shown significant improvements in immune system markers, including increased natural killer cell activity and optimized inflammatory response patterns.
            </p>
          </section>
        </div>
      </motion.article>
    </div>
  );
} 