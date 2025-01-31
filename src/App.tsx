import React from 'react';
import Navbar from './components/NavBar';
import Description from './components/Description';

const App: React.FC = () => {
  const links = [
    { label: 'Accueil', href: '/' },
    { label: 'Projets', href: '/projets' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <div className='bg-slate-950'>
      <Navbar links={links} />
      <Description/>
    </div>
  );
};

export default App;
