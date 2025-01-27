import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { checkAuth } from "../lib/auth";
import { db } from "../lib/firebase";
import { collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import dayjs from "dayjs";
import "dayjs/locale/it"; // Localizzazione italiana

export default function ManageHighlightedNews() {
  const [user, setUser] = useState(null);
  const [newsList, setNewsList] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);
  const [editedNews, setEditedNews] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  const router = useRouter();

  useEffect(() => {
    const unsubscribe = checkAuth(setUser);
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "highlighted_news"));
        const newsArray = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          date: doc.data().date ? dayjs(doc.data().date.seconds * 1000).locale("it").format("DD MMMM YYYY") : "",
        }));
        setNewsList(newsArray);
      } catch (error) {
        console.error("Errore nel recupero delle notizie in evidenza:", error);
      }
    };

    fetchNews();
  }, []);

  const handleSelectNews = (news) => {
    setSelectedNews(news.id);
    setEditedNews({ ...news }); // Copia della notizia selezionata per modificarla
  };

  const handleInputChange = (field, value) => {
    setEditedNews(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveChanges = async () => {
    try {
      const newsRef = doc(db, "highlighted_news", editedNews.id);
      await updateDoc(newsRef, {
        title: editedNews.title,
        description: editedNews.description,
        image: editedNews.image,
        content: editedNews.content.replace(/\n/g, "<br>"),
        category: editedNews.category,
        date: editedNews.date,
      });

      // Aggiorna la lista locale
      setNewsList(newsList.map(news => (news.id === editedNews.id ? editedNews : news)));
      setSelectedNews(null);
      setNotificationMessage("✅ Notizia aggiornata con successo!");
      setShowNotification(true);
    } catch (error) {
      console.error("Errore durante l'aggiornamento:", error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Sei sicuro di voler eliminare questa notizia?");
    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, "highlighted_news", id));
      setNewsList(newsList.filter(news => news.id !== id));
      setNotificationMessage("🗑️ Notizia eliminata con successo!");
      setShowNotification(true);
    } catch (error) {
      console.error("Errore durante l'eliminazione:", error);
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
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">🛠️ Gestisci Notizie in Evidenza</h1>

      <button
        onClick={() => router.push("/admin")}
        className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded mb-6 transition-all"
      >
        🔙 Torna alla Dashboard
      </button>

      <div className="space-y-6">
        {newsList.length === 0 ? (
          <p className="text-center text-gray-500">Nessuna notizia in evidenza disponibile.</p>
        ) : (
          newsList.map((news) => (
            <div
              key={news.id}
              className="border p-4 rounded-lg shadow-md bg-gray-50 cursor-pointer hover:bg-gray-100 transition"
              onClick={() => handleSelectNews(news)}
            >
              <h2 className="text-xl font-bold text-blue-900">{news.title}</h2>
              <p className="text-gray-600">{news.date}</p>
            </div>
          ))
        )}
      </div>

      {/* FORM DI MODIFICA - Mostrato solo se una notizia è selezionata */}
      {selectedNews && editedNews && (
        <div className="fixed inset-0 bg-white bg-opacity-95 flex flex-col justify-center items-center p-6">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Modifica Notizia</h2>

          <input
            type="text"
            value={editedNews.title}
            onChange={(e) => handleInputChange("title", e.target.value)}
            className="border p-3 rounded w-full max-w-lg mb-4"
            placeholder="Titolo"
          />

          <textarea
            value={editedNews.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
            className="border p-3 rounded w-full max-w-lg h-24 mb-4"
            placeholder="Descrizione breve"
          />

          <input
            type="text"
            value={editedNews.image}
            onChange={(e) => handleInputChange("image", e.target.value)}
            className="border p-3 rounded w-full max-w-lg mb-4"
            placeholder="URL Immagine"
          />

          <textarea
            value={editedNews.content.replace(/<br>/g, "\n")}
            onChange={(e) => handleInputChange("content", e.target.value)}
            className="border p-3 rounded w-full max-w-lg h-40 mb-4"
            placeholder="Contenuto completo"
          />

          <input
            type="text"
            value={editedNews.category}
            onChange={(e) => handleInputChange("category", e.target.value)}
            className="border p-3 rounded w-full max-w-lg mb-4"
            placeholder="Categoria"
          />

          <input
            type="date"
            value={dayjs(editedNews.date, "DD MMMM YYYY").format("YYYY-MM-DD")}
            onChange={(e) => handleInputChange("date", e.target.value)}
            className="border p-3 rounded w-full max-w-lg mb-4"
          />

          <div className="flex space-x-4">
            <button
              onClick={handleSaveChanges}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded transition shadow-md"
            >
              ✅ Salva Modifiche
            </button>

            <button
              onClick={() => setSelectedNews(null)}
              className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded transition shadow-md"
            >
              ❌ Annulla
            </button>
          </div>
        </div>
      )}

      {/* 📌 NOTIFICA DI SUCCESSO */}
      {showNotification && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg animate-bounce">
          {notificationMessage}
          <button onClick={() => setShowNotification(false)} className="ml-4 text-sm font-bold">
            ✖
          </button>
        </div>
      )}
    </div>
  );
}
