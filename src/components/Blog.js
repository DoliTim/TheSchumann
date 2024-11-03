import { useState } from 'react';

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "Understanding the Science of Schumann Resonance",
      category: "science",
      date: "2024-03-01",
      excerpt: "Dive deep into the scientific principles behind Earth's natural frequency...",
      image: "/blog/science-post.jpg"
    },
    {
      id: 2,
      title: "How Schumann Frequency Improves Sleep Quality",
      category: "health",
      date: "2024-02-28",
      excerpt: "Discover the connection between Earth's resonance and better sleep patterns...",
      image: "/blog/sleep-post.jpg"
    },
    {
      id: 3,
      title: "EMF Protection in Modern Life",
      category: "wellness",
      date: "2024-02-25",
      excerpt: "Learn about protecting yourself from electromagnetic pollution...",
      image: "/blog/emf-post.jpg"
    }
  ];

  const categories = ['all', 'science', 'health', 'wellness'];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>
      
      {/* Category Filter */}
      <div className="flex justify-center mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`mx-2 px-4 py-2 rounded-full ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map(post => (
          <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <span className="text-blue-600 text-sm font-semibold">
                {post.category.toUpperCase()}
              </span>
              <h2 className="text-xl font-semibold mt-2">{post.title}</h2>
              <p className="text-gray-500 mt-2">{post.excerpt}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-400 text-sm">{post.date}</span>
                <button className="text-blue-600 hover:text-blue-800">
                  Read More →
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Blog; 