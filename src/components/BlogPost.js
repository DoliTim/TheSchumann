import { useParams, useNavigate } from 'react-router-dom';
import { blogComponents } from './blogPosts';
import { blogPosts } from '../data/blogPosts';

export default function BlogPost() {
  const { category, slug } = useParams();
  const navigate = useNavigate();

  // Find the matching component
  const BlogComponent = blogComponents[category]?.[slug];
  
  if (!BlogComponent) {
    navigate('/blog');
    return null;
  }

  return (
    <div className="min-h-screen bg-black">
      <BlogComponent />
    </div>
  );
}