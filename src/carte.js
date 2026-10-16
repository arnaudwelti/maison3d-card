// Carte Lovelace « custom:maison3d-card » : HTMLElement natif (pas de Lit), shadow DOM, three.js regroupé.
// Cycle de vie : rendu à la demande (aucune image au repos), pause hors écran (IntersectionObserver,
// visibilitychange), ResizeObserver, libération complète des ressources dans disconnectedCallback.
import * as THREE from "three";
import * as Mobilier from "@mobilier";
import { validerConfig, chargerDonnees, fusionnerLiaisons, normaliserLiaison } from "./config.js";
import { construireScene } from "./scene.js";
import { Controles } from "./controles.js";
import { Interactions, executerAction } from "./interactions.js";
import { GestionEtats, etatLumiere } from "./etats.js";
import { optimiserScene, pieceSousPoint } from "./fusion.js";

const VERSION = "0.2.0";
const MOBILIER = { ...Mobilier };

const STYLE = `
:host{display:block}
ha-card{display:block;position:relative;overflow:hidden;border-radius:var(--ha-card-border-radius,12px);
  background:var(--ha-card-background,var(--card-background-color,#fff));
  font-family:var(--ha-font-family-body,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif)}
.scene{position:relative;width:100%;height:420px;
  background:linear-gradient(180deg,var(--ciel-haut,#cddfed) 0%,var(--ciel-bas,#eef0ea) 100%);
  touch-action:none;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}
canvas{display:block;width:100%;height:100%;touch-action:none;outline:none}
.overlay,.ui{position:absolute;inset:0;pointer-events:none;overflow:hidden}
button{font:inherit;-webkit-tap-highlight-color:transparent;cursor:pointer}
.etiquette{position:absolute;left:0;top:0;pointer-events:none;display:flex;align-items:baseline;gap:5px;white-space:nowrap;
  padding:5px 9px;border:0;border-radius:999px;background:rgba(255,255,255,.9);color:#23262b;
  font-size:12.5px;font-weight:650;line-height:1;box-shadow:0 1px 5px rgba(0,0,0,.2);will-change:transform}
.etiquette .c{font-weight:500;font-size:11px;opacity:.68}
.etiquette.chauffe .t{color:#d9480f}
.etiquette.chauffe::before{content:"";width:6px;height:6px;border-radius:50%;background:#f76707;align-self:center}
.etiquette.arret{background:rgba(255,255,255,.72)}
.etiquette.lave-linge{background:rgba(32,40,52,.88);color:#fff}
.etiquette.lave-linge.running::before{content:"";width:7px;height:7px;border-radius:50%;background:#35d07f;align-self:center}
.etiquette.lave-linge:empty{display:none}
.niveaux{position:absolute;left:50%;bottom:12px;transform:translateX(-50%);display:flex;gap:2px;padding:4px;pointer-events:auto;
  border-radius:16px;background:rgba(255,255,255,.84);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);
  box-shadow:0 2px 12px rgba(0,0,0,.16)}
.niveaux button{min-width:64px;height:44px;padding:0 12px;border:0;border-radius:12px;background:transparent;color:#2b2f36;
  font-size:15px;font-weight:600;letter-spacing:.01em;transition:background .15s,color .15s}
.niveaux button.actif{background:var(--primary-color,#03a9f4);color:var(--text-primary-color,#fff)}
.recentrer{position:absolute;right:12px;top:12px;width:44px;height:44px;padding:10px;border:0;border-radius:50%;pointer-events:auto;
  background:rgba(255,255,255,.84);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);color:#2b2f36;box-shadow:0 2px 10px rgba(0,0,0,.16)}
.recentrer svg{width:24px;height:24px;display:block}
.infobulle{position:absolute;left:0;top:0;min-width:140px;max-width:230px;padding:8px 12px;border-radius:12px;pointer-events:none;
  background:rgba(28,31,36,.9);color:#fff;font-size:13px;line-height:1.35;box-shadow:0 4px 16px rgba(0,0,0,.25);
  opacity:0;transform:translate(-50%,calc(-100% - 14px)) scale(.96);transition:opacity .15s,transform .15s}
.infobulle.visible{opacity:1;transform:translate(-50%,calc(-100% - 14px)) scale(1)}
.infobulle b{display:block;font-size:14px;margin-bottom:1px}
.infobulle .indice{color:#ffd59a}
.infobulle .lien{pointer-events:auto;display:flex;align-items:center;justify-content:space-between;gap:8px;width:100%;margin-top:6px;
  min-height:36px;padding:6px 10px;border:0;border-radius:9px;background:rgba(255,255,255,.14);color:#fff;font-size:13px;text-align:left}
.infobulle:not(.visible) .lien{pointer-events:none}
.message{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;padding:24px;text-align:center;
  color:var(--secondary-text-color,#555);font-size:14px}
.message.erreur{color:var(--error-color,#db4437)}
@media (max-width:360px){.niveaux button{min-width:56px;padding:0 9px;font-size:14px}}
`;

