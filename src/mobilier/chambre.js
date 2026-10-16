// Chambres : lit double, lit enfant (simple ou cabane), lit mezzanine avec échelle, table de chevet,
// armoire, commode, bureau et chaise d'enfant, coffre à jouets, poster encadré, peluche.
import * as THREE from "three";
import { matBois, matTissu, matMat, matMetal, matLaque, matMotif, couleur, resoudre } from "./materiaux.js";
import { boite, cyl, maille, tige, geo, geoSphere, geoIco, geoCyl, meuble } from "./outils.js";
import { coussinMesh, cadre } from "./deco.js";

// Thèmes de chambre d'enfant : couette à motif, coussin, couleur d'accent.
export const THEMES = {
  bleu: { motif: "etoiles", fond: "marine", trace: "moutarde", coussin: "moutarde", accent: "bleu_ciel", affiche: "fusee" },
  vert: { motif: "vagues", fond: "menthe", trace: "blanc_pur", coussin: "corail", accent: "sauge", affiche: "baleine" },
  rose: { motif: "pois", fond: "rose", trace: "blanc_pur", coussin: "lavande", accent: "rose", affiche: "arc_en_ciel" },
  jaune: { motif: "rayures", fond: "moutarde", trace: "creme", coussin: "bleu_canard", accent: "moutarde", affiche: "montagne" },
};
const theme = (t) => (typeof t === "object" ? t : THEMES[t] || THEMES.bleu);

// Literie commune : matelas, couette avec revers, oreillers. y0 = dessus du sommier. Tête vers −Z.
function literie(g, l, L, y0, z0, o) {
  const { couette, revers = matTissu("blanc_pur"), oreillers = 1, coussins = [] } = o;
  boite(g, l, 0.18, L, matTissu("blanc_pur"), 0, y0, z0, { r: 0.04 });
  const lc = L * 0.74;
  const zc = z0 + L / 2 - lc / 2 + 0.03;
  boite(g, l + 0.07, 0.17, lc + 0.03, couette, 0, y0 + 0.07, zc, { r: 0.06, s: 2 });
  boite(g, l + 0.075, 0.06, 0.2, revers, 0, y0 + 0.19, zc - lc / 2 + 0.08, { r: 0.028 });
  const lo = oreillers === 1 ? Math.min(0.62, l - 0.2) : (l - 0.12) / 2;
  for (let i = 0; i < oreillers; i++) {
    const x = oreillers === 1 ? 0 : (i - 0.5) * (lo + 0.04);
    boite(g, lo, 0.13, 0.38, matTissu("blanc_pur"), x, y0 + 0.17, z0 - L / 2 + 0.24, { r: 0.06, rx: 0.12 });
  }
  coussins.forEach((c, i) => {
    const x = coussins.length === 1 ? 0.05 : (i - (coussins.length - 1) / 2) * 0.42;
    coussinMesh(g, 0.4, c, x, y0 + 0.16, z0 - L / 2 + 0.48, { rx: -0.45, rz: (i % 2 ? -1 : 1) * 0.1 });
  });
}

// ---------------------------------------------------------------------------
// Lit double (tête de lit capitonnée, couette, plaid).
// ---------------------------------------------------------------------------
export function lit_double(opts = {}) {
  const { largeur: l = 1.6, longueur: L = 2.0, couleur: c = "bois_clair", tete = "sauge", couette = "lin", plaid = "terracotta", coussins = ["moutarde", "sauge_fonce"] } = opts;
  const P = L + 0.12;
  const g = meuble("lit_double", [l + 0.12, 1.15, P], { fixation: "sol" });
  const mb = resoudre(c, matBois);
  const z0 = 0.06; // centre du couchage
  boite(g, l + 0.06, 0.24, L + 0.04, mb, 0, 0.08, z0, { r: 0.015 });
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) cyl(g, 0.03, 0.08, mb, sx * (l / 2 - 0.05), 0, z0 + sz * (L / 2 - 0.05), { seg: 8 });
  // tête de lit capitonnée en 3 panneaux
  boite(g, l + 0.12, 0.16, 0.08, mb, 0, 0.08, -P / 2 + 0.04);
  for (let i = 0; i < 3; i++) boite(g, (l + 0.1) / 3 - 0.01, 0.82, 0.09, resoudre(tete, matTissu), (i - 1) * ((l + 0.1) / 3), 0.24, -P / 2 + 0.045, { r: 0.04 });
  literie(g, l, L, 0.32, z0, { couette: resoudre(couette, matTissu), oreillers: 2, coussins: coussins.map((x) => resoudre(x, matTissu)) });
  // plaid au pied
  boite(g, l + 0.1, 0.055, 0.46, resoudre(plaid, matTissu), 0, 0.53, z0 + L / 2 - 0.3, { r: 0.025 });
  boite(g, 0.03, 0.2, 0.46, resoudre(plaid, matTissu), -l / 2 - 0.05, 0.36, z0 + L / 2 - 0.3, { r: 0.012 });
  return g;
}

