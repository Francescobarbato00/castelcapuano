import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../../lib/firebase"; // Percorso corretto ai file
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileHeader from "../components/MobileHeader";
import dayjs from "dayjs";
import "dayjs/locale/it"; // Localizzazione italiana

const SmallNewsDetail = () => {
  const router = useRouter();
  const { id } = router.query; // Può essere ID Firestore o Slug
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchArticle = async () => {
      try {
        let data = null;

        // 🔹 Prima prova a cercare per slug
        const q = query(collection(db, "small_news"), where("slug", "==", id));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          data = querySnapshot.docs[0].data();
        } else {
          // 🔹 Se lo slug non esiste, prova con l'ID Firestore
          const docRef = doc(db, "small_news", id);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            data = docSnap.data();
          }
        }

        if (data) {
          // ✅ Conversione Timestamp → Data leggibile
          if (data.date?.seconds) {
            data.date = dayjs(data.date.toDate()).locale("it").format("DD MMMM YYYY");
          }

          setArticle(data);
        } else {
          console.log("Articolo non trovato!");
        }
      } catch (error) {
        console.error("Errore nel recupero dell'articolo:", error);
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) return <p className="text-center text-gray-600">Caricamento...</p>;

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

      {/* Contenuto Articolo */}
      <section className="bg-white container mx-auto px-4 py-8 sm:py-12 transition-all duration-1000 text-center">
        {/* Titolo principale centrato */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4 leading-tight">
          {article.title}
        </h1>

        {/* Data e autore centrati */}
        <p className="text-gray-500 italic text-lg mb-6">
          {article.date} {article.author && `• di `}
          {article.author && <span className="text-blue-700 font-semibold">{article.author}</span>}
        </p>

        {/* Corpo del testo formattato con mantenimento dei ritorni a capo */}
        <div className="bg-white max-w-2xl mx-auto leading-relaxed text-gray-800 space-y-6 text-lg">
          <p className="whitespace-pre-line">{article.description}</p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SmallNewsDetail;
