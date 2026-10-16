// Outils communs : cache de géométries partagées, primitives positionnées, fusion par matériau,
// ombre de contact, comptage de triangles.
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
import { matOmbre } from "./materiaux.js";

// ---------------------------------------------------------------------------
// Géométries partagées (clé = type + dimensions arrondies au mm).
// ---------------------------------------------------------------------------
const cacheGeo = new Map();
const f = (v) => Math.round(v * 1000);

// UV « métriques » par projection triplanaire : 1 unité UV = 1 m, quelle que soit la taille.
// Ainsi une seule texture bois ou tissu sert à toutes les pièces sans être étirée.
export function uvMetrique(g) {
  const p = g.attributes.position, n = g.attributes.normal;
  if (!p || !n) return g;
  const uv = new Float32Array(p.count * 2);
  for (let i = 0; i < p.count; i++) {
    const ax = Math.abs(n.getX(i)), ay = Math.abs(n.getY(i)), az = Math.abs(n.getZ(i));
    let u, v;
    if (ay >= ax && ay >= az) { u = p.getX(i); v = p.getZ(i); }
    else if (ax >= az) { u = p.getZ(i); v = p.getY(i); }
    else { u = p.getX(i); v = p.getY(i); }
    uv[i * 2] = u; uv[i * 2 + 1] = v;
  }
  g.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
  return g;
}

export function geo(cle, fabrique, { metrique = true } = {}) {
  let g = cacheGeo.get(cle);
  if (!g) {
    g = fabrique();
    if (metrique) uvMetrique(g);
    g.userData.partage = true;
    cacheGeo.set(cle, g);
  }
  return g;
}

export const geoBoite = (l, h, p, r = 0, s = 1) =>
  r > 0.0005
    ? geo(`rb_${f(l)}_${f(h)}_${f(p)}_${f(r)}_${s}`, () => new RoundedBoxGeometry(l, h, p, s, Math.min(r, l / 2 - 1e-4, h / 2 - 1e-4, p / 2 - 1e-4)))
    : geo(`b_${f(l)}_${f(h)}_${f(p)}`, () => new THREE.BoxGeometry(l, h, p));

export const geoCyl = (rh, rb, h, seg = 12, ouvert = false) =>
  geo(`c_${f(rh)}_${f(rb)}_${f(h)}_${seg}_${ouvert ? 1 : 0}`, () => new THREE.CylinderGeometry(rh, rb, h, seg, 1, ouvert));

export const geoSphere = (r, ls = 10, hs = 7) => geo(`s_${f(r)}_${ls}_${hs}`, () => new THREE.SphereGeometry(r, ls, hs));
export const geoIco = (r, d = 0) => geo(`i_${f(r)}_${d}`, () => new THREE.IcosahedronGeometry(r, d));
export const geoTore = (R, r, rs = 6, ts = 20, arc = Math.PI * 2) =>
  geo(`t_${f(R)}_${f(r)}_${rs}_${ts}_${f(arc)}`, () => new THREE.TorusGeometry(R, r, rs, ts, arc));
export const geoPlan = (l, h, metrique = false) => geo(`p_${f(l)}_${f(h)}_${metrique ? 1 : 0}`, () => new THREE.PlaneGeometry(l, h), { metrique });

// Profil de révolution [[r, y], ...] (pots, vases, abat-jour, vasques).
// Le profil est réordonné de bas en haut pour que les normales pointent vers l'extérieur.
export const geoTour = (cle, profil, seg = 14) =>
  geo(`l_${cle}_${seg}`, () => {
    const p = profil[0][1] > profil[profil.length - 1][1] ? [...profil].reverse() : profil;
    return new THREE.LatheGeometry(p.map(([r, y]) => new THREE.Vector2(r, y)), seg);
  });

// ---------------------------------------------------------------------------
// Primitives positionnées. Convention : (x, y, z) = centre en X/Z, y = BAS de la pièce.
// ---------------------------------------------------------------------------
export function maille(parent, g, m, x = 0, y = 0, z = 0, o = {}) {
  const me = new THREE.Mesh(g, m);
  me.position.set(x, y, z);
  if (o.rx) me.rotation.x = o.rx;
  if (o.ry) me.rotation.y = o.ry;
  if (o.rz) me.rotation.z = o.rz;
  if (o.sx || o.sy || o.sz) me.scale.set(o.sx ?? 1, o.sy ?? 1, o.sz ?? 1);
  if (o.nom) me.name = o.nom;
  parent.add(me);
  return me;
}

// Pavé (arrondi si o.r > 0). y = bas.
export function boite(parent, l, h, p, m, x = 0, y = 0, z = 0, o = {}) {
  return maille(parent, geoBoite(l, h, p, o.r || 0, o.s || 1), m, x, y + h / 2, z, o);
}

// Cylindre vertical (y = bas), ou horizontal selon o.axe = "x" | "z" (y = centre).
export function cyl(parent, r, h, m, x = 0, y = 0, z = 0, o = {}) {
  const g = geoCyl(r, o.rb ?? r, h, o.seg || 12, o.ouvert);
  if (o.axe === "x") return maille(parent, g, m, x, y, z, { ...o, rz: Math.PI / 2 });
  if (o.axe === "z") return maille(parent, g, m, x, y, z, { ...o, rx: Math.PI / 2 });
  return maille(parent, g, m, x, y + h / 2, z, o);
}

