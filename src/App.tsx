import React from 'react';
import Navbar from './components/header/NavBar';
import MobileNavbar from './components/header/MobileNavbar';
import About from './components/About';
import HomeIcon from './components/icons/HomeIcon'

const App: React.FC = () => {
  const links = [
    { label: 'Accueil', href: '/', icon: <HomeIcon style="w-6 h-6" /> },
    { label: 'Competences', href: '/competences' },
    { label: 'Projets', href: '/projets' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <div className="bg-transparent">
      {/* Navbar fixe pour écrans ≥1200px */}
      <Navbar links={links} />

      {/* Menu burger pour écrans <1200px */}
      <MobileNavbar links={links} />

      {/* Contenu principal :
          Sur grands écrans, le contenu est décalé vers la droite (ml-[300px]) */}
      <div className="min-[1200px]:ml-[300px]">
        <About />
      </div>
    </div>
  );
};

export default App;
