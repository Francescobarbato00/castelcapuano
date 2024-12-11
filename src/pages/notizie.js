import TopHeader from './components/TopHeader';
import Header from './components/Header';
import Footer from './components/Footer';
import NotizieList from './components/NotizieList';
import NewsBrevi from './components/NewsBrevi';


export default function Notizie() {
  return (
    <div>
      <TopHeader />
      <Header />
      {/* Altri contenuti della pagina */}
      < NotizieList />
      <hr className="border-t border-gray-300 my-0 w-full" />
      < NewsBrevi />
      <Footer />
    </div>
  );
}
