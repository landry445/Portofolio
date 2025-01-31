import React from 'react';

type NavbarProps = {
  links: { label: string; href: string }[]; 
};

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <nav className="bg-stone-950 h-20">
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

      <img src="/LD_logo_.png" alt="logo" className='w-[53px] h-[53px]'/>
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
                className="text-stone-50 hover:text-[#12a89c] hover:bg-clip-text transition-all duration-300"
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
