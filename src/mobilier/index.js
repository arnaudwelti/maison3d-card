// Registre de la bibliothèque de mobilier procédural Maison 3D.
//
//   import { creerMeuble, CATALOGUE, allumer, eteindre } from "./mobilier/index.js";
//   const canape = creerMeuble("canape", { places: 3, couleur: "sauge" });
//
// creerMeuble() : construit la fabrique, FUSIONNE les maillages statiques par matériau (peu d'appels de
// dessin), ajoute une ombre de contact sous les meubles posés au sol, et met le résultat en cache :
// deux meubles identiques (même type, mêmes opts) partagent géométries et matériaux.
// Les parties pilotables (ampoule, halo, tambour, hublot, voyant, ecran, vantail…) restent des
// sous-objets nommés, avec un matériau propre à chaque instance.
// Options réservées : fusion (true), ombre (true).
//
// Libération : utiliser liberer(objet) ; ne jamais disposer un matériau/une géométrie userData.partage.
import * as salon from "./salon.js";
import * as chambre from "./chambre.js";
import * as cuisine from "./cuisine.js";
import * as bureau from "./bureau.js";
import * as sdb from "./sdb.js";
import * as buanderie from "./buanderie.js";
import * as deco from "./deco.js";
import * as luminaires from "./luminaires.js";
import * as special from "./special.js";
import { fusionner, ajouterOmbre, compterTriangles } from "./outils.js";

export { allumer, eteindre } from "./luminaires.js";
export { etatLaveLinge, animerLaveLinge } from "./buanderie.js";
export { THEMES } from "./chambre.js";
export { COULEURS, statsMateriaux } from "./materiaux.js";
export { compterTriangles, fusionner, boiteEnglobante } from "./outils.js";

const FAMILLES = { salon, chambre, cuisine, bureau, sdb, buanderie, deco, luminaires, special };

// Libellés français et familles (le séjour est rangé dans « salon »).
const LIBELLES = {
  canape: "Canapé 3 places", canape_angle: "Canapé d'angle", fauteuil: "Fauteuil", table_basse: "Table basse",
  meuble_tv: "Meuble TV + TV", tv: "Téléviseur", bibliotheque: "Bibliothèque", tapis: "Tapis",
  chaise: "Chaise", table_manger: "Table à manger + chaises", buffet: "Buffet",
  lit_double: "Lit double", lit_enfant: "Lit enfant cabane", lit_mezzanine: "Lit mezzanine", table_chevet: "Table de chevet",
  armoire: "Armoire", commode: "Commode", chaise_enfant: "Chaise enfant", bureau_enfant: "Bureau enfant",
  coffre_jouets: "Coffre à jouets", peluche: "Peluche", poster_cadre: "Poster encadré",
  cuisine_lineaire: "Cuisine linéaire", cuisine_L: "Cuisine en L", evier: "Évier", plaques: "Plaques + four",
  four: "Colonne four", refrigerateur: "Réfrigérateur", tabouret: "Tabouret", ilot: "Îlot + tabourets",
  bureau: "Bureau", fauteuil_bureau: "Fauteuil de bureau", ecran: "Écran", lampe_bureau: "Lampe de bureau", etageres: "Étagères murales",
  baignoire: "Baignoire", douche: "Douche vitrée", lavabo: "Lavabo + meuble", wc: "WC suspendu", miroir: "Miroir", seche_serviettes: "Sèche-serviettes",
  lave_linge: "Lave-linge", seche_linge: "Sèche-linge", etagere_buanderie: "Étagère buanderie", panier_linge: "Panier à linge",
  plante: "Plante", coussin: "Coussin", cadre: "Cadre", vase: "Vase", horloge: "Horloge", rideaux: "Rideaux", petit_tapis: "Petit tapis",
  plafonnier: "Plafonnier", suspension: "Suspension", spots: "Spots encastrés", lampadaire: "Lampadaire", lampe_chevet: "Lampe de chevet", ruban_led: "Ruban LED",
  escalier_colimacon: "Escalier colimaçon", echelle: "Échelle de mezzanine", station_aspirateur: "Station aspirateur robot", filet: "Filet tendu", garde_corps: "Garde-corps", porte: "Porte", fenetre: "Fenêtre", baie: "Baie vitrée",
};

