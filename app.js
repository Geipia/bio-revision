// Bio Révision — logique de l'application
// Progression sauvegardée en localStorage sur l'iPhone.

const STORE_KEY = "bioAppCellule_v1";

let store = loadStore();

function loadStore() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return { q: {}, sessions: 0, bonnes: 0, total: 0, derniereVisite: null, jours: [] };
}
function saveStore() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch (e) {}
}

// Mastery par question : 0 = jamais vue / ratée, 1 à 3 = niveau Leitner
function qState(id) {
  if (!store.q[id]) store.q[id] = { box: 0, vues: 0, ok: 0, ko: 0, last: 0 };
  return store.q[id];
}

function noteJour() {
  const j = new Date().toISOString().slice(0, 10);
  if (!store.jours.includes(j)) { store.jours.push(j); if (store.jours.length > 60) store.jours.shift(); }
}

function maitriseChap(chapId) {
  const qs = QUESTIONS.filter(q => q.chap === chapId);
  if (!qs.length) return 0;
  let sum = 0;
  qs.forEach(q => { sum += Math.min(qState(q.id).box, 3); });
  return Math.round(100 * sum / (qs.length * 3));
}
function maitriseGlobale() {
  let sum = 0;
  QUESTIONS.forEach(q => { sum += Math.min(qState(q.id).box, 3); });
  return Math.round(100 * sum / (QUESTIONS.length * 3));
}
function nbVues() { return QUESTIONS.filter(q => qState(q.id).vues > 0).length; }

// Mélange de Fisher-Yates : renvoie les indices 0..n-1 dans un ordre aléatoire
function ordreMelange(n) {
  const a = [];
  for (let i = 0; i < n; i++) a.push(i);
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = a[i]; a[i] = a[j]; a[j] = tmp;
  }
  return a;
}

// ---------- Navigation ----------
const ECRANS = ["accueil", "cours", "chapitre", "cartes", "quiz", "defi", "progres"];
let ecran = "accueil";
let chapCourant = null;

function show(id) {
  ECRANS.forEach(e => {
    const el = document.getElementById("ecran-" + e);
    if (el) el.classList.toggle("actif", e === id);
  });
  document.querySelectorAll(".tabbtn").forEach(b => {
    b.classList.toggle("actif", b.dataset.ecran === id ||
      (id === "chapitre" && b.dataset.ecran === "cours"));
  });
  ecran = id;
  window.scrollTo(0, 0);
}

function ouvrirChapitre(id) {
  chapCourant = COURSE.find(c => c.id === id);
  if (!chapCourant) return;
  const cont = document.getElementById("chapitre-contenu");
  let html = "<h2>" + chapCourant.titre + "</h2>";
  chapCourant.sections.forEach(s => {
    html += "<div class='sec'><h3>" + s.titre + "</h3>" + s.html;
    if (s.schema) html += SCHEMAS[s.schema] || "";
    html += "</div>";
  });
  const m = maitriseChap(chapCourant.id);
  html += "<div class='chapfoot'><div class='barre'><div class='rempl' style='width:" + m + "%'></div></div>" +
    "<p class='muted'>Maîtrise du chapitre : " + m + " %</p>" +
    "<button class='btn' onclick=\"startQuiz('" + chapCourant.id + "')\">S'entraîner sur ce chapitre</button></div>";
  cont.innerHTML = html;
  show("chapitre");
}

// ---------- Écrans statiques ----------
function renderAccueil() {
  const g = maitriseGlobale();
  const el = document.getElementById("accueil-stats");
  el.innerHTML =
    "<div class='bigpct'>" + g + " %</div>" +
    "<p class='muted'>de maîtrise globale · " + nbVues() + "/" + QUESTIONS.length + " questions vues</p>" +
    "<div class='barre big'><div class='rempl' style='width:" + g + "%'></div></div>" +
    "<p class='muted' style='margin-top:14px'>" + store.jours.length + " jour(s) de révision · " + store.sessions + " session(s) d'exercices</p>";
}

function renderCours() {
  const cont = document.getElementById("cours-liste");
  let html = "";
  COURSE.forEach(c => {
    const m = maitriseChap(c.id);
    html += "<button class='carte chapcard' onclick=\"ouvrirChapitre('" + c.id + "')\">" +
      "<div class='chaprow'><span class='chaptitre'>" + c.titre + "</span><span class='chappct'>" + m + " %</span></div>" +
      "<div class='barre'><div class='rempl' style='width:" + m + "%'></div></div></button>";
  });
  cont.innerHTML = html;
}

