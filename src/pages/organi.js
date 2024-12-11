import TopHeader from './components/TopHeader';
import Header from './components/Header';
import Footer from './components/Footer';
import Organi from './components/OrganiContent';


export default function Home() {
  return (
    <div>
      <TopHeader />
      <Header />
      {/* Altri contenuti della pagina */}
      < Organi />
      <Footer />
    </div>
  );
}
