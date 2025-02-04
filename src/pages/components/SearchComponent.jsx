import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { X } from "lucide-react";
import Link from "next/link";

const SearchComponent = ({ onClose }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const categoryNames = {
    events: "Eventi",
    highlighted_news: "Notizie in evidenza",
    news: "News",
    press_releases: "Comunicati stampa",
    small_news: "News brevi",
  };

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const fetchData = async () => {
      const collections = Object.keys(categoryNames);
      let allResults = [];

      try {
        for (let col of collections) {
          const snapshot = await getDocs(collection(db, col));
          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            slug: doc.data().slug || doc.id,
            title: doc.data().title,
            category: categoryNames[col] || col,
            date: doc.data().date?.seconds
              ? new Date(doc.data().date.seconds * 1000).toLocaleDateString("it-IT")
              : doc.data().date || "Senza data",
          }));

          allResults = [...allResults, ...data];
        }
      } catch (error) {
        console.error("Errore nel recupero dei dati:", error);
      }

      const filteredResults = allResults.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );

      setResults(filteredResults);
    };

    fetchData();
  }, [query]);

  const getCorrectPath = (category, slug) => {
    switch (category) {
      case "News":
        return `/articolo/${slug}`;
      case "Eventi":
        return `/eventi/${slug}`;
      case "Comunicati stampa":
        return `/comunicati/${slug}`;
      case "News brevi":
        return `/smallnews/${slug}`;
      case "Notizie in evidenza":
        return `/notizie/${slug}`;
      default:
        return "/";
    }
  };

  // Blocca lo scrolling quando il componente di ricerca è aperto
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center p-6 animate-fade-in">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-gray-700 text-3xl transition hover:text-gray-900"
      >
        <X size={28} />
      </button>

      <h2 className="text-4xl font-bold text-gray-800 mb-6">Cerca nel sito</h2>

      <input
        type="text"
        placeholder="Cerca..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-3/4 md:w-1/2 px-6 py-3 border border-gray-300 rounded-full text-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="mt-6 w-3/4 md:w-1/2 bg-white shadow-lg rounded-lg max-h-[300px] overflow-y-auto">
        {results.length > 0 ? (
          results.map((item) => (
            <Link key={item.slug} href={getCorrectPath(item.category, item.slug)} passHref>
              <div className="p-4 border-b last:border-0 hover:bg-gray-100 cursor-pointer">
                <p className="text-blue-600 font-semibold">{item.title}</p>
                <p className="text-sm text-gray-500">
                  {item.date} • {item.category}
                </p>
              </div>
            </Link>
          ))
        ) : (
          query.length > 0 && <p className="text-gray-500 mt-4">Nessun risultato trovato</p>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;