function renderProgres() {
  const cont = document.getElementById("progres-contenu");
  const g = maitriseGlobale();
  let html = "<div class='carte centre'><div class='bigpct'>" + g + " %</div>" +
    "<p class='muted'>maîtrise globale</p>" +
    "<p>" + store.bonnes + " bonnes réponses sur " + store.total + " · " + store.sessions + " sessions · " + store.jours.length + " jour(s) actif(s)</p></div>";
  html += "<h3 class='titre-liste'>Par chapitre</h3>";
  COURSE.forEach(c => {
    const m = maitriseChap(c.id);
    const qs = QUESTIONS.filter(q => q.chap === c.id);
    const vues = qs.filter(q => qState(q.id).vues > 0).length;
    html += "<div class='carte'><div class='chaprow'><span class='chaptitre'>" + c.titre + "</span><span class='chappct'>" + m + " %</span></div>" +
      "<div class='barre'><div class='rempl' style='width:" + m + "%'></div></div>" +
      "<p class='muted'>" + vues + "/" + qs.length + " questions vues</p></div>";
  });
  // Questions à retravailler
  const faibles = QUESTIONS.filter(q => { const s = qState(q.id); return s.vues > 0 && s.box < 2; });
  if (faibles.length) {
    html += "<h3 class='titre-liste'>À retravailler (" + faibles.length + ")</h3><div class='carte'><ul class='faibles'>";
    faibles.slice(0, 8).forEach(q => { html += "<li>" + q.q + "</li>"; });
    html += "</ul></div>";
  }
  html += "<button class='btn danger' onclick='resetProgress()'>Remettre la progression à zéro</button>";
  cont.innerHTML = html;
}

function resetProgress() {
  if (confirm("Effacer toute ta progression ? C'est définitif.")) {
    store = { q: {}, sessions: 0, bonnes: 0, total: 0, derniereVisite: null, jours: [] };
    saveStore();
    renderProgres(); renderAccueil(); renderCours();
  }
}

// ---------- Flashcards ----------
let cartesListe = [], carteIndex = 0, carteRetournee = false;

function startCartes(chapId) {
  cartesListe = [];
  COURSE.forEach(c => {
    if (chapId && c.id !== chapId) return;
    c.sections.forEach(s => {
      cartesListe.push({ chap: c.titre, recto: s.titre, verso: s.html });
    });
  });
  carteIndex = 0; carteRetournee = false;
  renderCarte();
  show("cartes");
}
function renderCarte() {
  const cont = document.getElementById("cartes-contenu");
  if (!cartesListe.length) { cont.innerHTML = "<p class='muted'>Aucune carte.</p>"; return; }
  const c = cartesListe[carteIndex];
  let html = "<p class='muted centre'>" + (carteIndex + 1) + " / " + cartesListe.length + " · " + c.chap + "</p>";
  html += "<button class='flashcard' onclick='flipCarte()'>";
  if (carteRetournee) {
    html += "<div class='fc-verso'>" + c.verso + "</div><p class='fc-hint'>Toucher pour retourner</p>";
  } else {
    html += "<div class='fc-recto'>" + c.recto + "</div><p class='fc-hint'>Toucher pour voir la réponse</p>";
  }
  html += "</button>";
  html += "<div class='rowbtn'>" +
    "<button class='btn sec' onclick='prevCarte()'>← Précédente</button>" +
    "<button class='btn sec' onclick='nextCarte()'>Suivante →</button></div>";
  cont.innerHTML = html;
}
function flipCarte() { carteRetournee = !carteRetournee; renderCarte(); }
function nextCarte() { carteIndex = (carteIndex + 1) % cartesListe.length; carteRetournee = false; renderCarte(); }
function prevCarte() { carteIndex = (carteIndex - 1 + cartesListe.length) % cartesListe.length; carteRetournee = false; renderCarte(); }

// ---------- Quiz adaptatif ----------
let quizListe = [], quizIndex = 0, quizScore = 0, quizRepDonnee = false, quizMultiSel = [], quizMode = "adapt";

