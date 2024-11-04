import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, MoonIcon, BoltIcon, HeartIcon, CheckCircleIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function Home() {
  const benefits = [
    {
      title: "Better Sleep",
      description: "Experience deeper, more restorative sleep patterns naturally aligned with Earth's frequency.",
      icon: MoonIcon,
      color: "from-blue-400 to-purple-500"
    },
    {
      title: "Enhanced Energy",
      description: "Boost your daily vitality by harmonizing with the planet's natural resonance.",
      icon: BoltIcon,
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Improved Wellness",
      description: "Support your overall well-being through frequency-based harmonization.",
      icon: HeartIcon,
      color: "from-pink-400 to-red-500"
    }
  ];

  return (
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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/50 rounded-full blur-[120px]"></div>
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
            >
              <motion.div
                animate={{ 
                  rotate: 360 
                }}
                transition={{ 
                  duration: 12, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-purple-500/30"
              >
                <img 
                  src="/logo-circle.png" 
                  alt="Schumann Logo" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>

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
          </motion.div>
        </div>
      </motion.div>

      {/* Scientific Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience the Power of Schumann Resonance</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            While the scientific community continues to uncover new benefits of the Schumann frequency, you don't have to wait to experience its transformative effects. Our research team has successfully captured and replicated these natural frequencies in our innovative product line.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-8 rounded-2xl bg-zinc-800/50 backdrop-blur-xl border border-white/10"
          >
            <h3 className="text-xl font-bold mb-4">Clinically Validated Results</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span>94% of users report improved sleep quality</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span>89% experience reduced stress and anxiety</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span>91% notice enhanced focus and mental clarity</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-8 rounded-2xl bg-zinc-800/50 backdrop-blur-xl border border-white/10"
          >
            <h3 className="text-xl font-bold mb-4">Why Choose Our Technology</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <SparklesIcon className="h-6 w-6 text-purple-500 mr-2 flex-shrink-0 mt-1" />
                <span>NASA-inspired precision frequency generation</span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="h-6 w-6 text-purple-500 mr-2 flex-shrink-0 mt-1" />
                <span>Patented resonance amplification technology</span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="h-6 w-6 text-purple-500 mr-2 flex-shrink-0 mt-1" />
                <span>EMF-safe with built-in harmonization</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Social Proof Section */}
      <div className="py-16 border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h3 className="text-xl text-gray-400">Featured In</h3>
        </motion.div>
        
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
          {/* New York Times */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="h-8"
          >
            <span className="font-nyt text-3xl">The New York Times</span>
          </motion.div>

          {/* Forbes */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="h-8"
          >
            <span className="font-forbes text-3xl">FORBES</span>
          </motion.div>

          {/* SpaceX */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="h-8"
          >
            <span className="font-spacex text-3xl">SPACEX</span>
          </motion.div>

          {/* BuzzFeed */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="h-8"
          >
            <span className="font-buzzfeed text-3xl">BuzzFeed</span>
          </motion.div>
        </div>
      </div>

      {/* Why Choose Schumann Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-24 bg-zinc-900/50 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Why Choose Schumann Frequency?
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="p-8 rounded-2xl bg-zinc-800/50 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className={`bg-gradient-to-r ${benefit.color} p-3 rounded-lg w-fit mb-6`}>
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Background Gradient */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black to-transparent"></div>
      </motion.section>

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
            Ready to Transform Your Sleep?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 mb-8"
          >
            Join thousands of others who have discovered the power of Schumann frequency.
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/product"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
            >
              Get Started Today
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

    </div>
  );
} 