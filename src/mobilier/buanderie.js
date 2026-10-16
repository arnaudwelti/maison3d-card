// Buanderie : lave-linge frontal détaillé (interactif), sèche-linge, étagère de buanderie, panier à linge.
//
// Lave-linge : userData = {interactif: true, role: "lave_linge", animations: {tambour: {axe: "z", vitesse: 6}}}
//  - « tambour » : groupe qui tourne autour de son Z local (axe du hublot) ; linge coloré à l'intérieur ;
//  - « hublot »  : groupe porte + vitre ;
//  - « voyant »  : témoin émissif propre (vert quand la machine tourne) ;
//  - « afficheur » : petit écran émissif propre.
// Utilitaires : etatLaveLinge(objet, enMarche) et animerLaveLinge(objet, dt).
import * as THREE from "three";
import { matBois, matTissu, matMat, matMetal, matLaque, matCeramique, matVerre, matEmissif, matChrome, resoudre } from "./materiaux.js";
import { boite, cyl, maille, tige, geo, geoTour, geoTore, geoCyl, geoSphere, geoIco, meuble } from "./outils.js";

const cacheInt = new Map();
function matDedans(c) {
  if (!cacheInt.has(c)) {
    const m = matMetal(c).clone();
    m.side = THREE.BackSide;
    m.userData.partage = true;
    cacheInt.set(c, m);
  }
  return cacheInt.get(c);
}

// Caisse commune lave-linge / sèche-linge (0,60 × 0,85 × 0,60), CREUSE : on voit le tambour par le hublot.
// trou = rayon de l'ouverture de façade (0 = façade pleine), centrée à la hauteur yc.
function caisse(g, L, H, P, couleur, trou = 0, yc = 0.42) {
  const mc = matLaque(couleur);
  const e = 0.015, zf = P / 2 - 0.02;
  const zc = -0.01 - 0.015; // caisson derrière la façade
  const pc = P - 0.05;
  boite(g, L, 0.025, P - 0.02, mc, 0, H - 0.025, -0.01, { r: 0.01 });
  for (const sx of [-1, 1]) boite(g, e, H - 0.045, pc, mc, sx * (L / 2 - e / 2), 0.02, zc, { r: 0.006 });
  boite(g, L - 2 * e, e, pc, matMat("gris"), 0, 0.02, zc);
  boite(g, L - 2 * e, H - 0.045, e, matMat("gris"), 0, 0.02, -P / 2 + 0.02);
  const ff = geo(`facade_ll_${L}_${H}_${trou}_${yc}`, () => {
    const sh = new THREE.Shape();
    const l = L / 2 - 0.008, h0 = 0.028, h1 = H - 0.033;
    sh.moveTo(-l, h0); sh.lineTo(l, h0); sh.lineTo(l, h1); sh.lineTo(-l, h1); sh.lineTo(-l, h0);
    if (trou) { const t = new THREE.Path(); t.absarc(0, yc, trou, 0, Math.PI * 2, true); sh.holes.push(t); }
    return new THREE.ExtrudeGeometry(sh, { depth: 0.022, bevelEnabled: true, bevelThickness: 0.006, bevelSize: 0.007, bevelSegments: 1, curveSegments: 20 });
  });
  maille(g, ff, mc, 0, 0, zf - 0.028);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) cyl(g, 0.02, 0.02, matMat("anthracite"), sx * (L / 2 - 0.06), 0, sz * (P / 2 - 0.08), { seg: 6 });
  // bandeau de commandes
  boite(g, L - 0.02, 0.012, 0.004, matMat("gris_clair"), 0, H - 0.135, zf + 0.001);
  // bac à lessive
  boite(g, 0.2, 0.085, 0.012, mc, -L / 2 + 0.12, H - 0.115, zf + 0.004, { r: 0.004 });
  boite(g, 0.08, 0.012, 0.006, matMat("gris_clair"), -L / 2 + 0.12, H - 0.06, zf + 0.012);
  // sélecteur rotatif
  cyl(g, 0.035, 0.025, matChrome(), 0.17, H - 0.075, zf + 0.012, { axe: "z", seg: 16 });
  boite(g, 0.006, 0.026, 0.004, matMat("anthracite"), 0.17, H - 0.088, zf + 0.026);
  return zf;
}

