import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMinus, FaBookOpen, FaBullhorn } from "react-icons/fa";

const StrutturaSection = () => {
  const [activeTab, setActiveTab] = useState("Struttura");

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
        <div className="mb-6 text-center sm:text-left">
          <h2 className="text-2xl sm:text-4xl font-bold text-blue-900">La Fondazione</h2>
        </div>

        {/* Tabs con animazione */}
        <div className="flex flex-col sm:flex-row mb-6 border-b border-gray-300">
          {["Struttura", "Documenti", "Avvisi"].map((tab, index) => (
            <motion.button
              key={tab}
              className={`flex-1 px-4 py-3 sm:px-6 sm:py-4 text-lg font-bold flex items-center justify-center transition-all duration-300 relative ${
                activeTab === tab ? "bg-blue-900 text-white" : "border border-gray-300 text-blue-900"
              }`}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.05 }}
            >
              {index === 0 && <FaMinus className="mr-2" />}
              {index === 1 && <FaBookOpen className="mr-2" />}
              {index === 2 && <FaBullhorn className="mr-2" />}
              {tab}
            </motion.button>
          ))}
        </div>

        {/* Contenuto con animazione */}
        <div className="border-t border-gray-300 divide-y divide-gray-300 overflow-hidden">
          <AnimatePresence mode="wait">
            {contenuti[activeTab].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="py-3 sm:py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center hover:bg-gray-50 transition duration-300"
              >
                <div>
                  <p className="text-blue-900 font-bold text-base sm:text-lg">{item.title}</p>
                  <p className="text-gray-500 text-sm">{item.updated}</p>
                </div>
                <motion.div
                  className="text-blue-900 text-2xl cursor-pointer mt-2 sm:mt-0"
                  whileHover={{ scale: 1.2 }}
                >
                  •••
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Archivio con animazione hover */}
        <div className="mt-6 text-center sm:text-right">
          <motion.a
            href="#"
            className="text-blue-900 font-semibold hover:underline"
            whileHover={{ scale: 1.1 }}
          >
            CONSULTA L'ARCHIVIO &rsaquo;
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default StrutturaSection;
