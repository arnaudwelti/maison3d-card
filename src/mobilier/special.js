// Éléments spéciaux : escalier en colimaçon, filet tendu, garde-corps, porte, fenêtre, baie vitrée.
import * as THREE from "three";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
import { matBois, matMat, matMetal, matLaque, matVerre, matFilet, matTissu, matEmissif, couleur, resoudre } from "./materiaux.js";
import { boite, cyl, maille, tige, geo, geoCyl, geoSphere, meuble, deg } from "./outils.js";

// ---------------------------------------------------------------------------
// Station d'aspirateur robot (Dreame L50s Pro Ultra) : socle-rampe, colonne blanche à capot gris,
// fenêtre des réservoirs et voyant, et le robot rond garé devant (sous-groupe nommé « robot »,
// masqué par le moteur quand l'aspirateur est en nettoyage). Origine : centre de l'emprise totale
// (colonne + robot), façade +Z. userData.role = "aspirateur".
//  largeur (0,34), profondeur (colonne, 0,42), hauteur (0,58), robot (true), diametre_robot (0,35).
// ---------------------------------------------------------------------------
export function station_aspirateur(opts = {}) {
  const { largeur: L = 0.34, profondeur: P = 0.42, hauteur: H = 0.58, robot = true, diametre_robot: dr = 0.35, couleur: c = "blanc_pur", capot = "#8f9499" } = opts;
  const rr = dr / 2;
  const avance = robot ? rr + 0.06 : 0.06; // le robot dépasse de la colonne
  const D = P + avance;
  const g = meuble("station_aspirateur", [Math.max(L, dr), H, D], { fixation: "sol", interactif: true, role: "aspirateur", animations: { robot: "visible" } });
  const z0 = -D / 2; // dos
  const zf = z0 + P; // façade de la colonne
  const blanc = resoudre(c, matLaque), gris = matLaque(couleur(capot)), sombre = matMat("anthracite");
  // socle et rampe d'accueil
  boite(g, L, 0.025, D - 0.02, matMat("gris_clair"), 0, 0, (z0 + z0 + D) / 2 + 0.01, { r: 0.008 });
  // colonne principale arrondie
  boite(g, L, H - 0.06, P, blanc, 0, 0.025, z0 + P / 2, { r: 0.03, s: 2 });
  // capot supérieur gris légèrement débordant
  boite(g, L + 0.01, 0.05, P + 0.01, gris, 0, H - 0.05, z0 + P / 2, { r: 0.02, s: 2 });
  // fenêtre des réservoirs (eau propre / eau sale) en façade
  boite(g, L * 0.36, 0.22, 0.012, matVerre("#9fc6d6", 0.75), -L * 0.2, H - 0.32, zf, { r: 0.004 });
  boite(g, L * 0.36, 0.22, 0.012, matVerre("#9aa3a8", 0.75), L * 0.2, H - 0.32, zf, { r: 0.004 });
  // bouche d'accueil sombre au pied de la colonne
  boite(g, L * 0.78, 0.09, 0.02, sombre, 0, 0.025, zf - 0.005, { r: 0.01 });
  const vo = maille(g, geoSphere(0.008, 8, 6), matEmissif("#5fd08a"), 0, H - 0.075, zf + 0.007);
  vo.name = "voyant";
  if (robot) {
    const rb = new THREE.Group();
    rb.name = "robot";
    rb.position.set(0, 0.025, zf - 0.05 + rr);
    cyl(rb, rr, 0.075, blanc, 0, 0.004, 0, { seg: 28 });
    cyl(rb, rr + 0.006, 0.03, sombre, 0, 0.01, 0, { seg: 28 }); // pare-chocs
    cyl(rb, rr * 0.92, 0.006, gris, 0, 0.079, 0, { seg: 28 }); // capot
    cyl(rb, 0.045, 0.022, sombre, 0, 0.085, -rr * 0.25, { seg: 16 }); // lidar
    boite(rb, 0.06, 0.006, 0.02, gris, 0, 0.083, rr * 0.55, { r: 0.003 }); // bouton
    g.add(rb);
  }
  return g;
}

