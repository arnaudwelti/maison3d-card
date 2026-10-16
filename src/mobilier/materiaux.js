// Matériaux et textures procédurales PARTAGÉS de la bibliothèque de mobilier.
// Règle : un matériau est créé une seule fois par (type, couleur) et réutilisé par tous les meubles.
// Ne jamais appeler dispose() sur un matériau marqué userData.partage = true.
// Les seuls matériaux non partagés sont ceux des parties pilotables (ampoule, voyant, écran) :
// ils portent userData.propre = true et sont clonés pour chaque instance.
import * as THREE from "three";

// Palette douce et chaleureuse (sRGB).
export const COULEURS = {
  bois_clair: "#dcbb92",
  bois_miel: "#c79462",
  bois_noyer: "#8d603e",
  bois_blanchi: "#ebe0cf",
  blanc: "#f2efe9",
  blanc_pur: "#fafaf8",
  creme: "#efe5d3",
  gris_clair: "#d3d1cc",
  gris: "#9e9c97",
  gris_chaud: "#b8b0a5",
  anthracite: "#45484c",
  noir: "#242527",
  beige: "#d5c5aa",
  lin: "#e8dfcf",
  sauge: "#9fb18e",
  sauge_fonce: "#6e8562",
  terracotta: "#c8714f",
  moutarde: "#e2b14b",
  bleu_ciel: "#8fc4e4",
  bleu_canard: "#2f6f7a",
  marine: "#2f4565",
  rose: "#f2abb8",
  menthe: "#a5dcc6",
  corail: "#f08b6b",
  lavande: "#b8a7dd",
  feuillage: "#5e8f4b",
  feuillage_fonce: "#3e6c3c",
  feuillage_clair: "#86b562",
  terre_cuite: "#bb6741",
};

export const couleur = (c) => (typeof c === "string" && COULEURS[c] ? COULEURS[c] : c);

// ---------------------------------------------------------------------------
// Textures procédurales (CanvasTexture), une seule instance par motif.
// Elles sont quasi blanches : la couleur vient du matériau (teinte multiplicative),
// ce qui permet de partager UNE texture bois et UNE texture tissu pour toutes les teintes.
// Les UV des géométries sont « métriques » (1 unité UV = 1 m, voir outils.js),
// donc repeat = nombre de motifs par mètre.
// ---------------------------------------------------------------------------
const cacheTex = new Map();
const aleatoire = (graine) => () => ((graine = (graine * 16807) % 2147483647) / 2147483647);

function canvas(l, h) {
  if (!globalThis.document && typeof OffscreenCanvas === "undefined") return null; // Node : pas de texture
  const c = globalThis.document ? document.createElement("canvas") : new OffscreenCanvas(l, h);
  c.width = l;
  c.height = h;
  return c;
}

function texture(cle, l, h, dessin, { repeat = 1, srgb = true } = {}) {
  let t = cacheTex.get(cle);
  if (t) return t;
  const c = canvas(l, h);
  if (!c) return null;
  dessin(c.getContext("2d"), l, h);
  t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(repeat, repeat);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 2;
  t.userData.partage = true;
  cacheTex.set(cle, t);
  return t;
}

// Veinage de bois (fil horizontal = le long de U).
export const texBois = () =>
  texture(
    "bois",
    256,
    256,
    (g, l, h) => {
      const r = aleatoire(7);
      g.fillStyle = "#f2f2f2";
      g.fillRect(0, 0, l, h);
      for (let i = 0; i < 90; i++) {
        const y0 = r() * h;
        const a = 1 + r() * 2.5;
        const f = 1 + Math.floor(r() * 2);
        const ph = r() * 6.28;
        g.strokeStyle = `rgba(${r() < 0.6 ? "120,90,60" : "255,255,255"},${0.03 + r() * 0.06})`;
        g.lineWidth = 0.5 + r() * 1.6;
        g.beginPath();
        for (let x = 0; x <= l; x += 8) {
          const y = y0 + Math.sin((x / l) * 6.283 * f + ph) * a;
          x === 0 ? g.moveTo(x, y) : g.lineTo(x, y);
        }
        g.stroke();
      }
    },
    { repeat: 2.5 }
  );

