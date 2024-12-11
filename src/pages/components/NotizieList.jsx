import Image from "next/image";
import { useEffect, useState } from "react";

const NotizieList = () => {
  const newsItems = [
    {
      id: 1,
      category: "CULTURA",
      title: "Restauro completato della Biblioteca Alfredo De Marsico",
      date: "12 Dicembre 2024",
      author: "Redazione",
      image: "/foto.jpg",
      description:
        "La storica biblioteca è stata riportata all'antico splendore dopo anni di lavori di restauro.",
    },
    {
      id: 2,
      category: "EVENTI",
      title: "Convegno internazionale: Giustizia e Innovazione Digitale",
      date: "10 Dicembre 2024",
      author: "Redazione",
      image: "/foto.jpg",
      description:
        "Un incontro con esperti internazionali per discutere delle nuove tecnologie applicate alla giustizia.",
    },
    {
      id: 3,
      category: "FORMAZIONE",
      title: "Nuovi corsi per avvocati sulla mediazione giuridica",
      date: "8 Dicembre 2024",
      author: "Redazione",
      image: "/foto.jpg",
      description:
        "La Fondazione Castel Capuano promuove nuovi percorsi formativi per professionisti del settore legale.",
    },
    {
      id: 4,
      category: "INNOVAZIONE",
      title: "Nuova piattaforma digitale per processi telematici",
      date: "7 Dicembre 2024",
      author: "Redazione",
      image: "/foto.jpg",
      description:
        "Lancio di una piattaforma innovativa per rendere più veloce il processo telematico in ambito giuridico.",
    },
    {
      id: 5,
      category: "GIUSTIZIA",
      title: "Apertura del nuovo anno giudiziario 2025",
      date: "6 Dicembre 2024",
      author: "Redazione",
      image: "/foto.jpg",
      description:
        "Cerimonia di apertura del nuovo anno giudiziario con la presenza delle alte cariche della giustizia.",
    },
    {
      id: 6,
      category: "MOSTRE",
      title: "Esposizione storica su Castel Capuano",
      date: "5 Dicembre 2024",
      author: "Redazione",
      image: "/foto.jpg",
      description:
        "Una mostra dedicata alla storia e all'arte contenuta nel celebre complesso di Castel Capuano.",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="container mx-auto px-4 py-8 bg-white md:bg-transparent">
      {/* Titolo principale */}
      <h1 className="text-4xl font-bold text-blue-900 mb-6 text-center">
        TUTTE LE NOTIZIE
      </h1>
      <hr className="border-gray-300 mb-8" />

      {/* Griglia delle notizie */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {newsItems.map((item, index) => (
          <div
            key={item.id}
            className={`bg-white shadow-md rounded overflow-hidden transform hover:-translate-y-2 hover:shadow-xl transition-transform duration-500 delay-${
              index * 100
            }`}
          >
            {/* Immagine */}
            <div className="relative h-56 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute bottom-2 left-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
                {item.category}
              </div>
            </div>

            {/* Contenuto */}
            <div className="p-4">
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 mb-2 italic">
                {item.date} • di{" "}
                <span className="text-blue-700">{item.author}</span>
              </p>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NotizieList;
