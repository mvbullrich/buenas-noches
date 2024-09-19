import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';

const MovieQuestionComponent = () => {
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
            <Image
              src="/oscars.jpg"
              width={500}
              height={500}
              alt="Audiencia con gafas 3D"
              className="objetct-cover rounded-none"
            />

          </div>
        </div>

        {/* Contenedor del gráfico y la imagen de Shrek */}
        <div className="flex justify-between items-start">
          {/* Gráfico embebido de Flourish con efecto multiply */}
          <div className="w-full md:w-1/2 mb-8" style={{ mixBlendMode: 'multiply' }}>
          <div className="flourish-embed flourish-chart" data-src="visualisation/19444595">
          <noscript>
            <img src="https://public.flourish.studio/visualisation/19444595/thumbnail" width="100%" alt="chart visualization" />
            </noscript>
            </div>
            </div>

           {/* Imagen de Shrek, en paralelo al gráfico */}
           <div className="relative w-1/3">
            <Image
              src="/shrek2.png"
              width={9000}
              height={9000}
              alt="Shrek 2"
              className="objetct-cover rounded-none"
            />

          </div>
        </div>

        {/* Script de Flourish */}
        <Script src="https://public.flourish.studio/resources/embed.js" strategy="lazyOnload" />

        {/* Botón de continuar */}
        <Link href="/intermedio" className="block mt-8">
          <button className="w-full h-16 bg-[#ffd175] hover:bg-[#fcc451] transition-colors duration-300 text-[#EBAE34] font-bold text-3xl rounded-lg">
            Continuar.
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MovieQuestionComponent;