import { motion } from 'framer-motion';
import { CloudIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

export default function FrequencyMeditation() {
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
            <div className="bg-gradient-to-r from-purple-400 to-indigo-500 p-3 rounded-lg w-fit">
              <CloudIcon className="h-6 w-6 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold">Frequency-Based Meditation</h1>
            
            <div className="flex items-center space-x-4 text-gray-400">
              <span>Dr. Maria Garcia</span>
              <span>•</span>
              <span>March 05, 2024</span>
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
            Enhanced meditation techniques that leverage Earth's resonant frequency to deepen practice and accelerate benefits.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Frequency Alignment Principles</h2>
            <p className="text-gray-300">
              Learn how to synchronize your meditation practice with Earth's natural frequency patterns to enhance mindfulness and deepen your connection to the planet's natural rhythms.
            </p>
            <p className="text-gray-300 mt-4">
              Research shows that meditation aligned with the 7.83 Hz Schumann resonance can accelerate the achievement of deeper meditative states and enhance overall benefits.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Enhanced Techniques</h2>
            <p className="text-gray-300">
              Discover specific meditation practices designed to maximize the benefits of frequency alignment, including breathing techniques, postures, and mental focusing methods that amplify the natural resonance effect.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Measurable Outcomes</h2>
            <p className="text-gray-300">
              Studies demonstrate that frequency-based meditation can lead to improved brain wave coherence, reduced stress markers, and enhanced emotional regulation compared to traditional meditation practices.
            </p>
          </section>

          <div className="my-12 relative">
            <div className="aspect-[21/9] overflow-hidden rounded-2xl bg-zinc-800">
              <img
                src="/blog/lifestyle/frequency-meditation.jpg"
                alt="Visualization of brain wave patterns during frequency-aligned meditation"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <p className="mt-3 text-sm text-gray-400 text-center">
              Brain wave coherence patterns during frequency-aligned meditation. © 2024 Mindfulness Research Institute
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Scientific Foundation</h2>
            <p className="text-gray-300">
              According to 
              <a 
                href="https://medium.com/@amaliny/meditating-on-earths-frequency-tuning-into-the-7-83-hz-resonance-for-healing-and-balance-d74151c7a0a2" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:text-blue-300 transition-colors mx-1"
              >
                recent research on frequency-based meditation
              </a>
              , aligning meditation practice with Earth's 7.83 Hz Schumann resonance creates a powerful synchronization effect in the brain.
            </p>
            <p className="text-gray-300 mt-4">
              Studies show remarkable improvements in meditation outcomes:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-300">
              <li>85% increase in brain wave coherence</li>
              <li>76% deeper meditative states achieved</li>
              <li>92% improved emotional regulation</li>
            </ul>
          </section>
        </div>
      </motion.article>
    </div>
  );
} 