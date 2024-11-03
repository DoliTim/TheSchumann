import { motion } from 'framer-motion';
import { AcademicCapIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

export default function NASAResearch() {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white min-h-screen">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative overflow-hidden"
      >
        {/* Background Elements - using styling from Home.js */}
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
            <div className="bg-gradient-to-r from-indigo-400 to-blue-500 p-3 rounded-lg w-fit">
              <AcademicCapIcon className="h-6 w-6 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold">NASA's Frequency Research Breakthroughs</h1>
            
            <div className="flex items-center space-x-4 text-gray-400">
              <span>Dr. James Maxwell</span>
              <span>•</span>
              <span>March 14, 2024</span>
              <span>•</span>
              <span>10 min read</span>
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
            How space research revolutionized our understanding of Earth's electromagnetic impact on human health and led to groundbreaking wellness applications.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Space Research Origins</h2>
            <p className="text-gray-300">
              NASA's groundbreaking research revealed that astronauts experienced significant physical and mental deterioration when isolated from Earth's Schumann frequency in space. This discovery led to the development of Schumann resonance generators, now standard equipment in spacecraft to maintain astronaut health.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Technological Innovations</h2>
            <p className="text-gray-300">
              The challenges of maintaining astronaut health in space led to revolutionary developments in frequency-based wellness technology. These innovations have since been adapted for Earth-based applications, benefiting millions worldwide.
            </p>
          </section>
        </div>
      </motion.article>
    </div>
  );
} 