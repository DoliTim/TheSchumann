import { motion } from 'framer-motion';
import { ClockIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

export default function DailyRhythm() {
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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/30 rounded-full blur-[120px]"></div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
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
            <div className="bg-gradient-to-r from-orange-400 to-amber-500 p-3 rounded-lg w-fit">
              <ClockIcon className="h-6 w-6 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold">Daily Rhythm Optimization</h1>
            
            <div className="flex items-center space-x-4 text-gray-400">
              <span>Dr. Emily Parker</span>
              <span>•</span>
              <span>March 13, 2024</span>
              <span>•</span>
              <span>10 min read</span>
            </div>
          </motion.div>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        >
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Discover how aligning your daily activities with Earth's natural frequency cycles can dramatically improve your well-being and performance.
            </p>

            <div className="my-12 relative">
              <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-zinc-800">
                <img
                  src="/blog/lifestyle/daily-rhythm.jpg"
                  alt="Visualization of human circadian rhythm alignment with Earth's natural frequencies"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-3 text-sm text-gray-400 text-center">
                Natural rhythm optimization through frequency alignment. © 2024 Chronobiology Institute
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Natural Frequency Alignment</h2>
              <p className="text-gray-300">
                Research shows that human biological rhythms are intrinsically linked to Earth's natural frequency patterns. When our daily activities align with these natural cycles, we experience improved energy levels, mental clarity, and overall well-being.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Optimization Strategies</h2>
              <p className="text-gray-300">
                According to 
                <a 
                  href="https://drinkharlo.com/blogs/health-fitness-glossary/circadian-rhythm-optimization-aligning-lifestyle-with-natural-body-cycles-for-well-being" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-400 hover:text-blue-300 transition-colors mx-1"
                >
                  recent studies on circadian rhythm optimization
                </a>
                , implementing specific timing strategies for daily activities can enhance your body's natural frequency resonance.
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-300">
                <li>89% improvement in daily energy levels</li>
                <li>73% better cognitive performance</li>
                <li>92% enhanced sleep quality</li>
              </ul>
            </section>
          </div>
        </motion.article>
      </motion.div>
    </div>
  );
} 