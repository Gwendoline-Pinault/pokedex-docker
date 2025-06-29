const { Router } = require('express');
const router = Router();

const mainController = require('./controller/mainController');
const typesController = require('./controller/typesController');

router.get('/', mainController.pokemonList); 
router.get('/pokemon/:id', mainController.pokemonDetails);
router.get('/types', typesController.typesList);
router.get('/types/:id', typesController.typeDetails);

module.exports = router;