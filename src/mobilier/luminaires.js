// Luminaires. Chaque luminaire :
//  - porte userData = {interactif: true, role: "lampe", animations: {}} ;
//  - possède un ou plusieurs sous-objets nommés « ampoule » (MeshStandardMaterial émissif PROPRE, éteint par défaut) ;
//  - possède parfois un Sprite nommé « halo » (additif, invisible éteint) : ce n'est PAS une lumière three.js.
// allumer()/eteindre() ne modifient que l'émissif et le halo : le nombre de lumières de la scène ne change jamais.
// Les luminaires de plafond prennent l'option `plafond` (hauteur sous plafond, 2,50 m) : l'origine reste au sol.
import * as THREE from "three";
import { matEmissif, matHalo, matMetal, matBois, matMat, matCeramique, matTissu, couleur, resoudre } from "./materiaux.js";
import { boite, cyl, maille, geoTour, geoSphere, geoCyl, geoTore, meuble, tige, geo } from "./outils.js";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";

const CHAUD = "#ffd29a";

function lampe(type, dims, extra = {}) {
  return meuble(type, dims, { interactif: true, role: "lampe", animations: { ampoule: "emissive" }, ...extra });
}

function ampoule(parent, g, base, x, y, z, o = {}) {
  const m = maille(parent, g, matEmissif(base), x, y, z, o);
  m.name = "ampoule";
  return m;
}

function halo(parent, taille, x, y, z) {
  const s = new THREE.Sprite(matHalo());
  s.name = "halo";
  s.scale.set(taille, taille, 1);
  s.position.set(x, y, z);
  s.visible = false;
  s.renderOrder = 2;
  parent.add(s);
  return s;
}

// ---------------------------------------------------------------------------
// Pilotage (utilisé par etats.js du moteur). intensite : 0..1 (brightness / 255).
// ---------------------------------------------------------------------------
export function allumer(objet, { couleur: c = CHAUD, intensite = 1 } = {}) {
  const col = new THREE.Color(Array.isArray(c) ? `rgb(${c[0]},${c[1]},${c[2]})` : couleur(c));
  const k = Math.max(0, Math.min(1, intensite));
  objet.traverse((o) => {
    if (o.name === "ampoule" && o.material) {
      o.material.emissive.copy(col);
      o.material.emissiveIntensity = 0.5 + 2.3 * k;
    } else if (o.name === "halo" && o.material) {
      o.material.color.copy(col);
      o.material.opacity = 0.25 + 0.55 * k;
      o.visible = true;
    }
  });
  objet.userData.allume = true;
  return objet;
}

export function eteindre(objet) {
  objet.traverse((o) => {
    if (o.name === "ampoule" && o.material) o.material.emissiveIntensity = 0;
    else if (o.name === "halo") o.visible = false;
  });
  objet.userData.allume = false;
  return objet;
}

// ---------------------------------------------------------------------------
// Plafonnier : disque plat et diffuseur opalin bombé.
// ---------------------------------------------------------------------------
export function plafonnier(opts = {}) {
  const { diametre = 0.38, plafond = 2.5, couleur: c = "blanc" } = opts;
  const r = diametre / 2;
  const g = lampe("plafonnier", [diametre, 0.12, diametre], { fixation: "plafond" });
  cyl(g, r, 0.025, resoudre(c, matMat), 0, plafond - 0.025, 0, { seg: 20 });
  const dome = geoTour(`dome_${r}`, [[0.0, -0.085], [r * 0.55, -0.075], [r * 0.85, -0.05], [r * 0.95, -0.02], [r * 0.95, 0]], 20);
  ampoule(g, dome, "#f7f3ea", 0, plafond - 0.025, 0);
  halo(g, diametre * 3, 0, plafond - 0.08, 0);
  return g;
}

