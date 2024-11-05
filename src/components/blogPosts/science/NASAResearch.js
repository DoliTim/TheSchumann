import { motion } from 'framer-motion';
import { AcademicCapIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

export default function NASAResearch() {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white min-h-screen">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative overflow-hidden"
      >
        {/* Background Elements - using styling from Home.js */}
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
              <AcademicCapIcon className="h-6 w-6 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold">NASA's Frequency Research Breakthroughs</h1>
            
            <div className="flex items-center space-x-4 text-gray-400">
              <span>Dr. James Maxwell</span>
              <span>•</span>
              <span>March 14, 2024</span>
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
            How space research revolutionized our understanding of Earth's electromagnetic impact on human health and led to groundbreaking wellness applications.
          </p>

          <div className="my-12 relative">
            <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-zinc-800">
              <img
                src="/blog/science/nasa-research.jpg"
                alt="NASA research facility studying electromagnetic frequencies in space"
                className="w-full h-full object-cover contrast-125"
              />
            </div>
            <p className="mt-3 text-sm text-gray-400 text-center">
              NASA's electromagnetic research facility studying the effects of frequency isolation on astronaut health. © NASA
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Space Research Origins</h2>
            <p className="text-gray-300">
              NASA's groundbreaking research revealed that astronauts experienced significant physical and mental deterioration when isolated from Earth's Schumann frequency in space. This discovery led to the development of Schumann resonance generators, now standard equipment in spacecraft to maintain astronaut health.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Technological Innovations</h2>
            <p className="text-gray-300">
              The challenges of maintaining astronaut health in space led to revolutionary developments in frequency-based wellness technology. These innovations have since been adapted for Earth-based applications, benefiting millions worldwide.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Ionospheric Research Findings</h2>
            <p className="text-gray-300">
              According to NASA's Ionospheric Physics and Modeling (IPM) research paper (2012), the relationship between solar activity and Earth's electromagnetic cavity directly influences the stability of Schumann resonances. These findings have profound implications for both space exploration and terrestrial health applications.
            </p>
            <p className="text-gray-300 mt-4">
              <a 
                href="https://ssed.gsfc.nasa.gov/IPM/2012/PDF/publications/1052.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                The comprehensive NASA study
              </a> demonstrates how variations in these frequencies correlate with human physiological responses in space environments.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Clinical Applications</h2>
            <p className="text-gray-300">
              The space program's research into electromagnetic frequencies has led to breakthrough applications in clinical settings. Studies conducted on the International Space Station revealed that exposure to specific frequencies can enhance cellular regeneration, improve sleep quality, and boost immune system function.
            </p>
            <p className="text-gray-300 mt-4">
              These discoveries have revolutionized our approach to frequency-based wellness interventions, providing scientific validation for therapeutic applications both in space and on Earth.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Future Research Directions</h2>
            <p className="text-gray-300">
              NASA continues to explore the relationship between electromagnetic frequencies and human health through advanced monitoring systems on the ISS. Current research focuses on developing next-generation frequency generators for deep space missions, with potential applications for addressing modern environmental health challenges on Earth.
            </p>
            <cite className="block mt-4 text-sm text-gray-400">
              Reference: NASA Goddard Space Flight Center, Ionospheric Physics and Modeling (2012). DOI: 10.1029/2012JA017916
            </cite>
          </section>
        </div>
      </motion.article>
    </div>
  );
} 