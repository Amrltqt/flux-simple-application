# flux-simple-application

Application en français pour comprendre l'organisation d'une architecture Flux.
D'abord pour moi, puis pourquoi pas pour ceux qui auront envie de le lire ou l'utiliser.

## Installation manuelle

Sur Ubuntu, via NPM (donc une intallation propre de node.js) on install quelques lib .js dont react et gulp. Gulp est une librairie permettant d'éxecuter des routines en js.
React est une librairie visant à décrire et générer du DOM en utilisant un mélange de JSX et de Javascript.

> sudo npm install gulp gulp-browserify gulp-concat react reactify --save


Pour disposer de la commande gulp directement sur ma machine je fais :

> sudo npm install gulp -g

L'outil sera une commande directement utilisable.

## Génération du /dist

Le ./dist est le répétoire dans lequel seront placé les sources html et js que vous irez mettre en production. Le JS est concaténé (non minmifié) et l'ensemble des librairies dont on a besoin sont présentes dans le fichier main.js

Pour générer le ./dist il suffit de lancer la commande ci-dessous depuis le répertoire ou se trouve votre gulpfile.js

> gulp

Les fichiers sont alors générés et disposés au bon endroit. Vous pouvez ouvrire le fichier index.html dans un navigateur pour constater du fonctionnement.

A l'avenir plutôt que de taper la commande gulp à chaque "compilations" utilisez la commande suivante pour qu'à chaque modification dans votre répertoire ./src les fichiers dans ./dist soient regénérés.

> gulp watch
