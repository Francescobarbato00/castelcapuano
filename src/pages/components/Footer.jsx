import { FaYoutube, FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12"> {/* Aumentata l'altezza */}
      <div className="container mx-auto px-6">
        
        {/* Logo e Social Icons */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left mb-8">
          
          {/* Logo e Informazioni */}
          <div>
            <h2 className="text-3xl font-bold"
                style={{ fontFamily: '"Titillium Web", Geneva, Tahoma, sans-serif', fontWeight: 600, fontSize: "36px", lineHeight: "42px" }}>
              Fondazione Castel Capuano
            </h2>
          </div>
        </div>

        {/* Divisore */}
        <hr className="border-t border-gray-400 mb-6" />

        {/* Sezioni: Dove siamo, Contatti, Pec */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-base text-center md:text-left">
          
          {/* Dove siamo */}
          <div>
            <h3 className="font-bold mb-2">Dove siamo</h3>
            <p>Piazza Enrico De Nicola 2 - <br /> 80139 Napoli (NA)</p>
            <p className="mt-2"><strong>Centralino:</strong> <br /> 0165 - 22 37 262 / 0165 - 22 37 227</p>
          </div>

          {/* Contatti */}
          <div>
            <h3 className="font-bold mb-2">Contatti</h3>
            <p>Segnalazioni sui contenuti:<br />
              <a href="mailto:info@fondazionecastelcapuano.org" className="font-bold text-white hover:underline">
                info@fondazionecastelcapuano.org
              </a>
            </p>
            <p className="mt-2">Posta certificata:<br />
              <a href="mailto:fondazionecastelcapuano@pec.it" className="font-bold text-white hover:underline">
                fondazionecastelcapuano@pec.it
              </a>
            </p>
          </div>

          {/* Pec */}
          <div>
            <h3 className="font-bold mb-2">Sito a cura di:</h3>
            <p><a className="font-bold text-white hover:underline">Antonella Ciriello</a></p>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
