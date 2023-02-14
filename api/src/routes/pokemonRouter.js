const { Router } = require('express');
const { getAllPokemon } = require('../controllers/pokemonController');
const { Pokemon, Type } = require("../db");

const router= Router();

// // // trae los pokemon y los datos necesarios
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
        console.log(error)
    }
});

// // // trae los datos por id, detalles
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

// //   crea pokemon 
router.post('/', async (req, res, next) => {
    try {
      let {name, hp, attack, defense, speed, height, weight, type, img, createdInDb} = req.body;
      let pokemonCreated = await Pokemon.create({
        name,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        img,
        createdInDb,
      });
      let typesDb = await Type.findAll({ where: { name: type } });
      pokemonCreated.addType(typesDb);
      res.status(201).send('Pokemon creado');
      
    } catch (error) {
      next(error);
      console.log(error);
    }
  });

module.exports = router;