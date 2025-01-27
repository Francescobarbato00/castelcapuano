import TopHeader from './components/TopHeader';
import Header from './components/Header';
import Footer from './components/Footer';
import Doc from './components/Doc';
import MobileHeader from './components/MobileHeader';
import ScrollableMenu from './components/ScrollableMenu';
import ChatBot from './components/ChatBot';

export default function Documenti() {
  return (
    <div className="bg-white">
      <TopHeader />

      {/* Header Desktop */}
      <div className="hidden md:block">
        <Header />
      </div>
      
      {/* Header Mobile */}
      <div className="block md:hidden bg-white border-b border-gray-300">
        <MobileHeader />
      </div>

      {/* Spazio tra header e contenuto principale */}
      <div className="mt-10 md:mt-16 bg-white"></div>

      {/* Sezione Documenti */}
      <Doc />

      <ChatBot />

      {/* Footer */}
      <Footer />
    </div>
  );
}