// ---------------------------------------------------------------------------
// Lit enfant 90×190 : style "simple" (tête arrondie) ou "cabane" (charpente et fanions).
// ---------------------------------------------------------------------------
export function lit_enfant(opts = {}) {
  const { largeur: l = 0.9, longueur: L = 1.9, style = "cabane", couleur: c = "bois_blanchi", theme: th = "bleu" } = opts;
  const T = theme(th);
  const g = meuble("lit_enfant", [l + 0.1, style === "cabane" ? 1.6 : 0.9, L + 0.1], { fixation: "sol" });
  const mb = resoudre(c, matBois);
  boite(g, l + 0.06, 0.2, L + 0.06, mb, 0, 0.1, 0, { r: 0.012 });
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) cyl(g, 0.025, 0.1, mb, sx * (l / 2 - 0.02), 0, sz * (L / 2 - 0.02), { seg: 8 });
  const couette = matMotif(T.motif, T.fond, T.trace);
  literie(g, l, L, 0.3, 0, { couette, oreillers: 1, coussins: [resoudre(T.coussin, matTissu)] });
  if (style === "cabane") {
    const H = 1.55, e = 0.045;
    for (const sz of [-1, 1]) {
      const z = sz * (L / 2 + 0.01);
      for (const sx of [-1, 1]) {
        boite(g, e, 0.85, e, mb, sx * (l / 2 + 0.01), 0.1, z);
        tige(g, [sx * (l / 2 + 0.01), 0.93, z], [0, H, z], e / 1.6, mb, 6);
      }
    }
    cyl(g, e / 1.6, L + 0.12, mb, 0, H - 0.02, 0, { axe: "z", seg: 6 });
    // barrière basse côté mur
    boite(g, 0.03, 0.03, L, mb, -l / 2 - 0.01, 0.55, 0);
    // fanions
    const coulFan = ["moutarde", "corail", "menthe", "bleu_ciel", "lavande"];
    const fan = geo("fanion", () => {
      const sh = new THREE.Shape([new THREE.Vector2(-0.05, 0), new THREE.Vector2(0.05, 0), new THREE.Vector2(0, -0.1)]);
      return new THREE.ShapeGeometry(sh);
    });
    const nF = 7;
    for (let i = 0; i < nF; i++) {
      const t = (i + 0.5) / nF;
      const z = -L / 2 + t * L;
      const y = H - 0.05 - Math.sin(t * Math.PI) * 0.06;
      const f = maille(g, fan, matTissuDouble(coulFan[i % coulFan.length]), 0, y, z, { ry: Math.PI / 2 });
      f.material = matTissuDouble(coulFan[i % coulFan.length]);
    }
  } else {
    // tête de lit arrondie colorée
    boite(g, l + 0.08, 0.6, 0.05, resoudre(T.accent, matLaque), 0, 0.2, -L / 2 - 0.02, { r: 0.022 });
    maille(g, geoCyl((l + 0.08) / 2, (l + 0.08) / 2, 0.05, 20, false), resoudre(T.accent, matLaque), 0, 0.8, -L / 2 - 0.02, { rx: Math.PI / 2, sy: 1, sz: 0.45 });
    boite(g, l + 0.06, 0.18, 0.04, mb, 0, 0.3, L / 2 + 0.01, { r: 0.015 });
  }
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
// Lit mezzanine : couchage en hauteur, barrière, échelle, bureau dessous (option).
// Le lit est orienté le long de X ; l'échelle est sur la façade +Z.
// ---------------------------------------------------------------------------
export function lit_mezzanine(opts = {}) {
  const { largeur: l = 0.9, longueur: L = 1.9, hauteur_couchage: hc = 1.45, cote_echelle = "droite", couleur: c = "bois_clair", theme: th = "vert", bureau_dessous = true } = opts;
  const T = theme(th);
  const P = l + 0.1;
  const g = meuble("lit_mezzanine", [L + 0.1, hc + 0.55, P + 0.3], { fixation: "sol" });
  const mb = resoudre(c, matBois), ma = resoudre(T.accent, matLaque);
  const e = 0.06;
  const zc = -0.15; // centre du couchage (l'échelle déborde en +Z)
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) boite(g, e, hc + 0.42, e, mb, sx * (L / 2 + 0.02), 0, zc + sz * (l / 2 + 0.02));
  // cadre du sommier
  boite(g, L + 0.04, 0.12, 0.04, mb, 0, hc - 0.12, zc + l / 2 + 0.02);
  boite(g, L + 0.04, 0.12, 0.04, mb, 0, hc - 0.12, zc - l / 2 - 0.02);
  boite(g, 0.04, 0.12, l, mb, -L / 2 - 0.02, hc - 0.12, zc);
  boite(g, 0.04, 0.12, l, mb, L / 2 + 0.02, hc - 0.12, zc);
  boite(g, L, 0.02, l, mb, 0, hc - 0.04, zc);
  // literie (tête vers −X) : on la construit dans un sous-groupe tourné
  const lit = new THREE.Group();
  lit.rotation.y = Math.PI / 2;
  lit.position.set(0, 0, zc);
  literie(lit, l - 0.04, L - 0.04, hc - 0.02, 0, { couette: matMotif(T.motif, T.fond, T.trace), oreillers: 1, coussins: [] });
  g.add(lit);
  // barrière : lisses colorées, ouverture pour l'échelle
  const s = cote_echelle === "gauche" ? -1 : 1;
  const ouv = 0.5, xEch = s * (L / 2 - ouv / 2 - 0.05);
  boite(g, L + 0.04, 0.05, 0.03, ma, 0, hc + 0.32, zc - l / 2 - 0.02, { r: 0.012 });
  boite(g, 0.03, 0.05, l + 0.04, ma, -L / 2 - 0.02, hc + 0.32, zc, { r: 0.012 });
  boite(g, 0.03, 0.05, l + 0.04, ma, L / 2 + 0.02, hc + 0.32, zc, { r: 0.012 });
  const lf = L - ouv - 0.05;
  const xf = -s * (ouv / 2 + 0.025);
  boite(g, lf, 0.05, 0.03, ma, xf, hc + 0.32, zc + l / 2 + 0.02, { r: 0.012 });
  for (let i = 0; i <= 6; i++) cyl(g, 0.012, 0.32, mb, xf - lf / 2 + (i / 6) * lf, hc, zc + l / 2 + 0.02, { seg: 5 });
  for (let i = 1; i < 5; i++) cyl(g, 0.012, 0.32, mb, -L / 2 + (i / 5) * L, hc, zc - l / 2 - 0.02, { seg: 5 });
  // échelle légèrement inclinée
  const zb = zc + l / 2 + 0.3, zh = zc + l / 2 + 0.03;
  for (const dx of [-ouv / 2 + 0.06, ouv / 2 - 0.06]) tige(g, [xEch + dx, 0, zb], [xEch + dx, hc + 0.36, zh], 0.022, mb, 6);
  const nb = Math.round(hc / 0.28);
  for (let i = 1; i <= nb; i++) {
    const t = i / (nb + 0.3);
    cyl(g, 0.016, ouv - 0.12, ma, xEch, t * (hc + 0.36), zb + (zh - zb) * t, { axe: "x", seg: 6 });
  }
  if (bureau_dessous) {
    const xb = -s * 0.25;
    boite(g, 1.0, 0.03, l - 0.15, matMat("blanc"), xb, 0.72, zc - 0.05, { r: 0.008 });
    boite(g, 0.4, 0.69, l - 0.2, matMat("blanc"), xb - 0.3 * -s, 0.03, zc - 0.07);
    boite(g, 0.36, 0.2, 0.02, ma, xb - 0.3 * -s, 0.45, zc + l / 2 - 0.17);
    boite(g, 0.36, 0.2, 0.02, ma, xb - 0.3 * -s, 0.22, zc + l / 2 - 0.17);
    boite(g, 0.24, 0.3, 0.18, matMat("moutarde"), xb + 0.25 * -s, 0.75, zc - l / 2 + 0.15);
    const ch = chaise_enfant({ couleur: T.accent });
    ch.position.set(xb + 0.1 * s, 0, zc + 0.15);
    ch.rotation.y = Math.PI;
    g.add(ch);
    // guirlande lumineuse sous le sommier (décor)
    for (let i = 0; i < 8; i++) maille(g, geoSphere(0.018, 6, 4), matMat(["moutarde", "corail", "menthe", "blanc_pur"][i % 4]), -L / 2 + 0.15 + i * (L - 0.3) / 7, hc - 0.16 - Math.sin((i / 7) * Math.PI) * 0.06, zc - l / 2 + 0.02);
  }
  return g;
}

