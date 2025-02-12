// src/pages/Description.tsx
import React from 'react';

export default function Description() {
  return (
    <div className="relative min-h-screen">
      {/* Arrière-plan avec filtre sur l'image */}
      <div className="absolute inset-0 bg-[url('/setup.webp')] bg-cover bg-center bg-no-repeat filter brightness-70"></div>
      
      {/* Contenu placé au-dessus de l'arrière-plan */}
      <div className="relative z-10 flex justify-center items-center min-h-screen text-white px-6">
        <div className="grid grid-cols-1 items-center w-full max-w-7xl">
          <div className="flex flex-col items-start space-y-4 text-center md:text-left">
            <h1 className="text-7xl font-bold w-full">
              <span className="text-white">Landry DUPONT</span>
            </h1>
            <h2 className="text-3xl font-semibold">DÉVELOPPEUR FULLSTACK</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
