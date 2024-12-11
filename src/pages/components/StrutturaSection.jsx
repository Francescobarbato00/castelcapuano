import { useState } from "react";
import { FaMinus, FaBookOpen, FaBullhorn } from "react-icons/fa";

const StrutturaSection = () => {
  const [activeTab, setActiveTab] = useState("Struttura");

  // Contenuti per ciascun tab
  const contenuti = {
    Struttura: [
      { title: "Chi siamo", updated: "Aggiornato: lunedì 09 dicembre" },
      { title: "Sede", updated: "Aggiornato: giovedì 05 dicembre" },
      { title: "Storia di Castel Capuano", updated: "Aggiornato: mercoledì 04 dicembre" },
    ],
    Documenti: [
      { title: "Statuto della Fondazione", updated: "Aggiornato: venerdì 29 novembre" },
      { title: "Scopi della Fondazione", updated: "Aggiornato: mercoledì 27 novembre" },
    ],
    Avvisi: [
      { title: "Dati Fiscali", updated: "Aggiornato: lunedì 25 novembre" },
      { title: "Avviso importante", updated: "Aggiornato: domenica 24 novembre" },
    ],
  };

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        {/* Titolo della sezione */}
        <div className="mb-6">
          <h2 className="text-4xl font-bold text-blue-900">La Fondazione</h2>
        </div>

        {/* Tabs Estesi */}
        <div className="flex mb-6">
          <button
            className={`flex-1 px-6 py-4 text-lg font-bold flex items-center justify-center ${
              activeTab === "Struttura" ? "bg-blue-900 text-white" : "border border-gray-300 text-blue-900"
            }`}
            onClick={() => setActiveTab("Struttura")}
          >
            <FaMinus className="mr-2" /> Struttura
          </button>
          <button
            className={`flex-1 px-6 py-4 text-lg font-bold flex items-center justify-center ${
              activeTab === "Documenti" ? "bg-blue-900 text-white" : "border border-gray-300 text-blue-900"
            }`}
            onClick={() => setActiveTab("Documenti")}
          >
            <FaBookOpen className="mr-2" /> Storia
          </button>
          <button
            className={`flex-1 px-6 py-4 text-lg font-bold flex items-center justify-center ${
              activeTab === "Avvisi" ? "bg-blue-900 text-white" : "border border-gray-300 text-blue-900"
            }`}
            onClick={() => setActiveTab("Avvisi")}
          >
            <FaBullhorn className="mr-2" /> Amministrazione
          </button>
        </div>

        {/* Contenuto Dinamico */}
        <div className="border-t border-gray-300 divide-y divide-gray-300">
          {contenuti[activeTab].map((item, index) => (
            <div
              key={index}
              className="py-4 flex justify-between items-center hover:bg-gray-50 transition duration-300"
            >
              <div>
                <p className="text-blue-900 font-bold text-lg">{item.title}</p>
                <p className="text-gray-500 text-sm">{item.updated}</p>
              </div>
              <div className="text-blue-900 text-2xl cursor-pointer">•••</div>
            </div>
          ))}
        </div>

        {/* Archivio */}
        <div className="mt-6 text-right">
          <a href="#" className="text-blue-900 font-semibold hover:underline">
            CONSULTA L'ARCHIVIO &rsaquo;
          </a>
        </div>
      </div>
    </section>
  );
};

export default StrutturaSection;
