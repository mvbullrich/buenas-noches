import React from 'react';
import Link from 'next/link';

const MovieQuestionComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black p-4">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-bold mb-4">
          Cine: su consumo y recibimiento.
        </h1>
        
        <div className="space-y-6 mt-8">
          <p className="text-lg">¿Qué determina que una película es buena o mala?</p>
          
          <p className="text-lg">¿Sus números en taquilla?</p>
          
          <p className="text-lg">¿Sus premios?</p>
          
          <p className="text-lg">¿Su puntaje en IMDB?</p>
          
          <p className="text-lg">¿La opinión de los apasionados del cine?</p>
        </div>
        
        <Link href="/intermedio" className="block mt-8">
          <button className="w-full h-16 bg-gray-200 hover:bg-gray-300 transition-colors duration-300 text-black font-semibold rounded-lg">
            Continuar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MovieQuestionComponent;