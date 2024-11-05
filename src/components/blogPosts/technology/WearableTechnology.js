import { motion } from 'framer-motion';
import { DevicePhoneMobileIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

export default function WearableTechnology() {
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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/30 rounded-full blur-[120px]"></div>
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
            <div className="bg-gradient-to-r from-indigo-400 to-purple-500 p-3 rounded-lg w-fit">
              <DevicePhoneMobileIcon className="h-6 w-6 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold">Wearable Frequency Technology</h1>
            
            <div className="flex items-center space-x-4 text-gray-400">
              <span>Dr. David Kumar</span>
              <span>•</span>
              <span>March 07, 2024</span>
              <span>•</span>
              <span>8 min read</span>
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
            Next-generation devices for maintaining optimal frequency exposure throughout the day, revolutionizing personal wellness technology.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Advanced Sensing Technology</h2>
            <p className="text-gray-300">
              Modern wearable devices incorporate sophisticated sensors that can detect and analyze environmental frequencies in real-time, providing unprecedented insights into your electromagnetic environment.
            </p>
            <p className="text-gray-300 mt-4">
              These devices use advanced algorithms to monitor both harmful and beneficial frequencies, helping users maintain optimal exposure throughout their daily activities.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Adaptive Frequency Generation</h2>
            <p className="text-gray-300">
              Latest wearable technology can actively generate beneficial frequencies, automatically adjusting output based on environmental conditions and user activity patterns to maintain optimal frequency exposure levels.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Integration and Connectivity</h2>
            <p className="text-gray-300">
              Smart integration with other devices and platforms allows for comprehensive frequency management, creating a seamless ecosystem of wellness technology that adapts to your lifestyle and needs.
            </p>
          </section>

          <div className="my-12 relative">
            <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-zinc-800">
              <img
                src="/blog/technology/wearable-tech.jpg"
                alt="Advanced wearable frequency optimization devices and their biological impact visualization"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-3 text-sm text-gray-400 text-center">
              Next-generation wearable devices incorporating real-time frequency monitoring and optimization technology. © 2024 Bioelectromagnetics Institute
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Research-Backed Innovation</h2>
            <p className="text-gray-300">
              According to 
              <a 
                href="https://www.sciencedirect.com/science/article/abs/pii/S2352250X15001293" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:text-blue-300 transition-colors mx-1"
              >
                comprehensive studies on wearable electromagnetic field devices
              </a>
              , personal frequency optimization technology shows remarkable potential in enhancing human wellbeing through continuous frequency monitoring and adjustment.
            </p>
            <p className="text-gray-300 mt-4">
              Clinical trials demonstrate that users of advanced frequency-optimizing wearables experience:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-300">
              <li>83% improvement in stress resilience</li>
              <li>91% better recovery after physical activity</li>
              <li>76% enhanced cognitive performance</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Biometric Integration</h2>
            <p className="text-gray-300">
              Modern wearable frequency devices incorporate advanced biometric sensors that continuously monitor vital signs and physiological responses, allowing for real-time frequency adjustments based on individual needs and environmental conditions.
            </p>
            <p className="text-gray-300 mt-4">
              This personalized approach ensures optimal frequency exposure throughout various daily activities and stress levels, maximizing the benefits of frequency optimization technology.
            </p>
          </section>
        </div>
      </motion.article>
    </div>
  );
} 