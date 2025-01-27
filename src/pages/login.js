import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { login, checkAuth } from "../lib/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();

  // Recupera credenziali salvate nel localStorage
  useEffect(() => {
    const storedEmail = localStorage.getItem("savedEmail");
    const storedPassword = localStorage.getItem("savedPassword");
    const storedRemember = localStorage.getItem("rememberMe");

    if (storedRemember === "true" && storedEmail && storedPassword) {
      setEmail(storedEmail);
      setPassword(storedPassword);
      setRememberMe(true);
    }

    const unsubscribe = checkAuth(setUser);
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    if (!email || !password) {
      setError("⚠️ Inserisci email e password!");
      return;
    }

    const result = await login(email, password);
    if (result.success) {
      // Salva credenziali se "Ricordami" è selezionato
      if (rememberMe) {
        localStorage.setItem("savedEmail", email);
        localStorage.setItem("savedPassword", password);
        localStorage.setItem("rememberMe", "true");
      } else {
        localStorage.removeItem("savedEmail");
        localStorage.removeItem("savedPassword");
        localStorage.removeItem("rememberMe");
      }

      router.push("/admin");
    } else {
      setError(result.message);
    }
  };

  if (user) {
    router.push("/admin");
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Titolo Fondazione */}
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6 text-center uppercase">
        FONDAZIONE <br /> CASTEL CAPUANO
      </h1>

      {/* Login Box */}
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-xs">
        <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">Accedi</h2>

        {/* Messaggio di errore */}
        {error && (
          <div className="bg-red-500 text-white px-4 py-2 rounded mb-4 text-center">
            {error}
          </div>
        )}

        {/* Input per Email */}
        <label className="text-gray-600 text-sm font-medium">Indirizzo Email</label>
        <input
          type="email"
          placeholder="Inserisci la tua email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full mb-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />

        {/* Input per Password */}
        <label className="text-gray-600 text-sm font-medium">Password</label>
        <input
          type="password"
          placeholder="Inserisci la tua password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full mb-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />

        {/* Checkbox Ricordami */}
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="remember"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
            className="mr-2"
          />
          <label htmlFor="remember" className="text-gray-600 text-sm">Ricordami</label>
        </div>

        {/* Pulsante Login */}
        <button
          onClick={handleLogin}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full text-lg transition-all"
        >
          Login
        </button>
      </div>
    </div>
  );
}