// ---------------------------------------------------------------------------
// Suspension : style « cloche » (abat-jour métal ou bois), « globe » (verre opalin) ou « rotin ».
// ---------------------------------------------------------------------------
export function suspension(opts = {}) {
  const { plafond = 2.5, longueur = 0.75, style = "cloche", diametre = 0.36, couleur: c = style === "rotin" ? "bois_miel" : "sauge_fonce" } = opts;
  const r = diametre / 2;
  const g = lampe("suspension", [diametre, longueur + 0.3, diametre], { fixation: "plafond" });
  const yb = plafond - longueur; // haut de l'abat-jour
  cyl(g, 0.05, 0.03, matMat("blanc"), 0, plafond - 0.03, 0, { seg: 12 });
  cyl(g, 0.004, longueur, matMat("noir"), 0, yb, 0, { seg: 4 });
  if (style === "globe") {
    cyl(g, 0.025, 0.04, matMetal("#b9a37a"), 0, yb - 0.04, 0, { seg: 10 });
    ampoule(g, geoSphere(r, 16, 12), "#f6f2ea", 0, yb - 0.04 - r * 0.95, 0);
    halo(g, diametre * 3, 0, yb - 0.04 - r, 0);
  } else {
    const prof =
      style === "rotin"
        ? [[0.02, 0], [r * 0.55, -0.02], [r * 0.9, -r * 0.45], [r, -r * 0.9], [r * 0.98, -r * 0.95]]
        : [[0.025, 0], [0.06, -0.01], [r * 0.45, -r * 0.35], [r * 0.85, -r * 0.75], [r, -r * 0.95], [r * 0.99, -r]];
    const mat = style === "rotin" ? matBois(c) : resoudre(c, matMat);
    const abat = maille(g, geoTour(`abat_${style}_${r}`, prof, 18), mat, 0, yb, 0);
    abat.material = mat;
    // doublure intérieure claire (face arrière) pour que la cloche se lise de dessous
    const dbl = maille(g, abat.geometry, matMat(style === "rotin" ? "creme" : "blanc"), 0, yb - 0.003, 0, { sx: 0.985, sz: 0.985 });
    dbl.material = matInterieur(style === "rotin" ? "creme" : "blanc");
    ampoule(g, geoSphere(0.045, 10, 8), "#fff6e6", 0, yb - r * 0.55, 0);
    halo(g, diametre * 2.6, 0, yb - r * 0.75, 0);
  }
  return g;
}

const cacheInt = new Map();
function matInterieur(c) {
  if (!cacheInt.has(c)) {
    const m = matMat(c).clone();
    m.side = THREE.BackSide;
    m.userData.partage = true;
    cacheInt.set(c, m);
  }
  return cacheInt.get(c);
}

// ---------------------------------------------------------------------------
// Lot de spots encastrés (une seule « ampoule » fusionnée pour tout le lot).
// disposition : "ligne" (le long de X) ou "grille" (colonnes × rangées).
// ---------------------------------------------------------------------------
export function spots(opts = {}) {
  const { nombre = 4, disposition = "ligne", colonnes = 2, espacement = 1.0, plafond = 2.5, diametre = 0.085 } = opts;
  const pos = [];
  if (disposition === "grille") {
    const rangs = Math.ceil(nombre / colonnes);
    for (let i = 0; i < nombre; i++) {
      const cI = i % colonnes, rI = Math.floor(i / colonnes);
      pos.push([(cI - (colonnes - 1) / 2) * espacement, (rI - (rangs - 1) / 2) * espacement]);
    }
  } else for (let i = 0; i < nombre; i++) pos.push([(i - (nombre - 1) / 2) * espacement, 0]);
  const lx = Math.max(...pos.map((p) => Math.abs(p[0]))) * 2 + diametre;
  const lz = Math.max(...pos.map((p) => Math.abs(p[1]))) * 2 + diametre;
  const g = lampe("spots", [lx, 0.02, lz], { fixation: "plafond", nombre });
  const r = diametre / 2;
  const bagues = [], disques = [];
  for (const [x, z] of pos) {
    bagues.push(geoTore(r, 0.008, 4, 14).clone().rotateX(Math.PI / 2).translate(x, plafond - 0.006, z));
    disques.push(geoCyl(r * 0.8, r * 0.8, 0.01, 12).clone().translate(x, plafond - 0.012, z));
  }
  const mb = new THREE.Mesh(mergeGeometries(bagues), matMetal("#e6e6e3"));
  g.add(mb);
  const ma = new THREE.Mesh(mergeGeometries(disques), matEmissif("#fbf8f0"));
  ma.name = "ampoule";
  g.add(ma);
  return g;
}

