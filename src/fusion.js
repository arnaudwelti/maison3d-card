// Fusion de la géométrie statique (performance iPhone : peu d'appels de dessin).
//
// Après la construction de la scène et la liaison des états, tout ce qui ne bouge et ne change jamais
// (murs, mezzanines, garde-corps, escalier, ombres de contact, meubles non liés, corps des luminaires)
// est fusionné, niveau par niveau, en quelques maillages. La couleur de chaque matériau est « cuite »
// dans un attribut de couleur de sommet : tous les matériaux qui ne diffèrent que par leur couleur
// (même texture, même rugosité, même transparence…) deviennent UN seul maillage.
//
// Restent séparés : sols de pièce (cibles de toucher, teinte d'éclairage), dalles (occlusion), murs
// coupés / pleins (alternés selon la vue), meubles liés (luminaires liés, lave-linge, stations, porte,
// TV : raycast, pulsation, estompage), et toute partie pilotable (ampoule, halo, tambour, voyant, robot…)
// ou à matériau propre. Le raycast sur un maillage fusionné retrouve la pièce par le point touché.
import * as THREE from "three";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
import { pointDansPolygone } from "./scene.js";

const PILOTABLES = new Set(["ampoule", "halo", "tambour", "hublot", "voyant", "afficheur", "ecran", "vantail", "robot"]);
const r2 = (v) => (Math.round(v * 100) / 100).toFixed(2);
// Classes de rugosité / métal : des valeurs voisines partagent un maillage (différence invisible à cette échelle)
const classeRugosite = (r) => (r < 0.15 ? 0.08 : r < 0.3 ? 0.22 : r < 0.55 ? 0.4 : r < 0.78 ? 0.7 : 0.9);
const classeMetal = (m) => (m < 0.2 ? 0 : 0.45);

function protege(o, arret) {
  for (let n = o; n && n !== arret; n = n.parent) if (PILOTABLES.has(n.name)) return true;
  return false;
}

/** Clé de regroupement : tout ce qui distingue deux matériaux SAUF leur couleur diffuse. */
function cleMateriau(m, renderOrder, grossier) {
  if (!m.isMeshStandardMaterial || m.isMeshPhysicalMaterial) return `u:${m.uuid}:${renderOrder}`;
  const em = m.emissive && m.emissiveIntensity > 0 ? `${m.emissive.getHexString()}*${r2(m.emissiveIntensity)}` : "0";
  // Verres sans texture : l'opacité passe dans l'alpha des sommets, tous les verres d'un niveau fusionnent
  if (estVerre(m)) return ["v", m.side, m.depthWrite ? "w" : "nw", renderOrder].join("|");
  return [
    "s", m.map ? m.map.uuid : "-", grossier ? "*" : classeRugosite(m.roughness), grossier ? "*" : classeMetal(m.metalness), m.transparent ? `t${r2(m.opacity)}` : "o", m.side,
    m.flatShading ? "f" : "l", m.depthWrite ? "w" : "nw", r2(m.alphaTest), em, renderOrder,
  ].join("|");
}
const estVerre = (m) => m.transparent && !m.map && !m.alphaMap && m.alphaTest === 0 && !(m.emissive && m.emissiveIntensity > 0);

function materiauFusionne(m) {
  if (!m.isMeshStandardMaterial || m.isMeshPhysicalMaterial) return m;
  const f = new THREE.MeshStandardMaterial({
    color: 0xffffff, vertexColors: true, map: m.map, roughness: classeRugosite(m.roughness), metalness: classeMetal(m.metalness),
    transparent: m.transparent, opacity: estVerre(m) ? 1 : m.opacity, side: m.side, flatShading: m.flatShading,
    depthWrite: m.depthWrite, alphaTest: m.alphaTest,
  });
  if (m.emissive && m.emissiveIntensity > 0) {
    f.emissive.copy(m.emissive);
    f.emissiveIntensity = m.emissiveIntensity;
  }
  f.name = `fusion:${m.name || ""}`;
  f.userData.fusion = true;
  return f;
}

