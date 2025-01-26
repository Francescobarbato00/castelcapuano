import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../lib/firebase"; // Importa Firestore
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileHeader from "../components/MobileHeader";
import dayjs from "dayjs";
import "dayjs/locale/it"; // Localizzazione italiana

const ComunicatoDettaglio = () => {
  const router = useRouter();
  const { id } = router.query;
  const [comunicato, setComunicato] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchComunicato = async () => {
      try {
        const docRef = doc(db, "press_releases", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          let data = docSnap.data();

          // 📌 Formattiamo la data in italiano leggibile
          if (data.date?.seconds) {
            data.date = dayjs(data.date.toDate()).locale("it").format("DD MMMM YYYY");
          }

          setComunicato(data);
        } else {
          console.log("Comunicato non trovato!");
        }
      } catch (error) {
        console.error("Errore nel recupero del comunicato:", error);
      }
    };

    fetchComunicato();
  }, [id]);

  if (!comunicato) return <p className="text-center text-gray-600">Caricamento...</p>;

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

      {/* Contenuto Comunicati Stampa */}
      <section className="bg-white container mx-auto px-4 py-8 sm:py-12 transition-all duration-1000">
        {/* Titolo principale centrato */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-blue-900 mb-6 leading-tight">
          {comunicato.title}
        </h1>

        {/* Data e Numero del comunicato */}
        <p className="text-center text-gray-500 italic mb-6">
          {comunicato.date} {comunicato.number && `• ${comunicato.number}`}
        </p>

        {/* Corpo del comunicato formattato */}
        <div className="bg-white max-w-4xl mx-auto leading-relaxed text-gray-800 space-y-6 text-justify text-sm sm:text-base">
          <p dangerouslySetInnerHTML={{ __html: comunicato.content.replace(/\n/g, "<br>") }} />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ComunicatoDettaglio;
