import { useState, useEffect } from "react";
import { db } from "../../lib/firebase";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MAX_PREVIEW_LENGTH = 180; // 🔹 Limite massimo caratteri per la preview
const ARTICLES_PER_PAGE = 3; // 🔹 Numero massimo di articoli visibili per pagina

const NotizieSection = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(0); // Pagina iniziale

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const q = query(collection(db, "news"), orderBy("date", "desc"), limit(12)); // Ultimi 12 articoli totali
        const querySnapshot = await getDocs(q);
        const articlesArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          date: doc.data().date?.seconds
            ? new Date(doc.data().date.seconds * 1000).toLocaleDateString("it-IT")
            : doc.data().date || "Senza data",
        }));

        setArticles(articlesArray);
      } catch (error) {
        console.error("Errore nel caricamento delle notizie:", error);
      }
    };

    fetchArticles();
  }, []);

  // 📌 Divide gli articoli in gruppi da 3 per pagina
  const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);
  const paginatedArticles = articles.slice(page * ARTICLES_PER_PAGE, (page + 1) * ARTICLES_PER_PAGE);

  // 📌 Funzione per troncare il testo della preview
  const truncateText = (text, maxLength) => {
    if (!text) return "";
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Titolo della sezione */}
        <div className="mb-8 text-left">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">Notizie in primo piano</h2>
          <div className="w-16 h-1 bg-blue-900"></div>
        </div>

        {/* Articoli con animazione */}
        <div className="relative overflow-hidden">
          <div key={page} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 fade-in">
            {paginatedArticles.length > 0 ? (
              paginatedArticles.map((article) => (
                <Link key={article.id} href={`/articolo/${article.slug || article.id}`} passHref>
                  <div className="cursor-pointer flex flex-col items-start text-left group">
                    <div className="w-full h-[300px] relative overflow-hidden shadow-md mb-4 rounded-lg">
                      <Image
                        src={article.imageUrl || "/default-news.jpg"} // Immagine di default se mancante
                        alt={article.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                    <h3 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-blue-700">
                      {article.title}
                    </h3>
                    <p className="text-gray-700">{truncateText(article.description, MAX_PREVIEW_LENGTH)}</p>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-gray-500 text-center col-span-3">Nessuna notizia disponibile</p>
            )}
          </div>
        </div>

        {/* Paginazione con animazione */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-6 space-x-6">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
              disabled={page === 0}
              className={`p-2 rounded-full transition ${
                page === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
              }`}
            >
              <ChevronLeft size={30} />
            </button>
            <span className="text-lg mx-4">
              Pagina {page + 1} di {totalPages}
            </span>
            <button
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages - 1))}
              disabled={page === totalPages - 1}
              className={`p-2 rounded-full transition ${
                page === totalPages - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
              }`}
            >
              <ChevronRight size={30} />
            </button>
          </div>
        )}
      </div>

      {/* Animazione CSS */}
      <style jsx>{`
        .fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default NotizieSection;
