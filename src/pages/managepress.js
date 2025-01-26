import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { checkAuth } from "../lib/auth";
import { db } from "../lib/firebase";
import { collection, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import dayjs from "dayjs";
import "dayjs/locale/it"; // Localizzazione italiana

export default function ManagePress() {
  const [user, setUser] = useState(null);
  const [pressReleases, setPressReleases] = useState([]);
  const [editPress, setEditPress] = useState(null);
  const [showNotification, setShowNotification] = useState({ type: "", message: "" });
  const router = useRouter();

  // ✅ Controllo autenticazione
  useEffect(() => {
    const unsubscribe = checkAuth(setUser);
    return () => unsubscribe();
  }, []);

  // ✅ Caricamento comunicati stampa da Firestore
  useEffect(() => {
    if (user) {
      const fetchPressReleases = async () => {
        const pressCollection = collection(db, "press_releases");
        const pressSnapshot = await getDocs(pressCollection);
        setPressReleases(
          pressSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            date: dayjs(doc.data().date.toDate()).locale("it").format("DD/MM/YYYY"),
          }))
        );
      };
      fetchPressReleases();
    }
  }, [user]);

  // ❌ Eliminazione comunicato con conferma
  const handleDeletePress = async (id) => {
    if (!confirm("Sei sicuro di voler eliminare questo comunicato stampa?")) return;

    await deleteDoc(doc(db, "press_releases", id));
    setPressReleases(pressReleases.filter((press) => press.id !== id));

    setShowNotification({ type: "delete", message: "Comunicato eliminato con successo!" });

    setTimeout(() => {
      setShowNotification({ type: "", message: "" });
    }, 3000);
  };

  // ✏️ Modifica comunicato
  const handleEditPress = async () => {
    if (!editPress.title || !editPress.content || !editPress.number || !editPress.author) {
      alert("Compila tutti i campi!");
      return;
    }

    const pressRef = doc(db, "press_releases", editPress.id);
    await updateDoc(pressRef, {
      title: editPress.title,
      subtitle: editPress.subtitle,
      content: editPress.content,
      author: editPress.author,
      number: editPress.number,
      date: dayjs(editPress.date, "DD/MM/YYYY").toDate(),
    });

    setEditPress(null);

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
        <h1 className="text-4xl font-bold text-gray-800">📜 Gestione Comunicati Stampa</h1>
        <button
          onClick={() => router.push("/admin")}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded transition-all"
        >
          🔙 Torna alla Dashboard
        </button>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        {pressReleases.length === 0 ? (
          <p className="text-center text-gray-600">Nessun comunicato disponibile.</p>
        ) : (
          pressReleases.map((press) => (
            <div
              key={press.id}
              className="border-b py-4 flex justify-between items-center cursor-pointer hover:bg-gray-100 p-3 rounded-lg transition-all"
              onClick={() => setEditPress(press)}
            >
              <div>
                <h3 className="font-bold text-lg">{press.title}</h3>
                <p className="text-sm text-gray-600">
                  {press.date} • {press.number} • {press.author}
                </p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeletePress(press.id);
                }}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition-all"
              >
                🗑️ Elimina
              </button>
            </div>
          ))
        )}
      </div>

      {/* ✏️ Modale per Modifica Comunicati */}
      {editPress && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">✏️ Modifica Comunicato</h2>
              <button
                onClick={() => setEditPress(null)}
                className="text-gray-600 hover:text-gray-800 text-lg"
              >
                ✖
              </button>
            </div>
            <input
              type="text"
              value={editPress.title}
              onChange={(e) => setEditPress({ ...editPress, title: e.target.value })}
              className="border p-2 rounded w-full mb-2"
            />
            <input
              type="text"
              value={editPress.subtitle}
              onChange={(e) => setEditPress({ ...editPress, subtitle: e.target.value })}
              className="border p-2 rounded w-full mb-2"
            />
            <textarea
              value={editPress.content}
              onChange={(e) => setEditPress({ ...editPress, content: e.target.value })}
              className="border p-2 rounded w-full mb-2 h-24"
            />
            <input
              type="text"
              value={editPress.author}
              onChange={(e) => setEditPress({ ...editPress, author: e.target.value })}
              className="border p-2 rounded w-full mb-2"
            />
            <input
              type="text"
              value={editPress.number}
              onChange={(e) => setEditPress({ ...editPress, number: e.target.value })}
              className="border p-2 rounded w-full mb-2"
            />
            <input
              type="date"
              value={dayjs(editPress.date, "DD/MM/YYYY").format("YYYY-MM-DD")}
              onChange={(e) => setEditPress({ ...editPress, date: e.target.value })}
              className="border p-2 rounded w-full mb-2"
            />
            <button
              onClick={handleEditPress}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-full transition-all"
            >
              ✅ Salva Modifiche
            </button>
          </div>
        </div>
      )}

      {/* 📌 Notifiche */}
      {showNotification.type && (
        <div className={`fixed top-5 right-5 px-4 py-3 rounded-lg shadow-lg transition-all ${showNotification.type === "edit" ? "bg-blue-500" : "bg-red-500"} text-white`}>
          {showNotification.message}
          <button onClick={() => setShowNotification({ type: "", message: "" })} className="ml-4 text-sm font-bold">
            ✖
          </button>
        </div>
      )}
    </div>
  );
}