// ---------------------------------------------------------------------------
// Échelle de meunier pour mezzanine : deux montants inclinés en bois, barreaux ronds, crochets
// verticaux au-dessus du plancher de la mezzanine (main courante). Origine : centre de l'emprise au sol,
// façade (pied de l'échelle) vers +Z ; le haut s'appuie sur le bord de la mezzanine côté −Z.
//  hauteur (2,10 : du sol au plancher de la mezzanine), largeur (0,44), inclinaison (75°),
//  depasse (0,85 au-dessus du plancher), pas (0,28), couleur ("bois_clair").
// ---------------------------------------------------------------------------
export function echelle(opts = {}) {
  const { hauteur: H = 2.1, largeur: L = 0.44, inclinaison = 75, depasse = 0.85, pas = 0.28, couleur: c = "bois_clair" } = opts;
  const recul = H / Math.tan(deg(inclinaison));
  const em = 0.05; // section des montants
  const D = recul + em;
  const g = meuble("echelle", [L + em, H + depasse, D], { fixation: "sol" });
  const mb = resoudre(c, matBois), mm = matMetal("#9ea1a4");
  const zPied = D / 2 - em / 2, zHaut = -D / 2 + em / 2;
  for (const sx of [-1, 1]) {
    const x = sx * L / 2;
    tige(g, [x, 0, zPied], [x, H, zHaut], em / 2, mb, 6);
    tige(g, [x, H - 0.03, zHaut], [x, H + depasse, zHaut], em / 2.4, mb, 6);
    cyl(g, em * 0.55, 0.012, mm, x, 0, zPied, { seg: 8 }); // patin
  }
  const n = Math.max(2, Math.floor(H / pas));
  for (let i = 1; i <= n; i++) {
    const t = (i * H) / (n + 1) / H;
    const y = t * H, z = zPied + (zHaut - zPied) * t;
    cyl(g, 0.016, L, mb, 0, y, z, { axe: "x", seg: 8 });
  }
  return g;
}

// ---------------------------------------------------------------------------
// Escalier en colimaçon.
//  rayon (1,0 m), hauteur (2,70 m, du sol au palier d'arrivée), marches (14), sens ("horaire" | "antihoraire",
//  vu de dessus, en montant), angle_total (degrés balayés par les marches, 330 par défaut),
//  angle_depart (degrés : 0 = première marche vers +Z). Origine : axe du mât, au sol.
//  La hauteur de marche vaut hauteur / (marches + 1) : la dernière contremarche arrive au niveau supérieur.
// ---------------------------------------------------------------------------
export function escalier_colimacon(opts = {}) {
  const { rayon: R = 1.0, hauteur: H = 2.7, marches: n = 14, sens = "antihoraire", angle_total = 330, angle_depart = 0, couleur: c = "bois_clair", metal = "anthracite", rampe = true } = opts;
  const g = meuble("escalier_colimacon", [2 * R, H + 0.95, 2 * R], { fixation: "sol", sens, marches: n });
  const mb = resoudre(c, matBois), mm = matMetal(couleur(metal));
  const s = sens === "horaire" ? -1 : 1;
  const da = deg(angle_total) / n;
  const h = H / (n + 1);
  const rm = 0.07, ep = 0.045;
  const geoMarche = geo(`marche_${R}_${Math.round(da * 1000)}`, () => {
    const sh = new THREE.Shape();
    const a = (da / 2) * 1.08, k = 5;
    sh.moveTo(Math.sin(-a) * rm, Math.cos(-a) * rm);
    for (let i = 0; i <= k; i++) { const t = -a + (2 * a * i) / k; sh.lineTo(Math.sin(t) * R, Math.cos(t) * R); }
    sh.lineTo(Math.sin(a) * rm, Math.cos(a) * rm);
    sh.lineTo(Math.sin(-a) * rm, Math.cos(-a) * rm);
    const gg = new THREE.ExtrudeGeometry(sh, { depth: ep, bevelEnabled: true, bevelThickness: 0.006, bevelSize: 0.008, bevelSegments: 1 });
    gg.rotateX(Math.PI / 2);
    return gg;
  });
  cyl(g, rm, H + 0.95, mm, 0, 0, 0, { seg: 12 });
  cyl(g, rm * 1.9, 0.02, mm, 0, 0, 0, { seg: 14 });
  const pointsRampe = [];
  for (let k = 0; k < n; k++) {
    const a = deg(angle_depart) + s * k * da;
    const y = (k + 1) * h;
    const m = maille(g, geoMarche, mb, 0, y - 0.006, 0, { ry: a });
    m.name = "";
    // collier sur le mât
    cyl(g, rm * 1.18, 0.05, mm, 0, y - ep - 0.04, 0, { seg: 10 });
    if (rampe) {
      const rb = R - 0.04;
      const ab = a + s * da * 0.25;
      cyl(g, 0.011, 0.9, mm, Math.sin(ab) * rb, y, Math.cos(ab) * rb, { seg: 5 });
    }
  }
  if (rampe) {
    const rb = R - 0.04;
    const a0 = deg(angle_depart) - s * da * 0.25, a1 = deg(angle_depart) + s * (n - 1 + 0.25) * da + s * da * 0.6;
    const y0 = h + 0.9 - 0.02, y1 = n * h + 0.9 + h * 0.6;
    const N = Math.max(24, n * 3);
    for (let i = 0; i <= N; i++) {
      const t = i / N, a = a0 + (a1 - a0) * t;
      pointsRampe.push(new THREE.Vector3(Math.sin(a) * rb, y0 + (y1 - y0) * t, Math.cos(a) * rb));
    }
    const courbe = new THREE.CatmullRomCurve3(pointsRampe);
    g.add(new THREE.Mesh(new THREE.TubeGeometry(courbe, N, 0.022, 6), mb));
  }
  return g;
}

