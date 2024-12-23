import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const NotizieList = () => {
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
          <Link href={`/articolo/${item.id}`} key={item.id}>
            <div
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
          </Link>
        ))}
      </div>
    </section>
  );
};

export default NotizieList;
