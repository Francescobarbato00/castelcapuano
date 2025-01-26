import { useEffect, useState } from "react";
import { db } from "../../lib/firebase"; // Importazione Firestore
import { collection, getDocs } from "firebase/firestore";
import dayjs from "dayjs";
import "dayjs/locale/it"; // Localizzazione italiana
import { useRouter } from "next/router";

const EventiFuturi = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Tutto");
  const [animate, setAnimate] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const categories = ["Tutto", "Convegno", "Evento"];
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  // 📌 Funzione per ottenere eventi da Firebase
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "events"));
        const eventsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          date: dayjs(doc.data().date.toDate()).locale("it").format("DD/MM/YY"), // Formatta la data
        }));

        // Ordina gli eventi per data (dal più recente al meno recente)
        const sortedEvents = eventsData.sort((a, b) => dayjs(a.date).unix() - dayjs(b.date).unix());

        setEvents(sortedEvents);
        setFilteredEvents(sortedEvents);
      } catch (error) {
        console.error("Errore nel recupero degli eventi:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // 🔄 Filtra eventi in base alla categoria selezionata
  useEffect(() => {
    setAnimate(true);
    setTimeout(() => {
      const filtered =
        selectedCategory === "Tutto"
          ? events
          : events.filter((event) => event.category === selectedCategory);
      setFilteredEvents(filtered);
      setCurrentPage(1);
      setAnimate(false);
    }, 300);
  }, [selectedCategory, events]);

  // 📌 Paginazione
  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);
  const currentEvents = filteredEvents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container mx-auto py-8 px-4 bg-white">
      <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
        Eventi Futuri
      </h2>

      {/* Filtri per categoria */}
      <div className="flex justify-center mb-8 space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
              selectedCategory === category
                ? "bg-blue-800 text-white"
                : "border border-blue-800 text-blue-800 hover:bg-blue-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Loading Indicator */}
      {loading ? (
        <p className="text-center text-gray-500">Caricamento...</p>
      ) : (
        <>
          {/* Griglia Eventi */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-transform duration-500 ${
              animate ? "translate-y-5 opacity-0" : "opacity-100 translate-y-0"
            }`}
          >
            {currentEvents.map((event) => (
              <div
                key={event.id}
                onClick={() => router.push(`/eventi/${event.id}`)} // ✅ Naviga alla pagina dell'evento
                className="cursor-pointer bg-white h-64 p-6 shadow-lg rounded-md flex flex-col justify-between hover:scale-105 transition-transform duration-300"
              >
                <div>
                  <span className="text-sm font-semibold bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {event.category}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-blue-900">
                    {event.title}
                  </h3>
                  <p className="text-gray-500 mt-2">{event.date}</p>
                  <p className="text-gray-600 mt-2">{event.description}</p>
                </div>
                <a className="text-blue-600 font-semibold mt-4 hover:underline">
                  Scopri l'evento →
                </a>
              </div>
            ))}
          </div>

          {/* Paginazione */}
          <div className="flex justify-center items-center mt-8 space-x-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`w-10 h-10 rounded-md text-blue-800 font-semibold bg-white ${
                  currentPage === index + 1
                    ? "border-2 border-blue-600"
                    : "hover:bg-blue-50"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default EventiFuturi;
