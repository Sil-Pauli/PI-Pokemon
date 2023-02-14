const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const pokemonRoute = require('./pokemonRouter.js');
const typeRouter = require('./typeRouter.js');


const router = Router();

// // Configurar los routers
// // Ejemplo: router.use('/auth', authRouter);

router.use('/pokemon', pokemonRoute); // middleware igual que router.get
router.use('/tipo', typeRouter);

module.exports = router;
