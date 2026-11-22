// Bio Chapitre 2 : La cellule — données du cours et des questions
// Source : notes du chapitre (PDF "Bio_Chapitre_2_-_La_cellule.pdf")

const COURSE = [
  {
    id: "intro",
    titre: "Organisation générale de la cellule",
    sections: [
      {
        titre: "Les 3 parties de la cellule",
        html: "<p>Toute cellule est formée de :</p><ul><li><b>Membrane</b> (cellulaire / cytoplasmique / plasmique)</li><li><b>Cytoplasme</b> = cytosol</li><li><b>Noyau</b></li></ul>"
      }
    ]
  },
  {
    id: "membrane",
    titre: "La membrane cytoplasmique",
    sections: [
      {
        titre: "Structure en « mosaïque fluide »",
        html: "<p>Toute cellule est enveloppée d'une membrane. Sa structure est bien déterminée : la <b>mosaïque fluide</b>, formée de <b>protéines dispersées et immergées dans une double couche de phospholipides</b>.</p><p><b>Définition :</b> une bicouche de phospholipides dans laquelle s'intègrent différentes familles de molécules (toutes les membranes cellulaires).</p><p>Schéma à connaître : double rangée de phospholipides, <b>têtes hydrophiles</b> vers l'extérieur et l'intérieur, <b>queues hydrophobes</b> au centre, le tout traversé par des protéines membranaires.</p>",
        schema: "membrane"
      },
      {
        titre: "Replis et rôle",
        html: "<p>La membrane n'est <b>pas tendue</b> autour de la cellule : elle forme des <b>replis</b> pour :</p><ul><li>augmenter la <b>surface de contact</b> ;</li><li>augmenter les <b>échanges</b> possibles.</li></ul><p><b>Rôle :</b> assurer les relations avec le monde extérieur tout en présentant une <b>perméabilité sélective</b>.</p><p>Sur sa face <b>intérieure</b>, la membrane plasmique est reliée aux fibres du <b>cytosquelette</b> (réseau de fibres protéiques ; rôle : <b>maintien / transport</b>).</p>"
      }
    ]
  },
  {
    id: "cytoplasme",
    titre: "Le cytoplasme",
    sections: [
      {
        titre: "Définition",
        html: "<p>Le <b>cytoplasme</b> est la masse de substance comprise à l'intérieur de la membrane, <b>à l'exclusion du noyau</b>. (C'est le cas de la majorité des cellules.)</p><p><b>Cytoplasme = organites cellulaires + cytosol.</b></p>"
      },
      {
        titre: "Composition du cytoplasme",
        html: "<ul><li><b>Hyaloplasme</b> (substance de base)</li><li><b>Organites cellulaires :</b> mitochondries, centrosomes, lysosomes, ribosomes, réticulum endoplasmique, appareil de Golgi</li></ul>"
      }
    ]
  },
  {
    id: "hyaloplasme",
    titre: "L'hyaloplasme",
    sections: [
      {
        titre: "Caractéristiques et composition",
        html: "<p><b>Caractéristiques :</b> transparent, fluide, incolore, élastique, visqueux.</p><p><b>Composition :</b> riche en H<sub>2</sub>O et en substances dissoutes dans l'eau : <b>glucides, sels minéraux, acides aminés (AA), O<sub>2</sub>, CO<sub>2</sub></b>.</p>"
      }
    ]
  },
  {
    id: "mitochondries",
    titre: "Les mitochondries",
    sections: [
      {
        titre: "Structure et rôle",
        html: "<p><b>Structure :</b> corpuscule allongé, plus ou moins cylindrique, arrondi aux extrémités.</p><p><b>Rôle :</b> la <b>respiration cellulaire</b>.</p>",
        schema: "mitochondrie"
      },
      {
        titre: "La respiration cellulaire",
        html: "<div class='eq'>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub> → 6 CO<sub>2</sub> + 6 H<sub>2</sub>O + E</div><p>Entrées : glucose (C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>) et O<sub>2</sub> — Sorties : CO<sub>2</sub>, H<sub>2</sub>O et énergie (E).</p>"
      },
      {
        titre: "Réactions endothermique et exothermique",
        html: "<table><tr><th>Réaction</th><th>Type</th></tr><tr><td>R + E → P</td><td><b>endothermique</b></td></tr><tr><td>R → P + E</td><td><b>exothermique</b></td></tr></table>"
      },
      {
        titre: "Le cycle énergétique ADP / ATP",
        html: "<div class='eq'>ADP + P + E ⇄ ATP</div><p>ADP = adénosine <b>di</b>phosphate. Pour utiliser l'énergie, on utilise de l'<b>eau</b> pour détacher un P et passer de ATP à <b>ADP + P + E</b>.</p><p>On qualifie la mitochondrie de <b>« centrale énergétique de la cellule »</b> : elle produit l'ATP nécessaire aux réactions cellulaires. C'est dans cette molécule que l'énergie du phénomène respiratoire est <b>stockée et transportée</b>.</p>"
      },
      {
        titre: "Rôles des mitochondries",
        html: "<ul><li>Permettent l'<b>oxydation des aliments</b> ;</li><li><b>Siège de la respiration cellulaire</b> ;</li><li><b>Centrales énergétiques</b> de la cellule.</li></ul><p><b>Exemples de cellules riches en mitochondries :</b> cœur, muscles squelettiques, reins, foie.</p>"
      }
    ]
  },
  {
    id: "reticulum",
    titre: "Le réticulum endoplasmique (RE)",
    sections: [
      {
        titre: "Structure",
        html: "<p>Ensemble de <b>feuillets très minces</b> formant de nombreux replis dans le cytoplasme. Ces feuillets sont en liaison avec la <b>membrane plasmique</b> et celle du <b>noyau</b>.</p><p>L'espace entre deux feuillets s'appelle une <b>citerne</b>. Les citernes forment un vaste <b>réseau de circulation</b>.</p>"
      },
      {
        titre: "RE rugueux et RE lisse",
        html: "<p><b>RE rugueux (RER)</b> : sa face externe est parsemée de <b>ribosomes</b>, qui <b>synthétisent les protéines</b> en assemblant des acides aminés (les protéines de la cellule et celles qu'elle envoie vers l'extérieur). Le RER aide les protéines à <b>se replier</b>, les <b>modifie</b> et <b>contrôle leur qualité</b>.</p><p><b>RE lisse (REL)</b> : ne porte <b>pas de ribosomes</b>. Il fabrique les <b>lipides</b> grâce aux enzymes présentes dans sa membrane.</p>"
      }
    ]
  },
  {
    id: "golgi",
    titre: "L'appareil de Golgi",
    sections: [
      {
        titre: "Dictyosomes et vésicules",
        html: "<p>L'appareil de Golgi est constitué d'un ou plusieurs <b>dictyosomes</b>.</p><p><b>Dictyosome</b> = ensemble de petits <b>sacs très aplatis empilés</b> les uns sur les autres. Leurs bords se gonflent et se fragmentent en petites <b>vésicules</b> remplies de produits de synthèse (<b>bourgeonnement</b> aux extrémités).</p><p><b>Appareil de Golgi = organe d'emballage de la cellule.</b></p>",
        schema: "golgi"
      },
      {
        titre: "Exemples de cellules et glandes",
        html: "<p>Cellules musculaires → riches en <b>mitochondries</b>.</p><p>Glandes : salivaires, lacrymales, sudoripares, testicules, ovaires, pancréas, thyroïde, séminales, adrénalines.</p>"
      }
    ]
  },
  {
    id: "lysosomes",
    titre: "Les lysosomes",
    sections: [
      {
        titre: "Les « poubelles de la cellule »",
        html: "<p>Organite situé dans le cytoplasme, de forme <b>très sphérique</b>, contenant de nombreuses <b>enzymes</b> capables de provoquer la <b>décomposition des matières alimentaires</b> et des <b>corps étrangers</b> ayant pénétré dans la cellule.</p><p><b>Origine des enzymes → les ribosomes.</b></p>"
      }
    ]
  },
  {
    id: "vegetale",
    titre: "La cellule végétale",
    sections: [
      {
        titre: "L'enveloppe",
        html: "<p>La cellule végétale a de nombreux points communs avec la cellule animale, mais elle possède des constituants propres. Sa membrane est presque toujours renforcée par une <b>enveloppe</b> : <b>résistante, non-vivante, rigide, élastique</b>.</p>"
      },
      {
        titre: "Les chloroplastes et la photosynthèse",
        html: "<p>Le cytoplasme végétal contient des <b>chloroplastes</b> : des organites <b>aplati</b>s remplis, en couches régulières, de nombreuses molécules de <b>chlorophylle</b>.</p><p>À condition d'être <b>rendue active par la lumière</b>, la chlorophylle peut effectuer une succession de réactions appelée <b>photosynthèse</b> :</p><div class='eq'>6 CO<sub>2</sub> + 6 H<sub>2</sub>O ⇄ 6 O<sub>2</sub> + C<sub>6</sub>H<sub>12</sub>O<sub>6</sub></div>",
        schema: "vegetale"
      },
      {
        titre: "Les vacuoles",
        html: "<p>Autre caractéristique : des <b>vacuoles</b> remplies d'un liquide constitué d'<b>eau</b> dans laquelle sont dissous des <b>sels minéraux</b> et des <b>glucides simples</b>. Les plantes leur doivent leur <b>rigidité</b> et leur <b>élasticité</b>.</p><p class='aret'><b>À retenir :</b> la cellule végétale possède <b>tous les organites de la cellule animale</b>, plus ceux-là.</p>"
      }
    ]
  },
  {
    id: "revision",
    titre: "Notes de révision",
    sections: [
      {
        titre: "Consignes du cours",
        html: "<ul><li>Savoir <b>reconnaître les organites</b>, les <b>schématiser</b> (≈), donner leurs <b>rôles</b> et les <b>types de tissus / cellules</b> où ils sont présents.</li><li><b>Bactérie</b> → c'est une <b>cellule</b>.</li><li><b>Virus</b> → ne peut <b>pas se reproduire tout seul</b> (il n'a que du matériel génétique).</li></ul>"
      }
    ]
  }
];

