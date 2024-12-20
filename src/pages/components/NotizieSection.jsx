import Image from "next/image";
import Link from "next/link";

const NotizieSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Titolo della sezione e divisore */}
        <div className="mb-8 text-left">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">Notizie in primo piano</h2>
          <div className="w-16 h-1 bg-blue-900"></div>
        </div>

        {/* Griglia degli articoli */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Articolo 1 */}
          <Link href="/articles1" passHref>
            <div className="cursor-pointer flex flex-col items-start text-left group">
              <div className="w-full h-[350px] relative overflow-hidden shadow-md mb-4">
                <Image
                  src="/2.png"
                  alt="Concerto di Natale 2024"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <p className="text-sm text-gray-500 mb-2">10/12/2024</p>
              <h3 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-blue-700">
                Concerto di Natale 2024 - XI Edizione
              </h3>
              <p className="text-gray-700">
                Il tradizionale Concerto di Natale si terrà presso Castel Capuano, celebrando la XI edizione con musiche classiche e cori natalizi.
              </p>
            </div>
          </Link>

          {/* Articolo 2 */}
          <Link href="/article2" passHref>
            <div className="cursor-pointer flex flex-col items-start text-left group">
              <div className="w-full h-[350px] relative overflow-hidden shadow-md mb-4">
                <Image
                  src="/1.png"
                  alt="Tour Virtuale"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <p className="text-sm text-gray-500 mb-2">09/12/2024</p>
              <h3 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-blue-700">
                Tour Virtuale di Castel Capuano
              </h3>
              <p className="text-gray-700">
                Segui una visita guidata di Castel Capuano, tutto virtualmente e comodamente da casa.
              </p>
            </div>
          </Link>

          {/* Articolo 3 */}
          <Link href="/article3" passHref>
            <div className="cursor-pointer flex flex-col items-start text-left group">
              <div className="w-full h-[350px] relative overflow-hidden shadow-md mb-4">
                <Image
                  src="/3.jpg"
                  alt="Salone"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <p className="text-sm text-gray-500 mb-2">07/12/2024</p>
              <h3 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-blue-700">
                Castel Capuano - Scuola Superiore della Magistratura
              </h3>
              <p className="text-gray-700">
                Castel Capuano, sede storica ed ora sede della formazione della Magistratura.
              </p>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default NotizieSection;
