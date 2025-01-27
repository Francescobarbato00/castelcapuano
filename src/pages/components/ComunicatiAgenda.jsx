import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaFileAlt, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { db } from "../../lib/firebase"; 
import { collection, getDocs } from "firebase/firestore";
import dayjs from "dayjs";
import "dayjs/locale/it"; 
import { useRouter } from "next/router";
import { motion } from "framer-motion"; // Per effetto di scorrimento fluido

const ComunicatiAgenda = () => {
  const [comunicati, setComunicati] = useState([]);
  const [agenda, setAgenda] = useState([]);
  const [comunicatiIndex, setComunicatiIndex] = useState(0);
  const [agendaIndex, setAgendaIndex] = useState(0);
  const router = useRouter();

  const ITEMS_PER_PAGE = 2; // Mostra solo 2 comunicati e 2 eventi alla volta

  useEffect(() => {
    const fetchData = async () => {
      try {
        const comunicatiSnapshot = await getDocs(collection(db, "press_releases"));
        const comunicatiData = comunicatiSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          date: dayjs(doc.data().date.toDate()).locale("it").format("DD/MM/YYYY"),
        }));

        const agendaSnapshot = await getDocs(collection(db, "agenda_events"));
        const agendaData = agendaSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        setComunicati(comunicatiData);
        setAgenda(agendaData);
      } catch (error) {
        console.error("Errore nel recupero dei dati:", error);
      }
    };

    fetchData();
  }, []);

  const nextComunicati = () => {
    if (comunicatiIndex + ITEMS_PER_PAGE < comunicati.length) {
      setComunicatiIndex(comunicatiIndex + ITEMS_PER_PAGE);
    }
  };

  const prevComunicati = () => {
    if (comunicatiIndex > 0) {
      setComunicatiIndex(comunicatiIndex - ITEMS_PER_PAGE);
    }
  };

  const nextAgenda = () => {
    if (agendaIndex + ITEMS_PER_PAGE < agenda.length) {
      setAgendaIndex(agendaIndex + ITEMS_PER_PAGE);
    }
  };

  const prevAgenda = () => {
    if (agendaIndex > 0) {
      setAgendaIndex(agendaIndex - ITEMS_PER_PAGE);
    }
  };

  return (
    <section className="bg-white py-12 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-wrap lg:flex-nowrap gap-8">
        
        {/* 📜 Sezione Comunicati Stampa */}
        <div className="w-full lg:w-3/5">
          <h2 className="text-4xl font-extrabold text-blue-900 mb-4 uppercase">Comunicati Stampa</h2>

          <motion.div 
            className="overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {comunicati.slice(comunicatiIndex, comunicatiIndex + ITEMS_PER_PAGE).map((item) => (
              <div 
                key={item.id} 
                onClick={() => router.push(`/comunicati/${item.slug || item.id}`)} // 🔹 Ora punta allo slug
                className="cursor-pointer bg-gray-50 shadow-md p-6 mb-4 flex justify-between items-start border border-gray-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <p className="text-gray-600 text-sm font-semibold mb-1">
                    {item.date} {item.number}
                  </p>
                  <h3 className="text-blue-800 font-bold text-lg">{item.title}</h3>
                  {item.subtitle && <p className="text-gray-600 mt-2 text-sm">{item.subtitle}</p>}
                </div>
                <FaFileAlt className="text-gray-400 text-3xl" />
              </div>
            ))}
          </motion.div>

          {/* Frecce di navigazione per i comunicati */}
          <div className="flex justify-between mt-4">
            {comunicatiIndex > 0 && (
              <button onClick={prevComunicati} className="text-blue-700 text-lg hover:text-blue-900 flex items-center">
                <FaArrowLeft className="mr-2" /> Precedenti
              </button>
            )}
            {comunicatiIndex + ITEMS_PER_PAGE < comunicati.length && (
              <button onClick={nextComunicati} className="text-blue-700 text-lg hover:text-blue-900 flex items-center">
                Successivi <FaArrowRight className="ml-2" />
              </button>
            )}
          </div>
        </div>

        {/* 📅 Sezione Agenda */}
        <div className="w-full lg:w-2/5">
          <h2 className="text-4xl font-extrabold text-blue-900 mb-4 uppercase">Agenda</h2>

          <motion.div 
            className="overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {agenda.slice(agendaIndex, agendaIndex + ITEMS_PER_PAGE).map((event) => (
              <div 
                key={event.id} 
                className="flex items-center bg-gray-50 shadow-md mb-4 p-4 border border-gray-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* Quadrato Data */}
                <div className="w-20 h-24 bg-blue-900 text-white flex flex-col justify-center items-center">
                  <p className="text-xs uppercase font-bold">{event.month}</p>
                  <p className="text-3xl font-extrabold">{event.day}</p>
                  <p className="text-xs uppercase font-semibold">{event.weekday}</p>
                </div>
                
                {/* Dettagli Evento */}
                <div className="ml-4">
                  <p className="text-gray-800 font-semibold text-lg">{event.title}</p>
                  <p className="text-gray-500 text-sm flex items-center gap-2">
                    <FaMapMarkerAlt /> {event.location} <FaClock /> {event.time}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Frecce di navigazione per l'agenda */}
          <div className="flex justify-between mt-4">
            {agendaIndex > 0 && (
              <button onClick={prevAgenda} className="text-blue-700 text-lg hover:text-blue-900 flex items-center">
                <FaArrowLeft className="mr-2" /> Precedenti
              </button>
            )}
            {agendaIndex + ITEMS_PER_PAGE < agenda.length && (
              <button onClick={nextAgenda} className="text-blue-700 text-lg hover:text-blue-900 flex items-center">
                Successivi <FaArrowRight className="ml-2" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComunicatiAgenda;
