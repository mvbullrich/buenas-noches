import Link from 'next/link';

export default function CinemaConsumptionPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black p-8">
      <div className="w-full max-w-2xl space-y-8">
        <h1 className="text-3xl font-normal text-left">
          La realidad es que <span className="font-bold">no hay una respuesta clara.</span>
        </h1>
        
        <h2 className="text-2xl font-bold text-center">
          Ni objetiva.
        </h2>
        
        <h2 className="text-2xl font-bold text-center">
          Ni siquiera hay una sola<br />respuesta.
        </h2>
        
        <p className="text-xl text-left mt-16">
          Pero lo que sí podemos hacer es <span className="font-bold">observar de qué distintas formas se consume el cine.</span>
        </p>
        
        <div className="flex justify-center mt-8">
          <Link href="/masas" className="bg-gray-200 hover:bg-gray-300 transition-colors duration-300 py-4 px-8 text-black text-xl font-semibold">
            ver los tipos de consumo
          </Link>
        </div>
      </div>
    </div>
  );
}