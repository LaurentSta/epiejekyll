---
title: "Arduino : quand l'électronique devient un test de patience"
date: 2026-04-28 09:30:00 +0200
categories: formation
groupe: gidef
author: Laurent Staelens
image: /assets/images/vignette-psin-astrolabe.png
description: "Retour humoristique du groupe Gidef sur les premiers montages Arduino, les LED, les résistances, le feu tricolore et le bouton poussoir."
---

Arduino est une plateforme open-source née en 2005 en Italie. Elle a été conçue pour permettre à des humains, pas forcément ingénieurs, de créer des objets interactifs.

En résumé : tu codes, tu branches, et tu espères que rien ne fume.

Une carte Arduino, comme l'Arduino Uno, permet de contrôler des LED, des capteurs, des moteurs et tout ce qui accepte de coopérer avec du courant et un peu de foi.

## Première rencontre avec la LED : elle m'a ignoré

Première leçon : une LED a un sens.

Si tu te trompes, elle ne s'allume pas. Elle ne clignote pas. Elle ne te juge même pas. Elle t'ignore.

Deuxième leçon : sans résistance, généralement entre `220Ω` et `330Ω`, elle finit en barbecue électronique. Une expérience courte, mais mémorable.

## Le feu tricolore : chaos organisé

Créer un feu tricolore avec trois LED paraît simple, jusqu'à ce que le code transforme le montage en discothèque illégale.

Entre les `digitalWrite()` mal placés et les `delay()` trop optimistes, le résultat peut vite ressembler à un mélange entre feu de circulation et sapin de Noël sous caféine.

Bonus : la broche 13 avec sa LED intégrée, parfaite pour faire croire que tout marche même quand tout est faux.

## Interview d'une personne anonyme de la classe

**Comment avez-vous découvert Arduino ?**

Grâce à notre formateur, Laurent.

**Quel a été votre plus grand chef-d'oeuvre électronique, ou votre plus gros accident ?**

J'ai réussi à créer un court-circuit. Résultat : le câble USB a commencé à chauffer assez vite pour me faire comprendre que j'avais probablement fait une erreur dans ma vie.

Rien n'a explosé, mais disons que le câble a clairement eu une montée en température et moi une montée de stress. Depuis, je vérifie deux fois mes branchements. Minimum.

**Quel conseil donneriez-vous à quelqu'un qui débute sans tout casser ?**

Écouter monsieur Laurent attentivement.

## Le bouton poussoir : l'interactivité arrive

Avec un bouton poussoir, nous avons appris à utiliser `digitalRead()` pour contrôler une LED.

Nous avons aussi découvert que sans résistance pull-down ou pull-up, Arduino aime inventer ses propres règles du jeu.

Résultat : une LED possédée, qui s'allume et s'éteint sans raison apparente.

## Ce qu'Arduino nous a appris

Arduino nous a appris :

- la rigueur, ou la punition immédiate ;
- la patience, beaucoup ;
- la logique, après quelques crises ;
- et surtout que l'électronique gagne toujours.

C'est un professeur silencieux, mais très efficace : il ne parle pas. Il te laisse juste comprendre pourquoi ça ne marche pas.
