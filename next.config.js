module.exports = {
  async generateMetadata({ params }) {
    const { category, slug } = params;
    const seoData = seoConfig.blogPosts[category][slug];
    
    return {
      title: seoData.title,
      description: seoData.description,
      keywords: seoData.keywords,
      openGraph: {
        title: seoData.title,
        description: seoData.description,
        images: [`/blog/${category}/${slug}/main-image.jpg`],
      }
    };
  },
  
  async generateStaticParams() {
    const paths = [];
    Object.entries(blogPosts).forEach(([category, posts]) => {
      posts.forEach(post => {
        paths.push({
          category,
          slug: post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
        });
      });
    });
    return paths;
  }
}; 