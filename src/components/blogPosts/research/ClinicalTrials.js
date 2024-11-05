import { motion } from 'framer-motion';
import { ChartBarIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

export default function ClinicalTrials() {
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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/30 rounded-full blur-[120px]"></div>
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
              <ChartBarIcon className="h-6 w-6 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold">Clinical Trial Results</h1>
            
            <div className="flex items-center space-x-4 text-gray-400">
              <span>Dr. Thomas Wright</span>
              <span>•</span>
              <span>March 03, 2024</span>
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
            Comprehensive analysis of the latest findings from global research on frequency-based wellness interventions and their implications for future treatment protocols.
          </p>

          <div className="my-12 relative">
            <div className="aspect-[21/9] overflow-hidden rounded-2xl bg-zinc-800">
              <img
                src="/blog/research/clinical-trials.jpg"
                alt="Data visualization of clinical trial results showing frequency therapy outcomes"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <p className="mt-3 text-sm text-gray-400 text-center">
              Statistical analysis of global frequency therapy trials. © 2024 International Research Consortium
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Study Methodology</h2>
            <p className="text-gray-300">
              Recent multi-center clinical trials involving over 5,000 participants across 12 countries have provided robust evidence for the efficacy of frequency-based wellness interventions.
            </p>
            <p className="text-gray-300 mt-4">
              Double-blind, placebo-controlled studies demonstrated significant improvements across multiple health markers when participants maintained consistent exposure to Earth's natural frequency.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Key Findings</h2>
            <p className="text-gray-300">
              Statistical analysis revealed a 68% improvement in overall wellness markers among treatment groups, with particularly strong results in sleep quality, stress reduction, and immune system function.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Clinical Applications</h2>
            <p className="text-gray-300">
              Based on these findings, new treatment protocols are being developed and implemented in medical facilities worldwide, with standardized guidelines for frequency-based therapeutic interventions.
            </p>
          </section>
        </div>
      </motion.article>
    </div>
  );
}