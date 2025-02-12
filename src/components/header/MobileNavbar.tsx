import React, { useState } from 'react';
import { NavbarProps } from './NavBar';
import MailIcon from '../icons/MailIcon';
import LinkIcon from '../icons/LinkIcon';
import GitHubIcon from '../icons/GitHubIcon';

const MobileNavbar: React.FC<NavbarProps> = ({ links }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-[1024px]:hidden bg-transparent absolute z-29 w-full">
      {/* Header mobile avec le bouton qui bascule entre hamburger et croix */}
      <div className="flex justify-end p-4">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white focus:outline-none cursor-pointer bg-[#12a89c]"
          aria-label="Toggle menu"
        >
          <div className="relative w-8 h-8">
            {/* Icône hamburger */}
            <svg
              className={`absolute top-0 left-0 w-8 h-8 transition-opacity duration-300 ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            {/* Icône croix */}
            <svg
              className={`absolute top-0 left-0 w-8 h-8 cursor-pointer transition-opacity duration-300 ${
                menuOpen ? 'opacity-100' : 'opacity-0'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </button>
      </div>

      {/* Overlay pour fermer le menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-20" onClick={() => setMenuOpen(false)}></div>
      )}

      {/* Menu burger latéral glissant depuis la gauche */}
      <div
        className={`fixed top-0 left-0 h-full w-[300px] bg-stone-950 transform transition-transform duration-300 ease-in-out z-30 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full px-4 py-6">
          {/* Photo */}
          <div className="flex justify-center mb-6">
            <img
              src="/photo-Landry.png"
              alt="logo"
              className="max-w-[100px] h-auto bg-white rounded-[20px] border-8 border-solid border-[#292f37]"
            />
          </div>
          {/* Rangée d'icônes horizontale */}
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
          {/* Liste des liens */}
          <ul className="flex flex-col">
            {links.map((link, index) => (
              <li
                key={index}
                className="py-3 border-t border-stone-700 text-center"
              >
                <a
                  href={link.href}
                  className="flex items-center text-stone-50 hover:text-[#12a89c] transition-all duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.icon && <span className="mr-2">{link.icon}</span>}
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
