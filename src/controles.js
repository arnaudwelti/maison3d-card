// Caméra et contrôles : orbite, zoom à deux doigts et panoramique (OrbitControls bornés), sélecteur de niveau
// Rez / Étage / Tout / Éclaté en overlay HTML, bouton « Recentrer », transitions animées (rendu à la demande).
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const DUREE_TRANSITION = 650; // ms
const adoucir = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const LIBELLES = [
  ["rez", "Rez"],
  ["etage", "Étage"],
  ["tout", "Tout"],
  ["eclate", "Éclaté"],
];
const ICONE_RECENTRER =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-8.95 5H1v-2h2.05A9 9 0 0 1 11 3.05V1h2v2.05A9 9 0 0 1 20.95 11H23v2h-2.05A9 9 0 0 1 13 20.95V23h-2v-2.05A9 9 0 0 1 3.05 13ZM12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z"/></svg>';

export class Controles {
  /**
   * @param {object} p {camera, dom (canvas), overlay (HTMLElement), scene (résultat de construireScene), config, demanderRendu}
   */
  constructor({ camera, dom, overlay, scene, config, demanderRendu }) {
    this.camera = camera;
    this.scene = scene;
    this.config = config;
    this.demanderRendu = demanderRendu;
    this.mode = config.niveau_defaut;
    this.transitions = [];

    const niv = [...scene.niveaux.values()];
    this.rez = niv[0];
    this.etage = niv[1] || null;
    const b = scene.bornes;
    this.centre = b.getCenter(new THREE.Vector3());
    this.taille = b.getSize(new THREE.Vector3());
    this.rayon = Math.max(this.taille.x, this.taille.z) / 2;

    const c = new OrbitControls(camera, dom);
    c.enableDamping = true;
    c.dampingFactor = 0.14;
    c.rotateSpeed = 0.75;
    c.zoomSpeed = 0.9;
    c.panSpeed = 0.8;
    c.screenSpacePanning = false; // panoramique dans le plan du sol
    c.minDistance = 3;
    c.maxDistance = this.rayon * 7 + 12; // assez loin pour la vue par défaut en portrait (iPhone), sinon la maison est rognée
    c.minPolarAngle = 0.02;
    c.maxPolarAngle = Math.PI * 0.46; // jamais sous le sol
    c.touches = { ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.DOLLY_PAN };
    c.addEventListener("change", () => {
      this._bornerCible();
      demanderRendu();
    });
    c.addEventListener("start", () => (this._bouge = true));
    this.orbite = c;

    this._construireInterface(overlay);
    this.definirNiveau(this.mode, false);
  }

  _construireInterface(overlay) {
    const barre = document.createElement("div");
    barre.className = "niveaux";
    barre.setAttribute("role", "tablist");
    barre.setAttribute("aria-label", "Niveau affiché");
    this.boutons = new Map();
    for (const [id, nom] of LIBELLES) {
      if (!this.etage && id !== "rez") continue;
      const bt = document.createElement("button");
      bt.type = "button";
      bt.textContent = nom;
      bt.dataset.niveau = id;
      bt.setAttribute("role", "tab");
      bt.addEventListener("click", (e) => {
        e.stopPropagation();
        this.definirNiveau(id);
      });
      barre.appendChild(bt);
      this.boutons.set(id, bt);
    }
    const rec = document.createElement("button");
    rec.type = "button";
    rec.className = "recentrer";
    rec.title = "Recentrer";
    rec.setAttribute("aria-label", "Recentrer la vue");
    rec.innerHTML = ICONE_RECENTRER;
    rec.addEventListener("click", (e) => {
      e.stopPropagation();
      this.recentrer();
    });
    overlay.append(barre, rec);
    this._interface = [barre, rec];
  }

  /** Décalage vertical de l'étage et visibilité des niveaux pour un mode. */
  _etatNiveaux(mode) {
    return {
      rezVisible: mode !== "etage",
      etageVisible: mode !== "rez",
      ecart: mode === "eclate" ? this.ecartEclate() : 0,
    };
  }

  /** Écart de la vue éclatée : plus grand en portrait (les niveaux s'empilent verticalement à l'écran). */
  ecartEclate() {
    return this.config.ecart_eclate * (this.camera.aspect < 0.85 ? 1.45 : 1.3);
  }

