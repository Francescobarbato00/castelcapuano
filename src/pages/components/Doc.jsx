import React, { useState, useEffect } from "react";

const Archive = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchParams, setSearchParams] = useState({
    year: "",
    type: "",
    extension: "",
    keyword: "",
    author: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const archive = {
    2023: [
      { id: 1, title: "Bilancio Annuale 2023", date: "15/12/2023", description: "Scarica il bilancio annuale in formato PDF.", fileType: "PDF", author: "Mario Rossi" },
      { id: 2, title: "Verbale Riunione Marzo 2023", date: "20/03/2023", description: "Resoconto della riunione di marzo 2023.", fileType: "PDF", author: "Giulia Bianchi" },
    ],
    2022: [
      { id: 3, title: "Relazione Attività 2022", date: "10/12/2022", description: "Documento riepilogativo delle attività svolte.", fileType: "PDF", author: "Luca Verdi" },
      { id: 4, title: "Verbale Assemblea Luglio 2022", date: "18/07/2022", description: "Dettagli della riunione di luglio 2022.", fileType: "PDF", author: "Anna Neri" },
    ],
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 py-12 bg-white">
      {/* Intestazione */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900"> Archivio Documenti</h2>
        <p className="text-base sm:text-lg text-gray-600 mt-3">
          Consulta e filtra i documenti archiviati in modo rapido ed efficace.
        </p>
      </div>

      {/* 🔍 Sezione Filtri */}
      <div className="bg-white p-4 sm:p-6 shadow-md rounded-xl mb-8 flex flex-col sm:flex-wrap sm:flex-row justify-center gap-4 border border-gray-200">
        <select
          className="border border-gray-300 p-2 sm:p-3 rounded-full text-blue-900 font-medium focus:ring-2 focus:ring-blue-400 transition"
          onChange={(e) => setSearchParams({ ...searchParams, year: e.target.value })}
        >
          <option value=""> Anno</option>
          {Object.keys(archive).map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>

        <select
          className="border border-gray-300 p-2 sm:p-3 rounded-full text-blue-900 font-medium focus:ring-2 focus:ring-blue-400 transition"
          onChange={(e) => setSearchParams({ ...searchParams, type: e.target.value })}
        >
          <option value=""> Tipo Documento</option>
          <option value="Bilancio">Bilancio</option>
          <option value="Verbale">Verbale</option>
          <option value="Relazione">Relazione</option>
        </select>

        <select
          className="border border-gray-300 p-2 sm:p-3 rounded-full text-blue-900 font-medium focus:ring-2 focus:ring-blue-400 transition"
          onChange={(e) => setSearchParams({ ...searchParams, extension: e.target.value })}
        >
          <option value=""> Estensione</option>
          <option value="PDF">PDF</option>
          <option value="DOCX">DOCX</option>
          <option value="ZIP">ZIP</option>
        </select>

        <input
          type="text"
          className="border border-gray-300 p-2 sm:p-3 rounded-full text-blue-900 font-medium placeholder-gray-500 focus:ring-2 focus:ring-blue-400 transition"
          placeholder=" Ricerca testuale"
          onChange={(e) => setSearchParams({ ...searchParams, keyword: e.target.value })}
        />

        <input
          type="text"
          className="border border-gray-300 p-2 sm:p-3 rounded-full text-blue-900 font-medium placeholder-gray-500 focus:ring-2 focus:ring-blue-400 transition"
          placeholder=" Autore"
          onChange={(e) => setSearchParams({ ...searchParams, author: e.target.value })}
        />
      </div>

      {/* Sezione Documenti */}
      {Object.keys(archive)
        .sort((a, b) => b - a)
        .map((year) => (
          <div key={year} className="mb-10 p-4 sm:p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-4 border-b-2 pb-2">
               Anno {year}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {archive[year]
                .filter(
                  (doc) =>
                    (!searchParams.year || searchParams.year === year) &&
                    (!searchParams.type || doc.title.includes(searchParams.type)) &&
                    (!searchParams.extension || doc.fileType === searchParams.extension) &&
                    (!searchParams.keyword || doc.title.toLowerCase().includes(searchParams.keyword.toLowerCase())) &&
                    (!searchParams.author || doc.author.toLowerCase().includes(searchParams.author.toLowerCase()))
                )
                .map((doc) => (
                  <div
                    key={doc.id}
                    className="p-4 sm:p-5 border rounded-lg shadow-md bg-gray-50 text-center hover:shadow-xl transition duration-300"
                  >
                    <h4 className="text-lg font-bold text-blue-900 mb-1">{doc.title}</h4>
                    <p className="text-sm text-gray-500 mb-2"> {doc.date}</p>
                    <p className="text-gray-600 mb-3">{doc.description}</p>
                    <p className="text-gray-500 text-sm mb-3"> Autore: {doc.author}</p>
                    <a
                      href="#"
                      className="text-blue-600 font-semibold hover:underline transition"
                    >
                      ⬇ Scarica il file
                    </a>
                  </div>
                ))}
            </div>
          </div>
        ))}
    </section>
  );
};

export default Archive;
