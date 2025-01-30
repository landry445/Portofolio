import React from 'react';
import Navbar from './components/NavBar';

const App: React.FC = () => {
  const links = [
    { label: 'Accueil', href: '/' },
    { label: 'Projets', href: '/projets' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <div>
      <Navbar links={links} />
      <main>
        <h1>Bienvenue sur mon portfolio !</h1>
      </main>
    </div>
  );
};

export default App;
