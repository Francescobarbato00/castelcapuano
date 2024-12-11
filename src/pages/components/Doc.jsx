import React, { useState, useEffect } from "react";

const Doc = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const documents = [
    {
      id: 1,
      title: "Atto costitutivo della Fondazione Castel Capuano",
      date: "28/11/2012",
      description: "Scarica il file in formato PDF - 52 Kb",
      fileType: "PDF",
    },
    {
      id: 2,
      title: "D.M. 19.11.2010 Fondazione Castelcapuano",
      date: "28/11/2012",
      description: "Scarica il file in formato ZIP - 75 Kb",
      fileType: "ZIP",
    },
    {
      id: 3,
      title: "Decreti di conferimento incarico Sergio Di Amato e Floretta Rolleri",
      date: "28/11/2012",
      description: "Scarica il file in formato ZIP - 124 Kb",
      fileType: "ZIP",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-8 bg-white">
      {/* Titolo Sezione */}
      <div
        className={`text-center mb-12 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl font-bold text-blue-900">Documenti</h2>
        <p className="text-gray-600 mt-2">
          Consulta e scarica i documenti ufficiali della Fondazione Castel Capuano.
        </p>
      </div>

      {/* Lista Documenti */}
      <div className="space-y-8">
        {documents.map((doc, index) => (
          <div
            key={doc.id}
            className={`flex flex-col lg:flex-row bg-white shadow-lg rounded-md overflow-hidden transform transition-transform duration-500 ${
              isVisible ? "translate-y-0 opacity-100" : `translate-y-${(index + 1) * 8} opacity-0`
            }`}
          >
            {/* Immagine Sinistra */}
            <div className="lg:w-1/3 bg-gray-200">
              <img
                src={
                  doc.fileType === "PDF"
                    ? "https://via.placeholder.com/400x200?text=PDF"
                    : "https://via.placeholder.com/400x200?text=ZIP"
                }
                alt={`Anteprima ${doc.fileType}`}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Contenuto Destro */}
            <div className="lg:w-2/3 p-6 flex flex-col justify-center">
              {/* Titolo - Blu o Nero */}
              <h3 className="text-xl font-bold text-blue-900 mb-2">{doc.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{doc.date}</p>
              <p className="text-gray-600 mb-4">{doc.description}</p>
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline transition-colors duration-300"
              >
                Scarica il file →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Doc;