// Grain de tissu (tissage fin + bruit léger).
export const texTissu = () =>
  texture(
    "tissu",
    128,
    128,
    (g, l, h) => {
      const r = aleatoire(11);
      g.fillStyle = "#f0f0f0";
      g.fillRect(0, 0, l, h);
      for (let y = 0; y < h; y += 2) {
        g.fillStyle = `rgba(0,0,0,${0.03 + r() * 0.03})`;
        g.fillRect(0, y, l, 1);
      }
      for (let x = 0; x < l; x += 2) {
        g.fillStyle = `rgba(255,255,255,${0.03 + r() * 0.05})`;
        g.fillRect(x, 0, 1, h);
      }
      for (let i = 0; i < 900; i++) {
        g.fillStyle = `rgba(${r() < 0.5 ? "0,0,0" : "255,255,255"},${r() * 0.08})`;
        g.fillRect(r() * l, r() * h, 1 + r() * 2, 1);
      }
    },
    { repeat: 4 }
  );

// Carrelage carré 15 cm (4 carreaux par motif de 0,6 m).
export const texCarrelage = () =>
  texture(
    "carrelage",
    256,
    256,
    (g, l, h) => {
      const r = aleatoire(3);
      g.fillStyle = "#c9c6c0";
      g.fillRect(0, 0, l, h);
      const n = 4, p = l / n;
      for (let i = 0; i < n; i++)
        for (let j = 0; j < n; j++) {
          const v = 240 + Math.floor(r() * 12);
          g.fillStyle = `rgb(${v},${v},${v - 3})`;
          g.fillRect(i * p + 2, j * p + 2, p - 4, p - 4);
        }
    },
    { repeat: 1 / 0.6 }
  );

// Motifs colorés pour les chambres d'enfants (couettes, coussins). Une texture par combinaison.
export function texMotif(motif = "pois", fond = "#8fc4e4", trace = "#fafaf8") {
  fond = couleur(fond);
  trace = couleur(trace);
  return texture(
    `motif_${motif}_${fond}_${trace}`,
    128,
    128,
    (g, l, h) => {
      g.fillStyle = fond;
      g.fillRect(0, 0, l, h);
      g.fillStyle = trace;
      g.strokeStyle = trace;
      if (motif === "pois") {
        for (let i = 0; i < 4; i++)
          for (let j = 0; j < 4; j++) {
            g.beginPath();
            g.arc(i * 32 + (j % 2) * 16 + 8, j * 32 + 16, 5, 0, 6.283);
            g.fill();
          }
      } else if (motif === "etoiles") {
        const etoile = (cx, cy, R) => {
          g.beginPath();
          for (let k = 0; k < 10; k++) {
            const a = (k * Math.PI) / 5 - Math.PI / 2, rr = k % 2 ? R * 0.45 : R;
            g.lineTo(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr);
          }
          g.fill();
        };
        for (const [x, y, R] of [[20, 22, 10], [84, 14, 7], [60, 60, 12], [110, 70, 8], [24, 100, 8], [90, 110, 10]]) etoile(x, y, R);
      } else if (motif === "rayures") {
        for (let x = 0; x < l; x += 32) g.fillRect(x, 0, 14, h);
      } else if (motif === "carreaux") {
        g.globalAlpha = 0.55;
        for (let x = 0; x < l; x += 32) g.fillRect(x, 0, 12, h);
        for (let y = 0; y < h; y += 32) g.fillRect(0, y, l, 12);
        g.globalAlpha = 1;
      } else if (motif === "vagues") {
        g.lineWidth = 5;
        for (let y = 12; y < h; y += 32) {
          g.beginPath();
          for (let x = 0; x <= l; x += 4) g.lineTo(x, y + Math.sin((x / l) * 6.283 * 2) * 6);
          g.stroke();
        }
      }
    },
    { repeat: 3 }
  );
}

