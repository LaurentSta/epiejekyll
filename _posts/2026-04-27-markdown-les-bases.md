---
title: "Markdown : les bases"
date: 2026-04-27 09:00:00 +0200
categories: formation
groupe: astrolab
author: Bogdan Tiganescu
description: "Introduction aux bases de Markdown pour mettre en forme du texte."
---

Markdown est un langage simple qui permet de mettre en forme du texte facilement : titres, listes, liens, images, code, tableaux, etc.

## Paragraphes

Il suffit de taper du texte.

Pour aller à la ligne, ajoutez deux espaces en fin de ligne, ou laissez une ligne vide pour créer un nouveau paragraphe.

## Mise en forme du texte

- Texte en italique : `*italique*` ou `_italique_`
- Texte en gras : `**gras**`
- Texte barré : `~~barré~~`
- Texte en code : `` `code` ``
- Gras et italique : `***texte***`

## Listes

Liste à puces :

- Élément 1
- Élément 2
- Élément 3

Liste numérotée :

1. Premier élément
2. Deuxième élément
3. Troisième élément

## Titres

```markdown
# Titre niveau 1
## Titre niveau 2
### Titre niveau 3
```

Il existe jusqu'à six niveaux de titres.

## Liens et images

Lien :

```markdown
[Cliquez ici](https://oneduc.fr)
```

Image :

```markdown
![Description](https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg)
```

## Citations

```markdown
> Hermel part en vacances dans le sud.
```

## Code

Code sur une ligne :

```markdown
`console.log("Hello")`
```

Bloc de code :

```javascript
function greet(name) {
  console.log("Texte");
}
```

## Tableaux

| Sujet | Vue |
| --- | --- |
| Gras | OK |
| Italique | OK |
| Code | OK |
| Images | OK |
| Liens | OK |
| Table | OK |

## Exposant et indice

Markdown accepte parfois du HTML :

```html
<sup>exposant</sup>
<sub>indice</sub>
```

## Astuces utiles

- `---` permet de créer une ligne de séparation.
- `- [ ]` et `- [x]` permettent de faire des listes de tâches.
- Le symbole `\` permet d'échapper un caractère.

Exemple : `\*` permet d'afficher une étoile sans italique.
