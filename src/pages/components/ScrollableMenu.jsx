import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';

const ScrollableMenu = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);
  const toggleSearch = () => setShowSearch(!showSearch);

  return (
    <>
      {/* HEADER MOBILE FISSO */}
      <div className="fixed top-[36px] left-0 w-full bg-white text-blue-900 shadow-md py-3 z-[50] transition-all duration-500 ease-out transform translate-y-0 opacity-100 animate-slide-down">
        <div className="container mx-auto flex items-center justify-between px-8">
          {/* Logo piccolo per il menu scorrevole */}
          <div className="text-lg font-semibold">
            Fondazione Castel Capuano
          </div>

          {/* MENU DESKTOP (NON MODIFICATO) */}
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
            {/* Bottone Ricerca per Mobile */}
            <button onClick={toggleSearch} className="text-blue-900">
              <Search size={20} strokeWidth={2} />
            </button>

            {/* Pulsante Menu per Mobile */}
            <button 
              onClick={toggleMobileMenu} 
              className="md:hidden text-blue-900"
            >
              {showMobileMenu ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
            </button>
          </div>
        </div>
      </div>

      {/* MENU MOBILE A TUTTO SCHERMO CON ANIMAZIONE DA SINISTRA */}
      <div
        className={`fixed inset-0 bg-blue-900 text-white z-[100] flex flex-col justify-center items-center transition-transform duration-300 ${
          showMobileMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Pulsante Chiudi in alto a destra */}
        <button
          onClick={toggleMobileMenu}
          className="absolute top-4 right-6 text-white text-3xl focus:outline-none"
          aria-label="Chiudi menu"
        >
          <X size={32} />
        </button>

        {/* Titolo Centrato */}
        <h2 className="absolute top-12 text-3xl font-bold text-center w-full">
          Fondazione Castel Capuano
        </h2>

        {/* Link del menu con sottolineatura */}
        <nav className="w-full h-full flex flex-col justify-center space-y-8 text-center">
          {[
            { href: "/", label: "Home" },
            { href: "/notizie", label: "Notizie" },
            { href: "/eventi", label: "Eventi" },
            { href: "/documenti", label: "Documenti" },
            { href: "/organi", label: "Organi" },
            { href: "/struttura", label: "Struttura" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block w-full py-4 text-2xl font-semibold transition relative hover:underline"
              onClick={toggleMobileMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* MODALE DI RICERCA */}
      {showSearch && (
        <div className="fixed inset-0 bg-white z-[150] flex flex-col items-center justify-center animate-fade-in">
          <button
            onClick={toggleSearch}
            className="absolute top-6 right-6 text-gray-700 text-3xl transition hover:text-gray-900"
          >
            &times;
          </button>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Cerca nel sito</h2>
          <input
            type="text"
            placeholder="Cerca..."
            className="w-3/4 md:w-1/2 px-6 py-3 border border-gray-300 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition">
            Cerca
          </button>
        </div>
      )}

      {/* Stili per animazione */}
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
