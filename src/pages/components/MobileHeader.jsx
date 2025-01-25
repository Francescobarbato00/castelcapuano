import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import ScrollableMenu from "./ScrollableMenu"; // Assicurati che questo componente esista

const MobileHeader = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleSearch = () => setShowSearch(!showSearch);
  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsAtTop(true);
        setIsScrolled(false);
      } else {
        setIsAtTop(false);
        setIsScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Spazio per evitare sovrapposizioni */}
      <div className="h-[60px] md:hidden"></div>

      {/* Header Mobile (Visibile solo quando si è in cima) */}
      {isAtTop && (
        <header
          className="fixed top-[36px] left-0 w-full bg-blue-900 text-white z-[90] md:hidden shadow-lg transition-transform duration-200"
        >
          <div className="flex items-center justify-between p-4">
            {/* Logo o Titolo */}
            <h1 className="text-xl font-semibold">Fondazione Castel Capuano</h1>

            {/* Icone di Azione */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleSearch}
                className="focus:outline-none"
                aria-label="Cerca"
              >
                <Search size={24} />
              </button>
              <button
                onClick={toggleMobileMenu}
                className="focus:outline-none"
                aria-label="Menu"
              >
                {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </header>
      )}

      {/* ScrollableMenu (Visibile solo quando si scorre) */}
      {isScrolled && !isAtTop && <ScrollableMenu />}

      {/* Menu Mobile con Animazione da Sinistra a Destra */}
      <div
        className={`fixed inset-0 bg-blue-900 text-white z-[100] flex flex-col justify-center items-center transform transition-transform duration-300 ${
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

        {/* Titolo centrato più in basso */}
        <h2 className="absolute top-12 text-3xl font-bold text-center w-full">
          Fondazione Castel Capuano
        </h2>

        {/* Link del menu con sottolineatura al passaggio */}
        <nav className="w-full h-full flex flex-col justify-center space-y-8 text-center">
          {[
            { href: "/", label: "Home" },
            { href: "/notizie", label: "Notizie" },
            { href: "/eventi", label: "Eventi" },
            { href: "/documenti", label: "Documenti" },
            { href: "/organi", label: "Organi" },
            { href: "/struttura", label: "Struttura" },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block w-full py-4 text-2xl font-semibold transition relative"
              onClick={toggleMobileMenu}
            >
              {item.label}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 hover:w-full"></span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Schermata di Ricerca */}
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

      {/* Stili per Animazioni */}
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
          animation: fade-in 0.2s ease-out;
        }
        nav a {
          position: relative;
          display: inline-block;
          text-decoration: none;
        }
        nav a::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: 0;
          width: 0;
          height: 2px;
          background-color: white;
          transition: all 0.3s ease-in-out;
        }
        nav a:hover::after,
        nav a:focus::after {
          width: 100%;
          left: 0;
        }
      `}</style>
    </>
  );
};

export default MobileHeader;
