// Configuration de la carte maison3d-card : valeurs par défaut, validation (erreurs en français),
// chargement des données (intégrées au bundle, ou depuis /local/ via plan_url / amenagement_url)
// et normalisation des liaisons (règles de docs/decisions.md).
import PLAN_INTEGRE from "@plan";
import AMENAGEMENT_INTEGRE from "@amenagement";

export const NIVEAUX_VUE = ["rez", "etage", "tout", "eclate"];
export const VUES = ["iso", "dessus"];
const ACTIONS = ["toggle", "more-info", "navigate", "perform-action", "none"];
const ROLES = ["piece", "lampe", "thermostat", "lave_linge", "aspirateur", "serrure", "media", "autre"];

export const DEFAUTS = Object.freeze({
  niveau_defaut: "tout",
  vue: "iso",
  hauteur: "auto",
  maquette: true,
  hauteur_coupe: 1.2,
  lueurs: true, // une PointLight par pièce éclairable (intensité 0 quand éteinte)
  pixel_ratio_max: 2,
  ecart_eclate: 3.2,
  etiquettes_thermostats: true,
  // Seules commandes « toggle » autorisées hors light.* et switch.interrupteur_* (règle 5 : relais SdB exposés par exception).
  toggle_autorises: [],
  liaisons: [],
});

const erreur = (msg) => new Error(`maison3d-card : ${msg}`);
const estObjet = (v) => v !== null && typeof v === "object" && !Array.isArray(v);
const estEntite = (v) => typeof v === "string" && /^[a-z_]+\.[a-z0-9_]+$/.test(v);

/** Valide la configuration YAML de la carte et renvoie une copie normalisée. Lève une Error en français. */
export function validerConfig(brut) {
  if (!estObjet(brut)) throw erreur("la configuration doit être un objet (type: custom:maison3d-card).");
  const c = { ...DEFAUTS, ...brut };

  if (!NIVEAUX_VUE.includes(c.niveau_defaut))
    throw erreur(`« niveau_defaut » doit valoir ${NIVEAUX_VUE.join(", ")} (reçu : ${JSON.stringify(c.niveau_defaut)}).`);
  if (!VUES.includes(c.vue)) throw erreur(`« vue » doit valoir iso ou dessus (reçu : ${JSON.stringify(c.vue)}).`);

  // hauteur : "auto", un nombre (px) ou une chaîne CSS en px / vh
  if (c.hauteur === "auto") c.hauteurCss = null;
  else if (typeof c.hauteur === "number" && c.hauteur >= 150 && c.hauteur <= 4000) c.hauteurCss = `${c.hauteur}px`;
  else if (typeof c.hauteur === "string" && /^\d{2,4}(px|vh|svh|dvh)$/.test(c.hauteur.trim())) c.hauteurCss = c.hauteur.trim();
  else throw erreur(`« hauteur » doit valoir auto, un nombre de pixels (150 à 4000) ou une valeur « 600px » / « 80vh » (reçu : ${JSON.stringify(c.hauteur)}).`);

  for (const cle of ["maquette", "lueurs", "etiquettes_thermostats"])
    if (typeof c[cle] !== "boolean") throw erreur(`« ${cle} » doit valoir true ou false.`);
  if (typeof c.hauteur_coupe !== "number" || c.hauteur_coupe < 0.3 || c.hauteur_coupe > 3)
    throw erreur("« hauteur_coupe » doit être un nombre de mètres entre 0,3 et 3.");
  if (typeof c.pixel_ratio_max !== "number" || c.pixel_ratio_max < 0.5 || c.pixel_ratio_max > 2)
    throw erreur("« pixel_ratio_max » doit être compris entre 0,5 et 2.");
  if (typeof c.ecart_eclate !== "number" || c.ecart_eclate < 0 || c.ecart_eclate > 10)
    throw erreur("« ecart_eclate » doit être un nombre de mètres entre 0 et 10.");

  for (const cle of ["plan_url", "amenagement_url"]) {
    if (c[cle] === undefined || c[cle] === null || c[cle] === "") { delete c[cle]; continue; }
    if (typeof c[cle] !== "string" || !/^(\/|https?:\/\/)/.test(c[cle]))
      throw erreur(`« ${cle} » doit être une URL commençant par / (ex. /local/maison3d/plan.json) ou par https://.`);
  }
  if (!Array.isArray(c.toggle_autorises) || !c.toggle_autorises.every(estEntite))
    throw erreur("« toggle_autorises » doit être une liste d'entity_id.");
  if (!Array.isArray(c.liaisons)) throw erreur("« liaisons » doit être une liste.");
  c.liaisons.forEach((l, i) => validerLiaison(l, `liaisons[${i}]`));
  return c;
}

function validerAction(a, ou) {
  if (a === undefined) return;
  if (!estObjet(a) || !ACTIONS.includes(a.action))
    throw erreur(`${ou} : « action » doit valoir ${ACTIONS.join(", ")}.`);
  if (a.action === "navigate" && typeof a.navigation_path !== "string")
    throw erreur(`${ou} : « navigation_path » est obligatoire pour l'action navigate.`);
  if (a.action === "perform-action" && !/^[a-z_]+\.[a-z0-9_]+$/.test(a.perform_action || ""))
    throw erreur(`${ou} : « perform_action » doit être de la forme domaine.service (ex. script.turn_on).`);
  if ((a.action === "toggle" || a.action === "more-info") && a.entity !== undefined && !estEntite(a.entity))
    throw erreur(`${ou} : « entity » n'est pas un entity_id valide (${JSON.stringify(a.entity)}).`);
}

