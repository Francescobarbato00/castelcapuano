import React, { useState } from "react";
import { FiMessageSquare, FiX } from "react-icons/fi";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Benvenuto! Come posso aiutarti oggi?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const toggleChat = () => setIsOpen((prev) => !prev);

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { id: Date.now(), text: input, sender: "user" }]);
      setInput("");
      // Risposta del bot dopo un breve ritardo
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            text: "Grazie per il tuo messaggio. Ti risponderemo al più presto!",
            sender: "bot",
          },
        ]);
      }, 1000);
    }
  };

  return (
    <>
      {/* Icona Chat */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={toggleChat}
          className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-blue-700 transition duration-300"
        >
          {isOpen ? <FiX size={28} /> : <FiMessageSquare size={28} />}
        </button>
      </div>

      {/* Finestra Chat */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-8 w-80 h-96 bg-white shadow-2xl rounded-lg flex flex-col z-50 animate-slideUp"
          style={{ animation: "slideUp 0.3s ease-in-out" }}
        >
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="text-lg font-semibold">ChatBot</h3>
            <button onClick={toggleChat}>
              <FiX size={20} />
            </button>
          </div>

          {/* Messaggi */}
          <div className="flex-1 p-3 overflow-y-auto bg-gray-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`mb-2 flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`p-2 rounded-lg max-w-xs ${
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

          {/* Input */}
          <div className="p-3 border-t border-gray-200 flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Scrivi un messaggio..."
              className="flex-1 border rounded-l-lg p-2 text-sm focus:outline-none"
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white px-4 rounded-r-lg hover:bg-blue-700 transition duration-300"
            >
              Invia
            </button>
          </div>
        </div>
      )}

      {/* Animazione CSS */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default ChatBot;
