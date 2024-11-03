import { motion } from 'framer-motion';
import { BeakerIcon, LightBulbIcon, HeartIcon, AcademicCapIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import Earth3D from './Earth3D';

function About() {
  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Scientific Officer",
      bio: "PhD in Biophysics with 15 years of research in electromagnetic frequencies. Pioneer in human-frequency interaction studies.",
      image: "/team/sarah.jpg",
      color: "from-purple-500 to-blue-500"
    },
    {
      name: "Dr. Elena Rodriguez",
      role: "Lead Neuroscientist",
      bio: "Specialized in cognitive enhancement through frequency manipulation. Former researcher at Harvard's Brain Science Initiative.",
      image: "/team/elena.jpg",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Michael Chen",
      role: "Product Development Lead",
      bio: "Engineering expert with 10+ years experience in frequency-based wellness devices. Previously led R&D at Tesla.",
      image: "/team/michael.jpg",
      color: "from-pink-500 to-purple-500"
    }
  ];

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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          {/* Mission Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-32"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">Our Mission</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              At Schumann, we're dedicated to bringing the healing power of Earth's natural frequency 
              into your daily life. Our mission is to help people reconnect with nature's rhythm in 
              our modern world, enhancing both physical and mental well-being through innovative technology.
            </p>
          </motion.div>

          {/* Schumann Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-32 bg-zinc-800/30 rounded-2xl p-8 border border-white/10"
          >
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Who was Schumann?</h2>
              <p className="text-xl text-gray-300 mb-8">
                In 1952, physicist Winfried Otto Schumann made a groundbreaking discovery that would revolutionize our understanding of Earth's electromagnetic environment and its profound impact on life itself.
              </p>
              <motion.button
                onClick={() => navigate('/blog/science/the-scientific-foundation-of-schumann-resonance')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-600 px-6 py-3 rounded-full text-white font-medium hover:from-purple-600 hover:to-pink-700 transition-all duration-200"
              >
                <span>Read the Full Story</span>
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </motion.button>
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="grid md:grid-cols-3 gap-8 mb-32"
          >
            {[
              {
                icon: BeakerIcon,
                title: "Scientific Excellence",
                description: "Our work is grounded in rigorous research and validated by leading institutions.",
                color: "from-purple-500 to-blue-500"
              },
              {
                icon: LightBulbIcon,
                title: "Innovation First",
                description: "We continuously push boundaries to create breakthrough solutions.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: HeartIcon,
                title: "Human-Centered",
                description: "Every product we develop focuses on improving human well-being.",
                color: "from-cyan-500 to-teal-500"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-8 rounded-2xl bg-zinc-800/50 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className={`bg-gradient-to-r ${value.color} p-3 rounded-lg w-fit mb-6`}>
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-32"
          >
            <h2 className="text-4xl font-bold text-center mb-16">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="rounded-2xl bg-zinc-800/50 backdrop-blur-xl border border-white/10 overflow-hidden"
                >
                  <div className={`h-48 bg-gradient-to-r ${member.color}`}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover mix-blend-overlay"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-gray-400 mb-4">{member.role}</p>
                    <p className="text-gray-500">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default About; 