// ---------------------------------------------------------------------------
// Filet tendu (trampoline d'habitat) au-dessus d'un vide.
//  polygone : [[x, z], ...] en mètres. mode : "texture" (alpha procédural, défaut, idéal sur mobile)
//  ou "lignes" (LineSegments losanges découpés au polygone). maille : pas des losanges (m).
//  centrer (true) : le polygone est recentré sur le centre de son emprise, conservé dans userData.centre.
//  Aucun meuble ne doit être posé dessus (userData.posable = false).
// ---------------------------------------------------------------------------
export function filet(opts = {}) {
  const { polygone = [[-1.6, -1.1], [1.6, -1.1], [1.6, 1.1], [-1.6, 1.1]], mode = "cordes", couleur: c = "#f1ebdd", cordage = "#c7ae82", centrer = true } = opts;
  const pas = opts.maille ?? (mode === "cordes" ? 0.2 : 0.09);
  let xs = polygone.map((p) => p[0]), zs = polygone.map((p) => p[1]);
  const cx = (Math.min(...xs) + Math.max(...xs)) / 2, cz = (Math.min(...zs) + Math.max(...zs)) / 2;
  const pts = centrer ? polygone.map(([x, z]) => [x - cx, z - cz]) : polygone.map((p) => [...p]);
  xs = pts.map((p) => p[0]); zs = pts.map((p) => p[1]);
  const lx = Math.max(...xs) - Math.min(...xs), lz = Math.max(...zs) - Math.min(...zs);
  const g = meuble("filet", [lx, 0.05, lz], { fixation: "suspendu", role: "filet", posable: false, centre: [cx, cz], polygone: pts });
  if (mode === "cordes") {
    // Cordes réelles (bandes fines) en losanges, découpées au polygone : reste nettement ajouré de loin,
    // sans dépendre des mipmaps d'une texture alpha (qui griseraient le filet sur iPhone).
    const { epaisseur_corde: ec = 0.032 } = opts;
    const bandes = [];
    const D = Math.hypot(lx, lz) + pas;
    const k = Math.SQRT1_2;
    const couper = (ox, oz, dx, dz) => {
      const ts = [];
      for (let i = 0; i < pts.length; i++) {
        const [ax, az] = pts[i], [bx, bz] = pts[(i + 1) % pts.length];
        const ex = bx - ax, ez = bz - az;
        const den = dx * ez - dz * ex;
        if (Math.abs(den) < 1e-9) continue;
        const t = ((ax - ox) * ez - (az - oz) * ex) / den;
        const u = ((ax - ox) * dz - (az - oz) * dx) / den;
        if (u >= 0 && u < 1) ts.push(t);
      }
      ts.sort((a, b) => a - b);
      for (let i = 0; i + 1 < ts.length; i += 2) {
        const L = ts[i + 1] - ts[i];
        if (L < 0.02) continue;
        const b = new THREE.BoxGeometry(L, 0.014, ec);
        b.rotateY(-Math.atan2(dz, dx));
        const tm = (ts[i] + ts[i + 1]) / 2;
        b.translate(ox + dx * tm, 0, oz + dz * tm);
        bandes.push(b);
      }
    };
    for (let d = -D; d <= D; d += pas) {
      // droites à +45° et −45°, décalées perpendiculairement de d
      couper(-d * k, d * k, k, k);
      couper(d * k, d * k, k, -k);
    }
    if (bandes.length) {
      const gg = mergeGeometries(bandes);
      bandes.forEach((b) => b.dispose());
      const me = new THREE.Mesh(gg, matMat(couleur(c)));
      me.name = "cordes";
      g.add(me);
    }
  } else if (mode === "lignes") {
    const seg = [];
    const coupe = (ox, oz, dx, dz) => {
      // intersections de la droite (o + t d) avec les arêtes du polygone
      const ts = [];
      for (let i = 0; i < pts.length; i++) {
        const [ax, az] = pts[i], [bx, bz] = pts[(i + 1) % pts.length];
        const ex = bx - ax, ez = bz - az;
        const den = dx * ez - dz * ex;
        if (Math.abs(den) < 1e-9) continue;
        const t = ((ax - ox) * ez - (az - oz) * ex) / den;
        const u = ((ax - ox) * dz - (az - oz) * dx) / den;
        if (u >= 0 && u < 1) ts.push(t);
      }
      ts.sort((a, b) => a - b);
      for (let i = 0; i + 1 < ts.length; i += 2) seg.push(ox + dx * ts[i], 0, oz + dz * ts[i], ox + dx * ts[i + 1], 0, oz + dz * ts[i + 1]);
    };
    const D = Math.hypot(lx, lz);
    const k = Math.SQRT1_2;
    for (let d = -D; d <= D; d += pas) {
      coupe(d * k, d * k * -1 + 0, k, k);
      coupe(d * k, d * k, k, -k);
    }
    const gg = new THREE.BufferGeometry();
    gg.setAttribute("position", new THREE.Float32BufferAttribute(seg, 3));
    const l = new THREE.LineSegments(gg, new THREE.LineBasicMaterial({ color: couleur(c), transparent: true, opacity: 0.85 }));
    l.name = "maillage";
    g.add(l);
  } else {
    const sh = new THREE.Shape(pts.map(([x, z]) => new THREE.Vector2(x, z)));
    const gg = new THREE.ShapeGeometry(sh);
    gg.rotateX(Math.PI / 2);
    const p = gg.attributes.position, uv = gg.attributes.uv;
    for (let i = 0; i < p.count; i++) uv.setXY(i, p.getX(i) / pas, p.getZ(i) / pas);
    const me = new THREE.Mesh(gg, matFilet(couleur(c)));
    me.name = "maillage";
    me.renderOrder = 1;
    g.add(me);
  }
  // cordage de bordure tendu et anneaux d'ancrage
  const mc = matTissu(couleur(cordage));
  for (let i = 0; i < pts.length; i++) {
    const [ax, az] = pts[i], [bx, bz] = pts[(i + 1) % pts.length];
    tige(g, [ax, 0, az], [bx, 0, bz], 0.022, mc, 6);
    maille(g, geoSphere(0.04, 8, 6), matMetal("#9ea1a4"), ax, 0, az);
    // tendeurs vers le bord (petits segments perpendiculaires)
    const L = Math.hypot(bx - ax, bz - az), nT = Math.floor(L / 0.35);
    for (let j = 1; j < nT; j++) {
      const t = j / nT, x = ax + (bx - ax) * t, z = az + (bz - az) * t;
      maille(g, geoSphere(0.016, 5, 4), mc, x, 0, z);
    }
  }
  return g;
}

