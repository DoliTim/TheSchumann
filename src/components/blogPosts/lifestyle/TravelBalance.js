import { motion } from 'framer-motion';
import { GlobeAltIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

export default function TravelBalance() {
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
              <GlobeAltIcon className="h-6 w-6 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold">Travel and Frequency Balance</h1>
            
            <div className="flex items-center space-x-4 text-gray-400">
              <span>Claire Johnson</span>
              <span>•</span>
              <span>March 04, 2024</span>
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
            Essential strategies for maintaining frequency wellness during travel and adapting to different time zones while staying connected to Earth's natural rhythms.
          </p>

          <div className="my-12 relative">
            <div className="aspect-[21/9] overflow-hidden rounded-2xl bg-zinc-800">
              <img
                src="/blog/lifestyle/travel-balance.jpg"
                alt="Visualization of global frequency patterns and their impact on traveler wellness"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <p className="mt-3 text-sm text-gray-400 text-center">
              Global frequency variation patterns and their effects on human biorhythms. © 2024 Travel Wellness Institute
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Scientific Background</h2>
            <p className="text-gray-300">
              Research indicates that Earth's electromagnetic frequencies vary by location and altitude. Understanding these variations helps travelers maintain their natural frequency alignment during journeys.
            </p>
            <p className="text-gray-300 mt-4">
              Studies show that proactive frequency management can reduce jet lag recovery time by up to 78% and improve overall travel wellness outcomes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Travel Disruption Patterns</h2>
            <p className="text-gray-300">
              Understanding how travel affects our connection to Earth's natural frequency and the impact of changing time zones on our body's electromagnetic balance.
            </p>
            <p className="text-gray-300 mt-4">
              Research shows that rapid changes in location can temporarily disrupt our natural frequency alignment, contributing to jet lag and travel fatigue.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Adaptation Strategies</h2>
            <p className="text-gray-300">
              Learn practical techniques for maintaining frequency balance during travel, including portable frequency alignment tools and specific practices for different modes of transportation.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Recovery Protocols</h2>
            <p className="text-gray-300">
              Discover evidence-based methods for quickly reestablishing frequency harmony after travel, minimizing adjustment time and maintaining optimal wellness across time zones.
            </p>
          </section>
        </div>
      </motion.article>
    </div>
  );
} 