import { useRouter } from "next/router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "/lib/firebase";
import DynamicArticle from "./components/DynamicArticle";
import TopHeader from "./components/TopHeader";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Articolo = ({ article }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Caricamento...</p>;
  }

  return (
    <div>
      <TopHeader />
      <Header />
      <DynamicArticle article={article} />
      <Footer />
    </div>
  );
};

export async function getStaticPaths() {
  const snapshot = await getDocs(collection(db, "articles"));
  const paths = snapshot.docs.map((doc) => ({
    params: { id: doc.id },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const docRef = doc(db, "articles", params.id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      article: { id: docSnap.id, ...docSnap.data() },
    },
    revalidate: 10, // Aggiorna i dati ogni 10 secondi
  };
}

export default Articolo;
