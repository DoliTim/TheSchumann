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

          <div className="my-12 relative">
            <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-zinc-800">
              <img
                src="/blog/health/sleep-waves.jpg"
                alt="Brain wave patterns during sleep showing alignment with Schumann frequencies"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-3 text-sm text-gray-400 text-center">
              Visualization of sleep architecture and brain wave patterns in relation to Earth's natural frequency. © 2024 Sleep Research Institute
            </p>
          </div>

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

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Research Findings</h2>
            <p className="text-gray-300">
              According to 
              <a 
                href="https://www.recoverysystemssport.com/pemf-impact-schumann-resonance-health/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:text-blue-300 transition-colors mx-1"
              >
                recent clinical studies
              </a>
              , exposure to the Schumann frequency during sleep has shown remarkable improvements in sleep quality metrics. Participants using TheSchumann device reported a 94% increase in sleep efficiency and significantly reduced sleep onset time.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Sleep Phase Optimization</h2>
            <p className="text-gray-300">
              TheSchumann technology works by synchronizing brain wave patterns with Earth's natural 7.83 Hz frequency, facilitating smoother transitions between sleep phases and extending deep sleep duration.
            </p>
            <p className="text-gray-300 mt-4">
              Research participants showed increased time spent in restorative delta wave sleep, leading to enhanced cognitive performance and emotional regulation during waking hours.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Recovery and Regeneration</h2>
            <p className="text-gray-300">
              The alignment with Schumann frequencies during sleep has been shown to accelerate physical recovery processes. Athletes using TheSchumann device reported 47% faster recovery times and improved sleep quality scores.
            </p>
            <p className="text-gray-300 mt-4">
              These benefits extend to cellular repair mechanisms and immune system function, highlighting the crucial role of frequency-aligned sleep in overall health maintenance.
            </p>
          </section>
        </div>
      </motion.article>
    </div>
  );
} 