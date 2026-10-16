// Salon et séjour : canapés, fauteuil, table basse, meuble TV, TV, bibliothèque, tapis,
// table de salle à manger avec chaises, chaise, buffet.
import * as THREE from "three";
import { matBois, matTissu, matMat, matMetal, matLaque, matCeramique, matEmissif, matMotif, couleur, resoudre } from "./materiaux.js";
import { boite, cyl, maille, tige, geo, geoBoite, geoCyl, meuble, deg } from "./outils.js";
import { coussinMesh, plante, vase } from "./deco.js";

// Pied fuselé en bois.
function pied(g, x, z, h, m, r = 0.022) {
  cyl(g, r, h, m, x, 0, z, { rb: r * 0.65, seg: 7 });
}

// ---------------------------------------------------------------------------
// Canapé droit (2 à 4 places).
// ---------------------------------------------------------------------------
export function canape(opts = {}) {
  const { places = 3, profondeur = 0.94, couleur: c = "sauge", pieds = "bois_noyer", coussins = ["creme", "terracotta"] } = opts;
  const bras = 0.2, assise = 0.62;
  const L = opts.largeur ?? places * assise + 2 * bras;
  const P = profondeur;
  const g = meuble("canape", [L, 0.84, P], { fixation: "sol", places });
  const mt = resoudre(c, matTissu), mp = resoudre(pieds, matBois);
  const hp = 0.12;
  // socle, bras, dossier
  boite(g, L - 0.02, 0.24, P - 0.02, mt, 0, hp, 0, { r: 0.04 });
  for (const s of [-1, 1]) boite(g, bras, 0.5, P, mt, s * (L / 2 - bras / 2), hp, 0, { r: 0.07 });
  boite(g, L - 2 * bras + 0.02, 0.44, 0.2, mt, 0, hp + 0.2, -P / 2 + 0.1, { r: 0.06 });
  // coussins d'assise et de dossier
  const li = (L - 2 * bras) / places;
  for (let i = 0; i < places; i++) {
    const x = -L / 2 + bras + li * (i + 0.5);
    boite(g, li - 0.012, 0.14, P - 0.24, mt, x, hp + 0.235, 0.1, { r: 0.05 });
    boite(g, li - 0.02, 0.42, 0.17, mt, x, hp + 0.34, -P / 2 + 0.27, { r: 0.07, rx: -0.16 });
  }
  // coussins déco
  coussins.forEach((cc, i) => {
    const s = i % 2 ? 1 : -1;
    coussinMesh(g, 0.42, resoudre(cc, matTissu), s * (L / 2 - bras - 0.26), hp + 0.36, -P / 2 + 0.42, { rx: -0.3, ry: s * -0.25, rz: s * 0.12 });
  });
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) pied(g, sx * (L / 2 - 0.08), sz * (P / 2 - 0.08), hp, mp);
  return g;
}

