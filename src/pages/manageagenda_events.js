import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { checkAuth } from "../lib/auth";
import { db } from "../lib/firebase";
import { collection, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import dayjs from "dayjs";
import "dayjs/locale/it"; // Localizzazione italiana

export default function ManageAgendaEvents() {
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([]);
  const [editEvent, setEditEvent] = useState(null);
  const [showNotification, setShowNotification] = useState({ type: "", message: "" });
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = checkAuth(setUser);
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      const fetchEvents = async () => {
        const eventsCollection = collection(db, "agenda_events");
        const eventsSnapshot = await getDocs(eventsCollection);
        setEvents(eventsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      };
      fetchEvents();
    }
  }, [user]);

  const handleDeleteEvent = async (id) => {
    if (!confirm("Sei sicuro di voler eliminare questo evento?")) return;

    await deleteDoc(doc(db, "agenda_events", id));
    setEvents(events.filter(event => event.id !== id));

    setShowNotification({ type: "delete", message: "Evento eliminato con successo!" });

    setTimeout(() => {
      setShowNotification({ type: "", message: "" });
    }, 3000);
  };

  const handleEditEvent = async () => {
    if (!editEvent.title || !editEvent.location || !editEvent.time || !editEvent.date) {
      alert("Compila tutti i campi!");
      return;
    }

    const eventRef = doc(db, "agenda_events", editEvent.id);
    await updateDoc(eventRef, { 
      ...editEvent, 
      date: dayjs(editEvent.date).format("YYYY-MM-DD") // ✅ Converte la data in formato Firestore
    });
    
    setEvents(events.map(event => (event.id === editEvent.id ? editEvent : event)));
    setEditEvent(null);

    setShowNotification({ type: "edit", message: "Modifiche salvate con successo!" });

    setTimeout(() => {
      setShowNotification({ type: "", message: "" });
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
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800">📅 Gestione Eventi Agenda</h1>
        <button
          onClick={() => router.push("/admin")}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded transition-all"
        >
          🔙 Torna alla Dashboard
        </button>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        {events.length === 0 ? (
          <p className="text-center text-gray-600">Nessun evento disponibile.</p>
        ) : (
          events.map((event) => (
            <div key={event.id} className="border-b py-4 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-lg">{event.title}</h3>
                <p className="text-sm text-gray-600">{event.location} - {event.time} - {event.date}</p>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => setEditEvent(event)} 
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                >
                  ✏️ Modifica
                </button>
                <button 
                  onClick={() => handleDeleteEvent(event.id)} 
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                  🗑️ Elimina
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* MODAL PER MODIFICA EVENTO */}
      {editEvent && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">✏️ Modifica Evento</h2>
              <button
                onClick={() => setEditEvent(null)}
                className="text-gray-600 hover:text-gray-800 text-lg"
              >
                ✖
              </button>
            </div>
            <input
              type="text"
              value={editEvent.title}
              onChange={(e) => setEditEvent({ ...editEvent, title: e.target.value })}
              className="border p-2 rounded w-full mb-2"
            />
            <input
              type="text"
              value={editEvent.location}
              onChange={(e) => setEditEvent({ ...editEvent, location: e.target.value })}
              className="border p-2 rounded w-full mb-2"
            />
            <input
              type="time"
              value={editEvent.time}
              onChange={(e) => setEditEvent({ ...editEvent, time: e.target.value })}
              className="border p-2 rounded w-full mb-2"
            />
            <input
              type="date"
              value={editEvent.date}
              onChange={(e) => setEditEvent({ ...editEvent, date: e.target.value })}
              className="border p-2 rounded w-full mb-2"
            />
            <button
              onClick={handleEditEvent}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-full transition-all"
            >
              ✅ Salva Modifiche
            </button>
          </div>
        </div>
      )}

      {/* NOTIFICA */}
      {showNotification.type && (
        <div
          className={`fixed top-5 right-5 px-4 py-3 rounded-lg shadow-lg transition-all ${
            showNotification.type === "edit" ? "bg-blue-500" : "bg-red-500"
          } text-white`}
        >
          {showNotification.message}
          <button
            onClick={() => setShowNotification({ type: "", message: "" })}
            className="ml-4 text-sm font-bold"
          >
            ✖
          </button>
        </div>
      )}
    </div>
  );
}
