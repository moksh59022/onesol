import React from 'react';
import { Linkedin, Twitter, Youtube } from 'lucide-react';

const FooterLink = ({ href, children }) => (
  <a href={href} className="text-white/70 hover:text-white transition-colors duration-200">
    {children}
  </a>
);

const Footer = () => {
  const linkSections = [
    {
      title: 'Product',
      links: ['Hiring', 'Onboarding', 'Pricing'],
    },
    {
      title: 'Solutions',
      links: ['Enterprise', 'Small Business', 'Industries'],
    },
    {
      title: 'Resources',
      links: ['Blog', 'Customer Stories', 'Events'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Contact'],
    },
  ];

  return (
    <footer className="bg-brand-green-dark text-white/80 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2 mb-8 lg:mb-0">
            <h2 className="text-2xl font-bold text-white mb-2">RecruiterAI</h2>
            <p className="text-white/60 max-w-xs">The only hiring platform you'll ever need.</p>
          </div>

          {linkSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <FooterLink href="/">{link}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-white/50">&copy; {new Date().getFullYear()} RecruiterAI, Inc. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <a href="/" className="text-white/50 hover:text-white"><Linkedin size={20} /></a>
            <a href="/" className="text-white/50 hover:text-white"><Twitter size={20} /></a>
            <a href="/" className="text-white/50 hover:text-white"><Youtube size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
