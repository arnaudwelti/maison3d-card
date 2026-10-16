// Cuisine : rangée linéaire et cuisine en L (meubles bas, plan de travail, crédence, meubles hauts),
// modules évier et plaques, four, réfrigérateur, îlot et tabourets.
import * as THREE from "three";
import { matBois, matMat, matMetal, matLaque, matCarrelage, matCeramique, matVerre, couleur, resoudre } from "./materiaux.js";
import { boite, cyl, maille, tige, geoTore, geoCyl, meuble } from "./outils.js";
import { plante } from "./deco.js";

const HB = 0.9, PB = 0.62, PLINTHE = 0.1, EP = 0.04;

// Poignée barre (laiton par défaut).
function poignee(g, x, y, z, long = 0.16, vertical = false, m = matMetal("#b99a62")) {
  if (vertical) boite(g, 0.012, long, 0.022, m, x, y - long / 2, z + 0.011, { r: 0.005 });
  else boite(g, long, 0.012, 0.022, m, x, y, z + 0.011, { r: 0.005 });
}

// Un module bas de largeur w, centré en x (façade à z = PB/2). type : portes | tiroirs | evier | plaques | lave_vaisselle.
function moduleBas(g, x, w, type, o) {
  const { mf, z0 = 0 } = o;
  const zf = z0 + PB / 2 - 0.02;
  const hF = HB - EP - PLINTHE;
  if (type === "tiroirs") {
    const hs = [0.18, 0.27, hF - 0.45 - 0.012];
    let y = PLINTHE + 0.004;
    for (const h of hs) { boite(g, w - 0.006, h - 0.006, 0.02, mf, x, y, zf, { r: 0.003 }); poignee(g, x, y + h - 0.05, zf + 0.01, Math.min(0.3, w * 0.5)); y += h; }
  } else if (type === "plaques") {
    // four encastré sous les plaques
    boite(g, w - 0.006, 0.12, 0.02, mf, x, PLINTHE + 0.004, zf, { r: 0.003 });
    boite(g, w - 0.01, hF - 0.13, 0.02, matMat("noir"), x, PLINTHE + 0.13, zf, { r: 0.004 });
    boite(g, w - 0.12, hF - 0.3, 0.004, matVerre("#2a2f36", 0.85), x, PLINTHE + 0.19, zf + 0.012);
    poignee(g, x, HB - EP - 0.06, zf + 0.012, w - 0.14, false, matMetal("#c9ccce"));
    // table de cuisson vitrocéramique
    boite(g, w - 0.04, 0.006, 0.5, matLaque("noir"), x, HB, z0 - 0.02, { r: 0.004 });
    for (const [dx, dz, r] of [[-0.14, -0.12, 0.09], [0.14, -0.12, 0.07], [-0.14, 0.11, 0.07], [0.14, 0.11, 0.09]]) {
      maille(g, geoTore(r, 0.004, 3, 20), matMat("#555a60"), x + dx * (w / 0.6), HB + 0.006, z0 - 0.02 + dz, { rx: Math.PI / 2 });
    }
  } else {
    const n = w > 0.65 ? 2 : 1;
    const lp = w / n;
    for (let i = 0; i < n; i++) {
      const xi = x - w / 2 + lp * (i + 0.5);
      boite(g, lp - 0.006, hF - 0.008, 0.02, mf, xi, PLINTHE + 0.004, zf, { r: 0.003 });
      if (type === "lave_vaisselle") poignee(g, xi, HB - EP - 0.06, zf + 0.01, lp * 0.6);
      else poignee(g, xi + (n === 2 ? (i ? -1 : 1) : 1) * (lp / 2 - 0.04), HB - EP - 0.06, zf + 0.01, 0.14, true);
    }
    if (type === "evier") {
      // bac inox (rebord + fond sombre) et mitigeur col de cygne
      boite(g, Math.min(0.62, w - 0.12), 0.006, 0.42, matMetal("#c9ccce"), x, HB, z0 - 0.02, { r: 0.01 });
      boite(g, Math.min(0.56, w - 0.18), 0.002, 0.36, matMetal("#8d9196"), x, HB + 0.006, z0 - 0.02);
      const xm = x, zm = z0 - 0.25;
      cyl(g, 0.022, 0.05, matMetal("#d6d9db"), xm, HB, zm, { seg: 10 });
      const ch = matMetal("#d6d9db");
      tige(g, [xm, HB + 0.05, zm], [xm, HB + 0.3, zm], 0.012, ch, 8);
      tige(g, [xm, HB + 0.3, zm], [xm, HB + 0.3, zm + 0.16], 0.012, ch, 8);
      tige(g, [xm, HB + 0.3, zm + 0.16], [xm, HB + 0.24, zm + 0.18], 0.011, ch, 8);
    }
  }
}

