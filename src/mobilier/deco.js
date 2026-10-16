// Décoration : plantes, coussins, cadres, vase, horloge murale, rideaux, petit tapis.
// Objets muraux (cadre, horloge, rideaux) : origine au sol, dos contre le mur en z = −p/2,
// `hauteur` = hauteur du centre (ou du haut pour les rideaux).
import * as THREE from "three";
import { matBois, matTissu, matMat, matMetal, matCeramique, matFeuillage, matAffiche, matMotif, matVerre, couleur, resoudre } from "./materiaux.js";
import { boite, cyl, maille, geo, geoBoite, geoTour, geoIco, geoCyl, geoPlan, geoSphere, meuble, tige } from "./outils.js";

// ---------------------------------------------------------------------------
// Coussin moelleux (pavé très arrondi). Réutilisé par le salon et les chambres.
// ---------------------------------------------------------------------------
export function coussinMesh(parent, taille, m, x, y, z, o = {}) {
  const ep = o.epaisseur ?? taille * 0.3;
  const me = maille(parent, geoBoite(taille, taille, ep, ep * 0.48, 2), m, x, y + taille / 2, z, o);
  return me;
}

export function coussin(opts = {}) {
  const { taille = 0.45, couleur: c = "terracotta", motif = null, fond, trace } = opts;
  const g = meuble("coussin", [taille, taille, taille * 0.3], { fixation: "pose" });
  const m = motif ? matMotif(motif, fond ?? c, trace ?? "blanc_pur") : resoudre(c, matTissu);
  coussinMesh(g, taille, m, 0, 0, 0, { rx: -0.12 });
  return g;
}

// ---------------------------------------------------------------------------
// Plantes en pot. taille : "mini" (étagère), "petite", "moyenne", "grande".
// espece : "touffe" (feuillage rond), "ficus" (tronc + houppier), "cactus", "monstera" (grandes feuilles).
// ---------------------------------------------------------------------------
const TAILLES = { mini: 0.22, petite: 0.45, moyenne: 0.85, grande: 1.5 };
const POTS = { terre_cuite: () => matCeramique("terre_cuite"), blanc: () => matCeramique("blanc"), sauge: () => matCeramique("sauge"), anthracite: () => matCeramique("anthracite"), osier: () => matBois("bois_miel") };

export function plante(opts = {}) {
  const { taille = "moyenne", espece = taille === "grande" ? "ficus" : taille === "mini" ? "touffe" : "monstera", pot = taille === "grande" ? "osier" : "terre_cuite", graine = 1 } = opts;
  const H = typeof taille === "number" ? taille : TAILLES[taille] ?? 0.85;
  const rp = Math.max(0.055, H * 0.15);
  const hp = Math.max(0.07, H * 0.26);
  const g = meuble("plante", [rp * 3, H, rp * 3], { fixation: "sol" });
  const mp = (POTS[pot] || POTS.terre_cuite)();
  maille(g, geoTour(`pot_${Math.round(rp * 1000)}_${Math.round(hp * 1000)}`, [[0, 0], [rp * 0.78, 0], [rp, hp * 0.92], [rp * 1.06, hp * 0.95], [rp * 1.04, hp], [rp * 0.95, hp]], 12), mp, 0, 0, 0);
  cyl(g, rp * 0.94, 0.01, matMat("#5a4434"), 0, hp - 0.015, 0, { seg: 10 });
  const vert = matFeuillage("feuillage"), fonce = matFeuillage("feuillage_fonce"), clair = matFeuillage("feuillage_clair");
  let s = graine * 9301 + 49297;
  const r = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
  if (espece === "cactus") {
    const mc = matFeuillage("#6f9a5c");
    maille(g, geoSphere(rp * 0.55, 8, 6), mc, 0, hp + (H - hp) * 0.45, 0, { sy: (H - hp) / (rp * 1.1) });
    maille(g, geoSphere(rp * 0.3, 7, 5), mc, rp * 0.5, hp + (H - hp) * 0.55, 0, { sy: 1.6 });
  } else if (espece === "ficus") {
    const tronc = matBois("bois_noyer");
    tige(g, [0, hp, 0], [0.03, H * 0.62, 0.01], Math.max(0.012, H * 0.012), tronc, 5);
    tige(g, [0.01, H * 0.4, 0], [-0.12 * H / 1.5, H * 0.72, 0.05], 0.01, tronc, 5);
    const blobs = [[0, 0.82, 0, 0.26], [-0.14, 0.72, 0.06, 0.2], [0.13, 0.7, -0.04, 0.21], [0.03, 0.66, 0.14, 0.18], [-0.05, 0.95, -0.05, 0.17], [0.1, 0.9, 0.08, 0.15]];
    blobs.forEach(([x, y, z, rr], i) => maille(g, geoIco(rr * H / 1.5, 1), [vert, fonce, clair][i % 3], x * H / 1.2, y * H, z * H / 1.2, { ry: r() * 6 }));
  } else if (espece === "touffe") {
    // dôme de petites boules de feuillage autour d'un cœur
    const hf = H - hp;
    const det = H < 0.3 ? 0 : 1; // les mini-plantes restent très légères
    maille(g, geoIco(hf * 0.36, det), fonce, 0, hp + hf * 0.42, 0);
    const n = 7;
    for (let i = 0; i < n; i++) {
      const a = (i / n) * 6.283 + r() * 0.4;
      const rr = hf * (0.2 + r() * 0.07);
      const haut = i === n - 1;
      maille(g, geoIco(rr, det), [vert, clair, vert][i % 3], haut ? 0 : Math.cos(a) * hf * 0.3, hp + (haut ? hf * 0.72 : hf * (0.3 + r() * 0.25)), haut ? 0 : Math.sin(a) * hf * 0.3, { ry: r() * 6 });
    }
  } else {
    // monstera : feuilles plates inclinées sur tiges
    const feuille = geo("feuille_monstera", () => {
      const sh = new THREE.Shape();
      sh.moveTo(0, 0);
      sh.bezierCurveTo(0.5, 0.15, 0.55, 0.75, 0, 1);
      sh.bezierCurveTo(-0.55, 0.75, -0.5, 0.15, 0, 0);
      const gg = new THREE.ShapeGeometry(sh, 4);
      gg.rotateX(-Math.PI / 2);
      return gg;
    });
    const mfe = matFeuillageDouble();
    const tigeM = matFeuillage("feuillage_fonce");
    const n = 7;
    for (let i = 0; i < n; i++) {
      const a = (i / n) * 6.283 + r() * 0.5;
      const L = (H - hp) * (0.55 + r() * 0.4);
      const inc = 0.15 + r() * 0.4;
      const tx = Math.cos(a) * L * 0.45, tz = Math.sin(a) * L * 0.45, ty = hp + L * (0.55 + r() * 0.35);
      tige(g, [0, hp, 0], [tx, ty, tz], 0.006, tigeM, 4);
      const sc = (H - hp) * (0.42 + r() * 0.18);
      const f = maille(g, feuille, mfe, tx, ty, tz, { sx: sc, sy: sc, sz: sc });
      f.rotation.set(0, -a - Math.PI / 2, 0);
      f.rotateX(-inc);
    }
  }
  return g;
}

