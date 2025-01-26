import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { logout, checkAuth } from "../lib/auth";

export default function AdminDashboard() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  // 📌 Controlla se l'utente è autenticato
  useEffect(() => {
    const unsubscribe = checkAuth(setUser);
    return () => unsubscribe();
  }, []);

  // 📌 Logout
  const handleLogout = async () => {
    await logout();
    setUser(null);
    router.push("/");
  };

  // 📌 Se l'utente non è autenticato, lo rimandiamo alla home
  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Accesso Negato</h1>
        <p className="text-gray-700">Devi essere autenticato per accedere.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-8">Dashboard Admin</h1>

      {/* 🚪 Pulsante Logout */}
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full shadow-lg transition-transform transform hover:scale-105 mb-6"
      >
        🚪 Logout
      </button>

      {/* 🛠️ Opzioni di Gestione */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        
        {/* 📰 Aggiungi Notizia */}
        <div
          onClick={() => router.push("/addnews")}
          className="cursor-pointer bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-lg text-lg flex items-center justify-center shadow-lg transition-transform transform hover:scale-105"
        >
          <span className="text-2xl mr-2">➕</span> Aggiungi Notizia
        </div>

        {/* ✏️ Modifica / Elimina Notizie */}
        <div
          onClick={() => router.push("/managenews")}
          className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 rounded-lg text-lg flex items-center justify-center shadow-lg transition-transform transform hover:scale-105"
        >
          <span className="text-2xl mr-2">✏️</span> Modifica / Elimina Notizie
        </div>

        {/* 📢 Aggiungi Small News */}
        <div
          onClick={() => router.push("/addsmallnews")}
          className="cursor-pointer bg-purple-500 hover:bg-purple-600 text-white px-6 py-4 rounded-lg text-lg flex items-center justify-center shadow-lg transition-transform transform hover:scale-105"
        >
          <span className="text-2xl mr-2">📰</span> Aggiungi Small News
        </div>

        {/* 🔧 Modifica / Elimina Small News */}
        <div
          onClick={() => router.push("/managesmallnews")}
          className="cursor-pointer bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-4 rounded-lg text-lg flex items-center justify-center shadow-lg transition-transform transform hover:scale-105"
        >
          <span className="text-2xl mr-2">🔧</span> Modifica / Elimina Small News
        </div>

        {/* 📅 Aggiungi Evento */}
        <div
          onClick={() => router.push("/addevent")}
          className="cursor-pointer bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-4 rounded-lg text-lg flex items-center justify-center shadow-lg transition-transform transform hover:scale-105"
        >
          <span className="text-2xl mr-2">📆</span> Aggiungi Evento
        </div>

        {/* 🛠️ Modifica / Elimina Eventi */}
        <div
          onClick={() => router.push("/manageevents")}
          className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-lg text-lg flex items-center justify-center shadow-lg transition-transform transform hover:scale-105"
        >
          <span className="text-2xl mr-2">📋</span> Modifica / Elimina Eventi
        </div>

        {/* 📜 Aggiungi Comunicato Stampa */}
        <div
          onClick={() => router.push("/addpress")}
          className="cursor-pointer bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-4 rounded-lg text-lg flex items-center justify-center shadow-lg transition-transform transform hover:scale-105"
        >
          <span className="text-2xl mr-2">📜</span> Aggiungi Comunicato Stampa
        </div>

        {/* 📝 Modifica / Elimina Comunicati Stampa */}
        <div
          onClick={() => router.push("/managepress")}
          className="cursor-pointer bg-red-500 hover:bg-red-600 text-white px-6 py-4 rounded-lg text-lg flex items-center justify-center shadow-lg transition-transform transform hover:scale-105"
        >
          <span className="text-2xl mr-2">📝</span> Modifica / Elimina Comunicati
        </div>

        {/* 🗓️ Aggiungi Evento Agenda */}
        <div
          onClick={() => router.push("/addagenda_event")}
          className="cursor-pointer bg-teal-500 hover:bg-teal-600 text-white px-6 py-4 rounded-lg text-lg flex items-center justify-center shadow-lg transition-transform transform hover:scale-105"
        >
          <span className="text-2xl mr-2">📆</span> Aggiungi Evento Agenda
        </div>

        {/* ⚙️ Modifica / Elimina Eventi Agenda */}
        <div
          onClick={() => router.push("/manageagenda_events")}
          className="cursor-pointer bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-4 rounded-lg text-lg flex items-center justify-center shadow-lg transition-transform transform hover:scale-105"
        >
          <span className="text-2xl mr-2">⚙️</span> Modifica / Elimina Eventi Agenda
        </div>
      </div>
    </div>
  );
}
