import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import "swiper/css";

const Hero = () => {
  const swiperRef = useRef(null);

  // Dati aggiornati dagli articoli precedenti
  const newsData = [
    {
      date: "25 DICEMBRE 2024",
      title: "Auguri di Buon Natale e Buone Feste dalla Fondazione di Castel Capuano!",
      description:
        "La Fondazione di Castel Capuano augura a tutti voi un sereno Natale e uno splendido anno nuovo. Che queste festività portino gioia, pace e felicità nelle vostre case. Buon 2025 a tutti!",
      image: "/auguri.jpeg",
      link: "/auguri",
    },
    {
      date: "09 DICEMBRE 2024",
      title: "Concerto di Natale 2024 - XI Edizione",
      description: "Il tradizionale Concerto di Natale si terrà presso Castel Capuano.",
      image: "/2.png",
      link: "https://castelcapuano.vercel.app/articles1",
    },
  ];

  return (
    <section className="bg-white py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Header con Titolo e Pulsanti di Navigazione */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 md:mt-12 mb-4 md:mb-6">
          <h2 className="text-[32px] md:text-[46px] font-bold text-blue-900">
            In evidenza
          </h2>

          {/* Pulsanti di navigazione ridotti su mobile */}
          <div className="flex items-center space-x-4 md:space-x-6 mt-2 md:mt-0">
            <button 
              className="text-blue-700 hover:text-blue-900 transition text-[40px] md:text-[60px] font-bold"
              onClick={() => swiperRef.current?.swiper.slidePrev()}
            >
              &lt;
            </button>
            <button 
              className="text-blue-700 hover:text-blue-900 transition text-[40px] md:text-[60px] font-bold"
              onClick={() => swiperRef.current?.swiper.slideNext()}
            >
              &gt;
            </button>
          </div>
        </div>

        {/* Swiper Carousel ottimizzato per mobile */}
        <div className="relative">
          <Swiper
            ref={swiperRef}
            loop={true}
            spaceBetween={10}
            slidesPerView={1}
            className="relative"
          >
            {newsData.map((news, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full">
                  {/* Immagine ridimensionata su mobile */}
                  <div className="relative w-full md:w-1/2 h-[250px] sm:h-[350px] md:h-[450px] overflow-hidden shadow-lg">
                    <Image
                      src={news.image}
                      alt={news.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 hover:scale-105"
                      priority
                    />
                  </div>

                  {/* Testo con spaziature ridotte per mobile */}
                  <div className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-6 py-4">
                    <p className="text-gray-500 text-xs md:text-sm mb-2">{news.date}</p>
                    <h2 className="text-[28px] md:text-[44px] font-bold text-blue-900 mb-3 md:mb-4">
                      {news.title}
                    </h2>
                    <p className="text-gray-700 text-[16px] md:text-[21px] leading-[24px] md:leading-[31px] mb-4 md:mb-6">
                      {news.description}
                    </p>
                    <a href={news.link} target="_blank" rel="noopener noreferrer">
                      <button className="bg-blue-700 hover:bg-blue-900 text-white px-4 md:px-6 py-2 md:py-3 rounded-none transition shadow-md">
                        Leggi tutto
                      </button>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Link per tutte le notizie */}
        <div className="text-right mt-4 md:mt-6">
          <a href="/notizie" className="text-blue-700 hover:text-blue-900 transition text-sm font-medium">
            TUTTE LE NOTIZIE &gt;
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
