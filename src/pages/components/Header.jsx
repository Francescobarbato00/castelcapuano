// components/Header.jsx

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Search, Facebook, Linkedin, Instagram, Youtube, Mail, Rss, Twitter, Menu, X
} from 'lucide-react';
import ScrollableMenu from './ScrollableMenu';
import TopHeader from './TopHeader';
import SearchComponent from './SearchComponent';

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(110);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleSearch = () => setShowSearch(!showSearch);
  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

  useEffect(() => {
    const header = document.getElementById('main-header');
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }

    const handleScroll = () => {
      if (window.scrollY > 50 && !isScrolled) {
        setIsTransitioning(true);
        setTimeout(() => {
          setIsScrolled(true);
          setIsTransitioning(false);
        }, 100);
      } else if (window.scrollY <= 50 && isScrolled) {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  return (
    <>
      <TopHeader />

      {showSearch && <SearchComponent onClose={toggleSearch} />}

      <div style={{ height: `${headerHeight}px` }} className={`${showSearch ? 'hidden' : ''}`}></div>

      {!showSearch &&
        (isScrolled ? (
          <ScrollableMenu toggleSearch={toggleSearch} />
        ) : (
          <>
            <header
              id="main-header"
              className={`fixed top-[36px] w-full z-50 transition-all duration-500 shadow-lg bg-gradient-to-r from-blue-800 via-blue-900 to-blue-950 text-white py-4 transform ${
                isTransitioning ? 'opacity-80 scale-95 pointer-events-none' : 'animate-fade-in-down'
              } hidden md:block`}
            >
              <div className="container mx-auto flex items-center justify-between px-8">
                <div className="flex flex-col">
                  <h1 className="font-semibold text-3xl leading-tight tracking-wide">
                    Fondazione <br /> Castel Capuano
                  </h1>
                  <div className="mt-4"></div>
                </div>

                <div className="hidden md:flex items-center gap-3">
                  <span className="text-lg tracking-wide font-medium">Seguici su:</span>
                  <div className="flex gap-3">
                    {[Facebook, Linkedin, Twitter, Youtube, Instagram, Mail, Rss].map((Icon, index) => (
                      <a key={index} href="#" className="hover:opacity-80 transition transform hover:scale-110">
                        <Icon size={22} />
                      </a>
                    ))}
                  </div>
                  <button
                    onClick={toggleSearch}
                    className="w-10 h-10 flex items-center justify-center bg-white rounded-full border-2 border-blue-900 transition transform hover:scale-105 hover:bg-gray-200"
                  >
                    <Search size={20} strokeWidth={2} className="text-blue-900" />
                  </button>
                </div>

                <button onClick={toggleMobileMenu} className="md:hidden text-white">
                  {showMobileMenu ? <X size={28} /> : <Menu size={28} />}
                </button>
              </div>

              <div className="container mx-auto px-8 pb-4 hidden md:flex">
                <nav className="flex space-x-10 text-lg font-medium leading-[28px] text-white">
                  {[
                    { href: '/', label: 'Home' },
                    { href: '/notizie', label: 'Notizie' },
                    { href: '/eventi', label: 'Eventi' },
                    { href: '/documenti', label: 'Documenti' },
                    { href: '/organi', label: 'Organi' },
                    { href: '/struttura', label: 'Struttura' },
                  ].map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="relative pb-2 transition duration-300 hover:text-gray-300 after:block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-500 hover:after:w-full"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </header>

            {showMobileMenu && (
              <div className="fixed top-[76px] left-0 w-full bg-gradient-to-r from-blue-800 via-blue-900 to-blue-950 text-white z-50 flex flex-col items-center space-y-4 py-6 md:hidden">
                {[
                  { href: '/', label: 'Home' },
                  { href: '/notizie', label: 'Notizie' },
                  { href: '/eventi', label: 'Eventi' },
                  { href: '/documenti', label: 'Documenti' },
                  { href: '/organi', label: 'Organi' },
                  { href: '/struttura', label: 'Struttura' },
                ].map((item, index) => (
                  <a key={index} href={item.href} className="text-lg tracking-wide font-medium" onClick={toggleMobileMenu}>
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </>
        ))}

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
