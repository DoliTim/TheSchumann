import SEO from './SEO';
import { seoConfig } from '../config/seo-config';
import { blogPosts } from '../data/blogPosts';

export default function BlogSEO({ category, slug }) {
  const seoData = seoConfig.blogPosts[category][slug];
  const blogData = blogPosts[category].find(post => 
    post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug
  );
  
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
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://theschumann.com/blog/${category}/${slug}`
    },
    "readingTime": blogData.readTime,
    "keywords": seoData.keywords,
    "dateModified": new Date().toISOString().split('T')[0],
    "author": {
      "@type": "Person",
      "name": blogData.author,
      "jobTitle": seoData.schema.author.jobTitle,
      "url": `https://theschumann.com/authors/${blogData.author.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
    }
  };

  if (category === 'health') {
    enhancedSchema.medicalContent = {
      "@type": "MedicalWebPage",
      "medicalAudience": "Patients",
      "healthCondition": blogData.healthCondition
    };
  }

  if (category === 'research') {
    enhancedSchema.researchContent = {
      "@type": "ScholarlyArticle",
      "peerReviewed": true,
      "studyType": blogData.studyType
    };
  }

  return (
    <SEO 
      {...seoData} 
      schema={enhancedSchema}
      url={`https://theschumann.com/blog/${category}/${slug}`}
      type="article"
      image={`/blog/${category}/${slug}/main-image.jpg`}
      author={blogData.author}
      publishedTime={blogData.date}
      modifiedTime={new Date().toISOString().split('T')[0]}
      category={category}
    />
  );
} 