# Projet Tesla – Git Flow & CI

## Description du projet

Ce projet est un mini projet web basé sur le site de Tesla et réalisé dans le cadre du TP d'évaluation **Git professionnel & Intégration Continue**.  
L’objectif principal était la **mise en œuvre d’une organisation Git professionnelle**, en binôme, avec un workflow **Git Flow complet** et une **CI fonctionnelle**.

Le projet consiste en un site web simple comprenant :

- 2 pages: une page Home et une page Contact
- une structure claire avec header / contenu / footer
- deux sections plus complexes (carrousel de la hero section et formulaire de contact)

## Membres du binôme

- Yannick NOAH OLINGA
- Marion VIEILLARD

## Inspiration: lien vers le site Tesla

https://www.tesla.com/fr_fr

## Dossier captures d'écrans

Toutes les captures sont dans le dossier `CAPTURES_ECRAN` à la racine du projet (notre site, stash, conflit)

## Git flow et CI

Après avoir créé les branches `main` et `develop`, nous avons créé 8 issues sur Github et nous les sommes assignées.

Les branches `feature` ont toutes été crées à partir de la branche `develop` en respectant la convention de nommage. Cette convention a également été appliquée aux messages de commit, de sorte que branches, commits et issues soient liés.

Hormis une erreur de pull request au démarrage (basée sur `main` au lieu de `develop`), toutes les fonctionnalités ont été intégrées via une PR vers `develop` après validation par le partenaire.

Nous avons pu mettre en place la CI rapidement et corrigé :

- une erreur de lint (variables inutilisées)
- des erreurs de build liées à des imports incorrects

## Utilisation du stash

En cours de développement sur la branche `feature/7-contact-form`, nous avons utilisé `git stash` pour pouvoir corriger les styles css de la navbar (taille du logo et de l'icône, font-size des liens).

- Commandes utilisées pour le stash: `git stash push -m “form contact styles”` puis `git stash list`
- Basculement sur la branche `fix/14-navbar-css-styles`, correction des styles de la navbar, ajout, commit et push
- Retour sur la branche `feature/7-contact-form`, application du stash avec `git stash apply` puis suppression avec `git stash drop`.

NB: voir captures d'écran de ces étapes.

## Résolution du conflit

Un premier conflit Git a été volontairement provoqué et résolu:

- travail sur deux branches feature distinctes (`feature/6-map-section` et `feature/7-contact-form`)
- modification du même fichier index.css
- apparition d’un conflit lors du merge dans `develop`

Le conflit a été résolu manuellement sur GitHub et validé par un commit explicite (fix: resolve merge conflict in index.css)

NB: voir capture d'écran de la résolution du conflit.

## Branche de release et tag

- Création d'une branche `release/1.0.0`
- Commit sur cette branche pour corriger l'espace entre la Hero Section et la Map Section
- Fusion via une PR vers `main` et une PR vers `develop`
- Création d'un tag annoté: `git tag -a v1.0.0 -m "Version 1.0.0 release"`
- Push du tag vers le dépôt distant: `git push origin v1.0.0`
