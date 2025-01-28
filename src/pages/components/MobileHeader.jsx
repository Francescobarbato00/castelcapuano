import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import ScrollableMenu from "./ScrollableMenu";
import SearchComponent from "./SearchComponent"; // Importazione del componente di ricerca

const MobileHeader = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleSearch = () => setShowSearch(!showSearch);
  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

  // Blocca lo scrolling quando il menu è aperto
  useEffect(() => {
    if (showMobileMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showMobileMenu]);

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
        <header className="fixed top-[36px] left-0 w-full bg-blue-900 text-white z-[90] md:hidden shadow-lg transition-transform duration-200">
          <div className="flex items-center justify-between px-6 py-3">
            {/* Logo o Titolo */}
            <h1 className="text-lg font-semibold">Fondazione Castel Capuano</h1>

            {/* Icone di Azione con Spaziatura Sistemata */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleSearch}
                className="focus:outline-none"
                aria-label="Cerca"
              >
                <Search size={22} />
              </button>
              <button
                onClick={toggleMobileMenu}
                className="focus:outline-none"
                aria-label="Menu"
              >
                {showMobileMenu ? <X size={26} /> : <Menu size={26} />}
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
          className="absolute top-6 right-6 text-white text-3xl focus:outline-none"
          aria-label="Chiudi menu"
        >
          <X size={30} />
        </button>

        {/* Titolo con Spaziatura Migliorata */}
        <h2 className="absolute top-16 text-2xl font-bold text-center w-full">
          Fondazione Castel Capuano
        </h2>

        {/* Link del menu con sottolineatura al passaggio */}
        <nav className="w-full h-full flex flex-col justify-center space-y-6 text-center">
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
              className="block w-full py-3 text-xl font-semibold transition relative hover:underline"
              onClick={toggleMobileMenu}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Schermata di Ricerca */}
      {showSearch && <SearchComponent onClose={toggleSearch} />}

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
      `}</style>
    </>
  );
};

export default MobileHeader;
