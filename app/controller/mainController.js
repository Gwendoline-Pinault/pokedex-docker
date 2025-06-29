const dataMapper = require('../dataMapper');

const pokedex = { 
  pokemonList: async (request, response, next) => {
    try {
      const pokemons = await dataMapper.findAllPokemon();
      response.render('pokedex', {pokemons});
    }
    catch(error){
      console.trace(error);
      next();
    }
  },
  pokemonDetails: async (request, response, next) => {
    try {
      const id = request.params.id;
      const pokemon = await dataMapper.findOnePokemon(id);
      const pokemonTypes = await dataMapper.findPokemonTypes(id);
      response.render('pokemon', {pokemon, pokemonTypes});
    }
    catch(error){
      console.trace(error);
      next();
    }
    
  }
}

module.exports = pokedex;