// Fabriques exportées par famille (les fonctions internes et utilitaires sont exclues).
const UTILITAIRES = new Set(["allumer", "eteindre", "etatLaveLinge", "animerLaveLinge", "coussinMesh", "THEMES"]);
export const MEUBLES = {};
const FAMILLE_DE = {};
for (const [fam, mod] of Object.entries(FAMILLES))
  for (const [nom, f] of Object.entries(mod))
    if (typeof f === "function" && !UTILITAIRES.has(nom) && LIBELLES[nom]) { MEUBLES[nom] = f; FAMILLE_DE[nom] = fam === "salon" && ["chaise", "table_manger", "buffet"].includes(nom) ? "sejour" : fam; }

// Dimensions par défaut mesurées (boîte englobante, en m : [largeur X, hauteur Y, profondeur Z]),
// fixation (sol | mur | plafond | pose | suspendu) et triangles. Régénéré par showroom/mesurer.mjs.
// <catalogue>
const MESURES = {
  bibliotheque: {"d":[0.9,1.9,0.32],"f":"sol","t":2052},
  buffet: {"d":[1.6,1.24,0.48],"f":"sol","t":1844},
  canape: {"d":[2.26,0.92,0.94],"f":"sol","t":1792},
  canape_angle: {"d":[2.7,0.92,1.9],"f":"sol","t":2672},
  chaise: {"d":[0.44,0.8,0.47],"f":"sol","t":444},
  fauteuil: {"d":[0.78,0.9,0.78],"f":"sol","t":1240},
  meuble_tv: {"d":[1.8,1.24,0.44],"f":"sol","t":1170},
  table_basse: {"d":[0.85,0.7,0.85],"f":"sol","t":608},
  table_manger: {"d":[2.25,1.11,1.63],"f":"sol","t":3304},
  tapis: {"d":[2.2,0.01,1.6],"f":"sol","t":96},
  tv: {"d":[1.22,0.76,0.2],"f":"pose","t":230,"r":"tv"},
  armoire: {"d":[1,2,0.6],"f":"sol","t":552},
  bureau_enfant: {"d":[1,0.79,0.82],"f":"sol","t":808},
  chaise_enfant: {"d":[0.36,0.68,0.37],"f":"sol","t":312},
  coffre_jouets: {"d":[0.73,0.72,0.42],"f":"sol","t":1750},
  commode: {"d":[0.9,0.85,0.49],"f":"sol","t":736},
  lit_double: {"d":[1.73,1.06,2.16],"f":"sol","t":2120},
  lit_enfant: {"d":[0.98,1.56,2.02],"f":"sol","t":1347},
  lit_mezzanine: {"d":[2,1.87,1.27],"f":"sol","t":2308},
  peluche: {"d":[0.17,0.28,0.14],"f":"pose","t":730},
  poster_cadre: {"d":[0.42,0.55,0.03],"f":"mur","t":50},
  table_chevet: {"d":[0.45,0.5,0.4],"f":"sol","t":356},
  cuisine_L: {"d":[3.02,2.18,2.2],"f":"sol","t":4876},
  cuisine_lineaire: {"d":[3.02,2.18,0.63],"f":"sol","t":3900},
  evier: {"d":[0.8,1.21,0.63],"f":"sol","t":820},
  four: {"d":[0.6,2.15,0.63],"f":"sol","t":912},
  ilot: {"d":[1.8,1,1.14],"f":"sol","t":1588},
  plaques: {"d":[0.6,0.91,0.63],"f":"sol","t":1056},
  refrigerateur: {"d":[0.6,1.86,0.68],"f":"sol","t":660},
  tabouret: {"d":[0.35,0.65,0.36],"f":"sol","t":280},
  bureau: {"d":[1.4,1.21,0.7],"f":"sol","t":1314},
  ecran: {"d":[0.6,0.47,0.16],"f":"pose","t":230,"r":"ecran"},
  etageres: {"d":[1.36,0.99,0.25],"f":"mur","t":1184},
  fauteuil_bureau: {"d":[0.63,1.11,0.63],"f":"sol","t":1164},
  lampe_bureau: {"d":[0.15,0.45,0.43],"f":"pose","t":304,"r":"lampe"},
  baignoire: {"d":[1.7,0.69,0.75],"f":"sol","t":832},
  douche: {"d":[0.9,2.01,0.92],"f":"sol","t":548},
  lavabo: {"d":[0.8,0.74,0.5],"f":"mur","t":1008},
  miroir: {"d":[0.64,0.64,0.04],"f":"mur","t":512},
  seche_serviettes: {"d":[0.49,1.2,0.09],"f":"mur","t":676,"r":"seche_serviettes"},
  wc: {"d":[0.55,0.91,0.57],"f":"mur","t":728},
  etagere_buanderie: {"d":[0.9,1.8,0.4],"f":"sol","t":1920},
  lave_linge: {"d":[0.6,0.85,0.65],"f":"sol","t":2730,"r":"lave_linge"},
  panier_linge: {"d":[0.44,0.86,0.45],"f":"sol","t":680},
  seche_linge: {"d":[0.6,0.85,0.63],"f":"sol","t":1416,"r":"seche_linge"},
  cadre: {"d":[0.5,0.65,0.03],"f":"mur","t":62},
  coussin: {"d":[0.45,0.45,0.17],"f":"pose","t":300},
  horloge: {"d":[0.32,0.32,0.04],"f":"mur","t":424},
  petit_tapis: {"d":[1,0.01,1],"f":"sol","t":448},
  plante: {"d":[0.83,0.61,1.03],"f":"sol","t":314},
  rideaux: {"d":[1.7,2.41,0.06],"f":"mur","t":64},
  vase: {"d":[0.17,0.32,0.16],"f":"pose","t":264},
  lampadaire: {"d":[0.39,1.58,0.4],"f":"sol","t":132,"r":"lampe"},
  lampe_chevet: {"d":[0.26,0.42,0.26],"f":"pose","t":192,"r":"lampe"},
  plafonnier: {"d":[0.38,0.11,0.38],"f":"plafond","t":240,"r":"lampe"},
  ruban_led: {"d":[2,0.01,0.02],"f":"mur","t":24,"r":"lampe"},
  spots: {"d":[3.1,0.02,0.1],"f":"plafond","t":640,"r":"lampe"},
  suspension: {"d":[0.35,0.93,0.36],"f":"plafond","t":564,"r":"lampe"},
  baie: {"d":[2.4,2.15,0.15],"f":"mur","t":384},
  echelle: {"d":[0.5,2.96,0.61],"f":"sol","t":384},
  escalier_colimacon: {"d":[2.02,3.65,2.01],"f":"sol","t":2288},
  station_aspirateur: {"d":[0.36,0.58,0.69],"f":"sol","t":1620,"r":"aspirateur"},
  fenetre: {"d":[1.3,1.28,0.2],"f":"mur","t":384},
  filet: {"d":[3.28,0.08,2.28],"f":"suspendu","t":1198},
  garde_corps: {"d":[2,1,0.07],"f":"sol","t":168},
  porte: {"d":[1.01,2.1,0.15],"f":"mur","t":560},
};
// </catalogue>

