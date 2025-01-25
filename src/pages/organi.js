import TopHeader from './components/TopHeader';
import Header from './components/Header';
import Footer from './components/Footer';
import Organi from './components/OrganiContent';

export default function Home() {
  return (
    <div>
      <TopHeader />
      <Header />
      
      {/* Spazio tra header e contenuto principale */}
      <div className="mt-10 md:mt-16"></div>

      {/* Sezione Organi */}
      <Organi />

      {/* Footer */}
      <Footer />
    </div>
  );
}
