// Construction de la scène three.js à partir de plan.json et amenagement.json (contrat : maison3d/SPEC.md).
// Unités en mètres, Y vers le haut, sol en X/Z. Aucun fichier binaire : tout est généré ici.
// Performance : murs, vitres et marches fusionnés en quelques maillages par niveau, matériaux partagés,
// textures procédurales minuscules (CanvasTexture), ombres de contact précalculées (aucune ombre dynamique).
import * as THREE from "three";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";

const V2 = (x, z) => new THREE.Vector2(x, -z); // point du plan → point de THREE.Shape (voir rotateX(-PI/2))
const TYPES_LAMPE = /suspension|lampe|lampadaire|plafonnier|applique|spot|luminaire|guirlande|veilleuse/;

// ------------------------------------------------------------------------------------------------
// Géométrie 2D utilitaire
// ------------------------------------------------------------------------------------------------
export function pointDansPolygone(x, z, poly) {
  let dedans = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, zi] = poly[i];
    const [xj, zj] = poly[j];
    if (zi > z !== zj > z && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi) dedans = !dedans;
  }
  return dedans;
}
const centroide = (p) => [p.reduce((s, q) => s + q[0], 0) / p.length, p.reduce((s, q) => s + q[1], 0) / p.length];
function bornes2D(p) {
  const xs = p.map((q) => q[0]);
  const zs = p.map((q) => q[1]);
  return { x0: Math.min(...xs), x1: Math.max(...xs), z0: Math.min(...zs), z1: Math.max(...zs) };
}
function distSegment(px, pz, a, b) {
  const dx = b[0] - a[0];
  const dz = b[1] - a[1];
  const l2 = dx * dx + dz * dz || 1e-9;
  const t = Math.max(0, Math.min(1, ((px - a[0]) * dx + (pz - a[1]) * dz) / l2));
  return Math.hypot(px - a[0] - t * dx, pz - a[1] - t * dz);
}
function surContour(p, contour, tol = 0.35) {
  if (!contour) return false;
  for (let i = 0; i < contour.length; i++) if (distSegment(p[0], p[1], contour[i], contour[(i + 1) % contour.length]) < tol) return true;
  return false;
}
function forme(poly, trous = []) {
  const s = new THREE.Shape(poly.map(([x, z]) => V2(x, z)));
  for (const t of trous) s.holes.push(new THREE.Path(t.map(([x, z]) => V2(x, z))));
  return s;
}
function geoSol(poly, trous, y) {
  const g = new THREE.ShapeGeometry(forme(poly, trous));
  g.rotateX(-Math.PI / 2);
  g.translate(0, y, 0);
  return g;
}
function geoDalle(poly, trous, y0, epaisseur) {
  const g = new THREE.ExtrudeGeometry(forme(poly, trous), { depth: epaisseur, bevelEnabled: false, curveSegments: 6 });
  g.rotateX(-Math.PI / 2);
  g.translate(0, y0, 0);
  return g;
}
function colorer(g, cote, dessus) {
  const n = g.attributes.normal;
  const col = new Float32Array(n.count * 3);
  for (let i = 0; i < n.count; i++) {
    const c = n.getY(i) > 0.5 ? dessus : cote;
    col.set([c.r, c.g, c.b], i * 3);
  }
  g.setAttribute("color", new THREE.BufferAttribute(col, 3));
  return g;
}

// ------------------------------------------------------------------------------------------------
// Textures procédurales (petites, déterministes)
// ------------------------------------------------------------------------------------------------
function alea(graine) {
  let s = graine >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}
function canevas(taille, peindre) {
  const c = document.createElement("canvas");
  c.width = c.height = taille;
  peindre(c.getContext("2d"), taille);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}
