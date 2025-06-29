const client = require('./client');

const dataMapper = {
  findAllPokemon: async () => {
    const queryAllPokemon = 'SELECT * FROM "pokemon";'
    const pokemonList = await client.query(queryAllPokemon);
    const pokemons = pokemonList.rows;
    return pokemons;
  },
  findOnePokemon: async (id) => {
    const queryOnePokemon = `SELECT * FROM "pokemon" WHERE numero = ${id};`;
    const findPokemon = await client.query(queryOnePokemon);
    const pokemon = findPokemon.rows[0];
    return pokemon;
  },
  findPokemonTypes: async (id) => {
    const queryPokemonTypes = `SELECT * FROM "pokemon_type" INNER JOIN "type" ON pokemon_type.type_id = type.id AND pokemon_numero = ${id};`;
    const findPokemonTypes = await client.query(queryPokemonTypes);
    const types = findPokemonTypes.rows;
    return types;
  },
  findAllTypes: async () => {
    const queryTypes = 'SELECT * FROM "type";';
    const typesList = await client.query(queryTypes);
    const types = typesList.rows;
    return types;
  }
}

module.exports = dataMapper;