// ---------------------------------------------------------------------------
// Canapé d'angle : dossier sur deux côtés. cote : "gauche" ou "droite" (retour vu de face).
// ---------------------------------------------------------------------------
export function canape_angle(opts = {}) {
  const { largeur: L = 2.7, retour: R = 1.9, profondeur: P = 0.95, cote = "gauche", couleur: c = "gris_chaud", pieds = "bois_noyer", coussins = ["sauge", "creme", "moutarde"] } = opts;
  const g = meuble("canape_angle", [L, 0.84, R], { fixation: "sol", cote });
  const s = cote === "droite" ? 1 : -1; // côté du retour en X
  const mt = resoudre(c, matTissu), mp = resoudre(pieds, matBois);
  const hp = 0.12, bras = 0.2, dos = 0.2;
  const zDos = -R / 2;
  const xRet = s * (L / 2); // bord extérieur du retour
  // socles
  boite(g, L - 0.02, 0.24, P - 0.02, mt, 0, hp, zDos + P / 2);
  boite(g, P - 0.02, 0.24, R - P, mt, xRet - s * (P / 2), hp, zDos + P + (R - P) / 2 - 0.01, { r: 0.04 });
  // dossiers
  boite(g, L - bras, 0.44, dos, mt, -s * bras / 2, hp + 0.2, zDos + dos / 2, { r: 0.06 });
  boite(g, dos, 0.44, R - bras - dos, mt, xRet - s * dos / 2, hp + 0.2, zDos + dos + (R - bras - dos) / 2, { r: 0.06 });
  // bras
  boite(g, bras, 0.5, P, mt, -s * (L / 2 - bras / 2), hp, zDos + P / 2, { r: 0.07 });
  boite(g, P, 0.5, bras, mt, xRet - s * (P / 2), hp, R / 2 - bras / 2, { r: 0.07 });
  // assises : le long du dos (de l'angle vers le bras) puis le long du retour
  const prof = P - dos - 0.02;
  const longDos = L - bras - dos;
  const nDos = Math.max(1, Math.round(longDos / 0.65));
  const lD = longDos / nDos;
  for (let i = 0; i < nDos; i++) {
    const x = xRet - s * (dos + lD * (i + 0.5));
    boite(g, lD - 0.012, 0.14, prof, mt, x, hp + 0.235, zDos + dos + prof / 2, { r: 0.05 });
    boite(g, lD - 0.02, 0.42, 0.17, mt, x, hp + 0.34, zDos + dos + 0.08, { r: 0.07, rx: -0.16 });
  }
  const longRet = R - P - bras;
  const nR = Math.max(1, Math.round(longRet / 0.65));
  const lR = longRet / nR;
  for (let i = 0; i < nR; i++) {
    const z = zDos + P + lR * (i + 0.5);
    boite(g, prof, 0.14, lR - 0.012, mt, xRet - s * (dos + prof / 2), hp + 0.235, z, { r: 0.05 });
    boite(g, 0.17, 0.42, lR - 0.02, mt, xRet - s * (dos + 0.08), hp + 0.34, z, { r: 0.07, rz: s * 0.16 });
  }
  coussins.forEach((cc, i) => {
    const pos = [
      [xRet - s * (dos + 0.3), zDos + dos + 0.3, s * 0.78],
      [xRet - s * (dos + 0.75), zDos + dos + 0.2, 0.1],
      [-s * (L / 2 - bras - 0.3), zDos + dos + 0.2, -0.15 * s],
    ][i % 3];
    coussinMesh(g, 0.42, resoudre(cc, matTissu), pos[0], hp + 0.36, pos[1], { rx: -0.3, ry: pos[2] });
  });
  for (const [x, z] of [[-L / 2 + 0.08, zDos + 0.08], [L / 2 - 0.08, zDos + 0.08], [-s * (L / 2 - 0.08), zDos + P - 0.08], [xRet - s * 0.08, R / 2 - 0.08], [xRet - s * (P - 0.08), R / 2 - 0.08]])
    pied(g, x, z, hp, mp);
  return g;
}

// ---------------------------------------------------------------------------
// Fauteuil cosy (structure bois, coussins épais).
// ---------------------------------------------------------------------------
export function fauteuil(opts = {}) {
  const { couleur: c = "terracotta", bois = "bois_clair", coussin = "creme" } = opts;
  const L = 0.78, P = 0.82;
  const g = meuble("fauteuil", [L, 0.82, P], { fixation: "sol" });
  const mt = resoudre(c, matTissu), mb = resoudre(bois, matBois);
  // accoudoirs bois avec pieds
  for (const s of [-1, 1]) {
    const x = s * (L / 2 - 0.03);
    boite(g, 0.06, 0.035, P - 0.04, mb, x, 0.6, 0.0, { r: 0.012 });
    tige(g, [x, 0, P / 2 - 0.08], [x, 0.6, P / 2 - 0.1], 0.02, mb, 7);
    tige(g, [x, 0, -P / 2 + 0.06], [x, 0.6, -P / 2 + 0.12], 0.02, mb, 7);
  }
  boite(g, L - 0.08, 0.04, P - 0.12, mb, 0, 0.26, 0.02);
  boite(g, L - 0.1, 0.16, P - 0.16, mt, 0, 0.3, 0.05, { r: 0.06, s: 2 });
  boite(g, L - 0.12, 0.5, 0.16, mt, 0, 0.4, -P / 2 + 0.14, { r: 0.07, s: 2, rx: -0.22 });
  coussinMesh(g, 0.36, resoudre(coussin, matTissu), 0.06, 0.43, -P / 2 + 0.3, { rx: -0.35, rz: 0.15 });
  return g;
}

