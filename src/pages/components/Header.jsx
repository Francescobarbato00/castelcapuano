import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Logo a sinistra con effetto hover e click */}
          <div className="flex-shrink-0">
            <Link href="/" passHref>
              <div className="cursor-pointer hover:scale-110 transition-transform duration-300">
                <Image src="/header.png" alt="Logo" width={250} height={80} />
              </div>
            </Link>
          </div>

          {/* Contenitore dei pulsanti centrato */}
          <nav className="hidden lg:flex space-x-6">
            <a href="/" className="text-gray-700 hover:text-blue-900 transition duration-300">
              Home
            </a>
            <a href="/notizie" className="text-gray-700 hover:text-blue-900 transition duration-300">
              Notizie
            </a>
            <a href="/eventi" className="text-gray-700 hover:text-blue-900 transition duration-300">
              Eventi
            </a>
            <a href="/documenti" className="text-gray-700 hover:text-blue-900 transition duration-300">
              Documenti
            </a>
            <a href="/organi" className="text-gray-700 hover:text-blue-900 transition duration-300">
              Organi
            </a>
            <a href="/struttura" className="text-gray-700 hover:text-blue-900 transition duration-300">
              Struttura
            </a>
          </nav>

          {/* Icona lente d'ingrandimento a destra */}
          <div>
            <button
              onClick={toggleSearch}
              className="text-gray-600 hover:text-blue-900 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m1.8-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Finestra di Ricerca a Schermo Intero */}
      {showSearch && (
        <div
          className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center animate-fade-in"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
        >
          {/* Chiudi X */}
          <button
            onClick={toggleSearch}
            className="absolute top-6 right-6 text-gray-700 hover:text-gray-900 text-2xl"
          >
            Chiudi X
          </button>

          {/* Titolo */}
          <h2 className="text-5xl font-bold text-gray-800 mb-8">Cerca nel sito</h2>

          {/* Barra di Ricerca */}
          <input
            type="text"
            placeholder="Cerca..."
            className="w-3/4 md:w-1/2 px-6 py-3 border border-gray-300 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Pulsante di Ricerca */}
          <button
            className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Cerca
          </button>

          {/* Nessun Risultato Fittizio */}
          <p className="mt-4 text-sm text-gray-500 italic">Nessun risultato trovato.</p>
        </div>
      )}

      {/* Aggiungi animazione CSS */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </>
  );
};

export default Header;
