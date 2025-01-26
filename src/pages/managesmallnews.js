import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { checkAuth } from "../lib/auth";
import { db } from "../lib/firebase";
import { collection, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";

export default function ManageSmallNews() {
  const [user, setUser] = useState(null);
  const [smallNews, setSmallNews] = useState([]);
  const [editArticle, setEditArticle] = useState(null);
  const [showNotification, setShowNotification] = useState({ type: "", message: "" });
  const router = useRouter();

  // Controllo autenticazione
  useEffect(() => {
    const unsubscribe = checkAuth(setUser);
    return () => unsubscribe();
  }, []);

  // Caricamento Small News
  useEffect(() => {
    if (user) {
      const fetchSmallNews = async () => {
        const smallNewsCollection = collection(db, "small_news");
        const smallNewsSnapshot = await getDocs(smallNewsCollection);
        setSmallNews(smallNewsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      };
      fetchSmallNews();
    }
  }, [user]);

  // Eliminazione articolo con conferma
  const handleDeleteArticle = async (id) => {
    if (!confirm("Sei sicuro di voler eliminare questa Small News?")) return;

    await deleteDoc(doc(db, "small_news", id));
    setSmallNews(smallNews.filter(article => article.id !== id));

    setShowNotification({ type: "delete", message: "Small News eliminata con successo!" });

    setTimeout(() => {
      setShowNotification({ type: "", message: "" });
    }, 3000);
  };

  // Modifica articolo
  const handleEditArticle = async () => {
    if (!editArticle.title || !editArticle.description) {
      alert("Compila tutti i campi!");
      return;
    }

    const articleRef = doc(db, "small_news", editArticle.id);
    await updateDoc(articleRef, editArticle);
    setEditArticle(null);

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
        <h1 className="text-4xl font-bold text-gray-800">📰 Gestione Small News</h1>
        <button
          onClick={() => router.push("/admin")}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded transition-all"
        >
          🔙 Torna alla Dashboard
        </button>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        {smallNews.length === 0 ? (
          <p className="text-center text-gray-600">Nessuna Small News disponibile.</p>
        ) : (
          smallNews.map((article) => (
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

      {/* Modale per Modifica Small News */}
      {editArticle && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">✏️ Modifica Small News</h2>
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
              onChange={(e) => setEditArticle({ ...editArticle, title: e.target.value })}
              className="border p-2 rounded w-full mb-2"
            />
            <textarea
              value={editArticle.description}
              onChange={(e) => setEditArticle({ ...editArticle, description: e.target.value })}
              className="border p-2 rounded w-full mb-2 h-24"
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
