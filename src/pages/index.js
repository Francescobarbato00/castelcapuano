import TopHeader from './components/TopHeader';
import Header from './components/Header';
import Hero from './components/Hero';
import NotizieSection from './components/NotizieSection';
import Footer from './components/Footer';
import ComunicatiAgenda from './components/ComunicatiAgenda';
import StrutturaSection from './components/StrutturaSection';

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
      <NotizieSection />
      <StrutturaSection />
      <Footer />
    </div>
  );
}
