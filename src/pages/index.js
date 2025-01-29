import { useEffect, useState } from "react";
import TopHeader from './components/TopHeader';
import Header from './components/Header';
import MobileHeader from './components/MobileHeader';
import Hero from './components/Hero';
import HeroMobile from './components/HeroMobile';
import NotizieSection from './components/NotizieSection';
import Footer from './components/Footer';
import ComunicatiAgenda from './components/ComunicatiAgenda';
import StrutturaSection from './components/StrutturaSection';
import ChatBot from './components/ChatBot';
import DownFooter from "./components/DownFooter";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Imposta lo stato iniziale
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <TopHeader />
      
      {/* Header Desktop */}
      <div className="hidden md:block">
        <Header />
      </div>
      
      {/* Header Mobile */}
      <div className="block md:hidden">
        <MobileHeader />
      </div>
      
      {/* Hero Section (Hero o HeroMobile) */}
      {isMobile ? <HeroMobile /> : <Hero />}

      <hr className="border-t border-gray-300 my-0 w-full" />

      <ComunicatiAgenda />
      <hr className="border-t border-gray-300 my-0 w-full" />
      
      <NotizieSection />
      <hr className="border-t border-gray-300 my-0 w-full" />
      
      <StrutturaSection />

      <Footer />

      <DownFooter />
    
      <ChatBot />
    </div>
  );
}
