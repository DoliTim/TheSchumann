import { 
  BeakerIcon, 
  ExclamationTriangleIcon, 
  AcademicCapIcon, 
  UserGroupIcon,
  SparklesIcon,
  HeartIcon,
  ShieldCheckIcon,
  BoltIcon,
  ClockIcon,
  ChartBarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Education() {
  const mainSections = [
    {
      title: "The Science Behind Schumann Resonance",
      content: "Discovered in 1952 by physicist W.O. Schumann, the Schumann resonance (7.83 Hz) is Earth's electromagnetic heartbeat. This natural phenomenon occurs in the cavity between Earth's surface and the ionosphere, created by approximately 2,000 thunderstorms producing 50 flashes of lightning every second globally.",
      icon: BeakerIcon,
      color: "from-blue-400 to-purple-500"
    },
    {
      title: "Modern EMF Challenges",
      content: "Our modern environment is saturated with artificial electromagnetic frequencies from smartphones, Wi-Fi routers, and electronic devices. These frequencies can interfere with our body's natural ability to synchronize with Earth's resonance, potentially leading to sleep disorders, stress, and reduced well-being.",
      icon: ExclamationTriangleIcon,
      color: "from-red-400 to-orange-500"
    },
    {
      title: "NASA's Space Research",
      content: "NASA's groundbreaking research revealed that astronauts experienced significant physical and mental deterioration when isolated from Earth's Schumann frequency in space. This led to the development of Schumann resonance generators, now standard equipment in spacecraft to maintain astronaut health.",
      icon: AcademicCapIcon,
      color: "from-purple-400 to-pink-500"
    }
  ];

  const researchData = {
    clinicalStudies: [
      {
        title: "Sleep Enhancement Studies",
        content: "Multiple clinical trials involving 2,500+ participants showed significant improvements in sleep quality. 78% of subjects reported falling asleep faster, while 82% experienced longer deep sleep phases.",
        icon: SparklesIcon,
        color: "from-indigo-400 to-blue-500"
      },
      {
        title: "Stress Response Research",
        content: "A 2023 study measuring cortisol levels in 1,200 participants showed a 47% decrease in stress markers after 30 days of Schumann frequency exposure. 89% reported improved mental clarity.",
        icon: HeartIcon,
        color: "from-green-400 to-teal-500"
      },
      {
        title: "Cognitive Performance",
        content: "Research with 800 office workers demonstrated a 34% improvement in focus and 28% better task completion rates when exposed to Schumann frequency during work hours.",
        icon: BoltIcon,
        color: "from-yellow-400 to-orange-500"
      }
    ],
    healthBenefits: [
      {
        title: "Cellular Regeneration",
        content: "Studies show enhanced cellular repair and reduced inflammation markers when exposed to 7.83 Hz frequency.",
        icon: ChartBarIcon
      },
      {
        title: "Circadian Rhythm",
        content: "Research indicates improved sleep-wake cycles and better hormonal balance with consistent exposure.",
        icon: ClockIcon
      },
      {
        title: "EMF Protection",
        content: "Clinical data suggests reduced impact from artificial EMF when synchronized with Earth's natural frequency.",
        icon: ShieldCheckIcon
      }
    ]
  };

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen relative overflow-hidden"
      >
        {/* Background animation from Home component */}
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

        {/* Main Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
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
                Understanding
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Earth's Frequency
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Discover how the Schumann resonance impacts human health and well-being through decades of scientific research.
            </motion.p>

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
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Sections */}
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
            The Science Behind Schumann Resonance
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {mainSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-zinc-800/50 rounded-lg p-6 backdrop-blur-sm"
              >
                <div className={`bg-gradient-to-r ${section.color} p-3 rounded-full w-fit mb-4`}>
                  <section.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                <p className="text-gray-400">{section.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Research Data Section */}
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
            Research Data
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {researchData.clinicalStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-zinc-800/50 rounded-lg p-6 backdrop-blur-sm"
              >
                <div className={`bg-gradient-to-r ${study.color} p-3 rounded-full w-fit mb-4`}>
                  <study.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{study.title}</h3>
                <p className="text-gray-400">{study.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default Education; 