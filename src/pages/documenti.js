import TopHeader from './components/TopHeader';
import Header from './components/Header';
import Footer from './components/Footer';
import Doc from './components/Doc';

export default function Documenti() {
  return (
    <div>
      <TopHeader />
      <Header />
      
      {/* Spazio tra header e contenuto principale */}
      <div className="mt-10 md:mt-16"></div>

      {/* Sezione Documenti */}
      <Doc />

      {/* Footer */}
      <Footer />
    </div>
  );
}
