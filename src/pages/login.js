import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { login, checkAuth } from "../lib/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
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
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">🔑 Admin Login</h1>

        {error && (
          <div className="bg-red-500 text-white px-4 py-2 rounded mb-4 text-center animate-fade-in">
            {error}
          </div>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-3 rounded w-full mb-3"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-3 rounded w-full mb-4"
        />
        <button
          onClick={handleLogin}
          className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded w-full text-lg transition-transform transform hover:scale-105"
        >
          🔓 Accedi
        </button>
      </div>
    </div>
  );
}