// ---------------------------------------------------------------------------
// Table basse ronde (plateau bois, piètement) ou rectangulaire, avec déco optionnelle.
// ---------------------------------------------------------------------------
export function table_basse(opts = {}) {
  const { forme = "ronde", diametre = 0.85, largeur = 1.1, profondeur = 0.6, hauteur = 0.4, couleur: c = "bois_clair", deco = true } = opts;
  const mb = resoudre(c, matBois);
  let g;
  if (forme === "ronde") {
    g = meuble("table_basse", [diametre, hauteur, diametre], { fixation: "sol" });
    const r = diametre / 2;
    cyl(g, r, 0.035, mb, 0, hauteur - 0.035, 0, { seg: 28 });
    cyl(g, r - 0.03, 0.02, mb, 0, 0.12, 0, { seg: 28 });
    for (let i = 0; i < 3; i++) {
      const a = (i / 3) * Math.PI * 2 + 0.5;
      tige(g, [Math.cos(a) * r * 0.78, 0, Math.sin(a) * r * 0.78], [Math.cos(a) * r * 0.65, hauteur - 0.035, Math.sin(a) * r * 0.65], 0.02, mb, 7);
    }
  } else {
    g = meuble("table_basse", [largeur, hauteur, profondeur], { fixation: "sol" });
    boite(g, largeur, 0.04, profondeur, mb, 0, hauteur - 0.04, 0, { r: 0.012 });
    boite(g, largeur - 0.1, 0.02, profondeur - 0.1, mb, 0, 0.1, 0);
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) pied(g, sx * (largeur / 2 - 0.06), sz * (profondeur / 2 - 0.06), hauteur - 0.04, mb, 0.024);
  }
  if (deco) {
    // pile de livres et vase
    const livres = [["sauge", 0.24, 0.17], ["creme", 0.22, 0.16], ["terracotta", 0.2, 0.15]];
    let y = hauteur;
    livres.forEach(([lc, l, p], i) => { boite(g, l, 0.03, p, matMat(lc), -0.12, y, 0.05, { ry: i * 0.12 }); y += 0.03; });
    const v = vase({ hauteur: 0.28, couleur: "blanc" });
    v.position.set(0.15, hauteur, -0.06);
    g.add(v);
  }
  return g;
}

// ---------------------------------------------------------------------------
// Téléviseur (écran nommé « ecran », émissif propre). support : "pied" ou "mural".
// ---------------------------------------------------------------------------
export function tv(opts = {}) {
  const { pouces = 55, support = "pied", hauteur_pose = support === "mural" ? 1.1 : 0 } = opts;
  const L = pouces * 0.0254 * 0.8716, H = pouces * 0.0254 * 0.4903;
  const g = meuble("tv", [L, H + 0.1, 0.25], { fixation: support === "mural" ? "mur" : "pose", interactif: true, role: "tv", animations: { ecran: "emissive" } });
  const noir = matMat("noir");
  const y0 = hauteur_pose + (support === "pied" ? 0.08 : -H / 2);
  boite(g, L, H, 0.035, noir, 0, y0, 0, { r: 0.006 });
  const ecran = maille(g, geo(`ecran_${Math.round(L * 1000)}`, () => new THREE.PlaneGeometry(L - 0.016, H - 0.016)), matEmissif("#1a1d22", { roughness: 0.18 }), 0, y0 + H / 2, 0.0185);
  ecran.name = "ecran";
  if (support === "pied") {
    boite(g, 0.32, 0.012, 0.2, noir, 0, hauteur_pose, 0.0, { r: 0.004 });
    boite(g, 0.05, 0.1, 0.02, noir, 0, hauteur_pose, -0.02);
  }
  return g;
}

