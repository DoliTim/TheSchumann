import { useLocation } from 'react-router-dom';
import SEO from './SEO';
import { seoConfig } from '../config/seo-config';
import { blogPosts } from '../data/blogPosts';

export default function BlogLayout({ children }) {
  const location = useLocation();
  const pathParts = location.pathname.split('/').filter(Boolean);
  const category = pathParts[1];
  const slug = pathParts[2];
  
  const blogData = blogPosts[category]?.find(post => 
    post.title.toLowerCase().replace(/[^a-z0-9-]+/g, '-') === slug
  );
  const seoData = seoConfig.blogPosts[category]?.[slug];

  if (!seoData || !blogData) return children;

  const enhancedSchema = {
    ...seoData.schema,
    "publisher": {
      "@type": "Organization",
      "name": "Schumann",
      "logo": {
        "@type": "ImageObject",
        "url": "https://theschumann.com/logo.png"
      }
    },
    "datePublished": blogData.date,
    "dateModified": new Date().toISOString().split('T')[0],
    "readingTime": blogData.readTime,
    "author": {
      "@type": "Person",
      "name": blogData.author,
      "jobTitle": seoData.schema.author.jobTitle,
      "url": `https://theschumann.com/authors/${blogData.author.toLowerCase().replace(/[^a-z0-9-]+/g, '-')}`
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://theschumann.com/blog/${category}/${slug}`
    },
    "keywords": seoData.keywords,
    "image": [
      `https://theschumann.com/blog/${category}/${slug}/main-image.jpg`,
      `https://theschumann.com/blog/${category}/${slug}/thumbnail.jpg`
    ]
  };

  return (
    <>
      <SEO 
        {...seoData}
        schema={enhancedSchema}
        url={`https://theschumann.com/blog/${category}/${slug}`}
        type="article"
        image={`/blog/${category}/${slug}/main-image.jpg`}
        author={blogData.author}
        publishedTime={blogData.date}
        modifiedTime={new Date().toISOString().split('T')[0]}
      />
      {children}
    </>
  );
} 