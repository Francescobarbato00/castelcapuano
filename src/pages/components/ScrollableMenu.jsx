import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import SearchComponent from './SearchComponent';

const ScrollableMenu = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);
  const toggleSearch = () => setShowSearch(!showSearch);

  // Blocca lo scrolling quando il menu è aperto
  useEffect(() => {
    if (showMobileMenu) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [showMobileMenu]);

  return (
    <>
      {/* HEADER MOBILE */}
      <div className="fixed top-[36px] left-0 w-full bg-white text-blue-900 shadow-md py-3 z-[50] transition-all duration-500 ease-out transform translate-y-0 opacity-100 animate-slide-down">
        <div className="container mx-auto flex items-center justify-between px-6">
          {/* Logo piccolo per il menu scorrevole */}
          <div className="text-lg font-semibold">
            Fondazione Castel Capuano
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <a href="/" className="text-blue-900 font-semibold hover:underline">Home</a>
            <a href="/notizie" className="text-blue-900 font-semibold hover:underline">Notizie</a>
            <a href="/eventi" className="text-blue-900 font-semibold hover:underline">Eventi</a>
            <a href="/documenti" className="text-blue-900 font-semibold hover:underline">Documenti</a>
            <a href="/organi" className="text-blue-900 font-semibold hover:underline">Organi</a>
            <a href="/struttura" className="text-blue-900 font-semibold hover:underline">Struttura</a>
          </div>

          {/* Pulsanti Mobile */}
          <div className="flex items-center gap-3">
            {/* Bottone Ricerca */}
            <button onClick={toggleSearch} className="text-blue-900">
              <Search size={22} strokeWidth={2} />
            </button>

            {/* Bottone Menu Mobile */}
            <button onClick={toggleMobileMenu} className="md:hidden text-blue-900">
              {showMobileMenu ? <X size={26} strokeWidth={2} /> : <Menu size={26} strokeWidth={2} />}
            </button>
          </div>
        </div>
      </div>

      {/* MENU MOBILE SCORREVOLE DA SINISTRA */}
      <div
        className={`fixed inset-0 bg-white text-blue-900 z-[100] flex flex-col transition-transform duration-300 w-[80%] sm:w-[60%] md:hidden shadow-lg ${
          showMobileMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header del menu */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <img src="/logo.png" alt="Logo" className="h-10" />
          <button onClick={toggleMobileMenu} className="text-blue-900">
            <X size={30} />
          </button>
        </div>

        {/* Link del menu */}
        <nav className="flex flex-col space-y-4 mt-6 pl-6">
          {[
            { href: "/", label: "Ministero" },
            { href: "/staff", label: "Ministro e Staff" },
            { href: "/documenti", label: "Documenti e Pubblicazioni" },
            { href: "/servizi", label: "Servizi" },
            { href: "/contatti", label: "Comunica con noi" },
            { href: "/trasparenza", label: "Trasparenza" },
            { href: "/pnrr", label: "PNRR" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-lg font-semibold text-blue-900 hover:underline"
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
      `}</style>
    </>
  );
};

export default ScrollableMenu;
