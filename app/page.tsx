import React from 'react';
import Link from 'next/link';

const MovieQuestionComponent = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Parte superior: Título y Deslizá */}
      <div className="flex flex-col justify-center items-center bg-blue-800 text-white min-h-screen p-10">
        <h1 className="text-5xl font-bold mb-4 text-center max-w-3xl">
          Cine: su consumo y recepción.
        </h1>
        <p className="text-lg animate-bounce mt-10">Deslizá ↓</p>
      </div>

      {/* Parte inferior: Preguntas y botón */}
      <div className="bg-[#FAF3E0] text-blue-800 p-10">
        <div className="text-center space-y-10 max-w-4xl mx-auto">
          <p className="text-2xl">¿Qué determina que una película es buena o mala?</p>
          <p className="text-2xl">¿Sus números en taquilla?</p>
          <p className="text-2xl">¿Sus premios?</p>
          <p className="text-2xl">¿Su puntaje en IMDB?</p>
          <p className="text-2xl">¿La opinión de los apasionados del cine?</p>
        </div>

        <div className="mt-16 text-center max-w-4xl mx-auto space-y-6">
          <p className="text-2xl mb-2 font-semibold text-blue-800">
            La realidad es que
          </p>
          <p className="text-2xl font-bold text-blue-800">No hay una respuesta clara.</p>
          <p className="text-2xl font-bold text-blue-800">Ni objetiva.</p>
          <p className="text-2xl font-bold text-blue-800">
            Ni siquiera hay una sola respuesta.
          </p>
          <p className="text-xl mt-4">
            Pero lo que sí podemos hacer es{' '}
            <span className="font-bold">
              observar de qué distintas formas se consume el cine.
            </span>
          </p>
        </div>

        <div className="flex justify-center mt-16">
          <Link href="/masas">
            <button className="w-full max-w-xs h-12 bg-blue-800 hover:bg-blue-700 text-white font-bold rounded transition-colors duration-300">
              Continuar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieQuestionComponent;