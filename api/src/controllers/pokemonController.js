const axios = require('axios');
const { Pokemon, Type } = require("../db");
const { API_POKE } = process.env;

// trae la info de la Api
const getAllPokemonApi = async(req, res, next)=> {
    try {
      const pokeApiUrl = await axios.get(`${API_POKE}?limit=40`);
      const pokeApiInfo =  Promise.all(pokeApiUrl.data.results.map(async(answer) => {
        const pokeApiDetail =  await axios.get(answer.url);
        const pokeInfo = {
          id: pokeApiDetail.data.id,
          name: pokeApiDetail.data.name,
          ataque: pokeApiDetail.data.stats[1].base_stat,
          defensa: pokeApiDetail.data.stats[2].base_stat,
          velocidad: pokeApiDetail.data.stats[5].base_stat,
          altura: pokeApiDetail.data.height,
          peso: pokeApiDetail.data.weight,
          img: pokeApiDetail.data.sprites.other.dream_world.front_default,
          types: pokeApiDetail.data.types.map((t) => t.type.name),
          createdInDb: false,
        };
        return pokeInfo;
      })
      );
      return pokeApiInfo;
    } catch (error) {
      next(error);
    };
  };

//   trae la info de la db
  const getDbPokemonInfo = async (req, res, next) =>{
    try {
      const pokemonDbInfo =  await Pokemon.findAll({
        include: {
          model: Type,
          attributes: ['name'],
          through: {
            attributes: [],
          }
        }
      });
      return pokemonDbInfo;
    } catch (error) {
      next (error);
    };
  };

//   trae todo
  const getAllPokemon = async (req, res, next) =>{
    try {
      const apiInfo = await getAllPokemonApi();
      const dbInfo = await getDbPokemonInfo();
      const wholeInfo = await apiInfo.concat(dbInfo);
      return wholeInfo;
    } catch (error) {
      next (error);
    };
  };

  module.exports = {
    getAllPokemon
  }