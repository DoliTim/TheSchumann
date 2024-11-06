import { blogPosts } from '../data/blogPosts';

export default function RelatedArticles({ currentCategory, currentSlug, currentTags }) {
  const getRelatedPosts = () => {
    const allPosts = Object.values(blogPosts).flat();
    const currentPost = allPosts.find(post => 
      post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === currentSlug
    );

    return allPosts
      .filter(post => {
        // Don't include current post
        if (post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === currentSlug) {
          return false;
        }

        // Calculate relevance score
        let score = 0;
        
        // Same category
        if (post.category === currentCategory) score += 3;
        
        // Shared tags
        const sharedTags = post.tags?.filter(tag => currentTags?.includes(tag));
        score += (sharedTags?.length || 0) * 2;
        
        // Recent posts get bonus
        const daysSincePublished = (new Date() - new Date(post.date)) / (1000 * 60 * 60 * 24);
        if (daysSincePublished < 30) score += 1;

        return score > 2; // Only return posts with high relevance
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);
  };

  const relatedPosts = getRelatedPosts();

  return (
    <section className="mt-12 border-t border-gray-700 pt-8">
      <h2 className="text-2xl font-bold mb-6">Related Research</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {relatedPosts.map(post => (
          <a 
            key={post.id}
            href={`/blog/${post.category}/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
            className="group hover:opacity-80 transition-opacity"
          >
            <article className="bg-gray-800 rounded-lg p-6">
              <h3 className="font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4">{post.excerpt}</p>
              <div className="flex items-center text-sm text-gray-500">
                <post.icon className="h-4 w-4 mr-2" />
                <span>{post.readTime} read</span>
              </div>
            </article>
          </a>
        ))}
      </div>
    </section>
  );
} 