// ---------------------------------------------------------------------------
// Garde-corps le long de X : "verre" (panneaux vitrés) ou "barreaux". Main courante bois.
// ---------------------------------------------------------------------------
export function garde_corps(opts = {}) {
  const { longueur: L = 2.0, hauteur: H = 1.0, type = "verre", metal = "anthracite", main_courante = "bois_clair" } = opts;
  const g = meuble("garde_corps", [L, H, 0.06], { fixation: "sol", type });
  const mm = matMetal(couleur(metal));
  const nP = Math.max(1, Math.round(L / 1.0));
  for (let i = 0; i <= nP; i++) boite(g, 0.04, H - 0.04, 0.04, mm, -L / 2 + 0.02 + (i / nP) * (L - 0.04), 0, 0);
  boite(g, L, 0.04, 0.07, resoudre(main_courante, matBois), 0, H - 0.04, 0, { r: 0.015 });
  if (type === "verre") {
    for (let i = 0; i < nP; i++) {
      const x0 = -L / 2 + 0.04 + (i / nP) * (L - 0.04), x1 = -L / 2 + ((i + 1) / nP) * (L - 0.04);
      boite(g, x1 - x0 - 0.02, H - 0.2, 0.012, matVerre("#d4e9ef", 0.25), (x0 + x1) / 2, 0.1, 0);
    }
  } else {
    boite(g, L, 0.03, 0.03, mm, 0, 0.08, 0);
    const nb = Math.round(L / 0.11);
    for (let i = 1; i < nb; i++) cyl(g, 0.009, H - 0.16, mm, -L / 2 + (i / nb) * L, 0.11, 0, { seg: 5 });
  }
  return g;
}

