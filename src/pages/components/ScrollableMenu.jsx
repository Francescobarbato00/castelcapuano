import React from 'react';
import { Search } from 'lucide-react';

const ScrollableMenu = ({ toggleSearch }) => {
  return (
    <div className="fixed top-[36px] left-0 w-full bg-white text-blue-900 shadow-md py-3 z-[50] transition-all duration-500 ease-out transform translate-y-0 opacity-100 animate-slide-down">
      <div className="container mx-auto flex items-center justify-between px-8">
        {/* Logo piccolo per il menu scorrevole */}
        <div className="text-lg font-semibold">
          Fondazione Castel Capuano
        </div>

        {/* Menu orizzontale quando si scorre */}
        <nav className="flex space-x-8 text-[16px] font-medium">
          <a href="/" className="hover:underline">Home</a>
          <a href="/notizie" className="hover:underline">Notizie</a>
          <a href="/eventi" className="hover:underline">Eventi</a>
          <a href="/documenti" className="hover:underline">Documenti</a>
          <a href="/organi" className="hover:underline">Organi</a>
          <a href="/struttura" className="hover:underline">Struttura</a>
        </nav>

        {/* Pulsante Ricerca */}
        <button onClick={toggleSearch} className="text-blue-900">
          <Search size={20} strokeWidth={2} />
        </button>
      </div>

      {/* Stile per animazione */}
      <style jsx>{`
        @keyframes slide-down {
          from {
            transform: translateY(-50%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-down {
          animation: slide-down 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ScrollableMenu;
