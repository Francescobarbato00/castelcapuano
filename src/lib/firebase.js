import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Configurazione Firebase con variabili d'ambiente
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const getNews = async () => {
  const newsCollection = collection(db, "news");
  const newsSnapshot = await getDocs(newsCollection);
  
  const newsData = newsSnapshot.docs.map(doc => {
    const data = doc.data();
    
    // Controlla se "date" è un timestamp e lo converte in stringa
    if (data.date && data.date.seconds) {
      const date = new Date(data.date.seconds * 1000); // Converte in millisecondi
      data.date = date.toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric" });
    }

    return { id: doc.id, ...data };
  });

  console.log("Dati ricevuti da Firestore:", newsData); // Log per debug
  return newsData;
};

export { db, getNews };
