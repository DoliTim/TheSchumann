import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  BeakerIcon, SparklesIcon, GlobeAltIcon, DevicePhoneMobileIcon, 
  HomeIcon, LightBulbIcon, ArrowTrendingUpIcon,
  HandRaisedIcon, FireIcon, CloudIcon, MoonIcon,
  AcademicCapIcon, HeartIcon, BoltIcon, ShieldCheckIcon,
  ExclamationTriangleIcon, ChartBarIcon, ClockIcon
} from '@heroicons/react/24/outline';

export const blogPosts = {
  science: [
    {
      id: 1,
      title: 'The Science of Color',
      excerpt: 'Discover the science behind color and how it affects our emotions.',
      author: 'Dr. Jane Doe',
      readTime: '5 min read',
      color: 'bg-blue-500',
      icon: BeakerIcon
    },
    {
      id: 2,
      title: 'The Impact of Climate Change',
      excerpt: 'Learn about the effects of climate change on our planet.',
      author: 'Dr. John Smith',
      readTime: '7 min read',
      color: 'bg-green-500',
      icon: GlobeAltIcon
    },
    {
      id: 3,
      title: 'The Future of Technology',
      excerpt: 'Explore the latest trends in technology and their impact on society.',
      author: 'Dr. Alice Johnson',
      readTime: '6 min read',
      color: 'bg-purple-500',
      icon: DevicePhoneMobileIcon
    }
  ],
  technology: [
    {
      id: 4,
      title: 'The Impact of Artificial Intelligence',
      excerpt: 'Learn about the effects of artificial intelligence on our society.',
      author: 'Dr. Michael Brown',
      readTime: '8 min read',
      color: 'bg-blue-500',
      icon: HomeIcon
    },
    {
      id: 5,
      title: 'The Science of Light',
      excerpt: 'Discover the science behind light and its applications.',
      author: 'Dr. Emily Davis',
      readTime: '5 min read',
      color: 'bg-green-500',
      icon: LightBulbIcon
    },
    {
      id: 6,
      title: 'The Future of Energy',
      excerpt: 'Explore the latest trends in energy and their impact on our environment.',
      author: 'Dr. David Wilson',
      readTime: '7 min read',
      color: 'bg-purple-500',
      icon: ArrowTrendingUpIcon
    }
  ],
  health: [
    {
      id: 7,
      title: 'The Science of Health',
      excerpt: 'Discover the science behind health and how it affects our well-being.',
      author: 'Dr. Sarah Johnson',
      readTime: '6 min read',
      color: 'bg-blue-500',
      icon: HandRaisedIcon
    },
    {
      id: 8,
      title: 'The Impact of Fire',
      excerpt: 'Learn about the effects of fire on our environment.',
      author: 'Dr. Robert Smith',
      readTime: '8 min read',
      color: 'bg-green-500',
      icon: FireIcon
    },
    {
      id: 9,
      title: 'The Future of Medicine',
      excerpt: 'Explore the latest trends in medicine and their impact on our society.',
      author: 'Dr. Emily Davis',
      readTime: '7 min read',
      color: 'bg-purple-500',
      icon: CloudIcon
    }
  ],
  environment: [
    {
      id: 10,
      title: 'The Science of Climate Change',
      excerpt: 'Discover the science behind climate change and its impact on our planet.',
      author: 'Dr. John Doe',
      readTime: '9 min read',
      color: 'bg-blue-500',
      icon: MoonIcon
    },
    {
      id: 11,
      title: 'The Impact of Cloud Computing',
      excerpt: 'Learn about the effects of cloud computing on our environment.',
      author: 'Dr. Jane Smith',
      readTime: '6 min read',
      color: 'bg-green-500',
      icon: AcademicCapIcon
    },
    {
      id: 12,
      title: 'The Future of Renewable Energy',
      excerpt: 'Explore the latest trends in renewable energy and their impact on our environment.',
      author: 'Dr. Alice Johnson',
      readTime: '8 min read',
      color: 'bg-purple-500',
      icon: HeartIcon
    }
  ],
  social: [
    {
      id: 13,
      title: 'The Science of Social Media',
      excerpt: 'Discover the science behind social media and its impact on our society.',
      author: 'Dr. Michael Brown',
      readTime: '7 min read',
      color: 'bg-blue-500',
      icon: BoltIcon
    },
    {
      id: 14,
      title: 'The Impact of Cybersecurity',
      excerpt: 'Learn about the effects of cybersecurity on our society.',
      author: 'Dr. Robert Smith',
      readTime: '9 min read',
      color: 'bg-green-500',
      icon: ShieldCheckIcon
    },
    {
      id: 15,
      title: 'The Future of Artificial Intelligence',
      excerpt: 'Explore the latest trends in artificial intelligence and their impact on our society.',
      author: 'Dr. Emily Davis',
      readTime: '8 min read',
      color: 'bg-purple-500',
      icon: ExclamationTriangleIcon
    }
  ],
  economics: [
    {
      id: 16,
      title: 'The Science of Economics',
      excerpt: 'Discover the science behind economics and how it affects our society.',
      author: 'Dr. John Doe',
      readTime: '10 min read',
      color: 'bg-blue-500',
      icon: ChartBarIcon
    },
    {
      id: 17,
      title: 'The Impact of Globalization',
      excerpt: 'Learn about the effects of globalization on our society.',
      author: 'Dr. Jane Smith',
      readTime: '7 min read',
      color: 'bg-green-500',
      icon: ClockIcon
    },
    {
      id: 18,
      title: 'The Future of Finance',
      excerpt: 'Explore the latest trends in finance and their impact on our society.',
      author: 'Dr. Alice Johnson',
      readTime: '9 min read',
      color: 'bg-purple-500',
      icon: AcademicCapIcon
    }
  ]
};

function Blog({ blogPosts }) {
  const navigate = useNavigate();

  const handleArticleClick = (category, title) => {
    const slug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    navigate(`/blog/${category}/${slug}`);
  };

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen relative overflow-hidden"
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

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">
              Latest Research & Insights
            </span>
          </motion.h1>
        </div>
      </motion.div>

      {/* Blog Categories Section */}
      {Object.entries(blogPosts).map(([category, posts]) => (
        <motion.section
          key={category}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="py-24 bg-zinc-900/50 relative overflow-hidden border-t border-white/10"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold mb-16 capitalize"
            >
              {category}
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <motion.article
                  key={post.id}
                  onClick={() => handleArticleClick(category, post.title)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-2xl bg-zinc-800/50 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                >
                  <div className={`bg-gradient-to-r ${post.color} p-3 rounded-lg w-fit mb-6`}>
                    <post.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>
      ))}
    </div>
  );
}

export default Blog;