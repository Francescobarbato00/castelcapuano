import TopHeader from './components/TopHeader';
import Header from './components/Header';
import Hero from './components/Hero';
import NotizieSection from './components/NotizieSection';
import Footer from './components/Footer';
import ComunicatiAgenda from './components/ComunicatiAgenda';
import StrutturaSection from './components/StrutturaSection';
import ChatBot from './components/ChatBot'; // Importa il componente ChatBot

export default function Home() {
  return (
    <div>
      <TopHeader />
      <Header />
      
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