const nuance = (hex, d) => {
  const c = new THREE.Color(hex);
  c.offsetHSL(0, 0, d);
  return `#${c.getHexString()}`;
};
function peindreLames(base, rangees, graine) {
  return (ctx, n) => {
    const r = alea(graine);
    const h = n / rangees;
    for (let i = 0; i < rangees; i++) {
      let x = -r() * n;
      while (x < n) {
        const l = n * (0.45 + r() * 0.5);
        ctx.fillStyle = nuance(base, (r() - 0.5) * 0.07);
        ctx.fillRect(x, i * h, l, h);
        ctx.fillStyle = "rgba(60,40,20,0.35)";
        ctx.fillRect(x, i * h, 1.5, h);
        x += l;
      }
      ctx.fillStyle = "rgba(60,40,20,0.3)";
      ctx.fillRect(0, i * h, n, 1.5);
    }
  };
}
const PEINTRES = {
  parquet: peindreLames("#b88d60", 6, 7),
  bois_clair: peindreLames("#d9c19c", 5, 11),
  bois_terrasse: peindreLames("#9c7a58", 7, 5),
  carrelage: (ctx, n) => {
    const r = alea(3);
    const k = 3; // carreaux de 33 cm
    const t = n / k;
    for (let i = 0; i < k; i++)
      for (let j = 0; j < k; j++) {
        ctx.fillStyle = nuance("#e4ded4", (r() - 0.5) * 0.04);
        ctx.fillRect(i * t, j * t, t, t);
      }
    ctx.fillStyle = "#bdb5a8";
    for (let i = 0; i <= k; i++) {
      ctx.fillRect(i * t - 1, 0, 2, n);
      ctx.fillRect(0, i * t - 1, n, 2);
    }
  },
  moquette: (ctx, n) => {
    const r = alea(9);
    ctx.fillStyle = "#cbbfa9";
    ctx.fillRect(0, 0, n, n);
    for (let i = 0; i < 1400; i++) {
      ctx.fillStyle = r() < 0.5 ? "rgba(255,255,255,0.10)" : "rgba(90,70,50,0.10)";
      ctx.fillRect(r() * n, r() * n, 2, 2);
    }
  },
};
function textureFilet() {
  const c = document.createElement("canvas");
  c.width = c.height = 64;
  const ctx = c.getContext("2d");
  ctx.strokeStyle = "#f2eadb";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(0, 0); ctx.lineTo(64, 64);
  ctx.moveTo(64, 0); ctx.lineTo(0, 64);
  ctx.stroke();
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(6, 6); // maille d'environ 17 cm (UV en mètres)
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
function textureOmbre() {
  const c = document.createElement("canvas");
  c.width = c.height = 64;
  const ctx = c.getContext("2d");
  const g = ctx.createRadialGradient(32, 32, 4, 32, 32, 32);
  g.addColorStop(0, "rgba(0,0,0,0.55)");
  g.addColorStop(0.55, "rgba(0,0,0,0.25)");
  g.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}

// ------------------------------------------------------------------------------------------------
// Matériaux partagés (libérés avec la scène)
// ------------------------------------------------------------------------------------------------
class Materiaux {
  constructor() {
    this._cache = new Map();
    this.textures = [];
  }
  obtenir(cle, fabrique) {
    if (!this._cache.has(cle)) this._cache.set(cle, fabrique());
    return this._cache.get(cle);
  }
  tex(cle, fabrique) {
    return this.obtenir(`tex:${cle}`, () => {
      const t = fabrique();
      this.textures.push(t);
      return t;
    });
  }
  sol(type) {
    const t = PEINTRES[type] ? type : "parquet";
    return this.obtenir(`sol:${t}`, () =>
      new THREE.MeshStandardMaterial({ map: this.tex(t, () => canevas(256, PEINTRES[t])), roughness: t === "carrelage" ? 0.45 : 0.85 })
    );
  }
  get murs() {
    return this.obtenir("murs", () => new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.92 }));
  }
  get vitres() {
    return this.obtenir("vitres", () => new THREE.MeshStandardMaterial({ color: 0xbfdbe6, transparent: true, opacity: 0.32, roughness: 0.1, depthWrite: false }));
  }
  get dalle() {
    return this.obtenir("dalle", () => new THREE.MeshStandardMaterial({ color: 0xd8d0c4, roughness: 0.95 }));
  }
  get socle() {
    return this.obtenir("socle", () => new THREE.MeshStandardMaterial({ color: 0x8c857b, roughness: 1 }));
  }
  get bois() {
    return this.obtenir("bois", () => new THREE.MeshStandardMaterial({ color: 0xa47a52, roughness: 0.7 }));
  }
  get metal() {
    return this.obtenir("metal", () => new THREE.MeshStandardMaterial({ color: 0x3c3f44, roughness: 0.45, metalness: 0.5 }));
  }
  get garde() {
    return this.obtenir("garde", () => new THREE.MeshStandardMaterial({ color: 0xd6e8ee, transparent: true, opacity: 0.25, roughness: 0.1, depthWrite: false, side: THREE.DoubleSide }));
  }
  get filet() {
    return this.obtenir("filet", () =>
      new THREE.MeshStandardMaterial({ map: this.tex("filet", textureFilet), transparent: true, alphaTest: 0.35, side: THREE.DoubleSide, roughness: 1 })
    );
  }
  get ombre() {
    return this.obtenir("ombre", () =>
      new THREE.MeshBasicMaterial({ map: this.tex("ombre", textureOmbre), transparent: true, depthWrite: false, toneMapped: false })
    );
  }
  couleur(hex, rugosite = 0.8) {
    return this.obtenir(`c:${hex}:${rugosite}`, () => new THREE.MeshStandardMaterial({ color: hex, roughness: rugosite }));
  }
}

const COUL_MUR = new THREE.Color(0xf4f0e8);
const COUL_MUR_EXT = new THREE.Color(0xebe4d8);
const COUL_COUPE = new THREE.Color(0x5d544c);