// Une rangée linéaire construite dans `g` (repère local : façade +Z, centre de la rangée en x = 0).
function rangee(g, L, o) {
  const { mf, mp, hauts, mh, credence, evier, plaques, z0 = 0, modulesHauts = true, deco = true } = o;
  const n = Math.max(1, Math.round(L / 0.6));
  const w = L / n;
  const types = Array(n).fill("portes");
  const iE = evier === false ? -1 : Math.min(n - 1, evier ?? (n >= 3 ? 1 : 0));
  const iP = plaques === false ? -1 : Math.min(n - 1, plaques ?? (n - 2 >= 0 && n - 2 !== iE ? n - 2 : n - 1));
  if (iE >= 0) types[iE] = "evier";
  if (iP >= 0 && iP !== iE) types[iP] = "plaques";
  if (n >= 4 && iE + 1 < n && types[iE + 1] === "portes") types[iE + 1] = "lave_vaisselle";
  if (n >= 3) { const k = types.indexOf("portes"); if (k >= 0) types[k] = "tiroirs"; }
  // caisson, plinthe, plan de travail
  boite(g, L, PLINTHE, PB - 0.08, matMat("anthracite"), 0, 0, z0 - 0.04);
  boite(g, L, HB - EP - PLINTHE, PB - 0.04, matMat("blanc"), 0, PLINTHE, z0 - 0.02);
  boite(g, L, EP, PB + 0.01, mp, 0, HB - EP, z0 + 0.005, { r: 0.006 });
  types.forEach((t, i) => moduleBas(g, -L / 2 + w * (i + 0.5), w, t, { mf, z0 }));
  if (credence) boite(g, L, 0.55, 0.012, matCarrelage(), 0, HB, z0 - PB / 2 + 0.006);
  if (hauts) {
    const yh = HB + 0.58, hh = 0.7, ph = 0.34, zh = z0 - PB / 2 + ph / 2;
    for (let i = 0; i < n; i++) {
      const x = -L / 2 + w * (i + 0.5);
      if (types[i] === "plaques") {
        // hotte
        boite(g, w - 0.02, 0.1, 0.48, matMetal("#c9ccce"), x, yh + 0.05, z0 - PB / 2 + 0.24, { r: 0.01 });
        boite(g, 0.26, hh - 0.15, 0.24, matMetal("#c9ccce"), x, yh + 0.15, z0 - PB / 2 + 0.12);
        continue;
      }
      if (!modulesHauts) continue;
      if (i === 0 && deco && n >= 3) {
        // étagère ouverte bois avec bocaux et plante
        for (const dy of [0.05, 0.38]) boite(g, w - 0.02, 0.03, 0.26, mp, x, yh + dy, z0 - PB / 2 + 0.13);
        for (let k = 0; k < 3; k++) cyl(g, 0.045, 0.16 - k * 0.02, matVerre("#e8f0ec", 0.5), x - 0.17 + k * 0.12, yh + 0.08, z0 - PB / 2 + 0.13, { seg: 10 });
        const p = plante({ taille: "mini", espece: "touffe", graine: 9 });
        p.position.set(x + 0.1, yh + 0.41, z0 - PB / 2 + 0.13);
        g.add(p);
        boite(g, 0.14, 0.2, 0.03, matMat("terracotta"), x - 0.12, yh + 0.41, z0 - PB / 2 + 0.06);
        continue;
      }
      boite(g, w, hh, ph - 0.02, matMat("blanc"), x, yh, zh - 0.01);
      boite(g, w - 0.006, hh - 0.006, 0.02, mh, x, yh + 0.003, zh + ph / 2 - 0.01, { r: 0.003 });
      poignee(g, x + (i % 2 ? -1 : 1) * (w / 2 - 0.05), yh + 0.04, zh + ph / 2, 0.14);
    }
  }
}

