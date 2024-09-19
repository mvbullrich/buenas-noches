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
            <h1 className="text-5xl font-bold mb-4 text-[#EBAE34]">La Academia.</h1>
            <p className="text-lg mb-4">
            La Academia de Artes y Ciencias Cinematográficas es un grupo de más de 10,000 personas que trabajan en el cine (actores, directores, técnicos, etc.). Ellos se encargan de organizar los Premios Oscars, entre otras cosas. Para ser miembro de la Academia, debes ser invitado por tus logros en el cine. Está conformada por las personas que "más saben de cine" o que tuvieron un impacto importante en la industria. Ellos son los que votan y deciden quienes ganan cada premio.

            </p>
            <p className="text-lg mb-4">
            El premio Óscar, es una distinción anual concedida por los participantes de La Academia en reconocimiento a la excelencia y activismo social de los profesionales de la industria cinematográfica que incluye actores, directores y escritores, ampliamente considerada el máximo honor en el cine. El siguiente gráfico representa cuánto recaudó cada película ganadora al Óscar "Película del año" a partir del año 2004 hasta el 2023.
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
          <div className="flourish-embed flourish-chart" data-src="visualisation/19281600">
            <noscript>
            <img src="https://public.flourish.studio/visualisation/19281600/thumbnail" width="100%" alt="chart visualization" />
            </noscript></div></div>

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
        <Link href="/apasionados" className="block mt-8">
          <button className="w-full h-16 bg-[#ffd175] hover:bg-[#fcc451] transition-colors duration-300 text-[#EBAE34] font-bold text-3xl rounded-lg">
            Continuar.
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MovieQuestionComponent;