function choisirQuestions(n, chapId, hardOnly) {
  let pool = QUESTIONS.slice();
  if (chapId) pool = pool.filter(q => q.chap === chapId);
  if (hardOnly) pool = pool.filter(q => q.diff >= 2);
  // poids adaptatif : jamais vues > boîte basse > pas vues récemment
  const now = Date.now();
  pool.forEach(q => {
    const s = qState(q.id);
    let w = 10;
    if (s.vues === 0) w = 100;
    else w = 60 - 15 * Math.min(s.box, 3) + Math.min(30, (now - s.last) / 3600000);
    q._w = w * (0.8 + Math.random() * 0.4);
  });
  pool.sort((a, b) => b._w - a._w);
  return pool.slice(0, n);
}

function startQuiz(chapId) {
  quizMode = "adapt";
  quizListe = choisirQuestions(10, chapId || null, false);
  quizIndex = 0; quizScore = 0;
  show("quiz");
  renderQuestion();
}
function startDefi() {
  quizMode = "defi";
  quizListe = choisirQuestions(10, null, true);
  quizIndex = 0; quizScore = 0;
  show("quiz");
  renderQuestion();
}

function renderQuestion() {
  const cont = document.getElementById("quiz-contenu");
  if (quizIndex >= quizListe.length) { renderFinQuiz(); return; }
  const q = quizListe[quizIndex];
  quizRepDonnee = false; quizMultiSel = [];
  const chap = COURSE.find(c => c.id === q.chap);
  let html = "<p class='muted centre'>Question " + (quizIndex + 1) + " / " + quizListe.length +
    " · " + (chap ? chap.titre : "") +
    (q.diff >= 3 ? " · <span class='badge hard'>complexe</span>" : (q.diff === 2 ? " · <span class='badge mid'>intermédiaire</span>" : "")) + "</p>";
  html += "<div class='barre big'><div class='rempl' style='width:" + Math.round(100 * quizIndex / quizListe.length) + "%'></div></div>";
  html += "<h2 class='qtext'>" + q.q + "</h2>";

  if (q.type === "vf") {
    html += "<div class='choix'>";
    html += "<button class='choixbtn' data-i='0' onclick=\"repondre(0)\">Vrai</button>";
    html += "<button class='choixbtn' data-i='1' onclick=\"repondre(1)\">Faux</button>";
    html += "</div>";
  } else if (q.type === "qcm") {
    // Choix affichés dans un ordre mélangé ; data-i garde l'indice d'origine
    const ordre = ordreMelange(q.choix.length);
    html += "<div class='choix'>";
    ordre.forEach(i => { html += "<button class='choixbtn' data-i='" + i + "' onclick=\"repondre(" + i + ")\">" + q.choix[i] + "</button>"; });
    html += "</div>";
  } else if (q.type === "multi") {
    const ordre = ordreMelange(q.choix.length);
    html += "<div class='choix'>";
    ordre.forEach(i => { html += "<button class='choixbtn multi' data-i='" + i + "' onclick=\"toggleMulti(" + i + ")\">" + q.choix[i] + "</button>"; });
    html += "</div><button class='btn' onclick='validerMulti()'>Valider</button>";
  } else if (q.type === "libre") {
    html += "<input id='rep-libre' class='champ' type='text' autocomplete='off' placeholder='Ta réponse…'>" +
      "<button class='btn' onclick='validerLibre()'>Valider</button>";
  }
  html += "<div id='feedback'></div>";
  cont.innerHTML = html;
}

function appliquerResultat(q, juste) {
  const s = qState(q.id);
  s.vues++; s.last = Date.now();
  if (juste) { s.ok++; s.box = Math.min(3, s.box + 1); store.bonnes++; }
  else { s.ko++; s.box = Math.max(0, s.box - 1); }
  store.total++;
  noteJour();
  saveStore();
}

function feedback(q, juste, detail) {
  quizRepDonnee = true;
  const f = document.getElementById("feedback");
  let html = "<div class='fb " + (juste ? "ok" : "ko") + "'>" +
    "<p class='fb-titre'>" + (juste ? "Correct !" : "Pas tout à fait…") + "</p>";
  if (detail) html += "<p>" + detail + "</p>";
  html += "<p>" + q.expl + "</p></div>" +
    "<button class='btn' onclick='questionSuivante()'>" + (quizIndex + 1 >= quizListe.length ? "Voir le résultat" : "Question suivante") + "</button>";
  f.innerHTML = html;
  // colorer les boutons
  document.querySelectorAll(".choixbtn").forEach(b => {
    const i = parseInt(b.dataset.i, 10);
    if (isNaN(i)) return;
    if (q.bonnes.indexOf(i) >= 0) b.classList.add("bon");
    b.disabled = true;
  });
  const inp = document.getElementById("rep-libre");
  if (inp) inp.disabled = true;
}