  /** Emprise visible (Box3) pour un mode. */
  _emprise(mode) {
    const b = new THREE.Box3();
    const ajouter = (g, dy = 0) => {
      const p = g.position.y;
      g.position.y = dy;
      g.updateMatrixWorld(true);
      b.expandByObject(g);
      g.position.y = p;
      g.updateMatrixWorld(true);
    };
    if (mode !== "etage") ajouter(this.rez.groupe);
    if (this.etage && mode !== "rez") ajouter(this.etage.groupe, mode === "eclate" ? this.ecartEclate() : 0);
    // Vue d'un seul niveau : seuls le sol et les murs (coupés) comptent, pas l'air au-dessus ni l'escalier
    const coupe = this.config.maquette ? this.config.hauteur_coupe + 0.4 : 2.6;
    if (mode === "rez") b.max.y = Math.min(b.max.y, this.rez.altitude + coupe);
    if (mode === "etage" && this.etage) b.max.y = Math.min(b.max.y, this.etage.altitude + coupe);
    if (b.isEmpty()) b.copy(this.scene.bornes);
    return b;
  }

  /** Vue par défaut (cible, position) pour un mode : l'emprise est ajustée au cadre par projection. */
  vueDefaut(mode) {
    const dessus = this.config.vue === "dessus";
    const portrait = this.camera.aspect < 0.85;
    // Portrait (iPhone) : vue plus frontale (azimut −10°) pour que la maison, plus profonde que large,
    // occupe la hauteur de l'écran ; éclaté plus rasant pour séparer nettement les deux niveaux.
    const polaire = dessus ? 0.04 : mode === "eclate" ? (portrait ? 1.0 : 1.02) : portrait ? 0.58 : 0.9;
    const azimut = dessus ? 0 : ((portrait ? -10 : -38) * Math.PI) / 180;
    const emp = this._emprise(mode);
    const cible = emp.getCenter(new THREE.Vector3());
    if (mode === "etage" || mode === "rez") cible.y = emp.min.y + 0.3;
    const coins = [];
    for (const x of [emp.min.x, emp.max.x]) for (const y of [emp.min.y, emp.max.y]) for (const z of [emp.min.z, emp.max.z]) coins.push(new THREE.Vector3(x, y, z));
    const cam = this.camera.clone();
    const dir = new THREE.Vector3().setFromSphericalCoords(1, polaire, azimut);
    // Marges : la barre de niveaux occupe le bas du cadre
    const MX = portrait ? 0.95 : 0.88;
    const HAUT = 0.88;
    const BAS = -0.72;
    const mesurer = (d) => {
      cam.position.copy(cible).addScaledVector(dir, d);
      cam.lookAt(cible);
      cam.updateMatrixWorld(true);
      let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
      for (const c of coins) {
        const v = c.clone().project(cam);
        x0 = Math.min(x0, v.x); x1 = Math.max(x1, v.x);
        y0 = Math.min(y0, v.y); y1 = Math.max(y1, v.y);
      }
      return { x0, x1, y0, y1 };
    };
    let d = 10;
    for (let passe = 0; passe < 5; passe++) {
      let lo = 1.5;
      let hi = this.orbite.maxDistance;
      for (let i = 0; i < 24; i++) {
        d = (lo + hi) / 2;
        const m = mesurer(d);
        const ok = (m.x1 - m.x0) / 2 <= MX && m.y1 - m.y0 <= HAUT - BAS;
        if (ok) hi = d;
        else lo = d;
      }
      d = hi;
      if (passe === 4) break; // dernière passe : distance seule, après le dernier recentrage
      // Recentrer la cible pour que l'emprise projetée occupe la zone utile
      const m = mesurer(d);
      const cx = (m.x0 + m.x1) / 2;
      const cy = (m.y0 + m.y1) / 2 - (HAUT + BAS) / 2;
      const hh = d * Math.tan((cam.fov * Math.PI) / 360);
      const droite = new THREE.Vector3().setFromMatrixColumn(cam.matrixWorld, 0);
      const haut = new THREE.Vector3().setFromMatrixColumn(cam.matrixWorld, 1);
      cible.addScaledVector(droite, cx * hh * cam.aspect).addScaledVector(haut, cy * hh);
    }
    const pos = cible.clone().addScaledVector(dir, d);
    return { cible, pos };
  }

