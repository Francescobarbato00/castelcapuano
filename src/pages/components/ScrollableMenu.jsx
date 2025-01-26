import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import SearchComponent from './SearchComponent';

const ScrollableMenu = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);
  const toggleSearch = () => setShowSearch(!showSearch);

  return (
    <>
      {/* HEADER MOBILE FISSO */}
      <div className="fixed top-[36px] left-0 w-full bg-white text-blue-900 shadow-md py-3 z-[50] transition-all duration-500 ease-out transform translate-y-0 opacity-100 animate-slide-down">
        <div className="container mx-auto flex items-center justify-between px-6">
          {/* Logo piccolo per il menu scorrevole */}
          <div className="text-lg font-semibold">
            Fondazione Castel Capuano
          </div>

          {/* Pulsanti per Desktop allineati a sinistra */}
          <div className="hidden md:flex items-center gap-6 ml-0">
            <a href="/" className="text-blue-900 font-semibold hover:underline">Home</a>
            <a href="/notizie" className="text-blue-900 font-semibold hover:underline">Notizie</a>
            <a href="/eventi" className="text-blue-900 font-semibold hover:underline">Eventi</a>
            <a href="/documenti" className="text-blue-900 font-semibold hover:underline">Documenti</a>
            <a href="/organi" className="text-blue-900 font-semibold hover:underline">Organi</a>
            <a href="/struttura" className="text-blue-900 font-semibold hover:underline">Struttura</a>
          </div>

          {/* Pulsante Ricerca e Menu Mobile */}
          <div className="flex items-center gap-3">
            {/* Bottone Ricerca per Mobile */}
            <button onClick={toggleSearch} className="text-blue-900">
              <Search size={22} strokeWidth={2} />
            </button>

            {/* Pulsante Menu per Mobile */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-blue-900"
            >
              {showMobileMenu ? <X size={26} strokeWidth={2} /> : <Menu size={26} strokeWidth={2} />}
            </button>
          </div>
        </div>
      </div>

      {/* MENU MOBILE A TUTTO SCHERMO CON ANIMAZIONE DA SINISTRA */}
      <div
        className={`fixed inset-0 bg-white text-blue-900 z-[100] flex flex-col justify-start items-start pl-8 transition-transform duration-300 ${
          showMobileMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Pulsante Chiudi in alto a destra */}
        <button
          onClick={toggleMobileMenu}
          className="absolute top-6 right-6 text-blue-900 text-3xl focus:outline-none"
          aria-label="Chiudi menu"
        >
          <X size={30} />
        </button>

        {/* Titolo Allineato a Sinistra */}
        <h2 className="absolute top-16 left-8 text-2xl font-bold">
          Fondazione Castel Capuano
        </h2>

        {/* Link del menu con sottolineatura */}
        <nav className="w-full h-full flex flex-col justify-center space-y-6 mt-24 text-left">
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
              className="block w-full py-3 text-xl font-semibold text-blue-900 transition relative hover:underline hover:underline-offset-4 hover:decoration-blue-500 active:underline active:underline-offset-4 active:decoration-blue-500"
              onClick={toggleMobileMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* MODALE DI RICERCA */}
      {showSearch && <SearchComponent onClose={toggleSearch} />}

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

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default ScrollableMenu;
