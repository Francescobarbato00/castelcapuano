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

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
    if (!showMobileMenu) {
      document.body.style.overflow = "hidden"; // Blocca lo scrolling
    } else {
      document.body.style.overflow = "auto"; // Ripristina lo scrolling
    }
  };

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
      {/* Sfondo oscurato quando il menu è aperto */}
      {showMobileMenu && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[90]" onClick={toggleMobileMenu}></div>
      )}

      {/* Spazio per evitare sovrapposizioni */}
      <div className="h-[60px] md:hidden"></div>

      {/* Header Mobile (Visibile solo quando si è in cima) */}
      {isAtTop && (
        <header className="fixed top-[36px] left-0 w-full bg-blue-900 text-white z-[90] md:hidden shadow-lg transition-transform duration-200">
          <div className="flex items-center justify-between px-6 py-3">
            {/* Logo o Titolo */}
            <h1 className="text-lg font-semibold">Fondazione Castel Capuano</h1>

            {/* Icone di Azione (ora allineate perfettamente) */}
            <div className="flex items-center gap-4">
              <button onClick={toggleSearch} className="focus:outline-none flex items-center justify-center">
                <Search size={22} />
              </button>
              <button onClick={toggleMobileMenu} className="focus:outline-none flex items-center justify-center">
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
        className={`fixed top-0 left-0 h-full bg-white text-blue-900 z-[100] flex flex-col transition-transform duration-300 w-[75%] sm:w-[60%] md:hidden shadow-lg ${
          showMobileMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header del menu con titolo e X allineati */}
        <div className="flex items-center justify-between px-6 py-4 border-b w-full">
          <h2 className="text-lg font-bold">Fondazione Castel Capuano</h2>
          <button onClick={toggleMobileMenu} className="text-blue-900">
            <X size={24} />
          </button>
        </div>

        {/* Link del menu */}
        <nav className="flex flex-col space-y-4 mt-6 pl-6">
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
              className="block text-[18px] text-blue-900 py-3 px-4 hover:underline"
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