// ---------------------------------------------------------------------------
// Cuisine linéaire (rangée contre un mur).
// ---------------------------------------------------------------------------
export function cuisine_lineaire(opts = {}) {
  const { longueur: L = 3.0, facade = "sauge", plan = "bois_clair", hauts = true, facade_hauts = "blanc", credence = true, evier, plaques, deco = true } = opts;
  const g = meuble("cuisine_lineaire", [L, hauts ? 2.2 : HB, PB], { fixation: "sol" });
  rangee(g, L, { mf: resoudre(facade, matLaque), mp: resoudre(plan, matBois), mh: resoudre(facade_hauts, matLaque), hauts, credence, evier, plaques, deco });
  return g;
}

// ---------------------------------------------------------------------------
// Cuisine en L. cote : "gauche" ou "droite" (retour vu de face). Évier sur le retour, plaques au fond.
// ---------------------------------------------------------------------------
export function cuisine_L(opts = {}) {
  const { longueur: L = 3.0, retour: R = 2.2, cote = "gauche", facade = "sauge", plan = "bois_clair", hauts = true, facade_hauts = "blanc", credence = true } = opts;
  const g = meuble("cuisine_L", [L, hauts ? 2.2 : HB, R], { fixation: "sol", cote });
  const s = cote === "droite" ? 1 : -1;
  const o = { mf: resoudre(facade, matLaque), mp: resoudre(plan, matBois), mh: resoudre(facade_hauts, matLaque), hauts, credence };
  const fond = new THREE.Group();
  fond.position.set(0, 0, -R / 2 + PB / 2);
  const nF = Math.round(L / 0.6);
  rangee(fond, L, { ...o, evier: false, plaques: Math.floor(nF / 2) + (s < 0 ? 0 : -1), deco: false });
  g.add(fond);
  const ret = new THREE.Group();
  const Lr = R - PB;
  ret.rotation.y = s < 0 ? Math.PI / 2 : -Math.PI / 2;
  ret.position.set(s * (L / 2 - PB / 2), 0, PB / 2);
  rangee(ret, Lr, { ...o, evier: Math.max(0, Math.round(Lr / 0.6) - 2), plaques: false, modulesHauts: false, deco: false });
  g.add(ret);
  return g;
}

// ---------------------------------------------------------------------------
// Modules seuls : évier (meuble bas 80 cm) et plaques avec four (60 cm).
// ---------------------------------------------------------------------------
export function evier(opts = {}) {
  const { largeur: L = 0.8, facade = "sauge", plan = "bois_clair" } = opts;
  const g = meuble("evier", [L, HB + 0.3, PB], { fixation: "sol" });
  rangee(g, L, { mf: resoudre(facade, matLaque), mp: resoudre(plan, matBois), hauts: false, credence: false, evier: 0, plaques: false });
  return g;
}

export function plaques(opts = {}) {
  const { largeur: L = 0.6, facade = "sauge", plan = "bois_clair" } = opts;
  const g = meuble("plaques", [L, HB, PB], { fixation: "sol" });
  rangee(g, L, { mf: resoudre(facade, matLaque), mp: resoudre(plan, matBois), hauts: false, credence: false, evier: false, plaques: 0 });
  return g;
}

