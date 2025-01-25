import TopHeader from './components/TopHeader';
import Header from './components/Header';
import Footer from './components/Footer';
import StrutturaContent from './components/StrutturaContent';
import MobileHeader from './components/MobileHeader';
import ScrollableMenu from './components/ScrollableMenu';

export default function Struttura() {
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

      {/* Spazio tra header e contenuto principale */}
      <div className="mt-10 md:mt-16"></div>

      {/* Sezione Struttura */}
      <StrutturaContent />

      {/* Footer */}
      <Footer />
    </div>
  );
}
