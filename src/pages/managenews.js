import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { checkAuth } from "../lib/auth";
import { db } from "../lib/firebase";
import { collection, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";

export default function ManageNews() {
  const [user, setUser] = useState(null);
  const [news, setNews] = useState([]);
  const [editArticle, setEditArticle] = useState(null);
  const [showNotification, setShowNotification] = useState({ type: "", message: "" });
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = checkAuth(setUser);
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      const fetchNews = async () => {
        const newsCollection = collection(db, "news");
        const newsSnapshot = await getDocs(newsCollection);
        setNews(newsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      };
      fetchNews();
    }
  }, [user]);

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s]/g, "") // Rimuove caratteri speciali
      .replace(/\s+/g, "-"); // Sostituisce gli spazi con trattini
  };

  const handleDeleteArticle = async (id) => {
    if (!confirm("Sei sicuro di voler eliminare questa notizia?")) return;

    try {
      await deleteDoc(doc(db, "news", id));
      setNews(news.filter(article => article.id !== id));
      setShowNotification({ type: "delete", message: "🗑️ Notizia eliminata con successo!" });

      setTimeout(() => {
        setShowNotification({ type: "", message: "" });
      }, 3000);
    } catch (error) {
      console.error("Errore nell'eliminazione:", error);
    }
  };

  const handleEditArticle = async () => {
    if (!editArticle.title || !editArticle.description || !editArticle.author) {
      alert("Compila tutti i campi!");
      return;
    }

    try {
      const updatedSlug = generateSlug(editArticle.title);

      const articleRef = doc(db, "news", editArticle.id);
      await updateDoc(articleRef, {
        ...editArticle,
        slug: updatedSlug, // 🔹 Aggiorna lo slug quando si modifica il titolo
      });

      setNews(news.map(article => (article.id === editArticle.id ? { ...editArticle, slug: updatedSlug } : article)));
      setEditArticle(null);
      setShowNotification({ type: "edit", message: "✅ Modifiche salvate con successo!" });

      setTimeout(() => {
        setShowNotification({ type: "", message: "" });
      }, 3000);
    } catch (error) {
      console.error("Errore nell'aggiornamento:", error);
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
        <h1 className="text-4xl font-bold text-gray-800">📰 Gestione Notizie</h1>
        <button
          onClick={() => router.push("/admin")}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded transition-all"
        >
          🔙 Torna alla Dashboard
        </button>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        {news.length === 0 ? (
          <p className="text-center text-gray-600">Nessuna notizia disponibile.</p>
        ) : (
          news.map((article) => (
            <div
              key={article.id}
              className="border-b py-4 flex justify-between items-center cursor-pointer hover:bg-gray-100 p-3 rounded-lg transition-all"
              onClick={() => setEditArticle(article)}
            >
              <div>
                <h3 className="font-bold text-lg">{article.title}</h3>
                <p className="text-sm text-gray-600 truncate max-w-xs">{article.description}</p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteArticle(article.id);
                }}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition-all"
              >
                🗑️ Elimina
              </button>
            </div>
          ))
        )}
      </div>

      {/* Modale per Modifica Articolo */}
      {editArticle && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">✏️ Modifica Articolo</h2>
              <button
                onClick={() => setEditArticle(null)}
                className="text-gray-600 hover:text-gray-800 text-lg"
              >
                ✖
              </button>
            </div>
            <input
              type="text"
              value={editArticle.title}
              onChange={(e) => setEditArticle({ ...editArticle, title: e.target.value, slug: generateSlug(e.target.value) })}
              className="border p-2 rounded w-full mb-2"
            />
            <input
              type="text"
              value={editArticle.slug}
              disabled
              className="border p-2 rounded w-full mb-2 bg-gray-100"
              placeholder="Slug (Generato automaticamente)"
            />
            <textarea
              value={editArticle.description}
              onChange={(e) => setEditArticle({ ...editArticle, description: e.target.value })}
              className="border p-2 rounded w-full mb-2 h-24"
            />
            <input
              type="text"
              value={editArticle.author}
              onChange={(e) => setEditArticle({ ...editArticle, author: e.target.value })}
              className="border p-2 rounded w-full mb-2"
            />
            <button
              onClick={handleEditArticle}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-full transition-all"
            >
              ✅ Salva Modifiche
            </button>
          </div>
        </div>
      )}

      {/* Notifiche */}
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
