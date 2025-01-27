import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { checkAuth } from "../lib/auth";
import { db } from "../lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import dayjs from "dayjs";
import "dayjs/locale/it"; // Localizzazione italiana

export default function AddPressRelease() {
  const [user, setUser] = useState(null);
  const [newPress, setNewPress] = useState({
    title: "",
    subtitle: "",
    content: "",
    author: "",
    number: "",
    date: dayjs().format("YYYY-MM-DD"),
    slug: "",
  });

  const [showNotification, setShowNotification] = useState(false);
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

  const handleAddPress = async () => {
    if (!newPress.title || !newPress.content || !newPress.number || !newPress.author) {
      alert("Compila tutti i campi!");
      return;
    }

    try {
      // 📌 Generiamo lo slug dal titolo
      const slug = generateSlug(newPress.title);

      // 📌 Formattiamo la data in formato Firestore
      const formattedDate = dayjs(newPress.date).locale("it").toDate();

      // 📌 Convertiamo il contenuto per preservare gli a capo
      const formattedContent = newPress.content.replace(/\n/g, "<br>");

      // ✅ Salviamo il comunicato nel database con lo slug generato
      await addDoc(collection(db, "press_releases"), {
        ...newPress,
        slug: slug, // 🔹 Salviamo lo slug
        date: formattedDate,
        content: formattedContent, // 🔹 Contenuto formattato con a capo
      });

      // ✅ Mostra notifica di successo
      setShowNotification(true);

      // 🔄 Pulisce il form dopo l'aggiunta
      setNewPress({
        title: "",
        subtitle: "",
        content: "",
        author: "",
        number: "",
        date: dayjs().format("YYYY-MM-DD"),
        slug: "",
      });

      // 🔄 Dopo 3 secondi, reindirizza alla dashboard
      setTimeout(() => {
        router.push("/admin");
      }, 3000);
    } catch (error) {
      console.error("❌ Errore nell'aggiunta del comunicato:", error);
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
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">📜 Aggiungi Comunicato Stampa</h1>

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
          value={newPress.title}
          onChange={(e) =>
            setNewPress({
              ...newPress,
              title: e.target.value,
              slug: generateSlug(e.target.value), // 🔹 Aggiorna slug in tempo reale
            })
          }
          className="border p-3 rounded w-full"
        />
        <input
          type="text"
          placeholder="Sottotitolo"
          value={newPress.subtitle}
          onChange={(e) => setNewPress({ ...newPress, subtitle: e.target.value })}
          className="border p-3 rounded w-full"
        />
        <textarea
          placeholder="Contenuto"
          value={newPress.content}
          onChange={(e) => setNewPress({ ...newPress, content: e.target.value })}
          className="border p-3 rounded w-full h-32"
        />
        <input
          type="text"
          placeholder="Autore"
          value={newPress.author}
          onChange={(e) => setNewPress({ ...newPress, author: e.target.value })}
          className="border p-3 rounded w-full"
        />
        <input
          type="text"
          placeholder="Numero del Comunicato"
          value={newPress.number}
          onChange={(e) => setNewPress({ ...newPress, number: e.target.value })}
          className="border p-3 rounded w-full"
        />
        <input
          type="date"
          value={newPress.date}
          onChange={(e) => setNewPress({ ...newPress, date: e.target.value })}
          className="border p-3 rounded w-full"
        />
        <button
          onClick={handleAddPress}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded w-full transition-all shadow-md"
        >
          ✅ Aggiungi Comunicato
        </button>
      </div>

      {/* 📌 NOTIFICA DI SUCCESSO */}
      {showNotification && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg animate-bounce">
          ✅ Comunicato aggiunto con successo!
          <button onClick={() => setShowNotification(false)} className="ml-4 text-sm font-bold">
            ✖
          </button>
        </div>
      )}
    </div>
  );
}