// ---------------------------------------------------------------------------
// Porte intérieure : bâti (épaisseur du mur), chambranles, vantail nommé « vantail »
// (pivot sur la charnière, ouverture en degrés), poignées. Origine : bas du centre de l'ouverture,
// dans le plan médian du mur. sens : "gauche" (charnière en −X) ou "droite".
// ---------------------------------------------------------------------------
export function porte(opts = {}) {
  const { largeur: L = 0.83, hauteur: H = 2.04, epaisseur_mur: E = 0.1, ouverture = 0, sens = "gauche", couleur: c = "blanc", style = "pleine", bati = "blanc" } = opts;
  const g = meuble("porte", [L + 0.14, H + 0.07, E + 0.02], { fixation: "mur" });
  const mbati = resoudre(bati, matLaque), mv = resoudre(c, matLaque);
  const e = 0.03;
  boite(g, e, H, E, mbati, -L / 2 - e / 2, 0, 0);
  boite(g, e, H, E, mbati, L / 2 + e / 2, 0, 0);
  boite(g, L + 2 * e, e, E, mbati, 0, H, 0);
  for (const sz of [-1, 1]) {
    const z = sz * (E / 2 + 0.006);
    boite(g, 0.06, H + 0.03, 0.012, mbati, -L / 2 - 0.03, 0, z);
    boite(g, 0.06, H + 0.03, 0.012, mbati, L / 2 + 0.03, 0, z);
    boite(g, L + 0.18, 0.06, 0.012, mbati, 0, H + 0.0, z);
  }
  const s = sens === "droite" ? 1 : -1;
  const vantail = new THREE.Group();
  vantail.name = "vantail";
  vantail.position.set(s * (L / 2 - 0.005), 0, E / 2 - 0.02);
  vantail.rotation.y = s * deg(ouverture);
  const lv = L - 0.01, ev = 0.04;
  const xv = -s * lv / 2;
  if (style === "vitree") {
    boite(vantail, lv, 0.25, ev, mv, xv, 0.005, 0, { r: 0.004 });
    boite(vantail, lv, 0.2, ev, mv, xv, H - 0.21, 0, { r: 0.004 });
    boite(vantail, 0.12, H - 0.46, ev, mv, xv - lv / 2 + 0.06, 0.255, 0);
    boite(vantail, 0.12, H - 0.46, ev, mv, xv + lv / 2 - 0.06, 0.255, 0);
    boite(vantail, lv - 0.24, H - 0.46, 0.008, matVerre("#dde9ec", 0.35), xv, 0.255, 0);
  } else {
    boite(vantail, lv, H - 0.01, ev, mv, xv, 0.005, 0, { r: 0.004 });
    // moulures discrètes
    for (const sz of [-1, 1]) {
      boite(vantail, lv - 0.2, 0.7, 0.004, mv, xv, 0.25, sz * (ev / 2 + 0.002));
      boite(vantail, lv - 0.2, 0.7, 0.004, mv, xv, 1.15, sz * (ev / 2 + 0.002));
    }
  }
  const pm = matMetal("#2c2d30");
  const xp = xv - s * (lv / 2 - 0.07);
  for (const sz of [-1, 1]) {
    cyl(vantail, 0.025, 0.012, pm, xp, 1.0, sz * (ev / 2 + 0.006), { axe: "z", seg: 10 });
    boite(vantail, 0.12, 0.018, 0.018, pm, xp + s * 0.05, 0.99, sz * (ev / 2 + 0.03), { r: 0.008 });
  }
  g.add(vantail);
  return g;
}

