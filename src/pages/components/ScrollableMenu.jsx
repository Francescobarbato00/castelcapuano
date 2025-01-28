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
      <div className="fixed top-[36px] left-0 w-full bg-white text-blue-900 shadow-lg py-4 z-[50] transition-all duration-500 ease-out transform translate-y-0 opacity-100 animate-slide-down">
        <div className="container mx-auto flex items-center justify-between px-8">
          {/* Logo */}
          <div className="text-xl font-bold tracking-wide">
            Fondazione Castel Capuano
          </div>

          {/* Pulsanti per Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {["Home", "Notizie", "Eventi", "Documenti", "Organi", "Struttura"].map((item, index) => (
              <a
                key={index}
                href={`/${item.toLowerCase()}`}
                className="text-blue-900 font-medium transition hover:text-blue-700"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Pulsanti Mobile */}
          <div className="flex items-center gap-4">
            <button onClick={toggleSearch} className="text-blue-900 hover:text-blue-700">
              <Search size={24} strokeWidth={2} />
            </button>
            <button onClick={toggleMobileMenu} className="md:hidden text-blue-900 hover:text-blue-700">
              {showMobileMenu ? <X size={28} strokeWidth={2} /> : <Menu size={28} strokeWidth={2} />}
            </button>
          </div>
        </div>
      </div>

      {/* MENU MOBILE */}
      <div
        className={`fixed inset-0 bg-white text-blue-900 z-[100] flex flex-col items-start pl-10 pt-16 transition-transform duration-300 shadow-lg ${
          showMobileMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={toggleMobileMenu}
          className="absolute top-6 right-6 text-blue-900 hover:text-blue-700"
          aria-label="Chiudi menu"
        >
          <X size={32} />
        </button>

        <h2 className="text-3xl font-semibold mt-8">Fondazione Castel Capuano</h2>

        <nav className="w-full flex flex-col space-y-6 mt-12">
          {["Home", "Notizie", "Eventi", "Documenti", "Organi", "Struttura"].map((item, index) => (
            <a
              key={index}
              href={`/${item.toLowerCase()}`}
              className="block text-xl font-medium transition hover:text-blue-700"
              onClick={toggleMobileMenu}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* MODALE DI RICERCA */}
      {showSearch && <SearchComponent onClose={toggleSearch} />}

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
