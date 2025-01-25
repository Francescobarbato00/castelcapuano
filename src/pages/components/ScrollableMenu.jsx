import React, { useState } from 'react';
import { Search, Menu } from 'lucide-react';

const ScrollableMenu = ({ toggleSearch }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

  return (
    <>
      <div className="fixed top-[36px] left-0 w-full bg-white text-blue-900 shadow-md py-3 z-[50] transition-all duration-500 ease-out transform translate-y-0 opacity-100 animate-slide-down">
        <div className="container mx-auto flex items-center justify-between px-8">
          {/* Logo piccolo per il menu scorrevole */}
          <div className="text-lg font-semibold">
            Fondazione Castel Capuano
          </div>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex space-x-8 text-[16px] font-medium">
            <a href="/" className="hover:underline">Home</a>
            <a href="/notizie" className="hover:underline">Notizie</a>
            <a href="/eventi" className="hover:underline">Eventi</a>
            <a href="/documenti" className="hover:underline">Documenti</a>
            <a href="/organi" className="hover:underline">Organi</a>
            <a href="/struttura" className="hover:underline">Struttura</a>
          </nav>

          {/* Pulsante Ricerca e Menu Mobile */}
          <div className="flex items-center gap-4">
            <button onClick={toggleSearch} className="text-blue-900">
              <Search size={20} strokeWidth={2} />
            </button>

            {/* Pulsante Menu per Mobile */}
            <button 
              onClick={toggleMobileMenu} 
              className="md:hidden text-blue-900"
            >
              <Menu size={24} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      {/* MENU MOBILE A TENDINA */}
      {showMobileMenu && (
        <div className="fixed top-[76px] left-0 w-full bg-white text-blue-900 shadow-md py-4 z-[49] transition-all duration-500 ease-out transform translate-y-0 opacity-100">
          <div className="container mx-auto flex flex-col items-center space-y-4 text-[18px] font-medium">
            <a href="/" className="hover:underline" onClick={toggleMobileMenu}>Home</a>
            <a href="/notizie" className="hover:underline" onClick={toggleMobileMenu}>Notizie</a>
            <a href="/eventi" className="hover:underline" onClick={toggleMobileMenu}>Eventi</a>
            <a href="/documenti" className="hover:underline" onClick={toggleMobileMenu}>Documenti</a>
            <a href="/organi" className="hover:underline" onClick={toggleMobileMenu}>Organi</a>
            <a href="/struttura" className="hover:underline" onClick={toggleMobileMenu}>Struttura</a>
          </div>
        </div>
      )}

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
    </>
  );
};

export default ScrollableMenu;
