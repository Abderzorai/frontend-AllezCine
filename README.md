# frontend-AllezCine

## Team

Abderrahman and Jonathan were working on this website during our BeCode.org training to become web developer junior.

Here is our GitHub:

[Abderzorai](https://github.com/Abderzorai)
[deschuyteneerj](https://github.com/deschuyteneerj)

## GitHub page

The project can be found on the following link : [Abderzorai.github.io/frontend-AllezCine](Abderzorai.github.io/frontend-AllezCine).

## Objectives

    - Reproduce a one pager website with an already chosen design.
    - Use a kanban (project tab on GitHub).

To make this, we had to use every technology we had learned since the beginning of our training at BeCode.org.

    - HTML
    - CSS
    - JavaScript
    - Responsive design
    - Bootstrap
    - Font Awesome Icons


### A . Site avec LAYOUT

Vous allez réaliser, en groupe, un site internet de location et vente des films. ATTENTION, il s'agit d'un site en one-page !

    Cliquez ici pour voir le layout
    Pour récupérer les différentes informations des films, vous devez utiliser l'API The Movie Database API
    A lire: A quoi sert une API?
    A installer: Postman

#### Entrée

Afficher sur le site une box pour la mise en garde de cookies. Pour un exemple GDPR friendly, consultez le site de la CNIL.

Lorsqu’on clique sur les boutons [login] ou [register], faire apparaître en JS dans une box un formulaire de connexion. (voir le site [commeaucinema.com](http://www.commeaucinema.com))

Ce formulaire de connexion contiendra :

    - identifiant,
    - password,
    - un bouton [OK],
    - un bouton [Créer un compte],
    - un [rester connecté],
    - un lien [Si vous avez oublié votre mot de passe],
    - et un lien [cancel].

Pour le formulaire register

    - Nom
    - E-mail
    - Password
    - Confirm password
    - Conditions générales d'utilisation bouton [Select]
    - Bouton [Register]

(Difficulté : faire disparaître le formulaire lorsqu'on clique sur CANCEL, sur le formulaire ou sur le bouton register, et vice versa ).

#### Menu

Un menu en bootstrap avec des sous-menus. (Menu hamburger pour le responsive).

Comme c’est une onepage, les liens du menu doivent pointer vers les sections dédiées.

#### En-tête

Le jumbotron de l'entête doit faire 100% de la largeur de l'écran dans lequel il y a un slide (Cf layout). Faire fonctionner le slide en CSS ou en JS)

#### Les boutons réseaux sociaux

Les boutons de réseaux sociaux sont en position fixe. Si on clique sur un bouton, il doit s’allonger avec une animation (ici utilisez juste du CSS).

#### Section Films

Chaque film doit comporter :

    - une affiche,
    - un titre,
    - l’année de sortie,
    - et le genre.

Si on clique sur l’image ou titre du film, faire apparaître dans un modal (Bootstrap) le trailer youtube du film, la description, le réalisateur, l’année de sortie du film, le genre, les acteurs…

#### Section Featured Movies

Créer des boutons pour filtrer les films par genre (JS). Si on clique sur le bouton ACTION par exemple, afficher uniquement les films d’actions, etc...

Lorsqu’on clique sur le bouton “plus des films”, afficher les autres films cachés. Faire disparaître le bouton “plus des films” et le remplacer par le bouton “moins des films” si on clique sur “moins des films”, cacher les films et faire réapparaître le bouton “plus des films“.

#### Section Shop Movie

Utiliser les deux petits boutons à droite pour faire défiler les films de gauche à droite et vise-versa (Bootstrap, JS au choix)

#### Section Contact Us

Créer un formulaire (dans la page HTML, pas dans un pop-up). Faites en sorte que les entrées du formulaire s'affichent dans un pop-up lorsqu’on clique sur “Send Message”. (Pas de traitement en php, prochainement promis)

Bonus : mettre une map dans la section Contact us.

#### Section Footer

Faites en sorte que lorsqu’on clique sur le petit bouton rouge avec la flèche blanche, on monte jusqu’à l'entête du site, le petit bouton disparaît une fois que l'entête apparaît.

CONTRAINTE : créer ce bouton en pur JS avec createElement(), createTextNode() et compagnie(), l’afficher sur le DOM, le positionner puis le styler en CSS dans la feuille de style.

FAITES QUE LE SITE SOIT RESPONSIVE (Bootstrap + Media queries)

### B. La newsletter

Utiliser ce site https://putsmail.com/tests/new pour tester votre newsletter. Vous pouvez utiliser les tables, ou du HTML5 (certains webmails acceptent du HTML5 mais mais mais attention avec le CSS)

Référence : Voici une newsletter que j’ai reçu de la part de Yves Rocher, s’inspirer à souhait et c’est essentiellement des tables.

Bonne chance et bon courage. (PS : on vous aime)

#### REMARQUES :

Vous travaillez en groupe :

    Organisez-vous : utiliser un kanban (onglet [projects] dans GitHub).
    Si vous avez des remarques ou des questions, n'hésitez pas à utiliser l'onglet [Issues] de GitHub pour vous exprimer.
    Communiquez : rappelez-vous les bienfaits des réunions SCRUM.