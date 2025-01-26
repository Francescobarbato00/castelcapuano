// pages/article/[id].js
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function ArticlePage() {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchArticle = async () => {
        const docRef = doc(db, "news", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setArticle(docSnap.data());
        }
      };
      fetchArticle();
    }
  }, [id]);

  if (!article) return <p>Caricamento...</p>;

  return (
    <div className="p-5">
      <img src={article.imageUrl} alt={article.title} className="w-full h-80 object-cover" />
      <h1 className="text-3xl font-bold">{article.title}</h1>
      <p className="text-sm text-gray-500">{article.author}</p>
      <p className="mt-4">{article.content}</p>
    </div>
  );
}