/** Géométrie non indexée, dans le repère `inv`, avec position / normal / uv / color (couleur du matériau cuite). */
function preparer(mesh, inv, cuire) {
  const mat = new THREE.Matrix4().multiplyMatrices(inv, mesh.matrixWorld);
  let g = mesh.geometry.index ? mesh.geometry.toNonIndexed() : mesh.geometry.clone();
  g.applyMatrix4(mat);
  if (mat.determinant() < 0) {
    // transformation miroir : on retourne l'ordre des sommets pour garder les faces avant
    for (const a of Object.values(g.attributes))
      for (let i = 0; i < a.count; i += 3)
        for (let k = 0; k < a.itemSize; k++) {
          const t = a.array[(i + 1) * a.itemSize + k];
          a.array[(i + 1) * a.itemSize + k] = a.array[(i + 2) * a.itemSize + k];
          a.array[(i + 2) * a.itemSize + k] = t;
        }
  }
  const n = g.attributes.position.count;
  if (!g.attributes.normal) g.computeVertexNormals();
  if (!g.attributes.uv) g.setAttribute("uv", new THREE.BufferAttribute(new Float32Array(n * 2), 2));
  const m = mesh.material;
  if (cuire) {
    const c = m.color || new THREE.Color(1, 1, 1);
    const ancien = m.vertexColors && g.attributes.color;
    const t = estVerre(m) ? 4 : 3;
    const col = new Float32Array(n * t);
    for (let i = 0; i < n; i++) {
      const k = ancien ? [ancien.getX(i), ancien.getY(i), ancien.getZ(i)] : [1, 1, 1];
      col[i * t] = c.r * k[0];
      col[i * t + 1] = c.g * k[1];
      col[i * t + 2] = c.b * k[2];
      if (t === 4) col[i * t + 3] = m.opacity;
    }
    g.setAttribute("color", new THREE.BufferAttribute(col, t));
  }
  for (const k of Object.keys(g.attributes)) if (!["position", "normal", "uv", "color"].includes(k)) g.deleteAttribute(k);
  g.morphAttributes = {};
  return g;
}

/**
 * Fusionne les maillages statiques de `racine` (un groupe de niveau ou le groupe commun).
 * @param {THREE.Object3D} racine
 * @param {(mesh) => boolean} exclure  vrai pour un maillage à laisser tel quel
 * @returns {THREE.Mesh[]} maillages fusionnés ajoutés à `racine`
 */
export function fusionnerStatique(racine, exclure, grossier = false) {
  racine.updateMatrixWorld(true);
  const inv = racine.matrixWorld.clone().invert();
  const lots = new Map();
  const retires = [];
  racine.traverse((o) => {
    if (!o.isMesh || o.isSkinnedMesh || o.isInstancedMesh || !o.visible || exclure(o)) return;
    for (let p = o.parent; p && p !== racine; p = p.parent) if (!p.visible) return; // jeux alternés (murs pleins)
    const m = o.material;
    if (!m || Array.isArray(m) || m.visible === false || m.userData.propre) return;
    const cle = cleMateriau(m, o.renderOrder, grossier);
    if (!lots.has(cle)) lots.set(cle, { materiau: m, renderOrder: o.renderOrder, meshes: [] });
    lots.get(cle).meshes.push(o);
    retires.push(o);
  });
  const sorties = [];
  for (const lot of lots.values()) {
    if (lot.meshes.length < 2 && !lot.materiau.isMeshStandardMaterial) continue; // rien à gagner
    const cuire = lot.materiau.isMeshStandardMaterial && !lot.materiau.isMeshPhysicalMaterial;
    const geos = lot.meshes.map((me) => preparer(me, inv, cuire));
    const fus = mergeGeometries(geos, false);
    geos.forEach((g) => g.dispose());
    if (!fus) continue;
    fus.computeBoundingSphere();
    fus.computeBoundingBox();
    const me = new THREE.Mesh(fus, cuire ? materiauFusionne(lot.materiau) : lot.materiau);
    me.renderOrder = lot.renderOrder;
    me.name = "statique";
    me.userData.statique = true;
    me.userData.ignorer = lot.meshes.every((x) => x.userData.ignorer || estIgnore(x, racine));
    racine.add(me);
    sorties.push(me);
    for (const x of lot.meshes) x.userData._fusionne = true;
  }
  // Retrait des maillages fusionnés ; géométries propres à la scène (hors bibliothèque) libérées
  for (const o of retires) {
    if (!o.userData._fusionne) continue;
    o.parent.remove(o);
    if (!o.geometry.userData.partage && !o.userData.dansMeuble && !o.userData.geoPartagee) o.geometry.dispose();
  }
  return sorties;
}

