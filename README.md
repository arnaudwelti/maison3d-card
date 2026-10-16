# maison3d-card

Carte Lovelace 3D (three.js) pour Home Assistant : maison en maquette sur plusieurs niveaux, pièces qui s'allument dans leur vraie couleur, toucher pour allumer ou éteindre, appui long pour régler l'intensité et la couleur, animations (lave-linge), thermostats, ambiance jour et nuit.

Ce dépôt ne contient que le **moteur** et la **bibliothèque de meubles génériques**. Le plan de la maison et l'aménagement (meubles et liaisons avec les entités) sont fournis séparément par `plan_url` et `amenagement_url`. Ils sont à déposer dans `/config/www/`.

## Installation
Ressource Lovelace, de type module :
`https://cdn.jsdelivr.net/gh/<compte>/maison3d-card@<version>/dist/maison3d-card.js`

```yaml
type: custom:maison3d-card
plan_url: /local/maison3d/plan.json
amenagement_url: /local/maison3d/amenagement.json
niveau_defaut: tout
```

Licence MIT. three.js (MIT) est intégré.
