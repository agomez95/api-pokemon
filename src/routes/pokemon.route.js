'use strict';

const express = require('express');
const router = express.Router();

const validate = require('../middlewares/schema.middleware');
const { findByType, findByName } = require('../schemas/pokemon.schema');

const pokemonController = require('../controllers/pokemon.controller');

router
    .get('/', pokemonController.getAllPokemonController)
    .get('/tipo', validate(findByType), pokemonController.getAllByTypePokemonController)
    .get('/nombre', validate(findByName), pokemonController.getAllByNamePokemonController)

module.exports = router;