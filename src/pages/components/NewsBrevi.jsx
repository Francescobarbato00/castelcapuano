import { useEffect, useRef, useState } from "react";
import { db } from "../../lib/firebase"; // Assicurati che il percorso sia corretto
import { collection, getDocs } from "firebase/firestore";
import dayjs from "dayjs";
import "dayjs/locale/it"; // Localizzazione italiana
import { useRouter } from "next/router";

const NewsBrevi = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [news, setNews] = useState([]);
  const [brevi, setBrevi] = useState([]);
  const sectionRef = useRef(null);
  const router = useRouter();

  // Funzione per convertire il Timestamp di Firestore in una data leggibile
  const formatDate = (date) => {
    if (date?.seconds) {
      return dayjs(date.toDate()).locale("it").format("DD MMMM YYYY");
    }
    return "Data non disponibile";
  };

  // Recupera le news da Firebase
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsCollection = collection(db, "small_news");
        const newsSnapshot = await getDocs(newsCollection);
        const newsData = newsSnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
            date: formatDate(data.date), // ✅ Conversione Timestamp → Data leggibile
          };
        });

        // Ordina le news per data (dal più recente al meno recente)
        const sortedNews = newsData.sort((a, b) => dayjs(b.date).unix() - dayjs(a.date).unix());

        // Dividiamo tra "News" e "Brevi"
        setNews(sortedNews.slice(0, 4)); // Primi 4 articoli
        setBrevi(sortedNews.slice(4, 8)); // Successivi 4 articoli
      } catch (error) {
        console.error("Errore nel recupero delle news:", error);
      }
    };

    fetchNews();
  }, []);

  // Intersection Observer per l'animazione al caricamento
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Disattiva l'observer dopo l'attivazione
        }
      },
      {
        threshold: 0.2, // Trigger quando il 20% della sezione è visibile
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="container mx-auto px-4 py-8 bg-white">
      <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        
        {/* NEWS PRINCIPALI */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">NEWS</h2>
          <hr className="border-gray-300 mb-4" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {news.map((item, index) => (
              <div
                key={item.id}
                onClick={() => router.push(`/smallnews/${item.id}`)}
                style={{ transitionDelay: `${index * 150}ms` }}
                className={`bg-white transition-all duration-700 transform cursor-pointer ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                } hover:scale-105 hover:shadow-lg p-4 border border-gray-200 rounded-lg`}
              >
                <h3 className="text-lg font-bold text-blue-900">{item.title}</h3>
                <p className="text-sm italic text-gray-500 mb-2">{item.date}</p>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* NEWS BREVI */}
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-4">BREVI</h2>
          <hr className="border-gray-300 mb-4" />
          <ul className="space-y-4">
            {brevi.map((item, index) => (
              <li
                key={item.id}
                onClick={() => router.push(`/smallnews/${item.id}`)}
                style={{ transitionDelay: `${index * 150}ms` }}
                className={`bg-white border border-gray-300 pb-2 rounded-lg p-4 transition-all duration-700 transform cursor-pointer ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                } hover:bg-gray-100`}
              >
                <h3 className="text-lg font-semibold text-blue-900">{item.title}</h3>
                <p className="text-sm italic text-gray-500">{item.date}</p>
              </li>
            ))}
          </ul>

          {/* Pulsante Archivio */}
          <div className="mt-6">
            <button
              className={`bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition-all duration-700 transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: `${brevi.length * 150}ms` }}
            >
              Archivio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsBrevi;
