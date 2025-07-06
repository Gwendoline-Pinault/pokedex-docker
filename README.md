# Pokedex Docker

## Installation
1. Clonez le dépôt GitHub : https://github.com/Gwendoline-Pinault/pokedex-docker

2. Ajoutez à la racine du projet un fichier .env en suivant le modèle du fichier ```env_example```.

3. Lancez le docker : ```docker compose up -d``` : l'image mysql est récupérée, la base est créée et complétée, l'image de l'application est créée également.

4. Vérifiez que le container "app" est bien lancé, sinon relancez-le soit via Docker desktop, soit avec la commande ```docker compose start```.

5. Ouvrir le navigateur sur l'url : ```http://localhost:3000/```.


## Le site
Le site reprend le Pokédex des Pokémons de la première génération avec les statistiques de la deuxième génération.
On peut voir la liste des Pokémons, voir le détail d'un Pokémon, rechercher des Pokémons par types.