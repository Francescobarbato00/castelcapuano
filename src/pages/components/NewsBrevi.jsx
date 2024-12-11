import { useEffect, useState } from "react";

const NewsBrevi = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const news = [
    {
      id: 1,
      title: "Lancio della piattaforma Giustizia 4.0",
      date: "15 Dicembre 2024",
      description:
        "La nuova piattaforma digitale per l'informatizzazione dei procedimenti giudiziari sarà operativa dal prossimo anno.",
    },
    {
      id: 2,
      title: "Concorso 300 nuovi magistrati: pubblicato il bando",
      date: "12 Dicembre 2024",
      description:
        "È stato pubblicato il bando per il reclutamento di 300 nuovi magistrati. Scadenza prevista per gennaio 2025.",
    },
    {
      id: 3,
      title: "Inaugurata la Sala Storica presso Castel Capuano",
      date: "10 Dicembre 2024",
      description:
        "La storica sala restaurata è stata aperta al pubblico con un evento culturale e storico dedicato alla giustizia.",
    },
    {
      id: 4,
      title: "Assemblea Generale dell'Ordine Forense 2024",
      date: "8 Dicembre 2024",
      description:
        "I rappresentanti dell'Ordine Forense si riuniscono per discutere delle nuove normative.",
    },
  ];

  const brevi = [
    {
      id: 1,
      title: "Corte di Cassazione: Nuove linee guida",
      date: "1 Dicembre 2024",
    },
    {
      id: 2,
      title: "Rinnovato il protocollo tra DAP e Avvocatura",
      date: "20 Novembre 2024",
    },
    {
      id: 3,
      title: "Workshop formativo sulla Giustizia Digitale",
      date: "10 Novembre 2024",
    },
    {
      id: 4,
      title: "Restauro della Cappella della Sommaria completato",
      date: "1 Novembre 2024",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-8">
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
            {news.map((item) => (
              <div
                key={item.id}
                className="transition-transform transform hover:-translate-y-1 hover:shadow-lg p-4 border border-gray-200 rounded-lg"
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
            {brevi.map((item) => (
              <li
                key={item.id}
                className="border-b border-gray-300 pb-2 transition duration-300 hover:text-blue-900 cursor-pointer"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm italic text-gray-500">{item.date}</p>
              </li>
            ))}
          </ul>
          {/* Pulsante Archivio */}
          <div className="mt-6">
            <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition duration-300">
              Archivio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsBrevi;