// ---------------------------------------------------------------------------
// Lampadaire : « abat_jour » (droit, tissu) ou « arc » (arceau laiton et globe).
// L'abat-jour en tissu est l'« ampoule » : il s'illumine quand la lampe est allumée.
// ---------------------------------------------------------------------------
export function lampadaire(opts = {}) {
  const { hauteur = 1.6, style = "abat_jour", couleur: c = "lin" } = opts;
  if (style === "arc") {
    const g = lampe("lampadaire", [1.2, 1.95, 0.35], { fixation: "sol" });
    const laiton = matMetal("#b99a62");
    cyl(g, 0.15, 0.04, matMat("anthracite"), -0.45, 0, 0, { seg: 20, r: 0 });
    const pts = [];
    for (let i = 0; i <= 10; i++) {
      const t = i / 10, a = t * Math.PI * 0.62;
      pts.push(new THREE.Vector3(-0.45 + Math.sin(a) * 0.85, 0.04 + Math.sin(Math.min(1, t * 1.25) * Math.PI / 2) * 1.75 + (t > 0.8 ? -(t - 0.8) * 0.9 : 0), 0));
    }
    const courbe = new THREE.CatmullRomCurve3(pts);
    g.add(new THREE.Mesh(geo(`arc_lamp`, () => new THREE.TubeGeometry(courbe, 20, 0.013, 5)), laiton));
    const bout = pts[10];
    const prof = [[0.02, 0], [0.08, -0.04], [0.16, -0.14], [0.17, -0.16]];
    maille(g, geoTour("arc_abat", prof, 18), matMetal("#b99a62"), bout.x, bout.y, 0);
    maille(g, geoTour("arc_abat", prof, 18), matInterieur("blanc"), bout.x, bout.y - 0.003, 0, { sx: 0.98, sz: 0.98 });
    ampoule(g, geoSphere(0.05, 10, 8), "#fff6e6", bout.x, bout.y - 0.1, 0);
    halo(g, 0.7, bout.x, bout.y - 0.14, 0);
    return g;
  }
  const g = lampe("lampadaire", [0.42, hauteur, 0.42], { fixation: "sol" });
  cyl(g, 0.14, 0.025, matMetal("#3a3b3d"), 0, 0, 0, { seg: 18 });
  cyl(g, 0.012, hauteur - 0.3, matMetal("#b99a62"), 0, 0.025, 0, { seg: 6 });
  const abat = geoTour("abat_lampadaire", [[0.2, 0], [0.15, 0.32]], 18);
  const a = ampoule(g, abat, couleur(c), 0, hauteur - 0.34, 0);
  a.material.side = THREE.DoubleSide;
  halo(g, 1.1, 0, hauteur - 0.2, 0);
  return g;
}

// ---------------------------------------------------------------------------
// Lampe de chevet : pied céramique galbé et abat-jour tissu (= ampoule).
// ---------------------------------------------------------------------------
export function lampe_chevet(opts = {}) {
  const { hauteur = 0.42, couleur: c = "terracotta", abat_jour = "lin" } = opts;
  const g = lampe("lampe_chevet", [0.26, hauteur, 0.26], { fixation: "pose" });
  const hp = hauteur * 0.55;
  maille(g, geoTour(`pied_chevet_${hp}`, [[0, 0], [0.06, 0], [0.085, hp * 0.35], [0.07, hp * 0.75], [0.025, hp * 0.95], [0.02, hp]], 14), resoudre(c, matCeramique), 0, 0, 0);
  cyl(g, 0.006, hauteur * 0.2, matMetal("#b99a62"), 0, hp, 0, { seg: 5 });
  const ha = hauteur - hp - 0.04;
  const a = ampoule(g, geoTour(`abat_chevet_${ha}`, [[0.13, 0], [0.09, ha]], 16), couleur(abat_jour), 0, hp + 0.04, 0);
  a.material.side = THREE.DoubleSide;
  halo(g, 0.75, 0, hp + 0.04 + ha / 2, 0);
  return g;
}

// ---------------------------------------------------------------------------
// Ruban LED : profilé alu et diffuseur (= ampoule), le long de X. Origine au sol,
// `hauteur` = hauteur de pose (sous des meubles hauts, au-dessus d'une tête de lit…).
// ---------------------------------------------------------------------------
export function ruban_led(opts = {}) {
  const { longueur = 2, hauteur = 1.4 } = opts;
  const g = lampe("ruban_led", [longueur, 0.015, 0.02], { fixation: "mur" });
  boite(g, longueur, 0.012, 0.018, matMetal("#cfd2d4"), 0, hauteur, 0);
  ampoule(g, geo(`ruban_${longueur}`, () => new THREE.BoxGeometry(longueur - 0.01, 0.01, 0.006)), "#f4f2ec", 0, hauteur + 0.006, 0.01);
  return g;
}
