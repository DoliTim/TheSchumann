import { blogPosts } from '../data/blogPosts';
import fs from 'fs';
import path from 'path';

export async function generateSitemap() {
  const baseUrl = 'https://theschumann.com';
  const pages = [
    '',
    'about',
    'product',
    'research',
    'technology',
    'science',
    'health'
  ];

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

  // Add main pages
  pages.forEach(page => {
    sitemap += `
  <url>
    <loc>${baseUrl}/${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`;
  });

  // Add blog posts
  Object.entries(blogPosts).forEach(([category, posts]) => {
    posts.forEach(post => {
      const slug = post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      sitemap += `
  <url>
    <loc>${baseUrl}/blog/${category}/${slug}</loc>
    <lastmod>${post.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <news:news>
      <news:publication>
        <news:name>TheSchumann Research</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${post.date}</news:publication_date>
      <news:title>${post.title}</news:title>
    </news:news>
    <image:image>
      <image:loc>${baseUrl}/blog/${category}/${slug}/main-image.jpg</image:loc>
      <image:title>${post.title}</image:title>
    </image:image>
  </url>`;
    });
  });

  sitemap += '\n</urlset>';

  // Write sitemap to public directory
  const publicDir = path.join(process.cwd(), 'public');
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
} 