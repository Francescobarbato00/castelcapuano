import TopHeader from './components/TopHeader';
import Header from './components/Header';
import Footer from './components/Footer';
import Doc from './components/Doc';
import MobileHeader from './components/MobileHeader';
import ScrollableMenu from './components/ScrollableMenu';

export default function Documenti() {
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

      {/* Sezione Documenti */}
      <Doc />

      {/* Footer */}
      <Footer />
    </div>
  );
}
