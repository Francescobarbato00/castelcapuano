import TopHeader from './components/TopHeader';
import Header from './components/Header';
import Footer from './components/Footer';
import EventiFuturi from './components/EventiFuturi';

export default function Eventi() {
  return (
    <div>
      <TopHeader />
      <Header />
      
      {/* Spazio tra header e contenuto principale */}
      <div className="mt-10 md:mt-16"></div>

      {/* Sezione Eventi */}
      <EventiFuturi />

      {/* Footer */}
      <Footer />
    </div>
  );
}
