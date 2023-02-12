const { Router } = require('express');
const { getAllPokemons } = require('../controllers/pokemonController');
const { Pokemon, Type } = require("../db");

const router= Router();


module.exports = router;