function repondre(i) {
  if (quizRepDonnee) return;
  const q = quizListe[quizIndex];
  const juste = q.bonnes.indexOf(i) >= 0 && q.bonnes.length === 1;
  appliquerResultat(q, juste);
  if (juste) quizScore++;
  const btn = document.querySelector(".choixbtn[data-i='" + i + "']");
  if (btn && !juste) btn.classList.add("mauvais");
  const bonneTxt = q.choix ? ("Bonne réponse : " + q.choix[q.bonnes[0]]) : "";
  feedback(q, juste, juste ? "" : bonneTxt);
}

function toggleMulti(i) {
  if (quizRepDonnee) return;
  const pos = quizMultiSel.indexOf(i);
  if (pos >= 0) quizMultiSel.splice(pos, 1); else quizMultiSel.push(i);
  const btn = document.querySelector(".choixbtn[data-i='" + i + "']");
  if (btn) btn.classList.toggle("sel", quizMultiSel.indexOf(i) >= 0);
}
function validerMulti() {
  if (quizRepDonnee) return;
  const q = quizListe[quizIndex];
  const a = quizMultiSel.slice().sort().join(",");
  const b = q.bonnes.slice().sort().join(",");
  const juste = a === b;
  appliquerResultat(q, juste);
  if (juste) quizScore++;
  const bonnesTxt = "Bonn" + (q.bonnes.length > 1 ? "es" : "e") + " réponse" + (q.bonnes.length > 1 ? "s" : "") + " : " + q.bonnes.map(i => q.choix[i]).join(" ; ");
  feedback(q, juste, juste ? "" : bonnesTxt);
}

function normTxt(s) {
  return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();
}
function validerLibre() {
  if (quizRepDonnee) return;
  const q = quizListe[quizIndex];
  const inp = document.getElementById("rep-libre");
  const rep = normTxt(inp.value || "");
  let juste = true;
  q.reponses.forEach(groupe => {
    const trouve = groupe.some(mot => rep.indexOf(normTxt(mot)) >= 0);
    if (!trouve) juste = false;
  });
  if (!rep) juste = false;
  appliquerResultat(q, juste);
  if (juste) quizScore++;
  feedback(q, juste, juste ? "" : "Réponse attendue : " + q.reponses.map(g => g[0]).join(" et "));
}

function questionSuivante() { quizIndex++; renderQuestion(); }

function renderFinQuiz() {
  store.sessions++;
  saveStore();
  const cont = document.getElementById("quiz-contenu");
  const pct = Math.round(100 * quizScore / quizListe.length);
  let msg = "Continue comme ça !";
  if (pct === 100) msg = "Parfait, aucune erreur !";
  else if (pct >= 70) msg = "Très bien, presque tout bon.";
  else if (pct >= 50) msg = "Pas mal, mais il reste des choses à revoir.";
  else msg = "Revois le cours sur ces points et réessaie.";
  let html = "<div class='carte centre'><div class='bigpct'>" + quizScore + " / " + quizListe.length + "</div>" +
    "<p>" + msg + "</p>" +
    "<p class='muted'>Ta progression a été enregistrée. Les questions ratées reviendront en priorité.</p></div>" +
    "<div class='rowbtn'><button class='btn' onclick='startQuiz()'>Refaire une session</button>" +
    "<button class='btn sec' onclick='goAccueil()'>Retour à l'accueil</button></div>";
  cont.innerHTML = html;
  renderAccueil(); renderCours();
}

function goAccueil() { renderAccueil(); show("accueil"); }

// ---------- Installation (Android/Chrome) ; sur iPhone : notice ----------
let deferredPrompt = null;
window.addEventListener("beforeinstallprompt", e => {
  e.preventDefault();
  deferredPrompt = e;
  const b = document.getElementById("btn-install");
  if (b) b.style.display = "block";
});
function installer() {
  if (deferredPrompt) { deferredPrompt.prompt(); deferredPrompt = null; }
}

// ---------- Init ----------
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".tabbtn").forEach(b => {
    b.addEventListener("click", () => {
      const e = b.dataset.ecran;
      if (e === "accueil") renderAccueil();
      if (e === "cours") renderCours();
      if (e === "cartes") startCartes();
      if (e === "progres") renderProgres();
      show(e);
    });
  });
  renderAccueil();
  renderCours();
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
});