  definirNiveau(mode, anime = true) {
    this.mode = mode;
    for (const [id, bt] of this.boutons) {
      bt.classList.toggle("actif", id === mode);
      bt.setAttribute("aria-selected", String(id === mode));
    }
    const { rezVisible, etageVisible, ecart } = this._etatNiveaux(mode);
    this.rez.groupe.visible = rezVisible;
    // Maquette : le niveau du haut est coupé ; en vue « Tout », le rez garde ses murs pleins sous l'étage
    for (const n of this.scene.niveaux.values()) for (const p of n.puits || []) p.visible = mode === "etage";
    for (const n of this.scene.niveaux.values()) {
      if (!n.mursPleins) continue;
      const plein = mode === "tout" && n !== this.etage && !!this.etage;
      n.mursPleins.visible = plein;
      n.mursCoupes.visible = !plein;
    }
    if (this.etage) {
      this.etage.groupe.visible = etageVisible;
      this._transition(this.etage.groupe.position, "y", ecart, anime);
    }
    const v = this.vueDefaut(mode);
    // On garde l'angle courant de l'utilisateur, on ajuste seulement la hauteur de la cible et la distance
    if (anime && this._initialise) {
      const off = this.camera.position.clone().sub(this.orbite.target);
      const sph = new THREE.Spherical().setFromVector3(off);
      const vd = new THREE.Spherical().setFromVector3(v.pos.clone().sub(v.cible));
      sph.radius = vd.radius;
      const pos = new THREE.Vector3().setFromSpherical(sph).add(v.cible);
      this._animerCamera(v.cible, pos);
    } else {
      this.orbite.target.copy(v.cible);
      this.camera.position.copy(v.pos);
      this.orbite.update();
    }
    this._initialise = true;
    this.demanderRendu();
  }

  recentrer() {
    const v = this.vueDefaut(this.mode);
    this._animerCamera(v.cible, v.pos);
    this.demanderRendu();
  }

  /** À appeler après un redimensionnement : recadre si l'utilisateur n'a pas bougé. */
  recadrer() {
    if (!this._bouge) {
      const v = this.vueDefaut(this.mode);
      this.orbite.target.copy(v.cible);
      this.camera.position.copy(v.pos);
      this.orbite.update();
    }
  }

  _animerCamera(cible, pos) {
    this._transition(this.orbite.target, null, cible, true);
    this._transition(this.camera.position, null, pos, true);
  }

  _transition(objet, cle, vers, anime) {
    this.transitions = this.transitions.filter((t) => !(t.objet === objet && t.cle === cle));
    if (!anime) {
      if (cle) objet[cle] = vers;
      else objet.copy(vers);
      return;
    }
    const de = cle ? objet[cle] : objet.clone();
    this.transitions.push({ objet, cle, de, vers: cle ? vers : vers.clone(), t0: performance.now() });
  }

  _bornerCible() {
    const t = this.orbite.target;
    const m = this.rayon * 0.6;
    const b = this.scene.bornes;
    t.x = Math.max(b.min.x - m, Math.min(b.max.x + m, t.x));
    t.z = Math.max(b.min.z - m, Math.min(b.max.z + m, t.z));
    t.y = Math.max(-0.2, Math.min(b.max.y + (this.config.ecart_eclate || 0), t.y));
  }

  /** Avance les transitions et l'amortissement ; renvoie true tant qu'il faut continuer à rendre. */
  maj() {
    let actif = false;
    if (this.transitions.length) {
      const now = performance.now();
      this.transitions = this.transitions.filter((t) => {
        const k = Math.min(1, (now - t.t0) / DUREE_TRANSITION);
        const e = adoucir(k);
        if (t.cle) t.objet[t.cle] = t.de + (t.vers - t.de) * e;
        else t.objet.lerpVectors(t.de, t.vers, e);
        return k < 1;
      });
      actif = true;
      this.camera.lookAt(this.orbite.target);
    }
    // Escalier étiré en vue éclatée : il relie toujours le rez au palier de l'étage déplacé
    const esc = this.scene.commun;
    if (esc && this.etage) {
      const h = this.etage.altitude - this.rez.altitude || 2.7;
      const k = 1 + this.etage.groupe.position.y / h;
      if (Math.abs(esc.scale.y - k) > 1e-4) esc.scale.y = k;
    }
    const amorti = this.orbite.update();
    return actif || amorti || this.transitions.length > 0;
  }

  liberer() {
    this.orbite.dispose();
    this._interface.forEach((e) => e.remove());
  }
}
