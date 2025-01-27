import { useState, useEffect, useRef } from "react";
import { db } from "../../lib/firebase"; // Assicurati che il file firebase.js sia configurato
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import dayjs from "dayjs";
import "dayjs/locale/it"; // Localizzazione italiana

const Hero = () => {
  const [newsData, setNewsData] = useState([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    const fetchHighlightedNews = async () => {
      try {
        // ✅ Recupera e ordina le notizie per data (dalla più recente alla più vecchia)
        const q = query(collection(db, "highlighted_news"), orderBy("date", "desc"));
        const querySnapshot = await getDocs(q);
        const newsArray = querySnapshot.docs.map(doc => {
          const data = doc.data();
          let formattedDate = "Senza data";

          // ✅ Controlla se il campo `date` è un Timestamp Firestore
          if (data.date && data.date.seconds) {
            formattedDate = dayjs(data.date.seconds * 1000).locale("it").format("DD MMMM YYYY");
          } else if (typeof data.date === "string") {
            formattedDate = data.date;
          }

          return {
            id: doc.id,
            ...data,
            date: formattedDate,
          };
        });

        console.log("Notizie in evidenza caricate:", newsArray); // DEBUG
        setNewsData(newsArray);
      } catch (error) {
        console.error("Errore nel caricamento delle notizie in evidenza:", error);
      }
    };

    fetchHighlightedNews();
  }, []);

  return (
    <section className="bg-white py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 md:mt-12 mb-4 md:mb-6">
          <h2 className="text-[32px] md:text-[46px] font-bold text-blue-900">
            In evidenza
          </h2>

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

        <div className="relative">
          {newsData.length > 0 ? (
            <Swiper ref={swiperRef} loop={true} spaceBetween={10} slidesPerView={1} className="relative">
              {newsData.map((news) => (
                <SwiperSlide key={news.id}>
                  <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full">
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

                    <div className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-6 py-4">
                      <p className="text-gray-500 text-xs md:text-sm mb-2">{news.date}</p>
                      <h2 className="text-[28px] md:text-[44px] font-bold text-blue-900 mb-3 md:mb-4">
                        {news.title}
                      </h2>
                      <p className="text-gray-700 text-[16px] md:text-[21px] leading-[24px] md:leading-[31px] mb-4 md:mb-6">
                        {news.description}
                      </p>
                      <a href={`/notizie/${news.id}`}>
                        <button className="bg-blue-700 hover:bg-blue-900 text-white px-4 md:px-6 py-2 md:py-3 rounded-none transition shadow-md">
                          Leggi tutto
                        </button>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p className="text-center text-gray-500 py-6">Nessuna notizia in evidenza disponibile.</p>
          )}
        </div>

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
