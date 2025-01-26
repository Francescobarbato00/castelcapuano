import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { app } from "./firebase"; // Importa la configurazione Firebase

const auth = getAuth(app);

// Login con email e password
export const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return { success: true };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

// Logout
export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Errore durante il logout:", error);
  }
};

// Controlla se l'utente è loggato
export const checkAuth = (callback) => {
  return onAuthStateChanged(auth, (user) => {
    callback(user);
  });
};
