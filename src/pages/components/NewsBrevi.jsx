import { useEffect, useRef, useState } from "react";

const NewsBrevi = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  const news = [
    {
      id: 1,
      title: "Articolo di Prova",
      date: "15 Dicembre 2024",
      description:
        "La nuova piattaforma digitale per l'informatizzazione dei procedimenti giudiziari sarà operativa dal prossimo anno.",
    },
    {
      id: 2,
      title: "Articolo di Prova",
      date: "12 Dicembre 2024",
      description:
        "È stato pubblicato il bando per il reclutamento di 300 nuovi magistrati. Scadenza prevista per gennaio 2025.",
    },
    {
      id: 3,
      title: "Articolo di Prova",
      date: "10 Dicembre 2024",
      description:
        "La storica sala restaurata è stata aperta al pubblico con un evento culturale e storico dedicato alla giustizia.",
    },
    {
      id: 4,
      title: "Articolo di Prova",
      date: "8 Dicembre 2024",
      description:
        "I rappresentanti dell'Ordine Forense si riuniscono per discutere delle nuove normative.",
    },
  ];

  const brevi = [
    {
      id: 1,
      title: "Articolo di Prova",
      date: "1 Dicembre 2024",
    },
    {
      id: 2,
      title: "Articolo di Prova",
      date: "20 Novembre 2024",
    },
    {
      id: 3,
      title: "Articolo di Prova",
      date: "10 Novembre 2024",
    },
    {
      id: 4,
      title: "Articolo di Prova",
      date: "1 Novembre 2024",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="container mx-auto px-4 py-8 bg-white" /* Sfondo bianco */
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-3 gap-8 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* NEWS */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">NEWS</h2>
          <hr className="border-gray-300 mb-4" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {news.map((item, index) => (
              <div
                key={item.id}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
                className={`bg-white transition-all duration-700 transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                } hover:scale-105 hover:shadow-lg p-4 border border-gray-200 rounded-lg`}
              >
                <h3 className="text-lg font-bold text-blue-900">
                  {item.title}
                </h3>
                <p className="text-sm italic text-gray-500 mb-2">{item.date}</p>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* BREVI */}
        <div>
  <h2 className="text-3xl font-bold text-blue-900 mb-4">BREVI</h2>
  <hr className="border-gray-300 mb-4" />
  <ul className="space-y-4">
    {brevi.map((item, index) => (
      <li
        key={item.id}
        style={{
          transitionDelay: `${index * 150}ms`,
        }}
        className={`bg-white border border-gray-300 pb-2 rounded-lg p-4 transition-all duration-700 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        } cursor-pointer`}
      >
        {/* Titolo sempre blu */}
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
