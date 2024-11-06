import SEO from './SEO';
import { seoConfig } from '../config/seo-config';
import { blogPosts } from '../data/blogPosts';

function generateFAQSchema(faqs) {
  return {
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

function generateHowToSchema(howTo) {
  return {
    "@type": "HowTo",
    "name": howTo.title,
    "description": howTo.description,
    "step": howTo.steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.title,
      "text": step.description,
      "image": step.image
    }))
  };
}

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
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://theschumann.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": category.charAt(0).toUpperCase() + category.slice(1),
          "item": `https://theschumann.com/blog/${category}`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": blogData.title,
          "item": `https://theschumann.com/blog/${category}/${slug}`
        }
      ]
    },
    "hasPart": generateFAQSchema(blogData.faqs),
    "isPartOf": {
      "@type": "Series",
      "name": `${category.charAt(0).toUpperCase() + category.slice(1)} Series`,
      "url": `https://theschumann.com/series/${category}`,
      "position": blogData.seriesPosition,
      "numberOfEpisodes": blogPosts[category].length
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