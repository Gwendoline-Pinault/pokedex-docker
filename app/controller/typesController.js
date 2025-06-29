const dataMapper = require('../dataMapper');

const typesController = {
  typesList: async (request, response, next) => {
    try {
      const types = await dataMapper.findAllTypes();
      response.render('types', {types});
    } 
    catch (error) {
      console.trace(error);
      next();
    } 
  },
  typeDetails: async (request, response, next) => {
    try {
      const typeId = request.params.id;
      const type = await dataMapper.findTypeById(typeId);
      const pokemons = await dataMapper.findPokemonsByType(typeId);
      if (!type) {
        return response.status(404).send('Type not found');
      }
      response.render('typeDetails', {type, pokemons});
    } 
    catch (error) {
      console.trace(error);
      next();
    }
  }
}

module.exports = typesController;