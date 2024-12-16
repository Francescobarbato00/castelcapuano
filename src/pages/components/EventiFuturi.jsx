import React, { useState, useEffect } from "react";

const EventiFuturi = () => {
  const allEvents = [
    { id: 1, title: "Evento di Prova", date: "22/11/24", description: "Evento di Prova.", category: "Convegno" },
    { id: 2, title: "Evento di Prova", date: "05/12/24", description: "Evento di Prova", category: "Evento" },
    { id: 3, title: "Evento di Prova", date: "04/11/24", description: "Evento di Prova", category: "Convegno" },
    { id: 4, title: "Evento di Prova", date: "17/10/24", description: "Evento di Prova", category: "Evento" },
    { id: 5, title: "Evento di Prova", date: "09/10/24", description: "Evento di Prova.", category: "Convegno" },
    { id: 6, title: "Evento di Prova", date: "01/10/24", description: "Evento di Prova.", category: "Evento" },
    { id: 7, title: "Evento di Prova", date: "15/09/24", description: "Evento di Prova.", category: "Convegno" },
    { id: 8, title: "Evento di Prova", date: "10/09/24", description: "Evento di Prova.", category: "Evento" },
  ];

  const tabs = ["Tutto", "News e comunicati stampa", "Eventi, convegni e seminari"];
  const categories = ["Tutto", "Convegno", "Evento"];
  const itemsPerPage = 6;

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("Tutto");
  const [selectedTab, setSelectedTab] = useState("Tutto");
  const [filteredEvents, setFilteredEvents] = useState(allEvents);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timeout = setTimeout(() => {
      const filtered = selectedCategory === "Tutto"
        ? allEvents
        : allEvents.filter(event => event.category === selectedCategory);
      setFilteredEvents(filtered);
      setCurrentPage(1);
      setAnimate(false);
    }, 300);
    return () => clearTimeout(timeout);
  }, [selectedCategory]);

  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);
  const currentEvents = filteredEvents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageClick = (page) => {
    setAnimate(true);
    setTimeout(() => {
      setCurrentPage(page);
      setAnimate(false);
    }, 300);
  };

  return (
    <div className="container mx-auto py-8 px-4 bg-white">
      {/* Titolo Principale */}
      <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
        Eventi Futuri
      </h2>

      {/* Tabs Sezione Superiore */}
      <div className="flex justify-center mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`flex-1 px-6 py-4 text-center text-sm font-semibold transition-colors duration-300 ${
              selectedTab === tab
                ? "bg-blue-800 text-white"
                : "text-blue-800 bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Filtri */}
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

      {/* Griglia Eventi */}
      <div
        className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-transform duration-500 ${
          animate ? "translate-y-5 opacity-0" : "opacity-100 translate-y-0"
        }`}
      >
        {currentEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white h-64 p-6 shadow-lg rounded-md flex flex-col justify-between hover:scale-105 transition-transform duration-300"
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
            <a
              href="#"
              className="text-blue-600 font-semibold mt-4 hover:underline"
            >
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
            onClick={() => handlePageClick(index + 1)}
            className={`w-10 h-10 rounded-md text-blue-800 font-semibold bg-white ${
              currentPage === index + 1
                ? "border-2 border-blue-600"
                : "hover:bg-blue-50"
            }`}
          >
            {index + 1}
          </button>
        ))}
        {currentPage < totalPages && (
          <button
            onClick={() => handlePageClick(currentPage + 1)}
            className="text-blue-600 font-bold hover:text-blue-800 transition duration-200"
          >
            Successiva →
          </button>
        )}
      </div>
    </div>
  );
};

export default EventiFuturi;
