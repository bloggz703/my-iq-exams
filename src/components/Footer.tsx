import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-purple-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-purple-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-purple-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-purple-300">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <p className="text-sm">
              This website provides IQ tests for entertainment purposes only.
              The results should not be considered as professional psychological
              advice.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-700 text-center text-sm">
          <p>
            © {new Date().getFullYear()} myiqexams.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
