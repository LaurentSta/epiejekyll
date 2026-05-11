---
title: "3 façons d'intégrer le style"
date: 2026-05-11 10:30:00 +0200
categories: formation
groupe: astrolabe
author: Ouzefa
description: "Les 3 méthodes d'integrer du style "
---

![Facons d'integrer du style](https://media.discordapp.net/attachments/1503314310481580092/1503314509253840956/CSS3_floater.png?ex=6a02e63d&is=6a0194bd&hm=a9eed7460cfe701dc55f3516bd172e9d58b0bfb830426c07c908ad8b48027377&=&format=webp&quality=lossless&width=691&height=291)

# HTML & CSS : Les 3 façons d'intégrer le style

## Introduction

Aujourd'hui en formation PSIN, nous avons plongé dans l'univers du HTML et du CSS. Pour rappel, **HTML structure et organise notre page**, tandis que **CSS nous permet de la styliser** — autrement dit, HTML construit la maison, CSS la décore. Et comme toute bonne décoration, il y a plusieurs façons de s'y prendre.

Nous avons découvert qu'il existe **3 méthodes pour intégrer du CSS** dans une page web. En avant !

---

## 1. Le style directement dans la balise (inline)

La première méthode, c'est d'écrire le style **directement dans la balise HTML**, grâce à l'attribut `style`. C'est la méthode la plus rapide... mais pas forcément la plus élégante. C'est pratique pour tester rapidement, mais si on doit styliser 50 éléments comme ça, ça devient vite le bazar.

---

## 2. Le style dans le `<head>` (interne)

La deuxième méthode consiste à regrouper tous nos styles dans une balise `<style>` placée dans le `<head>` de la page. C'est beaucoup plus propre. On en a aussi profité pour revoir les notions de **padding** (espace intérieur) et **margin** (espace extérieur) — deux propriétés incontournables pour bien agencer ses éléments.

> 💡 Le CSS se lit **de haut en bas** : si deux règles s'appliquent au même élément, c'est la dernière qui l'emporte.

---

## 3. Un fichier CSS séparé (externe)

La troisième méthode, et la plus professionnelle, c'est de créer un **fichier `style.css` séparé** et de le lier à notre page HTML avec une balise `<link>` dans le `<head>`. Cette méthode permet de **séparer le fond de la forme**, et surtout de réutiliser le même fichier CSS sur plusieurs pages. C'est ce qui donne un rendu cohérent et propre sur l'ensemble d'un site.

---

## Conclusion

Nous avons donc vu trois niveaux d'intégration du CSS : **dans la balise**, **dans le head**, et **dans un fichier externe**. Plus on avance, plus on préfère la troisième méthode — parce qu'un code bien organisé, c'est un code qu'on comprend encore six mois plus tard. 😄



