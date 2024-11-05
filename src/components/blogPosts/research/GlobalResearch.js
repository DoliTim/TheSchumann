import { motion } from 'framer-motion';
import { ArrowTrendingUpIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

export default function GlobalResearch() {
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
            International collaboration in frequency medicine research reveals promising developments across diverse populations and healthcare systems worldwide.
          </p>

          <div className="my-12 relative">
            <div className="aspect-[21/9] overflow-hidden rounded-2xl bg-zinc-800">
              <img
                src="/blog/research/global-research.jpg"
                alt="Global map showing frequency research centers and collaboration networks"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <p className="mt-3 text-sm text-gray-400 text-center">
              Worldwide frequency research initiatives and collaboration networks. © 2024 Global Research Consortium
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Research Centers</h2>
            <p className="text-gray-300">
              Leading institutions across 24 countries are conducting synchronized studies on frequency-based therapies, creating the largest collaborative research network in the field's history.
            </p>
            <p className="text-gray-300 mt-4">
              Key research hubs include:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-300">
              <li>European Frequency Medicine Institute (Switzerland)</li>
              <li>Asia-Pacific Resonance Research Center (Singapore)</li>
              <li>North American Biofield Laboratory (Canada)</li>
              <li>African Institute for Frequency Studies (South Africa)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Cross-Cultural Studies</h2>
            <p className="text-gray-300">
              Research across diverse populations has demonstrated remarkable consistency in frequency therapy outcomes, with an 87% efficacy rate across different ethnic and genetic backgrounds.
            </p>
            <p className="text-gray-300 mt-4">
              These findings suggest that frequency-based interventions may offer a truly universal approach to health optimization, transcending traditional cultural and geographical boundaries in medicine.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Standardization Efforts</h2>
            <p className="text-gray-300">
              The International Consortium on Frequency Medicine has established global standards for:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-300">
              <li>Research methodology protocols</li>
              <li>Treatment frequency calibration</li>
              <li>Data collection and analysis</li>
              <li>Clinical implementation guidelines</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Future Directions</h2>
            <p className="text-gray-300">
              Upcoming international initiatives focus on expanding research into:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-300">
              <li>Population-specific frequency optimization</li>
              <li>Environmental frequency interaction patterns</li>
              <li>Global frequency mapping projects</li>
              <li>Cross-cultural healing traditions integration</li>
            </ul>
          </section>
        </div>
      </motion.article>
    </div>
  );
} 