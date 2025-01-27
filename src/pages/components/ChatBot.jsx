import React, { useState, useEffect, useRef } from "react";
import { FiMessageSquare, FiX } from "react-icons/fi";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Benvenuto! Come posso aiutarti oggi?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
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
      <div className="fixed bottom-6 right-6 z-[100]">
        <button
          onClick={toggleChat}
          className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-xl hover:bg-blue-700 transition duration-300"
        >
          {isOpen ? <FiX size={28} /> : <FiMessageSquare size={28} />}
        </button>
      </div>

      {isOpen && isMobile && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-lg z-[99] animate-fadeInOverlay"></div>
      )}

      {isOpen && (
        <div
          className={`fixed ${
            isMobile
              ? "inset-0 w-full h-full"
              : "bottom-24 right-8 w-96 h-[600px] rounded-lg"
          } bg-white shadow-2xl flex flex-col z-[101] transition-all duration-500 ${
            isMobile ? "animate-fadeInMobile" : "animate-fadeInDesktop"
          }`}
        >
          <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <h3 className="text-lg font-semibold">ChatBot</h3>
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
                className={`mb-3 flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`p-3 rounded-xl max-w-xs shadow-md ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-800"
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
            <div className="flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Scrivi un messaggio..."
                className="flex-1 border border-gray-300 rounded-l-full p-2 text-sm focus:outline-none text-black"
              />
              <button
                onClick={() => sendMessage(input)}
                className="bg-blue-600 text-white px-6 rounded-r-full hover:bg-blue-700 transition duration-300"
              >
                Invia
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
