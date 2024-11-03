import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Schumann</h3>
            <p className="text-gray-300 text-sm">
              Enhancing wellness through Earth's natural frequency
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/product" className="text-gray-300 hover:text-white text-sm">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/education" className="text-gray-300 hover:text-white text-sm">
                  Learn More
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Email: contact@theschumann.com</li>
              <li>Phone: (555) 123-4567</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 text-gray-900 rounded"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-300">
          <p>© {new Date().getFullYear()} Schumann. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 