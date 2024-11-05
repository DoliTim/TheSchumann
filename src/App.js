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
import AboutSchumann from './components/AboutSchumann';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
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
              <Route path="/about/schumann" element={<AboutSchumann />} />
            </Routes>
            <Footer />
            <Cart />
          </div>
        </Router>
      </CartProvider>
    </HelmetProvider>
  );
}

export default App;