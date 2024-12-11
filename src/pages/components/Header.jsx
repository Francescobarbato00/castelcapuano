import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Logo a sinistra */}
          <div className="flex-shrink-0">
            <Link href="/" passHref>
              <div className="cursor-pointer hover:scale-110 transition-transform duration-300">
                <Image src="/header.png" alt="Logo" width={250} height={80} />
              </div>
            </Link>
          </div>

          {/* Menu Hamburger per Mobile */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-900 transition duration-300"
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Menu Desktop */}
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

          {/* Icona Ricerca */}
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

      {/* Menu Mobile a Schermo Intero */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-50 flex flex-col items-center justify-center animate-slide-down">
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 text-gray-700 text-3xl hover:text-blue-900"
          >
            &times;
          </button>
          <nav className="flex flex-col space-y-6 text-2xl text-center">
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
        </div>
      )}

      {/* Barra di Ricerca Fullscreen */}
      {showSearch && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center animate-fade-in">
          {/* Pulsante Chiudi */}
          <button
            onClick={toggleSearch}
            className="absolute top-6 right-6 text-gray-700 text-3xl hover:text-gray-900"
          >
            &times;
          </button>
          {/* Titolo */}
          <h2 className="text-5xl font-bold text-gray-800 mb-8">Cerca nel sito</h2>
          {/* Barra di Ricerca */}
          <input
            type="text"
            placeholder="Cerca..."
            className="w-3/4 md:w-1/2 px-6 py-3 border border-gray-300 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Cerca
          </button>
        </div>
      )}

      {/* Aggiunta Animazioni */}
      <style jsx>{`
        @keyframes slide-down {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-slide-down {
          animation: slide-down 0.5s ease-out;
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </>
  );
};

export default Header;