// Types : "qcm" (une bonne réponse), "multi" (plusieurs bonnes réponses),
// "vf" (vrai/faux), "libre" (réponse courte acceptée par mots-clés)
// diff : 1 = base, 2 = intermédiaire, 3 = complexe
const QUESTIONS = [
  // --- Organisation générale ---
  { id: "q01", chap: "intro", diff: 1, type: "qcm", q: "Quelles sont les 3 parties générales d'une cellule ?",
    choix: ["Membrane, cytoplasme, noyau", "Membrane, noyau, chloroplaste", "Cytoplasme, noyau, vacuole", "Membrane, cytoplasme, ribosome"],
    bonnes: [0], expl: "Toute cellule possède une membrane, du cytoplasme (= cytosol) et un noyau." },
  { id: "q02", chap: "intro", diff: 1, type: "vf", q: "Le cytoplasme correspond au cytosol.",
    bonnes: [1], expl: "Dans l'organisation générale vue au chapitre : cytoplasme = cytosol." },
  // --- Membrane ---
  { id: "q03", chap: "membrane", diff: 1, type: "qcm", q: "La structure de la membrane cytoplasmique est appelée…",
    choix: ["la mosaïque fluide", "la bicouche rigide", "le réseau de citernes", "le cytosquelette"],
    bonnes: [0], expl: "Mosaïque fluide : protéines dispersées et immergées dans une double couche de phospholipides." },
  { id: "q04", chap: "membrane", diff: 2, type: "qcm", q: "Dans la bicouche de phospholipides, comment sont orientées les têtes et les queues ?",
    choix: ["Têtes hydrophiles vers l'extérieur et l'intérieur, queues hydrophobes au centre", "Têtes hydrophobes vers l'extérieur, queues hydrophiles au centre", "Têtes et queues mélangées au hasard", "Têtes au centre, queues vers l'extérieur"],
    bonnes: [0], expl: "Les têtes hydrophiles touchent l'eau (extérieur et intérieur), les queues hydrophobes se cachent au centre." },
  { id: "q05", chap: "membrane", diff: 2, type: "multi", q: "Pourquoi la membrane forme-t-elle des replis ? (2 bonnes réponses)",
    choix: ["Augmenter la surface de contact", "Augmenter les échanges possibles", "Rendre la cellule rigide", "Produire de l'énergie"],
    bonnes: [0, 1], expl: "Les replis augmentent la surface de contact et donc les échanges possibles." },
  { id: "q06", chap: "membrane", diff: 1, type: "vf", q: "La membrane cytoplasmique laisse tout passer.",
    bonnes: [1], expl: "Faux : elle présente une perméabilité sélective." },
  { id: "q07", chap: "membrane", diff: 2, type: "qcm", q: "À quoi la membrane plasmique est-elle reliée sur sa face intérieure, et quel est le rôle de cette structure ?",
    choix: ["Aux fibres du cytosquelette (maintien / transport)", "Aux ribosomes (synthèse des protéines)", "Aux chloroplastes (photosynthèse)", "Aux vésicules de Golgi (emballage)"],
    bonnes: [0], expl: "La face intérieure de la membrane est reliée aux fibres du cytosquelette, un réseau de fibres protéiques (rôle : maintien / transport)." },
  { id: "q08", chap: "membrane", diff: 3, type: "libre", q: "Donne la définition complète de la structure membranaire : une bicouche de … dans laquelle s'intègrent différentes familles de … (2 mots attendus)",
    reponses: [["phospholipide"], ["molecule"]],
    expl: "Une bicouche de phospholipides dans laquelle s'intègrent différentes familles de molécules." },
  // --- Cytoplasme ---
  { id: "q09", chap: "cytoplasme", diff: 1, type: "qcm", q: "Quelle est la définition exacte du cytoplasme ?",
    choix: ["La masse de substance à l'intérieur de la membrane, à l'exclusion du noyau", "Tout le contenu de la cellule, noyau compris", "Uniquement le liquide entre les organites", "La couche externe de la cellule"],
    bonnes: [0], expl: "Cytoplasme = masse de substance à l'intérieur de la membrane, à l'exclusion du noyau." },
  { id: "q10", chap: "cytoplasme", diff: 1, type: "qcm", q: "Le cytoplasme est l'ensemble formé par…",
    choix: ["les organites cellulaires et le cytosol", "le noyau et la membrane", "les ribosomes et le noyau", "la membrane et les vésicules"],
    bonnes: [0], expl: "Cytoplasme = organites cellulaires + cytosol." },
  { id: "q11", chap: "cytoplasme", diff: 2, type: "multi", q: "Quels organites font partie du cytoplasme ? (3 bonnes réponses)",
    choix: ["Mitochondries", "Appareil de Golgi", "Lysosomes", "Noyau"],
    bonnes: [0, 1, 2], expl: "Mitochondries, centrosomes, lysosomes, ribosomes, RE et appareil de Golgi. Le noyau est exclu du cytoplasme." },
  // --- Hyaloplasme ---
  { id: "q12", chap: "hyaloplasme", diff: 1, type: "multi", q: "Quelles sont les caractéristiques de l'hyaloplasme ? (3 bonnes réponses)",
    choix: ["Transparent", "Visqueux", "Élastique", "Coloré"],
    bonnes: [0, 1, 2], expl: "L'hyaloplasme est transparent, fluide, incolore, élastique et visqueux." },
  { id: "q13", chap: "hyaloplasme", diff: 2, type: "multi", q: "Que trouve-t-on dissous dans l'eau de l'hyaloplasme ? (3 bonnes réponses)",
    choix: ["Glucides", "Sels minéraux", "Acides aminés", "Chlorophylle"],
    bonnes: [0, 1, 2], expl: "L'hyaloplasme est riche en H2O et en substances dissoutes : glucides, sels minéraux, acides aminés, O2, CO2." },
  // --- Mitochondries ---
  { id: "q14", chap: "mitochondries", diff: 1, type: "qcm", q: "Quel est le rôle principal des mitochondries ?",
    choix: ["La respiration cellulaire", "La photosynthèse", "L'emballage des protéines", "La digestion des corps étrangers"],
    bonnes: [0], expl: "Les mitochondries sont le siège de la respiration cellulaire." },
  { id: "q15", chap: "mitochondries", diff: 1, type: "qcm", q: "Quelle est l'équation de la respiration cellulaire ?",
    choix: ["C6H12O6 + 6 O2 → 6 CO2 + 6 H2O + E", "6 CO2 + 6 H2O → 6 O2 + C6H12O6", "ADP + P + E → CO2 + H2O", "C6H12O6 + 6 CO2 → 6 O2 + E"],
    bonnes: [0], expl: "Glucose + oxygène → dioxyde de carbone + eau + énergie." },
  { id: "q16", chap: "mitochondries", diff: 2, type: "qcm", q: "La réaction « R + E → P » est…",
    choix: ["endothermique", "exothermique", "photochimique", "neutre"],
    bonnes: [0], expl: "R + E → P consomme de l'énergie : réaction endothermique. R → P + E en libère : exothermique." },
  { id: "q17", chap: "mitochondries", diff: 2, type: "qcm", q: "La réaction « R → P + E » est…",
    choix: ["exothermique", "endothermique", "lumineuse", "impossible"],
    bonnes: [0], expl: "Elle libère de l'énergie (E est un produit) : exothermique." },
  { id: "q18", chap: "mitochondries", diff: 1, type: "qcm", q: "Comment fabrique-t-on de l'ATP ?",
    choix: ["ADP + P + E → ATP", "ATP + P → ADP + E", "ADP + O2 → ATP + CO2", "ATP + eau → ADP"],
    bonnes: [0], expl: "Cycle ADP/ATP : ADP + P + E ⇄ ATP." },
  { id: "q19", chap: "mitochondries", diff: 2, type: "qcm", q: "Comment la cellule utilise-t-elle l'énergie de l'ATP ?",
    choix: ["Elle utilise de l'eau pour détacher un P : ATP → ADP + P + E", "Elle brûle l'ATP avec du CO2", "Elle transforme l'ATP en chlorophylle", "Elle stocke l'ATP dans les vacuoles"],
    bonnes: [0], expl: "On utilise de l'eau pour détacher un P et passer de ATP à ADP + P + E." },
  { id: "q20", chap: "mitochondries", diff: 1, type: "qcm", q: "Pourquoi appelle-t-on la mitochondrie la « centrale énergétique de la cellule » ?",
    choix: ["Elle produit l'ATP nécessaire aux réactions cellulaires", "Elle produit la lumière de la cellule", "Elle stocke les déchets", "Elle fabrique les membranes"],
    bonnes: [0], expl: "Elle produit l'ATP ; c'est dans l'ATP que l'énergie respiratoire est stockée et transportée." },
  { id: "q21", chap: "mitochondries", diff: 2, type: "multi", q: "Quelles cellules sont riches en mitochondries ? (3 bonnes réponses)",
    choix: ["Cœur", "Muscles squelettiques", "Reins", "Globules rouges"],
    bonnes: [0, 1, 2], expl: "Cœur, muscles squelettiques, reins et foie sont riches en mitochondries." },
  { id: "q22", chap: "mitochondries", diff: 3, type: "qcm", q: "Un muscle qui se contracte longtemps consomme beaucoup d'ATP. Quelle conséquence logique sur ses cellules ?",
    choix: ["Elles contiennent beaucoup de mitochondries pour produire l'ATP", "Elles perdent leur noyau", "Elles fabriquent des chloroplastes", "Elles se remplissent de vacuoles"],
    bonnes: [0], expl: "Les cellules musculaires (squelettiques) et le cœur sont riches en mitochondries car ils ont besoin de beaucoup d'énergie." },
  { id: "q23", chap: "mitochondries", diff: 3, type: "qcm", q: "ATP → ADP + P + E est une réaction…",
    choix: ["exothermique (elle libère de l'énergie)", "endothermique (elle consomme de l'énergie)", "ni l'une ni l'autre", "de photosynthèse"],
    bonnes: [0], expl: "L'énergie est un produit (R → P + E) : c'est une réaction exothermique." },
  { id: "q24", chap: "mitochondries", diff: 3, type: "qcm", q: "Compare respiration cellulaire et photosynthèse :",
    choix: ["Ce sont des réactions inverses : la respiration consomme glucose et O2, la photosynthèse les produit", "Les deux produisent du glucose", "Les deux consomment du CO2", "La respiration a besoin de lumière"],
    bonnes: [0], expl: "Respiration : C6H12O6 + 6 O2 → 6 CO2 + 6 H2O + E. Photosynthèse : 6 CO2 + 6 H2O ⇄ 6 O2 + C6H12O6. Ce sont des réactions inverses." },
  // --- Réticulum ---
  { id: "q25", chap: "reticulum", diff: 1, type: "qcm", q: "Quelle est la différence entre RE rugueux et RE lisse ?",
    choix: ["Le RE rugueux porte des ribosomes, pas le RE lisse", "Le RE lisse porte des ribosomes, pas le rugueux", "Les deux portent des ribosomes", "Le RE lisse contient de la chlorophylle"],
    bonnes: [0], expl: "La face externe du RER est parsemée de ribosomes ; le REL n'en porte pas." },
  { id: "q26", chap: "reticulum", diff: 1, type: "qcm", q: "Quel est le rôle du RE lisse ?",
    choix: ["La synthèse des lipides", "La synthèse des protéines", "La respiration cellulaire", "La digestion"],
    bonnes: [0], expl: "Le REL fabrique les lipides grâce aux enzymes présentes dans sa membrane." },
  { id: "q27", chap: "reticulum", diff: 2, type: "qcm", q: "Comment s'appelle l'espace compris entre deux feuillets du RE ?",
    choix: ["Une citerne", "Une vacuole", "Une crête", "Un dictyosome"],
    bonnes: [0], expl: "Les citernes constituent un vaste réseau de circulation." },
  { id: "q28", chap: "reticulum", diff: 2, type: "multi", q: "Que fait le RER pour les protéines ? (3 bonnes réponses)",
    choix: ["Il les aide à se replier", "Il les modifie", "Il contrôle leur qualité", "Il les détruit"],
    bonnes: [0, 1, 2], expl: "Les ribosomes du RER assemblent les acides aminés, puis le RER replie, modifie et contrôle la qualité des protéines." },
  { id: "q29", chap: "reticulum", diff: 2, type: "vf", q: "Les feuillets du RE sont en liaison avec la membrane plasmique et celle du noyau.",
    bonnes: [0], expl: "Vrai : c'est ce qui relie le RE au reste de la cellule." },
  { id: "q30", chap: "reticulum", diff: 3, type: "qcm", q: "Une cellule spécialisée dans la fabrication de lipides (ex. hormones) aura surtout beaucoup de…",
    choix: ["RE lisse", "RE rugueux", "lysosomes", "chloroplastes"],
    bonnes: [0], expl: "Le RE lisse synthétise les lipides ; une cellule productrice de lipides en aura beaucoup." },
  { id: "q31", chap: "reticulum", diff: 3, type: "qcm", q: "Remets dans l'ordre le parcours d'une protéine destinée à sortir de la cellule :",
    choix: ["Ribosomes du RER → RE rugueux (repliage, contrôle) → appareil de Golgi (emballage) → vésicules → membrane", "Golgi → ribosomes → membrane", "Lysosomes → RE lisse → membrane", "Noyau → vacuoles → membrane"],
    bonnes: [0], expl: "Les ribosomes synthétisent la protéine, le RER la replie et la contrôle, le Golgi l'emballe dans des vésicules qui rejoignent la membrane." },
  // --- Golgi ---
  { id: "q32", chap: "golgi", diff: 1, type: "qcm", q: "L'appareil de Golgi est constitué de…",
    choix: ["dictyosomes", "cisternes d'eau", "centrosomes", "grains de chlorophylle"],
    bonnes: [0], expl: "Un ou plusieurs dictyosomes composent l'appareil de Golgi." },
  { id: "q33", chap: "golgi", diff: 1, type: "qcm", q: "Qu'est-ce qu'un dictyosome ?",
    choix: ["Un ensemble de petits sacs très aplatis empilés les uns sur les autres", "Un long cylindre arrondi aux extrémités", "Une sphère pleine d'enzymes", "Un feuillet de la membrane"],
    bonnes: [0], expl: "Dictyosome = petits sacs aplatis empilés ; leurs bords se gonflent et se fragmentent en vésicules." },
  { id: "q34", chap: "golgi", diff: 2, type: "qcm", q: "Que deviennent les bords gonflés des dictyosomes ?",
    choix: ["Ils se fragmentent en petites vésicules remplies de produits de synthèse", "Ils deviennent des ribosomes", "Ils fondent dans le noyau", "Ils forment le cytosquelette"],
    bonnes: [0], expl: "C'est le bourgeonnement : les extrémités forment des vésicules." },
  { id: "q35", chap: "golgi", diff: 1, type: "qcm", q: "Quel surnom correspond au rôle de l'appareil de Golgi ?",
    choix: ["L'organe d'emballage de la cellule", "La centrale énergétique", "La poubelle de la cellule", "Le chef d'orchestre"],
    bonnes: [0], expl: "Golgi = emballage. Mitochondrie = centrale énergétique. Lysosome = poubelle." },
  // --- Lysosomes ---
  { id: "q36", chap: "lysosomes", diff: 1, type: "qcm", q: "Pourquoi surnomme-t-on les lysosomes « les poubelles de la cellule » ?",
    choix: ["Leurs enzymes décomposent les matières alimentaires et les corps étrangers", "Ils stockent les déchets pour toujours", "Ils rejettent le CO2 de la respiration", "Ils absorbent la lumière"],
    bonnes: [0], expl: "Les enzymes des lysosomes décomposent matières alimentaires et corps étrangers entrés dans la cellule." },
  { id: "q37", chap: "lysosomes", diff: 2, type: "qcm", q: "D'où viennent les enzymes des lysosomes ?",
    choix: ["Des ribosomes", "De la membrane", "Des vacuoles", "Du noyau directement"],
    bonnes: [0], expl: "Origine des enzymes → ribosomes (qui synthétisent les protéines)." },
  { id: "q38", chap: "lysosomes", diff: 1, type: "qcm", q: "Quelle est la forme du lysosome ?",
    choix: ["Très sphérique", "Très aplatie", "Cylindrique et allongée", "En feuillets"],
    bonnes: [0], expl: "Le lysosome a une forme très sphérique ; le Golgi est aplati, la mitochondrie cylindrique." },
  // --- Cellule végétale ---
  { id: "q39", chap: "vegetale", diff: 1, type: "multi", q: "Quelles sont les propriétés de l'enveloppe de la cellule végétale ? (3 bonnes réponses)",
    choix: ["Résistante", "Rigide", "Non-vivante", "Vivante"],
    bonnes: [0, 1, 2], expl: "L'enveloppe est résistante, non-vivante, rigide et élastique." },
  { id: "q40", chap: "vegetale", diff: 1, type: "qcm", q: "Que contiennent les chloroplastes, et à quoi ça sert ?",
    choix: ["De la chlorophylle, qui permet la photosynthèse", "Des enzymes digestives", "De l'ATP stocké", "Des acides aminés"],
    bonnes: [0], expl: "Les chloroplastes sont remplis de chlorophylle en couches régulières." },
  { id: "q41", chap: "vegetale", diff: 2, type: "qcm", q: "Quelle condition est nécessaire pour que la chlorophylle effectue la photosynthèse ?",
    choix: ["Elle doit être rendue active par la lumière", "Elle doit être dans le noir", "Elle doit être refroidie", "Aucune condition"],
    bonnes: [0], expl: "La chlorophylle doit être activée par la lumière." },
  { id: "q42", chap: "vegetale", diff: 1, type: "qcm", q: "Quelle est l'équation de la photosynthèse ?",
    choix: ["6 CO2 + 6 H2O ⇄ 6 O2 + C6H12O6", "C6H12O6 + 6 O2 → 6 CO2 + 6 H2O", "ADP + P → ATP", "6 O2 + 6 H2O → 6 CO2 + E"],
    bonnes: [0], expl: "Photosynthèse : 6 CO2 + 6 H2O ⇄ 6 O2 + C6H12O6 (l'inverse de la respiration)." },
  { id: "q43", chap: "vegetale", diff: 2, type: "qcm", q: "Que contient le liquide des vacuoles, et à quoi servent-elles ?",
    choix: ["Eau + sels minéraux + glucides simples ; elles donnent rigidité et élasticité à la plante", "De la chlorophylle ; la couleur verte", "De l'ATP ; l'énergie", "Des enzymes ; la digestion"],
    bonnes: [0], expl: "Les plantes doivent leur rigidité et leur élasticité aux vacuoles." },
  { id: "q44", chap: "vegetale", diff: 2, type: "vf", q: "La cellule végétale possède tous les organites de la cellule animale, plus ses constituants propres.",
    bonnes: [0], expl: "Vrai : elle a tout ce qu'a la cellule animale, plus enveloppe, chloroplastes et vacuoles." },
  { id: "q45", chap: "vegetale", diff: 3, type: "multi", q: "Quels constituants sont propres à la cellule végétale ? (3 bonnes réponses)",
    choix: ["Enveloppe", "Chloroplastes", "Vacuoles", "Membrane cytoplasmique"],
    bonnes: [0, 1, 2], expl: "La membrane existe dans les deux cellules ; enveloppe, chloroplastes et vacuoles sont propres à la végétale." },
  { id: "q46", chap: "vegetale", diff: 3, type: "qcm", q: "Pourquoi une plante reste-t-elle droite et ferme sans squelette ?",
    choix: ["Grâce aux vacuoles (rigidité et élasticité) et à l'enveloppe rigide de ses cellules", "Grâce aux mitochondries", "Grâce au cytosquelette uniquement", "Grâce aux lysosomes"],
    bonnes: [0], expl: "Vacuoles + enveloppe rigide maintiennent la plante." },
  // --- Notes de révision ---
  { id: "q47", chap: "revision", diff: 2, type: "vf", q: "Une bactérie est une cellule.",
    bonnes: [0], expl: "Vrai : bactérie → cellule. Le virus, lui, n'en est pas une complète." },
  { id: "q48", chap: "revision", diff: 2, type: "qcm", q: "Pourquoi un virus ne peut-il pas se reproduire tout seul ?",
    choix: ["Il n'a que du matériel génétique, il lui manque la machinerie cellulaire", "Il est trop petit pour se diviser", "Il n'a pas de matériel génétique", "Il est déjà mort"],
    bonnes: [0], expl: "Le virus possède du matériel génétique mais ne peut pas se reproduire seul." },
  { id: "q49", chap: "revision", diff: 3, type: "qcm", q: "À l'examen, on te montre un organite en petits sacs aplatis empilés avec des vésicules aux bords. C'est…",
    choix: ["l'appareil de Golgi", "le RE lisse", "une mitochondrie", "un lysosome"],
    bonnes: [0], expl: "Sacs aplatis empilés + bourgeonnement en vésicules = dictyosomes de l'appareil de Golgi." },
  { id: "q50", chap: "revision", diff: 3, type: "qcm", q: "Un corpuscule allongé, cylindrique, arrondi aux extrémités, avec des crêtes internes. C'est…",
    choix: ["une mitochondrie", "un chloroplaste", "le RE rugueux", "un dictyosome"],
    bonnes: [0], expl: "C'est la structure de la mitochondrie, siège de la respiration cellulaire." }
];
