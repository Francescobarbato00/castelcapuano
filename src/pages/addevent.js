import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { checkAuth } from "../lib/auth";
import { db } from "../lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import dayjs from "dayjs";
import "dayjs/locale/it"; // Localizzazione italiana

export default function AddEvent() {
  const [user, setUser] = useState(null);
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    date: dayjs().format("YYYY-MM-DD"),
    category: "",
  });

  const [showNotification, setShowNotification] = useState(false); // Stato per la notifica
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = checkAuth(setUser);
    return () => unsubscribe();
  }, []);

  const handleAddEvent = async () => {
    if (!newEvent.title || !newEvent.description || !newEvent.category) {
      alert("Compila tutti i campi obbligatori!");
      return;
    }

    // Formattiamo la data in formato Timestamp per Firebase
    const formattedDate = dayjs(newEvent.date).toDate();

    await addDoc(collection(db, "events"), { 
      ...newEvent, 
      date: formattedDate 
    });

    // Mostra la notifica di successo
    setShowNotification(true);

    // Pulisce il form dopo l'aggiunta
    setNewEvent({
      title: "",
      description: "",
      date: dayjs().format("YYYY-MM-DD"),
      category: "",
    });

    // Dopo 3 secondi, reindirizza alla dashboard
    setTimeout(() => {
      router.push("/admin");
    }, 3000);
  };

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Accesso Negato</h1>
        <p className="text-gray-700">Devi essere autenticato per accedere.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">📅 Aggiungi Evento</h1>

      <button
        onClick={() => router.push("/admin")}
        className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded mb-6 transition-all"
      >
        🔙 Torna alla Dashboard
      </button>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Titolo"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          className="border p-3 rounded w-full"
        />
        <textarea
          placeholder="Descrizione"
          value={newEvent.description}
          onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
          className="border p-3 rounded w-full h-32"
        />
        <input
          type="date"
          value={newEvent.date}
          onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
          className="border p-3 rounded w-full"
        />
        <select
          value={newEvent.category}
          onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}
          className="border p-3 rounded w-full"
        >
          <option value="">Seleziona Categoria</option>
          <option value="Convegno">Convegno</option>
          <option value="Evento">Evento</option>
        </select>
        <button
          onClick={handleAddEvent}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded w-full transition-all shadow-md"
        >
          ✅ Aggiungi Evento
        </button>
      </div>

      {/* 📌 NOTIFICA DI SUCCESSO */}
      {showNotification && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg animate-bounce">
          ✅ Evento aggiunto con successo!
          <button onClick={() => setShowNotification(false)} className="ml-4 text-sm font-bold">
            ✖
          </button>
        </div>
      )}
    </div>
  );
}