let _mfd;
function matFeuillageDouble() {
  if (!_mfd) {
    _mfd = matFeuillage("feuillage").clone();
    _mfd.side = THREE.DoubleSide;
    _mfd.flatShading = false;
    _mfd.userData.partage = true;
  }
  return _mfd;
}

// ---------------------------------------------------------------------------
// Cadre mural (affiche procédurale). variante : montagne, arc_en_ciel, fusee, baleine, abstrait, feuille.
// ---------------------------------------------------------------------------
export function cadre(opts = {}) {
  const { largeur = 0.5, hauteur_cadre = 0.65, hauteur = 1.5, variante = "abstrait", couleur: c = "bois_clair", passe_partout = true } = opts;
  const g = meuble("cadre", [largeur, hauteur_cadre, 0.03], { fixation: "mur" });
  const y0 = hauteur - hauteur_cadre / 2;
  const mc = c === "noir" || c === "blanc" ? matMat(c) : resoudre(c, matBois);
  const e = 0.025;
  boite(g, largeur, e, 0.03, mc, 0, y0, 0);
  boite(g, largeur, e, 0.03, mc, 0, y0 + hauteur_cadre - e, 0);
  boite(g, e, hauteur_cadre - 2 * e, 0.03, mc, -largeur / 2 + e / 2, y0 + e, 0);
  boite(g, e, hauteur_cadre - 2 * e, 0.03, mc, largeur / 2 - e / 2, y0 + e, 0);
  const pp = passe_partout ? 0.045 : 0;
  if (pp) boite(g, largeur - 2 * e, hauteur_cadre - 2 * e, 0.006, matMat("blanc_pur"), 0, y0 + e, -0.006);
  maille(g, geoPlan(largeur - 2 * e - 2 * pp, hauteur_cadre - 2 * e - 2 * pp), matAffiche(variante), 0, hauteur, -0.002);
  return g;
}

// ---------------------------------------------------------------------------
// Vase avec branchages (pose sur un meuble).
// ---------------------------------------------------------------------------
export function vase(opts = {}) {
  const { hauteur = 0.3, couleur: c = "sauge", branches = true } = opts;
  const g = meuble("vase", [0.16, hauteur, 0.16], { fixation: "pose" });
  const h = hauteur * (branches ? 0.55 : 1);
  maille(g, geoTour(`vase_${Math.round(h * 1000)}`, [[0, 0], [0.05, 0], [0.075, h * 0.35], [0.06, h * 0.75], [0.03, h * 0.92], [0.035, h], [0.03, h]], 14), resoudre(c, matCeramique), 0, 0, 0);
  if (branches) {
    const mb = matBois("bois_noyer"), mf = matFeuillage("sauge");
    for (const [dx, dz, hh] of [[0.07, 0.02, 1], [-0.06, 0.03, 0.9], [0.0, -0.07, 0.8]]) {
      tige(g, [0, h * 0.8, 0], [dx * hauteur * 3, hauteur * hh, dz * hauteur * 3], 0.004, mb, 3);
      maille(g, geoIco(0.03, 0), mf, dx * hauteur * 3, hauteur * hh - 0.02, dz * hauteur * 3, { sy: 1.6 });
    }
  }
  return g;
}

