# Pokedex Docker

Cette application a été développée avec Node.js, Express, EJS et MySQL. Elle a été conteneurisée pour être lancée depuis n'importe quel environnement sans avoir à recréer la base soi-même.

## Installation
1. Clonez le dépôt GitHub : https://github.com/Gwendoline-Pinault/pokedex-docker

2. Ajoutez à la racine du projet un fichier .env en suivant le modèle du fichier ```env_example```. Il faut remplacer les variables d'utilisateur et de mot de passe par vos informations.

3. Lancez le docker : ```docker compose up -d``` : l'image mysql est récupérée, la base est créée et complétée, l'image de l'application est créée également.

4. Vérifiez que le container "app" est bien lancé (le premier lancement a tendance a échoué), sinon relancez-le soit via Docker desktop, soit avec la commande ```docker compose start```.

5. Ouvrir le navigateur sur l'url : ```http://localhost:3000/```.


## Le site
Le site reprend le Pokédex des Pokémons de la première génération avec les statistiques de la deuxième génération.
On peut voir la liste des Pokémons, voir le détail d'un Pokémon, rechercher des Pokémons par types.

## Pistes d'évolutions du site
Je prévois d'ajouter ultérieurement d'autres Pokémons dans la base pour ajouter les autres générations et d'ajouter une fonction pour rechercher directement un Pokémon par son nom.