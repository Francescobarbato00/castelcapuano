import Image from "next/image";
import { useEffect, useState } from "react";

const Article = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`container mx-auto px-4 py-8 sm:py-12 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Titolo principale su due righe */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-blue-900 mb-6 leading-tight">
        Fondazione Castel Capuano presenta <br />
        il Concerto di Natale 2024
      </h1>

      {/* Sottotitolo */}
      <h2 className="text-base sm:text-lg md:text-xl text-center text-gray-700 mb-8 sm:mb-10">
        XI Edizione – Salone dei Busti, 16 dicembre 2024
      </h2>

      {/* Corpo del testo */}
      <div className="max-w-4xl mx-auto leading-relaxed text-gray-800 space-y-6 text-justify text-sm sm:text-base">
        <p>
          La Fondazione Castel Capuano è lieta di annunciare la XI edizione del Concerto di Natale,
          un appuntamento musicale ormai tradizionale, che si terrà{" "}
          <strong>lunedì 16 dicembre alle ore 18:00</strong> presso il suggestivo Salone dei Busti
          di Castel Capuano, uno dei luoghi più storici e prestigiosi di Napoli.
        </p>

        <p>
          La serata avrà inizio con l'esecuzione dell'<strong>Ave Maria di Franz Schubert</strong>,
          proposta dal duo composto da Serena Ciriello (soprano) e Angelica Ciriello (pianoforte).
        </p>

        <p>
          A seguire, il pubblico avrà l’opportunità di ascoltare le angeliche voci del{" "}
          <strong>Coro di Voci Bianche del Teatro di San Carlo di Napoli</strong>, sotto la direzione
          della maestra Stefania Rinaldi e con l'accompagnamento al pianoforte di Luigi del Prete.
          Questo segmento, intitolato <em>"Natale, ma non solo, in musica"</em>, promette un
          percorso emozionante tra melodie tradizionali e suggestioni natalizie.
        </p>

        <p>
          La serata proseguirà con l'esibizione del{" "}
          <strong>Castel Capuano Libera Ensemble</strong>, che presenterà lo spettacolo{" "}
          <em>“…E Pace in Terra agli Uomini…”</em>, un tributo alla cultura e alla devozione del
          popolo di Napoli, particolarmente significativo in questo periodo dell'anno.
        </p>

        <p className="font-semibold">Il gruppo di musicisti è composto da artisti di grande talento:</p>
        <ul className="list-disc list-inside text-gray-800 ml-4 space-y-2">
          <li>Antonino Anastasia (percussioni a cornice)</li>
          <li>Enzo Minuto (percussioni)</li>
          <li>Gioacchino Conte (fisarmonica)</li>
          <li>Vincenzo Racioppi (mandolino)</li>
          <li>Mariella La Rosa (voce e chitarra)</li>
          <li>Corrado Velonà (voce e chitarra)</li>
        </ul>

        <p>
          La serata sarà arricchita dalla <strong>voce narrante di Andrea De Goyzueta</strong>, che
          guiderà il pubblico attraverso un viaggio evocativo di parole e suoni.
        </p>

        <p className="font-semibold text-blue-700">
          L’evento è a ingresso libero fino ad esaurimento posti, un'occasione imperdibile per
          immergersi nella magia della musica natalizia in uno dei simboli storici della città di
          Napoli.
        </p>

        <p>
          La Fondazione Castel Capuano invita tutti a partecipare a questo momento unico, dedicato
          alla musica, alla tradizione e alla speranza di un Natale sereno per tutta la comunità.
        </p>
      </div>

      {/* Immagine a fine articolo */}
      <div className="w-full max-w-4xl mx-auto mt-8 sm:mt-10 shadow-lg rounded overflow-hidden">
        <Image
          src="/concerto.jpg" // Sostituire con il percorso reale dell'immagine
          alt="Concerto di Natale 2024"
          width={300}
          height={150}
          layout="responsive"
          objectFit="cover"
          className="transition-transform duration-500 hover:scale-105"
        />
      </div>
    </section>
  );
};

export default Article;