class Maison3dCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `<style>${STYLE}</style><ha-card><div class="scene"><div class="message">Chargement de la maison…</div></div></ha-card>`;
    this._sceneEl = this.shadowRoot.querySelector(".scene");
    this._images = 0;
    this._actif = false;
    this._jeton = 0;
  }

  // ---------------------------------------------------------------- API Lovelace
  setConfig(config) {
    const c = validerConfig(config); // lève une erreur claire en français, affichée par HA
    const avant = this._config;
    this._config = c;
    if (avant && this._pret && JSON.stringify(avant) !== JSON.stringify(c)) {
      this._liberer();
      this._initialiserSiPossible();
    }
  }

  set hass(hass) {
    this._hass = hass;
    if (this._pret) {
      if (this._etats.appliquer(hass)) {
        this._rafraichirInfobulle();
        this._demanderRendu();
      }
    } else this._initialiserSiPossible();
  }

  get hass() {
    return this._hass;
  }

  getCardSize() {
    const h = this._config && this._config.hauteurCss && parseInt(this._config.hauteurCss, 10);
    return h && this._config.hauteurCss.endsWith("px") ? Math.ceil(h / 50) : 10;
  }

  getGridOptions() {
    return { columns: "full", rows: "auto", min_columns: 6, min_rows: 6 };
  }

  static getStubConfig() {
    return { niveau_defaut: "tout", vue: "iso", maquette: true };
  }

  // ---------------------------------------------------------------- Cycle de vie
  connectedCallback() {
    this._connecte = true;
    clearTimeout(this._liberationDifferee);
    this._observer();
    this._initialiserSiPossible();
    this._majActivite();
  }

  disconnectedCallback() {
    this._connecte = false;
    this._majActivite();
    // Libération complète (contexte WebGL, géométries, matériaux, textures, écouteurs). Différée d'un tour
    // pour ne pas tout reconstruire quand Lovelace déplace simplement la carte dans le DOM.
    clearTimeout(this._liberationDifferee);
    this._liberationDifferee = setTimeout(() => {
      if (!this._connecte) {
        this._liberer();
        this._arreterObservation();
      }
    }, 0);
  }

  _observer() {
    if (this._ro) return;
    this._ro = new ResizeObserver(() => this._redimensionner());
    this._ro.observe(this);
    this._ro.observe(this._sceneEl);
    this._io = new IntersectionObserver((e) => {
      this._enVue = e[e.length - 1].isIntersecting;
      this._majActivite();
    });
    this._io.observe(this);
    this._visib = () => this._majActivite();
    document.addEventListener("visibilitychange", this._visib);
  }

  _arreterObservation() {
    this._ro?.disconnect();
    this._io?.disconnect();
    if (this._visib) document.removeEventListener("visibilitychange", this._visib);
    this._ro = this._io = this._visib = null;
  }

  _majActivite() {
    const actif = !!this._connecte && this._enVue !== false && document.visibilityState !== "hidden";
    if (actif === this._actif) return;
    this._actif = actif;
    if (actif) this._demanderRendu();
    else if (this._raf) {
      cancelAnimationFrame(this._raf);
      this._raf = 0;
    }
  }

  async _initialiserSiPossible() {
    if (this._pret || this._enInit || !this._config || !this._hass || !this._connecte) return;
    this._enInit = true;
    const jeton = ++this._jeton;
    try {
      const donnees = await chargerDonnees(this._config);
      if (jeton !== this._jeton || !this._connecte) return;
      this._construire(donnees);
    } catch (e) {
      console.error(e);
      this._afficherMessage(e.message || String(e), true);
    } finally {
      if (jeton === this._jeton) this._enInit = false;
    }
  }

  _afficherMessage(texte, erreur = false) {
    let m = this._sceneEl.querySelector(".message");
    if (!m) {
      m = document.createElement("div");
      this._sceneEl.appendChild(m);
    }
    m.className = `message${erreur ? " erreur" : ""}`;
    m.textContent = texte;
  }

  _construire({ plan, amenagement }) {
    const cfg = this._config;
    this._majHauteur();
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: "default", stencil: false });
    } catch (e) {
      throw new Error("maison3d-card : WebGL est indisponible sur cet appareil.");
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, cfg.pixel_ratio_max));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.NeutralToneMapping;
    renderer.toneMappingExposure = 1.0;
    renderer.shadowMap.enabled = false;
    this._renderer = renderer;
    this._sceneEl.querySelector(".message")?.remove();
    this._sceneEl.appendChild(renderer.domElement);
    const overlay = document.createElement("div");
    overlay.className = "overlay";
    const ui = document.createElement("div");
    ui.className = "ui";
    const bulle = document.createElement("div");
    bulle.className = "infobulle";
    bulle.setAttribute("role", "status");
    ui.appendChild(bulle);
    this._sceneEl.append(overlay, ui);
    this._overlay = overlay;
    this._ui = ui;
    this._bulle = bulle;

    // Scène
    const scene3 = new THREE.Scene();
    this._scene3 = scene3;
    const hemi = new THREE.HemisphereLight(0xdde8ff, 0x6b5e4e, 1.2);
    const soleil = new THREE.DirectionalLight(0xfff1dc, 1.3);
    soleil.position.set(-9, 13, 6);
    scene3.add(hemi, soleil, soleil.target);
    const donnees = construireScene(plan, amenagement, { maquette: cfg.maquette, hauteurCoupe: cfg.hauteur_coupe, mobilier: MOBILIER });
    this._donnees = donnees;
    scene3.add(donnees.racine);
    for (const a of donnees.avertissements) console.warn(`maison3d-card : ${a}`);

    const w = this._sceneEl.clientWidth || 360;
    const h = this._sceneEl.clientHeight || 420;
    renderer.setSize(w, h, false);
    this._camera = new THREE.PerspectiveCamera(38, w / h, 0.1, 200);

    const liaisons = fusionnerLiaisons(amenagement.liaisons, cfg.liaisons).map(normaliserLiaison);
    this._etats = new GestionEtats({
      scene: donnees,
      liaisons,
      config: cfg,
      overlay,
      ambiance: { hemi, soleil, fond: (f) => this._fond(f) },
      mobilier: MOBILIER,
    });
    for (const e of this._etats.etiquettes) {
      e.niveau = e.liaison.piece?.niveau || e.liaison.meuble?.niveau;
    }
    // Fusion de la géométrie statique (après la liaison des états : on sait quels meubles sont pilotés)
    if (cfg.fusion !== false) {
      const et = this._etats;
      this._fusion = optimiserScene(donnees, (m) => et.parMeuble.has(m.index), (p) => et.parPiece.has(p.id) || et.thermoParPiece.has(p.id));
      donnees.pieceSousPoint = (niveau, p) => pieceSousPoint(donnees.pieces, niveau, p);
    }
    this._controles = new Controles({ camera: this._camera, dom: renderer.domElement, overlay: ui, scene: donnees, config: cfg, demanderRendu: () => this._demanderRendu() });
    this._interactions = new Interactions({
      dom: renderer.domElement,
      camera: this._camera,
      scene: donnees,
      quandToucher: (c, long, p) => this._quandToucher(c, long, p),
    });
    this._etats.appliquer(this._hass);
    this._pulses = [];
    this._pret = true;
    this._demanderRendu();
    requestAnimationFrame(() =>
      requestAnimationFrame(() => this.dispatchEvent(new CustomEvent("maison3d-pret", { bubbles: true, composed: true, detail: { version: VERSION } })))
    );
  }

  _liberer() {
    this._jeton++;
    this._enInit = false;
    if (this._raf) cancelAnimationFrame(this._raf);
    this._raf = 0;
    clearTimeout(this._minuterieBulle);
    if (!this._pret) return;
    this._pret = false;
    this._interactions?.liberer();
    this._controles?.liberer();
    this._etats?.liberer();
    for (const l of this._etats?.lueurs || []) l.dispose();
    if (this._halo) {
      this._halo.removeFromParent();
      this._halo.material.dispose();
      this._halo = null;
    }
    this._donnees?.liberer();
    this._scene3?.clear();
    if (this._renderer) {
      this._renderer.dispose();
      this._renderer.forceContextLoss();
      this._renderer.domElement.remove();
    }
    this._overlay?.remove();
    this._ui?.remove();
    this._renderer = this._scene3 = this._donnees = this._etats = this._controles = this._interactions = this._camera = null;
    this._overlay = this._ui = this._bulle = null;
    this._afficherMessage("Chargement de la maison…");
  }

  // ---------------------------------------------------------------- Taille
  _majHauteur() {
    const cfg = this._config;
    if (!cfg) return;
    if (cfg.hauteurCss) {
      this._sceneEl.style.height = cfg.hauteurCss;
      return;
    }
    const w = this.clientWidth || this._sceneEl.clientWidth || 390;
    const vh = window.innerHeight || 800;
    const souhait = w < 700 ? Math.max(w * 1.6, vh - 112) : w * 0.62;
    const max = Math.max(340, vh - (w < 700 ? 100 : 120));
    this._sceneEl.style.height = `${Math.round(Math.max(320, Math.min(souhait, max)))}px`;
  }

  _redimensionner() {
    this._majHauteur();
    if (!this._renderer) return;
    const w = this._sceneEl.clientWidth;
    const h = this._sceneEl.clientHeight;
    if (!w || !h || (w === this._w && h === this._h)) return;
    this._w = w;
    this._h = h;
    this._renderer.setSize(w, h, false);
    this._camera.aspect = w / h;
    this._camera.updateProjectionMatrix();
    this._controles.recadrer();
    this._demanderRendu();
  }

  _fond(f) {
    const ciel = (a, b, t) => new THREE.Color(a).lerp(new THREE.Color(b), t).getStyle();
    this._sceneEl.style.setProperty("--ciel-haut", ciel(0x0f1830, 0xc9ddec, f));
    this._sceneEl.style.setProperty("--ciel-bas", ciel(0x283350, 0xf1f0e9, f));
  }

  // ---------------------------------------------------------------- Rendu à la demande
  _demanderRendu() {
    if (this._raf || !this._actif || !this._pret) return;
    this._raf = requestAnimationFrame((t) => this._image(t));
  }

  _image(t) {
    this._raf = 0;
    if (!this._pret) return;
    const dt = this._tPrec ? Math.min((t - this._tPrec) / 1000, 0.1) : 1 / 60;
    let continuer = this._controles.maj();
    for (const o of this._etats.animations) {
      if (!visibleDans(o)) continue; // niveau masqué : pas d'animation, pas de rendu continu
      o.rotation.z -= dt * 7;
      continuer = true;
    }
    if (this._pulses.length) {
      const now = performance.now();
      this._pulses = this._pulses.filter((p) => p(now));
      continuer = true;
    }
    if (this._animationTest) continuer = this._animationTest(t) || continuer;
    this._renderer.render(this._scene3, this._camera);
    this._positionnerEtiquettes();
    this._images++;
    if (continuer) {
      this._tPrec = t;
      this._demanderRendu();
    } else this._tPrec = 0;
  }

  _positionnerEtiquettes() {
    const w = this._w || this._sceneEl.clientWidth;
    const h = this._h || this._sceneEl.clientHeight;
    const mode = this._controles.mode;
    const niveaux = [...this._donnees.niveaux.values()];
    const haut = niveaux[niveaux.length - 1];
    // Dalles des niveaux supérieurs visibles : elles masquent les étiquettes du dessous (vue Éclaté)
    const dalles = niveaux.filter((n) => n.dalle && n.groupe.visible).map((n) => n.dalle);
    // Le filet (trou dans la dalle) masque aussi ce qui est dessous : sa cible de toucher invisible sert d'écran
    for (const p of this._donnees.pieces.values()) if (p.special === "filet" && visibleDans(p.mesh)) dalles.push(p.mesh);
    const v = new THREE.Vector3();
    const r = (this._rayEtiq ||= new THREE.Raycaster());
    for (const e of this._etats.etiquettes) {
      let visible = !e.masque && visibleDans(e.parent);
      // En vue « Tout », seul le niveau du haut est lisible (le rez est sous la dalle)
      if (visible && mode === "tout" && e.niveau && e.niveau !== haut.id) visible = false;
      if (visible) {
        v.copy(e.position);
        e.parent.localToWorld(v);
        if (dalles.length && e.niveau !== haut.id) {
          const dist = v.distanceTo(this._camera.position);
          r.set(this._camera.position, v.clone().sub(this._camera.position).normalize());
          r.far = dist - 0.05;
          if (r.intersectObjects(dalles, false).length) visible = false;
        }
      }
      if (visible) {
        v.project(this._camera);
        visible = v.z < 1 && Math.abs(v.x) < 1.05 && Math.abs(v.y) < 1.05;
      }
      if (visible !== e.visible) {
        e.el.style.display = visible ? "" : "none";
        e.visible = visible;
      }
      if (visible) {
        const demi = (e.largeur ||= e.el.offsetWidth || 90) / 2 + 6;
        e.hauteur ||= e.el.offsetHeight || 24;
        e.x = Math.max(demi, Math.min(w - demi, ((v.x + 1) / 2) * w));
        e.y = ((1 - v.y) / 2) * h;
      }
    }
    // Anti-chevauchement : de haut en bas, chaque étiquette qui touche une étiquette déjà placée est
    // poussée vers le haut (ou vers le bas si elle sortirait du cadre).
    const places = [];
    const vis = this._etats.etiquettes.filter((e) => e.visible).sort((a, b) => a.y - b.y);
    for (const e of vis) {
      const l = e.largeur + 6;
      const hh = e.hauteur + 4;
      let y = e.y;
      for (let passe = 0; passe < 6; passe++) {
        const gene = places.find((q) => Math.abs(q.x - e.x) < (q.l + l) / 2 && Math.abs(q.y - y) < (q.h + hh) / 2);
        if (!gene) break;
        const enHaut = gene.y - (gene.h + hh) / 2;
        y = enHaut - hh > 4 ? enHaut : gene.y + (gene.h + hh) / 2;
      }
      places.push({ x: e.x, y, l, h: hh });
      e.el.style.transform = `translate(${e.x.toFixed(1)}px,${y.toFixed(1)}px) translate(-50%,-100%)`;
    }
  }

  // ---------------------------------------------------------------- Toucher
  _resoudre(cible) {
    if (!cible) return null;
    const et = this._etats;
    let pieceId = cible.piece;
    let liaison = null;
    let meuble = null;
    if (cible.meubleIndex !== undefined) {
      meuble = this._donnees.meubles.find((m) => m.index === cible.meubleIndex);
      pieceId = meuble?.piece;
      liaison = et.parMeuble.get(cible.meubleIndex) || null;
    }
    if (!liaison && pieceId !== undefined) liaison = et.parPiece.get(pieceId) || et.thermoParPiece.get(pieceId) || null;
    const piece = pieceId !== undefined ? this._donnees.pieces.get(pieceId) : null;
    return { liaison, piece, meuble, meubleLie: !!(meuble && et.parMeuble.get(cible.meubleIndex)) };
  }

  _quandToucher(cible, appuiLong, point) {
    const r = this._resoudre(cible);
    if (!r || (!r.piece && !r.meuble)) {
      this._masquerInfobulle();
      return;
    }
    const action = r.liaison ? (appuiLong ? r.liaison.hold : r.liaison.tap) : null;
    // Retour visuel immédiat
    if (r.meubleLie) this._pulserMeuble(r.meuble.objet);
    else if (r.piece) this._pulserPiece(r.piece);
    // Infobulle
    let indice = "";
    if (action && action.action === "toggle" && r.liaison && (r.liaison.role === "piece" || r.liaison.role === "lampe")) {
      const e = etatLumiere(r.liaison, this._hass.states);
      indice = e.on ? "Extinction…" : "Allumage…";
    } else if (action && action.action === "navigate") indice = "Ouverture du panneau…";
    this._afficherInfobulle(r, point, indice);
    this._journal(executerAction(action, { hass: this._hass, element: this, config: this._config }), appuiLong);
  }

  _journal(texte, appuiLong = false) {
    if (!texte) return;
    this.dispatchEvent(new CustomEvent("maison3d-action", { detail: { action: texte, appui_long: appuiLong }, bubbles: true, composed: true }));
  }

  _pulserPiece(p) {
    if (!this._halo) {
      this._halo = new THREE.Mesh(
        p.mesh.geometry,
        new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false })
      );
      this._halo.userData.ignorer = true;
      this._halo.renderOrder = 3;
    }
    const halo = this._halo;
    halo.geometry = p.mesh.geometry;
    (p.parentSol || p.mesh.parent).add(halo);
    halo.position.set(0, 0.004, 0);
    const t0 = performance.now();
    this._pulses = this._pulses.filter((f) => !f.halo);
    const f = (now) => {
      const k = (now - t0) / 520;
      halo.material.opacity = k < 1 ? 0.42 * Math.sin(Math.PI * Math.min(1, k * 1.6)) * (1 - k * 0.5) : 0;
      if (k >= 1) halo.removeFromParent();
      return k < 1;
    };
    f.halo = true;
    this._pulses.push(f);
    this._demanderRendu();
  }

  _pulserMeuble(o) {
    const t0 = performance.now();
    const base = o.userData.echelleBase || (o.userData.echelleBase = o.scale.clone());
    this._pulses.push((now) => {
      const k = Math.min(1, (now - t0) / 380);
      o.scale.copy(base).multiplyScalar(1 + 0.09 * Math.sin(Math.PI * k));
      return k < 1;
    });
    this._demanderRendu();
  }

  _remplirInfobulle(r, indice) {
    const b = this._bulle;
    const d = this._etats.descriptif(r.piece?.id, r.meubleLie ? r.meuble.index : undefined, this._hass);
    b.textContent = "";
    const t = document.createElement("b");
    t.textContent = d.titre || r.piece?.nom || r.meuble?.type || "";
    b.appendChild(t);
    for (const l of d.lignes) {
      const s = document.createElement("div");
      s.textContent = l;
      b.appendChild(s);
    }
    if (indice) {
      const s = document.createElement("div");
      s.className = "indice";
      s.textContent = indice;
      b.appendChild(s);
    }
    if (d.thermostat) {
      const bt = document.createElement("button");
      bt.type = "button";
      bt.className = "lien";
      bt.innerHTML = `<span></span><span aria-hidden="true">›</span>`;
      bt.firstChild.textContent = d.thermostat.texte;
      bt.addEventListener("click", (ev) => {
        ev.stopPropagation();
        this._journal(executerAction(d.thermostat.action, { hass: this._hass, element: this, config: this._config }));
        this._masquerInfobulle();
      });
      b.appendChild(bt);
    }
    return d;
  }

  _afficherInfobulle(r, point, indice) {
    if (!this._bulle) return;
    const d = this._remplirInfobulle(r, indice);
    const rect = this._sceneEl.getBoundingClientRect();
    const x = Math.max(115, Math.min(rect.width - 115, point.x - rect.left));
    const y = Math.max(d.thermostat ? 120 : 80, point.y - rect.top);
    this._bulle.style.left = `${x}px`;
    this._bulle.style.top = `${y}px`;
    this._bulle.classList.add("visible");
    this._bulleCible = r;
    this._programmerMasquage(d.thermostat ? 4500 : 2800);
  }

  _programmerMasquage(ms) {
    clearTimeout(this._minuterieBulle);
    this._minuterieBulle = setTimeout(() => this._masquerInfobulle(), ms);
  }

  _rafraichirInfobulle() {
    const r = this._bulleCible;
    if (!r || !this._bulle?.classList.contains("visible")) return;
    this._remplirInfobulle(r, "");
  }

  _masquerInfobulle() {
    this._bulle?.classList.remove("visible");
    this._bulleCible = null;
  }

  // ---------------------------------------------------------------- Aides pour le banc de test
  definirNiveau(mode) {
    this._controles?.definirNiveau(mode);
  }

  _ecran(v3) {
    const v = v3.clone().project(this._camera);
    const r = this._renderer.domElement.getBoundingClientRect();
    return { x: r.left + ((v.x + 1) / 2) * r.width, y: r.top + ((1 - v.y) / 2) * r.height };
  }

  ecranDePiece(id) {
    const p = this._donnees?.pieces.get(id);
    if (!p) return null;
    return this._ecran((p.parentSol || p.mesh.parent).localToWorld(p.centre.clone().add(new THREE.Vector3(0, 0.02, 0))));
  }

  ecranDeMeuble(index) {
    const m = this._donnees?.meubles.find((x) => x.index === index);
    if (!m) return null;
    const c = new THREE.Box3().setFromObject(m.objet).getCenter(new THREE.Vector3());
    return this._ecran(c);
  }

  /** Cadre la caméra sur une pièce ou un meuble (aide de test et de démonstration). */
  cadrerSur({ piece, meuble }, distance = 4) {
    let c;
    if (meuble !== undefined) {
      const m = this._donnees.meubles.find((x) => x.index === meuble);
      c = m && new THREE.Box3().setFromObject(m.objet).getCenter(new THREE.Vector3());
    } else {
      const p = this._donnees.pieces.get(piece);
      c = p && (p.parentSol || p.mesh.parent).localToWorld(p.centre.clone());
    }
    if (!c) return false;
    const ctl = this._controles.orbite;
    const dir = this._camera.position.clone().sub(ctl.target).normalize();
    ctl.target.copy(c);
    this._camera.position.copy(c).addScaledVector(dir, distance);
    ctl.update();
    this._demanderRendu();
    return true;
  }

  statistiques() {
    const i = this._renderer.info;
    const gl = this._renderer.getContext();
    let lumieres = 0;
    this._scene3.traverse((o) => o.isLight && lumieres++);
    return {
      version: VERSION,
      images: this._images,
      appels_dessin: i.render.calls,
      triangles: i.render.triangles,
      geometries: i.memory.geometries,
      textures: i.memory.textures,
      programmes: i.programs ? i.programs.length : null,
      lumieres,
      pixel_ratio: this._renderer.getPixelRatio(),
      gl: gl.getParameter(gl.VERSION),
      meubles_remplacement: this._donnees.remplacements,
      maillages_avant_fusion: this._fusion?.avant ?? null,
      maillages_apres_fusion: this._fusion?.apres ?? null,
      mobilier_present: typeof MOBILIER.creerMeuble === "function",
    };
  }

  /** Mesure du FPS pendant une orbite simulée (rotation continue de la caméra autour de la cible). */
  mesurerFps(ms = 3000) {
    return new Promise((fin) => {
      const ctl = this._controles.orbite;
      let n = 0;
      let t0 = 0;
      this._animationTest = (t) => {
        if (!t0) t0 = t;
        const off = this._camera.position.clone().sub(ctl.target);
        off.applyAxisAngle(new THREE.Vector3(0, 1, 0), 0.012);
        this._camera.position.copy(ctl.target).add(off);
        this._camera.lookAt(ctl.target);
        n++;
        if (t - t0 >= ms) {
          this._animationTest = null;
          fin({ images: n, duree_ms: Math.round(t - t0), fps: +((n * 1000) / (t - t0)).toFixed(1) });
          return false;
        }
        return true;
      };
      this._demanderRendu();
    });
  }
}

function visibleDans(o) {
  for (let x = o; x; x = x.parent) if (!x.visible) return false;
  return true;
}

if (!customElements.get("maison3d-card")) customElements.define("maison3d-card", Maison3dCard);
window.customCards = window.customCards || [];
if (!window.customCards.some((c) => c.type === "maison3d-card"))
  window.customCards.push({ type: "maison3d-card", name: "Maison 3D", description: "Vue 3D interactive de la maison (three.js)", preview: false });
console.info(`%c maison3d-card %c ${VERSION} `, "background:#03a9f4;color:#fff;border-radius:3px 0 0 3px", "background:#333;color:#fff;border-radius:0 3px 3px 0");
