import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaFileAlt } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";

const ComunicatiAgenda = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stoppa l'osservazione dopo l'attivazione
        }
      },
      { threshold: 0.3 } // Attiva quando il 30% della sezione è visibile
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const comunicati = [
    {
      date: "09/12/2024",
      number: "N° 140",
      title: "Titoli di Stato: 12 dicembre asta a medio-lungo termine e calendario aste dicembre",
    },
    {
      date: "07/12/2024",
      number: "N° 139",
      title: "PNRR: nuove regole per accelerare i pagamenti",
      subtitle: "Giorgetti firma decreto attuativo che semplifica le procedure",
    },
  ];

  const agenda = [
    {
      day: "16",
      month: "DIC",
      weekday: "MERCOLEDÌ",
      title: "Concerto di Natale",
      location: "Castel Capuano",
      time: "18:00",
    },
    {
      day: "12",
      month: "DIC",
      weekday: "GIOVEDÌ",
      title: "Evento Speciale",
      location: "ROMA – Circo Massimo",
      time: "19:00",
    },
  ];

  return (
    <section ref={sectionRef} className="bg-white py-12">
      <div
        className={`container mx-auto px-4 flex flex-wrap lg:flex-nowrap gap-8 ${
          isVisible ? "lg:animate-fadeInUp" : "opacity-0"
        }`}
      >
        {/* Sezione Comunicati Stampa */}
        <div className="w-full lg:w-3/5">
          <div className="border-b-2 border-gray-300 pb-2 mb-6">
            <h2 className="text-4xl font-extrabold text-blue-900 mb-4 uppercase">Comunicati stampa</h2>
            <div className="w-20 h-1 bg-blue-900"></div>
          </div>

          {comunicati.map((item, index) => (
            <div
              key={index}
              className={`bg-gray-50 shadow-md rounded-none p-6 mb-4 flex justify-between items-start border border-gray-300 transition-all duration-1000 ${
                isVisible ? "lg:animate-slideInLeft" : "opacity-0"
              } hover:shadow-lg hover:-translate-y-1`}
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

          <p className="text-right text-blue-800 font-semibold mt-4 cursor-pointer hover:underline">
            TUTTI I COMUNICATI &gt;
          </p>
        </div>

        {/* Divisore verticale */}
        <div className="hidden lg:block w-1 bg-gray-300"></div>

        {/* Sezione Agenda */}
        <div className="w-full lg:w-2/5">
          <div className="border-b-2 border-gray-300 pb-2 mb-6">
            <h2 className="text-4xl font-extrabold text-blue-900 mb-4 uppercase">Agenda</h2>
            <div className="w-20 h-1 bg-blue-900"></div>
          </div>

          {agenda.map((event, index) => (
            <div
              key={index}
              className={`flex items-center bg-gray-50 shadow-md rounded-none mb-4 p-4 border border-gray-300 transition-all duration-1000 ${
                isVisible ? "lg:animate-slideInRight" : "opacity-0"
              } hover:shadow-lg hover:-translate-y-1`}
            >
              {/* Quadrato Data */}
              <div className="w-20 h-24 bg-blue-900 text-white flex flex-col justify-center items-center rounded-none">
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

          <p className="text-blue-800 font-semibold mt-4 cursor-pointer flex items-center gap-2 hover:underline">
            PROSSIMI APPUNTAMENTI <FaCalendarAlt />
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComunicatiAgenda;