// ---------------------------------------------------------------------------
// Four : colonne (four + micro-ondes) ou four seul posable.
// ---------------------------------------------------------------------------
export function four(opts = {}) {
  const { colonne = true, largeur: L = 0.6, hauteur: H = colonne ? 2.15 : 0.6, facade = "sauge" } = opts;
  const g = meuble("four", [L, H, PB], { fixation: "sol" });
  const mf = resoudre(facade, matLaque);
  const zf = PB / 2 - 0.02;
  const appareil = (y, h, micro) => {
    boite(g, L - 0.01, h, 0.02, matMat("noir"), 0, y, zf, { r: 0.004 });
    boite(g, micro ? L * 0.6 : L - 0.12, h - (micro ? 0.08 : 0.16), 0.004, matVerre("#2a2f36", 0.85), micro ? -L * 0.12 : 0, y + (micro ? 0.04 : 0.05), zf + 0.012);
    poignee(g, micro ? L / 2 - 0.08 : 0, y + h - 0.05, zf + 0.012, micro ? 0.12 : L - 0.14, micro, matMetal("#c9ccce"));
  };
  if (colonne) {
    boite(g, L, PLINTHE, PB - 0.08, matMat("anthracite"), 0, 0, -0.04);
    boite(g, L, H - PLINTHE, PB - 0.02, matMat("blanc"), 0, PLINTHE, -0.01);
    boite(g, L - 0.006, 0.6, 0.02, mf, 0, PLINTHE + 0.004, zf, { r: 0.003 });
    poignee(g, 0, PLINTHE + 0.55, zf + 0.01, 0.3);
    appareil(PLINTHE + 0.62, 0.58, false);
    appareil(PLINTHE + 1.22, 0.38, true);
    boite(g, L - 0.006, H - PLINTHE - 1.62, 0.02, mf, 0, PLINTHE + 1.615, zf, { r: 0.003 });
    poignee(g, 0, PLINTHE + 1.67, zf + 0.01, 0.3);
  } else {
    boite(g, L, H, PB - 0.04, matMat("gris_clair"), 0, 0, -0.02, { r: 0.01 });
    appareil(0.0, H - 0.01, false);
  }
  return g;
}

// ---------------------------------------------------------------------------
// Réfrigérateur combiné (2 portes), dessins d'enfants aimantés en option.
// ---------------------------------------------------------------------------
export function refrigerateur(opts = {}) {
  const { largeur: L = 0.6, hauteur: H = 1.86, profondeur: P = 0.66, couleur: c = "blanc", aimants = true } = opts;
  const g = meuble("refrigerateur", [L, H, P], { fixation: "sol" });
  const mc = c === "inox" ? matMetal("#c9ccce") : resoudre(c, matLaque);
  boite(g, L, H, P - 0.03, mc, 0, 0, -0.015, { r: 0.02 });
  const hb = H * 0.38;
  boite(g, L - 0.01, hb - 0.01, 0.03, mc, 0, 0.005, P / 2 - 0.015, { r: 0.012 });
  boite(g, L - 0.01, H - hb - 0.015, 0.03, mc, 0, hb + 0.005, P / 2 - 0.015, { r: 0.012 });
  const mpg = matMetal("#c9ccce");
  boite(g, 0.02, 0.32, 0.025, mpg, L / 2 - 0.05, hb + 0.08, P / 2 + 0.012, { r: 0.008 });
  boite(g, 0.02, 0.22, 0.025, mpg, L / 2 - 0.05, hb - 0.3, P / 2 + 0.012, { r: 0.008 });
  if (aimants) {
    boite(g, 0.16, 0.2, 0.003, matMat("#fdf6e3"), -0.1, hb + 0.55, P / 2 + 0.002, { rz: 0.06 });
    boite(g, 0.1, 0.06, 0.003, matMat("bleu_ciel"), -0.12, hb + 0.6, P / 2 + 0.004, { rz: 0.06 });
    cyl(g, 0.03, 0.003, matMat("moutarde"), -0.05, hb + 0.66, P / 2 + 0.004, { axe: "z", seg: 10 });
    boite(g, 0.14, 0.18, 0.003, matMat("#e6f2ea"), 0.08, hb + 0.3, P / 2 + 0.002, { rz: -0.08 });
    boite(g, 0.06, 0.06, 0.003, matMat("corail"), 0.08, hb + 0.38, P / 2 + 0.004, { rz: -0.08 });
    cyl(g, 0.012, 0.008, matMat("corail"), -0.1, hb + 0.75, P / 2 + 0.004, { axe: "z", seg: 8 });
  }
  return g;
}