// ---------------------------------------------------------------------------
// Horloge murale.
// ---------------------------------------------------------------------------
export function horloge(opts = {}) {
  const { diametre = 0.32, hauteur = 1.9, couleur: c = "bois_clair" } = opts;
  const g = meuble("horloge", [diametre, diametre, 0.04], { fixation: "mur" });
  const r = diametre / 2;
  const disque = maille(g, geoCyl(r, r, 0.03, 28), resoudre(c, matBois), 0, hauteur, 0, { rx: Math.PI / 2 });
  maille(g, geoCyl(r * 0.86, r * 0.86, 0.004, 28), matMat("blanc_pur"), 0, hauteur, 0.016, { rx: Math.PI / 2 });
  const noir = matMat("anthracite");
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2;
    boite(g, 0.008, i % 3 ? 0.012 : 0.025, 0.003, noir, Math.sin(a) * r * 0.74, hauteur - (i % 3 ? 0.006 : 0.0125) + Math.cos(a) * r * 0.74, 0.019, { rz: -a });
  }
  const aiguille = (L, larg, a) => {
    const p = new THREE.Group();
    p.position.set(0, hauteur, 0.022);
    p.rotation.z = -a;
    boite(p, larg, L, 0.003, noir, 0, 0, 0);
    g.add(p);
    return p;
  };
  aiguille(r * 0.5, 0.012, deg2(300));
  aiguille(r * 0.72, 0.008, deg2(60));
  cyl(g, 0.012, 0.01, matMetal("#b99a62"), 0, hauteur, 0.025, { axe: "z", seg: 8 });
  return g;
}
const deg2 = (d) => (d * Math.PI) / 180;

// ---------------------------------------------------------------------------
// Rideaux (deux pans plissés et une tringle). largeur = largeur de la fenêtre habillée.
// ---------------------------------------------------------------------------
export function rideaux(opts = {}) {
  const { largeur = 1.4, hauteur = 2.4, couleur: c = "lin", ouverture = 0.7 } = opts;
  const g = meuble("rideaux", [largeur + 0.3, hauteur, 0.1], { fixation: "mur" });
  const Lt = largeur + 0.3;
  cyl(g, 0.012, Lt, matMetal("#3a3b3d"), 0, hauteur, 0.03, { axe: "x", seg: 6 });
  const pan = Lt / 2 * (1 - ouverture * 0.6);
  const hr = hauteur - 0.03;
  const geoPan = geo(`pan_${Math.round(pan * 1000)}_${Math.round(hr * 1000)}`, () => {
    const plis = Math.max(4, Math.round(pan / 0.09));
    const gg = new THREE.PlaneGeometry(pan, hr, plis * 2, 1);
    const p = gg.attributes.position;
    for (let i = 0; i < p.count; i++) p.setZ(i, Math.sin((p.getX(i) / pan + 0.5) * plis * Math.PI) * 0.03);
    gg.computeVertexNormals();
    return gg;
  });
  const mt = matTissuDouble(c);
  maille(g, geoPan, mt, -Lt / 2 + pan / 2, hr / 2, 0.04);
  maille(g, geoPan, mt, Lt / 2 - pan / 2, hr / 2, 0.04);
  return g;
}

const cacheTD = new Map();
function matTissuDouble(c) {
  if (!cacheTD.has(c)) {
    const m = matTissu(c).clone();
    m.side = THREE.DoubleSide;
    m.userData.partage = true;
    cacheTD.set(c, m);
  }
  return cacheTD.get(c);
}

// ---------------------------------------------------------------------------
// Petit tapis (rond ou rectangulaire, bord contrasté).
// ---------------------------------------------------------------------------
export function petit_tapis(opts = {}) {
  const { forme = "rond", diametre = 1.0, largeur = 1.2, profondeur = 0.8, couleur: c = "creme", bordure = "moutarde" } = opts;
  if (forme === "rond") {
    const g = meuble("petit_tapis", [diametre, 0.012, diametre], { fixation: "sol" });
    const r = diametre / 2;
    cyl(g, r, 0.008, resoudre(bordure, matTissu), 0, 0, 0, { seg: 32 });
    cyl(g, r - 0.06, 0.003, resoudre(c, matTissu), 0, 0.008, 0, { seg: 32 });
    cyl(g, r * 0.45, 0.002, resoudre(bordure, matTissu), 0, 0.0105, 0, { seg: 24 });
    cyl(g, r * 0.4, 0.002, resoudre(c, matTissu), 0, 0.0115, 0, { seg: 24 });
    return g;
  }
  const g = meuble("petit_tapis", [largeur, 0.012, profondeur], { fixation: "sol" });
  boite(g, largeur, 0.008, profondeur, resoudre(bordure, matTissu), 0, 0, 0);
  boite(g, largeur - 0.1, 0.003, profondeur - 0.1, resoudre(c, matTissu), 0, 0.008, 0);
  return g;
}
