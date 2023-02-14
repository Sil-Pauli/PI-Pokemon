const { Router } = require('express');
const { getAllPokemon } = require('../controllers/pokemonController');
const { Pokemon, Type } = require("../db");

const router= Router();

// trae los pokemon y los datos necesarios
router.get("/", async  (req, res, next) => {
    try {
        const { name } = req.query;
        const pokemonsTotal = await getAllPokemon();
        if(name) {
            const pokemonName = await pokemonsTotal.filter((e) => e.name.toLowerCase().includes(name.toLowerCase()));
            pokemonName.length?
            res.status(200).send(pokemonName) :
            res.status(404).send('Pokemon not found!');
        } else {
            res.status(200).send(pokemonsTotal)
        }
    } catch (error) {
        next(error)
    }
});

// trae los datos por id, detalles
router.get('/:id', async (req, res, next) => {
    try {
      const{ id } = req.params;
      const pokemonApiDb = await getAllPokemon()
      if (id) {
        const pokemonId = pokemonApiDb.filter((e) => e.id == id);
        pokemonId.length
         res.status(200).json(pokemonId)
         res.status(404).send(`Pokemon ${id} not found`);
      }
    } catch (error) {
      next(error);
    }
  });

//   crea pokemon 
  router.post('/', async (req, res) => {
    const {
      name, img, attack, defense, speed, height, weight, types,
    } = req.body;
  
    const newPokemon = await Pokemon.create({
      name, img, hp, attack, defense, speed, height, weight,
    });
    let typeDB = await Type.findAll({
      where: { name: types },
    });
    if (!typeDB.length) { // agrego este if para verificar y cargar los types si no están el la DB
      await getApiType();
      typeDB = await Type.findAll({
        where: { name: types },
      });
    }
    newPokemon.addType(typeDB);
    res.send('Pokemon creado!');
  });
  

module.exports = router;