// ---------------------------------------------------------------------------
// Meuble TV bas (bois, 3 façades à cannage stylisé), TV posée en option.
// ---------------------------------------------------------------------------
export function meuble_tv(opts = {}) {
  const { largeur: L = 1.8, hauteur: H = 0.48, profondeur: P = 0.42, couleur: c = "bois_clair", facade = "sauge", avec_tv = true, pouces = 55 } = opts;
  const g = meuble("meuble_tv", [L, H, P], { fixation: "sol" });
  const mb = resoudre(c, matBois), mf = resoudre(facade, matLaque);
  const hp = 0.12;
  boite(g, L, H - hp, P, mb, 0, hp, 0, { r: 0.01 });
  const n = 3, lf = (L - 0.06) / n;
  for (let i = 0; i < n; i++) {
    const x = -L / 2 + 0.03 + lf * (i + 0.5);
    if (i === 1) {
      // niche ouverte centrale
      boite(g, lf - 0.02, H - hp - 0.08, 0.02, matBois("bois_noyer"), x, hp + 0.04, P / 2 - 0.02);
      boite(g, 0.22, 0.05, 0.18, matMat("anthracite"), x - 0.08, hp + 0.04, 0.05, { r: 0.01 });
    } else {
      boite(g, lf - 0.012, H - hp - 0.05, 0.02, mf, x, hp + 0.025, P / 2, { r: 0.004 });
      cyl(g, 0.012, 0.02, matMetal("#b99a62"), x + (i ? -1 : 1) * (lf / 2 - 0.05), (H + hp) / 2, P / 2 + 0.015, { axe: "z", seg: 8 });
    }
  }
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) pied(g, sx * (L / 2 - 0.06), sz * (P / 2 - 0.06), hp, mb, 0.02);
  if (avec_tv) {
    const t = tv({ pouces, support: "pied", hauteur_pose: H });
    t.position.z = -0.04;
    g.add(t);
    const p = plante({ taille: "mini", espece: "touffe", graine: 3 });
    p.position.set(L / 2 - 0.18, H, 0.02);
    g.add(p);
  }
  return g;
}

// ---------------------------------------------------------------------------
// Bibliothèque garnie (livres colorés, objets, petite plante).
// ---------------------------------------------------------------------------
const TEINTES_LIVRES = ["terracotta", "sauge", "moutarde", "marine", "creme", "gris_chaud", "bleu_canard", "rose"];

export function bibliotheque(opts = {}) {
  const { largeur: L = 0.9, hauteur: H = 1.9, profondeur: P = 0.32, etageres = 5, couleur: c = "bois_clair", garnie = true, graine = 5 } = opts;
  const g = meuble("bibliotheque", [L, H, P], { fixation: "sol" });
  const mb = resoudre(c, matBois);
  const e = 0.022;
  boite(g, e, H, P, mb, -L / 2 + e / 2, 0, 0);
  boite(g, e, H, P, mb, L / 2 - e / 2, 0, 0);
  boite(g, L - 2 * e, H - 0.01, 0.01, matMat("blanc"), 0, 0, -P / 2 + 0.005);
  const pas = (H - 0.08) / etageres;
  for (let i = 0; i <= etageres; i++) boite(g, L - 2 * e, e, P - 0.01, mb, 0, i === 0 ? 0.06 : 0.06 + i * pas - e, 0);
  boite(g, L - 2 * e, 0.06, 0.02, mb, 0, 0, P / 2 - 0.02);
  if (garnie) {
    let s = graine * 7919;
    const r = () => ((s = (s * 16807) % 2147483647) / 2147483647);
    for (let k = 0; k < etageres; k++) {
      const y = 0.06 + k * pas + (k === 0 ? e : 0);
      let x = -L / 2 + e + 0.02;
      const fin = L / 2 - e - 0.02;
      const objet = Math.floor(r() * 3); // 0 : plante, 1 : vase, 2 : livres couchés
      const xObj = r() < 0.5 ? -1 : 1;
      const limite = xObj > 0 ? fin - 0.22 : fin;
      if (xObj < 0) x += 0.22;
      while (x < limite - 0.04) {
        const ep = 0.022 + r() * 0.03, hl = Math.min(pas - 0.06, 0.19 + r() * 0.1);
        if (x + ep > limite) break;
        boite(g, ep, hl, P * 0.72, matMat(TEINTES_LIVRES[Math.floor(r() * TEINTES_LIVRES.length)]), x + ep / 2, y, 0.01);
        x += ep + 0.002;
        if (r() < 0.12) x += 0.04;
      }
      const xo = xObj > 0 ? fin - 0.1 : -L / 2 + e + 0.12;
      if (objet === 0) { const p = plante({ taille: "mini", espece: "touffe", graine: k + graine }); p.position.set(xo, y, 0.02); g.add(p); }
      else if (objet === 1) { const v = vase({ hauteur: Math.min(0.22, pas - 0.05), couleur: "terracotta", branches: false }); v.position.set(xo, y, 0.02); g.add(v); }
      else for (let j = 0; j < 3; j++) boite(g, 0.16, 0.028, 0.2, matMat(TEINTES_LIVRES[(k + j) % 8]), xo, y + j * 0.028, 0.0, { ry: j * 0.1 });
    }
  }
  return g;
}

