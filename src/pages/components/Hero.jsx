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
          {/* Pulsante di navigazione singolo */}
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
              <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-4 lg:gap-8 w-full">
                {/* Immagine */}
                <div className="relative w-full h-[300px] sm:h-[400px] lg:w-1/2 lg:h-[500px] shadow-lg">
                  <Image
                    src={news.image}
                    alt={news.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                    priority
                  />
                </div>

                {/* Testo */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-8 py-4 bg-white">
                  <p className="text-gray-500 text-sm sm:text-lg mb-2">{news.date}</p>
                  <h2 className="text-xl sm:text-3xl lg:text-5xl font-bold text-blue-900 mb-4">
                    {news.title}
                  </h2>
                  <p className="text-gray-700 text-sm sm:text-lg mb-6">
                    {news.description}
                  </p>
                  <a href={news.link} target="_blank" rel="noopener noreferrer">
                    <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 sm:px-8 sm:py-3 rounded transition">
                      Leggi tutto
                    </button>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx>{`
        /* Pulsante di Navigazione */
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

        /* Slide */
        .swiper-fix .swiper-slide {
          position: relative;
          opacity: 1;
          pointer-events: auto;
          width: 100%;
          height: auto;
          display: flex;
          align-items: stretch;
          justify-content: center;
        }

        .swiper-fix .swiper-slide-active {
          position: relative;
        }

        /* Specifico per Mobile */
        @media (max-width: 768px) {
          .swiper-slide {
            flex-direction: column; /* Disposizione verticale */
            align-items: center; /* Centrare tutto */
          }

          .swiper-button-next {
            width: 32px;
            height: 32px;
            font-size: 18px;
            border: 1px solid #1e3a8a;
            border-radius: 50%;
            background-color: white;
          }

          .swiper-button-next:hover {
            color: #003366;
          }

          .section-header {
            flex-direction: column;
            text-align: center;
          }

          .text-center {
            text-align: center !important;
          }
        }

        /* Effetto di Ingresso per le Immagini */
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
          animation: fadeInScale 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;
