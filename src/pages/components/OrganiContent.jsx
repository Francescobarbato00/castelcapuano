import { useState } from "react";

const Organi = () => {
  const sections = [
    {
      id: "Il Consiglio di Amministrazione",
      title: "Consiglio di Amministrazione",
      content: `
`
    },
    
    {
        id: "Comitato Esecutivo",
        title: "Comitato Esecutivo",
        content: `
  
  `
      },
    
    
    {
      id: "Comitato Scientifico",
      title: "Comitato Scientifico",
      content: `

`
    },
         
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

export default Organi;
