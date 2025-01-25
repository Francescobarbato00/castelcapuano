// pages/index.js

import TopHeader from './components/TopHeader';
import Header from './components/Header';
import MobileHeader from './components/MobileHeader'; // Importa il MobileHeader
import Hero from './components/Hero';
import NotizieSection from './components/NotizieSection';
import Footer from './components/Footer';
import ComunicatiAgenda from './components/ComunicatiAgenda';
import StrutturaSection from './components/StrutturaSection';
import ChatBot from './components/ChatBot';

export default function Home() {
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
      
      {/* Altri contenuti della pagina */}
      <Hero />
      
      {/* Divisore sottile e grigio */}
      <hr className="border-t border-gray-300 my-0 w-full" />

      <ComunicatiAgenda />
      <hr className="border-t border-gray-300 my-0 w-full" />
      
      <NotizieSection />
      <hr className="border-t border-gray-300 my-0 w-full" />
      
      <StrutturaSection />

      {/* Footer */}
      <Footer />

      {/* ChatBot */}
      <ChatBot />
    </div>
  );
}
