// src/components/header/Navbar.tsx
import React from 'react';
import GitHubIcon from '../icons/GitHubIcon';
import LinkIcon from '../icons/LinkIcon';
import MailIcon from '../icons/MailIcon';

export type NavbarProps = {
  links: { label: string; href: string; icon?: React.ReactNode }[];
};

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <nav className="w-[300px] bg-stone-950 z-20 hidden lg:block">
      <div className="flex flex-col h-full px-4 py-6">
        <div className="flex justify-center mb-6">
          <img 
            src="/photo-Landry.png" 
            alt="logo" 
            className="max-w-[100px] h-auto bg-white rounded-[20px] border-8 border-solid border-[#292f37]" 
          />
        </div>
        {/* Icônes sociales en haut */}
        <div className="flex justify-center space-x-4 mb-6">
          <a href="https://github.com/yourusername" className="text-white hover:text-[#12a89c]">
            <GitHubIcon />
          </a>
          <a href="https://linkedin.com/in/yourprofile" className="text-white hover:text-[#12a89c]">
            <LinkIcon />
          </a>
          <a href="mailto:someone@example.com" className="text-white hover:text-[#12a89c]">
            <MailIcon />
          </a>
        </div>
        <ul className="flex flex-col">
          {links.map((link, index) => (
            <li key={index} className="py-3 border-t border-stone-700 text-center">
              <a
                href={link.href}
                className="flex items-center text-stone-50 hover:text-[#12a89c] transition-all duration-300"
              >
                {link.icon && <span className="mr-2">{link.icon}</span>}
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
