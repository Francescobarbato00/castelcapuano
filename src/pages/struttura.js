import TopHeader from './components/TopHeader';
import Header from './components/Header';
import Footer from './components/Footer';
import StrutturaContent from './components/StrutturaContent';


export default function Struttura() {
  return (
    <div>
      <TopHeader />
      <Header />
      {/* Altri contenuti della pagina */}
      < StrutturaContent />
      <Footer />
    </div>
  );
}
