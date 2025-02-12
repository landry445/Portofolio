import React from 'react';
import Navbar from './components/header/NavBar';
import MobileNavbar from './components/header/MobileNavbar';
import Home from './pages/Home';
import About from './pages/About';
import HomeIcon from './components/icons/HomeIcon';
import InfoIcon from './components/icons/InfoIcon';
import ProjectIcon from './components/icons/ProjectIcon';
import ContactIcon from './components/icons/ContactIcon';

const App: React.FC = () => {
  const links = [
    { label: 'Accueil', href: '/', icon: <HomeIcon style="w-6 h-6" /> },
    { label: 'Competences', href: '/competences', icon: <InfoIcon style="w-6 h-6" /> },
    { label: 'Projets', href: '/projets', icon: <ProjectIcon style="w-6 h-6" /> },
    { label: 'Contact', href: '/contact', icon: <ContactIcon style="w-6 h-6" /> },
  ];

  return (
    <div className="flex min-h-screen">
      {/* La navbar fixe à gauche */}
      <Navbar links={links} />
      {/* Menu burger pour écrans <1200px */}
      <MobileNavbar links={links} />
      
      {/* Contenu principal (Home et About empilés verticalement) */}
      <div className="flex-1">
        <Home />
        <About />
      </div>
    </div>
  );
};

export default App;
