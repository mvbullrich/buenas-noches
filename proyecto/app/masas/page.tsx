"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';

const MovieQuestionComponent = () => {
  const [hoveredImage, setHoveredImage] = useState('/uno.jpeg'); // Imagen por defecto

  const handleMouseEnter = (image: string) => {
    setHoveredImage(image);
  };

  const handleMouseLeave = () => {
    setHoveredImage('/uno.jpeg'); // Volver a la imagen por defecto
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-[#FAF3E0] text-black p-10">
      <div className="w-full max-w-6xl mx-auto relative">
        {/* Contenedor principal de texto e imágenes */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-6 relative">
          {/* Texto a la izquierda */}
          <div className="w-full md:w-3/5 pr-0 md:pr-6">
            <h1 className="text-5xl font-bold mb-4 text-[#62AAD0]">Las masas.</h1>
            <p className="text-lg mb-4">
              Una de las definiciones de "masa" según la Real Academia Española es la siguiente:
              "Muchedumbre o conjunto numeroso de personas". Cuando hablamos de las masas en el cine, nos
              referimos a un grupo grande de gente que consume la misma película.
            </p>
            <p className="text-lg mb-4">
              Una película taquillera es aquella que atrae a muchas personas a los cines y genera un
              enorme número de ventas de entradas. Para definir qué películas representan "los gustos
              de las masas", nos fijamos cuáles fueron las películas más taquilleras de cada año en los
              últimos 20 años y cuánto recaudó cada una. Si pasas el mouse por arriba, podés ver qué
              película es y a qué género pertenece.
            </p>
          </div>

          {/* Imagen de inicio.jpeg, posicionada en paralelo al texto */}
          <div className="absolute top-20 right-0 w-1/4">
            <Image
              src="/inicio.jpeg"
              width={500}
              height={500}
              alt="Audiencia con gafas 3D"
              className="objetct-cover rounded-none"
            />
          </div>
        </div>

        {/* Contenedor del gráfico y la imagen dinámica */}
        <div className="flex justify-between items-start">
          {/* Gráfico embebido de Flourish con efecto multiply */}
          <div className="w-full md:w-1/2 mb-8" style={{ mixBlendMode: 'multiply' }}>
            <div className="flourish-embed flourish-chart" data-src="visualisation/19281503">
              <noscript>
                <img src="https://public.flourish.studio/visualisation/19281503/thumbnail" width="100%" alt="chart visualization" />
              </noscript>
            </div>
          </div>

          {/* Imagen dinámica que cambia con hover */}
          <div className="relative w-1/3">
            <Image
              src={hoveredImage}
              width={9000}
              height={9000}
              alt="Dynamic Image"
              className="object-cover rounded-none"
            />
          </div>
        </div>

        {/* Divs visibles para el hover en las coordenadas indicadas */}
        <div
          className="absolute"
          style={{ top: '670px', left: '90px', width: '18px', height: '85px', backgroundColor: 'gray', opacity: 0}}
          onMouseEnter={() => handleMouseEnter('/shrek.jpg')}
          onMouseLeave={handleMouseLeave}
        />
        <div
          className="absolute"
          style={{ top: '665px', left: '110px', width: '18px', height: '90px', backgroundColor: 'gray', opacity: 0 }}
          onMouseEnter={() => handleMouseEnter('/harrypotter.jpg')}
          onMouseLeave={handleMouseLeave}
        />
        <div
          className="absolute"
          style={{ top: '655px', left: '135px', width: '18px', height: '100px', backgroundColor: 'gray', opacity: 0 }}
          onMouseEnter={() => handleMouseEnter('/caribe.jpg')}
          onMouseLeave={handleMouseLeave}
        />
          <div
          className="absolute"
          style={{ top: '660px', left: '155px', width: '18px', height: '90px', backgroundColor: 'gray', opacity: 0 }}
          onMouseEnter={() => handleMouseEnter('/caribe2.jpg')}
          onMouseLeave={handleMouseLeave}
        />
        <div
          className="absolute"
          style={{ top: '660px', left: '180px', width: '18px', height: '90px', backgroundColor: 'gray', opacity: 0 }}
          onMouseEnter={() => handleMouseEnter('/batman.jpg')}
          onMouseLeave={handleMouseLeave}
        />
        <div
          className="absolute"
          style={{ top: '480px', left: '200px', width: '18px', height: '270px', backgroundColor: 'gray', opacity: 0 }}
          onMouseEnter={() => handleMouseEnter('/avatar.jpg')}
          onMouseLeave={handleMouseLeave}
        />
        <div
          className="absolute"
          style={{ top: '660px', left: '223px', width: '18px', height: '95px', backgroundColor: 'gray', opacity: 0 }}
          onMouseEnter={() => handleMouseEnter('/toystory.jpg')}
          onMouseLeave={handleMouseLeave}
        />
          <div
          className="absolute"
          style={{ top: '630px', left: '245px', width: '18px', height: '130px', backgroundColor: 'gray', opacity: 0 }}
          onMouseEnter={() => handleMouseEnter('/harrypopoter.png')}
          onMouseLeave={handleMouseLeave}
        />
         <div
          className="absolute"
          style={{ top: '615px', left: '267px', width: '18px', height: '140px', backgroundColor: 'gray', opacity: 0 }}
          onMouseEnter={() => handleMouseEnter('/avengers.jpg')}
          onMouseLeave={handleMouseLeave}
        />
        <div
          className="absolute"
          style={{ top: '630px', left: '290px', width: '18px', height: '120px', backgroundColor: 'gray', opacity: 0 }}
          onMouseEnter={() => handleMouseEnter('/frozen.jpg')}
          onMouseLeave={handleMouseLeave}
        />
        <div
          className="absolute"
          style={{ top: '650px', left: '313px', width: '18px', height: '105px', backgroundColor: 'gray', opacity: 0 }}
          onMouseEnter={() => handleMouseEnter('/transformers.jpg')}
          onMouseLeave={handleMouseLeave}
        />
         <div
          className="absolute"
          style={{ top: '570px', left: '335px', width: '18px', height: '185px', backgroundColor: 'gray', opacity: 0 }}
          onMouseEnter={() => handleMouseEnter('/starwars.jpg')}
          onMouseLeave={handleMouseLeave}
        />
        <div
          className="absolute"
          style={{ top: '640px', left: '358px', width: '18px', height: '115px', backgroundColor: 'gray', opacity: 0}}
          onMouseEnter={() => handleMouseEnter('/capitanamerica.jpg')}
          onMouseLeave={handleMouseLeave}
        />
        <div
          className="absolute"
          style={{ top: '630px', left: '380px', width: '18px', height: '125px', backgroundColor: 'gray', opacity: 0 }}
          onMouseEnter={() => handleMouseEnter('/starwars2.png')}
          onMouseLeave={handleMouseLeave}
        />
        <div
          className="absolute"
          style={{ top: '565px', left: '403px', width: '18px', height: '190px', backgroundColor: 'gray', opacity: 0 }}
          onMouseEnter={() => handleMouseEnter('/avengers2.png')}
          onMouseLeave={handleMouseLeave}
        />
        <div
          className="absolute"
          style={{ top: '490px', left: '425px', width: '18px', height: '265px', backgroundColor: 'gray', opacity: 0 }}
          onMouseEnter={() => handleMouseEnter('/avengers3.png')}
          onMouseLeave={handleMouseLeave}
        />
        <div
          className="absolute"
          style={{ top: '705px', left: '448px', width: '18px', height: '50px', backgroundColor: 'gray', opacity: 0}}
          onMouseEnter={() => handleMouseEnter('/badboys.png')}
          onMouseLeave={handleMouseLeave}
        />
         <div
          className="absolute"
          style={{ top: '565px', left: '470px', width: '18px', height: '190px', backgroundColor: 'gray', opacity: 0 }}
          onMouseEnter={() => handleMouseEnter('/spidermannwh.png')}
          onMouseLeave={handleMouseLeave}
        />
        <div
          className="absolute"
          style={{ top: '535px', left: '493px', width: '18px', height: '220px', backgroundColor: 'gray', opacity: 0 }}
          onMouseEnter={() => handleMouseEnter('/avatar2.png')}
          onMouseLeave={handleMouseLeave}
        />
         <div
          className="absolute"
          style={{ top: '615px', left: '515px', width: '18px', height: '140px', backgroundColor: 'gray', opacity: 0 }}
          onMouseEnter={() => handleMouseEnter('/barbie.jpg')}
          onMouseLeave={handleMouseLeave}
        />

        {/* Script de Flourish */}
        <Script src="https://public.flourish.studio/resources/embed.js" strategy="lazyOnload" />

        {/* Botón de continuar */}
        <Link href="/academia" className="block mt-8">
          <button className="w-full h-16 bg-[#A8C4D9] hover:bg-[#90AFC0] transition-colors duration-300 text-[#2F5D8A] font-bold text-3xl rounded-lg">
            Continuar.
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MovieQuestionComponent;