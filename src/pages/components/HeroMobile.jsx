import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import "swiper/css";

const HeroMobile = () => {
  const swiperRef = useRef(null);

  const newsData = [
    {
      date: "25 DICEMBRE 2024",
      title: "Auguri di Buon Natale e Buone Feste dalla Fondazione di Castel Capuano!",
      image: "/auguri.jpeg",
      link: "/auguri",
    },
    {
      date: "09 DICEMBRE 2024",
      title: "Concerto di Natale 2024 - XI Edizione",
      image: "/2.png",
      link: "https://castelcapuano.vercel.app/articles1",
    },
  ];

  return (
    <section className="bg-white py-6 mt-4">
      <div className="container mx-auto px-4 relative">

        {/* Titolo e Navigazione */}
        <div className="flex justify-between items-center mb-4 px-1">
          <h2 className="text-[20px] font-bold text-blue-900 uppercase font-['Titillium_Web']">
            In evidenza
          </h2>
          
          {/* Pulsanti di navigazione */}
          <div className="flex items-center space-x-3">
            <button 
              className="text-blue-700 hover:text-blue-900 transition text-[24px] font-bold"
              onClick={() => swiperRef.current?.swiper.slidePrev()}
            >
              &lt;
            </button>
            <button 
              className="text-blue-700 hover:text-blue-900 transition text-[24px] font-bold"
              onClick={() => swiperRef.current?.swiper.slideNext()}
            >
              &gt;
            </button>
          </div>
        </div>

        {/* Swiper Carousel */}
        <Swiper ref={swiperRef} loop={true} spaceBetween={10} slidesPerView={1} className="relative">
          {newsData.map((news, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                
                {/* Immagine con altezza maggiore su mobile */}
                <div className="relative w-full h-[300px] sm:h-[350px] overflow-hidden">
                  <Image
                    src={news.image}
                    alt={news.title}
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                </div>

                {/* Testo - solo titolo e data */}
                <div className="px-4 py-4">
                  <p className="text-gray-500 text-xs uppercase">{news.date}</p>
                  <h2 className="text-[32px] font-bold text-[rgb(9,54,150)] leading-[40px] font-['Titillium_Web'] mt-1">
                    {news.title}
                  </h2>

                  {/* Bottone "Leggi tutto" più grande e quadrato */}
                  <a href={news.link} className="block mt-4">
                    <button className="bg-blue-700 hover:bg-blue-900 text-white px-6 py-3 text-[18px] font-bold rounded-none transition shadow-md">
                      Leggi tutto
                    </button>
                  </a>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Link "Tutte le notizie" */}
        <div className="text-right mt-4">
          <a href="/notizie" className="text-blue-700 hover:text-blue-900 transition text-sm font-semibold">
            TUTTE LE NOTIZIE &gt;
          </a>
        </div>

      </div>
    </section>
  );
};

export default HeroMobile;
