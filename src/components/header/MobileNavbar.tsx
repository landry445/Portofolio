import React, { useState } from 'react';
import { NavbarProps } from './NavBar';

const MobileNavbar: React.FC<NavbarProps> = ({ links }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-[1200px]:hidden bg-transparent absolute z-29 w-full">
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
            {/* Icône croix avec curseur pointer */}
            <svg
              className={`absolute top-0 left-0 w-8 h-8 transition-opacity duration-300 ${
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
        <div
          className="fixed inset-0 z-20"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Menu burger latéral glissant depuis la gauche */}
      <div
        className={`fixed top-0 left-0 h-full w-[300px] bg-stone-950 transform transition-transform duration-300 ease-in-out z-30 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full px-4 py-6">
          <div className="flex justify-center mb-6">
            <img src="/LD_logo_.png" alt="logo" className="w-[53px] h-[53px]" />
          </div>
          <ul className="flex flex-col">
            {links.map((link, index) => (
              <li key={index} className="py-3 border-t border-stone-700 text-center">
                <a
                  href={link.href}
                  className=" flex items-center text-stone-50 hover:text-[#12a89c] transition-all duration-300"
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
