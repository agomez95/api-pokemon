'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema de 'pokemon' para almacenar data proveniente del PokeAPI
const PokemonSchema = new Schema({
    orden: Number ,
    nombre: String,
    tipos: [{ type: String }],
    imagen: String,
    miniatura: String
});

const Pokemon = mongoose.model('pokemon', PokemonSchema);

module.exports = Pokemon;