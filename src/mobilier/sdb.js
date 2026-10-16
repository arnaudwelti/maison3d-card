// Salle de bains : baignoire, douche vitrée, lavabo sur meuble, WC suspendu, miroir, sèche-serviettes.
import * as THREE from "three";
import { matBois, matTissu, matMat, matMetal, matLaque, matCeramique, matVerre, matMiroir, matCarrelage, matChrome, resoudre } from "./materiaux.js";
import { boite, cyl, maille, tige, geo, geoTour, geoTore, geoCyl, geoSphere, meuble } from "./outils.js";
import { plante } from "./deco.js";

// Serviette pliée posée (petite pile).
function serviettes(g, x, y, z, couleurs) {
  couleurs.forEach((c, i) => boite(g, 0.3, 0.05, 0.22, matTissu(c), x, y + i * 0.05, z, { r: 0.02, ry: i * 0.06 }));
}

// ---------------------------------------------------------------------------
// Baignoire encastrée (bord arrondi, fond visible, mitigeur, serviette).
// ---------------------------------------------------------------------------
export function baignoire(opts = {}) {
  const { longueur: L = 1.7, largeur: l = 0.75, hauteur: H = 0.56, tablier = "blanc", eau = true } = opts;
  const g = meuble("baignoire", [L, H, l], { fixation: "sol" });
  const mc = matCeramique("blanc_pur"), mt = resoudre(tablier, matLaque);
  const e = 0.08, fond = 0.14;
  // tablier (4 faces) : l'intérieur reste creux et visible
  boite(g, L, H - 0.05, 0.02, mt, 0, 0, l / 2 - 0.01);
  boite(g, L, H - 0.05, 0.02, mt, 0, 0, -l / 2 + 0.01);
  boite(g, 0.02, H - 0.05, l - 0.04, mt, -L / 2 + 0.01, 0, 0);
  boite(g, 0.02, H - 0.05, l - 0.04, mt, L / 2 - 0.01, 0, 0);
  // cuve : parois intérieures, fond, rebord arrondi
  boite(g, L - 2 * e, 0.02, l - 2 * e, matCeramique("#e9eef0"), 0, fond - 0.02, 0);
  boite(g, L - 0.04, H - fond - 0.05, e - 0.02, mc, 0, fond, -l / 2 + e / 2);
  boite(g, L - 0.04, H - fond - 0.05, e - 0.02, mc, 0, fond, l / 2 - e / 2);
  boite(g, e - 0.02, H - fond - 0.05, l - 2 * e, mc, -L / 2 + e / 2, fond, 0);
  boite(g, e - 0.02, H - fond - 0.05, l - 2 * e, mc, L / 2 - e / 2, fond, 0);
  boite(g, L, 0.05, e, mc, 0, H - 0.05, -l / 2 + e / 2, { r: 0.02 });
  boite(g, L, 0.05, e, mc, 0, H - 0.05, l / 2 - e / 2, { r: 0.02 });
  boite(g, e, 0.05, l - 2 * e + 0.02, mc, -L / 2 + e / 2, H - 0.05, 0, { r: 0.02 });
  boite(g, e, 0.05, l - 2 * e + 0.02, mc, L / 2 - e / 2, H - 0.05, 0, { r: 0.02 });
  if (eau) boite(g, L - 2 * e, 0.005, l - 2 * e, matVerre("#9fd0df", 0.5), 0, H - 0.22, 0);
  // robinetterie sur le bord
  const ch = matChrome();
  cyl(g, 0.018, 0.12, ch, -L / 2 + 0.04, H, 0, { seg: 8 });
  tige(g, [-L / 2 + 0.04, H + 0.12, 0], [-L / 2 + 0.16, H + 0.12, 0], 0.014, ch, 8);
  serviettes(g, L / 2 - 0.2, H, -l / 2 + 0.12, ["sauge", "blanc_pur"]);
  return g;
}

