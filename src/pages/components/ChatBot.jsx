import React, { useState, useEffect, useRef } from "react";
import { FiMessageSquare, FiX } from "react-icons/fi";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Benvenuto! Come posso aiutarti oggi?", sender: "bot" },
  ]);
  const [isMobile, setIsMobile] = useState(false);
  const [chatSize, setChatSize] = useState("w-80 h-[500px]");
  const chatContainerRef = useRef(null);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);

      if (width < 768) {
        setChatSize("w-full h-full");
      } else if (width < 1024) {
        setChatSize("w-72 h-[450px] max-w-[320px]");
      } else if (width < 1280) {
        setChatSize("w-80 h-[500px] max-w-[350px]");
      } else {
        setChatSize("w-[350px] h-[500px] max-w-[380px]");
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

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

  const handlePredefinedQuestion = (question) => {
    sendMessage(question);
  };

  return (
    <>
      <div className="fixed bottom-8 right-6 z-[90]"> {/* Messo z-[90] per non coprire header */}
        <button
          onClick={toggleChat}
          className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-xl hover:bg-blue-700 transition duration-300"
        >
          {isOpen ? <FiX size={28} /> : <FiMessageSquare size={28} />}
        </button>
      </div>

      {isOpen && isMobile && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-lg z-[89] animate-fadeInOverlay"></div>
      )}

      {isOpen && (
        <div
          className={`fixed ${
            isMobile
              ? "inset-0 w-full h-full"
              : `bottom-28 right-8 ${chatSize} rounded-lg`
          } bg-white shadow-2xl flex flex-col z-[80] transition-all duration-500 ${
            isMobile ? "animate-fadeInMobile" : "animate-fadeInDesktop"
          }`}
        >
          <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <h3 className="text-lg font-semibold">Fondazione ChatBot</h3>
            <button onClick={toggleChat} className="hover:opacity-80 transition">
              <FiX size={22} />
            </button>
          </div>

          <div
            ref={chatContainerRef}
            className="flex-1 p-4 overflow-y-auto bg-gray-100"
            style={{ scrollBehavior: "smooth" }}
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`mb-3 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`p-3 rounded-xl max-w-xs shadow-md ${
                    msg.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 border-t border-gray-300 bg-white">
            <div className="flex flex-wrap gap-2 mb-3">
              <button
                onClick={() => handlePredefinedQuestion("Chi siamo?")}
                className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-600 transition"
              >
                Chi siamo?
              </button>
              <button
                onClick={() => handlePredefinedQuestion("Dove siamo?")}
                className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-600 transition"
              >
                Dove siamo?
              </button>
              <button
                onClick={() => handlePredefinedQuestion("Come contattarci?")}
                className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-600 transition"
              >
                Come contattarci?
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInOverlay {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fadeInDesktop {
          from {
            transform: translateY(50px) scale(0.9);
            opacity: 0;
          }
          to {
            transform: translateY(0) scale(1);
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
          animation: fadeInOverlay 0.4s ease-in-out forwards;
        }
        .animate-fadeInDesktop {
          animation: fadeInDesktop 0.4s ease-out forwards;
        }
        .animate-fadeInMobile {
          animation: fadeInMobile 0.5s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default ChatBot;
