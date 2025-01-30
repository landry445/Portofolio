import React from 'react';

type NavbarProps = {
  links: { label: string; href: string }[]; 
};

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <nav className="bg-slate-950 h-20">
      <div className=" 
        fixed
        top-0
        flex
        justify-between
        items-center
        z-20
        h-[80px]
        w-full
        px-3 
        sm:px-5
        md:px-7
        lg:px-24">

      <img src="/Logo-LD.png" alt="logo" />
        {/* Liens de navigation */}
        <ul className="flex items-center">
          {links.map((link, index) => (
            <li key={index} className='
            ms-4
            py-2
            px-4
            rounded-full
            transition
            duraction-100
            hover:ease-in-out
            hover:cursor-pointer
            text-stone-50'>
              <a
                href={link.href}
                className="text-stone-50 hover:text-amber-400 transition"
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

// Export du composant
export default Navbar;