// ---------------------------------------------------------------------------
// Douche vitrée : receveur extra-plat, parois verre (angle ou façade), colonne de douche.
// ---------------------------------------------------------------------------
export function douche(opts = {}) {
  const { largeur: L = 0.9, profondeur: P = 0.9, hauteur: H = 2.0, parois = "angle" } = opts;
  const g = meuble("douche", [L, H, P], { fixation: "sol" });
  boite(g, L, 0.04, P, matCeramique("blanc_pur"), 0, 0, 0, { r: 0.01 });
  cyl(g, 0.04, 0.004, matChrome(), 0, 0.04, 0, { seg: 12 });
  const verre = matVerre("#d4e9ef", 0.22), ch = matChrome();
  // façade vitrée (+Z) et côté droit (+X) si « angle »
  boite(g, L - 0.02, H - 0.05, 0.008, verre, 0, 0.05, P / 2 - 0.01);
  boite(g, L - 0.02, 0.025, 0.02, ch, 0, H - 0.02, P / 2 - 0.01);
  boite(g, 0.02, H - 0.05, 0.02, ch, -L / 2 + 0.01, 0.05, P / 2 - 0.01);
  if (parois === "angle") {
    boite(g, 0.008, H - 0.05, P - 0.02, verre, L / 2 - 0.01, 0.05, 0);
    boite(g, 0.02, 0.025, P - 0.02, ch, L / 2 - 0.01, H - 0.02, 0);
  }
  // poignée de porte
  boite(g, 0.02, 0.3, 0.02, ch, L * 0.1, 1.0, P / 2 + 0.012);
  // colonne de douche contre le mur du fond
  const zm = -P / 2 + 0.05;
  cyl(g, 0.012, 1.9, ch, -0.1, 0.1, zm, { seg: 8 });
  tige(g, [-0.1, 1.98, zm], [-0.1, 1.98, zm + 0.3], 0.011, ch, 8);
  cyl(g, 0.12, 0.012, ch, -0.1, 1.95, zm + 0.32, { seg: 18 });
  boite(g, 0.16, 0.06, 0.05, ch, -0.1, 1.05, zm, { r: 0.012 });
  // tablette avec flacons
  boite(g, 0.25, 0.015, 0.1, matMetal("#2c2d30"), 0.22, 1.25, zm);
  cyl(g, 0.025, 0.14, matLaque("sauge"), 0.16, 1.265, zm, { seg: 8 });
  cyl(g, 0.022, 0.11, matLaque("terracotta"), 0.24, 1.265, zm, { seg: 8 });
  return g;
}

// ---------------------------------------------------------------------------
// Lavabo : meuble suspendu en bois (tiroir sauge), vasque à poser, mitigeur, accessoires.
// ---------------------------------------------------------------------------
export function lavabo(opts = {}) {
  const { largeur: L = 0.8, profondeur: P = 0.48, couleur: c = "bois_clair", facade = "sauge", hauteur: H = 0.85, double = L >= 1.2 } = opts;
  const g = meuble("lavabo", [L, H + 0.35, P], { fixation: "mur" });
  const mb = resoudre(c, matBois);
  const hm = 0.45, y0 = H - 0.15 - hm + 0.15;
  boite(g, L, hm, P, mb, 0, H - hm, 0, { r: 0.01 });
  boite(g, L - 0.03, hm - 0.1, 0.02, resoudre(facade, matLaque), 0, H - hm + 0.03, P / 2, { r: 0.004 });
  boite(g, L * 0.3, 0.015, 0.02, matMetal("#b99a62"), 0, H - 0.1, P / 2 + 0.015, { r: 0.005 });
  const vasques = double ? [-L / 4, L / 4] : [0];
  const vasque = geoTour("vasque", [[0, 0.01], [0.17, 0.0], [0.2, 0.05], [0.205, 0.13], [0.19, 0.13], [0.18, 0.06], [0.0, 0.035]], 20);
  const ch = matChrome();
  for (const xv of vasques) {
    maille(g, vasque, matCeramique("blanc_pur"), xv, H, 0.02, { sz: 0.8 });
    cyl(g, 0.016, 0.28, ch, xv, H, -P / 2 + 0.06, { seg: 8 });
    tige(g, [xv, H + 0.28, -P / 2 + 0.06], [xv, H + 0.28, -P / 2 + 0.2], 0.012, ch, 8);
  }
  cyl(g, 0.03, 0.15, matLaque("terracotta"), L / 2 - 0.08, H, -P / 2 + 0.08, { seg: 10 });
  cyl(g, 0.008, 0.03, ch, L / 2 - 0.08, H + 0.15, -P / 2 + 0.08, { seg: 5 });
  const p = plante({ taille: "mini", espece: "touffe", pot: "blanc", graine: 6 });
  p.position.set(-L / 2 + 0.09, H, -P / 2 + 0.09);
  g.add(p);
  return g;
}

