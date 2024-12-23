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
      className={`bg-white container mx-auto px-4 py-8 sm:py-12 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Titolo principale su due righe */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-blue-900 mb-6 leading-tight">
        Fondazione Castel Capuano presenta <br />
        il Concerto di Natale 2024
      </h1>

      {/* Corpo del testo */}
      <div className="bg-white max-w-4xl mx-auto leading-relaxed text-gray-800 space-y-6 text-justify text-sm sm:text-base">
        <p>
          Il giorno <strong>lunedì 16 dicembre alle ore 18:00</strong> presso il suggestivo Salone dei Busti di Castel Capuano, luogo traboccante di storia e bellezza e simbolo della giustizia napoletana, si è tenuta la XI edizione del Concerto di Natale, un appuntamento musicale ormai tradizionale, organizzato dalla Fondazione Castel Capuano.
        </p>
        <p>
          La serata ha avuto inizio con l’indirizzo di augurio e saluto formulato dai vertici delle autorità giudiziare del distretto presenti, la Presidente della Corte di appello, d.ssa Maria Rosaria Covelli, la Presidente del Tribunale, d.ssa Elisabetta Garzo, il Procuratore generale presso la Corte di appello, dr. Aldo Policastro.
        </p>
        <p>
          A seguire ha presentato il concerto il Presidente della Fondazione dr. Aldo De Chiara e, alla presenza di autorità civili e militari e di oltre trecento spettatori, la serata ha avuto inizio, con l'esecuzione dell'<strong>Ave Maria di Franz Schubert</strong>, proposta dal duo composto dalle giovanissime Serena Ciriello (soprano) e Angelica Ciriello (pianoforte).
        </p>
        <p>
          Si è poi esibito il <strong>Coro di Voci Bianche del Teatro di San Carlo di Napoli</strong>, sotto la direzione della maestra Stefania Rinaldi e con l'accompagnamento al pianoforte di Luigi del Prete. Il concerto, intitolato <em>"Natale, ma non solo, in musica"</em>, ha proposto un percorso emozionante e coinvolgente, tra melodie tradizionali e suggestioni natalizie, con un tocco di musica napoletana.
        </p>
        <p>
          Dopo un breve intervallo, la serata è proseguita con la seconda parte, che ha visto l'esibizione del <strong>Castel Capuano Libera Ensemble</strong>, con lo spettacolo <em>“…E Pace in Terra agli Uomini…”</em>, un tributo alla cultura e alla devozione del popolo di Napoli.
        </p>
        <p>
          Guidati dalla voce narrante di Andrea De Goyzueta, attraverso un viaggio evocativo di parole e suoni, si sono esibiti Antonino Anastasia (percussioni a cornice), Enzo Minuto (percussioni), Gioacchino Conte (fisarmonica), Vincenzo Racioppi (mandolino), Mariella La Rosa (voce e chitarra), Corrado Velonà (voce e chitarra).
        </p>
        <p>
          Il concerto ha registrato una entusiastica partecipazione da parte del pubblico, che ha apprezzato come di consueto la qualità dell’offerta musicale il cui valore si è impreziosito per la magica cornice di Castel Capuano, e del Salone dei Busti, testimone di secoli di storia della nostra città.
        </p>
        <p>
          E’ possibile accedere alla registrazione della prima parte del concerto al seguente link: 
          <a 
            href="https://youtu.be/qGWXgZ6KJmA?si=aLTZaIdh941SaUX2" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 hover:text-blue-800 underline"
          >
            https://youtu.be/qGWXgZ6KJmA?si=aLTZaIdh941SaUX2
          </a>
        </p>
        <p>
          La Fondazione Castel Capuano ringrazia per la partecipazione e augura a tutti un sereno Natale e uno splendido Anno nuovo, all’insegna della valorizzazione dello storico patrimonio culturale di Castel Capuano e della nostra Napoli.
        </p>
        <p>
          <strong>Buon 2025 a tutti!</strong>
        </p>
        <p className="text-right text-sm text-gray-500">(info a cura di A.Ciriello)</p>
      </div>

      {/* Immagine a fine articolo */}
      <div className="w-full max-w-4xl mx-auto mt-8 sm:mt-10 shadow-lg rounded overflow-hidden bg-white">
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
