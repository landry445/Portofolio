import React, { useState } from 'react';

type NavbarProps = {
  links: { label: string; href: string }[];
};

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-stone-950 fixed top-0 w-full z-20">
      <div className="flex items-center justify-between h-20 px-3 sm:px-5 md:px-7 lg:px-24">
        <img src="/LD_logo_.png" alt="logo" className="w-[53px] h-[53px]" />
        {/* Liens visibles sur écrans moyens et plus */}
        <ul className="hidden md:flex items-center">
          {links.map((link, index) => (
            <li
              key={index}
              className="ms-4 py-2 px-4 rounded-full transition duration-100 ease-in-out hover:cursor-pointer text-stone-50"
            >
              <a
                href={link.href}
                className="text-stone-50 hover:text-[#12a89c] hover:bg-clip-text transition-all duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Bouton burger visible sur écrans inférieurs à 768 px */}
        <button
          className="md:hidden text-stone-50 focus:outline-none"
          onClick={() => setMenuOpen(true)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Overlay avec effet de flou */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-transparent backdrop-blur-md md:hidden z-20"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Menu burger en barre latérale */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-stone-950 transform transition-transform duration-300 ease-in-out z-30 md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-stone-50 focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col items-center mt-10">
          {links.map((link, index) => (
            <li
              key={index}
              className="py-3 border-t border-stone-700 w-full text-center"
            >
              <a
                href={link.href}
                className="text-stone-50 hover:text-[#12a89c] transition-all duration-300 block"
                onClick={() => setMenuOpen(false)}
              >
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
