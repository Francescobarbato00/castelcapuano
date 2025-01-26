import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Metodo non consentito" });
  }

  try {
    const { title, content, category, author, imageUrl } = req.body;

    // Aggiunge una notizia al Firestore
    const docRef = await addDoc(collection(db, "news"), {
      title,
      content,
      category,
      author,
      imageUrl,
      date: serverTimestamp(),
    });

    res.status(200).json({ id: docRef.id, message: "Notizia aggiunta con successo!" });
  } catch (error) {
    res.status(500).json({ error: "Errore durante l'aggiunta della notizia." });
  }
}
