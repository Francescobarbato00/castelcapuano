import { useState } from "react";

const Organi = () => {
  // Definizione dei membri del Consiglio di Amministrazione
  const membriConsiglio = [
    { ruolo: "Presidente della Fondazione", nome: "Dott. Aldo De Chiara" },
    { ruolo: "Vicepresidente della Fondazione", nome: "Avv. Immacolata Troianiello" },
    { ruolo: "Regione Campania", nome: "On.le Presidente Vincenzo De Luca" },
    { ruolo: "Comune di Napoli", nome: "On.le Sindaco Gaetano Manfredi" },
    { ruolo: "Università degli Studi di Napoli Federico II", nome: "Rettore Matteo Lorito" },
    { ruolo: "Città Metropolitana di Napoli", nome: "On.le Sindaco Gaetano Manfredi" },
    { ruolo: "Università Suor Orsola Benincasa", nome: "Rettore Prof. Lucio D’Alessandro" },
    { ruolo: "Avvocatura Distrettuale dello Stato", nome: "Avv. Giovanni Cassano" },
    { ruolo: "Ordine degli Avvocati di Napoli", nome: "Avv. Salvatore Ciccarelli" },
    { ruolo: "Ente Biblioteca De Marsico", nome: "Avv. Patrizia Intonti" },
    { ruolo: "Collegio Notarile Napoli, Nola e Torre Annunziata", nome: "Notaio Giovanni Vitolo" },
    { ruolo: "Ordine dei Commercialisti", nome: "Dott. Eraldo Turi" },
    { ruolo: "Ordine Psicologi Campania", nome: "Dott. Armando Cozzuto" },
    { ruolo: "Fondazione Banco di Napoli", nome: "Prof. Orazio Abbamonte" },
    { ruolo: "Fondazione E. Casale", nome: "Notaio Michele Nastri" },
    { ruolo: "Fondazione dell’Avvocatura per l’Alta Formazione", nome: "Avv. Gabriele Gava" },
    { ruolo: "Centro Studi Castel Capuano", nome: "Avv. Mario Ruberto" },
    { ruolo: 'Associazione tra Magistrati “Proposta Giustizia”', nome: "Consigliere Dott. Giovanni Giacalone" },
    { ruolo: "Unione Industriali", nome: "Dott. Costanzo Jannotti Pecci" },
  ];

  // Definizione dei membri del Comitato Esecutivo
  const membriComitatoEsecutivo = [
    { ruolo: "Presidente della Fondazione", nome: "Dott. Aldo De Chiara" },
    { ruolo: "Vicepresidente della Fondazione", nome: "Avv. Immacolata Troianiello" },
    { ruolo: "Tesoriere", nome: "Dott.ssa Antonella La Porta (Ordine dei Dottori Commercialisti e degli Esperti Contabili)" },
    { ruolo: "Segretario Generale", nome: "Avv. Bruno Ricciardelli" },
    { ruolo: "Avvocato Designato al Consiglio Forense", nome: "Avv. Giuseppe De Gregorio" },
    { ruolo: "Avvocatura dello Stato", nome: "Avv. Giovanni Cassano" },
    { ruolo: "Collegio Notarile Napoli Nola e Torre Annunziata", nome: "Notaio Giovanni Vitolo" },
    { ruolo: "Università Suor Orsola Benincasa", nome: "Rettore Prof. Lucio d’Alessandro" },
    { ruolo: "Unione degli Industriali di Napoli", nome: "Dott. Costanzo Jannotti Pecci" },
  ];

  // Definizione dei membri del Comitato Scientifico
  const membriComitatoScientifico = [
    { ruolo: "Assegnista di Ricerca UniCz", nome: "Avv. Annamaria Abbruzzese" },
    { ruolo: "Già Presidente Tribunale di Napoli", nome: "Magistrato Carlo Alemi" },
    { ruolo: "Già Docente Uni NA Federico II", nome: "Franco Amarelli" },
    { ruolo: "Docente Roma 3", nome: "Notaio Maria Claudia Andrini" },
    { ruolo: "Ex CSM", nome: "Magistrato A. Ardituro" },
    { ruolo: "Presidente Associazione Palazzi Napoletani", nome: "Architetto Sergio Attanasio" },
    { ruolo: "Già Presidente Corte App. Napoli – Presidente della Fondazione", nome: "Dott. Antonio Buonajuto" },
    { ruolo: "Ex CSM", nome: "Magistrato Francesco Cananzi" },
    { ruolo: "Addetto Stampa della Fondazione", nome: "Giornalista Laura Caico" },
    { ruolo: "CSM", nome: "Avv. Michele Cerabona" },
    { ruolo: "Prof. Università Salerno", nome: "Prof. Francesco Citarella" },
    { ruolo: "Prof. Università Federico II", nome: "Prof. Stefano Consiglio" },
    { ruolo: "Prof. Ord. di Diritto Amministrativo", nome: "Prof. Stefano D’Alfonso" },
    { ruolo: "ANM", nome: "Magistrato Antonio D’Amato" },
    { ruolo: "Già Avv. Gen. Corte", nome: "Magistrato Aldo De Chiara" },
    { ruolo: "Prof. Ord. Sociologia Uni NA Federico II", nome: "Prof. Giacomo Di Gennaro" },
    { ruolo: "Dirigente Generale Min.Giustizia a.r.", nome: "Luigi Di Mauro" },
    { ruolo: "Avvocato Civ.", nome: "Avv. Massimo Di Lauro" },
    { ruolo: "Già Presidente Trib. Sorveglianza", nome: "Magistrato Antonio Esposito" },
    { ruolo: "Presidente Tribunale di Napoli", nome: "Magistrato Ettore Ferrara" },
    { ruolo: "Docente em. Dir. Romano – Già Preside", nome: "Prof. Luigi La Bruna" },
    { ruolo: "Avvocato Civ.", nome: "Avv. Mariella La Rosa" },
    { ruolo: "Presidente Ordine Campania", nome: "Giornalista Ottavio Lucarelli" },
    { ruolo: "Già Avv. Gen. Corte Napoli", nome: "Magistrato Luigi Mastrominico" },
    { ruolo: "Proc. Repubblica Napoli", nome: "Magistrato Giovanni Melillo" },
    { ruolo: "Prof. Diritto Romano Federico II", nome: "Prof. Valerio Minale" },
    { ruolo: "Consigliere Naz.le", nome: "Notaio Michele Nastri" },
    { ruolo: "Già Presidente Corte App. Napoli", nome: "Magistrato Raffaele Numeroso" },
    { ruolo: "Già Tesoriera Fondazione", nome: "Commercialista Carmen Padula" },
    { ruolo: "Proc. Generale Corte Napoli", nome: "Magistrato Luigi Riello" },
    { ruolo: "Presidente Comitato Scientifico Fondazione", nome: "Magistrato Floretta Rolleri" },
    { ruolo: "Avvocato", nome: "Avv. Mario Ruberto" },
    { ruolo: "", nome: "Nicola Russo" },
    { ruolo: "Prof.ssa", nome: "Maria Rosaria Saviano" },
    { ruolo: "Architetto", nome: "Amalia Scielzo" },
    { ruolo: "Docente em. Ord. Diritto Costituzionale", nome: "Prof. Michele Scudiero" },
    { ruolo: "Segretario Generale Fondazione", nome: "Avv. Giovanni Siniscalchi" },
    { ruolo: "", nome: "Magistrato Carlo Spagna" },
    { ruolo: "Prof. Ord. Diritto UE", nome: "Prof.ssa Maria Luisa Tufano" },
    { ruolo: "Segretario Generale Corte Costituzionale", nome: "Magistrato Carlo Visconti" },
    { ruolo: "Collegio dei Revisori", nome: "Dott. Stefano Ducceschi, Dott.ssa Eliana Manes Rossi, Dott. Daniele D’ambrosio" },
  ];

  const sections = [
    {
      id: "Il Consiglio di Amministrazione",
      title: "Consiglio di Amministrazione",
      content: (
        <>
          <p className="mb-4">
            Sono membri del Consiglio di Amministrazione, oltre al Presidente e al Vicepresidente, componenti di diritto, i membri Fondatori in persona del loro legale rappresentante o di altro soggetto all’uopo da loro designato; il membro del Consiglio di Amministrazione designato dall’Ordine degli Avvocati di Napoli è componente del Consiglio diverso dal suo Presidente (Vicepresidente di diritto della Fondazione).
          </p>
          
          <p className="mb-4">
            <strong>Il Consiglio di Amministrazione</strong>: nomina i membri elettivi del Comitato Esecutivo; nomina il Tesoriere, anche al di fuori dei suoi membri, determinandone i compiti; determina, in conformità agli scopi statutari e d’intesa col Comitato Scientifico, gli obiettivi e i programmi della Fondazione; verifica periodicamente i risultati complessivi della gestione, approva entro il mese di luglio il bilancio preventivo dell’anno seguente ed entro il mese di maggio il bilancio consuntivo dell’anno precedente; provvede sugli affari posti all’attenzione dal Comitato Esecutivo e dal Comitato Scientifico; delibera sul recesso dei membri Fondatori e Sostenitori; delibera sulle modifiche dello Statuto della Fondazione proposte dal Presidente, dal Comitato Esecutivo, dal Comitato Scientifico o da un terzo del Consiglio.
          </p>
          
          <p className="mb-4">
            <strong>Il Consiglio di Amministrazione è composto dai signori:</strong>
          </p>
          
          {membriConsiglio.map((membro, index) => (
            <div key={index} className="mb-2">
              <strong>{membro.ruolo}</strong><br />
              {membro.nome}
            </div>
          ))}
        </>
      ),
    },
    {
      id: "Comitato Esecutivo",
      title: "Comitato Esecutivo",
      content: (
        <>
          <p className="mb-4">
            E’ composto da nove membri, e precisamente dal Presidente e dal Vicepresidente della Fondazione, membri di diritto; gli altri sette membri sono nominati tra i membri del Consiglio di Amministrazione, assicurando che siano comunque presenti due avvocati (oltre il Vicepresidente) designati con delibera del Consiglio dell’Ordine degli Avvocati, un notaio, un Avvocato dello Stato e un rappresentante delle Università.
          </p>
          
          <p className="mb-4">
            <strong>Il Comitato Esecutivo</strong> cura l’esecuzione dei deliberati del Consiglio di Amministrazione ed è investito dei più ampi poteri oltre che nell’ambito delle deleghe specialistiche che il Consiglio di Amministrazione gli conferisca per l’amministrazione del patrimonio della Fondazione, per la gestione delle attività economiche necessarie alla formazione ed all’erogazione delle rendite e per la realizzazione di quanto costituisce lo scopo della Fondazione stessa.
          </p>
          
          <p className="mb-4">
            <strong>Il Comitato Esecutivo</strong> cura, nell’ambito delle proprie funzioni, i rapporti con gli Organi della Fondazione nonché con gli Enti pubblici e privati partecipanti o comunque interessati al raggiungimento degli scopi della Fondazione, nonché all’utilizzo degli spazi di pertinenza della stessa anche per scopi extragiudiziari coerenti con la storica destinazione del Monumento. I membri del Comitato Esecutivo durano in carica quattro anni e sono rieleggibili.
          </p>
          
          <p className="mb-4">
            <strong>Il Comitato Esecutivo è composto dai signori:</strong>
          </p>
          
          {membriComitatoEsecutivo.map((membro, index) => (
            <div key={index} className="mb-2">
              <strong>{membro.ruolo}</strong><br />
              {membro.nome}
            </div>
          ))}
        </>
      ),
    },
    {
      id: "Comitato Scientifico",
      title: "Comitato Scientifico",
      content: (
        <>
          <p className="mb-4">
            E’ un organo consultivo della Fondazione ed ha il compito di promuovere ogni attività volta a garantire l’indirizzo scientifico della Fondazione nel rispetto della storica vocazione giuridico – forense del Castello quale luogo di studi e di dibattiti giuridico – culturali; a tal fine esprime parere obbligatorio sulle delibere del Consiglio di Amministrazione e del Comitato Esecutivo relative alle attività di carattere scientifico e culturale.
          </p>
          
          <p className="mb-4">
            E’ composto inizialmente dai soggetti nominati nell’atto costitutivo. Potrà inoltre essere aumentato con delibera del Consiglio di Amministrazione, su proposta del Presidente, con membri scelti tra persone particolarmente qualificate, di riconosciuto prestigio del mondo istituzionale, accademico e professionale, di riconosciuta professionalità nei settori in cui opera la Fondazione.
          </p>
          
          <p className="mb-4">
            Il Presidente del Comitato Scientifico partecipa, senza diritto di voto, alle riunioni del Consiglio di Amministrazione e del Comitato Esecutivo. Può farsi sostituire, in caso di impedimento, dal Vicario da lui nominato.
          </p>
          
          <p className="mb-4">
            Il Presidente cura la formazione del regolamento per il funzionamento del Comitato Scientifico.
          </p>
          
          <p className="mb-4">
            <strong>Il Comitato Scientifico è composto dai signori:</strong>
          </p>
          
          {membriComitatoScientifico.map((membro, index) => (
            <div key={index} className="mb-2">
              {membro.ruolo && <strong>{membro.ruolo}</strong>}<br />
              {membro.nome}
            </div>
          ))}
        </>
      ),
    },
    {
      id: "collegio-dei-revisori",
      title: "Collegio dei Revisori",
      content: (
        <>
          <ul className="list-disc list-inside ml-4 mb-4">
            <li>Dott. Stefano Ducceschi</li>
            <li>Dott. Daniele D’ambrosio</li>
            <li>Dott.ssa Olga Orecchio</li>
          </ul>
        </>
      ),
    }
    
  
  
  ];

  const [activeSection, setActiveSection] = useState(sections[0].id);

  return (
    <div className="container mx-auto py-8 flex flex-col lg:flex-row px-4 sm:px-6 bg-white lg:bg-transparent">
      {/* Indice Laterale */}
      <aside className="lg:w-1/4 lg:pr-8 border-r border-gray-300 mb-6 lg:mb-0">
        <h3 className="text-sm font-bold text-gray-700 uppercase mb-4">
          Indice della Pagina
        </h3>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li
              key={section.id}
              className={`cursor-pointer transition duration-300 ${
                activeSection === section.id
                  ? "text-blue-900 font-bold"
                  : "text-gray-500 hover:text-blue-700"
              }`}
              onClick={() => setActiveSection(section.id)}
            >
              {section.title}
            </li>
          ))}
        </ul>
      </aside>

      {/* Contenuto Centrale */}
      <div className="lg:w-3/4 lg:pl-8">
        {sections.map(
          (section) =>
            activeSection === section.id && (
              <div key={section.id}>
                <h2 className="text-3xl font-bold text-blue-900 mb-4">
                  {section.title}
                </h2>
                <div className="text-gray-700 leading-relaxed">
                  {section.content}
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Organi;
