import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Sun, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Calculator', path: '/calculator' },
    { name: 'Tax & Investment', path: '/investment-opportunities' },
    { name: 'Sales Rep', path: '/sales-rep' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <Sun className="w-8 h-8 text-primary-600 mr-2" />
          <span className="font-bold text-xl text-gray-900">H&D Solar Solutions</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary-600 px-2 py-1 rounded ${
                  isActive ? 'text-primary-600' : 'text-gray-400'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-primary ml-4">
            Get Quote
          </Link>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="lg:hidden text-gray-400 hover:text-primary-600 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-white border-t py-4 absolute w-full shadow-md">
          <div className="container-custom flex flex-col space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `py-2 px-4 text-sm font-medium transition-colors rounded-md ${
                    isActive
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-400 hover:bg-gray-50 hover:text-primary-600'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={closeMenu}
              className="btn btn-primary w-full text-center"
            >
              Get Quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;