// ---------------------------------------------------------------------------
// Table de chevet (tiroir, niche, pieds compas).
// ---------------------------------------------------------------------------
export function table_chevet(opts = {}) {
  const { couleur: c = "bois_clair", facade = "blanc", hauteur: H = 0.5 } = opts;
  const g = meuble("table_chevet", [0.45, H, 0.38], { fixation: "sol" });
  const mb = resoudre(c, matBois);
  const hp = 0.16;
  boite(g, 0.45, H - hp, 0.38, mb, 0, hp, 0, { r: 0.012 });
  boite(g, 0.41, 0.13, 0.02, resoudre(facade, matLaque), 0, H - 0.16, 0.19, { r: 0.004 });
  boite(g, 0.41, H - hp - 0.2, 0.02, matBois("bois_noyer"), 0, hp + 0.02, 0.17);
  cyl(g, 0.012, 0.02, matMetal("#b99a62"), 0, H - 0.095, 0.2, { axe: "z", seg: 8 });
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) tige(g, [sx * 0.19, 0, sz * 0.15], [sx * 0.17, hp, sz * 0.13], 0.016, mb, 6);
  return g;
}

// ---------------------------------------------------------------------------
// Armoire 2 ou 3 portes.
// ---------------------------------------------------------------------------
export function armoire(opts = {}) {
  const { largeur: L = 1.0, hauteur: H = 2.0, profondeur: P = 0.58, portes = L > 1.3 ? 3 : 2, couleur: c = "blanc", bois = "bois_clair" } = opts;
  const g = meuble("armoire", [L, H, P], { fixation: "sol" });
  const mc = resoudre(c, matLaque), mb = resoudre(bois, matBois);
  boite(g, L, 0.08, P - 0.04, mb, 0, 0, -0.02);
  boite(g, L, H - 0.08, P - 0.02, mc, 0, 0.08, -0.01, { r: 0.01 });
  const lp = (L - 0.02) / portes;
  for (let i = 0; i < portes; i++) {
    const x = -L / 2 + 0.01 + lp * (i + 0.5);
    boite(g, lp - 0.008, H - 0.12, 0.02, mc, x, 0.1, P / 2 - 0.01, { r: 0.004 });
    const cote = i % 2 === 0 ? 1 : -1;
    boite(g, 0.02, 0.3, 0.02, mb, x + cote * (lp / 2 - 0.05), H * 0.48, P / 2 + 0.01, { r: 0.006 });
  }
  return g;
}

