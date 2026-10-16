// Gestes et actions : raycast sur les sols de pièce et les meubles, toucher simple, appui long (500 ms).
// Un glissement de plus de 8 px, ou un second doigt, n'est jamais un toucher (c'est une orbite / un zoom).
// Actions : toggle, perform-action, more-info (événement hass-more-info), navigate (pushState + location-changed).
import * as THREE from "three";
import { toggleAutorise } from "./config.js";

export const SEUIL_GLISSEMENT_PX = 8;
export const DUREE_APPUI_LONG_MS = 500;

/** Exécute une action de liaison (format proche des actions Lovelace). Renvoie une description pour le journal. */
export function executerAction(action, { hass, element, config }) {
  if (!action || action.action === "none") return null;
  const evt = (type, detail) => element.dispatchEvent(new CustomEvent(type, { detail, bubbles: true, composed: true }));
  switch (action.action) {
    case "toggle": {
      const e = action.entity;
      if (!toggleAutorise(e, config)) {
        // Règle 5 (docs/decisions.md) : jamais de relais ; on se rabat sur la fiche de l'entité.
        console.warn(`maison3d-card : toggle refusé sur ${e} (relais ou entité non autorisée) ; ouverture de la fiche.`);
        evt("hass-more-info", { entityId: e });
        return `more-info ${e}`;
      }
      const domaine = e.split(".")[0];
      hass.callService(domaine === "light" || domaine === "switch" || domaine === "input_boolean" ? domaine : "homeassistant", "toggle", { entity_id: e });
      return `toggle ${e}`;
    }
    case "perform-action": {
      const [domaine, service] = action.perform_action.split(".");
      hass.callService(domaine, service, action.data || {}, action.target);
      return `perform-action ${action.perform_action}`;
    }
    case "more-info":
      if (!action.entity) return null;
      evt("hass-more-info", { entityId: action.entity });
      return `more-info ${action.entity}`;
    case "navigate":
      history.pushState(null, "", action.navigation_path);
      window.dispatchEvent(new Event("location-changed"));
      return `navigate ${action.navigation_path}`;
    default:
      return null;
  }
}

export class Interactions {
  /**
   * @param {object} p {dom, camera, scene, etats, quandToucher(cible, appuiLong, point)}
   */
  constructor({ dom, camera, scene, quandToucher }) {
    this.dom = dom;
    this.camera = camera;
    this.scene = scene;
    this.quandToucher = quandToucher;
    this.raycaster = new THREE.Raycaster();
    this.pointeurs = new Map();
    this.candidat = null;
    this.minuterie = null;

    this._bas = (e) => this._pointerDown(e);
    this._bouge = (e) => this._pointerMove(e);
    this._haut = (e) => this._pointerUp(e, false);
    this._annule = (e) => this._pointerUp(e, true);
    this._menu = (e) => e.preventDefault();
    dom.addEventListener("pointerdown", this._bas);
    dom.addEventListener("pointermove", this._bouge);
    dom.addEventListener("pointerup", this._haut);
    dom.addEventListener("pointercancel", this._annule);
    dom.addEventListener("contextmenu", this._menu);
  }

  _annulerCandidat() {
    clearTimeout(this.minuterie);
    this.minuterie = null;
    this.candidat = null;
  }

  _pointerDown(e) {
    if (e.button !== undefined && e.button > 0) return; // clic droit / molette : panoramique, pas un toucher
    this.pointeurs.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (this.pointeurs.size > 1) return this._annulerCandidat(); // deux doigts : zoom ou panoramique
    this.candidat = { id: e.pointerId, x: e.clientX, y: e.clientY };
    clearTimeout(this.minuterie);
    this.minuterie = setTimeout(() => {
      const c = this.candidat;
      if (!c) return;
      this.candidat = null;
      this._agir(c, true);
    }, DUREE_APPUI_LONG_MS);
  }

  _pointerMove(e) {
    if (this.pointeurs.has(e.pointerId)) this.pointeurs.set(e.pointerId, { x: e.clientX, y: e.clientY });
    const c = this.candidat;
    if (c && c.id === e.pointerId && Math.hypot(e.clientX - c.x, e.clientY - c.y) > SEUIL_GLISSEMENT_PX) this._annulerCandidat();
  }

  _pointerUp(e, annule) {
    this.pointeurs.delete(e.pointerId);
    const c = this.candidat;
    if (!c || c.id !== e.pointerId) return;
    const loin = Math.hypot(e.clientX - c.x, e.clientY - c.y) > SEUIL_GLISSEMENT_PX;
    this._annulerCandidat();
    if (!annule && !loin) this._agir(c, false);
  }

  /** Premier objet interactif visible sous le point écran. */
  cibleSous(x, y) {
    const r = this.dom.getBoundingClientRect();
    const ndc = new THREE.Vector2(((x - r.left) / r.width) * 2 - 1, -((y - r.top) / r.height) * 2 + 1);
    this.raycaster.setFromCamera(ndc, this.camera);
    const hits = this.raycaster.intersectObjects(this.scene.raycastables, true);
    for (const h of hits) {
      const ob = h.object;
      if (ob.isSprite || ob.name === "halo" || ob.name === "ombre_contact" || ob.userData.ignorer) continue;
      if (!visible(ob) && !(ob.material && ob.material.visible === false && visible(ob.parent))) continue;
      const mat = h.object.material;
      if (mat && mat.transparent && mat.opacity < 0.3 && !h.object.userData.interactif) continue;
      // Géométrie statique fusionnée : la pièce est retrouvée à partir du point touché
      if (ob.userData.niveauStatique && this.scene.pieceSousPoint) {
        const niv = this.scene.niveaux.get(ob.userData.niveauStatique);
        const p = niv ? niv.groupe.worldToLocal(h.point.clone()) : h.point;
        const pc = this.scene.pieceSousPoint(ob.userData.niveauStatique, p);
        if (!pc) continue;
        return { objet: ob, point: h.point, meubleIndex: undefined, piece: pc.id, interactif: false };
      }
      let o = h.object;
      while (o && o.userData.meubleIndex === undefined && o.userData.piece === undefined && !o.userData.dalle) o = o.parent;
      if (!o) continue;
      if (o.userData.dalle) return null; // une dalle masque ce qui est dessous
      return {
        objet: o,
        point: h.point,
        meubleIndex: o.userData.meubleIndex,
        piece: o.userData.piece,
        interactif: !!o.userData.interactif,
      };
    }
    return null;
  }

  _agir(c, appuiLong) {
    const cible = this.cibleSous(c.x, c.y);
    this.quandToucher(cible, appuiLong, { x: c.x, y: c.y });
  }

  liberer() {
    this._annulerCandidat();
    const d = this.dom;
    d.removeEventListener("pointerdown", this._bas);
    d.removeEventListener("pointermove", this._bouge);
    d.removeEventListener("pointerup", this._haut);
    d.removeEventListener("pointercancel", this._annule);
    d.removeEventListener("contextmenu", this._menu);
  }
}

function visible(o) {
  for (let x = o; x; x = x.parent) if (!x.visible) return false;
  return true;
}
