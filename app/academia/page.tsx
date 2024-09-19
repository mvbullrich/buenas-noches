"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';

const MovieQuestionComponent = () => {
  const [hoveredImage, setHoveredImage] = useState('/tres.jpeg'); // Imagen por defecto

  const handleMouseEnter = (image: string) => {
    setHoveredImage(image);
  };

  const handleMouseLeave = () => {
    setHoveredImage('/tres.jpeg'); // Volver a la imagen por defecto
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-[#FAF3E0] text-black p-10">
      <div className="w-full max-w-6xl mx-auto relative">
        {/* Contenedor principal de texto e imágenes */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-6 relative">
          {/* Texto a la izquierda */}
          <div className="w-full md:w-3/5 pr-0 md:pr-6">
            <h1 className="text-5xl font-bold mb-4 text-[#EBAE34]">La Academia.</h1>
            <p className="text-lg mb-4">
              La Academia de Artes y Ciencias Cinematográficas es un grupo de más de 10,000 personas que
              trabajan en el cine (actores, directores, técnicos, etc.). Ellos se encargan de organizar
              los Premios Oscars, entre otras cosas. Para ser miembro de la Academia, debes ser invitado
              por tus logros en el cine. Está conformada por las personas que "más saben de cine" o que
              tuvieron un impacto importante en la industria. Ellos son los que votan y deciden quienes
              ganan cada premio.
            </p>
            <p className="text-lg mb-4">
              El premio Óscar, es una distinción anual concedida por los participantes de La Academia en
              reconocimiento a la excelencia y activismo social de los profesionales de la industria
              cinematográfica que incluye actores, directores y escritores, ampliamente considerada el
              máximo honor en el cine. El siguiente gráfico representa cuánto recaudó cada película
              ganadora al Óscar "Película del año" a partir del año 2004 hasta el 2023.
            </p>
          </div>

          {/* Imagen de inicio.jpeg, posicionada en paralelo al texto */}
          <div className="absolute top-20 right-0 w-1/4">
          
          </div>
        </div>

        {/* Contenedor del gráfico y la imagen dinámica */}
        <div className="flex justify-between items-start">
          {/* Gráfico embebido de Flourish con efecto multiply */}
          <div className="w-full md:w-1/2 mb-8" style={{ mixBlendMode: 'multiply' }}>
            <div className="flourish-embed flourish-chart" data-src="visualisation/19281600">
              <noscript>
                <img src="https://public.flourish.studio/visualisation/19281600/thumbnail" width="100%" alt="chart visualization" />
              </noscript>
            </div>
          </div>

          {/* Imagen dinámica que cambia con hover */}
          <div className="relative w-1/3">
            <img
              src={hoveredImage}
              width={9000}
              height={9000}
              alt="Dynamic Image"
              className="object-cover rounded-none"
            />
          </div>
        </div>

        {/* Divs visibles para el hover en las coordenadas indicadas */}
         {/* Divs visibles para el hover en las coordenadas indicadas */}
       <div
         className="absolute"
         style={{ top: '570px', left: '88px', width: '18px', height: '265px', backgroundColor: 'gray', opacity: 0 }}
         onMouseEnter={() => handleMouseEnter('/THELORDOFTHERINGSTHERETURNOFTHEKING.png')}
         onMouseLeave={handleMouseLeave}
       />
       <div
         className="absolute"
         style={{ top: '780px', left: '110px', width: '18px', height: '60px', backgroundColor: 'gray', opacity: 0 }}
         onMouseEnter={() => handleMouseEnter('/MILLIONDOLLARBABY.png')}
         onMouseLeave={handleMouseLeave}
       />
       <div
         className="absolute"
         style={{ top: '810px', left: '135px', width: '18px', height: '30px', backgroundColor: 'gray', opacity: 0 }}
         onMouseEnter={() => handleMouseEnter('/CRASH.png')}
         onMouseLeave={handleMouseLeave}
       />
         <div
         className="absolute"
         style={{ top: '770px', left: '155px', width: '18px', height: '70px', backgroundColor: 'gray', opacity: 0 }}
         onMouseEnter={() => handleMouseEnter('/DEPARTED.png')}
         onMouseLeave={handleMouseLeave}
       />
       <div
         className="absolute"
         style={{ top: '800px', left: '178px', width: '18px', height: '40px', backgroundColor: 'gray', opacity: 0 }}
         onMouseEnter={() => handleMouseEnter('/NOCOUNTRYFOROLDMEN.png')}
         onMouseLeave={handleMouseLeave}
       />
       <div
         className="absolute"
         style={{ top: '750px', left: '200px', width: '18px', height: '83px', backgroundColor: 'gray', opacity: 0 }}
         onMouseEnter={() => handleMouseEnter('/SLUMDOGMILLIONAIRE.png')}
         onMouseLeave={handleMouseLeave}
       />
       <div
         className="absolute"
         style={{ top: '823px', left: '223px', width: '18px', height: '15px', backgroundColor: 'gray', opacity: 0 }}
         onMouseEnter={() => handleMouseEnter('/THEHURTLOCKER.png')}
         onMouseLeave={handleMouseLeave}
       />
         <div
         className="absolute"
         style={{ top: '740px', left: '245px', width: '18px', height: '100px', backgroundColor: 'gray', opacity: 0 }}
         onMouseEnter={() => handleMouseEnter('/THEKINGSSPEECH.png')}
         onMouseLeave={handleMouseLeave}
       />
        <div
         className="absolute"
         style={{ top: '810px', left: '268px', width: '18px', height: '30px', backgroundColor: 'gray', opacity: 0 }}
         onMouseEnter={() => handleMouseEnter('/THEARTIST.png')}
         onMouseLeave={handleMouseLeave}
       />
       <div
         className="absolute"
         style={{ top: '780px', left: '290px', width: '18px', height: '60px', backgroundColor: 'gray', opacity: 0 }}
         onMouseEnter={() => handleMouseEnter('/ARGO.png')}
         onMouseLeave={handleMouseLeave}
       />
       <div
         className="absolute"
         style={{ top: '795px', left: '313px', width: '18px', height: '45px', backgroundColor: 'gray', opacity: 0 }}
         onMouseEnter={() => handleMouseEnter('/12YEARSASLAVE.png')}
         onMouseLeave={handleMouseLeave}
       />
        <div
         className="absolute"
         style={{ top: '815px', left: '335px', width: '18px', height: '25px', backgroundColor: 'gray', opacity: 0 }}
         onMouseEnter={() => handleMouseEnter('/BIRDMAN.png')}
         onMouseLeave={handleMouseLeave}
       />
       <div
         className="absolute"
         style={{ top: '815px', left: '358px', width: '18px', height: '25px', backgroundColor: 'gray', opacity: 0 }}
         onMouseEnter={() => handleMouseEnter('/SPOTLIGHT.png')}
         onMouseLeave={handleMouseLeave}
       />
       <div
         className="absolute"
         style={{ top: '820px', left: '380px', width: '18px', height: '18px', backgroundColor: 'gray', opacity: 0 }}
         onMouseEnter={() => handleMouseEnter('/MOONLIGHT.png')}
         onMouseLeave={handleMouseLeave}
       />
       <div
         className="absolute"
         style={{ top: '795px', left: '403px', width: '18px', height: '45px', backgroundColor: 'gray', opacity: 0 }}
         onMouseEnter={() => handleMouseEnter('/THESHAPEOFWATER.png')}
         onMouseLeave={handleMouseLeave}
       />
       <div
         className="absolute"
         style={{ top: '765px', left: '425px', width: '18px', height: '75px', backgroundColor: 'gray', opacity: 0 }}
         onMouseEnter={() => handleMouseEnter('/THEGREENBOOK.png')}
         onMouseLeave={handleMouseLeave}
       />
       <div
         className="absolute"
         style={{ top: '775px', left: '448px', width: '18px', height: '70px', backgroundColor: 'gray', opacity: 0 }}
         onMouseEnter={() => handleMouseEnter('/PARASITE.png')}
         onMouseLeave={handleMouseLeave}
       />
        <div
         className="absolute"
         style={{ top: '830px', left: '470px', width: '18px', height: '10px', backgroundColor: 'gray', opacity: 0 }}
         onMouseEnter={() => handleMouseEnter('/NOMADLAND.png')}
         onMouseLeave={handleMouseLeave}
       />
       <div
         className="absolute"
         style={{ top: '810px', left: '493px', width: '18px', height: '25px', backgroundColor: 'gray', opacity: 0 }}
         onMouseEnter={() => handleMouseEnter('/CODA.png')}
         onMouseLeave={handleMouseLeave}
       />
        <div
         className="absolute"
         style={{ top: '805px', left: '515px', width: '18px', height: '35px', backgroundColor: 'gray', opacity: 0 }}
         onMouseEnter={() => handleMouseEnter('/EVERYTHINGEVERYWHEREALLATONCE.png')}
         onMouseLeave={handleMouseLeave}
       />

        {/* Aquí van los divs para las áreas de hover */}

        {/* Script de Flourish */}
        <Script src="https://public.flourish.studio/resources/embed.js" strategy="lazyOnload" />

        {/* Botón de continuar */}
        <Link href="/final" className="block mt-8">
          <button className="w-full h-16 bg-[#FFDC99] hover:bg-[#FFCD6B] transition-colors duration-300 text-[#EBAD34] font-bold text-3xl rounded-lg">
            Continuar.
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MovieQuestionComponent;