// ---------------------------------------------------------------------------
// Commode à tiroirs (avec déco optionnelle).
// ---------------------------------------------------------------------------
export function commode(opts = {}) {
  const { largeur: L = 0.9, hauteur: H = 0.85, profondeur: P = 0.46, tiroirs = 3, couleur: c = "bois_clair", facade = "sauge" } = opts;
  const g = meuble("commode", [L, H, P], { fixation: "sol" });
  const mb = resoudre(c, matBois), mf = resoudre(facade, matLaque);
  const hp = 0.12;
  boite(g, L, H - hp, P, mb, 0, hp, 0, { r: 0.012 });
  const ht = (H - hp - 0.05) / tiroirs;
  for (let i = 0; i < tiroirs; i++) {
    boite(g, L - 0.04, ht - 0.012, 0.02, mf, 0, hp + 0.025 + i * ht, P / 2, { r: 0.004 });
    for (const sx of [-1, 1]) cyl(g, 0.014, 0.02, matMetal("#b99a62"), sx * L * 0.25, hp + 0.025 + i * ht + ht / 2, P / 2 + 0.017, { axe: "z", seg: 8 });
  }
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) cyl(g, 0.02, hp, mb, sx * (L / 2 - 0.05), 0, sz * (P / 2 - 0.05), { rb: 0.014, seg: 7 });
  return g;
}