// ---------------------------------------------------------------------------
// Tapis de salon (rectangle ou rond, bordure et liseré).
// ---------------------------------------------------------------------------
export function tapis(opts = {}) {
  const { largeur: L = 2.2, profondeur: P = 1.6, forme = "rectangle", couleur: c = "creme", bordure = "terracotta", motif = "liseré" } = opts;
  if (forme === "rond") {
    const g = meuble("tapis", [L, 0.012, L], { fixation: "sol" });
    cyl(g, L / 2, 0.008, resoudre(bordure, matTissu), 0, 0, 0, { seg: 40 });
    cyl(g, L / 2 - 0.08, 0.003, resoudre(c, matTissu), 0, 0.008, 0, { seg: 40 });
    return g;
  }
  const g = meuble("tapis", [L, 0.012, P], { fixation: "sol" });
  boite(g, L, 0.008, P, resoudre(c, matTissu), 0, 0, 0);
  if (motif !== "uni") {
    const mb = resoudre(bordure, matTissu);
    const m = 0.12, e = 0.05;
    boite(g, L - 2 * m, 0.002, e, mb, 0, 0.008, -P / 2 + m + e / 2);
    boite(g, L - 2 * m, 0.002, e, mb, 0, 0.008, P / 2 - m - e / 2);
    boite(g, e, 0.002, P - 2 * m, mb, -L / 2 + m + e / 2, 0.008, 0);
    boite(g, e, 0.002, P - 2 * m, mb, L / 2 - m - e / 2, 0.008, 0);
    // losanges centraux
    const md = matTissu("sauge");
    for (let i = -1; i <= 1; i++) boite(g, 0.18, 0.002, 0.18, i ? md : mb, i * 0.34, 0.009, 0, { ry: Math.PI / 4 });
  }
  return g;
}

// ---------------------------------------------------------------------------
// Chaise de salle à manger (bois, assise tissu, dossier cintré).
// ---------------------------------------------------------------------------
export function chaise(opts = {}) {
  const { couleur: c = "bois_clair", assise = "beige" } = opts;
  const g = meuble("chaise", [0.46, 0.82, 0.5], { fixation: "sol" });
  const mb = resoudre(c, matBois), mt = resoudre(assise, matTissu);
  const ha = 0.45;
  boite(g, 0.44, 0.03, 0.44, mb, 0, ha - 0.03, 0.01, { r: 0.01 });
  boite(g, 0.42, 0.05, 0.41, mt, 0, ha - 0.005, 0.02, { r: 0.022 });
  for (const sx of [-1, 1]) {
    tige(g, [sx * 0.2, 0, 0.21], [sx * 0.18, ha - 0.03, 0.18], 0.016, mb, 6);
    tige(g, [sx * 0.2, 0, -0.22], [sx * 0.18, 0.8, -0.2], 0.016, mb, 6);
  }
  boite(g, 0.4, 0.12, 0.025, mb, 0, 0.66, -0.2, { r: 0.01, rx: -0.08 });
  boite(g, 0.36, 0.015, 0.015, mb, 0, 0.16, -0.2);
  boite(g, 0.36, 0.015, 0.015, mb, 0, 0.16, 0.19);
  return g;
}