// ---------------------------------------------------------------------------
// Lave-linge frontal.
// ---------------------------------------------------------------------------
export function lave_linge(opts = {}) {
  const { largeur: L = 0.6, hauteur: H = 0.85, profondeur: P = 0.6, couleur: c = "blanc_pur", linge = ["corail", "bleu_ciel", "moutarde", "menthe"] } = opts;
  const g = meuble("lave_linge", [L, H, P], {
    fixation: "sol",
    interactif: true,
    role: "lave_linge",
    animations: { tambour: { axe: "z", vitesse: 6 }, voyant: "emissive" },
  });
  const yc = 0.42, R = 0.165;
  const zf = caisse(g, L, H, P, c, R + 0.012, yc);
  // afficheur et voyant
  const af = maille(g, geo("afficheur_ll", () => new THREE.PlaneGeometry(0.11, 0.045)), matEmissif("#1d2226", { roughness: 0.25 }), 0.02, H - 0.075, zf + 0.005);
  af.name = "afficheur";
  const vo = maille(g, geoSphere(0.009, 8, 6), matEmissif("#4d5256", { roughness: 0.3 }), 0.1, H - 0.06, zf + 0.006);
  vo.name = "voyant";
  for (let i = 0; i < 3; i++) cyl(g, 0.008, 0.006, matMat("gris"), -0.03 + i * 0.03, H - 0.11, zf + 0.004, { axe: "z", seg: 8 });

  // tambour : groupe pivot au centre du hublot, tourne autour de Z local
  const tambour = new THREE.Group();
  tambour.name = "tambour";
  tambour.position.set(0, yc, zf - 0.17);
  maille(tambour, geoCyl(R + 0.01, R + 0.01, 0.3, 18, true), matDedans("#c3c7ca"), 0, 0, 0, { rx: Math.PI / 2 });
  maille(tambour, geoCyl(R + 0.01, R + 0.01, 0.01, 18), matMetal("#aeb3b7"), 0, 0, -0.15, { rx: Math.PI / 2 });
  // aubes (3) et motif de perforations sur le fond : rendent la rotation visible
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2;
    const p = maille(tambour, geo("aube", () => new THREE.BoxGeometry(0.05, 0.04, 0.26)), matMetal("#9ea3a8"), Math.cos(a) * (R - 0.01), Math.sin(a) * (R - 0.01), 0);
    p.rotation.z = a + Math.PI / 2;
  }
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    maille(tambour, geoCyl(0.012, 0.012, 0.004, 6), matMat("#6f7478"), Math.cos(a) * 0.09, Math.sin(a) * 0.09, -0.143, { rx: Math.PI / 2 });
  }
  // linge coloré tassé en bas, décentré
  linge.forEach((lc, i) => {
    const a = -Math.PI / 2 + (i - (linge.length - 1) / 2) * 0.55;
    maille(tambour, geoIco(0.06 + (i % 2) * 0.012, 1), matTissu(lc), Math.cos(a) * (R - 0.06), Math.sin(a) * (R - 0.06), -0.04 + (i % 2) * 0.05, { sx: 1.25, sz: 1.3 });
  });
  g.add(tambour);
  // soufflet (joint) sombre
  maille(g, geoTore(R + 0.008, 0.022, 4, 20), matMat("#3d4144"), 0, yc, zf - 0.005);
  // hublot : porte articulée (charnière à gauche) avec anneau, vitre bombée teintée et poignée
  const hublot = new THREE.Group();
  hublot.name = "hublot";
  hublot.position.set(-0.2, yc, zf + 0.02);
  const porte = new THREE.Group();
  porte.position.set(0.2, 0, 0);
  maille(porte, geoTore(0.2, 0.03, 6, 24), matLaque("blanc"), 0, 0, 0);
  maille(porte, geoTore(0.17, 0.016, 4, 24), matChrome(), 0, 0, 0.022);
  maille(porte, geoTour("vitre_hublot", [[0, 0.045], [0.08, 0.04], [0.14, 0.02], [0.175, 0]], 24), matVerre("#9fc0cc", 0.3), 0, 0, 0, { rx: Math.PI / 2 });
  boite(porte, 0.035, 0.08, 0.03, matMat("gris_clair"), 0.2, -0.04, 0.0, { r: 0.012 });
  hublot.add(porte);
  g.add(hublot);
  return g;
}

// Pilotage du lave-linge (pour etats.js) : voyant vert et afficheur allumés en marche.
export function etatLaveLinge(objet, enMarche, { couleur = "#5fd38a" } = {}) {
  objet.traverse((o) => {
    if ((o.name === "voyant" || o.name === "afficheur") && o.material) {
      o.material.emissive.set(o.name === "voyant" ? couleur : "#7fd9ff");
      o.material.emissiveIntensity = enMarche ? (o.name === "voyant" ? 2.5 : 0.9) : 0;
    }
  });
  objet.userData.enMarche = !!enMarche;
  return objet;
}

export function animerLaveLinge(objet, dt) {
  if (!objet.userData.enMarche) return false;
  const t = objet.getObjectByName("tambour");
  if (t) t.rotation.z += dt * (objet.userData.animations?.tambour?.vitesse ?? 6);
  return true;
}

