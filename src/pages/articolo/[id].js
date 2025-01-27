import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../../lib/firebase"; // Assicurati che il percorso sia corretto
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileHeader from "../components/MobileHeader";
import Image from "next/image";

const Articolo = () => {
  const router = useRouter();
  const { id } = router.query; // Può essere ID Firestore o Slug
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchArticle = async () => {
      try {
        let data = null;

        // 🔹 Prima prova a cercare per slug
        const q = query(collection(db, "news"), where("slug", "==", id));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          data = querySnapshot.docs[0].data();
        } else {
          // 🔹 Se lo slug non esiste, prova con l'ID Firestore
          const docRef = doc(db, "news", id);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            data = docSnap.data();
          }
        }

        if (data) {
          // 📌 Formattiamo la data in italiano leggibile
          if (data.date && data.date.seconds) {
            const date = new Date(data.date.seconds * 1000);
            data.date = date.toLocaleDateString("it-IT", {
              day: "numeric",
              month: "long",
              year: "numeric",
            });
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

  if (!article) return <p className="text-center">Caricamento...</p>;

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
      <section className="bg-white container mx-auto px-4 py-8 sm:py-12 transition-all duration-1000">
        {/* Titolo principale centrato */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-blue-900 mb-6 leading-tight">
          {article.title}
        </h1>

        {/* Data e autore centrati */}
        <p className="text-center text-gray-500 italic mb-6">
          {article.date} • di <span className="text-blue-700 font-semibold">{article.author}</span>
        </p>

        {/* 📸 Immagine principale quadrata con dimensione fissa */}
        {article.imageUrl && (
          <div className="w-full max-w-md mx-auto mb-8">
            <Image
              src={article.imageUrl}
              alt={article.title}
              width={500}  // Grandezza uniforme
              height={500} // Quadrata
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        )}

        {/* Corpo del testo formattato */}
        <div className="bg-white max-w-4xl mx-auto leading-relaxed text-gray-800 space-y-6 text-justify text-sm sm:text-base">
          {/* ✅ Ora il testo mantiene i ritorni a capo */}
          <p dangerouslySetInnerHTML={{ __html: article.description.replace(/\n/g, "<br>") }} />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Articolo;
