'use strict';

const ModuleError = require('../utils/moduleError');

const connect = require('../config/connectionDB');
const Pokemon = require('../models/pokemon.model');

// la funcion 'getAllPokemonService' obtiene todos los pokemon de la BD  
const getAllPokemonService = async () => {
    try {
        await connect();
        const results = await Pokemon.find();
        const listOfPokemon = [];

        for(let pokemon of results) {
            let obj = {};
            obj['orden'] = Number(pokemon.orden);
            obj['nombre'] = pokemon.nombre;
            obj['tipo'] = pokemon.tipos;
            obj['imagen'] = pokemon.imagen;
            listOfPokemon.push(obj);
        }
        
        return listOfPokemon;
    } catch(error) {
        if(error.statusCode) throw error;
        
        const moduleError = new ModuleError('ERROR, REVISAR LOGS');
        moduleError.statusCode = 500;

        console.log('ERROR EN EL servicio getAllPokemon:');
        console.log(error.message);

        throw moduleError;
    }
};

// la funcion 'getAllByTypePokemonService' obtiene todos los pokemon de acuerdo a su tipo
const getAllByTypePokemonService = async (data) => {

    const { tipo } = data;

    try {
        await connect();
        const results = await Pokemon.find({ tipos: tipo });
        const listOfPokemon = [];

        for(let pokemon of results) {
            let obj = {};
            obj['orden'] = Number(pokemon.orden);
            obj['nombre'] = pokemon.nombre;
            obj['tipo'] = pokemon.tipos;
            obj['imagen'] = pokemon.imagen;
            listOfPokemon.push(obj);
        }
        
        return listOfPokemon;
    } catch(error) {
        if(error.statusCode) throw error;
        
        const moduleError = new ModuleError('ERROR, REVISAR LOGS');
        moduleError.statusCode = 500;

        console.log('ERROR EN EL servicio getAllPokemon:');
        console.log(error.message);

        throw moduleError;
    }
};

// la funcion 'getAllByNamePokemonService' obtiene al pokemon de acuerdo a su nombre o devuelve false dependiendo si existe
const getAllByNamePokemonService = async (data) => {

    const { nombre } = data;

    try {
        await connect();
        const results = await Pokemon.find({ nombre: nombre });

        if(results.length == 0) return false;

        const listOfPokemon = [];

        for(let pokemon of results) {
            let obj = {};
            obj['orden'] = Number(pokemon.orden);
            obj['nombre'] = pokemon.nombre;
            obj['tipo'] = pokemon.tipos;
            obj['imagen'] = pokemon.imagen;
            listOfPokemon.push(obj);
        }
        
        return listOfPokemon;
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
    getAllPokemonService,
    getAllByTypePokemonService,
    getAllByNamePokemonService
};