export const CATALOGUE = Object.fromEntries(
  Object.keys(MEUBLES).map((t) => {
    const m = MESURES[t] || {};
    return [t, { famille: FAMILLE_DE[t], libelle: LIBELLES[t], dimensions: m.d || null, emprise: m.d ? [m.d[0], m.d[2]] : null, fixation: m.f || "sol", triangles: m.t || null, interactif: m.r || null }];
  })
);

// ---------------------------------------------------------------------------
const cache = new Map();

export function creerMeuble(type, opts = {}) {
  const fab = MEUBLES[type];
  if (!fab) throw new Error(`maison3d : meuble inconnu « ${type} »`);
  const { fusion = true, ombre = true, ...o } = opts;
  const cle = `${type}|${fusion}|${ombre}|${JSON.stringify(o)}`;
  let modele = cache.get(cle);
  if (!modele) {
    modele = fab(o);
    if (fusion) fusionner(modele);
    if (ombre && modele.userData.fixation === "sol") ajouterOmbre(modele);
    modele.userData.triangles = compterTriangles(modele);
    cache.set(cle, modele);
  }
  const g = modele.clone(true);
  g.traverse((x) => {
    if (x.material && x.material.userData.propre) x.material = x.material.clone();
  });
  return g;
}

// Libère ce qui appartient en propre à un meuble (géométries fusionnées hors cache, matériaux propres).
export function liberer(objet) {
  const enCache = new Set();
  for (const m of cache.values()) m.traverse((x) => x.geometry && enCache.add(x.geometry));
  objet.traverse((x) => {
    if (x.geometry && !x.geometry.userData.partage && !enCache.has(x.geometry)) x.geometry.dispose();
    if (x.material && x.material.userData.propre) x.material.dispose();
  });
}

export function viderCache() {
  cache.clear();
}
