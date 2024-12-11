import { FaYoutube, FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 px-4">
        {/**/}
        <div className="col-span-1 flex flex-col items-start">
          <div className="flex items-center mb-4">
            <h2 className="text-lg font-bold">Fondazione<br /> Castel Capuano</h2>
          </div>
          <hr className="w-full border-t border-gray-300 mb-4" />
          <p className="text-sm leading-relaxed">
            <strong>Dove siamo</strong> <br />
            Piazza Enrico De Nicola 2 - 80139 Napoli (NA) <br /> Centralino: 0165 - 22 37 262 / 0165 - 22 37 227
          </p>
        </div>

        {/* Contatti */}
        <div className="col-span-2">
          <h3 className="font-bold mb-2">Contatti</h3>
          <p className="text-sm">
            Segnalazioni sui contenuti: <br />
            <a
              href=""
              className="font-bold text-white hover:underline"
            >
              redazione@.it
            </a>
          </p>
          <p className="text-sm mt-2">
            Segnalazioni sul malfunzionamento del sito: <br />
            <a
              href="mailto:webmaster@giustizia.it"
              className="font-bold text-white hover:underline"
            >
              webmaster@.it
            </a>
          </p>
        </div>

        {/* PEC */}
        <div className="col-span-1">
          <h3 className="font-bold mb-2">Pec</h3>
          <p className="text-sm leading-relaxed">
            Indirizzi di posta elettronica certificata.
          </p>
        </div>

        {/* Social Icons */}
        <div className="col-span-1 flex flex-col items-start">
          <h3 className="font-bold mb-4">Seguici su</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" aria-label="YouTube" className="hover:text-gray-400">
              <FaYoutube />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-gray-400">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-400">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gray-400">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="Email" className="hover:text-gray-400">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
