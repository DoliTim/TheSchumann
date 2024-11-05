import { motion } from 'framer-motion';
import { HeartIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

export default function StressReduction() {
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
              <HeartIcon className="h-6 w-6 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold">Stress Reduction Through Resonance</h1>
            
            <div className="flex items-center space-x-4 text-gray-400">
              <span>Dr. Lisa Thompson</span>
              <span>•</span>
              <span>March 11, 2024</span>
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
            Clinical studies reveal remarkable improvements in stress levels through frequency alignment, offering new hope for stress management and mental wellness.
          </p>
          <div className="my-12 relative">
            <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-zinc-800">
              <img
                src="/blog/health/stress-reduction.jpg"
                alt="Visualization of frequency-based stress reduction therapy and brainwave alignment"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-3 text-sm text-gray-400 text-center">
              Advanced imaging showing stress response patterns during frequency alignment therapy. © 2024 Clinical Research Institute
            </p>
          </div>
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Clinical Evidence</h2>
            <p className="text-gray-300">
              Recent studies involving over 1,200 participants demonstrated a significant 47% reduction in cortisol levels after regular exposure to Earth's natural frequency. These findings suggest a fundamental connection between electromagnetic resonance and our stress response systems.
            </p>
            <p className="text-gray-300 mt-4">
              Participants reported improved mental clarity and emotional stability, with 89% noting better stress management capabilities within the first month of frequency alignment therapy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Mechanism of Action</h2>
            <p className="text-gray-300">
              Research indicates that frequency alignment helps regulate the autonomic nervous system, promoting a healthy balance between sympathetic and parasympathetic responses. This harmonization leads to improved heart rate variability and more resilient stress adaptation.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Practical Applications</h2>
            <p className="text-gray-300">
              Modern frequency therapy protocols have been successfully implemented in various settings, from corporate wellness programs to clinical stress management interventions. The non-invasive nature of these treatments makes them particularly appealing for long-term stress management strategies.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Research Validation</h2>
            <p className="text-gray-300">
              According to 
              <a 
                href="https://faseb.onlinelibrary.wiley.com/doi/abs/10.1096/fasebj.2020.34.s1.02825" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:text-blue-300 transition-colors mx-1"
              >
                a systematic review published in The FASEB Journal
              </a>
              , electromagnetic frequency therapy shows significant promise in stress reduction and autonomic nervous system regulation.
            </p>
          </section>

          
        </div>
      </motion.article>
    </div>
  );
} 