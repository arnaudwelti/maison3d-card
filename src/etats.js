// Liaison des états Home Assistant à la scène : lampes (couleur et intensité réelles), lueur de pièce
// (une PointLight par pièce au plus, créées une seule fois), sol réchauffé, lave-linge (tambour, voyant),
// étiquettes de thermostat (overlay HTML projeté), estompage des entités indisponibles, jour/nuit (sun.sun).
// Seules les liaisons dont une entité a changé (comparaison des objets d'état) sont recalculées.
import * as THREE from "three";

const BLANC_CHAUD = 2700;
const GRIS = new THREE.Color(0x9a9a9a);
const NOIR = new THREE.Color(0, 0, 0);
const ETATS_LAVE_LINGE_ACTIFS = ["running"];

// ------------------------------------------------------------------------------------------------
// Couleurs
// ------------------------------------------------------------------------------------------------
export function kelvinVersRgb(k) {
  const t = Math.max(1000, Math.min(40000, k)) / 100;
  let r, g, b;
  if (t <= 66) {
    r = 255;
    g = 99.4708025861 * Math.log(t) - 161.1195681661;
    b = t <= 19 ? 0 : 138.5177312231 * Math.log(t - 10) - 305.0447927307;
  } else {
    r = 329.698727446 * Math.pow(t - 60, -0.1332047592);
    g = 288.1221695283 * Math.pow(t - 60, -0.0755148492);
    b = 255;
  }
  const c = (v) => Math.max(0, Math.min(255, Math.round(v)));
  return [c(r), c(g), c(b)];
}
export function hsVersRgb(h, s) {
  const f = (n) => {
    const k = (n + h / 60) % 6;
    return 255 * (1 - (s / 100) * Math.max(0, Math.min(k, 4 - k, 1)));
  };
  return [f(5), f(3), f(1)].map(Math.round);
}
/** Couleur réelle d'une lampe (rgb_color, sinon hs_color, sinon color_temp_kelvin), en espace de travail linéaire. */
export function couleurLampe(attr = {}) {
  let rgb = attr.rgb_color;
  if (!Array.isArray(rgb)) {
    if (Array.isArray(attr.hs_color)) rgb = hsVersRgb(attr.hs_color[0], attr.hs_color[1]);
    else if (attr.color_temp_kelvin) rgb = kelvinVersRgb(attr.color_temp_kelvin);
    else if (attr.color_temp) rgb = kelvinVersRgb(1e6 / attr.color_temp);
    else rgb = kelvinVersRgb(BLANC_CHAUD);
  }
  return new THREE.Color().setRGB(rgb[0] / 255, rgb[1] / 255, rgb[2] / 255, THREE.SRGBColorSpace);
}
const BLANC_CHAUD_LIN = (() => {
  const [r, g, b] = kelvinVersRgb(2900);
  return new THREE.Color().setRGB(r / 255, g / 255, b / 255, THREE.SRGBColorSpace);
})();
/** Teinte adoucie pour la LUEUR d'une pièce : saturation plafonnée, mélange vers un blanc chaud (2900 K).
 *  Les ambiances circadiennes très orangées (22°/95 %) donnent ainsi une lumière chaude crédible. */