// ------------------------------------------------------------------------------------------------
// Murs extrudés avec ouvertures
// ------------------------------------------------------------------------------------------------
function morceauxMur(mur, H, coupe) {
  const [ax, az] = mur.a;
  const [bx, bz] = mur.b;
  const dx = bx - ax;
  const dz = bz - az;
  const L = Math.hypot(dx, dz);
  if (L < 0.02) return { murs: [], vitres: [] };
  const ep = mur.epaisseur || (mur.type === "exterieur" ? 0.25 : 0.1);
  // Murs extérieurs : bouts francs (plan.json les prolonge déjà aux angles, y compris aux chanfreins à 45°) ;
  // cloisons et segments du mur rond : prolongés de ep/2 pour fermer les jonctions.
  const ext = mur.bouts_francs ?? mur.type === "exterieur" ? 0 : ep / 2;
  const Hc = Math.min(H, coupe ?? H);
  const ouv = (mur.ouvertures || [])
    .map((o) => {
      const c = (o.position ?? 0.5) * L;
      const w = Math.min(o.largeur || 0.9, L);
      const bas = o.allege || 0;
      return { s: Math.max(0, c - w / 2), e: Math.min(L, c + w / 2), bas, haut: bas + (o.hauteur || 2.05), type: o.type };
    })
    .sort((p, q) => p.s - q.s);
  const morceaux = [];
  const vitres = [];
  let u = -ext;
  for (const o of ouv) {
    if (o.s > u) morceaux.push([u, o.s, 0, Hc]);
    const s = Math.max(o.s, u);
    if (o.e > s) {
      if (o.bas > 0) morceaux.push([s, o.e, 0, Math.min(o.bas, Hc)]);
      if (o.haut < Hc) morceaux.push([s, o.e, o.haut, Hc]);
      if (o.type !== "porte" && Math.min(o.haut, Hc) - o.bas > 0.05) vitres.push([s, o.e, o.bas, Math.min(o.haut, Hc)]);
    }
    u = Math.max(u, o.e);
  }
  if (u < L + ext) morceaux.push([u, L + ext, 0, Hc]);
  const angle = Math.atan2(dz, dx);
  const placer = (g) => {
    g.rotateY(-angle);
    g.translate(ax, 0, az);
    return g;
  };
  const cote = mur.type === "exterieur" ? COUL_MUR_EXT : COUL_MUR;
  return {
    murs: morceaux
      .filter(([u0, u1, y0, y1]) => u1 - u0 > 0.005 && y1 - y0 > 0.005)
      .map(([u0, u1, y0, y1]) => {
        const g = new THREE.BoxGeometry(u1 - u0, y1 - y0, ep);
        g.translate((u0 + u1) / 2, (y0 + y1) / 2, 0);
        return colorer(placer(g), cote, COUL_COUPE);
      }),
    vitres: vitres.map(([u0, u1, y0, y1]) => {
      const g = new THREE.BoxGeometry(u1 - u0, y1 - y0, 0.02);
      g.translate((u0 + u1) / 2, (y0 + y1) / 2, 0);
      return placer(g);
    }),
  };
}

// ------------------------------------------------------------------------------------------------
// Éléments de remplacement (si la bibliothèque de mobilier est absente ou incomplète)
// ------------------------------------------------------------------------------------------------
const DIMS = {
  canape: [2.1, 0.8, 0.9, 0x8d9db2], table_basse: [1.0, 0.4, 0.6, 0xa47a52], tapis: [2.0, 0.015, 1.4, 0xc9a27e],
  meuble_tv: [1.8, 0.5, 0.4, 0x6e5a48], plante: [0.5, 1.1, 0.5, 0x6f9a5c], table_manger: [1.8, 0.75, 0.9, 0xa47a52],
  cuisine_lineaire: [3.2, 0.9, 0.62, 0xe9e4da], ilot: [1.8, 0.9, 0.9, 0xd9d2c4], banc_entree: [1.2, 0.45, 0.4, 0xa47a52],
  lit_double: [1.6, 0.5, 2.0, 0xe9e1d3], lit_simple: [0.9, 0.5, 1.95, 0xd8e3ea], baignoire: [1.7, 0.55, 0.75, 0xfafafa],
  bureau: [1.4, 0.75, 0.7, 0xb08d68], etagere: [1.0, 1.8, 0.35, 0xb08d68], lavabo: [0.6, 0.85, 0.45, 0xfafafa],
  lave_linge: [0.6, 0.85, 0.6, 0xf5f5f3],
};
export function estTypeLampe(type) {
  return TYPES_LAMPE.test(type || "");
}
function lampeRemplacement(mats, opts) {
  const g = new THREE.Group();
  const h = opts.hauteur ?? 2.15;
  const cordon = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 2.5 - h), mats.metal);
  cordon.position.y = h + (2.5 - h) / 2;
  const abat = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.18, 16, 1, true), mats.couleur(0xe8dcc6, 0.9));
  abat.material.side = THREE.DoubleSide;
  abat.position.y = h + 0.06;
  const ampoule = new THREE.Mesh(new THREE.SphereGeometry(0.075, 12, 8), new THREE.MeshStandardMaterial({ color: 0xf3eee3, emissive: 0x000000, roughness: 0.4 }));
  ampoule.name = "ampoule";
  ampoule.material.userData.propre = true;
  ampoule.position.y = h - 0.02;
  g.add(cordon, abat, ampoule);
  g.userData = { interactif: true, role: "lampe", remplacement: true };
  return g;
}
function laveLingeRemplacement(mats) {
  const g = new THREE.Group();
  const caisse = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.85, 0.6), mats.couleur(0xf5f5f3, 0.5));
  caisse.position.y = 0.425;
  const hublot = new THREE.Mesh(new THREE.TorusGeometry(0.17, 0.035, 8, 24), mats.couleur(0xb9bec4, 0.3));
  hublot.name = "hublot";
  hublot.position.set(0, 0.42, 0.305);
  const tambour = new THREE.Group();
  tambour.name = "tambour";
  tambour.position.set(0, 0.42, 0.302);
  const disque = new THREE.Mesh(new THREE.CircleGeometry(0.16, 20), mats.couleur(0x39424d, 0.35));
  const linge = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.06, 0.004), mats.couleur(0x7fa7d6, 0.8));
  linge.position.set(0, -0.06, 0.002);
  tambour.add(disque, linge);
  const voyant = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.025, 0.01), new THREE.MeshStandardMaterial({ color: 0x334033, emissive: 0x000000 }));
  voyant.name = "voyant";
  voyant.material.userData.propre = true;
  voyant.position.set(0.19, 0.79, 0.302);
  g.add(caisse, hublot, tambour, voyant);
  g.userData = { interactif: true, role: "lave_linge", remplacement: true };
  return g;
}
export function boiteRemplacement(type, opts = {}, mats) {
  if (estTypeLampe(type)) return lampeRemplacement(mats, opts);
  if (type === "lave_linge") return laveLingeRemplacement(mats);
  const [l, h, p, c] = DIMS[type] || [0.8, 0.8, 0.8, 0xbdb6aa];
  const g = new THREE.Group();
  const b = new THREE.Mesh(new THREE.BoxGeometry(opts.largeur ?? l, opts.hauteur ?? h, opts.profondeur ?? p), mats.couleur(c));
  b.position.y = (opts.hauteur ?? h) / 2;
  g.add(b);
  g.userData = { remplacement: true };
  return g;
}

