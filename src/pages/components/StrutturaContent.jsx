import { useState } from "react";

const IndicePagina = () => {
  const sections = [
    {
      id: "chi-siamo",
      title: "Chi siamo",
      content: `
Presentazione della Fondazione

Il 15 giugno 2011 alla presenza del Capodipartimento del Ministero della Giustizia, Luigi Biritteri, è avvenuta la firma ufficiale dell'atto di nascita dell'organismo...
(continua come fornito sopra)
`
    },
    
    {
        id: "sede",
        title: "Sede",
        content: `
  
  `
      },
    
    
    {
      id: "storia",
      title: "Storia di Castel Capuano",
      content: `
Situato al limite orientale del decumano maggiore (odierna via Tribunali) Castel Capuano fu costruito da Guglielmo I detto il Malo...
(continua come fornito sopra)
`
    },
    {
      id: "statuto",
      title: "Statuto della Fondazione",
      content: `
Il presente Statuto stabilisce le regole per l'organizzazione e il funzionamento della Fondazione. La Fondazione ha l'obiettivo specifico di creare un polo di alta formazione giuridica e forense, promuovendo lo sviluppo di competenze professionali di eccellenza in ambito giuridico...
`
    },
    {
      id: "scopi",
      title: "Scopi della Fondazione",
      content: `
La Fondazione si prefigge i seguenti scopi:

1. Creare un polo di alta formazione giuridica e forense con attenzione ai processi telematici e digitali.
2. Promuovere attività culturali, scientifiche e di ricerca in ambito giuridico.
3. Valorizzare e preservare il patrimonio storico-artistico di Castel Capuano.
4. Offrire servizi di formazione continua per professionisti e operatori del settore giuridico.
5. Attivare collaborazioni con istituzioni nazionali e internazionali per il miglioramento delle pratiche giuridiche.
`
    },
    {
      id: "dati-fiscali",
      title: "Dati Fiscali",
      content: `
Denominazione: Fondazione Castel Capuano  
Indirizzo: Piazza Enrico De Nicola, 2 - 80139 Napoli (NA)  
Codice Fiscale:  
Partita IVA:  
Telefono:  
Email: 
`
    }
  ];

  const [activeSection, setActiveSection] = useState(sections[0].id);

  return (
    <div className="container mx-auto py-8 flex flex-col lg:flex-row px-4 sm:px-6">
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
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default IndicePagina;