// ---------------------------------------------------------------------------
// Tabouret de bar (assise bois ronde, piètement métal, repose-pieds).
// ---------------------------------------------------------------------------
export function tabouret(opts = {}) {
  const { hauteur: H = 0.65, couleur: c = "bois_clair", metal = "noir" } = opts;
  const g = meuble("tabouret", [0.4, H, 0.4], { fixation: "sol" });
  const mb = resoudre(c, matBois), mm = matMetal(couleur(metal) === couleur("noir") ? "#2c2d30" : couleur(metal));
  cyl(g, 0.18, 0.04, mb, 0, H - 0.04, 0, { seg: 18 });
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
    tige(g, [Math.cos(a) * 0.17, 0, Math.sin(a) * 0.17], [Math.cos(a) * 0.12, H - 0.04, Math.sin(a) * 0.12], 0.011, mm, 5);
  }
  maille(g, geoTore(0.15, 0.008, 4, 16), mm, 0, H * 0.32, 0, { rx: Math.PI / 2 });
  return g;
}

// ---------------------------------------------------------------------------
// Îlot central : rangement côté cuisine (−Z), débord et tabourets côté +Z.
// ---------------------------------------------------------------------------
export function ilot(opts = {}) {
  const { longueur: L = 1.8, profondeur: P = 0.9, tabourets = 3, facade = "sauge", plan = "bois_clair" } = opts;
  const g = meuble("ilot", [L, HB, P + (tabourets ? 0.35 : 0)], { fixation: "sol" });
  const z0 = tabourets ? -0.17 : 0;
  const mf = resoudre(facade, matLaque), mp = resoudre(plan, matBois);
  const pc = P - 0.28;
  const zc = z0 - P / 2 + pc / 2;
  boite(g, L - 0.04, PLINTHE, pc - 0.08, matMat("anthracite"), 0, 0, zc);
  boite(g, L - 0.04, HB - EP - PLINTHE, pc, mf, 0, PLINTHE, zc);
  // façade côté cuisine (−Z) : portes rainurées
  const n = Math.round(L / 0.45);
  for (let i = 0; i < n; i++) boite(g, (L - 0.04) / n - 0.008, HB - EP - PLINTHE - 0.01, 0.015, mf, -L / 2 + 0.02 + ((L - 0.04) / n) * (i + 0.5), PLINTHE + 0.005, zc - pc / 2 - 0.006, { r: 0.003 });
  boite(g, L, EP, P, mp, 0, HB - EP, z0, { r: 0.008 });
  // corbeille de fruits
  cyl(g, 0.15, 0.06, matBois("bois_miel"), -L / 2 + 0.35, HB, z0, { rb: 0.09, seg: 14 });
  for (const [dx, dz, c] of [[0, 0, "moutarde"], [0.06, 0.04, "corail"], [-0.05, 0.04, "feuillage_clair"], [0.02, -0.06, "corail"]])
    cyl(g, 0.04, 0.07, matMat(c), -L / 2 + 0.35 + dx, HB + 0.03, z0 + dz, { seg: 8 });
  for (let i = 0; i < tabourets; i++) {
    const t = tabouret({});
    t.position.set((i - (tabourets - 1) / 2) * (L / tabourets), 0, z0 + P / 2 + 0.05);
    g.add(t);
  }
  return g;
}
