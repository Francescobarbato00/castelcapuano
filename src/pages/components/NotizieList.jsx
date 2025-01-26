import { useEffect, useState } from "react";
import Link from "next/link";
import { getNews } from "../../lib/firebase"; // Assicurati che il percorso sia corretto

const MAX_INTRO_LENGTH = 150; // Numero massimo di caratteri nell'introduzione

const NotizieList = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsData = await getNews();
        console.log("Dati ricevuti da Firestore:", newsData); // Debug
        setNewsItems(newsData);
      } catch (error) {
        console.error("Errore nel recupero delle notizie:", error);
      }
    };

    fetchNews();
  }, []);

  if (newsItems.length === 0) {
    return <p className="text-center">Nessuna notizia disponibile.</p>;
  }

  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-blue-900 mb-6 text-center">
        TUTTE LE NOTIZIE
      </h1>
      <hr className="border-gray-300 mb-8" />

      {/* Griglia delle notizie */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((item) => (
          <Link href={`/articolo/${item.id}`} key={item.id}>
            <div className="bg-white shadow-md rounded overflow-hidden transform hover:-translate-y-2 hover:shadow-xl transition-transform duration-500">
              {/* Immagine */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.imageUrl || "/placeholder.jpg"}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute bottom-2 left-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {item.category}
                </div>
              </div>

              {/* Contenuto */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-blue-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2 italic">
                  {item.date} • di <span className="text-blue-700">{item.author}</span>
                </p>
                <p className="text-gray-700">
                  {item.description.length > MAX_INTRO_LENGTH
                    ? `${item.description.substring(0, MAX_INTRO_LENGTH)}...`
                    : item.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default NotizieList;
