const client = require('./client');

const dataMapper = {
  findAllPokemon: async () => {
    try {
      const queryAllPokemon = 'SELECT * FROM pokemon;'
      const getPokemons = await (await client).execute(queryAllPokemon);
      return pokemons = getPokemons[0];
    } catch (error) {
      console.error('Error executing query:', error);
      return [];
    }
  },
  findOnePokemon: async (id) => {
    const queryOnePokemon = `SELECT * FROM pokemon WHERE numero = ${id};`;
    const findSelectedPokemon = await (await client).execute(queryOnePokemon);
    const pokemon = findSelectedPokemon[0];
    return pokemon;
  },
  findPokemonTypes: async (id) => {
    const queryPokemonTypes = `SELECT * FROM pokemon_type INNER JOIN type ON pokemon_type.type_id = type.id AND pokemon_numero = ${id};`;
    const findPokemonTypes = await (await client).execute(queryPokemonTypes);
    const types = findPokemonTypes[0];
    return types;
  },
  findAllTypes: async () => {
    const queryTypes = 'SELECT * FROM type;';
    const typesList = await (await client).execute(queryTypes);
    const types = typesList[0];
    return types;
  },
  findTypeById: async (id) => {
    const queryTypeById = `SELECT * FROM type WHERE id = ${id};`;
    const typeDetails = await (await client).execute(queryTypeById);
    const type = typeDetails[0][0];
    return type;
  },
  findPokemonsByType: async (id) => {
    const queryPokemonsByType = `SELECT * FROM pokemon INNER JOIN pokemon_type ON pokemon.numero = pokemon_type.pokemon_numero WHERE pokemon_type.type_id = ${id};`;
    const pokemonsByType = await (await client).execute(queryPokemonsByType);
    const pokemons = pokemonsByType[0];
    return pokemons;
  }
}

module.exports = dataMapper;
