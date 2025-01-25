import TopHeader from './components/TopHeader';
import Header from './components/Header';
import Footer from './components/Footer';
import NotizieList from './components/NotizieList';
import NewsBrevi from './components/NewsBrevi';
import MobileHeader from './components/MobileHeader';
import ScrollableMenu from './components/ScrollableMenu';

export default function Notizie() {
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

      {/* Sezione Notizie */}
      <NotizieList />
      <hr className="border-t border-gray-300 my-0 w-full" />

      {/* Sezione News Brevi */}
      <NewsBrevi />

      {/* Footer */}
      <Footer />
    </div>
  );
}
