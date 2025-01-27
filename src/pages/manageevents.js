import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { checkAuth } from "../lib/auth";
import { db } from "../lib/firebase";
import { collection, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import dayjs from "dayjs";
import "dayjs/locale/it"; // Localizzazione italiana

export default function ManageEvents() {
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([]);
  const [editEvent, setEditEvent] = useState(null);
  const [showNotification, setShowNotification] = useState({ type: "", message: "" });
  const router = useRouter();

  // 📌 Controllo autenticazione
  useEffect(() => {
    const unsubscribe = checkAuth(setUser);
    return () => unsubscribe();
  }, []);

  // 📌 Caricamento eventi da Firestore
  useEffect(() => {
    if (user) {
      const fetchEvents = async () => {
        const eventsCollection = collection(db, "events");
        const eventsSnapshot = await getDocs(eventsCollection);
        setEvents(eventsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          date: doc.data().date?.seconds
            ? dayjs(doc.data().date.toDate()).locale("it").format("YYYY-MM-DD")
            : doc.data().date || "",
        })));
      };
      fetchEvents();
    }
  }, [user]);

  // 🔹 Funzione per generare lo slug automaticamente dal titolo
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s]/g, "") // Rimuove caratteri speciali
      .replace(/\s+/g, "-"); // Sostituisce gli spazi con trattini
  };

  // 🗑️ Eliminazione evento con conferma
  const handleDeleteEvent = async (id) => {
    if (!confirm("Sei sicuro di voler eliminare questo evento?")) return;

    await deleteDoc(doc(db, "events", id));
    setEvents(events.filter(event => event.id !== id));

    setShowNotification({ type: "delete", message: "Evento eliminato con successo!" });

    setTimeout(() => {
      setShowNotification({ type: "", message: "" });
    }, 3000);
  };

  // ✏️ Modifica evento
  const handleEditEvent = async () => {
    if (!editEvent.title || !editEvent.description || !editEvent.category || !editEvent.date) {
      alert("Compila tutti i campi obbligatori!");
      return;
    }

    try {
      // Generiamo lo slug aggiornato
      const updatedSlug = generateSlug(editEvent.title);

      // 📌 Converte la data correttamente per Firestore
      let formattedDate = null;
      if (editEvent.date?.seconds) {
        formattedDate = editEvent.date.toDate();
      } else if (typeof editEvent.date === "string") {
        const parsedDate = dayjs(editEvent.date, "YYYY-MM-DD");
        formattedDate = parsedDate.isValid() ? parsedDate.toDate() : new Date();
      }

      const eventRef = doc(db, "events", editEvent.id);
      await updateDoc(eventRef, {
        title: editEvent.title,
        slug: updatedSlug, // 🔹 Aggiorna lo slug se il titolo cambia
        description: editEvent.description,
        category: editEvent.category,
        date: formattedDate,
      });

      setEditEvent(null);
      setShowNotification({ type: "edit", message: "Modifiche salvate con successo!" });

      setTimeout(() => {
        setShowNotification({ type: "", message: "" });
      }, 3000);
    } catch (error) {
      console.error("❌ Errore durante l'aggiornamento dell'evento:", error);
      alert("Errore durante l'aggiornamento dell'evento. Controlla i dati e riprova.");
    }
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
        <h1 className="text-4xl font-bold text-gray-800">📅 Gestione Eventi</h1>
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
            <div
              key={event.id}
              className="border-b py-4 flex justify-between items-center cursor-pointer hover:bg-gray-100 p-3 rounded-lg transition-all"
              onClick={() => setEditEvent(event)}
            >
              <div>
                <h3 className="font-bold text-lg">{event.title}</h3>
                <p className="text-sm text-gray-600">{event.date} - {event.category}</p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteEvent(event.id);
                }}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition-all"
              >
                🗑️ Elimina
              </button>
            </div>
          ))
        )}
      </div>

      {/* 📌 Modale per Modifica Evento */}
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
              onChange={(e) =>
                setEditEvent({ ...editEvent, title: e.target.value, slug: generateSlug(e.target.value) })
              }
              className="border p-2 rounded w-full mb-2"
            />
            <textarea
              value={editEvent.description}
              onChange={(e) => setEditEvent({ ...editEvent, description: e.target.value })}
              className="border p-2 rounded w-full mb-2 h-24"
            />
            <button onClick={handleEditEvent} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-full transition-all">
              ✅ Salva Modifiche
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