// Affiches et tableaux (une texture par variante). UV classiques 0..1 (pas métriques).
export function texAffiche(variante = "montagne") {
  return texture(
    `affiche_${variante}`,
    128,
    160,
    (g, l, h) => {
      const fond = (c) => { g.fillStyle = c; g.fillRect(0, 0, l, h); };
      const disque = (x, y, r, c) => { g.fillStyle = c; g.beginPath(); g.arc(x, y, r, 0, 6.283); g.fill(); };
      const poly = (pts, c) => { g.fillStyle = c; g.beginPath(); pts.forEach(([x, y]) => g.lineTo(x, y)); g.fill(); };
      switch (variante) {
        case "arc_en_ciel": {
          fond("#f7efe2");
          const cs = ["#e98a6c", "#f0b75a", "#9fc59a", "#86b8d8"];
          cs.forEach((c, i) => { g.strokeStyle = c; g.lineWidth = 11; g.beginPath(); g.arc(64, 112, 50 - i * 12, Math.PI, 0); g.stroke(); });
          disque(30, 40, 9, "#f2c14e");
          break;
        }
        case "fusee": {
          fond("#2f4565");
          for (let i = 0; i < 26; i++) disque((i * 53) % 128, (i * 37) % 160, 1.4, "#fdf3c4");
          poly([[64, 22], [80, 62], [80, 110], [48, 110], [48, 62]], "#f2efe9");
          disque(64, 70, 8, "#8fc4e4");
          poly([[48, 92], [34, 118], [48, 110]], "#e8735a");
          poly([[80, 92], [94, 118], [80, 110]], "#e8735a");
          poly([[54, 110], [64, 140], [74, 110]], "#f2b84b");
          break;
        }
        case "baleine": {
          fond("#dff0f3");
          g.fillStyle = "#86b8d8"; g.fillRect(0, 108, l, 52);
          g.beginPath(); g.ellipse(62, 86, 40, 24, 0, 0, 6.283); g.fillStyle = "#2f6f7a"; g.fill();
          poly([[98, 80], [120, 62], [116, 92]], "#2f6f7a");
          disque(42, 80, 3, "#fafaf8");
          g.strokeStyle = "#5fa3c4"; g.lineWidth = 3;
          g.beginPath(); g.moveTo(58, 60); g.quadraticCurveTo(52, 40, 44, 36); g.moveTo(58, 60); g.quadraticCurveTo(64, 40, 72, 36); g.stroke();
          break;
        }
        case "abstrait": {
          fond("#efe6d6");
          disque(44, 54, 30, "#c8714f");
          g.fillStyle = "#9fb18e"; g.fillRect(58, 70, 50, 70);
          disque(86, 40, 14, "#e2b14b");
          g.strokeStyle = "#45484c"; g.lineWidth = 3; g.beginPath(); g.moveTo(14, 120); g.quadraticCurveTo(50, 90, 70, 132); g.stroke();
          break;
        }
        case "feuille": {
          fond("#f4efe6");
          g.fillStyle = "#6e8562";
          g.beginPath(); g.ellipse(64, 80, 30, 58, 0.3, 0, 6.283); g.fill();
          g.strokeStyle = "#f4efe6"; g.lineWidth = 2.5;
          g.beginPath(); g.moveTo(46, 132); g.lineTo(82, 28); g.stroke();
          for (let k = 0; k < 6; k++) { g.beginPath(); g.moveTo(52 + k * 5.5, 115 - k * 16); g.lineTo(38 + k * 5, 100 - k * 15); g.moveTo(52 + k * 5.5, 115 - k * 16); g.lineTo(76 + k * 4, 112 - k * 17); g.stroke(); }
          break;
        }
        default: {
          // montagne au coucher de soleil
          const d = g.createLinearGradient(0, 0, 0, h);
          d.addColorStop(0, "#f6d9b8"); d.addColorStop(1, "#f3b99a");
          g.fillStyle = d; g.fillRect(0, 0, l, h);
          disque(84, 58, 18, "#f7f0e2");
          poly([[0, 130], [40, 66], [70, 110], [96, 78], [128, 124], [128, 160], [0, 160]], "#6e8562");
          poly([[0, 146], [30, 112], [64, 140], [100, 108], [128, 140], [128, 160], [0, 160]], "#3e6c3c");
        }
      }
    },
    { repeat: 1 }
  );
}

// Ombre de contact précalculée (dégradé radial), et halo lumineux des lampes.
export const texOmbre = () =>
  texture(
    "ombre",
    64,
    64,
    (g, l) => {
      const d = g.createRadialGradient(l / 2, l / 2, 0, l / 2, l / 2, l / 2);
      d.addColorStop(0, "rgba(0,0,0,0.55)");
      d.addColorStop(0.55, "rgba(0,0,0,0.32)");
      d.addColorStop(1, "rgba(0,0,0,0)");
      g.fillStyle = d;
      g.fillRect(0, 0, l, l);
    },
    { srgb: false }
  );

export const texHalo = () =>
  texture(
    "halo",
    64,
    64,
    (g, l) => {
      const d = g.createRadialGradient(l / 2, l / 2, 0, l / 2, l / 2, l / 2);
      d.addColorStop(0, "rgba(255,255,255,1)");
      d.addColorStop(0.25, "rgba(255,255,255,0.45)");
      d.addColorStop(1, "rgba(255,255,255,0)");
      g.fillStyle = d;
      g.fillRect(0, 0, l, l);
    },
    { srgb: false }
  );

