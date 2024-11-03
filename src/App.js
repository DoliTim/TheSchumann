import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Product from './components/Product';
import Education from './components/Education';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import About from './components/About';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import { blogPosts } from './data/blogPosts';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-black">
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/education" element={<Education />} />
            <Route path="/blog" element={<Blog blogPosts={blogPosts} />} />
            <Route path="/blog/:category/:slug" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
          <Cart />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
