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

          <div className="my-12 relative">
            <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-zinc-800">
              <img
                src="/blog/science/quantum-cell.jpg"
                alt="Visualization of quantum cellular communication through electromagnetic frequencies"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-3 text-sm text-gray-400 text-center">
              Advanced visualization of quantum coherence in cellular structures showing electromagnetic frequency interactions. © 2024 Quantum Biology Institute
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Quantum Cellular Communication</h2>
            <p className="text-gray-300">
              Recent discoveries in quantum biology have revealed that cells utilize electromagnetic frequencies for communication in ways previously thought impossible. This quantum coherence allows for instantaneous information transfer across biological systems.
            </p>
            <p className="text-gray-300 mt-4">
              The Schumann resonance frequency of 7.83 Hz has been found to play a crucial role in this cellular communication network, acting as a natural carrier wave for biological information transfer.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Quantum Brain Dynamics</h2>
            <p className="text-gray-300">
              Research has shown remarkable correlations between Schumann resonances and brain wave patterns. The quantum description of these interactions suggests that our neural networks are naturally tuned to Earth's electromagnetic frequencies, creating a form of quantum entanglement between biological systems and their environment.
            </p>
            <p className="text-gray-300 mt-4">
              This quantum coupling mechanism explains how external electromagnetic fields can influence neural activity and consciousness, providing a scientific basis for the observed effects of Schumann resonance on human cognition and well-being.
            </p>
          </section>
 <section className="mb-12">
            <p className="text-gray-300 mt-4">
              According to 
              <a 
                href="https://www.researchgate.net/publication/281316806_Schumann_Resonance_and_Brain_Waves_A_Quantum_Description" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:text-blue-300 transition-colors mx-1"
              >
                groundbreaking research in quantum biology
              </a>
              , these cellular communication networks demonstrate remarkable coherence with Earth's natural frequencies, particularly the Schumann resonance.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Cellular Resonance Mechanisms</h2>
            <p className="text-gray-300">
              At the quantum level, cellular structures exhibit coherent oscillations that match specific electromagnetic frequencies. These resonances create quantum fields that facilitate long-range communication between cells and regulate various biological processes.
            </p>
            <p className="text-gray-300 mt-4">
              Studies have demonstrated that exposure to Schumann-frequency electromagnetic fields can enhance this quantum coherence, leading to improved cellular function and repair mechanisms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Therapeutic Applications</h2>
            <p className="text-gray-300">
              Understanding the quantum nature of cellular communication has opened new avenues for therapeutic interventions. By targeting specific quantum states through precisely tuned electromagnetic frequencies, researchers have developed novel approaches to treating various health conditions.
            </p>
            <p className="text-gray-300 mt-4">
              Clinical trials have shown promising results in areas such as neurological disorders, immune system regulation, and cellular regeneration, all based on the principles of quantum biology and electromagnetic resonance.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Future Research Directions</h2>
            <p className="text-gray-300">
              Current research is exploring the potential of quantum biological principles in developing next-generation medical technologies. These include quantum-based diagnostic tools and therapeutic devices that can interact with cellular systems at the quantum level.
            </p>
            <cite className="block mt-4 text-sm text-gray-400">
              Reference: "Schumann Resonance and Brain Waves: A Quantum Description" - ResearchGate (2015). DOI: 10.13140/RG.2.1.4929.1046
            </cite>
          </section>
        </div>
      </motion.article>
    </div>
  );
} 