// ---------------------------------------------------------------------------
// Sèche-linge (même caisse, hublot plus large et opaque, bac à eau).
// ---------------------------------------------------------------------------
export function seche_linge(opts = {}) {
  const { largeur: L = 0.6, hauteur: H = 0.85, profondeur: P = 0.6, couleur: c = "blanc_pur" } = opts;
  const g = meuble("seche_linge", [L, H, P], { fixation: "sol", interactif: true, role: "seche_linge", animations: { voyant: "emissive" } });
  const zf = caisse(g, L, H, P, c);
  const vo = maille(g, geoSphere(0.009, 8, 6), matEmissif("#4d5256", { roughness: 0.3 }), 0.1, H - 0.06, zf + 0.006);
  vo.name = "voyant";
  const hublot = new THREE.Group();
  hublot.name = "hublot";
  hublot.position.set(0, 0.42, zf + 0.02);
  maille(hublot, geoTore(0.2, 0.032, 8, 28), matLaque("gris_clair"), 0, 0, 0);
  maille(hublot, geoCyl(0.19, 0.19, 0.02, 28), matVerre("#5b6d78", 0.75), 0, 0, 0.0, { rx: Math.PI / 2 });
  maille(hublot, geoCyl(0.11, 0.11, 0.01, 24), matMat("#4a5258"), 0, 0, -0.012, { rx: Math.PI / 2 });
  g.add(hublot);
  return g;
}

// ---------------------------------------------------------------------------
// Étagère de buanderie : montants bois, paniers en osier, flacons, piles de serviettes.
// ---------------------------------------------------------------------------
export function etagere_buanderie(opts = {}) {
  const { largeur: L = 0.9, hauteur: H = 1.8, profondeur: P = 0.4, couleur: c = "bois_clair" } = opts;
  const g = meuble("etagere_buanderie", [L, H, P], { fixation: "sol" });
  const mb = resoudre(c, matBois), mm = matMetal("#2c2d30");
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) boite(g, 0.03, H, 0.03, mm, sx * (L / 2 - 0.015), 0, sz * (P / 2 - 0.015));
  const niveaux = [0.08, 0.5, 0.95, 1.4, H - 0.03];
  for (const y of niveaux) boite(g, L, 0.025, P, mb, 0, y, 0);
  const osier = matBois("bois_miel");
  // niveau 1 : deux paniers
  for (const sx of [-1, 1]) {
    boite(g, L / 2 - 0.06, 0.26, P - 0.06, osier, sx * L / 4, 0.105, 0, { r: 0.02 });
    boite(g, L / 2 - 0.1, 0.012, P - 0.1, matMat("#9b7a52"), sx * L / 4, 0.36, 0);
  }
  // niveau 2 : flacons de lessive
  const flacons = [["bleu_ciel", 0.1, 0.24], ["menthe", 0.08, 0.2], ["blanc_pur", 0.09, 0.22], ["corail", 0.06, 0.16]];
  flacons.forEach(([fc, l, h], i) => {
    boite(g, l, h, 0.08, matLaque(fc), -L / 2 + 0.12 + i * 0.13, 0.525, 0.02, { r: 0.015 });
    cyl(g, 0.018, 0.03, matLaque("blanc"), -L / 2 + 0.12 + i * 0.13, 0.525 + h, 0.02, { seg: 8 });
  });
  // niveau 3 : serviettes pliées
  for (let k = 0; k < 2; k++) ["blanc_pur", "sauge", "creme", "blanc_pur"].forEach((tc, i) => boite(g, 0.3, 0.055, P - 0.08, matTissu(tc), -L / 4 + k * L / 2, 0.975 + i * 0.055, 0, { r: 0.02 }));
  // niveau 4 : panier et bocal de pinces
  boite(g, 0.36, 0.2, P - 0.08, osier, -L / 4, 1.425, 0, { r: 0.02 });
  cyl(g, 0.06, 0.16, matVerre("#e8f0ec", 0.5), L / 4, 1.425, 0, { seg: 10 });
  return g;
}

// ---------------------------------------------------------------------------
// Panier à linge en osier (couvercle entrouvert, linge qui dépasse).
// ---------------------------------------------------------------------------
export function panier_linge(opts = {}) {
  const { hauteur: H = 0.6, diametre = 0.42, couleur: c = "bois_miel" } = opts;
  const g = meuble("panier_linge", [diametre, H, diametre], { fixation: "sol" });
  const r = diametre / 2;
  const mo = resoudre(c, matBois);
  maille(g, geoTour(`panier_${Math.round(H * 100)}`, [[0, 0], [r * 0.82, 0], [r, H * 0.95], [r * 1.02, H]], 16), mo, 0, 0, 0);
  for (const y of [0.15, 0.35, 0.55]) if (y < H) maille(g, geoTore(r * (0.84 + (y / H) * 0.16), 0.008, 3, 20), matBois("bois_noyer"), 0, y * H / 0.6, 0, { rx: Math.PI / 2 });
  maille(g, geoIco(r * 0.6, 1), matTissu("bleu_ciel"), -0.03, H - 0.02, 0.02, { sy: 0.5 });
  maille(g, geoIco(r * 0.45, 1), matTissu("corail"), 0.07, H + 0.02, -0.03, { sy: 0.5 });
  const couv = new THREE.Group();
  couv.position.set(0, H, -r);
  couv.rotation.x = -0.6;
  maille(couv, geoCyl(r * 1.04, r * 1.04, 0.025, 16), mo, 0, 0.0125, r);
  g.add(couv);
  return g;
}
