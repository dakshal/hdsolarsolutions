import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <Sun className="w-8 h-8 text-primary-400 mr-2" />
              <span className="font-bold text-xl">H&D Solar Solutions</span>
            </div>
            <p className="mb-6 text-gray-300">
              Providing sustainable solar solutions for residential, commercial, and government needs since 2024.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/investment-opportunities" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Tax & Investment
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services/options/buyout" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Solar Buy Out
                </Link>
              </li>
              <li>
                <Link to="/services/options/lease" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Solar Lease
                </Link>
              </li>
              <li>
                <Link to="/services/options/ppa" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Power Purchase Agreement
                </Link>
              </li>
              <li>
                <Link to="/services/markets/residential" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Residential Solar
                </Link>
              </li>
              <li>
                <Link to="/services/markets/commercial" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Commercial Solar
                </Link>
              </li>
              <li>
                <Link to="/services/options/battery" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Battery Backup Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-400 mr-3 mt-1" />
                <span className="text-gray-300">
                  1706 S Shore Ct, Pittsburgh, PA 15203
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-primary-400 mr-3" />
                <a href="tel:+14432713061" className="text-gray-300 hover:text-primary-400">
                  (443) 271-3061
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-primary-400 mr-3" />
                <a href="mailto:info@hdsolarsolutions.com" className="text-gray-300 hover:text-primary-400">
                  info@hdsolarsolutions.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} H&D Solar Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;