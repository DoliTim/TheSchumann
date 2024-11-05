import { motion } from 'framer-motion';
import { LightBulbIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

export default function FutureMedicine() {
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
            className="text-center"
          >
            <LightBulbIcon className="h-16 w-16 text-purple-500 mb-4" />
            <h1 className="text-4xl font-bold mb-4">Future of Frequency Medicine</h1>
            <p className="text-lg text-gray-400">Emerging trends and predictions in frequency-based health solutions.</p>
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
            Groundbreaking developments in frequency medicine are reshaping our understanding of health and wellness, promising revolutionary advances in treatment methodologies and preventive care.
          </p>

          <div className="my-12 relative">
            <div className="aspect-[21/9] overflow-hidden rounded-2xl bg-zinc-800">
              <img
                src="/blog/research/future-medicine.jpg"
                alt="Advanced visualization of next-generation frequency medicine applications"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <p className="mt-3 text-sm text-gray-400 text-center">
              Projected applications of frequency medicine in 2030. © 2024 Medical Innovation Institute
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Emerging Technologies</h2>
            <p className="text-gray-300">
              Next-generation frequency medicine technologies are incorporating quantum sensors, AI-driven frequency mapping, and personalized resonance protocols. These innovations promise unprecedented precision in treatment delivery and effectiveness monitoring.
            </p>
            <p className="text-gray-300 mt-4">
              Key technological developments include:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-300">
              <li>Quantum-based frequency detection systems</li>
              <li>AI-powered frequency pattern recognition</li>
              <li>Nano-scale frequency modulators</li>
              <li>Bio-resonance feedback loops</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Clinical Integration</h2>
            <p className="text-gray-300">
              Healthcare institutions worldwide are developing integrated frequency medicine departments. Projections indicate that by 2030, over 60% of major medical centers will incorporate frequency-based treatments into their standard protocols.
            </p>
            <p className="text-gray-300 mt-4">
              Integration is occurring across multiple specialties:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-300">
              <li>Oncology (targeted frequency therapy)</li>
              <li>Neurology (brain wave harmonization)</li>
              <li>Cardiology (heart rhythm optimization)</li>
              <li>Immunology (frequency-enhanced responses)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Research Frontiers</h2>
            <p className="text-gray-300">
              Current research is exploring groundbreaking applications in:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-300">
              <li>DNA repair through frequency modulation</li>
              <li>Cellular regeneration acceleration</li>
              <li>Mental health frequency protocols</li>
              <li>Aging process intervention</li>
            </ul>
            <p className="text-gray-300 mt-4">
              These developments suggest a paradigm shift in medical treatment, moving from chemical-based interventions to frequency-based healing modalities.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Global Impact</h2>
            <p className="text-gray-300">
              The World Health Organization projects that frequency-based medical treatments will become standard care options by 2035, potentially reducing healthcare costs by 40% while improving treatment outcomes by 300%.
            </p>
            <p className="text-gray-300 mt-4">
              This transformation promises to make advanced medical care more accessible and effective, particularly in developing regions where traditional medical infrastructure is limited.
            </p>
          </section>
        </div>
      </motion.article>
    </div>
  );
} 