// Tige entre deux points (pieds obliques, barreaux, montants).
export function tige(parent, a, b, r, m, seg = 6) {
  const va = new THREE.Vector3(...a), vb = new THREE.Vector3(...b);
  const d = vb.clone().sub(va);
  const me = new THREE.Mesh(geoCyl(r, r, d.length(), seg), m);
  me.position.copy(va).add(vb).multiplyScalar(0.5);
  me.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize());
  parent.add(me);
  return me;
}

// Groupe racine d'un meuble, avec métadonnées.
export function meuble(type, dims, extra = {}) {
  const g = new THREE.Group();
  g.name = type;
  g.userData = { type, dimensions: dims, ...extra };
  return g;
}

// ---------------------------------------------------------------------------
// Fusion des maillages statiques par matériau (moins d'appels de dessin sur iPhone).
// Les sous-objets NOMMÉS (ampoule, tambour, hublot, voyant, vantail, ecran…) et leurs
// descendants sont conservés tels quels pour rester pilotables.
// ---------------------------------------------------------------------------
export const PILOTABLES = new Set(["ampoule", "halo", "tambour", "hublot", "voyant", "afficheur", "ecran", "vantail", "maillage", "ombre_contact", "robot"]);
function protege(o, racine) {
  for (let n = o; n && n !== racine; n = n.parent) if (PILOTABLES.has(n.name)) return true;
  return false;
}

export function fusionner(racine) {
  // les groupes pilotables (tambour, hublot, vantail…) sont fusionnés en interne, en gardant leur pivot
  const sousGroupes = [];
  racine.traverse((o) => o !== racine && !o.isMesh && !o.isSprite && PILOTABLES.has(o.name) && sousGroupes.push(o));
  for (const n of sousGroupes) fusionner(n);
  racine.updateMatrixWorld(true);
  const inv = racine.matrixWorld.clone().invert();
  const groupes = new Map();
  const retirer = [];
  racine.traverse((o) => {
    if (!o.isMesh || protege(o, racine) || o.material.userData.propre) return;
    const mat = new THREE.Matrix4().multiplyMatrices(inv, o.matrixWorld);
    let g = o.geometry.clone().applyMatrix4(mat);
    if (mat.determinant() < 0) {
      // miroir : on retourne l'ordre des triangles pour garder les faces avant
      g = g.index ? g.toNonIndexed() : g;
      const p = g.attributes.position;
      for (let i = 0; i < p.count; i += 3) for (const a of Object.values(g.attributes)) {
        for (let k = 0; k < a.itemSize; k++) { const t = a.array[(i + 1) * a.itemSize + k]; a.array[(i + 1) * a.itemSize + k] = a.array[(i + 2) * a.itemSize + k]; a.array[(i + 2) * a.itemSize + k] = t; }
      }
    }
    if (!groupes.has(o.material)) groupes.set(o.material, []);
    groupes.get(o.material).push(g);
    retirer.push(o);
  });
  for (const o of retirer) o.parent.remove(o);
  // groupes vides non nommés
  const vides = [];
  racine.traverse((o) => o !== racine && !PILOTABLES.has(o.name) && !o.isMesh && !o.isSprite && o.children.length === 0 && vides.push(o));
  vides.forEach((o) => o.parent && o.parent.remove(o));
  for (const [m, gs] of groupes) {
    const indexe = gs.every((g) => g.index);
    const liste = gs.map((g) => {
      let h = indexe ? g : g.index ? g.toNonIndexed() : g;
      for (const k of Object.keys(h.attributes)) if (!["position", "normal", "uv"].includes(k)) h.deleteAttribute(k);
      return h;
    });
    const fus = mergeGeometries(liste, false);
    if (!fus) continue;
    const me = new THREE.Mesh(fus, m);
    me.userData.fusion = true;
    racine.add(me);
  }
  return racine;
}

// ---------------------------------------------------------------------------
// Ombre de contact (un quad avec dégradé radial, partagé) sous les meubles posés au sol.
// ---------------------------------------------------------------------------
const geoOmbre = () => geo("ombre", () => new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2), { metrique: false });

// Boîte englobante « physique » : ignore les halos (Sprites), les lignes et l'ombre de contact.
export function boiteEnglobante(obj) {
  obj.updateMatrixWorld(true);
  const b = new THREE.Box3(), tmp = new THREE.Box3();
  obj.traverse((o) => {
    if (!o.isMesh || o.name === "ombre_contact") return;
    if (!o.geometry.boundingBox) o.geometry.computeBoundingBox();
    tmp.copy(o.geometry.boundingBox).applyMatrix4(o.matrixWorld);
    b.union(tmp);
  });
  return b;
}

export function ajouterOmbre(groupe, marge = 1.25) {
  const b = boiteEnglobante(groupe);
  if (b.isEmpty()) return;
  const me = new THREE.Mesh(geoOmbre(), matOmbre());
  const l = (b.max.x - b.min.x) * marge + 0.12, p = (b.max.z - b.min.z) * marge + 0.12;
  me.scale.set(l, 1, p);
  me.position.set((b.min.x + b.max.x) / 2, 0.004, (b.min.z + b.max.z) / 2);
  me.name = "ombre_contact";
  me.renderOrder = -1;
  groupe.add(me);
}

export function compterTriangles(obj) {
  let n = 0;
  obj.traverse((o) => {
    if (!o.isMesh || !o.visible) return;
    const g = o.geometry;
    n += (g.index ? g.index.count : g.attributes.position.count) / 3;
  });
  return Math.round(n);
}

export const deg = (d) => (d * Math.PI) / 180;
