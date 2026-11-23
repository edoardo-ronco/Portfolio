(function () {
  'use strict';

  /* ==========================================================================
     PDF DOWNLOAD PATHS (metti i tuoi PDF dentro la cartella /docs)
     ========================================================================== */
  const DOWNLOADS = {
    cv: {
      it: 'docs/CV_Edoardo_Ronco_IT.pdf',
      en: 'docs/CV_Edoardo_Ronco_EN.pdf'
    },
    portfolio: {
      it: 'docs/Portfolio_Edoardo_Ronco.pdf',
      en: 'docs/Portfolio_Edoardo_Ronco.pdf'
    }
  };

  /* ==========================================================================
     I18N UI DICTIONARY (ITALIANO / INGLESE)
     ========================================================================== */
  const UI_TEXT = {
    it: {
      baseTitle: 'Edoardo Ronco — Interior, Exhibit & Spatial Design',
      'nav.projects': 'PROGETTI',
      'nav.about': 'ABOUT & CV',
      'nav.contact': 'CONTATTI',
      'hero.kickerLeft': '[00] — INTERIOR, EXHIBIT & SPATIAL DESIGN',
      'hero.kickerRight': 'ARCHIVIO PROGETTI SELEZIONATI',
      'hero.headline': 'SPAZIO, MATERIA<br /><span class="font-grotesk font-normal">&amp;</span> PERCEZIONE.',
      'hero.intro': '<strong class="font-medium text-[var(--fg)]">Edoardo Ronco</strong> — Interior &amp; Spatial Designer, Politecnico di Milano. Attualmente Product Design &amp; Technical Development presso <strong class="font-medium text-[var(--fg)]">Nilufar Edition</strong>.',
      'hero.cta': 'ESPLORA PROGETTI',
      'works.kicker': '[01] — ARCHIVIO PROGETTI',
      'works.title': 'PROGETTI SELEZIONATI',
      'filter.ALL': 'TUTTI',
      'index.no': 'NO.',
      'index.project': 'PROGETTO',
      'index.discipline': 'DISCIPLINA',
      'index.context': 'CONTESTO / CORSO',
      'index.year': 'ANNO',
      'index.expand': 'DETTAGLI',
      'accordion.quickPreview': 'ANTEPRIMA RAPIDA',
      'accordion.openProject': 'APRI PROGETTO →',
      'about.kicker': '[02] — ABOUT & CURRICULUM',
      'about.bio1': 'Sono <strong class="font-medium text-[var(--fg)]">Edoardo Ronco</strong>, designer degli interni e degli spazi formatomi al <strong class="font-medium text-[var(--fg)]">Politecnico di Milano</strong> (Laurea Triennale 110L/110, attualmente iscritto alla Laurea Magistrale in <em>Interior and Spatial Design</em>).',
      'about.bio2': 'Il mio approccio alla progettazione si sviluppa attorno alla centralità della persona, mosso dal desiderio di esplorare come lo spazio possa dialogare con la psicologia, i comportamenti e le reali necessità di chi lo abita.',
      'about.bio3': 'Durante il percorso accademico e professionale ho consolidato un forte interesse per l\'<strong class="font-medium text-[var(--fg)]">exhibit design</strong> e il <strong class="font-medium text-[var(--fg)]">product design</strong>, ambiti in cui sperimento la sinergia tra la dimensione spaziale e il dettaglio costruttivo dell\'oggetto, unendo ricerca formale e sensibilità concettuale.',
      'about.bio4': 'Oltre alla progettazione, una pratica ultradecennale nel tennis mi ha abituato al confronto, alla disciplina e al lavoro di squadra: un\'attitudine che porto quotidianamente nei progetti collettivi e nello sviluppo tecnico di prodotto.',
      'about.downloadsLabel': 'DOCUMENTI SCARICABILI (PDF)',
      'about.downloadCv': 'SCARICA CV (PDF)',
      'about.downloadPortfolio': 'SCARICA PORTFOLIO (PDF)',
      'cv.expTitle': 'ESPERIENZE PROFESSIONALI',
      'cv.exp1Date': '2026 — IN CORSO',
      'cv.exp1Desc': 'Affiancamento nella progettazione e nello sviluppo prodotto per Nilufar Edition: disegni tecnici, modelli 3D e rendering, aggiornamento listino prezzi, redazione e gestione di schede tecniche e schede di montaggio, supporto operativo alla presentazione dei prodotti.',
      'cv.exp2Role': 'Assistente di Mostra',
      'cv.exp2Desc': 'Mostra site-specific di Gian Maria Tosatti sponsorizzata da EcoContract, Brembo e Lia Rumma. Accoglienza e registrazione visitatori, tutela dell\'installazione e rispetto della disposizione curatoriale.',
      'cv.exp3Role': 'Magazziniere (Addetto al Picking)',
      'cv.exp3Desc': 'Operatività logistica, gestione flussi e preparazione ordini presso il polo logistico Decathlon di Basiano.',
      'cv.exp4Role': 'Animatore Centro Sportivo',
      'cv.exp4Desc': 'Gestione quotidiana di gruppi di ragazzi (9–12 anni) durante attività sportive e ricreative, coordinamento routine e sicurezza.',
      'cv.eduTitle': 'ISTRUZIONE',
      'cv.edu1Date': '2026 — IN CORSO',
      'cv.edu1Degree': 'Laurea Magistrale in Interior and Spatial Design',
      'cv.edu2Degree': 'Laurea Triennale in Design degli Interni',
      'cv.edu2Grade': 'VOTO FINALE: 110L / 110',
      'cv.edu3Date': 'DIPLOMA',
      'cv.edu3Degree': 'Liceo Scientifico Paolo Frisi',
      'cv.edu3Loc': 'MONZA, ITALIA',
      'cv.awardsTitle': 'RICONOSCIMENTI & ATTIVITÀ',
      'cv.award1Desc': 'Documentazione editoriale, reportage visivo e copertura critica delle installazioni durante la Milano Design Week.',
      'cv.softwareTitle': 'SOFTWARE & STRUMENTI',
      'cv.langTitle': 'LINGUE',
      'level.advanced': 'AVANZATO',
      'level.intermediate': 'INTERMEDIO',
      'level.basic': 'BASE',
      'lang.it': 'Italiano',
      'lang.itLevel': 'C2 · MADRELINGUA',
      'lang.en': 'Inglese',
      'lang.enLevel': 'C1 · AVANZATO',
      'lang.es': 'Spagnolo',
      'lang.esLevel': 'B1 · INTERMEDIO',
      'page.back': '← TORNA AI PROGETTI',
      'page.metaDiscipline': 'DISCIPLINA',
      'page.metaCourse': 'ANNO / CORSO',
      'page.metaProfessors': 'DOCENTI',
      'page.metaContext': 'CONTESTO',
      'page.conceptLabel': 'SINTESI DEL PROGETTO',
      'page.galleryLabel': 'GALLERIA DEL PROGETTO',
      'page.galleryHint': 'CLICCA SU UN\'IMMAGINE PER INGRANDIRE',
      'page.prevProject': '← PROGETTO PRECEDENTE',
      'page.nextProject': 'PROGETTO SUCCESSIVO →',
      'footer.kicker': '[08] — CONTATTI',
      'footer.emailLabel': 'EMAIL (CLICCA PER COPIARE)',
      'footer.phoneLabel': 'TELEFONO',
      'footer.location': 'Ornago (MB) / Milano, Italia',
      'footer.backToTop': 'TORNA SU ↑',
      'modal.close': 'CHIUDI [ESC]',
      'modal.openPage': 'APRI PAGINA PROGETTO →',
      'toast.email': 'EMAIL COPIATA NEGLI APPUNTI',
      'toast.phone': 'TELEFONO COPIATO NEGLI APPUNTI',
      'toast.copyError': 'IMPOSSIBILE COPIARE AUTOMATICAMENTE',
      'menu.open': 'MENU',
      'menu.close': 'CHIUDI'
    },
    en: {
      baseTitle: 'Edoardo Ronco — Interior, Exhibit & Spatial Design',
      'nav.projects': 'PROJECTS',
      'nav.about': 'ABOUT & CV',
      'nav.contact': 'CONTACT',
      'hero.kickerLeft': '[00] — INTERIOR, EXHIBIT & SPATIAL DESIGN',
      'hero.kickerRight': 'SELECTED WORKS ARCHIVE',
      'hero.headline': 'SPACE, MATTER<br /><span class="font-grotesk font-normal">&amp;</span> PERCEPTION.',
      'hero.intro': '<strong class="font-medium text-[var(--fg)]">Edoardo Ronco</strong> — Interior &amp; Spatial Designer, Politecnico di Milano. Currently Product Design &amp; Technical Development at <strong class="font-medium text-[var(--fg)]">Nilufar Edition</strong>.',
      'hero.cta': 'EXPLORE PROJECTS',
      'works.kicker': '[01] — SELECTED ARCHIVE',
      'works.title': 'SELECTED WORKS',
      'filter.ALL': 'ALL',
      'index.no': 'NO.',
      'index.project': 'PROJECT',
      'index.discipline': 'DISCIPLINE',
      'index.context': 'CONTEXT / STUDIO',
      'index.year': 'YEAR',
      'index.expand': 'DETAILS',
      'accordion.quickPreview': 'QUICK PREVIEW',
      'accordion.openProject': 'OPEN PROJECT →',
      'about.kicker': '[02] — ABOUT & CURRICULUM',
      'about.bio1': 'I am <strong class="font-medium text-[var(--fg)]">Edoardo Ronco</strong>, an Interior &amp; Spatial Designer trained at <strong class="font-medium text-[var(--fg)]">Politecnico di Milano</strong> (BSc 110/110 cum laude, currently enrolled in the MSc in <em>Interior and Spatial Design</em>).',
      'about.bio2': 'My design approach revolves around the centrality of the individual, driven by the desire to explore how space dialogues with human psychology, behavior, and the real needs of those who inhabit it.',
      'about.bio3': 'Throughout my academic and professional path, I have developed a strong focus on <strong class="font-medium text-[var(--fg)]">exhibit design</strong> and <strong class="font-medium text-[var(--fg)]">product design</strong>, investigating the synergy between spatial scale and constructive detail by combining formal research with conceptual sensitivity.',
      'about.bio4': 'Beyond design, over a decade of competitive tennis has trained me in discipline, focus, and teamwork — an attitude I bring daily into collaborative projects and technical product development.',
      'about.downloadsLabel': 'DOWNLOADABLE DOCUMENTS (PDF)',
      'about.downloadCv': 'DOWNLOAD CV (PDF)',
      'about.downloadPortfolio': 'DOWNLOAD PORTFOLIO (PDF)',
      'cv.expTitle': 'PROFESSIONAL EXPERIENCE',
      'cv.exp1Date': '2026 — PRESENT',
      'cv.exp1Desc': 'Supporting product design and technical development for Nilufar Edition: technical drawings, 3D modeling and rendering, price list updates, drafting and managing technical and assembly sheets, and operational support for product presentations.',
      'cv.exp2Role': 'Exhibition Assistant',
      'cv.exp2Desc': 'Site-specific exhibition by Gian Maria Tosatti sponsored by EcoContract, Brembo, and Lia Rumma. Visitor reception and registration, installation stewardship, and curatorial layout supervision.',
      'cv.exp3Role': 'Warehouse Operator (Order Picking)',
      'cv.exp3Desc': 'Logistics operations, stock flow management, and order preparation at the Decathlon logistics hub in Basiano.',
      'cv.exp4Role': 'Sports Center Activity Leader',
      'cv.exp4Desc': 'Daily supervision of youth groups (ages 9–12) during sports and recreational activities, managing schedules and safety.',
      'cv.eduTitle': 'EDUCATION',
      'cv.edu1Date': '2026 — PRESENT',
      'cv.edu1Degree': 'MSc in Interior and Spatial Design',
      'cv.edu2Degree': 'BSc in Interior Design',
      'cv.edu2Grade': 'FINAL GRADE: 110 / 110 CUM LAUDE',
      'cv.edu3Date': 'HIGH SCHOOL',
      'cv.edu3Degree': 'Liceo Scientifico Paolo Frisi',
      'cv.edu3Loc': 'MONZA, ITALY',
      'cv.awardsTitle': 'AWARDS & ACTIVITIES',
      'cv.award1Desc': 'Editorial documentation, visual reportage, and critical coverage of installations during Milan Design Week.',
      'cv.softwareTitle': 'SOFTWARE & TOOLS',
      'cv.langTitle': 'LANGUAGES',
      'level.advanced': 'ADVANCED',
      'level.intermediate': 'INTERMEDIATE',
      'level.basic': 'BASIC',
      'lang.it': 'Italian',
      'lang.itLevel': 'C2 · NATIVE',
      'lang.en': 'English',
      'lang.enLevel': 'C1 · ADVANCED',
      'lang.es': 'Spanish',
      'lang.esLevel': 'B1 · INTERMEDIATE',
      'page.back': '← BACK TO PROJECTS',
      'page.metaDiscipline': 'DISCIPLINE',
      'page.metaCourse': 'YEAR / STUDIO',
      'page.metaProfessors': 'PROFESSORS',
      'page.metaContext': 'CONTEXT',
      'page.conceptLabel': 'PROJECT OVERVIEW',
      'page.galleryLabel': 'PROJECT GALLERY',
      'page.galleryHint': 'CLICK ANY IMAGE TO ENLARGE',
      'page.prevProject': '← PREVIOUS PROJECT',
      'page.nextProject': 'NEXT PROJECT →',
      'footer.kicker': '[08] — CONTACT',
      'footer.emailLabel': 'EMAIL (CLICK TO COPY)',
      'footer.phoneLabel': 'PHONE',
      'footer.location': 'Ornago (MB) / Milan, Italy',
      'footer.backToTop': 'BACK TO TOP ↑',
      'modal.close': 'CLOSE [ESC]',
      'modal.openPage': 'OPEN PROJECT PAGE →',
      'toast.email': 'EMAIL COPIED TO CLIPBOARD',
      'toast.phone': 'PHONE COPIED TO CLIPBOARD',
      'toast.copyError': 'UNABLE TO COPY AUTOMATICALLY',
      'menu.open': 'MENU',
      'menu.close': 'CLOSE'
    }
  };

  /* ==========================================================================
     PROJECTS DATA (con accenti cromatici dedicati + testi IT / EN)
     ========================================================================== */
  const PROJECTS = [
    {
      slug: 'chissa',
      index: '01',
      year: 'a.a. 2025/26',
      category: 'EXHIBIT',
      accent: { light: '#2648B8', dark: '#5E84FF' },
      professors: 'Anzani Anna, Crippa Davide, Di Prete Barbara, Gatti Giacomo Attilio Carlo, Lonardo Emilio',
      cover: 'img/chissa/cover.jpeg',
      i18n: {
        it: {
          title: 'Chissà',
          subtitle: "Riqualificazione dell'ex macello di Monza",
          course: 'Laboratorio di Sintesi',
          context: 'Ex Macello di Monza · Politecnico di Milano',
          concept: "La suspense come motore e principio organizzativo dello spazio pubblico: un sistema che si rivela gradualmente al visitatore/spettatore.",
          paragraphs: [
            "L'ingresso in uno spazio è intrinsecamente legato all'ignoto: non si può prevedere cosa succederà, chi si incontrerà, né quale sarà la conclusione del percorso. Da questa premessa nasce Chissà, un progetto di riqualificazione dell'ex macello di Monza che sfrutta la suspense come motore e principio organizzativo dello spazio stesso.",
            "Lo spazio si dischiude gradualmente, richiedendo un'esplorazione attiva per essere compreso e vissuto. Il visitatore varca la soglia nel ruolo di protagonista di un viaggio incerto, guidato da stimoli sensoriali e indizi che non offrono spiegazioni dirette ma suggerimenti, costruendo la propria narrazione.",
            "Il programma funzionale si articola in cinque ambienti pubblici interconnessi — ludoteca (percorso narrativo immersivo), bar (sottrazione, anticipazione e anamorfosi finale), spazio eventi (schermature e sipario), biblioteca (strutture prospettiche distorte) e sala d'attesa (tempo sospeso) — unificati da un sistema di ponteggi e intelaiature metalliche che filtrano la vista e culminano in una rivelazione finale."
          ]
        },
        en: {
          title: 'Chissà',
          subtitle: 'Adaptive reuse of the former slaughterhouse in Monza',
          course: 'Final Synthesis Studio',
          context: 'Ex Macello di Monza · Politecnico di Milano',
          concept: 'Suspense as a driving force and organizing principle of public space: a system that reveals itself gradually to the visitor/spectator.',
          paragraphs: [
            'Entering a space is inherently tied to the unknown: one cannot predict what will happen, whom one will meet, or how the journey will end. From this premise comes Chissà, an adaptive reuse project for the former slaughterhouse of Monza that uses suspense as both engine and spatial organizer.',
            'The architecture unfolds gradually, requiring active exploration to be understood and inhabited. Crossing the threshold, visitors become protagonists of an uncertain journey guided by sensory cues and subtle hints rather than direct explanations, crafting their own narrative.',
            'The functional program spans five interconnected public venues — a playroom (immersive storytelling), a bar (subtraction, anticipation, and anamorphic reveal), an event venue (screens and stage curtain), a library (distorted perspective structures), and a waiting hall (suspended time) — unified by a metal scaffolding framework that filters sightlines toward a final revelation.'
          ]
        }
      },
      gallery: [
        { src: 'img/chissa/01.jpeg', layout: 'full', caption: { it: 'Pianta materica', en: 'Material floorplan' } },
        { src: 'img/chissa/02.jpeg', layout: 'half', caption: { it: "Biblioteca — verso l'ultimo capitolo", en: 'Library — toward the final chapter' } },
        { src: 'img/chissa/03.jpeg', layout: 'half', caption: { it: 'Bar — sul punto di brindare', en: 'Bar — on the verge of a toast' } },
        { src: 'img/chissa/04.jpeg', layout: 'half', caption: { it: 'Spazio eventi — a breve in pista', en: 'Event space — about to take the floor' } },
        { src: 'img/chissa/05.jpeg', layout: 'half', caption: { it: 'Ludoteca — giocando in attesa', en: 'Playroom — playing while waiting' } }
      ]
    },
    {
      slug: 'sala-delle-attese',
      index: '02',
      year: 'a.a. 2025/26',
      category: 'EXHIBIT',
      accent: { light: '#1D3FA3', dark: '#648BFF' },
      professors: 'Anzani Anna, Crippa Davide, Di Prete Barbara, Gatti Giacomo Attilio Carlo, Lonardo Emilio',
      cover: 'img/sala-delle-attese/cover.jpeg',
      i18n: {
        it: {
          title: 'Chissà — Sala delle Attese',
          subtitle: "Focus sull'area espositiva",
          course: 'Laboratorio di Sintesi',
          context: 'Ex Macello di Monza · Area Espositiva',
          concept: "Trasformare l'attesa passiva in un'esperienza di suspense attiva e cinematografica 'frame by frame', dove la sicurezza psicologica arriva al punto di rottura.",
          paragraphs: [
            "Concepita per dare valore all'attesa in senso positivo, la Sala delle Attese trasforma il tempo passivo in un'esperienza di suspense attiva e cinematografica all'interno dell'ex macello di Monza.",
            "Lo spazio accoglie chi attende di accedere agli altri ambienti del complesso, chi desidera leggere un libro preso in prestito dalla biblioteca o chi vuole semplicemente sperimentare e 'abitare' la condizione stessa dell'attesa.",
            "L'ambiente si sviluppa progressivamente 'frame by frame': inizia con una condizione di stabilità protetta da una rete sospesa sopra le teste dei visitatori, ma l'elemento sferico incombente si avvicina progressivamente tendendo la rete fino al punto di rottura, privando il visitatore della sicurezza psicologica e accendendo la curiosità verso l'esito finale del percorso."
          ]
        },
        en: {
          title: 'Chissà — Hall of Waitings',
          subtitle: 'Exhibition area focus',
          course: 'Final Synthesis Studio',
          context: 'Ex Macello di Monza · Exhibition Area',
          concept: 'Turning passive waiting into an active, cinematic frame-by-frame suspense experience where where psychological security reaches its breaking point.',
          paragraphs: [
            'Conceived to reframe waiting in a positive key, the Hall of Waiting transforms passive time into an active, cinematic suspense experience inside Monza’s former slaughterhouse.',
            'The gallery welcomes visitors waiting to access other venues of the complex, reading a book from the library, or simply choosing to inhabit the condition of waiting itself.',
            'The space evolves progressively frame by frame: it opens in a state of stability beneath a protective overhead mesh, as looming cobalt spheres descend and stretch the net toward its breaking point — stripping away psychological certainty and sparking curiosity about the end of the sequence.'
          ]
        }
      },
      gallery: [
        { src: 'img/sala-delle-attese/01.jpeg', layout: 'full', caption: { it: 'Prospetto dello spazio', en: 'Elevation of the space' } },
        { src: 'img/sala-delle-attese/02.jpeg', layout: 'half', caption: { it: 'Pianta materica della sequenza spaziale frame by frame', en: 'Material plan of the frame-by-frame spatial sequence' } },
        { src: 'img/sala-delle-attese/03.jpeg', layout: 'half', caption: { it: 'Vista diurna al punto di massima tensione e rottura della rete', en: 'Daytime view at the point of maximum tension and rupture' } },
        { src: 'img/sala-delle-attese/04.jpeg', layout: 'half', caption: { it: 'Vista notturna', en: 'Night view' } }
      ]
    },
    {
      slug: 'sedute-in-attesa',
      index: '03',
      year: 'a.a. 2025/26',
      category: 'PRODUCT',
      accent: { light: '#2B509E', dark: '#6E98EB' },
      professors: 'Anzani Anna, Crippa Davide, Di Prete Barbara, Gatti Giacomo Attilio Carlo, Lonardo Emilio',
      cover: 'img/sedute-in-attesa/cover.jpeg',
      i18n: {
        it: {
          title: 'Chissà — Sedute in attesa',
          subtitle: 'Focus di tesi · Dispositivo psicosomatico allestitivo',
          course: 'Laboratorio di Sintesi (Focus di Tesi)',
          context: 'Tesi di Laurea Triennale · Politecnico di Milano',
          concept: "Un sistema di sedute modulare in tubi d'acciaio Innocenti e corda che muta morfologia dal comfort all'allerta tramite gambe telescopiche e perni passanti.",
          paragraphs: [
            "Sedute in attesa si configura come un dispositivo psicosomatico allestitivo che esplora il concetto di suspense e la manipolazione dello spazio attraverso un sistema di sedute la cui morfologia muta lungo il percorso espositivo.",
            "L'andamento planimetrico segue una progressione cinematografica a 'keyframe' in cui l'arredo abbandona gradualmente l'inclinazione accogliente iniziale per irrigidirsi in configurazioni verticali e instabili, inducendo nel corpo del visitatore una transizione somatica dal comfort all'allerta.",
            "L'intero impianto strutturale è risolto tramite un kit modulare a elementi invariabili basato sullo scaffolding: un esoscheletro in tubi d'acciaio Innocenti e giunti strutturali accoglie una membrana in corda ancorata. Gambe telescopiche e una matrice di foratura con perni passanti impongono le pendenze di progetto eliminando ogni tolleranza manuale."
          ]
        },
        en: {
          title: 'Chissà — Waiting Seats',
          subtitle: 'Bachelor thesis focus · Psychosomatic exhibition device',
          course: 'Final Synthesis Studio (Thesis Focus)',
          context: 'Bachelor Thesis · Politecnico di Milano',
          concept: 'A modular steel scaffolding and rope seating system shifting from comfort to alertness via telescopic legs and perforated locking pins.',
          paragraphs: [
            'Waiting Seats operates as a psychosomatic exhibition device exploring suspense and spatial manipulation through a seating system whose morphology transforms along the gallery path.',
            'The planimetric progression follows cinematic keyframes: the seating gradually abandons its welcoming recline to stiffen into vertical, unstable postures, inducing a somatic shift from comfort to alertness.',
            'The entire structure relies on an invariant modular kit rooted in scaffolding construction: an exoskeleton of Innocenti steel tubes and structural joints supports a tensioned rope membrane. Telescopic legs and a perforated matrix with locking pins set exact inclinations without manual tolerances.'
          ]
        }
      },
      gallery: [
        { src: 'img/sedute-in-attesa/01.jpeg', layout: 'full', caption: { it: 'Famiglia completa delle quattro stazioni keyframe in acciaio Innocenti e corda', en: 'Complete family of the four keyframe stations in steel and rope' } },
        { src: 'img/sedute-in-attesa/02.jpeg', layout: 'half', caption: { it: 'Render della versione con tavolino', en: 'Render of the version with side table' } },
        { src: 'img/sedute-in-attesa/03.jpeg', layout: 'half', caption: { it: 'Viste isometriche dei dettagli', en: 'Isometric views of the details' } },
        { src: 'img/sedute-in-attesa/04.jpeg', layout: 'full', caption: { it: 'Vista notturna dello spazio', en: 'Night view of the space' } }
      ]
    },
    {
      slug: 'gemme-sacrificali',
      index: '04',
      year: 'a.a. 2025/26',
      category: 'PRODUCT',
      accent: { light: '#9A7852', dark: '#D1B18A' },
      professors: 'Alberto Cigada, Manfredi Schembri',
      cover: 'img/gemme-sacrificali/cover.jpeg',
      i18n: {
        it: {
          title: 'Gemme Sacrificali',
          subtitle: "Packaging anidro sostenibile per l'hotellerie",
          course: 'Materiali ed Applicazioni Emergenti e Sostenibili',
          context: 'Ricerca Materiali · Regolamento UE PPWR 2030',
          concept: "In risposta al regolamento europeo PPWR 2030, una gemma poliedrica in HydroGrains che dissolve il confine tra contenitore e contenuto, azzerando i rifiuti plastici.",
          paragraphs: [
            "In risposta al regolamento europeo PPWR che dal 2030 vieterà i flaconi monouso in plastica negli hotel, Gemme Sacrificali introduce il 'Packaging Sacrificale' per l'hotellerie: un dispositivo anidro che supera la distinzione tra contenitore e contenuto, dissolvendosi interamente durante l'uso.",
            "La gemma unisce una matrice biodegradabile di HydroGrains, talco ed elementi effervescenti (bicarbonato e acido citrico). La forma poliedrica garantisce resistenza logistica e grip ottimale; sotto l'acqua calda, l'attrito attiva una micro-effervescenza esfoliante che rilascia gradualmente il cuore cosmetico concentrato di shampoo o siero oleoso.",
            "La produzione per compressione a umido a temperatura ambiente riduce i consumi energetici, mentre l'assenza di acqua abbatte peso e volumi di trasporto del 70–80%. Il packaging secondario in cartone riciclato con bio-coating idrofobo resta pulito e riciclabile in Classe A."
          ]
        },
        en: {
          title: 'Gemme Sacrificali',
          subtitle: 'Anhydrous sustainable packaging for hospitality',
          course: 'Emerging & Sustainable Materials and Applications',
          context: 'Material Research · EU PPWR 2030 Regulation',
          concept: 'Responding to the EU PPWR 2030 regulation, a polyhedral HydroGrains gem dissolves the boundary between container and content, eliminating plastic waste.',
          paragraphs: [
            'Responding to the European PPWR regulation banning single-use plastic hotel amenities by 2030, Gemme Sacrificali introduces "Sacrificial Packaging" for luxury hospitality: an anhydrous single-dose unit that dissolves completely during use.',
            'Each gem blends a biodegradable HydroGrains matrix, talc, and effervescent agents (sodium bicarbonate and citric acid). Its polyhedral geometry ensures logistical resilience and grip; under warm water, friction triggers a micro-effervescent exfoliation that releases the concentrated shampoo or oil serum core.',
            'Room-temperature wet compression reduces manufacturing energy, while removing water cuts shipping weight and volume by 70–80%. Secondary packaging in recycled molded pulp with a hydrophobic bio-coating stays clean and Class-A recyclable.'
          ]
        }
      },
      gallery: [
        { src: 'img/gemme-sacrificali/01.jpeg', layout: 'full', caption: { it: 'Packaging secondario in cartone riciclato idrofobo e gemme poliedriche', en: 'Hydrophobic recycled cardboard packaging and polyhedral gems' } },
        { src: 'img/gemme-sacrificali/02.jpeg', layout: 'half', caption: { it: 'Mockup di collaborazione per il settore hotellerie di lusso', en: 'Collaboration mockups for luxury hospitality' } },
        { src: 'img/gemme-sacrificali/03.jpeg', layout: 'half', caption: { it: 'Mockup di collaborazione per il settore hotellerie di lusso', en: 'Collaboration mockups for luxury hospitality' } }
      ]
    },
    {
      slug: 'nodo',
      index: '05',
      year: 'a.a. 2025/26',
      category: 'EXHIBIT',
      accent: { light: '#C83E2B', dark: '#F06A57' },
      professors: 'Aldo Colonetti, Valentina Fisichella',
      cover: 'img/nodo/cover.jpeg',
      i18n: {
        it: {
          title: 'NODO',
          subtitle: 'Mercato di arte contemporanea a Gibellina',
          course: 'Fenomenologia del design: spazio e tempo',
          context: 'Gibellina Nuova · Spazio Pubblico & Identità',
          concept: "Riattivare il vuoto monumentale di Gibellina attraverso allestimenti temporanei a scala umana, una ritualità ciclica e un'identità visiva coordinata.",
          paragraphs: [
            "L'introduzione di un mercato di arte contemporanea nel tessuto urbano di Gibellina agisce profondamente sia sullo spazio che sul tempo della città, ricucendo il rapporto tra architettura monumentale e vita quotidiana.",
            "Sul piano spaziale, la piazza, oggi percepita come un vuoto monumentale e contemplativo, si trasforma in un luogo attraversato e abitato: opere, banchi modulari in legno e percorsi espositivi reintroducono una scala umana capace di mutare configurazione secondo le stagioni.",
            "Sul piano temporale, NODO introduce una ritualità ciclica che scandisce la vita collettiva. La memoria del terremoto si rinnova attraverso l'uso, l'incontro e la continuità delle relazioni, ricostruendo il senso di comunità attraverso il ritmo dell'arte."
          ]
        },
        en: {
          title: 'NODO',
          subtitle: 'Contemporary art market in Gibellina',
          course: 'Phenomenology of Design: Space & Time',
          context: 'Gibellina Nuova · Public Space & Identity',
          concept: 'Reactivating Gibellina’s monumental urban void through human-scale temporary pavilions, cyclical ritual, and a coordinated visual identity.',
          paragraphs: [
            'Introducing a contemporary art market into Gibellina’s urban fabric acts deeply on both the space and time of the city, mending the gap between monumental architecture and everyday life.',
            'Spatially, the square — currently perceived as a contemplative, oversized void — becomes a traversed and inhabited place: artworks, modular timber stalls, and exhibition routes restore a human scale adaptable to different editions and seasons.',
            'Temporally, NODO establishes a cyclical ritual that structures collective life. The memory of the earthquake is renewed through use, encounter, and continuity of relationships, rebuilding community through the rhythm of art.'
          ]
        }
      },
      gallery: [
        { src: 'img/nodo/01.jpeg', layout: 'full', caption: { it: 'Allestimento temporaneo e moduli espositivi in piazza a Gibellina', en: 'Temporary setup and modular exhibition stands in Gibellina’s square' } },
        { src: 'img/nodo/02.jpeg', layout: 'half', caption: { it: 'Edizione Frequenze — padiglioni acustici e dispositivi lignei', en: 'Frequenze Edition — acoustic pavilions and timber structures' } },
        { src: 'img/nodo/03.jpeg', layout: 'half', caption: { it: 'Edizione Arti Visive — stand di artisti', en: 'Visual Arts Edition — artist booths' } },
        { src: 'img/nodo/04.jpeg', layout: 'full', caption: { it: 'Identità visiva coordinata e comunicazione editoriale', en: 'Coordinated visual identity and editorial communication' } }
      ]
    },
    {
      slug: 'post-scriptum',
      index: '06',
      year: 'a.a. 2024/25',
      category: 'INTERIOR',
      accent: { light: '#B3662B', dark: '#E29254' },
      professors: 'Luigi Brenna, Alessandro Colombo, Agnese Rebaglio',
      cover: 'img/post-scriptum/cover.jpeg',
      i18n: {
        it: {
          title: 'Post Scriptum',
          subtitle: 'A.D.ORO — Design for Senior(c)ity a Cascina Linterno',
          course: 'Laboratorio di Metaprogetto',
          context: 'Cascina Linterno, Milano · Social & Interior Design',
          concept: "Spazi di laboratorio e trasmissione del sapere per i residenti over 65 di Cascina Linterno: continuare a lasciare un segno dopo il pensionamento.",
          paragraphs: [
            "Ogni autore desidera lasciare un elemento aggiuntivo al termine del proprio operato: un post-scriptum. Il progetto traduce questa metafora in un sistema di spazi per i residenti over 65 di Cascina Linterno, offrendo loro la possibilità di scrivere un nuovo capitolo con maggiore libertà mantenendo il proprio stile.",
            "Il pensionamento comporta spesso la perdita della bussola identitaria legata al proprio mestiere. Post Scriptum trasforma il lavoro stesso in strumento di relazione: gli spazi laboratoriali sono organizzati secondo le diverse categorie artigianali e manuali dei residenti.",
            "Non più per uno stipendio, ma per il piacere del fare e per trasmettere competenze alle nuove generazioni, gli ambienti di Cascina Linterno diventano luogo di scambio intergenerazionale e memoria attiva."
          ]
        },
        en: {
          title: 'Post Scriptum',
          subtitle: 'A.D.ORO — Design for Senior(c)ity at Cascina Linterno',
          course: 'Metadesign Studio',
          context: 'Cascina Linterno, Milan · Social & Interior Design',
          concept: 'Craft workshops and knowledge-sharing spaces for over-65 residents at Cascina Linterno: continuing to leave a mark after retirement.',
          paragraphs: [
            'Every author wishes to add one final note at the end of their work: a post-scriptum. The project translates this metaphor into a system of spaces for over-65 residents at Cascina Linterno, inviting them to write a freer chapter while keeping their personal signature.',
            'Retirement often disrupts the sense of identity rooted in one’s craft. Post Scriptum turns work itself into a relational tool, organizing workshop spaces around the residents’ diverse manual and artisanal skills.',
            'No longer driven by wages, but by the pleasure of making and teaching younger generations, Cascina Linterno becomes a living hub of intergenerational exchange and active memory.'
          ]
        }
      },
      gallery: [
        { src: 'img/post-scriptum/01.jpeg', layout: 'full', caption: { it: 'Pianta materica e sistema delle quattro regole progettuali', en: 'Material plan and the four design rules' } },
        { src: 'img/post-scriptum/02.jpeg', layout: 'half', caption: { it: 'Render interno appartamento', en: 'Apartment interior render' } },
        { src: 'img/post-scriptum/03.jpeg', layout: 'half', caption: { it: 'Render spazio "Caffettiera"', en: '"Caffettiera" social space render' } },
        { src: 'img/post-scriptum/04.jpeg', layout: 'half', caption: { it: 'Sezione spazio "A.te.lie.r."', en: '"A.te.lie.r." section drawing' } },
        { src: 'img/post-scriptum/05.jpeg', layout: 'half', caption: { it: 'Sezione spazio "Caffettiera"', en: '"Caffettiera" section drawing' } }
      ]
    },
    {
      slug: 'la-cimice',
      index: '07',
      year: 'a.a. 2024/25',
      category: 'EXHIBIT',
      accent: { light: '#A82929', dark: '#E55B5B' },
      professors: 'Marcello Galbiati, Franco Origoni, Luca Vivanti',
      cover: 'img/la-cimice/cover.jpeg',
      i18n: {
        it: {
          title: 'La Cimice',
          subtitle: 'Esposizione in Triennale per lo spettacolo del Piccolo Teatro',
          course: 'Laboratorio di Design degli Interni sez. 3',
          context: 'Triennale Milano · Piccolo Teatro',
          concept: "Un percorso non cronologico basato sulla 'gabbia nella gabbia': il visitatore entra nel 1979 (laboratorio di analisi) per osservare il 1929 (scatola del passato).",
          paragraphs: [
            "Progetto espositivo negli spazi della Triennale di Milano dedicato allo spettacolo 'La Cimice' di Vladimir Vladimirovič Majakovskij messo in scena dal Piccolo Teatro. A differenza della narrazione cronologica dell'opera, il percorso inverte la prospettiva temporale.",
            "Lo spettatore viene immerso prima nel presente distopico del 1979 — un laboratorio di analisi clinica — per osservare il 1929 come un reperto da studiare. L'architettura espositiva materializza il concetto di 'gabbia nella gabbia', mettendo a confronto due epoche opposte.",
            "Solo al termine del percorso, uscendo dalla scatola interna, il visitatore acquisisce consapevolezza del dispositivo spaziale che lo ha avvolto, completando il gioco percettivo tra osservatore e soggetto osservato."
          ]
        },
        en: {
          title: 'La Cimice',
          subtitle: 'Exhibition at Triennale Milano for Piccolo Teatro’s play',
          course: 'Interior Design Studio Sec. 3',
          context: 'Triennale Milano · Piccolo Teatro',
          concept: 'A non-chronological "cage within a cage" route: visitors enter the dystopian 1979 laboratory first to inspect 1929 as an enclosed artifact.',
          paragraphs: [
            'Exhibition design at Triennale Milano dedicated to Piccolo Teatro’s staging of "The Bedbug" (La Cimice) by Vladimir Vladimirovič Majakovskij. Unlike the play’s chronological narrative, the exhibition reverses temporal perspective.',
            'Visitors first enter the clinical 1979 analysis lab to examine 1929 as a preserved specimen. The spatial architecture materializes the "cage within a cage" concept, contrasting two opposing eras.',
            'Only upon exiting the inner volume at the end of the path do visitors realize they were inside a nested box, completing the perceptual interplay between observer and observed.'
          ]
        }
      },
      gallery: [
        { src: 'img/la-cimice/cover.jpeg', layout: 'full', caption: { it: 'Poster della mostra', en: 'Exhibition poster' } },
        { src: 'img/la-cimice/01.jpeg', layout: 'full', caption: { it: 'Pianta e percorsi espositivi', en: 'Floorplan and exhibition pathways' } },
        { src: 'img/la-cimice/02.jpeg', layout: 'half', caption: { it: 'Render area 1929', en: '1929 area render' } },
        { src: 'img/la-cimice/03.jpeg', layout: 'half', caption: { it: 'Render area 1929', en: '1929 area render' } },
        { src: 'img/la-cimice/04.jpeg', layout: 'half', caption: { it: 'Foto modello fisico', en: 'Physical scale model photograph' } },
        { src: 'img/la-cimice/05.jpeg', layout: 'half', caption: { it: 'Foto modello fisico', en: 'Physical scale model photograph' } }
      ]
    },
    {
      slug: 'il-baretto',
      index: '08',
      year: 'a.a. 2023/24',
      category: 'INTERIOR',
      accent: { light: '#B85A34', dark: '#E5855E' },
      professors: 'Alessandro Palazzo',
      cover: 'img/il-baretto/cover.jpeg',
      i18n: {
        it: {
          title: 'Il Baretto',
          subtitle: 'Progettazione di un bar in zona Porta Romana a Milano',
          course: 'Strumenti e Metodi del Progetto',
          context: 'Porta Romana, Milano · Hospitality & Interior',
          concept: 'Uno spazio ibrido tra caffetteria e area studio, avvolto da un soffitto ondulato in legno di betulla ispirato ad Alvar Aalto.',
          paragraphs: [
            "Il Baretto nasce a Porta Romana come spazio versatile e intergenerazionale, capace di accompagnare diversi ritmi della giornata: dal rapido caffè mattutino a lunghe sessioni di studio e lavoro condiviso.",
            "La pianta si articola in due ambienti fluidi e distinti: l'area caffetteria con bancone scultoreo in acciaio inox e la zona studio/lettura dominata da un tavolo comunitario lungo sei metri dotato di prese integrate.",
            "Il progetto è caratterizzato da linee curve avvolgenti e da un soffitto ondulato in legno di betulla che richiama la sensibilità organica del sanatorio di Paimio di Alvar Aalto, bilanciando calore materico e rigore contemporaneo."
          ]
        },
        en: {
          title: 'Il Baretto',
          subtitle: 'Interior design of a café in Porta Romana, Milan',
          course: 'Design Tools & Methods',
          context: 'Porta Romana, Milan · Hospitality & Interior',
          concept: 'A hybrid café and study space enveloped by an undulating birch-wood ceiling inspired by Alvar Aalto.',
          paragraphs: [
            'Il Baretto is conceived in Milan’s Porta Romana district as a versatile, intergenerational space accommodating different daily rhythms — from a quick morning espresso to extended study and remote-work sessions.',
            'The plan splits into two fluid zones: a café area anchored by a sculptural stainless-steel counter, and a study/reading room centered around a six-meter communal table with integrated power outlets.',
            'Enveloping curves and a wave-like birch wood ceiling — referencing Alvar Aalto’s Paimio Sanatorium — balance warm tactility with contemporary clarity.'
          ]
        }
      },
      gallery: [
        { src: 'img/il-baretto/cover.jpeg', layout: 'full', caption: { it: 'Render zona bar con bancone in acciaio inox e soffitto ondulato in betulla', en: 'Bar area render with stainless-steel counter and undulating birch ceiling' } },
        { src: 'img/il-baretto/01.jpeg', layout: 'half', caption: { it: 'Render zona studio con tavolo condiviso', en: 'Study area render with communal table' } },
        { src: 'img/il-baretto/02.jpeg', layout: 'half', caption: { it: 'Render zona bancone', en: 'Bar area render' } }
      ]
    },
    {
      slug: 'house-l',
      index: '09',
      year: 'a.a. 2023/24',
      category: 'INTERIOR',
      accent: { light: '#3A6B52', dark: '#67AD88' },
      professors: 'Gerosa Giulia Maria, Mazzotti Angela Pia, Zuco Gabriella',
      cover: 'img/house-l/cover.jpeg',
      i18n: {
        it: {
          title: 'House L',
          subtitle: 'Dal taglio come distruzione alla generazione · Ai Borelli, Lucca',
          course: 'Laboratorio di Fondamenti del Progetto',
          context: 'Ai Borelli, Lucca · Architettura Residenziale',
          concept: "Dimora su pendio ispirata a Sou Fujimoto: acqua lungo la scala d'ingresso, pilastro poligonale con parete d'arrampicata e tagli di luce diagonali.",
          paragraphs: [
            "Situata su un pendio nella frazione Ai Borelli di Lucca, House L concepisce l'abitare come un'esperienza sensoriale in dialogo diretto con il paesaggio naturale e il suono dell'acqua.",
            "All'ingresso una vasca d'acqua accompagna il flusso lungo i gradini della scala, creando una soglia acustica di benessere. Il linguaggio minimalista, ispirato a Sou Fujimoto, calibra legno caldo, toni del verde e blu per la zona notte.",
            "Elemento generatore dell'intero volume è il pilastro a conformazione poligonale che sostiene la struttura e integra una parete d'arrampicata verso il terrazzo, irradiando diagonali e tagli di luce attraverso pareti, soffitto e pavimento."
          ]
        },
        en: {
          title: 'House L',
          subtitle: 'From the cut as destruction to generation · Ai Borelli, Lucca',
          course: 'Foundations of Design Studio',
          context: 'Ai Borelli, Lucca · Residential Architecture',
          concept: 'A hillside dwelling inspired by Sou Fujimoto: water cascading along the entry stairs, a polygonal climbing pillar, and diagonal light cuts.',
          paragraphs: [
            'Set on a hillside in Ai Borelli near Lucca, House L frames domestic living as a sensory experience in direct dialogue with nature and the sound of water.',
            'At the entrance, a water basin flows gently along the stair steps, forming a calming acoustic threshold. Its minimalist language, inspired by Sou Fujimoto, pairs warm timber, greens, and serene blue tones for the sleeping quarters.',
            'The generating element of the volume is a polygonal structural pillar that integrates an indoor climbing wall leading to the terrace, radiating diagonals and light cuts across walls, ceiling, and floor.'
          ]
        }
      },
      gallery: [
        { src: 'img/house-l/cover.jpeg', layout: 'full', caption: { it: 'Render area esterna', en: 'Exterior view render' } },
        { src: 'img/house-l/01.jpeg', layout: 'half', caption: { it: 'Schizzo prospettico dello spazio interno e soppalco', en: 'Interior perspective sketch and mezzanine' } },
        { src: 'img/house-l/02.jpeg', layout: 'half', caption: { it: 'Studio geometrico della parete di arrampicata e delle diagonali', en: 'Geometric study of the climbing wall and diagonals' } },
        { src: 'img/house-l/03.jpeg', layout: 'half', caption: { it: 'Render ingresso', en: 'Entrance render' } },
        { src: 'img/house-l/04.jpeg', layout: 'half', caption: { it: 'Render camera', en: 'Bedroom render' } }
      ]
    },
    {
      slug: 'sogno-ma-forse-no',
      index: '10',
      year: 'a.a. 2023/24',
      category: 'VISUAL',
      accent: { light: '#9E222A', dark: '#E0535C' },
      professors: 'Francesca Telli, Massimiliano Maini, Piero Pozzi',
      cover: 'img/sogno-ma-forse-no/cover.jpeg',
      i18n: {
        it: {
          title: 'Sogno, ma forse no',
          subtitle: 'Cosa succede quando si chiudono gli occhi?',
          course: 'Laboratorio di Elementi Visivi',
          context: 'Politecnico di Milano · Visual & Spatial Storytelling',
          concept: "Un viaggio onirico in tre atti legato dal letto e dal filo rosso, dentro una struttura a prisma ottagonale ispirata all'anfiteatro e al panopticon di Bentham.",
          paragraphs: [
            "'Sogno, ma forse no' indaga il territorio sospeso tra reale e surreale che si apre nell'istante in cui si chiudono gli occhi. Il letto, presenza ricorrente in ogni ambiente, e un filo rosso continuo legano le due realtà parallele.",
            "Il racconto spaziale si articola in tre atti — l'ascesa dell'addormentamento, il viaggio nel mondo onirico e la discesa del risveglio — tradotti in una struttura a prisma con base ottagonale a sviluppo elicoidale.",
            "Ispirata simultaneamente all'anfiteatro e al panopticon di Jeremy Bentham, l'architettura presenta stanze con aperture passanti su entrambe le pareti, restituendo la percezione costante di un'ascesa a spirale sotto lo sguardo di un ente esterno."
          ]
        },
        en: {
          title: 'Sogno, ma forse no',
          subtitle: 'What happens when you close your eyes?',
          course: 'Visual Elements Studio',
          context: 'Politecnico di Milano · Visual & Spatial Storytelling',
          concept: 'A three-act dreamscape tied together by a bed and a red thread inside an octagonal prism inspired by the amphitheater and Bentham’s panopticon.',
          paragraphs: [
            '"Sogno, ma forse no" investigates the liminal territory between real and surreal that opens the moment we close our eyes. The bed, recurring in every room, and a continuous red thread bind these parallel realities.',
            'The spatial story unfolds in three acts — falling asleep (ascent), journeying through the dream world, and waking up (descent) — translated into a helical octagonal prism.',
            'Simultaneously referencing the amphitheater and Jeremy Bentham’s panopticon, the rooms feature openings on both sides, evoking a perpetual spiral climb under an unseen gaze.'
          ]
        }
      },
      gallery: [
        { src: 'img/sogno-ma-forse-no/01.jpeg', layout: 'full', caption: { it: 'Modello fisico del prisma ottagonale a percorso elicoidale', en: 'Physical model of the helical octagonal prism' } },
        { src: 'img/sogno-ma-forse-no/02.jpeg', layout: 'half', caption: { it: 'Dettaglio stanza', en: 'Room detail' } },
        { src: 'img/sogno-ma-forse-no/03.jpeg', layout: 'half', caption: { it: 'Dettaglio stanza', en: 'Room detail' } },
        { src: 'img/sogno-ma-forse-no/04.jpeg', layout: 'half', caption: { it: 'Dettaglio stanza', en: 'Room detail' } },
        { src: 'img/sogno-ma-forse-no/05.jpeg', layout: 'half', caption: { it: 'Dettaglio stanza', en: 'Room detail' } }
      ]
    }
  ];

  /* ==========================================================================
     STATE & DOM REFERENCES
     ========================================================================== */
  function getInitialLang() {
    try {
      const saved = localStorage.getItem('lang');
      if (saved === 'it' || saved === 'en') return saved;
    } catch (_) {}
    return 'it';
  }

  const state = {
    lang: getInitialLang(),
    activeFilter: 'ALL',
    viewMode: 'GRID',
    expandedSlug: null,
    theme: document.documentElement.classList.contains('dark') ? 'dark' : 'light',
    previewProjectIndex: null,
    carouselIndex: 0,
    pageProjectIndex: null,
    lightboxIndex: null
  };

  const $ = (id) => document.getElementById(id);

  const dom = {
    homeView: $('home-view'),
    projectPageView: $('project-page-view'),
    projectProgressBar: $('project-progress-bar'),
    worksGrid: $('works-grid'),
    worksIndex: $('works-index'),
    worksIndexRows: $('works-index-rows'),
    btnGridView: $('btn-grid-view'),
    btnIndexView: $('btn-index-view'),
    filterBar: $('filter-bar'),
    filterButtons: document.querySelectorAll('.filter-btn'),
    previewModal: $('quick-preview-modal'),
    previewPanel: $('quick-preview-panel'),
    previewCloseBtn: $('preview-close-btn'),
    carouselStage: $('carousel-stage'),
    carouselPrevBtn: $('carousel-prev-btn'),
    carouselNextBtn: $('carousel-next-btn'),
    carouselCounter: $('carousel-counter'),
    carouselCaption: $('carousel-caption'),
    carouselDots: $('carousel-dots'),
    previewOpenPageBtn: $('preview-open-page-btn'),
    pageBackBtn: $('page-back-btn'),
    pagePrevProjectBtn: $('page-prev-project'),
    pageNextProjectBtn: $('page-next-project'),
    pageGalleryGrid: $('page-gallery-grid'),
    lightboxModal: $('lightbox-modal'),
    lightboxStage: $('lightbox-stage'),
    lightboxCounter: $('lightbox-counter'),
    lightboxCaption: $('lightbox-caption'),
    lightboxCloseBtn: $('lightbox-close-btn'),
    lightboxPrevBtn: $('lightbox-prev-btn'),
    lightboxNextBtn: $('lightbox-next-btn'),
    themeToggle: $('theme-toggle'),
    themeLabel: $('theme-label'),
    langToggle: $('lang-toggle'),
    langItLabel: $('lang-it-label'),
    langEnLabel: $('lang-en-label'),
    downloadCvBtn: $('download-cv-btn'),
    downloadPortfolioBtn: $('download-portfolio-btn'),
    mobileMenuBtn: $('mobile-menu-btn'),
    mobileMenu: $('mobile-menu'),
    customCursor: $('custom-cursor'),
    customCursorLabel: $('custom-cursor-label'),
    toast: $('toast'),
    toastMessage: $('toast-message'),
    milanClock: $('milan-clock'),
    milanClockMobile: $('milan-clock-mobile')
  };

  /* ==========================================================================
     HELPERS: I18N, ACCENTS, MEDIA HYDRATION
     ========================================================================== */
  const t = (key) => (UI_TEXT[state.lang] && UI_TEXT[state.lang][key]) || UI_TEXT.it[key] || key;
  const pText = (project) => project.i18n[state.lang] || project.i18n.it;
  const getProjectAccent = (project) => (project && project.accent ? project.accent[state.theme] : null);
  const escapeAttr = (str) => String(str || '').replace(/"/g, '&quot;');
  const pad = (n) => String(n).padStart(2, '0');

  function applyGlobalAccent(project) {
    const color = project ? getProjectAccent(project) : '';
    if (color) {
      document.documentElement.style.setProperty('--accent', color);
    } else {
      document.documentElement.style.removeProperty('--accent');
    }
  }

  function buildMediaHTML(src, alt) {
    const safeAlt = escapeAttr(alt);
    const fallbackLabel = escapeAttr(src);
    return `
      <div class="media-slot" data-fallback-label="${fallbackLabel}">
        <img src="${src}" alt="${safeAlt}" loading="lazy" decoding="async" class="media-real" />
      </div>
    `;
  }

  // Gestisce anche immagini già presenti nella cache del browser
  function hydrateMediaSlots(rootEl) {
    if (!rootEl) return;
    rootEl.querySelectorAll('img.media-real').forEach((img) => {
      if (img.complete) {
        if (img.naturalWidth > 0) {
          img.parentElement?.classList.add('img-loaded');
        } else {
          img.parentElement?.classList.add('img-error');
        }
      }
    });
  }

  document.addEventListener('load', (e) => {
    if (e.target instanceof HTMLImageElement && e.target.classList.contains('media-real')) {
      e.target.parentElement?.classList.add('img-loaded');
    }
  }, true);

  document.addEventListener('error', (e) => {
    if (e.target instanceof HTMLImageElement && e.target.classList.contains('media-real')) {
      e.target.parentElement?.classList.add('img-error');
    }
  }, true);

  /* ==========================================================================
     LANGUAGE SWITCHER (IT / EN)
     ========================================================================== */
  function applyLanguage(lang, persist = true) {
    state.lang = lang === 'en' ? 'en' : 'it';
    document.documentElement.lang = state.lang;

    if (persist) {
      try { localStorage.setItem('lang', state.lang); } catch (_) {}
    }

    // Aggiorna pillola IT / EN
    dom.langItLabel.classList.toggle('text-[var(--fg)]', state.lang === 'it');
    dom.langItLabel.classList.toggle('font-medium', state.lang === 'it');
    dom.langItLabel.classList.toggle('text-muted', state.lang !== 'it');

    dom.langEnLabel.classList.toggle('text-[var(--fg)]', state.lang === 'en');
    dom.langEnLabel.classList.toggle('font-medium', state.lang === 'en');
    dom.langEnLabel.classList.toggle('text-muted', state.lang !== 'en');

    // Aggiorna testi statici HTML
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      el.innerHTML = t(el.dataset.i18nHtml);
    });

    // Aggiorna link PDF (CV IT vs CV EN)
    if (dom.downloadCvBtn) dom.downloadCvBtn.href = DOWNLOADS.cv[state.lang];
    if (dom.downloadPortfolioBtn) dom.downloadPortfolioBtn.href = DOWNLOADS.portfolio[state.lang];

    // Aggiorna pulsante menu mobile
    const menuOpen = !dom.mobileMenu.classList.contains('hidden');
    dom.mobileMenuBtn.textContent = menuOpen ? t('menu.close') : t('menu.open');

    // Ri-renderizza componenti dinamici
    updateFilterCounts();
    renderWorks();

    if (state.previewProjectIndex !== null) {
      refreshPreviewTexts();
      renderCarouselSlide();
    }
    if (state.pageProjectIndex !== null) {
      renderDedicatedProjectPage(PROJECTS[state.pageProjectIndex].slug, false);
    } else {
      document.title = t('baseTitle');
    }
    if (state.lightboxIndex !== null) {
      renderLightboxSlide();
    }
  }

  dom.langToggle.addEventListener('click', () => {
    applyLanguage(state.lang === 'it' ? 'en' : 'it');
  });

  /* ==========================================================================
     UTILITIES: TOAST, CLIPBOARD, CLOCK, TOUCH SWIPE
     ========================================================================== */
  let toastTimer = null;
  function showToast(message) {
    dom.toastMessage.textContent = message;
    dom.toast.classList.remove('opacity-0', 'translate-y-3', 'pointer-events-none');
    dom.toast.classList.add('opacity-100', 'translate-y-0');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      dom.toast.classList.add('opacity-0', 'translate-y-3', 'pointer-events-none');
      dom.toast.classList.remove('opacity-100', 'translate-y-0');
    }, 2600);
  }

  async function copyTextToClipboard(text, label) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const tempInput = document.createElement('textarea');
        tempInput.value = text;
        tempInput.setAttribute('readonly', '');
        tempInput.style.position = 'fixed';
        tempInput.style.opacity = '0';
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
      }
      showToast(label || text);
    } catch (_) {
      showToast(t('toast.copyError'));
    }
  }

  const clockFormatter = new Intl.DateTimeFormat('it-IT', {
    timeZone: 'Europe/Rome',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  function updateMilanClock() {
    const formatted = `MILANO, IT — ${clockFormatter.format(new Date())}`;
    if (dom.milanClock) dom.milanClock.textContent = formatted;
    if (dom.milanClockMobile) dom.milanClockMobile.textContent = formatted;
  }

  function bindSwipe(element, onSwipeLeft, onSwipeRight) {
    let startX = 0;
    let startY = 0;
    element.addEventListener('touchstart', (e) => {
      if (e.touches.length !== 1) return;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });

    element.addEventListener('touchend', (e) => {
      if (e.changedTouches.length !== 1) return;
      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;
      if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) {
        dx < 0 ? onSwipeLeft() : onSwipeRight();
      }
    }, { passive: true });
  }

  /* ==========================================================================
     THEME MANAGEMENT (con aggiornamento accenti cromatici)
     ========================================================================== */
  function applyTheme(mode, persist = true) {
    state.theme = mode;
    document.documentElement.classList.toggle('dark', mode === 'dark');
    dom.themeLabel.textContent = mode === 'dark' ? 'LIGHT' : 'DARK';
    if (persist) {
      try { localStorage.setItem('theme', mode); } catch (_) {}
    }

    // Ri-allinea i colori accento per light/dark
    renderWorks();
    if (state.pageProjectIndex !== null) {
      applyGlobalAccent(PROJECTS[state.pageProjectIndex]);
    }
    if (state.previewProjectIndex !== null) {
      dom.previewPanel.style.setProperty('--accent', getProjectAccent(PROJECTS[state.previewProjectIndex]));
    }
  }

  dom.themeToggle.addEventListener('click', () => {
    applyTheme(state.theme === 'dark' ? 'light' : 'dark');
  });

  /* ==========================================================================
     DYNAMIC FILTER COUNTS & WORKS RENDERING (GRID + INDEX ACCORDION)
     ========================================================================== */
  function updateFilterCounts() {
    const counts = PROJECTS.reduce((acc, p) => {
      acc[p.category] = (acc[p.category] || 0) + 1;
      return acc;
    }, { ALL: PROJECTS.length });

    dom.filterButtons.forEach((btn) => {
      const cat = btn.dataset.filter;
      const baseLabel = cat === 'ALL' ? t('filter.ALL') : cat;
      btn.textContent = `${baseLabel} (${counts[cat] || 0})`;
    });

    const mobileCount = $('mobile-projects-count');
    if (mobileCount) mobileCount.textContent = `[${pad(PROJECTS.length)}]`;
  }

  function getFilteredProjects() {
    return state.activeFilter === 'ALL'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === state.activeFilter);
  }

  function updateControlStyles() {
    dom.filterButtons.forEach((btn) => {
      const isActive = btn.dataset.filter === state.activeFilter;
      btn.setAttribute('aria-selected', String(isActive));
      btn.classList.toggle('bg-[var(--fg)]', isActive);
      btn.classList.toggle('text-[var(--bg)]', isActive);
      btn.classList.toggle('border-[var(--fg)]', isActive);
      btn.classList.toggle('border-hairline', !isActive);
      btn.classList.toggle('text-muted', !isActive);
    });

    const isGrid = state.viewMode === 'GRID';
    dom.btnGridView.setAttribute('aria-pressed', String(isGrid));
    dom.btnIndexView.setAttribute('aria-pressed', String(!isGrid));

    dom.btnGridView.classList.toggle('bg-[var(--fg)]', isGrid);
    dom.btnGridView.classList.toggle('text-[var(--bg)]', isGrid);
    dom.btnGridView.classList.toggle('text-muted', !isGrid);

    dom.btnIndexView.classList.toggle('bg-[var(--fg)]', !isGrid);
    dom.btnIndexView.classList.toggle('text-[var(--bg)]', !isGrid);
    dom.btnIndexView.classList.toggle('text-muted', isGrid);

    dom.worksGrid.classList.toggle('hidden', !isGrid);
    dom.worksIndex.classList.toggle('hidden', isGrid);
  }

  function renderWorks() {
    const list = getFilteredProjects();
    updateControlStyles();

    // GRID VIEW
    dom.worksGrid.innerHTML = list.map((project, idx) => {
      const txt = pText(project);
      const accent = getProjectAccent(project);
      const isWide = idx % 4 === 0 || idx % 4 === 3;
      const colClass = isWide ? 'md:col-span-7' : 'md:col-span-5';
      const staggerClass = idx % 2 === 1 ? 'md:mt-14 lg:mt-20' : '';
      const aspectClass = isWide ? 'aspect-[16/10]' : 'aspect-[4/5]';

      return `
        <article
          class="project-card group cursor-pointer ${colClass} ${staggerClass}"
          style="--project-accent: ${accent};"
          data-project-slug="${project.slug}"
          data-cursor="PREVIEW"
          tabindex="0"
          role="button"
          aria-label="${escapeAttr(txt.title)}"
        >
          <div class="project-media-wrap project-card-border w-full ${aspectClass} rounded-xl sm:rounded-2xl overflow-hidden border border-hairline bg-elevated relative transition-colors duration-300">
            <div class="project-media-inner w-full h-full">
              ${buildMediaHTML(project.cover, txt.title)}
            </div>
            <div class="absolute top-3 left-3 z-10 inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-surface/85 backdrop-blur-sm border border-hairline font-mono text-[10px] tracking-wider uppercase">
              <span class="w-1.5 h-1.5 rounded-full shrink-0" style="background-color: ${accent};"></span>
              <span>[${project.index}] · ${project.category}</span>
            </div>
          </div>

          <div class="mt-4 flex items-start justify-between gap-4">
            <div>
              <h3 class="font-display font-medium tracking-tight text-xl sm:text-2xl uppercase group-hover:opacity-75 transition-opacity">
                ${txt.title}
              </h3>
              <p class="text-sm text-muted mt-1 leading-snug">${txt.subtitle}</p>
            </div>
            <div class="font-mono text-xs text-muted shrink-0 pt-1">
              ${project.year.replace('a.a. ', '')}
            </div>
          </div>
        </article>
      `;
    }).join('');

    // INDEX VIEW (ACCORDION)
    dom.worksIndexRows.innerHTML = list.map((project) => {
      const txt = pText(project);
      const accent = getProjectAccent(project);
      const isExpanded = state.expandedSlug === project.slug;
      const thumbs = (project.gallery || []).slice(0, 3);

      return `
        <div
          class="accordion-item ${isExpanded ? 'is-expanded' : ''}"
          style="--project-accent: ${accent};"
          data-accordion-slug="${project.slug}"
        >
          <button
            type="button"
            class="accordion-trigger py-5 px-2 sm:px-3 grid grid-cols-12 gap-2 md:gap-4 items-center rounded-lg"
            data-cursor="EXPAND"
            aria-expanded="${isExpanded}"
          >
            <div class="col-span-2 md:col-span-1 font-mono text-xs text-muted flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full shrink-0" style="background-color: ${accent};"></span>
              <span>[${project.index}]</span>
            </div>
            <div class="col-span-8 md:col-span-4">
              <span class="font-display font-medium text-lg sm:text-xl uppercase tracking-tight block">${txt.title}</span>
              <span class="block md:hidden text-xs text-muted mt-0.5 truncate">${txt.subtitle}</span>
            </div>
            <div class="hidden md:block md:col-span-2 font-mono text-[11px] uppercase text-muted">${project.category}</div>
            <div class="hidden md:block md:col-span-3 text-sm text-muted truncate">${txt.course}</div>
            <div class="hidden md:block md:col-span-1 font-mono text-xs text-right text-muted">${project.year.replace('a.a. ', '')}</div>
            <div class="col-span-2 md:col-span-1 flex justify-end">
              <span class="accordion-icon font-mono text-xs leading-none" aria-hidden="true">+</span>
            </div>
          </button>

          <div class="accordion-panel">
            <div class="accordion-panel-inner">
              <div class="px-2 sm:px-3 pb-7 pt-4 space-y-5 border-t border-hairline/60">
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  ${thumbs.map((item, tIdx) => `
                    <button
                      type="button"
                      class="accordion-thumb-btn group text-left space-y-1.5"
                      data-preview-slug="${project.slug}"
                      data-slide-index="${tIdx}"
                      data-cursor="PREVIEW"
                    >
                      <div class="w-full aspect-[16/10] rounded-lg overflow-hidden border border-hairline bg-elevated">
                        <div class="w-full h-full transition-transform duration-500 group-hover:scale-[1.03]">
                          ${buildMediaHTML(item.src, item.caption[state.lang] || txt.title)}
                        </div>
                      </div>
                      <p class="font-mono text-[10px] uppercase text-muted truncate">${item.caption[state.lang] || ''}</p>
                    </button>
                  `).join('')}
                </div>

                <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pt-2">
                  <p class="text-sm text-muted leading-relaxed max-w-2xl pl-3 border-l-2" style="border-color: ${accent};">
                    ${txt.concept}
                  </p>
                  <div class="flex flex-wrap items-center gap-2.5 shrink-0">
                    <button
                      type="button"
                      class="accordion-preview-btn px-4 py-2.5 rounded-full border border-hairline-strong hover:bg-[var(--fg)] hover:text-[var(--bg)] font-mono text-[11px] tracking-wider uppercase transition-colors"
                      data-preview-slug="${project.slug}"
                      data-cursor="PREVIEW"
                    >
                      ${t('accordion.quickPreview')}
                    </button>
                    <button
                      type="button"
                      class="accordion-open-page-btn px-4 py-2.5 rounded-full text-white hover:opacity-90 font-mono text-[11px] tracking-wider uppercase transition-opacity"
                      style="background-color: ${accent};"
                      data-open-slug="${project.slug}"
                      data-cursor="OPEN"
                    >
                      ${t('accordion.openProject')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    hydrateMediaSlots(dom.worksGrid);
    hydrateMediaSlots(dom.worksIndexRows);
  }

  // Event Delegation per Grid View
  function handleGridSelect(e) {
    const item = e.target.closest('[data-project-slug]');
    if (!item) return;
    if (e.type === 'keydown' && e.key !== 'Enter' && e.key !== ' ') return;
    if (e.type === 'keydown') e.preventDefault();
    openQuickPreview(item.dataset.projectSlug, 0);
  }

  dom.worksGrid.addEventListener('click', handleGridSelect);
  dom.worksGrid.addEventListener('keydown', handleGridSelect);

  // Event Delegation per Index Accordion
  dom.worksIndexRows.addEventListener('click', (e) => {
    const openPageBtn = e.target.closest('.accordion-open-page-btn');
    if (openPageBtn) {
      window.location.hash = `#progetto/${openPageBtn.dataset.openSlug}`;
      return;
    }

    const previewBtn = e.target.closest('[data-preview-slug]');
    if (previewBtn) {
      const slideIdx = Number(previewBtn.dataset.slideIndex || 0);
      openQuickPreview(previewBtn.dataset.previewSlug, slideIdx);
      return;
    }

    const trigger = e.target.closest('.accordion-trigger');
    if (!trigger) return;

    const item = trigger.closest('.accordion-item');
    const slug = item.dataset.accordionSlug;
    const willExpand = state.expandedSlug !== slug;
    state.expandedSlug = willExpand ? slug : null;

    dom.worksIndexRows.querySelectorAll('.accordion-item').forEach((row) => {
      const match = row.dataset.accordionSlug === state.expandedSlug;
      row.classList.toggle('is-expanded', match);
      row.querySelector('.accordion-trigger')?.setAttribute('aria-expanded', String(match));
    });
  });

  /* ==========================================================================
     LEVEL 1 — QUICK PREVIEW MODAL & CAROUSEL
     ========================================================================== */
  function getProjectSlides(project) {
    const txt = pText(project);
    return project.gallery && project.gallery.length > 0
      ? project.gallery
      : [{ src: project.cover, caption: { it: txt.subtitle, en: txt.subtitle }, layout: 'full' }];
  }

  function refreshPreviewTexts() {
    if (state.previewProjectIndex === null) return;
    const project = PROJECTS[state.previewProjectIndex];
    const txt = pText(project);

    $('preview-index').textContent = `[${project.index}]`;
    $('preview-category').textContent = project.category;
    $('preview-year').textContent = project.year;
    $('preview-title').textContent = txt.title;
    $('preview-subtitle').textContent = txt.subtitle;
    $('preview-overview').textContent = txt.concept;
  }

  function openQuickPreview(slug, startSlide = 0) {
    const idx = PROJECTS.findIndex((p) => p.slug === slug);
    if (idx === -1) return;

    state.previewProjectIndex = idx;
    const project = PROJECTS[idx];
    const slides = getProjectSlides(project);
    state.carouselIndex = Math.min(Math.max(0, startSlide), slides.length - 1);

    dom.previewPanel.style.setProperty('--accent', getProjectAccent(project));
    refreshPreviewTexts();
    renderCarouselSlide();

    dom.previewModal.classList.remove('is-closed');
    dom.previewModal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function renderCarouselSlide() {
    if (state.previewProjectIndex === null) return;
    const project = PROJECTS[state.previewProjectIndex];
    const txt = pText(project);
    const slides = getProjectSlides(project);
    const current = slides[state.carouselIndex];
    const captionText = (current.caption && current.caption[state.lang]) || txt.subtitle;

    dom.carouselStage.innerHTML = buildMediaHTML(current.src, `${txt.title} — ${captionText}`);
    hydrateMediaSlots(dom.carouselStage);

    dom.carouselCounter.textContent = `${pad(state.carouselIndex + 1)} / ${pad(slides.length)}`;
    dom.carouselCaption.textContent = captionText;

    dom.carouselDots.innerHTML = slides.map((_, i) => {
      const active = i === state.carouselIndex;
      return `
        <button
          type="button"
          data-slide-index="${i}"
          aria-label="Slide ${i + 1}"
          class="carousel-dot-btn h-2 rounded-full transition-all ${
            active ? 'w-7 bg-accent' : 'w-2 bg-[var(--hairline-strong)] hover:bg-[var(--muted)]'
          }"
        ></button>
      `;
    }).join('');
  }

  function stepCarousel(dir) {
    if (state.previewProjectIndex === null) return;
    const slides = getProjectSlides(PROJECTS[state.previewProjectIndex]);
    state.carouselIndex = (state.carouselIndex + dir + slides.length) % slides.length;
    renderCarouselSlide();
  }

  function closeQuickPreview() {
    dom.previewModal.classList.remove('is-open');
    dom.previewModal.classList.add('is-closed');
    document.body.style.overflow = '';
    state.previewProjectIndex = null;
  }

  dom.carouselDots.addEventListener('click', (e) => {
    const dot = e.target.closest('.carousel-dot-btn');
    if (!dot) return;
    state.carouselIndex = Number(dot.dataset.slideIndex);
    renderCarouselSlide();
  });

  dom.carouselPrevBtn.addEventListener('click', () => stepCarousel(-1));
  dom.carouselNextBtn.addEventListener('click', () => stepCarousel(1));
  dom.previewCloseBtn.addEventListener('click', closeQuickPreview);
  dom.previewModal.addEventListener('click', (e) => {
    if (e.target === dom.previewModal) closeQuickPreview();
  });

  bindSwipe(dom.carouselStage, () => stepCarousel(1), () => stepCarousel(-1));

  dom.previewOpenPageBtn.addEventListener('click', () => {
    if (state.previewProjectIndex === null) return;
    const slug = PROJECTS[state.previewProjectIndex].slug;
    closeQuickPreview();
    window.location.hash = `#progetto/${slug}`;
  });

  /* ==========================================================================
     LEVEL 2 — DEDICATED PROJECT PAGE (SPA ROUTING + ACCENT + PROGRESS)
     ========================================================================== */
  function renderDedicatedProjectPage(slug, scrollTop = true) {
    const idx = PROJECTS.findIndex((p) => p.slug === slug);
    if (idx === -1) {
      showHomeView();
      return;
    }

    state.pageProjectIndex = idx;
    const project = PROJECTS[idx];
    const txt = pText(project);
    applyGlobalAccent(project);

    document.title = `${txt.title} — Edoardo Ronco`;

    $('page-sticky-title').textContent = txt.title;
    $('page-counter').textContent = `${pad(idx + 1)} / ${pad(PROJECTS.length)}`;
    $('page-category-text').textContent = project.category;
    $('page-year-kicker').textContent = project.year;
    $('page-title').textContent = txt.title;
    $('page-subtitle').textContent = txt.subtitle;

    $('page-meta-discipline').textContent = project.category;
    $('page-meta-course').textContent = `${txt.course} · ${project.year}`;
    $('page-meta-professors').textContent = project.professors;
    $('page-meta-context').textContent = txt.context;

    const heroMedia = $('page-hero-media');
    heroMedia.innerHTML = buildMediaHTML(project.cover, txt.title);
    hydrateMediaSlots(heroMedia);
    $('page-hero-caption').textContent = `${txt.title} — ${txt.subtitle}`;
    heroMedia.onclick = () => openLightbox(0);

    $('page-concept').textContent = txt.concept;
    $('page-description').innerHTML = txt.paragraphs.map((p) => `<p>${p}</p>`).join('');

    const slides = getProjectSlides(project);
    dom.pageGalleryGrid.innerHTML = slides.map((item, gIdx) => {
      const isFull = item.layout === 'full';
      const spanClass = isFull ? 'md:col-span-12' : 'md:col-span-6';
      const aspectClass = isFull ? 'aspect-[16/9]' : 'aspect-[4/3]';
      const caption = (item.caption && item.caption[state.lang]) || '';
      return `
        <figure class="${spanClass} space-y-2.5">
          <div
            data-lightbox-index="${gIdx}"
            data-cursor="ZOOM"
            class="gallery-zoom-trigger w-full ${aspectClass} rounded-xl sm:rounded-2xl overflow-hidden border border-hairline hover:border-accent bg-elevated cursor-zoom-in group transition-colors"
          >
            <div class="w-full h-full transition-transform duration-700 group-hover:scale-[1.02]">
              ${buildMediaHTML(item.src, caption || txt.title)}
            </div>
          </div>
          <figcaption class="flex items-center justify-between gap-4 font-mono text-[11px] uppercase text-muted">
            <span>${caption}</span>
            <span class="shrink-0">${pad(gIdx + 1)} / ${pad(slides.length)}</span>
          </figcaption>
        </figure>
      `;
    }).join('');
    hydrateMediaSlots(dom.pageGalleryGrid);

    const prevIdx = (idx - 1 + PROJECTS.length) % PROJECTS.length;
    const nextIdx = (idx + 1) % PROJECTS.length;
    $('page-prev-title').textContent = `[${PROJECTS[prevIdx].index}] ${pText(PROJECTS[prevIdx]).title}`;
    $('page-next-title').textContent = `[${PROJECTS[nextIdx].index}] ${pText(PROJECTS[nextIdx]).title}`;

    dom.pagePrevProjectBtn.onclick = () => { window.location.hash = `#progetto/${PROJECTS[prevIdx].slug}`; };
    dom.pageNextProjectBtn.onclick = () => { window.location.hash = `#progetto/${PROJECTS[nextIdx].slug}`; };

    dom.homeView.classList.add('hidden');
    if (scrollTop) {
      dom.projectPageView.classList.remove('hidden', 'page-enter');
      void dom.projectPageView.offsetWidth;
      dom.projectPageView.classList.add('page-enter');
      window.scrollTo({ top: 0, behavior: 'instant' });
      updateProjectProgress();
    } else {
      dom.projectPageView.classList.remove('hidden');
    }
  }

  function updateProjectProgress() {
    if (state.pageProjectIndex === null || !dom.projectProgressBar) return;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? Math.min(100, Math.max(0, (window.scrollY / docHeight) * 100)) : 0;
    dom.projectProgressBar.style.width = `${pct}%`;
  }

  window.addEventListener('scroll', updateProjectProgress, { passive: true });

  dom.pageGalleryGrid.addEventListener('click', (e) => {
    const trigger = e.target.closest('.gallery-zoom-trigger');
    if (!trigger) return;
    openLightbox(Number(trigger.dataset.lightboxIndex));
  });

  function showHomeView(scrollTargetId) {
    state.pageProjectIndex = null;
    applyGlobalAccent(null);
    if (dom.projectProgressBar) dom.projectProgressBar.style.width = '0%';
    document.title = t('baseTitle');
    dom.projectPageView.classList.add('hidden');
    dom.homeView.classList.remove('hidden');

    if (scrollTargetId) {
      requestAnimationFrame(() => {
        $(scrollTargetId)?.scrollIntoView({ behavior: 'smooth' });
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function handleRouteChange() {
    const hash = window.location.hash || '';
    if (hash.startsWith('#progetto/')) {
      const slug = hash.replace('#progetto/', '').trim();
      closeQuickPreview();
      closeLightbox();
      renderDedicatedProjectPage(slug);
    } else if (state.pageProjectIndex !== null) {
      showHomeView(hash.replace('#', '') || null);
    }
  }

  window.addEventListener('hashchange', handleRouteChange);

  dom.pageBackBtn.addEventListener('click', () => {
    window.location.hash = '#progetti';
    showHomeView('progetti');
  });

  $('brand-home-link').addEventListener('click', (e) => {
    e.preventDefault();
    if (window.location.hash.startsWith('#progetto/')) {
      history.pushState(null, '', '#top');
    }
    showHomeView('top');
  });

  document.querySelectorAll('.section-jump-link').forEach((link) => {
    link.addEventListener('click', (e) => {
      const section = link.dataset.section;
      if (!section) return;
      e.preventDefault();
      if (state.pageProjectIndex !== null) {
        history.pushState(null, '', `#${section}`);
        showHomeView(section);
      } else {
        $(section)?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  $('back-to-top-btn').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ==========================================================================
     LIGHTBOX
     ========================================================================== */
  function openLightbox(index) {
    if (state.pageProjectIndex === null) return;
    state.lightboxIndex = index;
    renderLightboxSlide();
    dom.lightboxModal.classList.remove('is-closed');
    dom.lightboxModal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function renderLightboxSlide() {
    if (state.pageProjectIndex === null || state.lightboxIndex === null) return;
    const project = PROJECTS[state.pageProjectIndex];
    const txt = pText(project);
    const slides = getProjectSlides(project);
    const item = slides[state.lightboxIndex];
    const caption = (item.caption && item.caption[state.lang]) || '';

    dom.lightboxStage.innerHTML = buildMediaHTML(item.src, caption || txt.title);
    hydrateMediaSlots(dom.lightboxStage);
    dom.lightboxCounter.textContent = `${pad(state.lightboxIndex + 1)} / ${pad(slides.length)}`;
    dom.lightboxCaption.textContent = `${txt.title} — ${caption}`;
  }

  function stepLightbox(dir) {
    if (state.pageProjectIndex === null || state.lightboxIndex === null) return;
    const slides = getProjectSlides(PROJECTS[state.pageProjectIndex]);
    state.lightboxIndex = (state.lightboxIndex + dir + slides.length) % slides.length;
    renderLightboxSlide();
  }

  function closeLightbox() {
    dom.lightboxModal.classList.remove('is-open');
    dom.lightboxModal.classList.add('is-closed');
    document.body.style.overflow = '';
    state.lightboxIndex = null;
  }

  dom.lightboxCloseBtn.addEventListener('click', closeLightbox);
  dom.lightboxPrevBtn.addEventListener('click', () => stepLightbox(-1));
  dom.lightboxNextBtn.addEventListener('click', () => stepLightbox(1));
  dom.lightboxModal.addEventListener('click', (e) => {
    if (e.target === dom.lightboxModal) closeLightbox();
  });

  bindSwipe(dom.lightboxStage, () => stepLightbox(1), () => stepLightbox(-1));

  /* ==========================================================================
     KEYBOARD NAVIGATION
     ========================================================================== */
  document.addEventListener('keydown', (e) => {
    if (state.lightboxIndex !== null) {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowRight') stepLightbox(1);
      else if (e.key === 'ArrowLeft') stepLightbox(-1);
      return;
    }
    if (state.previewProjectIndex !== null) {
      if (e.key === 'Escape') closeQuickPreview();
      else if (e.key === 'ArrowRight') stepCarousel(1);
      else if (e.key === 'ArrowLeft') stepCarousel(-1);
    }
  });

  /* ==========================================================================
     FILTERS, VIEW SWITCHER, MOBILE MENU & COPY
     ========================================================================== */
  dom.filterBar.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    state.activeFilter = btn.dataset.filter;
    state.expandedSlug = null;
    renderWorks();
  });

  dom.btnGridView.addEventListener('click', () => {
    state.viewMode = 'GRID';
    renderWorks();
  });

  dom.btnIndexView.addEventListener('click', () => {
    state.viewMode = 'INDEX';
    renderWorks();
  });

  dom.mobileMenuBtn.addEventListener('click', () => {
    const isHidden = dom.mobileMenu.classList.contains('hidden');
    dom.mobileMenu.classList.toggle('hidden');
    dom.mobileMenuBtn.textContent = isHidden ? t('menu.close') : t('menu.open');
    dom.mobileMenuBtn.setAttribute('aria-expanded', String(isHidden));
  });

  dom.mobileMenu.addEventListener('click', (e) => {
    if (!e.target.closest('.mobile-nav-link')) return;
    dom.mobileMenu.classList.add('hidden');
    dom.mobileMenuBtn.textContent = t('menu.open');
    dom.mobileMenuBtn.setAttribute('aria-expanded', 'false');
  });

  $('copy-email-btn').addEventListener('click', function () {
    copyTextToClipboard(this.dataset.copy, t('toast.email'));
  });

  $('copy-phone-btn').addEventListener('click', function () {
    copyTextToClipboard(this.dataset.copy, t('toast.phone'));
  });

  /* ==========================================================================
     GPU-ACCELERATED CUSTOM CURSOR (con auto-pausa quando fermo)
     ========================================================================== */
  if (window.matchMedia('(pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;
    let rafId = null;

    function animateCursor() {
      const dx = mouseX - cursorX;
      const dy = mouseY - cursorY;
      cursorX += dx * 0.22;
      cursorY += dy * 0.22;
      dom.customCursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;

      if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
        rafId = requestAnimationFrame(animateCursor);
      } else {
        rafId = null;
      }
    }

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dom.customCursor.classList.add('is-active');

      const target = e.target.closest('[data-cursor]');
      if (target) {
        dom.customCursorLabel.textContent = target.dataset.cursor;
        dom.customCursor.classList.add('is-pill');
      } else {
        dom.customCursor.classList.remove('is-pill');
      }

      if (!rafId) rafId = requestAnimationFrame(animateCursor);
    }, { passive: true });

    document.addEventListener('mouseleave', () => {
      dom.customCursor.classList.remove('is-active');
    });
  }

  /* ==========================================================================
     INTERSECTION OBSERVER FOR REVEALS
     ========================================================================== */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

  /* ==========================================================================
     INIT
     ========================================================================== */
  applyTheme(state.theme, false);
  applyLanguage(state.lang, false);
  updateMilanClock();
  setInterval(updateMilanClock, 1000);
  handleRouteChange();
})();