// ------------------------------------------------------------------------------------------------
// Escalier, filet, mezzanine, balcon
// ------------------------------------------------------------------------------------------------
function escalierRepli(esc, hauteur, mats) {
  const g = new THREE.Group();
  const n = esc.marches || 14;
  const r = esc.rayon || 1;
  const sens = esc.sens === "horaire" ? -1 : 1;
  const da = (sens * (Math.PI * 1.75)) / n;
  const pas = hauteur / (n + 1);
  const marches = [];
  const barreaux = [];
  const rampe = [];
  for (let i = 0; i < n; i++) {
    const a = i * da;
    const y = (i + 1) * pas;
    const larg = 2 * r * Math.sin(Math.abs(da) / 2) * 1.25;
    const m = new THREE.BoxGeometry(r - 0.06, 0.05, larg);
    m.translate((r + 0.06) / 2, y, 0);
    m.rotateY(a);
    marches.push(m);
    const b = new THREE.CylinderGeometry(0.012, 0.012, 0.9, 5);
    b.translate(r - 0.05, y + 0.45, 0);
    b.rotateY(a);
    barreaux.push(b);
  }
  for (let i = 0; i <= 48; i++) {
    const t = (i / 48) * (n - 1);
    const a = t * da;
    rampe.push(new THREE.Vector3(Math.cos(a) * (r - 0.05), (t + 1) * pas + 0.92, -Math.sin(a) * (r - 0.05)));
  }
  const fut = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, hauteur + 0.9, 12), mats.metal);
  fut.position.y = (hauteur + 0.9) / 2;
  g.add(fut);
  g.add(new THREE.Mesh(mergeGeometries(marches), mats.bois));
  g.add(new THREE.Mesh(mergeGeometries(barreaux), mats.metal));
  g.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(rampe), 64, 0.022, 6), mats.metal));
  marches.concat(barreaux).forEach((x) => x.dispose());
  g.userData = { remplacement: true };
  return g;
}
function gardeCorps(poly, contour, y, mats, hauteur = 0.95, exclure = null) {
  const verres = [];
  const mains = [];
  for (let i = 0; i < poly.length; i++) {
    const a = poly[i];
    const b = poly[(i + 1) % poly.length];
    const mil = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
    if (surContour(mil, contour) && surContour(a, contour) && surContour(b, contour)) continue;
    if (exclure && exclure(mil)) continue;
    const L = Math.hypot(b[0] - a[0], b[1] - a[1]);
    const ang = Math.atan2(b[1] - a[1], b[0] - a[0]);
    const v = new THREE.BoxGeometry(L, hauteur, 0.02);
    v.translate(L / 2, y + hauteur / 2, 0);
    v.rotateY(-ang);
    v.translate(a[0], 0, a[1]);
    verres.push(v);
    const m = new THREE.BoxGeometry(L + 0.04, 0.04, 0.06);
    m.translate(L / 2, y + hauteur, 0);
    m.rotateY(-ang);
    m.translate(a[0], 0, a[1]);
    mains.push(m);
  }
  const g = new THREE.Group();
  if (verres.length) g.add(new THREE.Mesh(mergeGeometries(verres), mats.garde), new THREE.Mesh(mergeGeometries(mains), mats.bois));
  verres.concat(mains).forEach((x) => x.dispose());
  return g;
}

