import { motion } from 'framer-motion';
import { MoonIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

export default function SleepArchitecture() {
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
            <div className="bg-gradient-to-r from-blue-400 to-indigo-500 p-3 rounded-lg w-fit">
              <MoonIcon className="h-6 w-6 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold">Sleep Architecture and Frequency</h1>
            
            <div className="flex items-center space-x-4 text-gray-400">
              <span>Dr. Michael Chen</span>
              <span>•</span>
              <span>March 12, 2024</span>
              <span>•</span>
              <span>6 min read</span>
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
            Understanding how Earth's natural frequency influences sleep cycles and promotes deeper rest, leading to enhanced recovery and mental clarity.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Natural Sleep Cycles</h2>
            <p className="text-gray-300">
              Research has shown that human sleep patterns are intrinsically linked to Earth's natural frequency. The primary Schumann resonance of 7.83 Hz closely aligns with our brain's theta waves during deep sleep, suggesting a fundamental connection between planetary rhythms and human rest cycles.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Frequency Alignment</h2>
            <p className="text-gray-300">
              When our sleep environment is properly aligned with Earth's natural frequency, studies show significant improvements in sleep quality, including faster onset, longer deep sleep phases, and more efficient recovery processes.
            </p>
            <p className="text-gray-300 mt-4">
              Modern electromagnetic interference can disrupt this natural alignment, leading to sleep disturbances. Understanding and mitigating these effects is crucial for optimal rest.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Practical Applications</h2>
            <p className="text-gray-300">
              Implementing frequency-aligned sleep environments through specialized devices and room arrangements can help restore natural sleep patterns. These interventions have shown particular promise in treating chronic insomnia and sleep-related disorders.
            </p>
          </section>
        </div>
      </motion.article>
    </div>
  );
} 