// ---------------------------------------------------------------------------
// WC suspendu avec plaque de commande.
// ---------------------------------------------------------------------------
export function wc(opts = {}) {
  const g = meuble("wc", [0.38, 0.85, 0.55], { fixation: "mur" });
  const mc = matCeramique("blanc_pur");
  const prof = [[0, 0], [0.11, 0.0], [0.17, 0.12], [0.18, 0.2], [0.17, 0.21], [0.0, 0.21]];
  const cuvette = maille(g, geoTour("cuvette", prof, 16), mc, 0, 0.2, 0.06, { sz: 1.3 });
  boite(g, 0.36, 0.22, 0.12, mc, 0, 0.2, -0.2, { r: 0.04 });
  maille(g, geoTour("abattant", [[0.0, 0], [0.175, 0], [0.18, 0.02], [0.0, 0.025]], 16), matCeramique("blanc"), 0, 0.41, 0.06, { sz: 1.3 });
  boite(g, 0.24, 0.16, 0.012, matMat("blanc"), 0, 0.95, -0.27, { r: 0.006 });
  boite(g, 0.09, 0.1, 0.006, matChrome(), -0.05, 0.98, -0.262, { r: 0.008 });
  boite(g, 0.09, 0.1, 0.006, matChrome(), 0.05, 0.98, -0.262, { r: 0.008 });
  // rouleau de papier
  cyl(g, 0.055, 0.1, matTissu("blanc_pur"), 0.32, 0.65, -0.22, { axe: "x", seg: 10 });
  return g;
}

// ---------------------------------------------------------------------------
// Miroir mural rond (cadre bois) ou rectangulaire.
// ---------------------------------------------------------------------------
export function miroir(opts = {}) {
  const { forme = "rond", diametre = 0.6, largeur = 0.6, hauteur_miroir = 0.8, hauteur = 1.55, couleur: c = "bois_clair" } = opts;
  if (forme === "rond") {
    const g = meuble("miroir", [diametre, diametre, 0.04], { fixation: "mur" });
    const r = diametre / 2;
    maille(g, geoTore(r, 0.022, 6, 32), resoudre(c, matBois), 0, hauteur, 0);
    maille(g, geoCyl(r, r, 0.01, 32), matMiroir(), 0, hauteur, -0.005, { rx: Math.PI / 2 });
    return g;
  }
  const g = meuble("miroir", [largeur, hauteur_miroir, 0.03], { fixation: "mur" });
  boite(g, largeur, hauteur_miroir, 0.02, resoudre(c, matBois), 0, hauteur - hauteur_miroir / 2, -0.005, { r: 0.008 });
  boite(g, largeur - 0.05, hauteur_miroir - 0.05, 0.004, matMiroir(), 0, hauteur - hauteur_miroir / 2 + 0.025, 0.006);
  return g;
}

// ---------------------------------------------------------------------------
// Sèche-serviettes (radiateur échelle) avec serviette.
// ---------------------------------------------------------------------------
export function seche_serviettes(opts = {}) {
  const { largeur: L = 0.5, hauteur_appareil: H = 1.2, hauteur = 0.25, couleur: c = "blanc", serviette = "sauge" } = opts;
  const g = meuble("seche_serviettes", [L, H, 0.1], { fixation: "mur", interactif: true, role: "seche_serviettes" });
  const m = c === "noir" ? matMetal("#2c2d30") : matLaque(c);
  for (const s of [-1, 1]) cyl(g, 0.016, H, m, s * (L / 2 - 0.02), hauteur, 0, { seg: 8 });
  const n = 12;
  for (let i = 0; i < n; i++) {
    const y = hauteur + 0.05 + (i / (n - 1)) * (H - 0.1) + (i > 5 ? 0.04 : 0) - 0.02;
    cyl(g, 0.01, L - 0.04, m, 0, y, 0, { axe: "x", seg: 6 });
  }
  // serviette pliée sur une barre
  const ys = hauteur + H * 0.62;
  boite(g, L * 0.75, 0.45, 0.025, matTissu(serviette), 0, ys - 0.45, 0.035, { r: 0.01 });
  boite(g, L * 0.75, 0.3, 0.025, matTissu(serviette), 0, ys - 0.3, -0.03, { r: 0.01 });
  boite(g, L * 0.75, 0.04, 0.085, matTissu(serviette), 0, ys - 0.02, 0.0, { r: 0.018 });
  return g;
}
