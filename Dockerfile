FROM node:20.18.0
WORKDIR /app
COPY ./package*.json ./
# Installe les dépendances
RUN npm install
# Copie le reste de l'application
COPY . .
# Expose le port sur lequel l'application écoute
EXPOSE 3000
# Commande pour démarrer l'application
CMD ["npm", "start"]
