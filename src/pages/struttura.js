import TopHeader from './components/TopHeader';
import Header from './components/Header';
import Footer from './components/Footer';
import StrutturaContent from './components/StrutturaContent';

export default function Struttura() {
  return (
    <div>
      <TopHeader />
      <Header />
      
      {/* Spazio tra header e contenuto principale */}
      <div className="mt-10 md:mt-16"></div>

      {/* Sezione Struttura */}
      <StrutturaContent />

      {/* Footer */}
      <Footer />
    </div>
  );
}
