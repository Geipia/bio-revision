// Schémas SVG pédagogiques fidèles aux descriptions du cours.
// Chaque schéma existe en 2 modes :
//   "cours"    -> les légendes sont affichées (pour étudier)
//   "exercice" -> des pastilles numérotées remplacent les noms (pour s'entraîner)
// labels : correspondance pastille -> nom attendu (utilisé par les questions de type "schema")

function _pin(x, y, n) {
  return "<circle cx='" + x + "' cy='" + y + "' r='11' fill='#175c38' stroke='#ffffff' stroke-width='2'/>" +
    "<text x='" + x + "' y='" + (y + 4) + "' font-size='12' font-weight='bold' fill='#ffffff' text-anchor='middle'>" + n + "</text>";
}
function _lbl(x, y, txt, anchor, color) {
  return "<text x='" + x + "' y='" + y + "' font-size='12' font-weight='600' fill='" + (color || "#333333") +
    "' text-anchor='" + (anchor || "middle") + "'>" + txt + "</text>";
}
function _lead(x1, y1, x2, y2) {
  return "<line x1='" + x1 + "' y1='" + y1 + "' x2='" + x2 + "' y2='" + y2 + "' stroke='#999999' stroke-width='1'/>";
}
function _open(w, h) {
  return "<svg viewBox='0 0 " + w + " " + h + "' xmlns='http://www.w3.org/2000/svg'>";
}

