import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Facebook, Linkedin, Instagram, Youtube, Mail, Rss, Twitter } from 'lucide-react';
import ScrollableMenu from './ScrollableMenu'; // Importa il menu scorrevole
import TopHeader from './TopHeader'; // Importa il TopHeader

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(110);
  const [fadeIn, setFadeIn] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false); // Nuovo stato per evitare il bug

  const toggleSearch = () => setShowSearch(!showSearch);

  useEffect(() => {
    const header = document.getElementById("main-header");
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }

    const handleScroll = () => {
      if (window.scrollY > 50 && !isScrolled) {
        setIsTransitioning(true); // Attiva la transizione
        setTimeout(() => {
          setIsScrolled(true);
          setIsTransitioning(false);
        }, 100); // Piccolo delay per evitare il flickering
      } else if (window.scrollY <= 50 && isScrolled) {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  return (
    <>
      {/* Mostra il TopHeader sopra il menu */}
      <TopHeader />

      {/* Barra di Ricerca Fullscreen che copre tutto */}
      {showSearch && (
        <div className="fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center animate-fade-in">
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

      {/* Spazio placeholder per evitare il salto del contenuto */}
      <div style={{ height: `${headerHeight}px` }} className={`${showSearch ? "hidden" : ""}`}></div>

      {/* Mostra SOLO il menu scorrevole quando si scorre */}
      {!showSearch && (isScrolled ? <ScrollableMenu toggleSearch={toggleSearch} /> : (
        <>
          {/* Menu originale con animazione fluida */}
          <header 
            id="main-header" 
            className={`fixed top-[36px] w-full z-50 transition-all duration-500 shadow-md bg-blue-900 text-white py-5 transform ${
              isTransitioning ? 'opacity-0 -translate-y-10 pointer-events-none' : 'animate-fade-in-down'
            }`}
          >
            <div className="container mx-auto flex items-center justify-between px-8">
              {/* Titolo della Fondazione con più spazio sotto */}
              <div className="flex flex-col">
                <h1 className="font-semibold text-2xl leading-tight">
                  Fondazione <br /> Castel Capuano
                </h1>
                <div className="mt-6"></div> {/* Aggiunto spazio tra il titolo e il menu */}
              </div>

              {/* Icone Social e Ricerca */}
              <div className="flex items-center gap-2">
                <span className="text-lg">Seguici su:</span>
                <div className="flex gap-2">
                  <a href="#" className="hover:opacity-80 transition"><Facebook size={22} /></a>
                  <a href="#" className="hover:opacity-80 transition"><Linkedin size={22} /></a>
                  <a href="#" className="hover:opacity-80 transition"><Twitter size={22} /></a>
                  <a href="#" className="hover:opacity-80 transition"><Youtube size={22} /></a>
                  <a href="#" className="hover:opacity-80 transition"><Instagram size={22} /></a>
                  <a href="#" className="hover:opacity-80 transition"><Mail size={22} /></a>
                  <a href="#" className="hover:opacity-80 transition"><Rss size={22} /></a>
                </div>
                {/* Lente di ingrandimento */}
                <button 
                  onClick={toggleSearch} 
                  className="w-10 h-10 flex items-center justify-center bg-white rounded-full border-2 border-blue-900 transition hover:bg-gray-200"
                >
                  <Search size={20} strokeWidth={2} className="text-blue-900" />
                </button>
              </div>
            </div>

            {/* Seconda riga: Menu principale */}
            <div className="container mx-auto px-8 pb-6">
              <nav className="flex space-x-10 text-[18px] font-normal leading-[28px] text-white">
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
                    className="relative pb-2 transition duration-300 hover:text-gray-300 after:block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </header>
        </>
      ))}

      {/* Stili di transizione */}
      <style jsx>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.4s ease-out;
        }
      `}</style>
    </>
  );
};

export default Header;