// ------------------------------------------------------------------------------------------------
// Construction principale
// ------------------------------------------------------------------------------------------------
/**
 * @param {object} plan          plan.json
 * @param {object} amenagement   {meubles, liaisons}
 * @param {object} options       {maquette, hauteurCoupe, mobilier: {creerMeuble, MEUBLES}}
 */
export function construireScene(plan, amenagement, options = {}) {
  const mats = new Materiaux();
  const racine = new THREE.Group();
  racine.name = "maison";
  const commun = new THREE.Group();
  commun.name = "commun";
  racine.add(commun);
  const niveaux = new Map();
  const pieces = new Map();
  const meubles = [];
  const raycastables = [];
  const avertissements = [];
  const mob = options.mobilier || {};
  const coupe = options.maquette ? options.hauteurCoupe ?? 1.2 : null;

  const creerViaRegistre = (type, opts) => {
    if (typeof mob.creerMeuble !== "function") return null;
    if (mob.MEUBLES && !mob.MEUBLES[type]) return null;
    try {
      const o = mob.creerMeuble(type, opts || {});
      return o && o.isObject3D ? o : null;
    } catch (e) {
      avertissements.push(`meuble « ${type} » : ${e.message}`);
      return null;
    }
  };

  const ombre = (parent, larg, prof, y) => {
    const o = new THREE.Mesh(ombre.geo || (ombre.geo = new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2)), mats.ombre);
    o.scale.set(larg, 1, prof);
    o.position.y = y;
    o.renderOrder = -1;
    o.userData.ignorer = true;
    parent.add(o);
    return o;
  };

  // Ombre douce sous toute la maison
  const toutes = plan.niveaux.flatMap((n) => n.contour_exterieur || n.pieces.flatMap((p) => p.polygone));
  const b2 = bornes2D(toutes);
  const ombreSol = ombre(racine, (b2.x1 - b2.x0) * 1.35, (b2.z1 - b2.z0) * 1.35, -0.3);
  ombreSol.position.x = (b2.x0 + b2.x1) / 2;
  ombreSol.position.z = (b2.z0 + b2.z1) / 2;

  for (const [index, n] of plan.niveaux.entries()) {
    const groupe = new THREE.Group();
    groupe.name = `niveau_${n.id}`;
    racine.add(groupe);
    const alt = n.altitude ?? index * 2.7;
    const H = n.hauteur ?? 2.5;
    const contour = n.contour_exterieur;
    const vides = (n.vides || []).map((v) => v.polygone).filter((p) => p && p.length >= 3);
    const info = { id: n.id, nom: n.nom || n.id, altitude: alt, hauteur: H, groupe, index };
    niveaux.set(n.id, info);

    // Socle (rez) ou dalle d'étage avec trémies
    if (contour && contour.length >= 3) {
      if (index === 0) {
        const s = new THREE.Mesh(geoDalle(contour, [], alt - 0.3, 0.3), mats.socle);
        s.userData.dalle = true;
        groupe.add(s);
        raycastables.push(s);
      } else {
        const trous = vides.filter((v) => pointDansPolygone(...centroide(v), contour));
        const d = new THREE.Mesh(geoDalle(contour, trous, alt - 0.2, 0.2), mats.dalle);
        d.userData.dalle = true;
        info.dalle = d;
        groupe.add(d);
        raycastables.push(d);
      }
    }

    // Sols des pièces (une cible de toucher par pièce)
    for (const p of n.pieces || []) {
      const trous = vides.filter((v) => pointDansPolygone(...centroide(v), p.polygone));
      const mat = mats.sol(p.sol).clone(); // propre à la pièce : réchauffement, halo, estompage
      mat.userData.couleurBase = mat.color.clone();
      const mesh = new THREE.Mesh(geoSol(p.polygone, trous, alt + 0.012), mat);
      mesh.name = `sol_${p.id}`;
      mesh.userData = { interactif: true, piece: p.id };
      groupe.add(mesh);
      raycastables.push(mesh);
      const c = p.centre || centroide(p.polygone);
      const bb = bornes2D(p.polygone);
      pieces.set(p.id, {
        id: p.id, nom: p.nom || p.id, zone_ha: p.zone_ha, niveau: n.id, altitude: alt, mesh, materiau: mat,
        centre: new THREE.Vector3(c[0], alt, c[1]), polygone: p.polygone,
        rayon: Math.hypot(bb.x1 - bb.x0, bb.z1 - bb.z0) / 2,
      });
    }

    // Murs (fusionnés : un maillage pour tous les murs du niveau, un pour les vitres).
    // En mode maquette, deux jeux : coupés (niveau du haut affiché) et pleins (rez vu sous l'étage, vue « Tout »).
    info.mursCoupes = construireMurs(n, H, coupe, alt, `murs_${n.id}`);
    groupe.add(info.mursCoupes);
    if (coupe !== null) {
      info.mursPleins = construireMurs(n, H, null, alt, `murs_pleins_${n.id}`);
      info.mursPleins.visible = false;
      groupe.add(info.mursPleins);
    }
  }

  function construireMurs(n, H, hCoupe, alt, nom) {
    const g = new THREE.Group();
    g.name = nom;
    const geosMurs = [];
    const geosVitres = [];
    for (const m of [...(n.murs || []), ...murRond(n)]) {
      const { murs, vitres } = morceauxMur(m, H, hCoupe);
      geosMurs.push(...murs);
      geosVitres.push(...vitres);
    }
    if (geosMurs.length) {
      const gm = mergeGeometries(geosMurs);
      gm.translate(0, alt, 0);
      const mm = new THREE.Mesh(gm, mats.murs);
      mm.userData.ignorer = true;
      g.add(mm);
    }
    if (geosVitres.length) {
      const gv = mergeGeometries(geosVitres);
      gv.translate(0, alt, 0);
      const vm = new THREE.Mesh(gv, mats.vitres);
      vm.userData.ignorer = true;
      vm.renderOrder = 2;
      g.add(vm);
    }
    geosMurs.concat(geosVitres).forEach((x) => x.dispose());
    return g;
  }

  const niveauDe = (id) => niveaux.get(id) || [...niveaux.values()][0];

  /** Mur rond (cage cylindrique) du colimaçon : segments de cloison, ouverture d'accès propre au niveau. */
  function murRond(n) {
    const esc = plan.escalier;
    const cage = esc && esc.cage;
    if (!cage || !esc.centre) return [];
    const [cx, cz] = esc.centre;
    const R = cage.rayon || 1.13;
    const acces = (cage.acces && cage.acces[n.id]) || (n.id === (esc.de || "rez") ? esc.point_depart : esc.point_arrivee);
    const aAcces = acces ? Math.atan2(acces[1] - cz, acces[0] - cx) : null;
    const demi = (cage.largeur_acces || 0.95) / 2 / R;
    const N = 48;
    const segs = [];
    for (let k = 0; k < N; k++) {
      const a0 = (k / N) * Math.PI * 2;
      const a1 = ((k + 1) / N) * Math.PI * 2;
      const mil = (a0 + a1) / 2;
      if (aAcces !== null) {
        const d = Math.abs(((mil - aAcces + Math.PI * 3) % (Math.PI * 2)) - Math.PI);
        if (d < demi) continue;
      }
      segs.push({ a: [cx + R * Math.cos(a0), cz + R * Math.sin(a0)], b: [cx + R * Math.cos(a1), cz + R * Math.sin(a1)],
        epaisseur: cage.epaisseur || 0.08, type: "cloison", rond: true });
    }
    return segs;
  }

  // Escalier (fabrique « special » si présente)
  const esc = plan.escalier;
  if (esc && esc.centre) {
    const de = niveauDe(esc.de || "rez");
    const vers = niveaux.get(esc.vers || "etage");
    const hauteur = vers ? vers.altitude - de.altitude : 2.7;
    const opts = { rayon: esc.rayon || 1, marches: esc.marches || 14, hauteur, sens: esc.sens || "antihoraire" };
    // Première marche orientée vers le point de départ (convention de la fabrique : 0° = +Z, angle croissant vers +X)
    if (esc.point_depart) opts.angle_depart = (Math.atan2(esc.point_depart[0] - esc.centre[0], esc.point_depart[1] - esc.centre[1]) * 180) / Math.PI;
    if (esc.angle_total_deg) opts.angle_total = esc.angle_total_deg;
    const o = creerViaRegistre("escalier_colimacon", opts) || creerViaRegistre("escalier", opts) || escalierRepli(esc, hauteur, mats);
    o.position.set(esc.centre[0], de.altitude, esc.centre[1]);
    o.name = "escalier";
    o.traverse((x) => (x.userData.ignorer = true));
    o.userData.hauteurNiveaux = hauteur;
    commun.add(o);
  }

  // Éléments spéciaux
  const mezzanines = (plan.elements_speciaux || []).filter((e) => e.type === "mezzanine" && e.polygone);
  const surBordAutreMezz = (e, p) => mezzanines.some((m) => m !== e && m.niveau === e.niveau && surContour(p, m.polygone, 0.02));
  for (const e of plan.elements_speciaux || []) {
    const niv = niveauDe(e.niveau);
    if (e.type === "muret" && e.a && e.b) {
      // Cloison basse posée sur une mezzanine (sépare les deux moitiés)
      const alt = e.altitude ?? niv.altitude + 2.1;
      const L = Math.hypot(e.b[0] - e.a[0], e.b[1] - e.a[1]);
      const ep = e.epaisseur || 0.1;
      const h = e.hauteur || 1.0;
      const geo = new THREE.BoxGeometry(L, h, ep);
      geo.translate(L / 2, alt + h / 2, 0);
      geo.rotateY(-Math.atan2(e.b[1] - e.a[1], e.b[0] - e.a[0]));
      geo.translate(e.a[0], 0, e.a[1]);
      const mm = new THREE.Mesh(colorer(geo, COUL_MUR, COUL_MUR), mats.murs);
      mm.userData.ignorer = true;
      mm.name = "muret";
      niv.groupe.add(mm);
      continue;
    }
    if (!e.polygone || e.polygone.length < 3) continue;
    const contour = plan.niveaux[niv.index].contour_exterieur;
    if (e.type === "filet") {
      const g = new THREE.Group();
      const fm = creerViaRegistre("filet", { polygone: e.polygone, centrer: true });
      if (fm) {
        const c = fm.userData.centre || [0, 0];
        fm.position.set(c[0], niv.altitude - 0.02, c[1]);
        g.add(fm, gardeCorps(e.polygone, contour, niv.altitude, mats, 0.9));
        // Cible de toucher invisible couvrant le polygone (le maillage ajouré laisse passer les rayons)
        const cible = new THREE.Mesh(geoSol(e.polygone, [], niv.altitude - 0.02), new THREE.MeshBasicMaterial({ visible: false }));
        cible.userData = { interactif: true, piece: e.zone_ha || "filet" };
        g.add(cible);
        raycastables.push(cible);
        niv.groupe.add(g);
        ajouterPseudoPiece(e, niv, cible, "Filet");
        ajouterPuits(e, niv);
        continue;
      }
      const f = new THREE.Mesh(geoSol(e.polygone, [], niv.altitude - 0.02), mats.filet);
      f.name = "filet";
      g.add(f);
      // Cadre (cordage) sur le pourtour
      const cadres = [];
      for (let i = 0; i < e.polygone.length; i++) {
        const a = e.polygone[i];
        const b = e.polygone[(i + 1) % e.polygone.length];
        const L = Math.hypot(b[0] - a[0], b[1] - a[1]);
        const c = new THREE.BoxGeometry(L, 0.05, 0.05);
        c.translate(L / 2, niv.altitude - 0.02, 0);
        c.rotateY(-Math.atan2(b[1] - a[1], b[0] - a[0]));
        c.translate(a[0], 0, a[1]);
        cadres.push(c);
      }
      g.add(new THREE.Mesh(mergeGeometries(cadres), mats.couleur(0xe0d5bf, 0.9)));
      cadres.forEach((c) => c.dispose());
      g.add(gardeCorps(e.polygone, contour, niv.altitude, mats, 0.9));
      f.userData = { interactif: true, piece: e.zone_ha || "filet" };
      raycastables.push(f);
      niv.groupe.add(g);
      ajouterPseudoPiece(e, niv, f, "Filet");
    } else if (e.type === "mezzanine") {
      const alt = e.altitude ?? niv.altitude + 2.1;
      const g = new THREE.Group();
      g.add(new THREE.Mesh(geoDalle(e.polygone, [], alt - 0.14, 0.14), mats.dalle));
      const mat = mats.sol(e.sol || "bois_clair").clone();
      mat.userData.couleurBase = mat.color.clone();
      const s = new THREE.Mesh(geoSol(e.polygone, [], alt + 0.006), mat);
      s.userData = { interactif: true, piece: e.zone_ha };
      raycastables.push(s);
      g.add(s, gardeCorps(e.polygone, contour, alt, mats, 0.95, (p) => surBordAutreMezz(e, p)));
      // Poteaux aux angles intérieurs (sauf quand un mur porte déjà la mezzanine)
      const murs = plan.niveaux[niv.index].murs || [];
      const surMur = (p) => murs.some((m) => distSegment(p[0], p[1], m.a, m.b) < (m.epaisseur || 0.1) / 2 + 0.08);
      for (const p of e.polygone) {
        if (surContour(p, contour) || surMur(p)) continue;
        const po = new THREE.Mesh(new THREE.BoxGeometry(0.08, alt - niv.altitude, 0.08), mats.bois);
        po.position.set(p[0], (alt + niv.altitude) / 2, p[1]);
        po.userData.ignorer = true;
        g.add(po);
      }
      g.name = `mezzanine_${e.zone_ha}`;
      niv.groupe.add(g);
      ajouterPseudoPiece(e, niv, s, "Mezzanine", alt);
    } else if (e.type === "balcon") {
      const g = new THREE.Group();
      g.add(new THREE.Mesh(geoDalle(e.polygone, [], niv.altitude - 0.18, 0.18), mats.dalle));
      const mat = mats.sol("bois_terrasse").clone();
      mat.userData.couleurBase = mat.color.clone();
      const s = new THREE.Mesh(geoSol(e.polygone, [], niv.altitude + 0.006), mat);
      s.userData = { interactif: true, piece: e.zone_ha || "balcon" };
      raycastables.push(s);
      g.add(s, gardeCorps(e.polygone, contour, niv.altitude, mats));
      g.name = `balcon_${e.zone_ha}`;
      niv.groupe.add(g);
      ajouterPseudoPiece(e, niv, s, "Balcon");
    }
  }

  /** Fond sombre du vide sous le filet (vue Étage seule) : un disque d'ombre dans l'épaisseur de la dalle,
   *  vu seulement à travers les mailles ; rien ne pend sous la maison. */
  function ajouterPuits(e, niv) {
    const tex = mats.tex("vide", () => {
      const c = document.createElement("canvas");
      c.width = c.height = 64;
      const x = c.getContext("2d");
      const g = x.createRadialGradient(32, 32, 6, 32, 32, 46);
      g.addColorStop(0, "#1d1c21");
      g.addColorStop(1, "#5b544c");
      x.fillStyle = g;
      x.fillRect(0, 0, 64, 64);
      const t = new THREE.CanvasTexture(c);
      t.colorSpace = THREE.SRGBColorSpace;
      return t;
    });
    const geo = geoSol(e.polygone, [], niv.altitude - 0.17);
    // UV normalisés sur l'emprise du polygone (dégradé centré)
    const bb = bornes2D(e.polygone);
    const p = geo.attributes.position;
    const uv = new Float32Array(p.count * 2);
    for (let i = 0; i < p.count; i++) {
      uv[i * 2] = (p.getX(i) - bb.x0) / (bb.x1 - bb.x0);
      uv[i * 2 + 1] = (p.getZ(i) - bb.z0) / (bb.z1 - bb.z0);
    }
    geo.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
    const fond = new THREE.Mesh(geo, mats.obtenir("vide", () => new THREE.MeshBasicMaterial({ map: tex, toneMapped: false })));
    fond.name = "puits_filet";
    fond.userData.ignorer = true;
    fond.userData.vide = true;
    fond.visible = false;
    niv.groupe.add(fond);
    (niv.puits ||= []).push(fond);
  }

  function ajouterPseudoPiece(e, niv, mesh, nomDefaut, alt = niv.altitude) {
    const id = e.zone_ha || e.type;
    if (pieces.has(id)) return;
    const c = centroide(e.polygone);
    const bb = bornes2D(e.polygone);
    mesh.userData.piece = id;
    pieces.set(id, {
      id, nom: e.nom || nomDefaut, zone_ha: e.zone_ha, niveau: niv.id, altitude: alt, mesh, materiau: mesh.material,
      centre: new THREE.Vector3(c[0], alt, c[1]), polygone: e.polygone, special: e.type,
      rayon: Math.hypot(bb.x1 - bb.x0, bb.z1 - bb.z0) / 2,
    });
  }

  // Meubles
  let remplacements = 0;
  for (const [i, m] of (amenagement.meubles || []).entries()) {
    if (!m || !m.type || !Array.isArray(m.position)) continue;
    const niv = niveauDe(m.niveau);
    let o = creerViaRegistre(m.type, m.opts);
    if (!o) {
      o = boiteRemplacement(m.type, m.opts || {}, mats);
      remplacements++;
    }
    const piece = pieces.get(m.piece);
    const alt = m.altitude ?? niv.altitude;
    o.position.set(m.position[0], alt, m.position[1]);
    o.rotation.y = ((m.rotation_deg || 0) * Math.PI) / 180;
    o.userData.meubleIndex = i;
    o.userData.meubleId = m.id ?? i;
    o.userData.piece = m.piece;
    o.userData.type = m.type;
    if (!o.userData.role && estTypeLampe(m.type)) o.userData.role = "lampe";
    if (o.userData.role === "lampe") o.userData.interactif = true;
    niv.groupe.add(o);
    // Ombre de contact précalculée (si la fabrique n'en fournit pas)
    if (!o.getObjectByName("ombre_contact") && !estTypeLampe(m.type) && m.type !== "tapis") {
      const bb = new THREE.Box3().setFromObject(o);
      const sz = bb.getSize(new THREE.Vector3());
      const sh = ombre(niv.groupe, sz.x * 1.25 + 0.15, sz.z * 1.25 + 0.15, alt + 0.016);
      sh.position.x = (bb.min.x + bb.max.x) / 2;
      sh.position.z = (bb.min.z + bb.max.z) / 2;
    }
    raycastables.push(o);
    meubles.push({ index: i, id: m.id ?? i, type: m.type, niveau: niv.id, piece: m.piece, objet: o, pieceInfo: piece || null });
  }

  // Emprise de la maison (sans l'ombre portée au sol)
  const bornes = new THREE.Box3();
  for (const n of niveaux.values()) bornes.expandByObject(n.groupe);
  bornes.expandByObject(commun);
  return {
    racine, commun, niveaux, pieces, meubles, raycastables, bornes, materiaux: mats, avertissements, remplacements,
    liberer() {
      const geos = new Set();
      const matsSet = new Set();
      racine.traverse((o) => {
        if (o.geometry) geos.add(o.geometry);
        if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => matsSet.add(m));
      });
      // Les géométries et matériaux partagés de la bibliothèque de mobilier ne sont jamais libérés ici.
      geos.forEach((g) => !g.userData?.partage && g.dispose());
      matsSet.forEach((m) => {
        if (m.userData?.partage) return;
        m.dispose();
      });
      mats.textures.forEach((t) => t.dispose());
      racine.clear();
    },
  };
}