const SCHEMA_DEFS = {

  cellule: {
    caption: "Les 3 parties de la cellule : membrane, cytoplasme, noyau",
    labels: { "1": "Membrane", "2": "Cytoplasme", "3": "Noyau" },
    svg: function(mode) {
      const ex = mode === "exercice";
      let s = _open(320, 180) + "<rect width='320' height='180' fill='#ffffff'/>";
      s += "<circle cx='150' cy='92' r='76' fill='#e8f5ec' stroke='#2e9e63' stroke-width='4'/>";
      s += "<circle cx='150' cy='92' r='26' fill='#cfe3f7' stroke='#5b7fd4' stroke-width='3'/>";
      if (ex) {
        s += _pin(204, 38, 1) + _pin(96, 128, 2) + _pin(150, 92, 3);
      } else {
        s += _lead(210, 34, 238, 24) + _lbl(244, 28, "Membrane", "start", "#1d7a47");
        s += _lead(100, 124, 62, 150) + _lbl(56, 164, "Cytoplasme", "middle", "#1d7a47");
        s += _lbl(150, 97, "Noyau", "middle", "#2f4f7f");
      }
      return s + "</svg>";
    }
  },

  membrane: {
    caption: "La mosaïque fluide : bicouche de phospholipides + protéines",
    labels: { "1": "Tête hydrophile", "2": "Queue hydrophobe", "3": "Protéine membranaire" },
    svg: function(mode) {
      const ex = mode === "exercice";
      let s = _open(320, 160) + "<rect width='320' height='160' fill='#ffffff'/>";
      s += _lbl(160, 14, "Extérieur", "middle", "#999999") + _lbl(314, 152, "Intérieur", "end", "#999999");
      const xs = [40, 80, 120, 200, 240, 280];
      s += "<g fill='#ff6b57'>";
      xs.forEach(x => { s += "<circle cx='" + x + "' cy='50' r='8'/>"; });
      xs.forEach(x => { s += "<circle cx='" + x + "' cy='110' r='8'/>"; });
      s += "</g><g stroke='#e0a43c' stroke-width='3'>";
      xs.forEach(x => {
        s += "<line x1='" + (x - 4) + "' y1='58' x2='" + (x - 6) + "' y2='82'/><line x1='" + (x + 4) + "' y1='58' x2='" + (x + 6) + "' y2='82'/>";
        s += "<line x1='" + (x - 4) + "' y1='102' x2='" + (x - 6) + "' y2='78'/><line x1='" + (x + 4) + "' y1='102' x2='" + (x + 6) + "' y2='78'/>";
      });
      s += "</g>";
      s += "<rect x='140' y='36' width='42' height='90' rx='18' fill='#5b7fd4'/>";
      if (ex) {
        s += _pin(40, 50, 1) + _pin(80, 80, 2) + _pin(161, 81, 3);
      } else {
        s += _lbl(24, 32, "Tête hydrophile", "start", "#c0492f") + _lead(38, 36, 40, 41);
        s += _lbl(20, 152, "Queues hydrophobes", "start", "#a87b1f") + _lead(86, 86, 60, 140);
        s += _lbl(316, 26, "Protéine membranaire", "end", "#3b5b9e") + _lead(184, 52, 200, 30);
      }
      return s + "</svg>";
    }
  },

  mitochondrie: {
    caption: "La mitochondrie : la respiration cellulaire y produit de l'énergie",
    labels: { "1": "Enveloppe", "2": "Crêtes internes", "3": "Entrées (C6H12O6 + O2)", "4": "Sorties (CO2 + H2O + E)" },
    svg: function(mode) {
      const ex = mode === "exercice";
      let s = _open(320, 170) + "<rect width='320' height='170' fill='#ffffff'/>";
      // flèches entrée / sortie
      s += "<line x1='10' y1='88' x2='36' y2='88' stroke='#666666' stroke-width='2'/>" +
        "<polygon points='36,88 28,83 28,93' fill='#666666'/>";
      s += "<line x1='284' y1='88' x2='310' y2='88' stroke='#666666' stroke-width='2'/>" +
        "<polygon points='310,88 302,83 302,93' fill='#666666'/>";
      // enveloppe + crêtes
      s += "<ellipse cx='160' cy='88' rx='118' ry='52' fill='#ffe3d6' stroke='#ff6b57' stroke-width='3'/>";
      s += "<path d='M55 88 Q82 62 110 88 Q138 114 166 88 Q194 62 222 88 Q246 110 258 92' fill='none' stroke='#c0492f' stroke-width='3'/>";
      if (ex) {
        s += _pin(160, 36, 1) + _pin(110, 88, 2) + _pin(22, 66, 3) + _pin(298, 66, 4);
      } else {
        s += _lbl(160, 16, "Enveloppe", "middle", "#c0492f") + _lead(160, 20, 160, 32);
        s += _lbl(160, 164, "Crêtes internes", "middle", "#c0492f") + _lead(150, 158, 128, 100);
        s += _lbl(6, 34, "Entrées : C6H12O6 + O2", "start", "#333333") + _lead(24, 40, 22, 80);
        s += _lbl(314, 34, "Sorties : CO2 + H2O + E", "end", "#333333") + _lead(296, 40, 298, 80);
      }
      return s + "</svg>";
    }
  },

  reticulum: {
    caption: "Le réticulum endoplasmique : RE rugueux (avec ribosomes) et RE lisse",
    labels: { "1": "Ribosome", "2": "Citerne", "3": "RE rugueux", "4": "RE lisse" },
    svg: function(mode) {
      const ex = mode === "exercice";
      let s = _open(320, 170) + "<rect width='320' height='170' fill='#ffffff'/>";
      // RE rugueux : feuillets + ribosomes
      s += "<g stroke='#5b7fd4' stroke-width='4' fill='none' stroke-linecap='round'>" +
        "<path d='M20 55 Q85 45 150 55'/><path d='M20 83 Q85 73 150 83'/><path d='M20 111 Q85 101 150 111'/></g>";
      s += "<g fill='#c0492f'>" +
        "<circle cx='40' cy='51' r='3.5'/><circle cx='70' cy='48' r='3.5'/><circle cx='100' cy='48' r='3.5'/><circle cx='130' cy='51' r='3.5'/>" +
        "<circle cx='45' cy='79' r='3.5'/><circle cx='80' cy='75' r='3.5'/><circle cx='115' cy='77' r='3.5'/>" +
        "<circle cx='55' cy='107' r='3.5'/><circle cx='90' cy='103' r='3.5'/><circle cx='125' cy='105' r='3.5'/></g>";
      // RE lisse : tubules sans ribosomes
      s += "<g stroke='#4e9b47' stroke-width='5' fill='none' stroke-linecap='round'>" +
        "<path d='M180 60 Q235 40 300 65'/><path d='M180 95 Q240 78 300 100'/></g>";
      if (ex) {
        s += _pin(70, 48, 1) + _pin(85, 69, 2) + _pin(85, 150, 3) + _pin(240, 150, 4);
      } else {
        s += _lbl(14, 20, "Ribosomes", "start", "#c0492f") + _lead(58, 24, 66, 42);
        s += _lbl(172, 20, "Citerne", "start", "#333333") + _lead(168, 24, 92, 62);
        s += _lbl(85, 154, "RE rugueux (RER)", "middle", "#3b5b9e");
        s += _lbl(240, 154, "RE lisse (REL)", "middle", "#2e6b29");
      }
      return s + "</svg>";
    }
  },

  golgi: {
    caption: "Un dictyosome de l'appareil de Golgi",
    labels: { "1": "Dictyosome (sacs aplatis empilés)", "2": "Vésicule (bourgeonnement)" },
    svg: function(mode) {
      const ex = mode === "exercice";
      let s = _open(320, 160) + "<rect width='320' height='160' fill='#ffffff'/>";
      s += "<g stroke='#5b7fd4' stroke-width='5' fill='none' stroke-linecap='round'>" +
        "<path d='M70 40 Q160 25 250 40'/><path d='M75 62 Q160 47 245 62'/>" +
        "<path d='M80 84 Q160 69 240 84'/><path d='M85 106 Q160 91 235 106'/></g>";
      s += "<g fill='#ff6b57'><circle cx='255' cy='35' r='6'/><circle cx='268' cy='55' r='6'/>" +
        "<circle cx='252' cy='100' r='6'/><circle cx='60' cy='120' r='6'/></g>";
      if (ex) {
        s += _pin(160, 62, 1) + _pin(268, 55, 2);
      } else {
        s += _lbl(12, 20, "Sacs aplatis empilés", "start", "#3b5b9e") + _lead(105, 26, 148, 42);
        s += _lbl(312, 142, "Vésicules", "end", "#c0492f") + _lead(254, 108, 260, 132);
      }
      return s + "</svg>";
    }
  },

  vegetale: {
    caption: "La cellule végétale : enveloppe, chloroplastes et vacuoles en plus",
    labels: { "1": "Enveloppe", "2": "Membrane", "3": "Chloroplaste", "4": "Vacuole", "5": "Noyau" },
    svg: function(mode) {
      const ex = mode === "exercice";
      let s = _open(320, 200) + "<rect width='320' height='200' fill='#ffffff'/>";
      // enveloppe + membrane
      s += "<rect x='16' y='10' width='288' height='156' rx='26' fill='#eef7e4' stroke='#4e9b47' stroke-width='5'/>";
      s += "<rect x='30' y='24' width='260' height='128' rx='17' fill='none' stroke='#8ac98a' stroke-width='2'/>";
      // chloroplastes
      s += "<ellipse cx='80' cy='55' rx='26' ry='13' fill='#4e9b47'/>" +
        "<g stroke='#2e6b29' stroke-width='1.5'><line x1='62' y1='55' x2='98' y2='55'/>" +
        "<line x1='66' y1='50' x2='94' y2='50'/><line x1='66' y1='60' x2='94' y2='60'/></g>";
      s += "<ellipse cx='190' cy='48' rx='24' ry='12' fill='#4e9b47'/>" +
        "<g stroke='#2e6b29' stroke-width='1.5'><line x1='173' y1='48' x2='207' y2='48'/>" +
        "<line x1='177' y1='43' x2='203' y2='43'/><line x1='177' y1='53' x2='203' y2='53'/></g>";
      // vacuole + noyau
      s += "<circle cx='245' cy='112' r='28' fill='#bfe3f7' stroke='#5b9bd4' stroke-width='2'/>";
      s += "<circle cx='105' cy='118' r='20' fill='#f7e8c8' stroke='#c08a3e' stroke-width='2.5'/>";
      if (ex) {
        s += _pin(90, 10, 1) + _pin(200, 24, 2) + _pin(80, 55, 3) + _pin(245, 112, 4) + _pin(105, 118, 5);
      } else {
        s += _lbl(40, 192, "Enveloppe", "start", "#2e6b29") + _lead(58, 184, 62, 168);
        s += _lbl(140, 192, "Membrane", "start", "#5f8f5b") + _lead(168, 184, 122, 154);
        s += _lbl(190, 80, "Chloroplaste", "middle", "#2e6b29") + _lead(190, 72, 190, 62);
        s += _lbl(245, 116, "Vacuole", "middle", "#2f6da8");
        s += _lbl(105, 122, "Noyau", "middle", "#7a5a20");
      }
      return s + "</svg>";
    }
  },

  adpatp: {
    caption: "Le cycle énergétique : ADP + P + E ⇄ ATP",
    labels: { "1": "ADP", "2": "ATP", "3": "P + E (stockage)", "4": "P + E (libérés)" },
    svg: function(mode) {
      const ex = mode === "exercice";
      let s = _open(320, 150) + "<rect width='320' height='150' fill='#ffffff'/>";
      // flèches du cycle
      s += "<path d='M118 66 Q160 30 202 66' fill='none' stroke='#888888' stroke-width='2'/>" +
        "<polygon points='204,66 192,60 194,72' fill='#888888'/>";
      s += "<path d='M202 84 Q160 120 118 84' fill='none' stroke='#888888' stroke-width='2'/>" +
        "<polygon points='116,84 128,78 126,90' fill='#888888'/>";
      // boîtes ADP / ATP
      s += "<rect x='26' y='55' width='92' height='42' rx='10' fill='#eef3fb' stroke='#5b7fd4' stroke-width='2.5'/>";
      s += "<rect x='202' y='55' width='92' height='42' rx='10' fill='#e4f5ea' stroke='#2e9e63' stroke-width='2.5'/>";
      if (ex) {
        s += _pin(72, 76, 1) + _pin(248, 76, 2) + _pin(160, 42, 3) + _pin(160, 108, 4);
      } else {
        s += _lbl(72, 81, "ADP", "middle", "#2f4f7f");
        s += _lbl(248, 81, "ATP", "middle", "#1d7a47");
        s += _lbl(160, 46, "+ P + E", "middle", "#c0492f");
        s += _lbl(160, 112, "P + E libérés", "middle", "#a87b1f");
      }
      return s + "</svg>";
    }
  }
};

// Figures prêtes pour le cours (mode légendé) — utilisées via s.schema dans data.js
const SCHEMAS = {};
Object.keys(SCHEMA_DEFS).forEach(id => {
  SCHEMAS[id] = "<figure class='schema'>" + SCHEMA_DEFS[id].svg("cours") +
    "<figcaption>" + SCHEMA_DEFS[id].caption + "</figcaption></figure>";
});