// ---------------------------------------------------------------------------
// Fenêtre : dormant, 1 ou 2 ouvrants vitrés, tablette intérieure. Origine au sol, au centre
// de l'ouverture, dans le plan médian du mur ; la fenêtre commence à `allege`. Intérieur vers +Z.
// ---------------------------------------------------------------------------
export function fenetre(opts = {}) {
  const { largeur: L = 1.2, hauteur: H = 1.25, allege = 0.9, epaisseur_mur: E = 0.25, vantaux = L >= 0.85 ? 2 : 1, couleur: c = "blanc", tablette = "bois_clair" } = opts;
  const g = meuble("fenetre", [L, H, E], { fixation: "mur", allege });
  const mc = resoudre(c, matLaque), mv = matVerre("#cfe6ef", 0.3);
  const ed = 0.06, pd = 0.07, y0 = allege;
  // dormant
  boite(g, L, ed, pd, mc, 0, y0, 0);
  boite(g, L, ed, pd, mc, 0, y0 + H - ed, 0);
  boite(g, ed, H - 2 * ed, pd, mc, -L / 2 + ed / 2, y0 + ed, 0);
  boite(g, ed, H - 2 * ed, pd, mc, L / 2 - ed / 2, y0 + ed, 0);
  // ouvrants
  const lo = (L - 2 * ed) / vantaux, ho = H - 2 * ed, eo = 0.05;
  for (let i = 0; i < vantaux; i++) {
    const x = -L / 2 + ed + lo * (i + 0.5);
    boite(g, lo, eo, 0.06, mc, x, y0 + ed, 0.005);
    boite(g, lo, eo, 0.06, mc, x, y0 + ed + ho - eo, 0.005);
    boite(g, eo, ho - 2 * eo, 0.06, mc, x - lo / 2 + eo / 2, y0 + ed + eo, 0.005);
    boite(g, eo, ho - 2 * eo, 0.06, mc, x + lo / 2 - eo / 2, y0 + ed + eo, 0.005);
    boite(g, lo - 2 * eo, ho - 2 * eo, 0.008, mv, x, y0 + ed + eo, 0.005);
    if (vantaux === 1 || i === 0) boite(g, 0.018, 0.12, 0.025, matMetal("#c9ccce"), x + lo / 2 - 0.03, y0 + H / 2 - 0.06, 0.05, { r: 0.006 });
  }
  if (tablette && allege > 0.05) boite(g, L + 0.1, 0.025, E / 2 + 0.04, resoudre(tablette, matBois), 0, y0 - 0.025, E / 4 + 0.02, { r: 0.006 });
  return g;
}

// ---------------------------------------------------------------------------
// Baie vitrée coulissante (2 vantaux décalés), allège nulle.
// ---------------------------------------------------------------------------
export function baie(opts = {}) {
  const { largeur: L = 2.4, hauteur: H = 2.15, epaisseur_mur: E = 0.25, couleur: c = "anthracite" } = opts;
  const g = meuble("baie", [L, H, E], { fixation: "mur" });
  const mc = matLaque(couleur(c)), mv = matVerre("#cfe6ef", 0.28);
  const ed = 0.06;
  boite(g, L, ed, 0.12, mc, 0, 0, 0);
  boite(g, L, ed, 0.12, mc, 0, H - ed, 0);
  boite(g, ed, H - 2 * ed, 0.12, mc, -L / 2 + ed / 2, ed, 0);
  boite(g, ed, H - 2 * ed, 0.12, mc, L / 2 - ed / 2, ed, 0);
  const lo = (L - 2 * ed) / 2 + 0.04, ho = H - 2 * ed, eo = 0.06;
  [[-1, -0.025], [1, 0.025]].forEach(([s, z]) => {
    const x = s * (lo / 2 - 0.02);
    boite(g, lo, eo, 0.045, mc, x, ed, z);
    boite(g, lo, eo, 0.045, mc, x, ed + ho - eo, z);
    boite(g, eo, ho - 2 * eo, 0.045, mc, x - lo / 2 + eo / 2, ed + eo, z);
    boite(g, eo, ho - 2 * eo, 0.045, mc, x + lo / 2 - eo / 2, ed + eo, z);
    boite(g, lo - 2 * eo, ho - 2 * eo, 0.008, mv, x, ed + eo, z);
    boite(g, 0.02, 0.3, 0.03, matMetal("#c9ccce"), x - s * (lo / 2 - 0.08), 1.0, z + 0.035 * Math.sign(z), { r: 0.008 });
  });
  return g;
}
