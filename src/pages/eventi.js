import TopHeader from './components/TopHeader';
import Header from './components/Header';
import Footer from './components/Footer';
import EventiFuturi from './components/EventiFuturi';


export default function Eventi() {
  return (
    <div>
      <TopHeader />
      <Header />
      {/* Altri contenuti della pagina */}
      < EventiFuturi />
      <Footer />
    </div>
  );
}