// Filet ajouré : losanges de cordage sur fond transparent.
export const texFilet = (teinte = "#f1ebdd") =>
  texture(
    `filet_${teinte}`,
    64,
    64,
    (g, l) => {
      g.clearRect(0, 0, l, l);
      g.strokeStyle = teinte;
      g.lineWidth = 5;
      g.lineCap = "round";
      g.beginPath();
      g.moveTo(0, 0); g.lineTo(l, l);
      g.moveTo(l, 0); g.lineTo(0, l);
      g.stroke();
      // nœuds
      g.fillStyle = teinte;
      for (const [x, y] of [[0, 0], [l, 0], [0, l], [l, l], [l / 2, l / 2]]) { g.beginPath(); g.arc(x, y, 4.5, 0, 6.283); g.fill(); }
    },
    { repeat: 1 }
  );

// ---------------------------------------------------------------------------
// Matériaux partagés
// ---------------------------------------------------------------------------
const cacheMat = new Map();

function partage(cle, fabrique) {
  let m = cacheMat.get(cle);
  if (!m) {
    m = fabrique();
    m.name = cle;
    m.userData.partage = true;
    cacheMat.set(cle, m);
  }
  return m;
}

const std = (c, p = {}) => new THREE.MeshStandardMaterial({ color: new THREE.Color(couleur(c)), roughness: 0.8, metalness: 0, ...p });

export const matBois = (c = "bois_clair") => partage(`bois_${c}`, () => std(c, { map: texBois(), roughness: 0.68 }));
export const matTissu = (c = "beige") => partage(`tissu_${c}`, () => std(c, { map: texTissu(), roughness: 0.96 }));
export const matMat = (c = "blanc") => partage(`mat_${c}`, () => std(c, { roughness: 0.85 }));
export const matLaque = (c = "blanc") => partage(`laque_${c}`, () => std(c, { roughness: 0.4 }));
export const matMetal = (c = "#c9ccce") => partage(`metal_${c}`, () => std(c, { roughness: 0.35, metalness: 0.45 }));
export const matCeramique = (c = "blanc_pur") => partage(`ceramique_${c}`, () => std(c, { roughness: 0.22 }));
export const matCarrelage = (c = "#ffffff") => partage(`carrelage_${c}`, () => std(c, { map: texCarrelage(), roughness: 0.35 }));
export const matMotif = (motif, fond, trace) =>
  partage(`motif_${motif}_${couleur(fond)}_${couleur(trace)}`, () => std("#ffffff", { map: texMotif(motif, fond, trace), roughness: 0.95 }));
export const matAffiche = (v) => partage(`affiche_${v}`, () => std("#ffffff", { map: texAffiche(v), roughness: 0.7 }));
export const matFeuillage = (c = "feuillage") => partage(`feuille_${c}`, () => std(c, { roughness: 0.75, flatShading: true }));
export const matVerre = (c = "#d4e9ef", opacite = 0.28) =>
  partage(`verre_${c}_${opacite}`, () => std(c, { roughness: 0.05, transparent: true, opacity: opacite, depthWrite: false, side: THREE.DoubleSide }));
export const matEcranEteint = () => partage("ecran", () => std("#15171b", { roughness: 0.2 }));
export const matMiroir = () => partage("miroir", () => std("#cfdde2", { roughness: 0.08, metalness: 0.35 }));
export const matChrome = () => matMetal("#dfe3e6");
export const matOmbre = () =>
  partage("ombre", () => new THREE.MeshBasicMaterial({ map: texOmbre(), transparent: true, depthWrite: false, color: 0x000000, opacity: 1, toneMapped: false }));
export const matFilet = (teinte = "#f1ebdd") =>
  partage(`filet_${teinte}`, () =>
    new THREE.MeshStandardMaterial({ map: texFilet(teinte), transparent: true, alphaTest: 0.08, side: THREE.DoubleSide, roughness: 0.9, depthWrite: false })
  );

// Résout une option de couleur : nom de palette, hex, nombre ou matériau déjà construit.
export function resoudre(c, fabrique, defaut) {
  if (c && c.isMaterial) return c;
  return fabrique(c ?? defaut);
}

// Matériau émissif PROPRE à une instance (ampoule, voyant, écran) : éteint par défaut.
export function matEmissif(base = "#f6f0e2", { roughness = 0.5 } = {}) {
  const m = std(base, { roughness, emissive: new THREE.Color(0x000000), emissiveIntensity: 0 });
  m.userData.propre = true;
  m.userData.couleurBase = couleur(base);
  return m;
}

// Halo additif (Sprite) montré quand une lampe est allumée : ce n'est pas une lumière.
export function matHalo() {
  const m = new THREE.SpriteMaterial({ map: texHalo(), color: 0xffd9a0, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending });
  m.userData.propre = true;
  return m;
}

export function statsMateriaux() {
  return { materiaux: cacheMat.size, textures: cacheTex.size };
}
