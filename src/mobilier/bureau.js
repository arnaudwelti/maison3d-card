// Espace bureau : bureau adulte, fauteuil de bureau, écran, lampe de bureau, étagères murales.
import * as THREE from "three";
import { matBois, matTissu, matMat, matMetal, matLaque, matEmissif, matHalo, matCeramique, resoudre } from "./materiaux.js";
import { boite, cyl, maille, tige, geo, geoTour, geoSphere, geoCyl, meuble } from "./outils.js";
import { plante, vase } from "./deco.js";

// ---------------------------------------------------------------------------
// Bureau : plateau bois, piètement métal en luge, caisson, objets (option deco).
// ---------------------------------------------------------------------------
export function bureau(opts = {}) {
  const { largeur: L = 1.4, profondeur: P = 0.7, hauteur: H = 0.74, couleur: c = "bois_clair", pieds = "noir", deco = true, avec_ecran = true } = opts;
  const g = meuble("bureau", [L, H, P], { fixation: "sol" });
  const mb = resoudre(c, matBois), mm = matMetal(pieds === "noir" ? "#2c2d30" : pieds);
  boite(g, L, 0.03, P, mb, 0, H - 0.03, 0, { r: 0.008 });
  for (const s of [-1, 1]) {
    const x = s * (L / 2 - 0.08);
    boite(g, 0.03, 0.03, P - 0.08, mm, x, 0, 0);
    boite(g, 0.03, H - 0.06, 0.03, mm, x, 0.0, P / 2 - 0.08);
    boite(g, 0.03, H - 0.06, 0.03, mm, x, 0.0, -P / 2 + 0.08);
    boite(g, 0.03, 0.03, P - 0.1, mm, x, H - 0.06, 0);
  }
  boite(g, L - 0.2, 0.12, 0.02, mm, 0, H - 0.17, -P / 2 + 0.1);
  if (deco) {
    // clavier, souris, tasse, carnet, plante
    boite(g, 0.42, 0.015, 0.13, matMat("gris_clair"), -0.05, H, 0.12, { r: 0.004 });
    boite(g, 0.06, 0.02, 0.1, matMat("gris_clair"), 0.26, H, 0.13, { r: 0.01 });
    cyl(g, 0.04, 0.09, matCeramique("terracotta"), 0.45, H, 0.05, { seg: 10 });
    boite(g, 0.15, 0.015, 0.21, matMat("sauge_fonce"), -0.48, H, 0.1, { ry: 0.25 });
    const p = plante({ taille: "mini", espece: "cactus", pot: "blanc" });
    p.position.set(L / 2 - 0.15, H, -P / 2 + 0.15);
    g.add(p);
  }
  if (avec_ecran) {
    const e = ecran({});
    e.position.set(-0.05, H, -0.12);
    g.add(e);
    const l = lampe_bureau({});
    l.position.set(-L / 2 + 0.17, H, -P / 2 + 0.17);
    l.rotation.y = 0.5;
    g.add(l);
  }
  return g;
}

// ---------------------------------------------------------------------------
// Fauteuil de bureau (piètement étoile 5 branches, assise et dossier tissu, accoudoirs).
// ---------------------------------------------------------------------------
export function fauteuil_bureau(opts = {}) {
  const { couleur: c = "anthracite", hauteur_assise: ha = 0.48 } = opts;
  const g = meuble("fauteuil_bureau", [0.64, 1.05, 0.64], { fixation: "sol" });
  const mt = resoudre(c, matTissu), mm = matMetal("#2c2d30"), roue = matMat("noir");
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2 + Math.PI / 2;
    const x = Math.cos(a) * 0.3, z = Math.sin(a) * 0.3;
    tige(g, [0, 0.09, 0], [x, 0.06, z], 0.018, mm, 5);
    maille(g, geoSphere(0.028, 6, 4), roue, x, 0.028, z);
  }
  cyl(g, 0.025, ha - 0.16, matMetal("#9ea1a4"), 0, 0.08, 0, { seg: 8 });
  boite(g, 0.5, 0.09, 0.5, mt, 0, ha - 0.07, 0.02, { r: 0.04, s: 2 });
  boite(g, 0.46, 0.55, 0.07, mt, 0, ha + 0.08, -0.24, { r: 0.035, s: 2, rx: -0.12 });
  boite(g, 0.06, 0.3, 0.03, mm, 0, ha - 0.05, -0.24);
  for (const s of [-1, 1]) {
    boite(g, 0.025, 0.2, 0.025, mm, s * 0.25, ha - 0.02, 0.0);
    boite(g, 0.05, 0.025, 0.24, matMat("noir"), s * 0.25, ha + 0.18, 0.02, { r: 0.01 });
  }
  return g;
}

