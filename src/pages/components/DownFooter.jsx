import { 
  FaFacebookF, 
  FaLinkedinIn, 
  FaTelegramPlane, 
  FaYoutube, 
  FaFlickr, 
  FaInstagram, 
  FaTwitter, 
  FaEnvelope, 
  FaRss 
} from "react-icons/fa";

const DownFooter = () => {
  return (
    <div className="bg-blue-800 text-white py-6"> {/* Footer più alto */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        
        {/* Testo allineato a sinistra e responsive */}
        <div className="flex flex-wrap justify-center md:justify-start items-center text-center md:text-left w-full md:w-auto space-x-2 md:space-x-4">
          <span className="font-bold text-lg leading-6"
            style={{ fontFamily: '"Titillium Web", sans-serif', fontWeight: 600 }}>
            Fondazione Castel Capuano
          </span>
          <span className="text-base leading-6"
            style={{ fontFamily: '"Titillium Web", sans-serif', fontWeight: 300 }}>
            Piazza Enrico De Nicola 2 - 80139 Napoli (NA)
          </span>
          <span className="text-base leading-6"
            style={{ fontFamily: '"Titillium Web", sans-serif', fontWeight: 300 }}>
            Centralino: <a href="tel:+3906476111" className="hover:underline">
              0165 - 22 37 262 / 0165 - 22 37 227
            </a>
          </span>
        </div>

        {/* Icone social allineate a destra */}
        <div className="flex space-x-5 mt-4 md:mt-0">
          <a href="#" aria-label="Facebook" className="hover:text-gray-300"><FaFacebookF size={20} /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-gray-300"><FaLinkedinIn size={20} /></a>
          <a href="#" aria-label="Telegram" className="hover:text-gray-300"><FaTelegramPlane size={20} /></a>
          <a href="#" aria-label="YouTube" className="hover:text-gray-300"><FaYoutube size={20} /></a>
          <a href="#" aria-label="Flickr" className="hover:text-gray-300"><FaFlickr size={20} /></a>
          <a href="#" aria-label="Instagram" className="hover:text-gray-300"><FaInstagram size={20} /></a>
          <a href="#" aria-label="Twitter" className="hover:text-gray-300"><FaTwitter size={20} /></a>
          <a href="#" aria-label="Email" className="hover:text-gray-300"><FaEnvelope size={20} /></a>
          <a href="#" aria-label="RSS" className="hover:text-gray-300"><FaRss size={20} /></a>
        </div>

      </div>
    </div>
  );
};

export default DownFooter;
