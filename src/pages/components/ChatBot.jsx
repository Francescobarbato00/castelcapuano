import React, { useState, useEffect, useRef } from "react";
import { FiMessageSquare, FiX } from "react-icons/fi";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Benvenuto! Come posso aiutarti oggi?", sender: "bot" },
  ]);
  const [isMobile, setIsMobile] = useState(false);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth", // Effetto di auto-scroll morbido
      });
    }
  }, [messages]);

  useEffect(() => {
    if (isMobile && isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen, isMobile]);

  const toggleChat = () => setIsOpen((prev) => !prev);

  const sendMessage = (message) => {
    if (message.trim()) {
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), text: message, sender: "user" },
      ]);
      setTimeout(() => {
        const botReply = getBotReply(message);
        if (botReply) {
          setMessages((prev) => [
            ...prev,
            { id: Date.now() + 1, text: botReply, sender: "bot" },
          ]);
        }
      }, 1000);
    }
  };

  const getBotReply = (message) => {
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes("chi siamo")) {
      return "Siamo la Fondazione Castel Capuano. La Fondazione ha l'obiettivo di creare un polo di alta formazione giuridico forense.";
    }
    if (lowerMessage.includes("dove siamo")) {
      return "Sede: La Fondazione ha la propria sede legale in Napoli (NA), presso il complesso di Castel Capuano, Piazza Enrico De Nicola, 2, CAP: 80139.";
    }
    if (lowerMessage.includes("contattarci")) {
      return "Telefono: 081 / 2237262 - 081 2237227. Email: info@fondazionecastelcapuano.org.";
    }
    return "Grazie per il tuo messaggio. Ti risponderemo al più presto!";
  };

  return (
    <>
      {/* Bottone per aprire la chat */}
      <div className="fixed bottom-6 right-6 z-[100]">
        <button
          onClick={toggleChat}
          className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-xl hover:bg-blue-700 transition duration-300"
        >
          {isOpen ? <FiX size={28} /> : <FiMessageSquare size={28} />}
        </button>
      </div>

      {/* Overlay corretto */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-10 z-[99] animate-fadeInOverlay"></div>
      )}

      {/* Finestra della chat (Fullscreen su Mobile, compatta su Desktop) */}
      {isOpen && (
        <div
          className={`fixed ${
            isMobile
              ? "inset-0 w-full h-full" // FULLSCREEN SU MOBILE
              : "bottom-20 right-6 w-[300px] h-[350px]" // COMPATTO SU DESKTOP
          } rounded-lg bg-white shadow-lg flex flex-col z-[100] transition-all duration-500 ${
            isMobile ? "animate-fadeInMobile" : "animate-slideInUp"
          }`}
        >
          {/* Header della chat */}
          <div className="bg-blue-600 text-white p-3 flex justify-between items-center rounded-t-lg">
            <h3 className="text-md font-semibold">ChatBot</h3>
            <button onClick={toggleChat} className="hover:opacity-80 transition">
              <FiX size={24} />
            </button>
          </div>

          {/* Contenitore messaggi con scroll più fluido */}
          <div
            ref={chatContainerRef}
            className="flex-1 p-3 overflow-y-auto bg-gray-100 text-sm"
            style={{
              maxHeight: isMobile ? "calc(100% - 100px)" : "calc(100% - 80px)",
              scrollbarWidth: "thin",
              scrollbarColor: "#999 #f1f1f1",
            }}
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`mb-3 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`p-2 rounded-md max-w-xs shadow-sm ${
                    msg.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
                  } text-sm`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Bottoni delle domande rapide */}
          <div className="p-3 border-t border-gray-300 bg-white flex justify-center gap-2 flex-wrap">
            <button
              onClick={() => sendMessage("Chi siamo?")}
              className="bg-blue-500 text-white px-3 py-2 rounded-full text-sm hover:bg-blue-600 transition"
            >
              Chi siamo?
            </button>
            <button
              onClick={() => sendMessage("Dove siamo?")}
              className="bg-blue-500 text-white px-3 py-2 rounded-full text-sm hover:bg-blue-600 transition"
            >
              Dove siamo?
            </button>
            <button
              onClick={() => sendMessage("Come contattarci?")}
              className="bg-blue-500 text-white px-3 py-2 rounded-full text-sm hover:bg-blue-600 transition"
            >
              Contatti
            </button>
          </div>
        </div>
      )}

      {/* Effetti animazione migliorati */}
      <style jsx>{`
        @keyframes fadeInOverlay {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideInUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes fadeInMobile {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-fadeInOverlay {
          animation: fadeInOverlay 0.2s ease-in-out forwards;
        }
        .animate-slideInUp {
          animation: slideInUp 0.3s ease-out forwards;
        }
        .animate-fadeInMobile {
          animation: fadeInMobile 0.4s ease-out forwards;
        }
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-thumb {
          background: #999;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
      `}</style>
    </>
  );
};

export default ChatBot;
