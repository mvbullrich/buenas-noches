import React from 'react';
import Link from 'next/link';
import Script from 'next/script';

const MovieQuestionComponent = () => {
  return (
    <div className="relative flex flex-col min-h-screen bg-[#FAF3E0] text-black p-10">
      <div className="w-full max-w-6xl mx-auto relative">
        {/* Contenedor principal de texto */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-6 relative">
          {/* Texto a la izquierda */}
          <div className="w-full md:w-3/5 pr-0 md:pr-6">
            <h1 className="text-5xl font-bold mb-4 text-[#1D40B0]">Conclusión.</h1>
            <p className="text-lg mb-4">
              Para la conclusión, los invitamos a ver los siguientes gráficos que contienen las puntuaciones de IMDB de las películas de cada una de las categorías.
              IMDB (Internet Movie Database o Base de Datos de películas en Internet), es la principal base de datos cinematográficos del mundo. Dentro de esta página, se pueden apreciar las puntuaciones sobre 10 que dieron diversos usuarios alrededor de todo el mundo a películas.
            </p>
          </div>
        </div>

        {/* Contenedor del tercer gráfico (arriba del primer gráfico) */}
        <div className="flex justify-center items-start">
          {/* Tercer gráfico embebido de Flourish */}
          <div className="w-full md:w-1/2 mb-8 mx-auto" style={{ mixBlendMode: 'multiply' }}>
            <div className="flourish-embed flourish-chart" data-src="visualisation/19449608">
              <noscript>
                <img
                  src="https://public.flourish.studio/visualisation/19449608/thumbnail"
                  width="100%"
                  alt="chart visualization"
                />
              </noscript>
            </div>
          </div>
        </div>

        {/* Contenedor del primer gráfico */}
        <div className="flex justify-center items-start">
          {/* Primer gráfico embebido de Flourish */}
          <div className="w-full md:w-1/2 mb-8 mx-auto" style={{ mixBlendMode: 'multiply' }}>
            <div className="flourish-embed flourish-chart" data-src="visualisation/19449443">
              <noscript>
                <img
                  src="https://public.flourish.studio/visualisation/19449443/thumbnail"
                  width="100%"
                  alt="chart visualization"
                />
              </noscript>
            </div>
          </div>
        </div>

        {/* Contenedor del segundo gráfico */}
        <div className="flex justify-center items-start">
          {/* Segundo gráfico embebido de Flourish */}
          <div className="w-full md:w-1/2 mb-8 mx-auto" style={{ mixBlendMode: 'multiply' }}>
            <div className="flourish-embed flourish-chart" data-src="visualisation/19449601">
              <noscript>
                <img
                  src="https://public.flourish.studio/visualisation/19449601/thumbnail"
                  width="100%"
                  alt="chart visualization"
                />
              </noscript>
            </div>
          </div>
        </div>

        {/* Bloque de texto debajo de los gráficos */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-6 relative">
          {/* Texto alineado a la izquierda */}
          <div className="w-full md:w-3/5 pr-0 md:pr-6">
            <p className="text-lg mb-4">Como verán, casi todas las películas en promedio tienen puntajes similares, independientemente del grupo de consumidores al que pertenezcan.</p>
            <p className="text-lg mb-4">En cuanto a los géneros que predominan en cada uno de los tipos de consumo sí podemos apreciar diferencias entre cada grupo más notorias.</p>
          </div>
        </div>

        {/* Nuevos gráficos uno al lado del otro con efecto multiply */}
        <div className="flex flex-row justify-between items-start w-full mb-16" style={{ mixBlendMode: 'multiply' }}>
          {/* Gráfico 1 */}
          <div className="w-1/3 p-4">
            <div className="flourish-embed flourish-chart" data-src="visualisation/19449736">
              <noscript>
                <img
                  src="https://public.flourish.studio/visualisation/19449736/thumbnail"
                  width="100%"
                  alt="chart visualization"
                />
              </noscript>
            </div>
          </div>
          {/* Gráfico 2 */}
          <div className="w-1/3 p-4">
            <div className="flourish-embed flourish-chart" data-src="visualisation/19449488">
              <noscript>
                <img
                  src="https://public.flourish.studio/visualisation/19449488/thumbnail"
                  width="100%"
                  alt="chart visualization"
                />
              </noscript>
            </div>
          </div>
          {/* Gráfico 3 */}
          <div className="w-1/3 p-4">
            <div className="flourish-embed flourish-chart" data-src="visualisation/19449753">
              <noscript>
                <img
                  src="https://public.flourish.studio/visualisation/19449753/thumbnail"
                  width="100%"
                  alt="chart visualization"
                />
              </noscript>
            </div>
          </div>
        </div>

        {/* Texto adicional debajo de todo con más separación */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 relative">
          {/* Texto alineado a la izquierda */}
          <div className="w-full md:w-3/5 pr-0 md:pr-6">
            <p className="text-lg mb-4">
              No se puede decir con certeza qué hace que una película sea mejor o peor que otra, ni mucho menos que un grupo tenga mejor o peor gusto que otro. Al final, todo se reduce a diferencias. Si miramos qué géneros prefiere cada grupo de personas, queda claro que las películas simplemente están hechas para públicos distintos. No se trata de lo que está bien o mal, sino de preferencias. Lo que a una persona le encanta, a otra tal vez no le atrae, y eso no significa que una película sea objetivamente mejor que otra. Todo es subjetivo.
            </p>
          </div>
        </div>

        {/* Script de Flourish */}
        <Script src="https://public.flourish.studio/resources/embed.js" strategy="lazyOnload" />

      </div>
    </div>
  );
};

export default MovieQuestionComponent;