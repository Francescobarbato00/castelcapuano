import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import { useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Hero = () => {
  const swiperRef = useRef(null);

  const newsData = [
    {
      date: "10 DICEMBRE 2024",
      title: "Online il nuovo Portale della Fondazione di Castel Capuano!",
      description: "Ora disponibile per tutti i cittadini",
      image: "/home.jpg",
    },
    {
      date: "09 DICEMBRE 2024",
      title: "Concerto di Natale 2024 - XI Edizione",
      description:
        "Il tradizionale Concerto di Natale si terrà presso Castel Capuano.",
      image: "/2.png",
    },
    {
      date: "08 DICEMBRE 2024",
      title: "Nuovo portale Fondazione Castel Capuano",
      description:
        "Scopri tutte le funzionalità del nuovo portale per una giustizia più efficiente.",
      image: "/3.jpg",
    },
  ];

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4 relative">
        {/* Titolo della sezione con Pulsante */}
        <div className="section-header flex flex-col sm:flex-row justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold text-blue-900 text-center sm:text-left">
              In evidenza
            </h2>
            <div className="w-24 h-1 bg-blue-900 mt-2 mx-auto sm:mx-0"></div>
          </div>
          <div className="navigation-buttons mt-4 sm:mt-0">
            <div className="swiper-button-next">&gt;</div>
          </div>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          ref={swiperRef}
          modules={[Navigation, EffectFade]}
          navigation={{ nextEl: ".swiper-button-next" }}
          effect="fade"
          loop
          spaceBetween={0}
          slidesPerView={1}
          className="relative swiper-fix"
        >
          {newsData.map((news, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 w-full relative">
                {/* Immagine più grande su mobile */}
                <div className="relative w-full h-[400px] sm:h-[450px] lg:w-1/2 lg:h-[500px] shadow-lg">
                  <Image
                    src={news.image}
                    alt={news.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-none animated-image"
                    priority
                  />
                </div>

                {/* Testo */}
                <div className="text-center lg:text-left px-4 sm:px-8 py-4 lg:w-1/2 bg-white">
                  <p className="text-gray-500 text-sm sm:text-lg mb-2">
                    {news.date}
                  </p>
                  <h2 className="text-xl sm:text-3xl lg:text-5xl font-bold text-blue-900 mb-4 leading-snug">
                    {news.title}
                  </h2>
                  <p className="text-gray-700 text-sm sm:text-lg mb-6">
                    {news.description}
                  </p>
                  <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 sm:px-8 sm:py-3 rounded-none transition">
                    Leggi tutto
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx>{`
        /* Pulsante di Navigazione - Freccia Destra */
        .swiper-button-next {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          color: #1e3a8a;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .swiper-button-next:hover {
          color: #003366;
        }

        .swiper-button-next::after {
          content: "";
        }

        /* Risoluzione Sovrapposizione Slide */
        .swiper-fix .swiper-slide {
          opacity: 0;
          pointer-events: none;
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.5s ease;
        }

        .swiper-fix .swiper-slide-active {
          opacity: 1;
          pointer-events: auto;
          position: relative;
        }

        /* Effetto di ingresso per le immagini */
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .swiper-slide-active .animated-image {
          animation: fadeInScale 1s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;
