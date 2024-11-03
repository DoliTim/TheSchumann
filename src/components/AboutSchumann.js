import { motion } from 'framer-motion';
import { BeakerIcon, ArrowLeftIcon, CheckCircleIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

export default function AboutSchumann() {
  const navigate = useNavigate();

  const benefits = [
    {
      title: "NASA-Validated Technology",
      description: "Used in space missions to maintain astronaut health, our technology replicates Earth's natural frequency with precision"
    },
    {
      title: "Clinically Proven Results",
      description: "Studies show 94% of users experience improved sleep quality and reduced stress within the first week"
    },
    {
      title: "Global Recognition",
      description: "Trusted by leading health institutions in over 40 countries and recommended by top wellness experts"
    }
  ];

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

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <motion.button
            onClick={() => navigate('/about')}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2 text-gray-400 hover:text-white mb-12 group"
          >
            <ArrowLeftIcon className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to About</span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
} 