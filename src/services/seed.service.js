'use strict';

const axios = require('axios');
const { convertirTipo } = require('../utils/convertTypes');

const ModuleError = require('../utils/moduleError');

const config = require('../config/global');
const connect = require('../config/connectionDB');
const Pokemon = require('../models/pokemon.model');

// la función de 'getInformation' probee la capacidad de importar la data obtenida de la peticion GET hecha en el servicio 'seedPokemonService'
const getInformation = async (url) => {
    const pokemon = {};
    const types = [];

    const { data } = await axios.get(url);
    for(let type of data.types) {
        // conversion del tipo de datos para ser incluida en la iteracion de cada pokemon
        types.push(convertirTipo(type.type.name));
    }

    pokemon['orden'] = Number(data.id);
    pokemon['nombre'] = data.name;
    pokemon['tipos'] = types;
    pokemon['imagen'] = data.sprites.other['official-artwork'].front_default;
    pokemon['miniatura'] = data.sprites['front_default'];
    
    return pokemon;
};

// la función POST 'seedPokemonService' permitirá obtener la data de PokeAPI para nuestra base de datos y hacerla mas accesible
const seedPokemonService = async () => {

    const url = `${config.api}pokemon/?limit=1010`;

    try {
        const { data } = await axios.get(url);
        const listOfpokemon = data.results;
        const listOfpokemonArray = [];

        for(let pokemon of listOfpokemon) {
            let results = await getInformation(pokemon.url);
            listOfpokemonArray.push(results);
        }

        await connect();

        const result = Pokemon.insertMany(listOfpokemonArray);
        return result;
    } catch(error) {
        if(error.statusCode) throw error;
        
        const moduleError = new ModuleError('ERROR, REVISAR LOGS');
        moduleError.statusCode = 500;

        console.log('ERROR EN EL servicio getAllPokemon:');
        console.log(error.message);

        throw moduleError;
    }
};

module.exports = {
    seedPokemonService
};