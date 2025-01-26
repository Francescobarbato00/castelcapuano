import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../lib/firebase"; // Percorso corretto
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileHeader from "../components/MobileHeader";
import dayjs from "dayjs";
import "dayjs/locale/it"; // Localizzazione italiana

const EventoDettaglio = () => {
  const router = useRouter();
  const { id } = router.query;
  const [evento, setEvento] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchEvento = async () => {
      try {
        const docRef = doc(db, "events", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          let data = docSnap.data();
          if (data.date?.seconds) {
            data.date = dayjs(data.date.toDate()).locale("it").format("DD MMMM YYYY");
          }
          setEvento(data);
        } else {
          console.log("Evento non trovato!");
        }
      } catch (error) {
        console.error("Errore nel recupero dell'evento:", error);
      }
    };

    fetchEvento();
  }, [id]);

  if (!evento) return <p className="text-center text-gray-600">Caricamento...</p>;

  return (
    <div className="bg-white">
      <TopHeader />
      <Header />
      <section className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold text-blue-900">{evento.title}</h1>
        <p className="text-gray-500 italic mt-4">{evento.date}</p>
        <p className="text-gray-700 mt-6">{evento.description}</p>
      </section>
      <Footer />
    </div>
  );
};

export default EventoDettaglio;
