import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BeakerIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function ScientificFoundation() {
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
            <div className="bg-gradient-to-r from-indigo-400 to-blue-500 p-3 rounded-lg w-fit">
              <BeakerIcon className="h-6 w-6 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold">The Scientific Foundation of Schumann Resonance</h1>
            
            <div className="flex items-center space-x-4 text-gray-400">
              <span>Dr. Robert Wagner</span>
              <span>•</span>
              <span>March 15, 2024</span>
              <span>•</span>
              <span>12 min read</span>
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
            In 1952, physicist Winfried Otto Schumann made a groundbreaking discovery that would revolutionize our understanding of Earth's electromagnetic environment and its profound impact on life itself.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">The Historical Discovery</h2>
            <p className="text-gray-300">
              While teaching his students about the physics of electricity, Professor Schumann hypothesized that the Earth's surface and ionosphere created a resonant cavity. This cavity, he proposed, could sustain electromagnetic waves at specific frequencies. Through mathematical calculations, he predicted a fundamental frequency of approximately 7.83 Hz, now known as the primary Schumann Resonance.
            </p>
            <p className="text-gray-300 mt-4">
              Initial measurements confirmed his calculations, revealing not just the primary frequency but also several harmonic frequencies at 14.3, 20.8, 27.3, and 33.8 Hz. These discoveries laid the foundation for understanding Earth's electromagnetic "heartbeat."
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">The Mechanism Behind Earth's Pulse</h2>
            <p className="text-gray-300">
              The Schumann Resonance is maintained by global lightning activity, with approximately 2,000 thunderstorms occurring simultaneously worldwide, producing about 50 lightning flashes per second. These electrical discharges act as natural electromagnetic pulse generators, exciting the Earth-ionosphere cavity and sustaining these resonant frequencies.
            </p>
            <p className="text-gray-300 mt-4">
              The ionosphere, a layer of Earth's atmosphere between 60-1000 km altitude, contains electrically charged particles. This conductive layer, together with Earth's surface, forms a natural waveguide that traps and propagates electromagnetic waves at specific frequencies.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Biological Significance</h2>
            <p className="text-gray-300">
              Perhaps the most fascinating aspect of Schumann's discovery was its correlation with biological processes. The primary frequency of 7.83 Hz falls within the human brain's alpha rhythm range (7-13 Hz), associated with relaxation, creativity, and optimal cognitive performance.
            </p>
            <p className="text-gray-300 mt-4">
              Recent research has shown that human physiology appears to be synchronized with these Earth frequencies. Studies have documented changes in blood pressure, cardiac rhythm, and melatonin levels when subjects are shielded from these natural frequencies, suggesting their fundamental role in regulating biological processes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Modern Research Developments</h2>
            <p className="text-gray-300">
              Contemporary studies using advanced magnetometers and sophisticated monitoring systems have revealed variations in Schumann Resonances correlating with solar activity, seasonal changes, and even human mass behavior. These findings have opened new avenues in fields ranging from geophysics to biometeorology.
            </p>
            <p className="text-gray-300 mt-4">
              Researchers have also discovered potential applications in earthquake prediction, as changes in Schumann Resonance parameters often precede major seismic events. This has led to the development of new early warning systems based on electromagnetic monitoring.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Future Implications</h2>
            <p className="text-gray-300">
              As we continue to understand the intricate relationship between Earth's electromagnetic environment and biological systems, new applications emerge in fields such as medicine, psychology, and environmental science. The development of devices that can generate or enhance exposure to these beneficial frequencies represents a promising frontier in wellness technology.
            </p>
            <p className="text-gray-300 mt-4">
              Current research focuses on protecting humans from electromagnetic pollution while maintaining their connection to Earth's natural frequencies, potentially revolutionizing our approach to health and well-being in our increasingly technological world.
            </p>
          </section>
        </div>
      </motion.article>
    </div>
  );
} 