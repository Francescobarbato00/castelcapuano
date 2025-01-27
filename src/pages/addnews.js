import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { checkAuth } from "../lib/auth";
import { db } from "../lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import dayjs from "dayjs";
import "dayjs/locale/it"; // Importa la localizzazione italiana

export default function AddNews() {
  const [user, setUser] = useState(null);
  const [newArticle, setNewArticle] = useState({
    title: "",
    description: "",
    author: "",
    category: "",
    date: dayjs().format("YYYY-MM-DD"),
    imageUrl: "",
  });

  const [showNotification, setShowNotification] = useState(false); // Stato per la notifica
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = checkAuth(setUser);
    return () => unsubscribe();
  }, []);

  // 🔹 Funzione per generare lo slug automaticamente dal titolo
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s]/g, "") // Rimuove caratteri speciali
      .replace(/\s+/g, "-"); // Sostituisce gli spazi con trattini
  };

  const handleAddArticle = async () => {
    if (!newArticle.title || !newArticle.description || !newArticle.author || !newArticle.category || !newArticle.imageUrl) {
      alert("Compila tutti i campi!");
      return;
    }

    // 📌 Generiamo lo slug dal titolo
    const slug = generateSlug(newArticle.title);

    // 📌 Formattiamo la data in italiano prima di salvarla
    const formattedDate = dayjs(newArticle.date).locale("it").format("DD MMMM YYYY");

    // ✅ Salviamo la notizia nel database con lo slug generato
    await addDoc(collection(db, "news"), {
      ...newArticle,
      slug: slug, // 🔹 Salviamo lo slug
      date: formattedDate,
    });

    // ✅ Mostra la notifica di successo
    setShowNotification(true);

    // ✅ Pulisce il form dopo l'aggiunta
    setNewArticle({
      title: "",
      description: "",
      author: "",
      category: "",
      date: dayjs().format("YYYY-MM-DD"),
      imageUrl: "",
    });

    // ✅ Dopo 3 secondi, reindirizza alla dashboard
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
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">📰 Aggiungi Notizia</h1>

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
          value={newArticle.title}
          onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
          className="border p-3 rounded w-full"
        />
        <textarea
          placeholder="Descrizione"
          value={newArticle.description}
          onChange={(e) => setNewArticle({ ...newArticle, description: e.target.value })}
          className="border p-3 rounded w-full h-32"
        />
        <input
          type="text"
          placeholder="Autore"
          value={newArticle.author}
          onChange={(e) => setNewArticle({ ...newArticle, author: e.target.value })}
          className="border p-3 rounded w-full"
        />
        <input
          type="text"
          placeholder="Categoria (es: news, eventi, annunci...)"
          value={newArticle.category}
          onChange={(e) => setNewArticle({ ...newArticle, category: e.target.value })}
          className="border p-3 rounded w-full"
        />
        <input
          type="date"
          value={newArticle.date}
          onChange={(e) => setNewArticle({ ...newArticle, date: e.target.value })}
          className="border p-3 rounded w-full"
        />
        <input
          type="text"
          placeholder="URL Immagine"
          value={newArticle.imageUrl}
          onChange={(e) => setNewArticle({ ...newArticle, imageUrl: e.target.value })}
          className="border p-3 rounded w-full"
        />
        <button
          onClick={handleAddArticle}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded w-full transition-all shadow-md"
        >
          ✅ Aggiungi Notizia
        </button>
      </div>

      {/* 📌 NOTIFICA DI SUCCESSO */}
      {showNotification && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg animate-bounce">
          ✅ Notizia aggiunta con successo!
          <button onClick={() => setShowNotification(false)} className="ml-4 text-sm font-bold">
            ✖
          </button>
        </div>
      )}
    </div>
  );
}