function estIgnore(o, arret) {
  for (let n = o; n && n !== arret; n = n.parent) if (n.userData.ignorer) return true;
  return false;
}

/** Pièce sous un point (repère du groupe de niveau) : la plus haute dont le sol est sous le point. */
export function pieceSousPoint(pieces, niveau, p) {
  let meilleure = null;
  for (const pc of pieces.values()) {
    if (pc.niveau !== niveau || !pc.polygone) continue;
    if (pc.altitude > p.y + 0.05) continue;
    if (!pointDansPolygone(p.x, p.z, pc.polygone)) continue;
    if (!meilleure || pc.altitude > meilleure.altitude) meilleure = pc;
  }
  return meilleure;
}

/**
 * Fusion de toute la scène. `garder(meuble)` : vrai pour un meuble lié à laisser entier.
 * Renvoie { avant, apres } (nombre de maillages visibles).
 */
export function optimiserScene(donnees, garder, garderSol = () => true) {
  const compter = () => {
    let n = 0;
    donnees.racine.traverse((o) => (o.isMesh || o.isSprite) && n++);
    return n;
  };
  const avant = compter();
  // Marquage : meubles gardés entiers, maillages appartenant à un meuble (géométrie de la bibliothèque)
  const gardes = new Set();
  for (const m of donnees.meubles) {
    if (garder(m)) gardes.add(m.objet);
    m.objet.traverse((o) => o.isMesh && (o.userData.dansMeuble = true));
  }
  const dansGarde = (o) => {
    for (let n = o; n; n = n.parent) if (gardes.has(n)) return true;
    return false;
  };
  // Sols : ceux des pièces liées (teinte d'éclairage, estompage) restent séparés ; les autres rejoignent la
  // géométrie statique (le toucher retrouve la pièce par le point touché).
  const sols = new Set();
  for (const p of donnees.pieces.values()) {
    p.parentSol = p.mesh.parent;
    if (garderSol(p) || (p.mesh.material && p.mesh.material.visible === false)) sols.add(p.mesh);
    else p.mesh.userData.geoPartagee = true;
  }
  const fixes = new Set();
  for (const n of donnees.niveaux.values()) {
    if (n.dalle) fixes.add(n.dalle);
    for (const g of [n.mursCoupes, n.mursPleins]) g && g.traverse((o) => o.isMesh && fixes.add(o));
  }
  donnees.racine.traverse((o) => o.isMesh && o.userData.dalle && fixes.add(o));

  // Luminaires liés : seul le corps (support, abat-jour, cordon) rejoint la géométrie statique ;
  // l'ampoule et le halo (matériaux propres) restent des objets du meuble, pilotés et touchables.
  const corpsFusionnable = (o) => {
    for (let n = o; n; n = n.parent) if (gardes.has(n)) return n.userData.role === "lampe";
    return false;
  };
  for (const n of donnees.niveaux.values()) {
    const sorties = fusionnerStatique(n.groupe, (o) => sols.has(o) || fixes.has(o) || (dansGarde(o) && !corpsFusionnable(o) && o.name !== "ombre_contact") || o.userData.vide);
    for (const me of sorties) {
      if (me.userData.ignorer) continue;
      me.userData.niveauStatique = n.id;
      donnees.raycastables.push(me);
    }
  }
  fusionnerStatique(donnees.commun, (o) => protege(o, null));
  // Les meubles gardés entiers : fusion interne (couleurs cuites) hors parties pilotables, puis fusion
  // interne de chaque sous-groupe pilotable (tambour, hublot, robot…) autour de son propre pivot
  for (const o of gardes) {
    fusionnerStatique(o, (x) => protege(x, o), true);
    const sous = [];
    o.traverse((x) => x !== o && !x.isMesh && PILOTABLES.has(x.name) && sous.push(x));
    for (const g of sous) fusionnerStatique(g, (x) => protege(x, g), true);
  }
  // Groupes de meubles désormais vides : retirés des cibles de raycast
  donnees.raycastables = donnees.raycastables.filter((o) => {
    // objets fusionnés (détachés de la scène) : plus jamais touchables
    let attache = false;
    for (let x = o; x; x = x.parent) if (x === donnees.racine) attache = true;
    if (!attache || o.userData._fusionne) return false;
    let maillage = false;
    o.traverse((x) => (x.isMesh || x.isSprite) && (maillage = true));
    return maillage;
  });
  return { avant, apres: compter() };
}
