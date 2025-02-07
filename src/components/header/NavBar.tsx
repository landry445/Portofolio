import React from 'react';

export type NavbarProps = {
  links: { label: string; href: string; icon?: React.ReactNode; }[];
};

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <nav className="fixed inset-y-0 left-0 w-[300px] bg-stone-950 z-20 hidden min-[1200px]:block">
      <div className="flex flex-col h-full px-4 py-6">
        <div className="flex justify-center mb-6">
          <img src="/LD_logo_.png" alt="logo" className="w-[53px] h-[53px]" />
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
