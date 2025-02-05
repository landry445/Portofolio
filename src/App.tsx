import React from 'react';
import Navbar from './components/header/NavBar';
import Description from './components/About';

const App: React.FC = () => {
  const links = [
    { label: 'Accueil', href: '/' },
    { label: 'Projets', href: '/projets' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <div className="bg-slate-950">
      <Navbar links={links} />
      <div className="ml-[300px]">
        <Description />
      </div>
    </div>
  );
};

export default App;