// ---------------------------------------------------------------------------
// Chaise d'enfant colorée.
// ---------------------------------------------------------------------------
export function chaise_enfant(opts = {}) {
  const { couleur: c = "menthe", bois = "bois_clair" } = opts;
  const g = meuble("chaise_enfant", [0.38, 0.7, 0.4], { fixation: "sol" });
  const mc = resoudre(c, matLaque), mb = resoudre(bois, matBois);
  const ha = 0.38;
  boite(g, 0.36, 0.025, 0.36, mc, 0, ha - 0.025, 0.01, { r: 0.012 });
  for (const sx of [-1, 1]) {
    tige(g, [sx * 0.16, 0, 0.17], [sx * 0.15, ha - 0.02, 0.15], 0.015, mb, 6);
    tige(g, [sx * 0.16, 0, -0.17], [sx * 0.15, 0.68, -0.16], 0.015, mb, 6);
  }
  boite(g, 0.33, 0.13, 0.025, mc, 0, 0.53, -0.16, { r: 0.012 });
  return g;
}

// ---------------------------------------------------------------------------
// Bureau d'enfant (plateau, caisson coloré, pot à crayons, livres, petite lampe).
// ---------------------------------------------------------------------------
export function bureau_enfant(opts = {}) {
  const { largeur: L = 1.0, profondeur: P = 0.55, hauteur: H = 0.64, couleur: c = "blanc", bois = "bois_clair", accent = "moutarde", chaise = true } = opts;
  const g = meuble("bureau_enfant", [L, H + 0.3, P + (chaise ? 0.35 : 0)], { fixation: "sol" });
  const mc = resoudre(c, matLaque), mb = resoudre(bois, matBois), ma = resoudre(accent, matLaque);
  const z0 = chaise ? -0.17 : 0;
  boite(g, L, 0.03, P, mb, 0, H - 0.03, z0, { r: 0.008 });
  boite(g, 0.36, H - 0.03, P - 0.04, mc, L / 2 - 0.2, 0, z0);
  boite(g, 0.32, (H - 0.06) / 2 - 0.02, 0.02, ma, L / 2 - 0.2, 0.03, z0 + P / 2 - 0.01, { r: 0.005 });
  boite(g, 0.32, (H - 0.06) / 2 - 0.02, 0.02, ma, L / 2 - 0.2, H / 2, z0 + P / 2 - 0.01, { r: 0.005 });
  tige(g, [-L / 2 + 0.05, 0, z0 + P / 2 - 0.06], [-L / 2 + 0.06, H - 0.03, z0 + P / 2 - 0.08], 0.02, mb, 6);
  tige(g, [-L / 2 + 0.05, 0, z0 - P / 2 + 0.06], [-L / 2 + 0.06, H - 0.03, z0 - P / 2 + 0.08], 0.02, mb, 6);
  // objets
  cyl(g, 0.035, 0.09, matLaque("corail"), -L / 2 + 0.15, H, z0 - P / 2 + 0.12, { seg: 10 });
  ["bleu_ciel", "moutarde", "menthe"].forEach((cc, i) => tige(g, [-L / 2 + 0.14 + i * 0.012, H + 0.05, z0 - P / 2 + 0.12], [-L / 2 + 0.13 + i * 0.02, H + 0.15, z0 - P / 2 + 0.11 + i * 0.01], 0.005, matMat(cc), 4));
  boite(g, 0.24, 0.02, 0.17, matMat("bleu_canard"), 0.0, H, z0 + 0.02, { ry: 0.2 });
  boite(g, 0.22, 0.02, 0.16, matMat("corail"), 0.0, H + 0.02, z0 + 0.02, { ry: 0.05 });
  if (chaise) {
    const ch = chaise_enfant({ couleur: accent });
    ch.position.set(-0.1, 0, z0 + P / 2 + 0.05);
    ch.rotation.y = Math.PI + 0.25;
    g.add(ch);
  }
  return g;
}