export function validerLiaison(l, ou = "liaison") {
  if (!estObjet(l)) throw erreur(`${ou} doit être un objet.`);
  if (!estObjet(l.cible) || (l.cible.piece === undefined && l.cible.meuble === undefined))
    throw erreur(`${ou} : « cible » doit contenir « piece » (id de pièce) ou « meuble » (index ou id).`);
  if (l.role !== undefined && !ROLES.includes(l.role)) throw erreur(`${ou} : rôle inconnu « ${l.role} » (${ROLES.join(", ")}).`);
  for (const cle of ["etat", "lumiere", "etiquette"])
    if (l[cle] !== undefined && !estEntite(l[cle])) throw erreur(`${ou} : « ${cle} » n'est pas un entity_id valide (${JSON.stringify(l[cle])}).`);
  validerAction(l.tap, `${ou}.tap`);
  validerAction(l.hold, `${ou}.hold`);
}

/** Vérifications minimales du plan (le contrat complet est dans SPEC.md). */
export function validerPlan(plan) {
  if (!estObjet(plan) || !Array.isArray(plan.niveaux) || !plan.niveaux.length)
    throw erreur("plan.json invalide : la liste « niveaux » est absente ou vide.");
  for (const n of plan.niveaux) {
    if (typeof n.id !== "string") throw erreur("plan.json invalide : un niveau n'a pas d'« id ».");
    for (const p of n.pieces || [])
      if (!Array.isArray(p.polygone) || p.polygone.length < 3)
        throw erreur(`plan.json invalide : la pièce « ${p.id} » du niveau « ${n.id} » n'a pas de polygone (au moins 3 points).`);
  }
  return plan;
}

async function lireJson(url, quoi) {
  let r;
  try {
    r = await fetch(url, { cache: "no-cache" });
  } catch (e) {
    throw erreur(`impossible de télécharger ${quoi} (${url}) : ${e.message}`);
  }
  if (!r.ok) throw erreur(`impossible de télécharger ${quoi} (${url}) : HTTP ${r.status}.`);
  try {
    return await r.json();
  } catch {
    throw erreur(`${quoi} (${url}) n'est pas un JSON valide.`);
  }
}

/** Renvoie {plan, amenagement} : intégrés au bundle, ou chargés depuis les URL de la configuration. */
export async function chargerDonnees(config) {
  const plan = config.plan_url ? await lireJson(config.plan_url, "le plan") : PLAN_INTEGRE;
  const amenagement = config.amenagement_url ? await lireJson(config.amenagement_url, "l'aménagement") : AMENAGEMENT_INTEGRE;
  validerPlan(plan);
  const am = estObjet(amenagement) ? amenagement : {};
  (am.liaisons || []).forEach((l, i) => validerLiaison(l, `amenagement.liaisons[${i}]`));
  return { plan, amenagement: { meubles: am.meubles || [], liaisons: am.liaisons || [] } };
}

const cleLiaison = (l) => (l.cible.piece !== undefined ? `p:${l.cible.piece}:${l.role || "piece"}` : `m:${l.cible.meuble}`);

/** Fusionne les liaisons de l'aménagement avec les surcharges de la configuration (même cible et même rôle). */
export function fusionnerLiaisons(base, surcharges) {
  const carte = new Map();
  for (const l of base) carte.set(cleLiaison(l), { ...l });
  for (const l of surcharges) {
    const k = cleLiaison(l);
    carte.set(k, carte.has(k) ? { ...carte.get(k), ...l } : { ...l });
  }
  return [...carte.values()];
}

/** Commande « toggle » permise ? (règles 2, 5 et 7 : virtuels switch.interrupteur_*, lampes, ou exceptions listées) */
export function toggleAutorise(entite, config) {
  if (!entite) return false;
  if (entite.startsWith("light.")) return true;
  if (entite.startsWith("switch.interrupteur_")) return true; // virtuels (les groupes de relais sont « switch.interrupteurs_* »)
  if (entite.startsWith("input_boolean.") && !entite.startsWith("input_boolean.etat_voulu_")) return true;
  return (config.toggle_autorises || []).includes(entite);
}

/** Complète une liaison avec des actions par défaut sûres. */
export function normaliserLiaison(l) {
  const role = l.role || (l.cible.piece !== undefined ? "piece" : "lampe");
  const lumiere = l.lumiere || (l.etat && l.etat.startsWith("light.") ? l.etat : undefined);
  let tap = l.tap;
  let hold = l.hold;
  if (!tap) {
    if ((role === "piece" || role === "lampe") && l.etat) tap = { action: "toggle", entity: l.etat };
    else if (l.etat) tap = { action: "more-info", entity: l.etat };
    else tap = { action: "none" };
  }
  if (!hold) {
    const e = lumiere || l.etat;
    hold = e ? { action: "more-info", entity: e } : { action: "none" };
  }
  return { ...l, role, lumiere, tap, hold };
}
