import { useState } from "react";

const IndicePagina = () => {
  const sections = [
    {
      id: "chi-siamo",
      title: "Chi siamo",
      content: (
        <>
          <h3 className="text-xl font-semibold mb-2">Presentazione della Fondazione</h3>
          <p className="mb-4">
            Il 15 giugno 2011 alla presenza del Capodipartimento del Ministero della Giustizia, Luigi Biritteri, è avvenuta la firma ufficiale dell’atto di nascita dell’organismo che porterà nell’ex palazzo di giustizia partenopeo giudici, avvocati, notai, personale amministrativo ed esponenti della società civile, mantenendo la tradizionale destinazione a luogo di studi e di dibattiti giuridici.
          </p>
          <p className="mb-4">
            Nel febbraio dello stesso anno, è stata riconosciuta la personalità giuridica da parte della Prefettura di Napoli, competente in quanto, per Statuto, le attività della Fondazione, che, attraverso un fondo con contributi provenienti da enti pubblici e privati, consentirà la manutenzione di cui necessita l’antico castello, esorbitano l’ambito territoriale della Regione Campania, estendendosi di fatto a livello nazionale ed europeo.
          </p>
          <p className="mb-4">
            La Fondazione ha l’obiettivo specifico di creare un polo di alta formazione giurico-forense, con peculiare riferimento all’informatica giuridica nell’ottica di e-justice (processo telematico, digitalizzazione e servizi connessi) nonché alla formazione degli organismi di mediazione e conciliazione con riferimento alle normative dell’Unione europea, conservando comunque Castel Capuano nell’ambito della Giustizia.
          </p>
          <p className="mb-4">
            Nell’antico monumento, sede di attività giudiziaria fin dal XVI secolo, dove sono stati già consegnati i locali per lo svolgimento delle attività dell’organismo di mediazione del Consiglio dell’Ordine degli Avvocati di Napoli, hanno oggi sede la sezione napoletana dell’Agenzia Nazionale per i beni confiscati, la sezione della Scuola di Formazione del Ministero della Giustizia e alcuni uffici della giustizia napoletana (tra questi il Consiglio giudiziario e gli uffici di rappresentanza della Corte d’Appello e della Procura Generale e il Commissariato agli usi civici), nonché la storica biblioteca De Marsico, e la Scuola di Alta Formazione dell’Avvocatura di recente costituitasi in fondazione.
          </p>
          <p className="mb-4">
            Sulla base di una convenzione con il MIBAC vi troverà sede anche un settore dell’Archivio di Stato riguardante la giustizia napoletana fin dal 1800.
          </p>
          <p className="mb-4">
            Tra le iniziative miranti a rivalutare il palazzo merita una speciale menzione la realizzazione, a cura della Sovrintendenza per i beni architettonici e paesaggistici di Napoli, di una sala espositiva sulla storia del monumento (Castel Capuano palazzo di giustizia: progetti di restauro e trasformazioni al tempo dell’unità) che potrà diventare permanente e diventare anche un punto di riferimento turistico.
          </p>
          <p className="mb-4">
            Nell’ottica della rinascita del Castello, che costituiva in antico anche la porta di accesso ai decumani, si realizzerà, grazie ad un progetto PON 2010 – 2013 un “percorso di legalità” rivolto alla cittadinanza e in particolare ai giovani. È prevista l’attivazione di tavoli culturali, reti sociali, network permanenti che coinvolgano il mondo dell’associazionismo, delle pubbliche amministrazioni, delle scuole e degli istituti formativi ed educativi. In questo modo si intende evitare il degrado dello storico maniero, valorizzando allo stesso tempo il centro antico di Napoli.
          </p>
          <p className="mb-4">
            Il prof. Massimo Marrelli, incaricato dal Ministro della Giustizia a guidare la Fondazione con sede proprio nello storico complesso, ha il compito di promuovere ogni iniziativa che miri a mantenere nell’ambito della giurisdizione Castel Capuano ma anche a realizzare gli scopi della Fondazione.
          </p>
          <p className="mb-4">
            La carica di vicepresidente è affidata di diritto al presidente del Consiglio dell’Ordine degli Avvocati di Napoli, primo sostenitore dell’antica sede giudiziaria. Si è così realizzato quanto fortemente voluto dal presidente della Corte di Appello di Napoli, Antonio Buonajuto, a capo del “Comitato promotore per Castel Capuano” costituitosi nel 2011, e dall’avv. Mario Ruberto, presidente del Centro Studi ed Osservatorio per la giustizia “Castel Capuano”.
          </p>
          <p className="mb-4">
            Tra i soci fondatori anche la Regione Campania, la Provincia, il Comune di Napoli, il Consiglio dell’Ordine degli Avvocati di Napoli, la Fondazione Banco di Napoli, l’Unione Industriali, Avvocatura Distrettuale dello Stato di Napoli, Fondazione dell’Avvocatura per l’Alta Formazione Forense, Biblioteca Alfredo De Marsico, Consiglio Notarile dei distretti riuniti di Napoli, Torre Annunziata e Nola, Fondazione Emanuele Casale, Ordine dei Commercialisti e degli esperti Contabili del circondario del Tribunale di Napoli, Ordine degli Psicologi della Regione Campania, Università Federico II, Università degli Studi Suor Orsola Benincasa, Centro Studi ed Osservatorio per la Giustizia Castel Capuano, la SUN – Seconda Università di Napoli e l’istituto Bancario Unicredit.
          </p>
          <p className="mb-4">
            Tra i soci sostenitori l’Associazione Nazionale dei Magistrati, l’Ordine dei Giornalisti della Campania, ACI Automobile Club di Napoli nonché il Consiglio Superiore della Magistratura e l’Institut des hautes sur la justice. La qualifica di socio sostenitore, ai sensi dell’art. 5 dello Statuto, viene attribuita con delibera del Consiglio di Amministrazione ai soggetti che condividono le finalità della Fondazione, contribuiscono alla realizzazione dei suoi scopi mediante contributi anche in denaro.
          </p>
        </>
      ),
    },
    {
      id: "sede",
      title: "Sede",
      content: (
        <>
          <p className="mb-4">
            La Fondazione ha la propria sede legale ed amministrativa in Napoli (NA), presso il complesso di Castel Capuano,
            <br />
            Piazza Enrico De Nicola, 2
            <br />
            CAP: 80139.
          </p>
          <p className="mb-4">
            La sede della Fondazione è aperta tutti i Giovedì dalle 10.30 alle 13.30.
          </p>
        </>
      ),
    },
    {
      id: "storia",
      title: "Storia di Castel Capuano",
      content: (
        <>
          <p className="mb-4">
            Situato al limite orientale del decumano maggiore (odierna via Tribunali) Castel Capuano fu costruito da Guglielmo I detto il Malo, figlio di Ruggiero il Normanno, verso il 1150, su un preesistente fortilizio di età bizantina, in posizione strategica, a cavallo della cinta muraria, a difesa di Porta Capuana (da cui derivò il nome). Edificato come fortezza fu poi ristrutturato da Federico II di Svevia verso il 1240, e adattato a dimora regia per i periodi in cui il Sovrano da Palermo veniva a Napoli. Con l’avvento della dinastia angioina, nel 1266, Napoli diventò capitale del regno e città europea e Carlo I avviò la costruzione di Castel Nuovo, che diventò dimora reale preferita a Castel Capuano, che restò residenza saltuaria di principi e reggimenti reali.
          </p>
          <p className="mb-4">
            Durante il regno di Giovanna II, il Castello fu testimone dell’efferato assassinio di Ser Gianni Caracciolo, gran siniscalco e favorito della regina. Con gli Aragonesi Castel Capuano fu inglobato entro la nuova cinta muraria della città, perdendo completamente il suo carattere militare per diventare dimora stabile di Alfonso, Duca di Calabria, e vivere il suo periodo di massimo splendore. Donato da Carlo V al Lannoy, principe di Sulmona, il Castello, dopo pochi anni fu espropriato dal vicerè Pedro de Toledo che, fatti eseguire i necessari lavori di adeguamento, vi trasferì, intorno al 1540 tutte le Corti di Giustizia, civili e criminali, che erano disseminate per la Città. Con il nome di “Tribunale della Vicaria”. Castel Capuano fu attrezzato anche a carcere.
          </p>
          <p className="mb-4">
            Sottoposto nei secoli a ripetute modifiche sia all’interno che all’esterno, l’edificio ebbe un radicale restauro ad opera dell’architetto G. Riegler, tra il 1858 e il 1861. Dopo il 1861 la parte adibita a carcere fu chiusa e il Castello restò solamente per la funzione di Tribunale che conserva tuttora. Sull’ingresso è visibile lo stemma di Carlo V con l’aquila ad ali spiegate, tra le insegne della casa di Spagna, ritenuto opera di Miciato D’Amato e Francesco Sangallo. Sotto c’è l’epigrafe che cita la destinazione a Palazzo di Giustizia voluta dal Toledo.
          </p>
          <h4 className="text-lg font-semibold mb-2">Opere d’Arte nelle Sale della Corte d’Appello di Castel Capuano</h4>
          <p className="mb-4">
            Castel Capuano, uno dei più antichi della città di Napoli, fu fondato secondo la tradizione dal re di Sicilia Guglielmo I il Malo (1120-1166), figlio di Ruggero il Normanno, e ultimato nel 1154, ma con ogni probabilità già in epoca greco-romana doveva esistere una struttura fortificata nei pressi della porta a quel tempo già detta “Capuana”. Collocato extra moenia in un punto nevralgico di controllo delle comunicazioni con l’entroterra, Castel Capuano assolveva – essenzialmente – a ruolo di difesa, anche se intorno al 1220, Federico II di Svevia volle adattarlo a sua dimora ampliandolo, mantenendone comunque inalterate le originarie caratteristiche di fortezza.
          </p>
          <p className="mb-4">
            Con l’avvento degli Angioini, il castello fu ulteriormente ingrandito, tuttavia i nuovi sovrani non lo scelsero come loro unica dimora e avviarono nel 1279 la costruzione di Castel Nuovo. Castel Capuano, ormai non più sede reale, ospitò principi, alti dignitari, personaggi illustri – come ad esempio Francesco Petrarca – e divenne luogo deputato a feste e celebrazioni importanti come il matrimonio di Carlo III di Durazzo. Il castello fu molto amato dalla regina Giovanna I d’Angio che si circondò di una splendida corte e vi istituì un’Accademia detta Giuochi floreali.
          </p>
          <p className="mb-4">
            Con la dinastia aragonese, Castel Capuano perse definitivamente il suo carattere militare e continuò ad essere esclusivamente luogo di fasti. Alfonso d’Aragona, divenuto re, volle che le sale del castello fossero abbellite con affreschi commissionati al suo pittore di corte il valenzano Jacomart Baço. Verso la fine del XV secolo, Ferdinando I d’Aragona (1431 ca.-1494) commissionò al fiorentino Giuliano da Majano l’ampliamento delle mura della città inglobandovi anche il castello; fu elevata anche la nuova porta Capuana rivestita dalla elegante decorazione marmorea concepita dallo stesso architetto e completata dallo scultore Giovanni da Nola.
          </p>
          <p className="mb-4">
            Nel 1535 vi dimorò, seppur per un breve periodo, Carlo V, il quale donò il castello al principe di Sulmona Filippo Lannoy. Nel 1537 il castello fu espropriato dal vicerè spagnolo don Pedro de Toledo – il cui stemma campeggia nell’angolo della facciata Nord-Est del castello – che affidò a Ferdinando Manlio i lavori di adattamento del castello a sede dei Tribunali, in cui furono riunite la Gran Corte della Vicaria, divisa in quattro ruote, due civili e due criminali; il Sacro Regio Consiglio che esaminava le principali cause civili del Regno ed in ultimo appello le sentenze civili e criminali; la Regia Camera della Sommaria, che aveva competenza finanziaria e fiscale; il Tribunale della Zecca, addetto all’emanazione del bollo delle unità di misura; il Tribunale della Bagliva, che trattava le cause dei danni di minor rilievo. I sotterranei del castello furono adibiti a prigioni.
          </p>
          <p className="mb-4">
            All’inizio del XVIII secolo, durante la congiura di Macchia, il castello fu assediato e devastato dal popolo, e così iniziò un periodo di decadenza per l’edificio. Sarà Carlo di Borbone a provvedere alla sua ristrutturazione. I successivi interventi di restauro, culminati con quello eseguito dall’architetto Giovanni Riegler dal 1858 al 1861, se da una parte hanno contribuito a portare alla luce antichi resti di epoca greco-romana, dall’altro hanno alterato l’originario aspetto del castello. Tuttavia ancora oggi nel castello è possibile leggere l’evoluzione storico-artistica che lo ha visto protagonista nei secoli.
          </p>
          <p className="mb-4">
            Emblematica in tal senso è la famosa Sala dei Busti, al secondo piano di Castel Capuano, che trae tale appellativo dalla presenza di una serie di sculture in marmo a mezzo busto, collocate lungo l’intero perimetro della sala, che celebrano i principali avvocati del foro napoletano. L’ampio salone fu decorato su tre lati intorno al 1770 con affreschi di Antonio Cacciapuoti (attivo dal 1747 al 1770) raffiguranti le Personificazioni delle dodici Province del Regno di Napoli entro Architetture prospettiche opera di Francesco De Ritis e Vincenzo Bruno detto l’Abate. A partire dalla porta d’ingresso si succedono le dodici allegorie personificate da figure femminili, le quali sono rappresentate con simboli di ciascuna provincia e ognuna con il nome di riferimento (es. la Campania ha il capo adornato da una corona di fiori e da fasci di grano, tralci di uva e frutta e ai cui piedi è visibile sul suo scudo sono le cornucopie, simbolo dell’abbondanza). Tali Allegorie si stagliano in una monumentale architettura prospettica costituita da colonne di ordine composito intramezzate da finte finestre strombate con festoni, cartocci e piedistalli. Le prospettive architettoniche continuano negli affreschi ottocenteschi risalenti al restauro del Rigler, dove in una balaustra dipinta da Ignazio Perricci (1834-19??) è l’Allegoria della Giustizia che trionfa sui Vizi opera di Biagio Molinaro (1825-1868). Dal Salone dei Busti si accede alla Cappella della Sommaria, che è uno dei pochi luoghi rimasti integri nell’edificio di estrema ricchezza decorativa.
          </p>
          <p className="mb-4">
            La cappella, destinata a luogo di preghiera dei Presidenti della Sommaria prima di decidere sulle condanne da applicare ai sudditi, fu interamente decorata alla metà del Cinquecento da stucchi di raffinati artisti e da affreschi con Storie di Cristo e il Giudizio Universale realizzati da Pedro Rubiales detto Roviale Spagnolo[figg.1,2,3]. Quasi per una sorta di horror vacui, il Roviale tese a riempire tutti gli spazi restanti vuoti della volta con figure di Virtù e grottesche. In epoca imprecisata gli affreschi furono ricoperti con calce e pertanto non furono citati dagli autori delle guide napoletane tra XVII e XIX secolo. La riscoperta di questo straordinario ciclo avvenne verso 1860, quando l’intero castello fu oggetto di un più ampio restauro. Sono ancora da segnalare le volte di due sale del tribunale civile dipinte da Belisario Corenzio [fig.4], che meritano un attento recupero.
          </p>
          <p className="mb-4">
            Nella prima sala è Il giudizio di Salomone nel riquadro centrale della volta a padiglione, mentre nei pennacchi e nelle lunette sottostanti sono dipinte, entro grottesche, cinque allegorie di Virtù e vari stemmi tra i quali quello della casa di Spagna. Due pilastri mettono in comunicazione questa sala con la seconda, che presenta decorazioni molto simili. Nel riquadro centrale della volta a padiglione è la scena del Giudizio di Davide, mentre nei cinque pennacchi sono raffigurate altrettante Virtù entro riquadrature con finti fondali a mosaici dorati. Dal Salone dei Busti si accede alla splendida biblioteca di Castel Capuano intitolata ad Alfredo De Marsico; nell’attiguo salone sono custoditi preziosi incunaboli.
          </p>
          <p className="mb-4">(D.C.)</p>
          <h4 className="text-lg font-semibold mb-2">Opere d’Arte nelle Sale della Corte d’Appello di Castel Capuano</h4>
          <p className="mb-4">
            Castel Capuano Nove secoli di storia (Clelia Abate, Daniela Castaldi)
          </p>
          <p className="mb-4">
            Il castello, uno dei più antichi della città di Napoli, fu fondato secondo la tradizione dal re di Sicilia Guglielmo I il Malo (1120-1166), figlio di Ruggero il Normanno, e ultimato nel 1154, ma con ogni probabilità già in epoca greco-romana doveva esistere una struttura fortificata nei pressi della porta a quel tempo già detta “Capuana”. Collocato extra moenia in un punto nevralgico di controllo delle comunicazioni con l’entroterra, Castel Capuano assolveva – essenzialmente – a ruolo di difesa, anche se intorno al 1220, Federico II di Svevia volle adattarlo a sua dimora ampliandolo, mantenendone comunque inalterate le originarie caratteristiche di fortezza.
          </p>
          <p className="mb-4">
            Con l’avvento degli Angioini, il castello fu ulteriormente ingrandito, tuttavia i nuovi sovrani non lo scelsero come loro unica dimora e avviarono nel 1279 la costruzione di Castel Nuovo. Castel Capuano, ormai non più sede reale, ospitò principi, alti dignitari, personaggi illustri – come ad esempio Francesco Petrarca – e divenne luogo deputato a feste e celebrazioni importanti come il matrimonio di Carlo III di Durazzo. Il castello fu molto amato dalla regina Giovanna I d’Angio che si circondò di una splendida corte e vi istituì un’Accademia detta Giuochi floreali.
          </p>
          <p className="mb-4">
            Con la dinastia aragonese, Castel Capuano perse definitivamente il suo carattere militare e continuò ad essere esclusivamente luogo di fasti. Alfonso d’Aragona, divenuto re, volle che le sale del castello fossero abbellite con affreschi commissionati al suo pittore di corte il valenzano Jacomart Baço. Verso la fine del XV secolo, Ferdinando I d’Aragona (1431 ca.-1494) commissionò al fiorentino Giuliano da Majano l’ampliamento delle mura della città inglobandovi anche il castello; fu elevata anche la nuova porta Capuana rivestita dalla elegante decorazione marmorea concepita dallo stesso architetto e completata dallo scultore Giovanni da Nola.
          </p>
          <p className="mb-4">
            Nel 1535 vi dimorò, seppur per un breve periodo, Carlo V, il quale donò il castello al principe di Sulmona Filippo Lannoy. Nel 1537 il castello fu espropriato dal vicerè spagnolo don Pedro de Toledo – il cui stemma campeggia nell’angolo della facciata Nord-Est del castello – che affidò a Ferdinando Manlio i lavori di adattamento del castello a sede dei Tribunali, in cui furono riunite la Gran Corte della Vicaria, divisa in quattro ruote, due civili e due criminali; il Sacro Regio Consiglio che esaminava le principali cause civili del Regno ed in ultimo appello le sentenze civili e criminali; la Regia Camera della Sommaria, che aveva competenza finanziaria e fiscale; il Tribunale della Zecca, addetto all’emanazione del bollo delle unità di misura; il Tribunale della Bagliva, che trattava le cause dei danni di minor rilievo. I sotterranei del castello furono adibiti a prigioni.
          </p>
          <p className="mb-4">
            All’inizio del XVIII secolo, durante la congiura di Macchia, il castello fu assediato e devastato dal popolo, e così iniziò un periodo di decadenza per l’edificio. Sarà Carlo di Borbone a provvedere alla sua ristrutturazione. I successivi interventi di restauro, culminati con quello eseguito dall’architetto Giovanni Riegler dal 1858 al 1861, se da una parte hanno contribuito a portare alla luce antichi resti di epoca greco-romana, dall’altro hanno alterato l’originario aspetto del castello. Tuttavia ancora oggi nel castello è possibile leggere l’evoluzione storico-artistica che lo ha visto protagonista nei secoli.
          </p>
          <p className="mb-4">
            Emblematica in tal senso è la famosa Sala dei Busti, al secondo piano di Castel Capuano, che trae tale appellativo dalla presenza di una serie di sculture in marmo a mezzo busto, collocate lungo l’intero perimetro della sala, che celebrano i principali avvocati del foro napoletano. L’ampio salone fu decorato su tre lati intorno al 1770 con affreschi di Antonio Cacciapuoti (attivo dal 1747 al 1770) raffiguranti le Personificazioni delle dodici Province del Regno di Napoli entro Architetture prospettiche opera di Francesco De Ritis e Vincenzo Bruno detto l’Abate. A partire dalla porta d’ingresso si succedono le dodici allegorie personificate da figure femminili, le quali sono rappresentate con simboli di ciascuna provincia e ognuna con il nome di riferimento (es. la Campania ha il capo adornato da una corona di fiori e da fasci di grano, tralci di uva e frutta e ai cui piedi è visibile sul suo scudo sono le cornucopie, simbolo dell’abbondanza). Tali Allegorie si stagliano in una monumentale architettura prospettica costituita da colonne di ordine composito intramezzate da finte finestre strombate con festoni, cartocci e piedistalli. Le prospettive architettoniche continuano negli affreschi ottocenteschi risalenti al restauro del Rigler, dove in una balaustra dipinta da Ignazio Perricci (1834-19??) è l’Allegoria della Giustizia che trionfa sui Vizi opera di Biagio Molinaro (1825-1868). Dal Salone dei Busti si accede alla Cappella della Sommaria, che è uno dei pochi luoghi rimasti integri nell’edificio di estrema ricchezza decorativa.
          </p>
          <p className="mb-4">
            La cappella, destinata a luogo di preghiera dei Presidenti della Sommaria prima di decidere sulle condanne da applicare ai sudditi, fu interamente decorata alla metà del Cinquecento da stucchi di raffinati artisti e da affreschi con Storie di Cristo e il Giudizio Universale realizzati da Pedro Rubiales detto Roviale Spagnolo[figg.1,2,3]. Quasi per una sorta di horror vacui, il Roviale tese a riempire tutti gli spazi restanti vuoti della volta con figure di Virtù e grottesche. In epoca imprecisata gli affreschi furono ricoperti con calce e pertanto non furono citati dagli autori delle guide napoletane tra XVII e XIX secolo. La riscoperta di questo straordinario ciclo avvenne verso 1860, quando l’intero castello fu oggetto di un più ampio restauro. Sono ancora da segnalare le volte di due sale del tribunale civile dipinte da Belisario Corenzio [fig.4], che meritano un attento recupero.
          </p>
          <p className="mb-4">
            Nella prima sala è Il giudizio di Salomone nel riquadro centrale della volta a padiglione, mentre nei pennacchi e nelle lunette sottostanti sono dipinte, entro grottesche, cinque allegorie di Virtù e vari stemmi tra i quali quello della casa di Spagna. Due pilastri mettono in comunicazione questa sala con la seconda, che presenta decorazioni molto simili. Nel riquadro centrale della volta a padiglione è la scena del Giudizio di Davide, mentre nei cinque pennacchi sono raffigurate altrettante Virtù entro riquadrature con finti fondali a mosaici dorati. Dal Salone dei Busti si accede alla splendida biblioteca di Castel Capuano intitolata ad Alfredo De Marsico; nell’attiguo salone sono custoditi preziosi incunaboli.
          </p>
          <p className="mb-4">
            (D.C.)
          </p>
          <h4 className="text-lg font-semibold mb-2">Opere d’Arte nelle Sale della Corte d’Appello di Castel Capuano</h4>
          <p className="mb-4">
            Castel Capuano Nove secoli di storia (Clelia Abate, Daniela Castaldi)
          </p>
          <p className="mb-4">
            Il castello, uno dei più antichi della città di Napoli, fu fondato secondo la tradizione dal re di Sicilia Guglielmo I il Malo (1120-1166), figlio di Ruggero il Normanno, e ultimato nel 1154, ma con ogni probabilità già in epoca greco-romana doveva esistere una struttura fortificata nei pressi della porta a quel tempo già detta “Capuana”. Collocato extra moenia in un punto nevralgico di controllo delle comunicazioni con l’entroterra, Castel Capuano assolveva – essenzialmente – a ruolo di difesa, anche se intorno al 1220, Federico II di Svevia volle adattarlo a sua dimora ampliandolo, mantenendone comunque inalterate le originarie caratteristiche di fortezza.
          </p>
          <p className="mb-4">
            Con l’avvento degli Angioini, il castello fu ulteriormente ingrandito, tuttavia i nuovi sovrani non lo scelsero come loro unica dimora e avviarono nel 1279 la costruzione di Castel Nuovo. Castel Capuano, ormai non più sede reale, ospitò principi, alti dignitari, personaggi illustri – come ad esempio Francesco Petrarca – e divenne luogo deputato a feste e celebrazioni importanti come il matrimonio di Carlo III di Durazzo. Il castello fu molto amato dalla regina Giovanna I d’Angio che si circondò di una splendida corte e vi istituì un’Accademia detta Giuochi floreali.
          </p>
          <p className="mb-4">
            Con la dinastia aragonese, Castel Capuano perse definitivamente il suo carattere militare e continuò ad essere esclusivamente luogo di fasti. Alfonso d’Aragona, divenuto re, volle che le sale del castello fossero abbellite con affreschi commissionati al suo pittore di corte il valenzano Jacomart Baço. Verso la fine del XV secolo, Ferdinando I d’Aragona (1431 ca.-1494) commissionò al fiorentino Giuliano da Majano l’ampliamento delle mura della città inglobandovi anche il castello; fu elevata anche la nuova porta Capuana rivestita dalla elegante decorazione marmorea concepita dallo stesso architetto e completata dallo scultore Giovanni da Nola.
          </p>
          <p className="mb-4">
            Nel 1535 vi dimorò, seppur per un breve periodo, Carlo V, il quale donò il castello al principe di Sulmona Filippo Lannoy. Nel 1537 il castello fu espropriato dal vicerè spagnolo don Pedro de Toledo – il cui stemma campeggia nell’angolo della facciata Nord-Est del castello – che affidò a Ferdinando Manlio i lavori di adattamento del castello a sede dei Tribunali, in cui furono riunite la Gran Corte della Vicaria, divisa in quattro ruote, due civili e due criminali; il Sacro Regio Consiglio che esaminava le principali cause civili del Regno ed in ultimo appello le sentenze civili e criminali; la Regia Camera della Sommaria, che aveva competenza finanziaria e fiscale; il Tribunale della Zecca, addetto all’emanazione del bollo delle unità di misura; il Tribunale della Bagliva, che trattava le cause dei danni di minor rilievo. I sotterranei del castello furono adibiti a prigioni.
          </p>
          <p className="mb-4">
            All’inizio del XVIII secolo, durante la congiura di Macchia, il castello fu assediato e devastato dal popolo, e così iniziò un periodo di decadenza per l’edificio. Sarà Carlo di Borbone a provvedere alla sua ristrutturazione. I successivi interventi di restauro, culminati con quello eseguito dall’architetto Giovanni Riegler dal 1858 al 1861, se da una parte hanno contribuito a portare alla luce antichi resti di epoca greco-romana, dall’altro hanno alterato l’originario aspetto del castello. Tuttavia ancora oggi nel castello è possibile leggere l’evoluzione storico-artistica che lo ha visto protagonista nei secoli.
          </p>
          <p className="mb-4">
            Emblematica in tal senso è la famosa Sala dei Busti, al secondo piano di Castel Capuano, che trae tale appellativo dalla presenza di una serie di sculture in marmo a mezzo busto, collocate lungo l’intero perimetro della sala, che celebrano i principali avvocati del foro napoletano. L’ampio salone fu decorato su tre lati intorno al 1770 con affreschi di Antonio Cacciapuoti (attivo dal 1747 al 1770) raffiguranti le Personificazioni delle dodici Province del Regno di Napoli entro Architetture prospettiche opera di Francesco De Ritis e Vincenzo Bruno detto l’Abate. A partire dalla porta d’ingresso si succedono le dodici allegorie personificate da figure femminili, le quali sono rappresentate con simboli di ciascuna provincia e ognuna con il nome di riferimento (es. la Campania ha il capo adornato da una corona di fiori e da fasci di grano, tralci di uva e frutta e ai cui piedi è visibile sul suo scudo sono le cornucopie, simbolo dell’abbondanza). Tali Allegorie si stagliano in una monumentale architettura prospettica costituita da colonne di ordine composito intramezzate da finte finestre strombate con festoni, cartocci e piedistalli. Le prospettive architettoniche continuano negli affreschi ottocenteschi risalenti al restauro del Rigler, dove in una balaustra dipinta da Ignazio Perricci (1834-19??) è l’Allegoria della Giustizia che trionfa sui Vizi opera di Biagio Molinaro (1825-1868). Dal Salone dei Busti si accede alla Cappella della Sommaria, che è uno dei pochi luoghi rimasti integri nell’edificio di estrema ricchezza decorativa.
          </p>
          <p className="mb-4">
            La cappella, destinata a luogo di preghiera dei Presidenti della Sommaria prima di decidere sulle condanne da applicare ai sudditi, fu interamente decorata alla metà del Cinquecento da stucchi di raffinati artisti e da affreschi con Storie di Cristo e il Giudizio Universale realizzati da Pedro Rubiales detto Roviale Spagnolo[figg.1,2,3]. Quasi per una sorta di horror vacui, il Roviale tese a riempire tutti gli spazi restanti vuoti della volta con figure di Virtù e grottesche. In epoca imprecisata gli affreschi furono ricoperti con calce e pertanto non furono citati dagli autori delle guide napoletane tra XVII e XIX secolo. La riscoperta di questo straordinario ciclo avvenne verso 1860, quando l’intero castello fu oggetto di un più ampio restauro. Sono ancora da segnalare le volte di due sale del tribunale civile dipinte da Belisario Corenzio [fig.4], che meritano un attento recupero.
          </p>
          <p className="mb-4">
            Nella prima sala è Il giudizio di Salomone nel riquadro centrale della volta a padiglione, mentre nei pennacchi e nelle lunette sottostanti sono dipinte, entro grottesche, cinque allegorie di Virtù e vari stemmi tra i quali quello della casa di Spagna. Due pilastri mettono in comunicazione questa sala con la seconda, che presenta decorazioni molto simili. Nel riquadro centrale della volta a padiglione è la scena del Giudizio di Davide, mentre nei cinque pennacchi sono raffigurate altrettante Virtù entro riquadrature con finti fondali a mosaici dorati. Dal Salone dei Busti si accede alla splendida biblioteca di Castel Capuano intitolata ad Alfredo De Marsico; nell’attiguo salone sono custoditi preziosi incunaboli.
          </p>
          <p className="mb-4">
            Nella sala successiva, dedicata al tema della Sacra Famiglia, si trovano dipinti provenienti dalla chiesa di San Giovanni Battista delle Monache. Sulla parete frontale a sinistra è la tela raffigurante l’Annunciazione, attribuita a Giuseppe Marullo, databile al 1640 circa. In quest’opera, della fase iniziale della sua attività, il pittore, nato attorno al primo decennio del secolo e morto nel 1685, replica fedelmente l’Annunciazione per la chiesa napoletana di San Gregorio Armeno, di Pacecco de Rosa, che fu uno dei suoi principali punti di riferimento. La tela dell’Annunciazione è caratterizzata da una intensa drammaticità e da morbidi panneggi, con una composizione che richiama i modi del grande emiliano Giovanni Lanfranco, di cui aveva assimilato la lezione attraverso l’insegnamento del Beinaschi.
          </p>
          <p className="mb-4">
            Sulla stessa parete, a destra, è la Fuga in Egitto, opera di un pittore napoletano della prima metà del XVII secolo che declina lo stile di Stanzione e di Pacecco con una seducente grazia sentimentale. Segue, sulla parete laterale destra, la tela raffigurante Il Battista, anch’essa attribuita al Marullo. In questo dipinto il precursore, con l’indice destro proteso, sembra voler indicare in una ideale continuità la tela che occupa il lato destro della parete d’ingresso raffigurante Sant’Anna che presenta la Vergine all’Eterno Padre, opera proveniente invece dalla chiesa di Sant’Agostino degli Scalzi, anch’essa assegnata alla prima maniera del Marullo, mentre la Circoncisione, sulla parete d’ingresso a sinistra, dei primi del XVII secolo, mostra caratteri fortemente controriformati, assimilabili all’austera semplicità di impianto della pittura di Fabrizio Santafede.
          </p>
          <p className="mb-4">
            Nella sala antistante lo studio del Presidente della Corte d’Appello, sulla parete destra, è ancora una tela proveniente dalla chiesa di San Giovanni Battista delle Monache raffigurante la Resurrezione di Lazzaro, opera di Oronzo Malinconico, membro della famiglia dei pittori della quale facevano parte i più noti Andrea e Nicola, opera caratterizzata da una forte consonanza con le opere di Luca Giordano databili allo stesso periodo, nella quale il pittore riesce a rendere con concentrazione estrema il momento in cui Lazzaro, fratello di Marta e Maria, richiamato dal grido di Cristo: “veni foras” emerge come uno spettro dal sepolcro.
          </p>
          <p className="mb-4">
            Nella stessa sala trovano oggi collocazione i ritratti dei cardinali che furono membri della confraternita della Disciplina della Croce; questi dipinti un tempo decoravano la sala delle udienze dietro l’altare maggiore della chiesa. Sulla parete di fronte è il Ritratto del Cardinale Girolamo Casanatta, datato 1673. A sinistra è il Ritratto del Cardinale Sarnelli del XIX secolo; i due ritratti, anche se di epoche e di ambiti diversi, sono caratterizzati da una notevole resa fisignomica e da una cura raffinata dei particolari dei costumi del tempo.
          </p>
          <p className="mb-4">
            Gli altri ritratti di prelati, confratelli della Disciplina della Croce, restaurati ed esposti negli ambienti della Corte d’Appello, sono il Ritratto del cardinale Astorgio Agnese, che come ricorda l’iscrizione tracciata sul dipinto fu arcivescovo di Benevento e morì nel 1312, databile alla seconda metà del XVII secolo, e il Ritratto del cardinale Rinaldo Brancaccio, morto nel 1327, dello stesso autore di quello precedente, realizzati allorché i membri dell’antica congrega decisero di commemorare i confratelli più importanti in una serie di ritratti. Notevole è anche il Ritratto di papa Clemente XIV, che rielabora l’immagine del pontefice diffusa attraverso le stampe del tempo; questo papa fu noto per aver emanato il breve del 1773 col quale veniva soppressa la compagnia di Gesù, tale atto gli valse la riconoscenza del re di Napoli.
          </p>
          <p className="mb-4">
            Nello studio del Presidente della Corte spicca, sulla parete frontale, la grande tela raffigurante la Cena in casa del Fariseo, un tempo sulla controfacciata della chiesa di San Giovanni Battista delle Monache.
          </p>
          <p className="mb-4">
            L’opera è replica di una tela di Mattia Preti (1613-1699) conservata nella chiesa di San Domenico Maggiore, ma come denota l’alta qualità della materia pittorica, esaltata dall’intervento di restauro, lungi dall’essere una stanca ripetizione di bottega, è da ritenersi in larga parte opera autografa del grande pittore calabrese che fissa qui il momento culminante del convito in casa del fariseo Simone che non aveva reso a Gesù gli onori dovuti secondo il costume ebraico, mentre la peccatrice Maddalena bagna di lacrime i piedi di Cristo e li unge con l’olio profumato. Il dipinto, concepito come un quadro di galleria e non come dipinto di chiesa, fa parte di un genere molto praticato da Preti, quello delle scene di banchetto fortemente ispirate a soggetti simili di Paolo Veronese.
          </p>
          <p className="mb-4">
            Un altro notevole recupero è costituito dalla tela di Giacomo Farelli (1624-1701) raffigurante L’incredulità di San Tommaso, nello studio del Dirigente amministrativo della Corte, anch’essa caratterizzata da accenti neoveneti, resi però con quella maniera statuina e asciutta che segnò costantemente lo stile di questo raffinato pittore attivo tra Napoli e l’Abruzzo. Vengono ad aggiungersi ai dipinti due splendidi Angeli marmorei capoaltare settecenteschi, trafugati dalla chiesa della Disciplina della Croce nel 1998 e ritrovati dai Carabinieri, che completano la serie delle opere d’arte recuperate ed esposte nelle sale della Corte d’Appello in Castel Capuano.
          </p>
          <p className="mb-4">
            <strong>Ideazione e coordinamento scientifico:</strong> Ida Maietta della Soprintendenza per i Beni Architettonici ed il Paesaggio e per il Patrimonio Storico Artistico e Demoetnoantropologico di Napoli e Provincia
          </p>
          <p className="mb-4">
            <strong>Catalogazione e cartellinaggio delle opere:</strong> Clelia Abate, Daniela Castaldi
          </p>
          <p className="mb-4">
            <strong>Restauri:</strong> Ambra Restauri di Gaetano Corradino e C.
          </p>
          <p className="mb-4">
            Si ringraziano per la collaborazione l’arch. Maria Teresa Minervini e la dott.ssa Annalisa Porzio, della Soprintendenza per i BAP e per il PSAD.
          </p>
        </>
      ),
    },
    {
      id: "statuto",
      title: "Statuto della Fondazione",
      content: (
        <>
          <h3 className="text-xl font-semibold mb-2">Statuto della Fondazione Castel Capuano</h3>
          <p className="mb-4">Raccolta n.39835 – Allegato “X”</p>
          <h4 className="text-lg font-semibold mb-2">ARTICOLO 1</h4>
          <p className="mb-4">
            <strong>DENOMINAZIONE.</strong> E’ costituita la “FONDAZIONE CASTEL CAPUANO”, voluta per iniziativa del “COMITATO PROMOTORE PER CASTEL CAPUANO” e fondata a seguito dell’emanazione del D.M. 19 novembre 2010.
          </p>
          <h4 className="text-lg font-semibold mb-2">ARTICOLO 2</h4>
          <p className="mb-4">
            <strong>SEDE.</strong> La Fondazione ha la propria sede legale ed amministrativa in Napoli (NA), presso il complesso di Castel Capuano.
          </p>
          <h4 className="text-lg font-semibold mb-2">ARTICOLO 3</h4>
          <p className="mb-4">
            <strong>SCOPO.</strong> Scopo della Fondazione “CASTEL CAPUANO” – fermo rimanendo il mantenimento della antica sede alla funzione di giustizia – è quello di assicurare, nel rispetto delle caratteristiche del Monumento, una destinazione che ne esalti la tradizione giuridico-forense nonché la sua storica vocazione a luogo di studi e dibattiti giuridici, non solo della Città di Napoli, ma di tutta la Nazione e nel contesto dell’Unione Europea, nonché alla creazione in tale sede di un polo di alta formazione giuridica e professionale destinato, tra l’altro, alla formazione post-universitaria per le professioni forensi e notarili, alla formazione dei magistrati, alla formazione decentrata del personale amministrativo, con peculiare riferimento all’informatica giuridica ed e-justice (processo telematico, digitalizzazione e servizi connessi), alla formazione degli organismi di mediazione e conciliazione, anche con riferimento alle normative e prospettive dell’Unione Europea, conservando comunque Castel Capuano nell’ambito della Giustizia. A tal fine, scopo della Fondazione è altresì quello di provvedere al recupero conservativo e alla manutenzione straordinaria di Castel Capuano, relativamente agli spazi che verranno assegnati alla Fondazione stessa per il conseguimento delle finalità, tra cui vi è anche la valorizzazione del Centro storico di Napoli.
          </p>
          <p className="mb-4">
            La Fondazione, per una migliore, produttiva ed economica realizzazione di tali finalità, per consentire un positivo recupero delle attività sociali, economiche e commerciali del Centro storico può avvalersi di specifiche convenzioni con privati, persone fisiche e giuridiche ed enti di qualsivoglia natura, per la gestione di singole attività strumentali espressamente deliberate dal Consiglio di Amministrazione.
          </p>
          <p className="mb-4">
            Le forme e le modalità attraverso le quali la Fondazione persegue le proprie finalità sono determinate e disciplinate dal Consiglio di Amministrazione, che promuove all’uopo ogni possibile iniziativa intesa a conseguirle.
          </p>
          <p className="mb-4">
            In ogni caso la Fondazione può, nei limiti consentiti dalla legge, svolgere tutte le attività connesse al proprio scopo istituzionale, nonché tutte le attività accessorie per natura e direttamente strumentali a quelle statutarie in quanto ad esso integrative.
          </p>
          <h4 className="text-lg font-semibold mb-2">ARTICOLO 4</h4>
          <p className="mb-4">
            <strong>FONDO DI DOTAZIONE E FONDO DI GESTIONE.</strong> Il Patrimonio della Fondazione è costituito dal FONDO DI DOTAZIONE e dal FONDO DI GESTIONE.
          </p>
          <p className="mb-4">
            <strong>IL FONDO DI DOTAZIONE</strong> è costituito:
            <ul className="list-disc list-inside ml-4">
              <li>
                dai conferimenti iniziali in denaro o beni mobili e immobili o altre utilità impiegabili per il perseguimento delle finalità, effettuati dai Fondatori in sede di atto costitutivo o successivamente;
              </li>
              <li>
                dai beni mobili ed immobili che perverranno a qualsiasi titolo alla Fondazione, compresi quelli dalla stessa acquistati secondo le norme del presente statuto;
              </li>
              <li>
                dalle donazioni, lasciti, contributi, erogazioni, sussidi ed ogni altra liberalità sotto forma di beni mobili ed immobili espressamente destinati al patrimonio della Fondazione con elargizioni da parte di Regione Campania, Provincia e Comune di Napoli, altri Enti pubblici, Fondazioni e Associazioni pubbliche e private, Camera di Commercio, Unione Industriali, Istituti Bancari e privati cittadini;
              </li>
              <li>
                dai fondi raccolti con pubbliche sottoscrizioni, debitamente autorizzate a norma di legge, per compiere interventi relativi a beni che rientrano nel patrimonio della Fondazione o di cui essa abbia comunque l’uso;
              </li>
              <li>
                dalle somme prelevate dagli avanzi di gestione che il Consiglio di Amministrazione, con sua deliberazione, disponga di destinare ad incremento del patrimonio.
              </li>
            </ul>
          </p>
          <p className="mb-4">
            <strong>Il FONDO DI GESTIONE</strong> della Fondazione è costituito:
            <ul className="list-disc list-inside ml-4">
              <li>
                dalle rendite e dai proventi derivanti dal patrimonio e dalle attività della Fondazione medesima, nonché da quote di conferimento in denaro pervenute al Fondo di Dotazione che il Consiglio di Amministrazione disponga di assegnare al Fondo di Gestione;
              </li>
              <li>
                da eventuali donazioni o disposizioni testamentarie che non siano espressamente destinate al fondo di dotazione;
              </li>
              <li>
                da eventuali altri contributi attribuiti dallo Stato, da Enti territoriali, da Enti e soggetti pubblici e privati in genere, per supportare l’ordinaria attività;
              </li>
              <li>
                altresì dalle erogazioni, dalle sovvenzioni, dalle sponsorizzazioni e dalle donazioni dei soci, degli enti e soggetti pubblici e privati, e da ogni altro provento derivante dall’attività della Fondazione, ivi compresi i proventi derivanti dai ricavi delle attività istituzionali, strumentali o accessorie connesse, e dai beni pervenuti alla Fondazione a qualsiasi altro titolo.
              </li>
            </ul>
          </p>
          <p className="mb-4">
            Il patrimonio è vincolato al perseguimento dello scopo e non può essere diviso, né attribuito ai fondatori o ai sostenitori.
          </p>
          <h4 className="text-lg font-semibold mb-2">ARTICOLO 5</h4>
          <p className="mb-4">
            <strong>PARTECIPANTI.</strong> All’attività della Fondazione partecipano:
            <ul className="list-disc list-inside ml-4">
              <li>i PROMOTORI;</li>
              <li>i FONDATORI;</li>
              <li>i SOSTENITORI.</li>
            </ul>
            Sono FONDATORI gli Enti ed i soggetti pubblici e privati che abbiano sottoscritto l’atto costitutivo versando contestualmente un contributo per la costituzione del fondo di dotazione di almeno Euro cinquemila (E.5.000). La qualifica di FONDATORI può essere riconosciuta anche per adesione successiva con delibera del Consiglio di Amministrazione alle persone fisiche e agli Enti e soggetti pubblici e privati che ne facciano richiesta e contribuiscano al fondo con il versamento della somma fissata dal Consiglio di Amministrazione e comunque non inferiore ad Euro cinquemila (E.5.000). La qualifica di SOSTENITORE potrà essere attribuita con delibera del Consiglio di Amministrazione agli Enti ed ai soggetti pubblici e privati che, condividendo le finalità della Fondazione, contribuiscono alla vita della stessa ed alla realizzazione del suo scopo mediante contributi di beni materiali o immateriali. I membri FONDATORI e SOSTENITORI possono in ogni momento comunicare il loro recesso con lettera raccomandata. Il recesso del membro Fondatore determina la decadenza del componente del Consiglio di Amministrazione da esso nominato.
          </p>
          <h4 className="text-lg font-semibold mb-2">ARTICOLO 6</h4>
          <p className="mb-4">
            <strong>ORGANI.</strong> Sono Organi della Fondazione:
            <ul className="list-disc list-inside ml-4">
              <li>il PRESIDENTE;</li>
              <li>il VICEPRESIDENTE;</li>
              <li>il CONSIGLIO DI AMMINISTRAZIONE;</li>
              <li>il COMITATO ESECUTIVO;</li>
              <li>il COMITATO SCIENTIFICO;</li>
              <li>il COLLEGIO DEI REVISORI.</li>
            </ul>
            Le cariche sono a titolo onorifico.
          </p>
          <h4 className="text-lg font-semibold mb-2">ARTICOLO 7</h4>
          <p className="mb-4">
            <strong>PRESIDENTE.</strong> La Fondazione è presieduta dal Direttore Generale per la Gestione e la Manutenzione degli Edifici ed Uffici Giudiziari della città di Napoli. Egli:
            <ul className="list-disc list-inside ml-4">
              <li>presiede il Consiglio di Amministrazione e il Comitato Esecutivo;</li>
              <li>ha la rappresentanza legale della Fondazione di fronte ai terzi ed in giudizio;</li>
              <li>convoca il Consiglio di Amministrazione e il Comitato Esecutivo, formando l’ordine del giorno;</li>
              <li>cura l’esecuzione delle deliberazioni adottate dal Consiglio di Amministrazione e dal Comitato Esecutivo;</li>
              <li>assume tutti i provvedimenti urgenti e necessari di competenza del Comitato Esecutivo per il funzionamento della Fondazione, da sottoporre per la ratifica al Comitato stesso entro il più breve tempo possibile e comunque non oltre dieci giorni;</li>
              <li>cura l’osservanza dello Statuto e ne promuove le modifiche che si rendano necessarie, qualora lo ritenga opportuno o su richiesta della maggioranza dei Consiglieri di Amministrazione.</li>
            </ul>
          </p>
          <h4 className="text-lg font-semibold mb-2">ARTICOLO 8</h4>
          <p className="mb-4">
            <strong>VICEPRESIDENTE.</strong> Il Vicepresidente è di diritto il Presidente del Consiglio dell’Ordine degli Avvocati di Napoli. Fa le veci del Presidente in caso di assenza od impedimento, con eguali poteri.
          </p>
          <h4 className="text-lg font-semibold mb-2">ARTICOLO 9</h4>
          <p className="mb-4">
            <strong>CONSIGLIO DI AMMINISTRAZIONE.</strong> Sono membri del Consiglio di Amministrazione, oltre al Presidente e al Vicepresidente, componenti di diritto, i membri Fondatori in persona del loro legale rappresentante o di altro soggetto all’uopo da loro designato; il membro del Consiglio di Amministrazione designato dall’Ordine degli Avvocati di Napoli è componente del Consiglio diverso dal suo Presidente (Vicepresidente di diritto della Fondazione). Il Consiglio di Amministrazione:
            <ul className="list-disc list-inside ml-4">
              <li>nomina i membri elettivi del Comitato Esecutivo;</li>
              <li>nomina il Tesoriere, anche al di fuori dei suoi membri, determinandone i compiti;</li>
              <li>determina, in conformità agli scopi statutari e d’intesa col Comitato Scientifico, gli obiettivi e i programmi della Fondazione;</li>
              <li>verifica periodicamente i risultati complessivi della gestione, approvando entro il mese di ottobre il bilancio preventivo dell’anno seguente ed entro il mese di maggio il bilancio consuntivo dell’anno precedente;</li>
              <li>provvede sugli affari posti alla sua attenzione dal Comitato Esecutivo e dal Comitato Scientifico;</li>
              <li>delibera sul recesso dei membri Fondatori e Sostenitori;</li>
              <li>delibera sulle modifiche dello Statuto della Fondazione proposte dal Presidente, dal Comitato Esecutivo, dal Comitato Scientifico o da un terzo del Consiglio.</li>
            </ul>
          </p>
          <h4 className="text-lg font-semibold mb-2">ARTICOLO 10</h4>
          <p className="mb-4">
            <strong>COMITATO ESECUTIVO.</strong> Il Comitato Esecutivo è composto da nove membri, e precisamente dal Presidente e dal Vicepresidente della Fondazione, membri di diritto; gli altri sette membri sono nominati tra i membri del Consiglio di Amministrazione, assicurando che siano comunque presenti due avvocati (oltre il Vicepresidente) designati con delibera del Consiglio dell’Ordine degli Avvocati, un notaio, un Avvocato dello Stato e un rappresentante delle Università.
          </p>
          <p className="mb-4">
            Il Comitato Esecutivo cura l’esecuzione dei deliberati del Consiglio di Amministrazione ed è investito dei più ampi poteri oltre che nell’ambito delle deleghe specialistiche che il Consiglio di Amministrazione gli conferisca per l’amministrazione del patrimonio della Fondazione, per la gestione delle attività economiche necessarie alla formazione ed all’erogazione delle rendite e per la realizzazione di quanto costituisce lo scopo della Fondazione stessa.
          </p>
          <p className="mb-4">
            Il Comitato Esecutivo cura, nell’ambito delle proprie funzioni, i rapporti con gli Organi della Fondazione nonché con gli Enti pubblici e privati partecipanti o comunque interessati al raggiungimento degli scopi della Fondazione, nonché all’utilizzo degli spazi di pertinenza della stessa anche per scopi extragiudiziari coerenti con la storica destinazione del Monumento. Il Comitato Esecutivo assume, sospende, licenzia gli impiegati e i collaboratori di qualsiasi grado e livello. I membri del Comitato Esecutivo durano in carica quattro anni e sono rieleggibili.
          </p>
          <p className="mb-4">
            Il Comitato Esecutivo nomina Segretario Generale un avvocato, membro del Comitato Esecutivo, designato dal Consiglio dell’Ordine degli Avvocati d’intesa con il Presidente della Fondazione. Egli:
            <ul className="list-disc list-inside ml-4">
              <li>assiste il Presidente ed il Comitato Esecutivo nella predisposizione e nello svolgimento dei lavori attinenti l’organizzazione ed il funzionamento della Fondazione;</li>
              <li>coordina l’attività della segreteria e assicura il buon andamento dei servizi;</li>
              <li>adempie ad ogni altro compito affidatogli dal Presidente, dal Comitato Esecutivo, dal Consiglio di Amministrazione o dal Comitato Scientifico.</li>
            </ul>
            Nello svolgimento dei predetti compiti il Segretario Generale si avvale di apposita segreteria.
          </p>
          <h4 className="text-lg font-semibold mb-2">ARTICOLO 11</h4>
          <p className="mb-4">
            <strong>COMITATO SCIENTIFICO.</strong> Il Comitato Scientifico è organo consultivo della Fondazione ed ha il compito di promuovere ogni attività volta a garantire l’indirizzo scientifico della Fondazione nel rispetto della storica vocazione giuridico-forense del Castello quale luogo di studi e di dibattiti giuridico-culturali; a tal fine esprime parere obbligatorio sulle delibere del Consiglio di Amministrazione e del Comitato Esecutivo relative alle attività di carattere scientifico e culturale. E’ composto inizialmente dai soggetti nominati nell’atto costitutivo. Potrà inoltre essere aumentato con delibera del Consiglio di Amministrazione, su proposta del Presidente, con membri scelti tra persone particolarmente qualificate, di riconosciuto prestigio del mondo istituzionale, accademico e professionale, di riconosciuta professionalità nei settori in cui opera la Fondazione. Il Presidente del Comitato Scientifico partecipa, senza diritto di voto, alle riunioni del Consiglio di Amministrazione e del Comitato Esecutivo. Può farsi sostituire, in caso di impedimento, dal Vicario da lui nominato. Il Presidente cura la formazione del regolamento per il funzionamento del Comitato Scientifico.
          </p>
          <h4 className="text-lg font-semibold mb-2">ARTICOLO 12</h4>
          <p className="mb-4">
            <strong>ADUNANZE.</strong> Gli Organi collegiali della Fondazione si riuniscono su convocazione del rispettivo Presidente tutte le volte che egli lo ritenga utile, o ne sia fatta richiesta da almeno sette dei suoi membri per il Consiglio di Amministrazione, da cinque per il Comitato Esecutivo, e da tre per il Comitato Scientifico. Il Consiglio di Amministrazione e il Comitato Scientifico devono riunirsi almeno due volte all’anno e il Comitato Esecutivo almeno una volta ogni trimestre. Per la validità delle delibere del Consiglio di Amministrazione e del Comitato Esecutivo è necessario il voto favorevole della maggioranza dei componenti. La convocazione è fatta con avviso scritto, contenente l’ordine del giorno, da inviarsi con lettera raccomandata o via fax o e-mail, almeno dieci giorni prima dalla data fissata per la riunione. Nei casi di particolare urgenza la convocazione può essere fatta senza il rispetto dei termini di cui sopra, dandosi atto nel verbale di seduta delle ragioni dell’urgenza. In caso di parità, prevale il voto del Presidente. Sugli argomenti di natura personale la votazione va fatta a scrutinio segreto. Per le riunioni del Consiglio di Amministrazione è facoltà dei Consiglieri delegare un membro dell’Organismo rispettivamente presieduto.
          </p>
          <h4 className="text-lg font-semibold mb-2">ARTICOLO 13</h4>
          <p className="mb-4">
            <strong>VERBALI.</strong> La verbalizzazione delle riunioni degli Organi della Fondazione è curata da un Segretario ed il verbale è sottoscritto dallo stesso e dal Presidente. I verbali vengono trascritti in ordine cronologico su apposito registro.
          </p>
          <h4 className="text-lg font-semibold mb-2">ARTICOLO 14</h4>
          <p className="mb-4">
            <strong>RESPONSABILITÀ’.</strong> I membri del Consiglio di Amministrazione e del Comitato Esecutivo sono responsabili verso l’Ente secondo le norme del mandato.
          </p>
          <h4 className="text-lg font-semibold mb-2">ARTICOLO 15</h4>
          <p className="mb-4">
            <strong>COLLEGIO DEI REVISORI.</strong> Il Collegio dei Revisori è nominato dal Consiglio di Amministrazione ed è composto da tre membri effettivi e due supplenti tra gli iscritti al Registro dei Revisori contabili. Essi durano in carica quattro anni e possono essere riconfermati. Il Collegio dei Revisori controlla il bilancio della Fondazione nella sua conformità alle previsioni di legge, e vigila sull’osservanza delle norme di legge, di Statuto e di Regolamento ed in particolar modo sulla regolare tenuta della contabilità. I membri effettivi del Collegio partecipano, senza diritto di voto, alle adunanze del Consiglio di Amministrazione. Il Presidente può essere invitato alle riunioni del Comitato Esecutivo.
          </p>
          <h4 className="text-lg font-semibold mb-2">ARTICOLO 16</h4>
          <p className="mb-4">
            <strong>BILANCIO.</strong> Gli esercizi decorrono dal 1° gennaio al 31 dicembre di ogni anno. Il Comitato Esecutivo, sentito il Tesoriere, redige il bilancio preventivo secondo i criteri di verità, chiarezza e completezza e lo sottopone tempestivamente, corredato dalle osservazioni del Collegio dei Revisori, al Consiglio di Amministrazione, che deve approvarlo entro il 30 ottobre di ogni anno. Il Comitato Esecutivo, sentito il Tesoriere, redige altresì il bilancio consuntivo con gli stessi criteri e lo sottopone, corredato della Relazione del Collegio dei Revisori, al Consiglio di Amministrazione, per l’approvazione entro il 30 aprile di ogni anno. Il bilancio deve essere accompagnato da una relazione del Comitato Esecutivo che illustri l’attività da svolgere e svolta dalla Fondazione e l’andamento della gestione nei vari settori, in cui la stessa ha operato ed opera.
          </p>
          <h4 className="text-lg font-semibold mb-2">ARTICOLO 17</h4>
          <p className="mb-4">
            <strong>ESTINZIONE E DEVOLUZIONE DEI BENI.</strong> La Fondazione si estingue qualora lo scopo è stato raggiunto o è divenuto impossibile. In tal caso i beni che residueranno una volta esaurita la liquidazione saranno devoluti ad altri Enti che abbiano fini analoghi.
          </p>
          <h4 className="text-lg font-semibold mb-2">ARTICOLO 18</h4>
          <p className="mb-4">
            <strong>RINVIO.</strong> Per quanto non previsto nel presente Statuto verranno applicate le norme di legge vigenti in materia.
          </p>
          <p className="mb-4">
            <strong>Firmato:</strong> Floretta Rolleri – Antonio Buonajuto – Luigi Mastrominico – Giancarlo Laurini – Giuseppe Fiengo – Francesco Caia – Bruno Piacci – Flavio Zanchini – Antonio Areniello – Stefano Cimmino – Achille Coppola – Raffaele Felaco – Lucio De Giovanni – Franco Fichera – Saviano Panico – Gennaro Ferrara – Luigi De Falco – Maurizio Maddaloni – Mario Ruberto – Aldo Pace – Gennaro Moccia – Giuseppe di Transo notaio (sigillo).
          </p>
        </>
      ),
    },
    {
      id: "scopi",
      title: "Scopi della Fondazione",
      content: (
        <>
          <p className="mb-4">
            <strong>Scopi della Fondazione Castel Capuano</strong>
          </p>
          <p className="mb-4">
            Fermo rimanendo il mantenimento della antica sede alla funzione di giustizia – è quello di assicurare, nel rispetto delle caratteristiche del Monumento, una destinazione che ne esalti la tradizione giuridico-forense nonché la sua storica vocazione a luogo di studi e dibattiti giuridici, non solo della Città di Napoli, ma di tutta la Nazione e nel contesto dell’Unione Europea, nonché alla creazione in tale sede di un polo di alta formazione giuridica e professionale destinato, tra l’altro, alla formazione post-universitaria per le professioni forensi e notarili, alla formazione dei magistrati, alla formazione decentrata del personale amministrativo, con peculiare riferimento all’informatica giuridica ed e-justice (processo telematico, digitalizzazione e servizi connessi), alla formazione degli organismi di mediazione e conciliazione, anche con riferimento alle normative e prospettive dell’Unione Europea.
          </p>
          <p className="mb-4">
            A tal fine, scopo della Fondazione è altresì quello di provvedere al recupero conservativo e alla manutenzione straordinaria di Castel Capuano, relativamente agli spazi che verranno assegnati alla Fondazione stessa per il conseguimento delle finalità, tra cui vi è anche la valorizzazione del Centro storico di Napoli.
          </p>
          <p className="mb-4">
            La Fondazione, per una migliore, produttiva ed economica realizzazione di tali finalità, per consentire un positivo recupero delle attività sociali, economiche e commerciali del Centro storico può avvalersi di specifiche convenzioni con privati, persone fisiche e giuridiche ed enti di qualsivoglia natura, per la gestione di singole attività strumentali espressamente deliberate dal Consiglio di Amministrazione.
          </p>
          <p className="mb-4">
            Le forme e le modalità attraverso le quali la Fondazione persegue le proprie finalità sono determinate e disciplinate dal Consiglio di Amministrazione, che promuove all’uopo ogni possibile iniziativa intesa a conseguirle.
          </p>
          <p className="mb-4">
            In ogni caso la Fondazione può, nei limiti consentiti dalla legge, svolgere tutte le attività connesse al proprio scopo istituzionale, nonché tutte le attività accessorie per natura e direttamente strumentali a quelle statutarie in quanto ad esso integrative.
          </p>
        </>
      ),
    },
    {
      id: "dati-fiscali",
      title: "Dati Fiscali",
      content: (
        <>
          <h3 className="text-xl font-semibold mb-2">Dati Fiscali – Fondazione Castel Capuano</h3>
          <p className="mb-4">
            E’ possibile attivare a favore della Fondazione Castel Capuano la procedura del “5 x 1000” attraverso la dichiarazione IRPEF.
          </p>
          <p className="mb-4">
            Nella speranza che l’iniziativa possa costituire il motore della rinascita di Castel Capuano, sede storica della Giustizia napoletana e il perseguimento degli scopi della Fondazione, consentendo la realizzazione del polo di alta formazione giuridico-forense destinato anche alla formazione congiunta tra avvocati, magistrati, dirigenti e personale amministrativo, nell’ottica di e-justice.
          </p>
          <p className="mb-4">
            <strong>Codice Fiscale:</strong> 95151690633
          </p>
          <p className="mb-4">
            <strong>IBAN:</strong> IT55V0335901600100000060925 Banca Prossima
          </p>
          <p className="mb-4">
            Ai sensi e per gli effetti di quanto previsto dalla Legge 124 del 4 agosto 2017 (art. 1 commi 125-129) il nostro Ente è stato beneficiario in totale di euro 14.494, l’importo è così composto:
            <ul className="list-disc list-inside ml-4">
              <li>euro 5.634 a titolo di contributi 5*1000 incassati in data 30/07/2020</li>
              <li>euro 3.860 a titolo di contributi 5*1000 incassati in data 06/10/2020</li>
              <li>euro 5.000 contributo Regione Campania incassato in data 24/09/2020</li>
            </ul>
          </p>
        </>
      ),
    },
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

export default IndicePagina;
