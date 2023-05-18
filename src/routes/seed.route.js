'use strict';

const express = require('express');
const router = express.Router();

const seedController = require('../controllers/seed.controller');

router
    .post('/', seedController.seedPokemonController)

module.exports = router;