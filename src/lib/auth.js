import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { app } from "./firebase"; // Importa la configurazione Firebase
import { jwtDecode } from "jwt-decode"; // Corretto import per jwt-decode

const auth = getAuth(app);

// Login con email e password
export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Ottenere il token JWT
    const token = await user.getIdToken();

    // Salvare il token nel localStorage o nei cookie
    localStorage.setItem("authToken", token);

    return { success: true };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

// Logout e rimozione token
export const logout = async () => {
  try {
    await signOut(auth);
    localStorage.removeItem("authToken");
  } catch (error) {
    console.error("Errore durante il logout:", error);
  }
};

// Controlla se l'utente è loggato e verifica il token
export const checkAuth = (callback) => {
  return onAuthStateChanged(auth, async (user) => {
    if (user) {
      const token = localStorage.getItem("authToken");

      if (token) {
        try {
          const decoded = jwtDecode(token);
          const expirationTime = decoded.exp * 1000; // Converti in millisecondi

          if (Date.now() < expirationTime) {
            callback(user); // Token valido
            return;
          } else {
            console.warn("Token scaduto, disconnessione automatica.");
            logout();
            callback(null);
          }
        } catch (error) {
          console.error("Errore nella decodifica del token:", error);
          logout();
          callback(null);
        }
      } else {
        callback(null);
      }
    } else {
      callback(null);
    }
  });
};
