"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';

const MovieQuestionComponent = () => {
  const [hoveredImage, setHoveredImage] = useState('/dos.jpeg'); // Imagen por defecto

  const handleMouseEnter = (image: string) => {
    setHoveredImage(image);
  };

  const handleMouseLeave = () => {
    setHoveredImage('/dos.jpeg'); // Volver a la imagen por defecto
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-[#FAF3E0] text-black p-10">
      <div className="w-full max-w-6xl mx-auto relative">
        {/* Contenedor principal de texto e imágenes */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-6 relative">
          {/* Texto a la izquierda */}
          <div className="w-full md:w-3/5 pr-0 md:pr-6">
            <h1 className="text-5xl font-bold mb-4 text-[#83AC5C]">Los apasionados.</h1>
            <p className="text-lg mb-4">
              ¿De qué hablamos cuando hablamos de apasionados? Bueno, nos referimos nada más ni nada menos que a los cinéfilos: por definición, personas aficionadas el cine.
              Para conseguir una base de datos que representar a las personas con estas características, acudimos a Letterboxd: una plataforma para los amantes del cine donde pueden calificar, reseñar y organizar películas en listas.
            </p>
            <p className="text-lg mb-4">
              En el siguiente gráfico se puede apreciar la película con más reseñas (por ende, la más vista por los usuarios de la plataforma) de cada año de los últimos 20 años, y su recaudación.
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
            <div className="flourish-embed flourish-chart" data-src="visualisation/19444595">
              <noscript>
                <img src="https://public.flourish.studio/visualisation/19444595/thumbnail" width="100%" alt="chart visualization" />
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
        <div
          className="absolute"
          style={{ top: '705px', left: '45px', width: '18px', height: '20px', backgroundColor: 'gray', opacity: 0}}
          onMouseEnter={() => handleMouseEnter('/M2004.png')}
          onMouseLeave={handleMouseLeave}
        />
        <div
          className="absolute"
          style={{ top: '690px', left: '70px', width: '18px', height: '40px', backgroundColor: 'gray', opacity: 0 }}
          onMouseEnter={() => handleMouseEnter('/M2005.png')}
          onMouseLeave={handleMouseLeave}
        />
        <div
          className="absolute"
          style={{ top: '700px', left: '94px', width: '18px', height: '25px', backgroundColor: 'gray', opacity: 0 }}
          onMouseEnter={() => handleMouseEnter('/M2006.png')}
          onMouseLeave={handleMouseLeave}
        />
        <div
          className="absolute"
          style={{ top: '555px', left: '119px', width: '18px', height: '170px', backgroundColor: 'gray', opacity: 0 }}
          onMouseEnter={() => handleMouseEnter('/M2007.png')}
          onMouseLeave={handleMouseLeave}
        />
        <div
          className="absolute"
          style={{ top: '460px', left: '143px', width: '18px', height: '260px', backgroundColor: 'gray', opacity: 0 }}
          onMouseEnter={() => handleMouseEnter('/M2008.png')}
          onMouseLeave={handleMouseLeave}
        />
        <div
          className="absolute"
          style={{ top: '645px', left: '168px', width: '18px', height: '85px', backgroundColor: 'gray', opacity: 0 }}
          onMouseEnter={() => handleMouseEnter('/M2009.png')}
          onMouseLeave={handleMouseLeave}
        />
        <div
          className="absolute"
          style={{ top: '510px', left: '193px', width: '18px', height: '220px', backgroundColor: 'gray', opacity: 0 }}
          onMouseEnter={() => handleMouseEnter('/M2010.png')}
          onMouseLeave={handleMouseLeave}
        />
        <div
          className="absolute"
          style={{ top: '700px', left: '218px', width: '18px', height: '25px', backgroundColor: 'gray', opacity: 0 }}
          onMouseEnter={() => handleMouseEnter('/M2011.png')}
          onMouseLeave={handleMouseLeave}
        />
        <div
          className="absolute"
          style={{ top: '615px', left: '240px', width: '18px', height: '120px', backgroundColor: 'gray', opacity: 0 }}
          onMouseEnter={() => handleMouseEnter('/M2012.png')}
          onMouseLeave={handleMouseLeave}
        />
        <div
          className="absolute"
          style={{ top: '620px', left: '265px', width: '18px', height: '110px', backgroundColor: 'gray', opacity: 0 }}
          onMouseEnter={() => handleMouseEnter('/M2013.png')}
          onMouseLeave={handleMouseLeave}
        />
        <div
          className="absolute"
          style={{ top: '545px', left: '290px', width: '18px', height: '185px', backgroundColor: 'gray', opacity: 0 }}
          onMouseEnter={() => handleMouseEnter('/M2014.png')}
          onMouseLeave={handleMouseLeave}
        />
        <div
          className="absolute"
          style={{ top: '620px', left: '315px', width: '18px', height: '110px', backgroundColor: 'gray', opacity: 0 }}
          onMouseEnter={() => handleMouseEnter('/M2015.png')}
          onMouseLeave={handleMouseLeave}
        />
        <div
          className="absolute"
          style={{ top: '610px', left: '340px', width: '18px', height: '115px', backgroundColor: 'gray', opacity: 0}}
          onMouseEnter={() => handleMouseEnter('/M2016.png')}
          onMouseLeave={handleMouseLeave}
        />
        <div
          className="absolute"
          style={{ top: '655px', left: '364px', width: '18px', height: '70px', backgroundColor: 'gray', opacity: 0 }}
          onMouseEnter={() => handleMouseEnter('/M2017.png')}
          onMouseLeave={handleMouseLeave}
        />
        <div
          className="absolute"
          style={{ top: '545px', left: '389px', width: '18px', height: '185px', backgroundColor: 'gray', opacity: 0 }}
          onMouseEnter={() => handleMouseEnter('/M2018.png')}
          onMouseLeave={handleMouseLeave}
        />
        <div
          className="absolute"
          style={{ top: '450px', left: '413px', width: '18px', height: '280px', backgroundColor: 'gray', opacity: 0 }}
          onMouseEnter={() => handleMouseEnter('/M2019.png')}
          onMouseLeave={handleMouseLeave}
        />
        <div
          className="absolute"
          style={{ top: '690px', left: '438px', width: '18px', height: '40px', backgroundColor: 'gray', opacity: 0}}
          onMouseEnter={() => handleMouseEnter('/M2020.png')}
          onMouseLeave={handleMouseLeave}
        />
        <div
          className="absolute"
          style={{ top: '620px', left: '463px', width: '18px', height: '110px', backgroundColor: 'gray', opacity: 0 }}
          onMouseEnter={() => handleMouseEnter('/M2021.png')}
          onMouseLeave={handleMouseLeave}
        />
        <div
          className="absolute"
          style={{ top: '525px', left: '486px', width: '18px', height: '200px', backgroundColor: 'gray', opacity: 0 }}
          onMouseEnter={() => handleMouseEnter('/M2022.png')}
          onMouseLeave={handleMouseLeave}
        />
        <div
          className="absolute"
          style={{ top: '480px', left: '513px', width: '18px', height: '250px', backgroundColor: 'gray', opacity: 0 }}
          onMouseEnter={() => handleMouseEnter('/M2023.png')}
          onMouseLeave={handleMouseLeave}
        />

        {/* Script de Flourish */}
        <Script src="https://public.flourish.studio/resources/embed.js" strategy="lazyOnload" />

        {/* Botón de continuar */}
        <Link href="/academia" className="block mt-8">
          <button className="w-full h-16 bg-[#E2F2D4] hover:bg-[#BCDAA2] transition-colors duration-300 text-[#82AC5C] font-bold text-3xl rounded-lg">
            Continuar.
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MovieQuestionComponent;