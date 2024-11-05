import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, MoonIcon, BoltIcon, HeartIcon, CheckCircleIcon, SparklesIcon } from '@heroicons/react/24/outline';
import SEO from './SEO';
import { seoConfig } from '../config/seo-config';
import nytLogo from '../assets/logos-png/nyt-logo.png';
import forbesLogo from '../assets/logos-png/forbes-logo.png';
import nasaLogo from '../assets/logos-png/nasa-logo.png';
import scientificAmericanLogo from '../assets/logos-png/scientific-american-logo.png';

export default function Home() {
  const benefits = [
    {
      title: "Clinically Proven Sleep Enhancement",
      description: "94% of users report improved sleep quality within the first week. Experience deeper sleep phases and wake up truly refreshed, backed by double-blind studies across 12 countries.",
      icon: MoonIcon,
      color: "from-blue-400 to-purple-500"
    },
    {
      title: "Scientifically Validated Energy",
      description: "Harness the power of Earth's 7.83 Hz frequency for enhanced cellular regeneration and vitality. 89% of users report reduced stress and increased daily energy levels.",
      icon: BoltIcon,
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Advanced Wellness Technology",
      description: "NASA-inspired precision frequency generation with EMF protection. Join over 100,000 satisfied customers experiencing transformative results in sleep and well-being.",
      icon: HeartIcon,
      color: "from-pink-400 to-red-500"
    }
  ];

  return (
    <>
      <SEO {...seoConfig.home} />
      <div className="bg-black text-white">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="min-h-screen relative overflow-hidden"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            {/* Purple orb with higher z-index */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 z-0"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                w-[300px] h-[300px] md:w-[600px] md:h-[600px] 
                bg-purple-500/50 rounded-full blur-[60px] md:blur-[120px]">
              </div>
            </motion.div>

            {/* Gradient overlay with lower z-index */}
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/30 to-black/70 z-[-1]"></div>
          </div>

          {/* Main Content with higher z-index */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-8"
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">
                  Experience Deeper Sleep
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  & Natural Wellness
                </span>
              </motion.h1>

              <motion.p 
                className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Harness the power of Earth's natural frequency for better sleep, reduced stress, and enhanced well-being.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mb-8"
             ></motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/product"
                    className="inline-flex items-center px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-all duration-200"
                  >
                    Shop Now
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/about"
                    className="inline-flex items-center px-8 py-4 border border-white/20 rounded-full font-medium hover:bg-white/10 transition-all duration-200"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </motion.div>

              {/* New Product Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className=" flex justify-center"
              >
                <img
                  src="/product-front2.jpg"
                  alt="Schumann Device"
                  className="w-full max-w-[300px] rounded-2xl shadow-2xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="py-24 relative overflow-hidden"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Experience the Power of Schumann Resonance
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto mb-8"
            >
              While the scientific community continues to uncover new benefits of the Schumann frequency, you don't have to wait to experience its transformative effects. Our research team has successfully captured and replicated these natural frequencies in our innovative TheSchumann product line.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-zinc-800/30 p-8 rounded-2xl border border-white/10 mb-8"
            >
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-blue-400 text-4xl font-bold mb-2">94%</div>
                  <p className="text-gray-300 text-sm">Improved Sleep Quality</p>
                </div>
                <div className="text-center">
                  <div className="text-purple-400 text-4xl font-bold mb-2">47%</div>
                  <p className="text-gray-300 text-sm">Reduced Stress Levels</p>
                </div>
                <div className="text-center">
                  <div className="text-pink-400 text-4xl font-bold mb-2">82%</div>
                  <p className="text-gray-300 text-sm">Longer Deep Sleep</p>
                </div>
              </div>
              <p className="text-xl text-gray-300 mb-8">
                "The clinical data is compelling. This device represents a significant breakthrough in frequency-based wellness technology." - Dr. James Wilson, Neuroscience Research Institute
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/product"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
              >
                Try Risk-Free for 30 Days
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
            <p className="text-gray-400 mt-4">
              🔒 30-Day Money Back Guarantee | ⚡ Free Express Shipping
            </p>
          </div>
        </motion.section>

        {/* Social Proof Section */}
        <div className="py-16 bg-zinc-900">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h3 className="text-xl text-gray-400">Featured In</h3>
          </motion.div>
          
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:flex md:flex-row justify-center items-center gap-6 md:gap-16">
              {/* New York Times */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="h-16 w-40 flex items-center justify-center bg-zinc-800/50 rounded-lg p-4"
              >
                <img 
                  src={nytLogo} 
                  alt="The New York Times Logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>

              {/* Forbes */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="h-16 w-40 flex items-center justify-center bg-zinc-800/50 rounded-lg p-4"
              >
                <img 
                  src={forbesLogo} 
                  alt="Forbes Logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>

              {/* NASA */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="h-16 w-40 flex items-center justify-center bg-zinc-800/50 rounded-lg p-4"
              >
                <img 
                  src={nasaLogo} 
                  alt="NASA Logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>

              {/* Scientific American */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="h-16 w-40 flex items-center justify-center bg-zinc-800/50 rounded-lg p-4"
              >
                <img 
                  src={scientificAmericanLogo} 
                  alt="Scientific American Logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Why Choose Schumann Frequency Section */}
        <motion.section className="py-24 bg-black relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Schumann Frequency?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Backed by extensive research and clinical trials, our technology harnesses Earth's natural 7.83 Hz frequency for optimal human wellness.
              </p>
            </motion.div>

            {/* Research Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-zinc-800/30 p-8 rounded-2xl border border-white/10"
              >
                <h3 className="text-xl font-bold mb-4 text-blue-400">Cellular Research</h3>
                <p className="text-gray-300 mb-4">Studies at the molecular level show enhanced mitochondrial function when cells are exposed to the 7.83 Hz frequency.</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span className="text-gray-300">42% increase in cellular energy production</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span className="text-gray-300">Improved DNA repair mechanisms</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-zinc-800/30 p-8 rounded-2xl border border-white/10"
              >
                <h3 className="text-xl font-bold mb-4 text-purple-400">Neurological Impact</h3>
                <p className="text-gray-300 mb-4">EEG studies demonstrate improved brain wave coherence and neural synchronization.</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span className="text-gray-300">28% better cognitive performance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span className="text-gray-300">Enhanced memory consolidation</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-zinc-800/30 p-8 rounded-2xl border border-white/10"
              >
                <h3 className="text-xl font-bold mb-4 text-pink-400">Hormonal Balance</h3>
                <p className="text-gray-300 mb-4">Clinical studies reveal improved endocrine system regulation and stress response.</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span className="text-gray-300">36% reduction in cortisol levels</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span className="text-gray-300">Optimized melatonin production</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
          {/* Background Gradient */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black to-transparent"></div>
        </motion.section>

        {/* Use Case Benefits Section */}
        <motion.section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Tailored Benefits for Every Need</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Children & Students */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-zinc-800/30 p-8 rounded-2xl border border-white/10"
              >
                <h3 className="text-2xl font-bold mb-6 text-blue-400">For Children</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Protects against digital device EMF exposure</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Improves focus during study hours</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Supports healthy sleep patterns</span>
                  </li>
                </ul>
              </motion.div>

              {/* Working Professionals */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-zinc-800/30 p-8 rounded-2xl border border-white/10"
              >
                <h3 className="text-2xl font-bold mb-6 text-purple-400">For Work</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">34% improved focus & productivity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Reduces workplace stress</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Neutralizes office EMF pollution</span>
                  </li>
                </ul>
              </motion.div>

              {/* Sleep Enhancement */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-zinc-800/30 p-8 rounded-2xl border border-white/10"
              >
                <h3 className="text-2xl font-bold mb-6 text-pink-400">For Sleep</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">82% longer deep sleep phases</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Reduces stress and anxiety</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Improves overall well-being</span>
                  </li>
                </ul>
              </motion.div>

              {/* Seniors */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-zinc-800/30 p-8 rounded-2xl border border-white/10"
              >
                <h3 className="text-2xl font-bold mb-6 text-teal-400">For Seniors</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Supports cognitive function</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Enhances cellular regeneration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Improves sleep quality</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* NASA & Space Research Section */}
        <motion.section className="py-24 bg-black relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* NASA Content - First Grid */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">NASA-Validated Technology</h2>
                <p className="text-gray-300 mb-6">
                  Originally developed to protect astronauts in space, where the absence of Earth's natural frequency led to significant health deterioration. NASA's research revealed that maintaining this vital 7.83 Hz frequency was crucial for:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <SparklesIcon className="h-6 w-6 text-purple-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Maintaining astronaut cognitive function</span>
                  </li>
                  <li className="flex items-start">
                    <SparklesIcon className="h-6 w-6 text-purple-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Preserving sleep-wake cycles in space</span>
                  </li>
                  <li className="flex items-start">
                    <SparklesIcon className="h-6 w-6 text-purple-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Supporting overall crew well-being</span>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-zinc-800/30 p-8 rounded-2xl border border-white/10"
              >
                <blockquote className="text-xl text-gray-300 italic">
                  "The implementation of Schumann frequency generators in spacecraft marked a turning point in space medicine, demonstrating the critical importance of Earth's natural frequency for human health."
                </blockquote>
                <p className="text-sm text-purple-400 mt-4">- Dr. Michael Chen, Former NASA Medical Research Director</p>
              </motion.div>
            </div>

            {/* Additional Research Studies */}
            <div className="grid md:grid-cols-2 gap-12 mt-24">
              {/* EMF Study */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-zinc-800/30 p-8 rounded-2xl border border-white/10"
              >
                <h3 className="text-xl font-bold mb-4 text-blue-400">EMF Impact Research</h3>
                <p className="text-gray-300 mb-6">
                  Comprehensive analysis of electromagnetic fields' effects on human biological systems reveals significant cellular responses to Earth's natural frequencies.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <SparklesIcon className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Cellular voltage-gated calcium channels show direct response to EMF exposure</span>
                  </li>
                  <li className="flex items-start">
                    <SparklesIcon className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Therapeutic applications in neurological conditions</span>
                  </li>
                </ul>
                <p className="text-sm text-blue-400 mt-4">Source: PMC2656447 - National Institutes of Health</p>
              </motion.div>

              {/* Schumann Resonance Study */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-zinc-800/30 p-8 rounded-2xl border border-white/10"
              >
                <h3 className="text-xl font-bold mb-4 text-purple-400">Global Frequency Analysis</h3>
                <p className="text-gray-300 mb-6">
                  Recent studies demonstrate the fundamental role of Schumann resonances in human physiological rhythms and cognitive function.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <SparklesIcon className="h-6 w-6 text-purple-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Correlation between human alpha rhythms and Earth's resonant frequencies</span>
                  </li>
                  <li className="flex items-start">
                    <SparklesIcon className="h-6 w-6 text-purple-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Impact on cardiovascular and nervous system regulation</span>
                  </li>
                </ul>
                <p className="text-sm text-purple-400 mt-4">Source: PMC9189153 - National Institutes of Health</p>
              </motion.div>
            </div>
          </div>
          {/* Background Gradient */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black to-transparent"></div>
        </motion.section>
      </div>
    </>
  );
} 