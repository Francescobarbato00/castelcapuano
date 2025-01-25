import { FaYoutube, FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Logo e Social Icons */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-4">
          {/* Logo */}
          <div className="mb-4 lg:mb-0">
            <h2 className="text-xl font-bold text-center lg:text-left">
              Fondazione Castel Capuano
            </h2>
          </div>
          {/* Social Icons */}
          <div className="flex space-x-6 text-2xl">
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

        {/* Divisore */}
        <hr className="border-t border-gray-400 mb-6" />

        {/* Sezioni: Dove siamo, Contatti, Pec */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-center md:text-left">
          {/* Dove siamo */}
          <div>
            <h3 className="font-bold mb-2">Dove siamo</h3>
            <p>
            Piazza Enrico De Nicola 2 - <br />
            80139 Napoli (NA)
            </p>
            <p className="mt-2">
              <strong>Centralino:</strong> <br /> 0165 - 22 37 262 / 0165 - 22 37 227
            </p>
          </div>

          {/* Contatti */}
          <div>
            <h3 className="font-bold mb-2">Contatti</h3>
            <p>
              Segnalazioni sui contenuti:<br />
              <a
                href="mailto:"
                className="font-bold text-white hover:underline"
              >
                info@fondazionecastelcapuano.org
              </a>
            </p>
            <p className="mt-2">
              Posta certificata:<br />
              <a
                href="mailto:"
                className="font-bold text-white hover:underline"
              >
                fondazionecastelcapuano@pec.it
              </a>
            </p>
          </div>

          {/* Pec */}
          <div>
            <h3 className="font-bold mb-2">Sito a cura di:</h3>
            <p>
              
              <a
               
                className="font-bold text-white hover:underline"
              >
                Antonella Ciriello
              </a>
            </p>
            <p className="mt-2">
              Collaboratori tecnici:<br />
              <a
               
                className="font-bold text-white hover:underline"
              >
                Domenico De Luca e Francesco Barbato
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