// ---------------------------------------------------------------------------
// Coffre à jouets (avec ballon, cubes et peluche).
// ---------------------------------------------------------------------------
export function coffre_jouets(opts = {}) {
  const { largeur: L = 0.7, couleur: c = "bleu_ciel", jouets = true } = opts;
  const g = meuble("coffre_jouets", [L, 0.5, 0.42], { fixation: "sol" });
  const mc = resoudre(c, matLaque), mb = matBois("bois_clair");
  boite(g, L, 0.4, 0.4, mc, 0, 0.02, 0, { r: 0.02 });
  boite(g, L + 0.02, 0.04, 0.42, mb, 0, 0.42, 0, { r: 0.015 });
  boite(g, L - 0.1, 0.02, 0.03, mb, 0, 0.0, 0.18);
  // poignées en corde
  for (const sx of [-1, 1]) maille(g, geoTore(0.04, 0.008), matMat("creme"), sx * (L / 2 + 0.005), 0.3, 0, { ry: Math.PI / 2 });
  if (jouets) {
    const cubes = [["moutarde", -0.2, 0.0, 0.3], ["corail", -0.12, -0.04, 0.1], ["menthe", -0.16, 0.08, 0.7]];
    cubes.forEach(([cc, x, z, a]) => boite(g, 0.08, 0.08, 0.08, matLaque(cc), x, 0.46, z, { ry: a, r: 0.008 }));
    boite(g, 0.08, 0.08, 0.08, matLaque("bleu_ciel"), -0.16, 0.54, 0.0, { ry: 0.5, r: 0.008 });
    maille(g, geoSphere(0.11, 12, 8), matLaque("corail"), 0.2, 0.46 + 0.11, 0.02);
    const p = peluche({ taille: 0.28 });
    p.position.set(0.0, 0.46, 0.04);
    p.rotation.y = -0.3;
    g.add(p);
  }
  return g;
}

function geoTore(R, r) {
  return geo(`tore_${R}_${r}`, () => new THREE.TorusGeometry(R, r, 4, 12, Math.PI));
}

// ---------------------------------------------------------------------------
// Peluche ourson (assis).
// ---------------------------------------------------------------------------
export function peluche(opts = {}) {
  const { taille: t = 0.3, couleur: c = "#c49a6c" } = opts;
  const g = meuble("peluche", [t * 0.6, t, t * 0.5], { fixation: "pose" });
  const m = resoudre(c, matTissu), clair = matTissu("creme"), nez = matMat("noir");
  maille(g, geoSphere(t * 0.24, 10, 7), m, 0, t * 0.26, 0, { sy: 1.1 });
  maille(g, geoSphere(t * 0.2, 10, 7), m, 0, t * 0.7, 0.01);
  for (const s of [-1, 1]) {
    maille(g, geoSphere(t * 0.075, 7, 5), m, s * t * 0.15, t * 0.86, 0, { sz: 0.6 });
    maille(g, geoSphere(t * 0.08, 7, 5), m, s * t * 0.13, t * 0.08, t * 0.14);
    maille(g, geoSphere(t * 0.07, 7, 5), m, s * t * 0.22, t * 0.36, t * 0.06);
    maille(g, geoSphere(t * 0.018, 5, 4), nez, s * t * 0.07, t * 0.75, t * 0.18);
  }
  maille(g, geoSphere(t * 0.08, 8, 5), clair, 0, t * 0.66, t * 0.16, { sz: 0.7 });
  maille(g, geoSphere(t * 0.025, 5, 4), nez, 0, t * 0.68, t * 0.215);
  return g;
}

// ---------------------------------------------------------------------------
// Poster encadré pour chambre d'enfant (affiche procédurale).
// ---------------------------------------------------------------------------
export function poster_cadre(opts = {}) {
  const { variante = "fusee", largeur = 0.42, hauteur_cadre = 0.55, hauteur = 1.45, couleur: c = "bois_clair" } = opts;
  const g = cadre({ variante, largeur, hauteur_cadre, hauteur, couleur: c, passe_partout: false });
  g.name = "poster_cadre";
  g.userData.type = "poster_cadre";
  return g;
}