// ---------------------------------------------------------------------------
// Écran d'ordinateur (dalle nommée « ecran », émissive propre, éteinte par défaut).
// ---------------------------------------------------------------------------
export function ecran(opts = {}) {
  const { pouces = 27 } = opts;
  const L = pouces * 0.0254 * 0.8716, H = pouces * 0.0254 * 0.4903;
  const g = meuble("ecran", [L, H + 0.18, 0.2], { fixation: "pose", interactif: true, role: "ecran", animations: { ecran: "emissive" } });
  const noir = matMat("#2b2c2f"), alu = matMetal("#bfc2c5");
  boite(g, 0.22, 0.012, 0.16, alu, 0, 0, 0, { r: 0.005 });
  boite(g, 0.045, 0.2, 0.02, alu, 0, 0, -0.04);
  boite(g, L, H, 0.022, noir, 0, 0.13, 0, { r: 0.005 });
  const d = maille(g, geo(`dalle_${Math.round(L * 1000)}`, () => new THREE.PlaneGeometry(L - 0.014, H - 0.02)), matEmissif("#1a1d22", { roughness: 0.2 }), 0, 0.13 + H / 2 + 0.003, 0.0115);
  d.name = "ecran";
  return g;
}

// ---------------------------------------------------------------------------
// Lampe de bureau articulée (role "lampe", ampoule émissive, halo).
// ---------------------------------------------------------------------------
export function lampe_bureau(opts = {}) {
  const { couleur: c = "moutarde" } = opts;
  const g = meuble("lampe_bureau", [0.2, 0.5, 0.35], { fixation: "pose", interactif: true, role: "lampe", animations: { ampoule: "emissive" } });
  const mc = resoudre(c, matLaque);
  cyl(g, 0.075, 0.02, mc, 0, 0, 0, { seg: 16 });
  const coude = [0, 0.32, 0.1], tete = [0, 0.42, 0.26];
  tige(g, [0, 0.02, 0], coude, 0.009, matMetal("#2c2d30"), 5);
  tige(g, coude, tete, 0.009, matMetal("#2c2d30"), 5);
  maille(g, geoSphere(0.018, 6, 4), mc, ...coude);
  const t = new THREE.Group();
  t.position.set(...tete);
  t.rotation.x = -0.7;
  maille(t, geoTour("abat_bureau", [[0.015, 0.03], [0.03, 0.02], [0.065, -0.06], [0.068, -0.065]], 14), mc, 0, 0, 0);
  const a = maille(t, geoSphere(0.028, 8, 6), matEmissif("#fff6e6"), 0, -0.04, 0);
  a.name = "ampoule";
  const h = new THREE.Sprite(matHalo());
  h.name = "halo";
  h.visible = false;
  h.scale.set(0.5, 0.5, 1);
  h.position.set(0, -0.07, 0);
  t.add(h);
  g.add(t);
  return g;
}

// ---------------------------------------------------------------------------
// Étagères murales flottantes garnies (fixation murale, `hauteur` = étagère basse).
// ---------------------------------------------------------------------------
export function etageres(opts = {}) {
  const { largeur: L = 1.2, profondeur: P = 0.25, nombre = 3, hauteur = 1.1, ecart = 0.36, couleur: c = "bois_clair", garnie = true } = opts;
  const g = meuble("etageres", [L, hauteur + (nombre - 1) * ecart + 0.3, P], { fixation: "mur" });
  const mb = resoudre(c, matBois);
  const livres = ["sauge", "terracotta", "creme", "marine", "moutarde", "gris_chaud"];
  for (let i = 0; i < nombre; i++) {
    const y = hauteur + i * ecart;
    const dec = (i % 2 ? 1 : -1) * 0.08;
    boite(g, L, 0.03, P, mb, dec, y, 0, { r: 0.006 });
    if (!garnie) continue;
    const sens = i % 2 ? -1 : 1;
    let x = dec - sens * (L / 2 - 0.06);
    for (let k = 0; k < 6 + i; k++) {
      const ep = 0.025 + ((k * 7 + i * 3) % 4) * 0.008, hl = 0.18 + ((k * 5 + i) % 3) * 0.03;
      boite(g, ep, hl, P * 0.7, matMat(livres[(k + i * 2) % livres.length]), x + sens * ep / 2, y + 0.03, 0.0, { rz: k === 5 + i ? sens * -0.25 : 0 });
      x += sens * (ep + 0.003);
    }
    const xo = dec + sens * (L / 2 - 0.16);
    if (i === 0) { const v = vase({ hauteur: 0.25, couleur: "blanc", branches: true }); v.position.set(xo, y + 0.03, 0); g.add(v); }
    else if (i === 1) { const p = plante({ taille: "mini", espece: "touffe", pot: "terre_cuite", graine: 4 }); p.position.set(xo, y + 0.03, 0); g.add(p); }
    else { boite(g, 0.14, 0.18, 0.02, matMat("blanc_pur"), xo, y + 0.03, -0.05, { rx: -0.1 }); boite(g, 0.1, 0.12, 0.004, matMat("sauge"), xo, y + 0.06, -0.035, { rx: -0.1 }); }
  }
  return g;
}
