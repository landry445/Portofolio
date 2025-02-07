import React from 'react';
import LinkIcon from '../icons/LinkIcon';
import MailIcon from '../icons/MailIcon';
import GitHubIcon from '../icons/GitHubIcon';

export type NavbarProps = {
  links: { label: string; href: string; icon?: React.ReactNode; }[];
};

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <nav className="fixed inset-y-0 left-0 w-[300px] bg-stone-950 z-20 hidden min-[1200px]:block">
      <div className="flex flex-col h-full px-4 py-6">
        <div className="flex justify-center mb-6">
          <img src="/photo-Landry.png" alt="logo" className="max-w-[100px] h-auto bg-white rounded-[20px] border-8 border-solid border-[#292f37]" />
        </div>
        <div className="flex justify-center space-x-4 mb-6">
            <a
              href="https://github.com/yourusername"
              className="text-white hover:text-[#12a89c]"
            >
              {/* Exemple d'icône GitHub (remplacez le SVG par votre icône personnalisée si besoin) */}
              <GitHubIcon/>
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              className="text-white hover:text-[#12a89c]"
            >
              {/* Exemple d'icône LinkedIn */}
              <LinkIcon/>
            </a>
            <a
              href="mailto:someone@example.com"
              className="text-white hover:text-[#12a89c]"
            >
              {/* Exemple d'icône Mail */}
              <MailIcon/>
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
      <div className="flex flex-wrap justify-center md:justify-start space-x-4 mt-4">
        <a
          href="#"
          className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg font-medium transition"
        >
          GitHub
        </a>
        <a
          href="#"
          className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg font-medium transition"
        >
          LinkedIn
        </a>
        <a
          href="#"
          className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg font-medium transition"
        >
          Mail
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
