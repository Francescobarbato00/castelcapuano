import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header
      className="flex items-center justify-between bg-white shadow-md p-4 sticky top-0 z-50"
    >
      {/* Logo a sinistra con effetto hover e click */}
      <div className="flex-shrink-0">
        <Link href="/" passHref>
          <div className="cursor-pointer hover:scale-110 transition-transform duration-300">
            <Image src="/header.png" alt="Logo" width={250} height={80} />
          </div>
        </Link>
      </div>

      {/* Contenitore dei pulsanti centrato */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <nav className="flex space-x-6">
          <a
            href="#"
            className="text-gray-700 hover:text-blue-900 transition duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-900 transition duration-300"
          >
            Struttura
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-900 transition duration-300"
          >
            Organi
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-900 transition duration-300"
          >
            Eventi
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-900 transition duration-300"
          >
            Documenti
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-900 transition duration-300"
          >
            Notizie
          </a>
        </nav>
      </div>

      {/* Icona lente d'ingrandimento a destra */}
      <div>
        <button className="text-gray-600 hover:text-blue-900 transition duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m1.8-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
