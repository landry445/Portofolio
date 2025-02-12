// src/pages/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-[#111111] w-full min-h-screen flex items-center justify-center p-8">
      <div className="flex flex-col sm:flex-row items-center gap-8 max-w-6xl">
        <div className="flex-1 text-white">
          <h1 className="text-4xl font-bold mb-4">À propos</h1>
          <p className="leading-relaxed">
            Ancien chef pâtissier, j’ai troqué les fourneaux pour le code, mais l’essence reste la même : rigueur, créativité et adaptation.
            Ma reconversion en développement web est une suite logique à mon goût pour le travail bien fait et la recherche de solutions.
            Organiser, tester, ajuster… que ce soit en cuisine ou en tech, l’important est de créer quelque chose qui fonctionne et qui plaît.
            Aujourd’hui, je cherche une opportunité pour mettre cette approche au service de nouveaux défis !
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img 
            src="/photo-Landry.png" 
            alt="Ma photo" 
            className="rounded-lg shadow-lg w-full max-w-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
