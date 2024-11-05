import { Helmet } from 'react-helmet-async';

export default function SEO({ 
  title, 
  description, 
  keywords,
  schema,
  image = '/og-image.jpg',
  url = 'https://theschumann.com',
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
  category
}) {
  const fullUrl = url.endsWith('/') ? url.slice(0, -1) : url;
  
  return (
    <Helmet>
      {/* Essential Meta Tags */}
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />

      {/* Author and Time Meta Tags */}
      {author && <meta name="author" content={author} />}
      {publishedTime && <meta name="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta name="article:modified_time" content={modifiedTime} />}

      {/* Category-specific Meta Tags */}
      {category === 'health' && (
        <>
          <meta name="medical-content" content="true" />
          <meta name="medical-disclaimer" content="informational" />
        </>
      )}
      {category === 'research' && (
        <>
          <meta name="peer-reviewed" content="true" />
          <meta name="citation_journal_title" content="Schumann Research Journal" />
        </>
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${fullUrl}${image}`} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${fullUrl}${image}`} />

      {/* Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            ...schema
          })}
        </script>
      )}
    </Helmet>
  );
} 