+++
title = 'Projet portfolio avec Hugo'
date = 2023-10-14T10:56:54+02:00
draft = true
+++
Dans le cadre de mon BTS SIO, j'ai réalisé ce portfolio. Dans ce post j'explique les différentes étapes de la conception au déploiement final.

### Conception  

Tout d'abord, il était important de bien cerner mes besoins afin de faire les meilleurs choix technologiques. J'ai effectué le choix d'un générateur de site statique. En effet j'ai une utilisation de type blog et je n'ai pas besoin d'interaction avec les visiteurs. De plus un outil d'administration lourd pour rajouter des articles, me parait toujours aujourd'hui inutile puisque je suis le seul à maintenir le portfolio. Enfin les **performances** du site, ainsi que la limitation de son impact environnemental ne peuvent qu'être meilleur sans utilisation d'un langage serveur pour le rendu HTML.

Mon choix fut **Hugo**, j'ai étudié les autres solutions telles que Gatsby ou Jekyll, il est vrai non pas en profondeur. Cependant j'ai choisi Hugo pour sa promesse de build plus rapide, aussi puisque mon site final se limite à une architecture simple avec peu de template la courbe d'apprentissage de Hugo m'a paru plus rapide.

Ensuite pour le front je me suis astreint à toute utilisation de framework JS. Ceux-ci auraient alourdi les pages pour rien car j'aurai été incapable d'utiliser à ce moment précis le plein potentiel de ces outils, de plus le développement d'interface n'est absolument pas mon champs d'études préféré. Ainsi mon site ne comporte que peu d'éléments réactifs.

Enfin pour le back j'ai décidé d'utilisé la solution de page hébergé de Github, certes des limites sont imposées néanmoins je ne pense pas les dépasser dans le futur.
```
 GitHub Pages sites are subject to the following usage limits:
 1 GitHub Pages source repositories have a recommended limit of 1GB. For more information, see "What is my disk quota?"
 2 Published GitHub Pages sites may be no larger than 1 GB.
 3 GitHub Pages sites have a soft bandwidth limit of 100GB per month.
 4 GitHub Pages sites have a soft limit of 10 builds per hour.

```
De plus par un simple push depuis mon pc vers le dépôt sur mon compte Github le déploiement est automatique. Ainsi un mini pipeline permet une mise à jour rapide de contenu quand je le souhaite.

### Réalisation
En amont des premières commandes dans le terminal ou des premières lignes de code, j'ai essayé de planifié les différentes étapes par la méthode sprint. 

**1. Ainsi j'ai choisi le thème {{< externLink "https://themes.gohugo.io/themes/hugo-theme-nix/" Nix >}} pour sa simplicité, de configuration et son design épuré.**

Pour réliser ce premier projet avec Hugo j'ai suivi la {{< externLink "https://gohugo.io/documentation/" documentation >}}. J'ai effectué diverses modifications sur les fichiers Css et de template html.

**2. J'ai schématisé une interface de sélection d'articles**

{{< imgOptiRez "schemaInterface.JPG" "500x400" "Schéma interface sélection article" >}}  

Puis j'ai réaliser un cas d'utilisation très simple
| Cas utilisation  | Naviguer dans les projets|
| :--------------- |:---------------|
| Évènement déclencheur |    utilisateur     |
| intérêt  | bien classer les projets et faciliter la recherche d'info|
| Près condition  | Être sur la bonne page, si téléphone la boite de dialogue doit prendre toute la largeur|
| Scénario-nominal étape 1  |  Le contenu de l'article est injecter dans une balise article afin de le présenter|
|Scénario-nominal étape 2| Le titre du projet est afficher au-dessus de la boite de lecture d'article|
| Scénario alternatif  | Un projet est déjà sélectionner et click sur retour à l'accueille. Retour au cas initial|


La page projet utilise le concept d'AJAX afin d'injecter le contenu de l'article directement sans tout recharger. Des breakpoints pour le responsive sont prévu en CSS.

**3. Utilisation des fonctionnalités de Hugo** 

Afin d'afficher des images tout en utilisant les optimisations du générateur j'ai écrit un {{< externLink "https://gohugo.io/content-management/shortcodes/" shortcode >}}.  
Exemple fichier *imgOptiRez.html*  

```
{{$NameFile := .Get 0 }}
{{$Dimension := .Get 1}}
{{ $asset := resources.Get $NameFile }}
{{ $img := $asset.Fit $Dimension }}
<img alt="{{ .Get 2 }}" src="{{ $img.RelPermalink }}" />

```
**4. La mise en production**  
J'ai suivi pas à pas les étapes indiquées dans la {{< externLink "https://gohugo.io/hosting-and-deployment/hosting-on-github/" "documentation pour l'hébergement avec une page Github" >}}

### Compétences utilisées

* Développer la présence en ligne de l’organisation
* Travailler en mode projet notamment par la méthode sprint
* Mettre à disposition des utilisateurs un service informatique
* Organiser son développement professionnel