export function couleurLueur(c, satMax = 0.42, melange = 0.45) {
  const hsl = {};
  const r = c.clone();
  r.getHSL(hsl, THREE.SRGBColorSpace);
  r.setHSL(hsl.h, Math.min(hsl.s, satMax), Math.max(hsl.l, 0.62), THREE.SRGBColorSpace);
  return r.lerp(BLANC_CHAUD_LIN, melange);
}
const lisse = (a, b, x) => {
  const t = Math.max(0, Math.min(1, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};
const fmt = (v, d = 1) => (typeof v === "number" ? v.toLocaleString("fr-CH", { minimumFractionDigits: d, maximumFractionDigits: d }) : "–");

/** État lumineux d'une liaison de pièce ou de lampe. */
export function etatLumiere(l, states) {
  const sEtat = l.etat ? states[l.etat] : undefined;
  const sLum = l.lumiere ? states[l.lumiere] : undefined;
  const inactif = (s) => !s || s.state === "unavailable" || s.state === "unknown";
  let on = false;
  let attr = {};
  let indispo = false;
  if (sLum && sLum.state === "on") {
    on = true;
    attr = sLum.attributes || {};
  } else if (sEtat && sEtat.state === "on" && (!sLum || inactif(sLum) || sLum.state === "off")) {
    // Commande « on » sans lampe connectée allumée (ex. SdB haut : relais attaché sans ampoule)
    on = !sLum || inactif(sLum);
  }
  if (sEtat && inactif(sEtat)) indispo = true;
  // Lampe injoignable : estompée, sauf si la commande est « off » (SdB bas, règle 3 : c'est normal)
  else if (sLum && inactif(sLum) && !(sEtat && sEtat.state === "off")) indispo = true;
  else if (!sEtat && !sLum && (l.etat || l.lumiere)) indispo = true;
  const b = typeof attr.brightness === "number" ? attr.brightness / 255 : on ? 0.7 : 0;
  const couleur = couleurLampe(attr);
  const rgb = couleur.clone().convertLinearToSRGB().toArray().map((v) => Math.round(v * 255));
  return { on, indispo, couleur, rgb, luminosite: b, niveau: on ? 0.3 + 0.7 * Math.sqrt(b) : 0 };
}

// ------------------------------------------------------------------------------------------------
// Aides matériaux
// ------------------------------------------------------------------------------------------------
function materiauPropre(mesh) {
  if (!mesh.material.userData.propre && !mesh.userData.matPropre) {
    mesh.material = mesh.material.clone();
    mesh.material.userData = { ...mesh.material.userData, propre: true, partage: false };
    mesh.userData.matPropre = true;
  }
  return mesh.material;
}
export function allumerAmpoules(objet, couleur, niveau, mobilier, rgb) {
  // Bibliothèque de mobilier : allumer()/eteindre() connaissent ses ampoules et halos
  if (mobilier && typeof mobilier.allumer === "function" && typeof mobilier.eteindre === "function" && !objet.userData.remplacement) {
    try {
      if (niveau > 0) mobilier.allumer(objet, { couleur: rgb || couleur.clone().convertLinearToSRGB().toArray().map((v) => Math.round(v * 255)), intensite: niveau });
      else mobilier.eteindre(objet);
      return;
    } catch (e) {
      /* repli ci-dessous */
    }
  }
  objet.traverse((o) => {
    if (!o.isMesh && !o.isSprite) return;
    const nom = o.name || "";
    if (nom.startsWith("ampoule")) {
      const m = materiauPropre(o);
      if (m.emissive) {
        m.emissive.copy(niveau > 0 ? couleur : NOIR);
        m.emissiveIntensity = niveau > 0 ? 0.8 + 2.6 * niveau : 0;
      }
    } else if (nom.startsWith("halo")) {
      const m = materiauPropre(o);
      o.visible = niveau > 0;
      if (m.color) m.color.copy(couleur);
      if ("opacity" in m) m.opacity = 0.25 + 0.5 * niveau;
    }
  });
}
export function estomper(objet, oui) {
  objet.traverse((o) => {
    if (!o.isMesh || o.userData.ignorer) return;
    if (oui) {
      if (!o.userData.matOrigine) {
        o.userData.matOrigine = o.material;
        o.material = o.material.clone();
        o.material.userData = { propre: true };
        o.material.transparent = true;
        o.material.opacity = 0.35;
        if (o.material.color) o.material.color.lerp(GRIS, 0.5);
      }
    } else if (o.userData.matOrigine) {
      o.material.dispose();
      o.material = o.userData.matOrigine;
      delete o.userData.matOrigine;
    }
  });
}

// ------------------------------------------------------------------------------------------------
// Gestionnaire des états
// ------------------------------------------------------------------------------------------------
export class GestionEtats {
  /**
   * @param {object} p {scene, liaisons (normalisées), config, overlay (HTMLElement), ambiance {hemi, soleil, fond(f)}}
   */
  constructor({ scene, liaisons, config, overlay, ambiance, mobilier }) {
    this.scene = scene;
    this.mobilier = mobilier || null;
    this.config = config;
    this.overlay = overlay;
    this.ambiance = ambiance;
    this._derniers = new Map();
    this._premier = true;
    this.animations = new Set(); // objets à animer en continu (tambours)
    this.etiquettes = [];
    this.lueurs = [];
    this.liaisons = [];
    this.parPiece = new Map(); // pieceId → liaison d'éclairage
    this.parMeuble = new Map(); // index de meuble → liaison
    this.thermoParPiece = new Map();

    for (const l of liaisons) {
      const r = { ...l, _entites: [l.etat, l.lumiere, l.etiquette].filter(Boolean) };
      if (l.cible.piece !== undefined) {
        r.piece = scene.pieces.get(l.cible.piece);
        if (!r.piece) {
          console.warn(`maison3d-card : pièce « ${l.cible.piece} » introuvable dans le plan (liaison ignorée).`);
          continue;
        }
        if (r.role === "piece" || r.role === "lampe") this.parPiece.set(r.piece.id, r);
        if (r.role === "thermostat") this.thermoParPiece.set(r.piece.id, r);
      } else {
        const c = l.cible.meuble;
        r.meuble = scene.meubles.find((m) => m.index === c || (m.id !== undefined && m.id === c));
        if (!r.meuble) {
          console.warn(`maison3d-card : meuble « ${c} » introuvable dans l'aménagement (liaison ignorée).`);
          continue;
        }
        this.parMeuble.set(r.meuble.index, r);
      }
      this.liaisons.push(r);
    }

    // Lampes de chaque pièce (sans liaison propre) : suivent l'éclairage de la pièce
    this.lampesParPiece = new Map();
    for (const m of scene.meubles) {
      if (m.objet.userData.role !== "lampe" || this.parMeuble.has(m.index) || !m.piece) continue;
      if (!this.lampesParPiece.has(m.piece)) this.lampesParPiece.set(m.piece, []);
      this.lampesParPiece.get(m.piece).push(m.objet);
    }

    // Lueurs : une PointLight par pièce éclairable, créée une fois (nombre de lumières constant)
    if (config.lueurs) {
      for (const r of this.parPiece.values()) {
        const p = r.piece;
        const niv = scene.niveaux.get(p.niveau);
        const pl = new THREE.PointLight(0xffc68a, 0, Math.max(3.5, p.rayon * 2.2), 1.6);
        pl.position.set(p.centre.x, p.altitude + 1.9, p.centre.z);
        niv.groupe.add(pl);
        r.lueur = pl;
        this.lueurs.push(pl);
      }
    }

    // Lave-linge : tambour, voyant (créé s'il manque)
    for (const r of this.liaisons) {
      if (r.role !== "lave_linge" || !r.meuble) continue;
      const o = r.meuble.objet;
      r.tambour = o.getObjectByName("tambour");
      r.voyant = o.getObjectByName("voyant");
      if (!r.voyant) {
        const hub = o.getObjectByName("hublot");
        const v = new THREE.Mesh(new THREE.SphereGeometry(0.018, 8, 6), new THREE.MeshStandardMaterial({ color: 0x223322, emissive: 0x000000 }));
        v.name = "voyant";
        v.material.userData.propre = true;
        const bb = new THREE.Box3().setFromObject(o);
        const loc = o.worldToLocal(new THREE.Vector3(bb.max.x - 0.08, bb.max.y - 0.06, bb.max.z + 0.005));
        v.position.copy(hub ? new THREE.Vector3(loc.x, loc.y, hub.position.z + 0.005) : loc);
        o.add(v);
        r.voyant = v;
      }
      r.etiquette3d = this._creerEtiquette("lave-linge", r.meuble.objet, new THREE.Vector3(0, 1.25, 0), r);
    }

    // Étiquettes de thermostat
    if (config.etiquettes_thermostats) {
      for (const r of this.thermoParPiece.values()) {
        const p = r.piece;
        const niv = scene.niveaux.get(p.niveau);
        // Ancrée vers l'avant de la pièce (côté −X / +Z, face à la vue par défaut) : l'étiquette s'élève à l'écran
        // au-dessus de sa propre pièce sans déborder sur la voisine du fond ni couvrir le centre à toucher.
        const xs = p.polygone.map((q) => q[0]);
        const zs = p.polygone.map((q) => q[1]);
        const fx = p.centre.x + (Math.min(...xs) - p.centre.x) * 0.5;
        const fz = p.centre.z + (Math.max(...zs) - p.centre.z) * 0.62;
        r.etiquette3d = this._creerEtiquette("thermo", niv.groupe, new THREE.Vector3(fx, p.altitude + 0.3, fz), r);
      }
    }
  }

  _creerEtiquette(classe, parent, position, liaison) {
    const el = document.createElement("button");
    el.type = "button";
    el.className = `etiquette ${classe}`;
    el.setAttribute("aria-label", liaison.piece ? `Thermostat ${liaison.piece.nom}` : "Lave-linge");
    this.overlay.appendChild(el);
    const e = { el, parent, position, liaison, visible: true };
    this.etiquettes.push(e);
    return e;
  }

  /** Applique les états ; renvoie true si la scène a changé. */
  appliquer(hass) {
    if (!hass || !hass.states) return false;
    const st = hass.states;
    const changes = new Set();
    const surveiller = (e) => {
      const s = st[e];
      if (this._premier || s !== this._derniers.get(e)) {
        changes.add(e);
        this._derniers.set(e, s);
      }
    };
    for (const l of this.liaisons) l._entites.forEach(surveiller);
    surveiller("sun.sun");
    if (!changes.size) return false;
    for (const l of this.liaisons) if (l._entites.some((e) => changes.has(e))) this._majLiaison(l, st);
    if (changes.has("sun.sun")) {
      this._majSoleil(st["sun.sun"]);
      for (const l of this.liaisons) if (l.piece && (l.role === "piece" || l.role === "lampe")) this._majLiaison(l, st);
    }
    this._premier = false;
    return true;
  }

  _majLiaison(l, st) {
    if (l.role === "piece" || l.role === "lampe") {
      const e = etatLumiere(l, st);
      l.dernierEtat = e;
      if (l.piece) this._eclairerPiece(l, e);
      if (l.meuble) {
        const amp = couleurLueur(e.couleur, 0.75, 0.18);
        allumerAmpoules(l.meuble.objet, amp, e.niveau, this.mobilier, amp.clone().convertLinearToSRGB().toArray().map((v) => Math.round(v * 255)));
        estomper(l.meuble.objet, e.indispo);
      }
    } else if (l.role === "thermostat") {
      this._majThermostat(l, st);
    } else if (l.role === "lave_linge") {
      this._majLaveLinge(l, st);
    } else if (l.meuble) {
      const s = st[l.etat];
      estomper(l.meuble.objet, !s || s.state === "unavailable");
      if (l.role === "aspirateur") {
        // Robot rond garé devant la station : masqué pendant le nettoyage
        const robot = l.meuble.objet.getObjectByName("robot");
        if (robot) robot.visible = !(s && ["cleaning", "returning", "paused"].includes(s.state));
      }
    }
  }

  _eclairerPiece(l, e) {
    const p = l.piece;
    const mat = p.materiau;
    const doux = couleurLueur(e.couleur);
    const nuit = 1 - (this.jour ?? 1);
    if (mat.emissive) {
      if (e.on) mat.emissive.copy(doux).multiplyScalar((0.06 + 0.1 * e.niveau) * (1 + 1.4 * nuit));
      else mat.emissive.copy(NOIR);
    }
    if (mat.userData.couleurBase) {
      mat.color.copy(mat.userData.couleurBase);
      if (e.indispo) mat.color.lerp(GRIS, 0.65);
    }
    if (l.lueur) {
      l.lueur.color.copy(doux);
      l.lueur.intensity = e.on ? (2.5 + 7 * e.niveau) * (1 + 0.9 * nuit) : 0;
    }
    // Ampoules : teinte réelle, un peu adoucie (moins « néon »)
    const amp = couleurLueur(e.couleur, 0.75, 0.18);
    const rgbAmp = amp.clone().convertLinearToSRGB().toArray().map((v) => Math.round(v * 255));
    for (const o of this.lampesParPiece.get(p.id) || []) {
      allumerAmpoules(o, amp, e.niveau, this.mobilier, rgbAmp);
      estomper(o, e.indispo);
    }
  }

  _majThermostat(l, st) {
    const s = st[l.etat];
    const et = l.etiquette3d;
    if (!et) return;
    if (!s || s.state === "unavailable") {
      et.el.className = "etiquette thermo indispo";
      et.el.innerHTML = `<span class="t">–</span>`;
      return;
    }
    const a = s.attributes || {};
    const chauffe = s.state === "heat" && typeof a.current_temperature === "number" && typeof a.temperature === "number" && a.current_temperature < a.temperature;
    et.el.className = `etiquette thermo ${s.state === "off" ? "arret" : chauffe ? "chauffe" : "veille"}`;
    const consigne = s.state === "off" ? "arrêt" : `→ ${fmt(a.temperature, a.temperature % 1 ? 1 : 0)}°`;
    et.el.innerHTML = `<span class="t">${fmt(a.current_temperature)}°</span><span class="c">${consigne}</span>`;
    et.largeur = 0;
  }

  _majLaveLinge(l, st) {
    const s = st[l.etat];
    const etat = s ? s.state : "unavailable";
    const actifs = l.etats_actifs || ETATS_LAVE_LINGE_ACTIFS;
    const tourne = actifs.includes(etat);
    if (l.tambour) {
      if (tourne) this.animations.add(l.tambour);
      else this.animations.delete(l.tambour);
    }
    if (l.voyant) {
      const m = materiauPropre(l.voyant);
      const c = tourne ? 0x35d07f : etat === "pause" ? 0xffb020 : etat === "error" ? 0xff3b30 : etat === "scheduled" ? 0x4aa3ff : null;
      if (m.emissive) {
        m.emissive.set(c ?? 0x000000);
        m.emissiveIntensity = c ? 2.2 : 0;
      }
    }
    estomper(l.meuble.objet, etat === "unavailable");
    const et = l.etiquette3d;
    if (et) {
      const reste = l.etiquette ? st[l.etiquette] : null;
      const min = reste && !isNaN(parseFloat(reste.state)) ? `${Math.round(parseFloat(reste.state))} min` : "";
      const texte = { running: "En marche", pause: "En pause", ending: "Fin", error: "Erreur", scheduled: "Programmé" }[etat];
      et.masque = !texte;
      et.el.className = `etiquette lave-linge ${etat}`;
      et.el.innerHTML = texte ? `<span class="t">${texte}</span>${min && etat !== "error" ? `<span class="c">${min}</span>` : ""}` : "";
      et.largeur = 0;
    }
  }

  _majSoleil(s) {
    const a = s ? s.attributes || {} : {};
    const elev = typeof a.elevation === "number" ? a.elevation : s && s.state === "above_horizon" ? 30 : -20;
    const f = lisse(-7, 9, elev);
    this.jour = f;
    const { hemi, soleil, fond } = this.ambiance;
    // Nuit : clair de lune bleuté assez fort pour lire les volumes ; les pièces allumées ressortent en chaud.
    hemi.intensity = 0.62 + 0.98 * f;
    hemi.color.setHSL(0.6 - 0.02 * f, 0.45 - 0.1 * f, 0.5 + 0.35 * f);
    hemi.groundColor.setHSL(0.08 + 0.55 * (1 - f) * 0.2, 0.2, 0.22 + 0.2 * f);
    soleil.intensity = 0.4 + 1.4 * f;
    soleil.color.setHSL(f > 0.5 ? 0.1 : 0.61, f > 0.5 ? 0.45 - 0.3 * Math.min(1, elev / 30) : 0.4, f > 0.5 ? 0.8 : 0.72);
    // Direction fixe (avant-gauche de la vue par défaut) : les faces visibles restent éclairées ; seules
    // l'intensité et la teinte suivent le soleil réel.
    soleil.position.set(-9, 13, 6);
    fond(f);
  }

  /** Texte de l'infobulle d'une pièce ou d'un meuble. */
  descriptif(pieceId, meubleIndex, hass) {
    const st = (hass && hass.states) || {};
    const lignes = [];
    const lm = meubleIndex !== undefined ? this.parMeuble.get(meubleIndex) : undefined;
    if (lm && lm.role === "lave_linge") {
      const s = st[lm.etat];
      const n = { ready: "Prêt", running: "En marche", pause: "En pause", scheduled: "Programmé", error: "Erreur", ending: "Fin de cycle", test: "Test" };
      const reste = lm.etiquette && st[lm.etiquette];
      lignes.push(s ? n[s.state] || s.state : "Indisponible");
      if (s && s.state === "running" && reste) lignes.push(`${reste.state} min restantes`);
      return { titre: "Lave-linge", lignes };
    }
    const l = (lm && (lm.role === "lampe" || lm.role === "piece") && lm) || (pieceId !== undefined ? this.parPiece.get(pieceId) : undefined);
    if (l) {
      const e = etatLumiere(l, st);
      if (e.indispo) lignes.push("Indisponible");
      else if (e.on) lignes.push(e.luminosite > 0 && l.lumiere ? `Allumée · ${Math.round(e.luminosite * 100)} %` : "Allumée");
      else lignes.push("Éteinte");
    }
    const t = pieceId !== undefined ? this.thermoParPiece.get(pieceId) : undefined;
    let thermostat = null;
    if (t && st[t.etat]) {
      const s = st[t.etat];
      const a = s.attributes || {};
      const texte = `Chauffage ${fmt(a.current_temperature)}°${s.state === "off" ? " · arrêt" : ` → ${fmt(a.temperature, a.temperature % 1 ? 1 : 0)}°`}`;
      thermostat = { action: t.tap && t.tap.action === "more-info" ? t.tap : { action: "more-info", entity: t.etat }, texte };
    }
    return { lignes, thermostat };
  }

  liberer() {
    for (const e of this.etiquettes) e.el.remove();
    this.etiquettes = [];
    this.animations.clear();
  }
}