// ---------------------------------------------------------------------------
// Table de salle à manger avec 4, 6 ou 8 chaises (option chaises: false pour la table seule).
// ---------------------------------------------------------------------------
export function table_manger(opts = {}) {
  const { places = 6, largeur: W = 0.92, hauteur: H = 0.75, couleur: c = "bois_clair", chaises = true, chaise_bois = c, assise = "beige", centre = true } = opts;
  const tetes = places >= 6 ? 2 : 0;
  const parCote = Math.ceil((places - tetes) / 2);
  const L = opts.longueur ?? Math.max(1.2, parCote * 0.62 + 0.3);
  const ext = chaises ? 0.42 : 0;
  const g = meuble("table_manger", [L + (tetes ? 2 * ext : 0), H, W + 2 * ext], { fixation: "sol", places });
  const mb = resoudre(c, matBois);
  boite(g, L, 0.04, W, mb, 0, H - 0.04, 0, { r: 0.015 });
  boite(g, L - 0.24, 0.07, W - 0.2, mb, 0, H - 0.11, 0);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) tige(g, [sx * (L / 2 - 0.1), 0, sz * (W / 2 - 0.1)], [sx * (L / 2 - 0.14), H - 0.04, sz * (W / 2 - 0.13)], 0.028, mb, 8);
  if (chaises) {
    const pos = [];
    for (let i = 0; i < parCote; i++) {
      const x = (i - (parCote - 1) / 2) * ((L - 0.3) / parCote);
      pos.push([x, -W / 2 - 0.12, 0], [x, W / 2 + 0.12, Math.PI]);
    }
    if (tetes) pos.push([-L / 2 - 0.12, 0, Math.PI / 2], [L / 2 + 0.12, 0, -Math.PI / 2]);
    for (const [x, z, a] of pos.slice(0, places)) {
      const ch = chaise({ couleur: chaise_bois, assise });
      ch.position.set(x, 0, z);
      ch.rotation.y = a;
      g.add(ch);
    }
  }
  if (centre) {
    const v = vase({ hauteur: 0.34, couleur: "sauge" });
    v.position.set(0, H, 0);
    g.add(v);
    cyl(g, 0.12, 0.012, matBois("bois_miel"), -0.32, H, 0.05, { seg: 16 });
    cyl(g, 0.12, 0.012, matBois("bois_miel"), 0.32, H, -0.05, { seg: 16 });
  }
  return g;
}

// ---------------------------------------------------------------------------
// Buffet (enfilade) : portes et tiroirs, piètement compas, déco sur le dessus.
// ---------------------------------------------------------------------------
export function buffet(opts = {}) {
  const { largeur: L = 1.6, hauteur: H = 0.8, profondeur: P = 0.45, couleur: c = "bois_clair", facade = "blanc", deco = true } = opts;
  const g = meuble("buffet", [L, H, P], { fixation: "sol" });
  const mb = resoudre(c, matBois), mf = resoudre(facade, matLaque);
  const hp = 0.18;
  boite(g, L, H - hp, P, mb, 0, hp, 0, { r: 0.012 });
  const n = Math.max(3, Math.round(L / 0.45)), lf = (L - 0.04) / n;
  for (let i = 0; i < n; i++) {
    const x = -L / 2 + 0.02 + lf * (i + 0.5);
    if (i === Math.floor(n / 2) && n % 2) {
      for (let j = 0; j < 3; j++) {
        const hh = (H - hp - 0.06) / 3;
        boite(g, lf - 0.012, hh - 0.01, 0.02, mb, x, hp + 0.03 + j * hh, P / 2, { r: 0.004 });
        boite(g, 0.1, 0.012, 0.015, matMetal("#b99a62"), x, hp + 0.03 + j * hh + hh / 2 - 0.006, P / 2 + 0.017);
      }
    } else {
      boite(g, lf - 0.012, H - hp - 0.06, 0.02, mf, x, hp + 0.03, P / 2, { r: 0.004 });
      cyl(g, 0.013, 0.02, matMetal("#b99a62"), x + (i < n / 2 ? 1 : -1) * (lf / 2 - 0.05), (H + hp) / 2 + 0.05, P / 2 + 0.017, { axe: "z", seg: 8 });
    }
  }
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) tige(g, [sx * (L / 2 - 0.05), 0, sz * (P / 2 - 0.04)], [sx * (L / 2 - 0.12), hp, sz * (P / 2 - 0.09)], 0.02, mb, 7);
  if (deco) {
    const p = plante({ taille: "petite", espece: "touffe", pot: "blanc", graine: 2 });
    p.position.set(-L / 2 + 0.25, H, 0);
    g.add(p);
    const v = vase({ hauteur: 0.36, couleur: "terracotta" });
    v.position.set(L / 2 - 0.25, H, 0);
    g.add(v);
  }
  return g;
}
