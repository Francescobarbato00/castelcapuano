import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { checkAuth } from "../lib/auth";
import { db } from "../lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import dayjs from "dayjs";
import "dayjs/locale/it"; // Localizzazione italiana

export default function AddAgendaEvent() {
  const [user, setUser] = useState(null);
  const [newEvent, setNewEvent] = useState({
    title: "",
    location: "",
    time: "",
    date: dayjs().format("YYYY-MM-DD"),
    day: "",      // Aggiunto campo giorno
    month: "",    // Aggiunto campo mese
    weekday: "",  // Aggiunto campo giorno della settimana
  });

  const [showNotification, setShowNotification] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = checkAuth(setUser);
    return () => unsubscribe();
  }, []);

  const handleAddEvent = async () => {
    if (!newEvent.title || !newEvent.location || !newEvent.time || !newEvent.date) {
      alert("Compila tutti i campi!");
      return;
    }

    // Genera i dettagli del giorno, mese e giorno della settimana in automatico dalla data selezionata
    const selectedDate = dayjs(newEvent.date).locale("it");
    const formattedEvent = {
      ...newEvent,
      day: selectedDate.format("DD"),
      month: selectedDate.format("MMM").toUpperCase(),
      weekday: selectedDate.format("dddd").toUpperCase(),
    };

    await addDoc(collection(db, "agenda_events"), formattedEvent);

    // Mostra la notifica di successo
    setShowNotification(true);

    // Pulisce il form dopo l'aggiunta
    setNewEvent({
      title: "",
      location: "",
      time: "",
      date: dayjs().format("YYYY-MM-DD"),
      day: "",
      month: "",
      weekday: "",
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
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">📅 Aggiungi Evento Agenda</h1>

      <button
        onClick={() => router.push("/admin")}
        className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded mb-6 transition-all"
      >
        🔙 Torna alla Dashboard
      </button>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Titolo Evento"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          className="border p-3 rounded w-full"
        />
        <input
          type="text"
          placeholder="Luogo"
          value={newEvent.location}
          onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
          className="border p-3 rounded w-full"
        />
        <input
          type="time"
          placeholder="Orario"
          value={newEvent.time}
          onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
          className="border p-3 rounded w-full"
        />
        <input
          type="date"
          value={newEvent.date}
          onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
          className="border p-3 rounded w-full"
        />
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
