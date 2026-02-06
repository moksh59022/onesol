import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const NavLink = ({ href, children }) => (
  <a href={href} className="relative text-brand-text-light hover:text-brand-primary transition-colors duration-200 font-medium group">
    {children}
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
  </a>
);

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Products', 'Solutions', 'Customers', 'Resources'];

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 shadow-md backdrop-blur-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="/">
            <Logo />
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink key={item} href={`#${item.toLowerCase().replace(' ', '-')}`}>
                {item}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="/" className="text-brand-text-light hover:text-brand-primary transition-colors duration-200 font-medium">
              Sign In
            </a>
            <button className="px-5 py-2 bg-brand-primary text-white rounded-full hover:opacity-90 transition-opacity duration-200 font-medium shadow-lg shadow-brand-primary/30">
              Request a demo
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-text hover:text-brand-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <motion.div
            className="md:hidden bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200/80 mt-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="block px-3 py-2 text-brand-text-light hover:text-brand-primary hover:bg-gray-50 rounded-md font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="pt-4 pb-2 space-y-2 border-t border-gray-100">
                <button className="block text-center w-full px-4 py-2 text-brand-text-light hover:text-brand-primary rounded-lg font-medium">
                  Sign In
                </button>
                <button className="w-full px-6 py-2 bg-brand-primary text-white rounded-full hover:opacity-90 transition-opacity duration-200 font-medium">
                  Request a demo
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
