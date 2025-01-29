import TopHeader from './components/TopHeader';
import Header from './components/Header';
import Footer from './components/Footer';
import EventiFuturi from './components/EventiFuturi';
import MobileHeader from './components/MobileHeader';
import ScrollableMenu from './components/ScrollableMenu';
import ChatBot from './components/ChatBot';
import DownFooter from './components/DownFooter';

export default function Eventi() {
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

      {/* Sezione Eventi */}
      <EventiFuturi />

      <ChatBot  />
  
      {/* Footer */}
      <Footer />
      <DownFooter />
    </div>
  );
}
