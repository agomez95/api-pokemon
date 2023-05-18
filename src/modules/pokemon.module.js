'use strict';

const pokemonService = require('../services/pokemon.service');
const ModuleError = require('../utils/moduleError');

const getAllPokemonModule = async () => {
    try {
        const serviceResponse = await pokemonService.getAllPokemonService();
        return serviceResponse;
    } catch(error) {
        if(error.statusCode) throw error;
        
        const moduleError = new ModuleError('ERROR, REVISAR LOGS');
        moduleError.statusCode = 500;

        console.log('ERROR EN EL MODULO getAllPokemonModule:');
        console.log(error.message);

        throw moduleError;
    }
};

const getAllByTypePokemonModule = async (req) => {
    try {
        const data = req.body;
        const serviceResponse = await pokemonService.getAllByTypePokemonService(data);
        return serviceResponse;
    } catch(error) {
        if(error.statusCode) throw error;
        
        const moduleError = new ModuleError('ERROR, REVISAR LOGS');
        moduleError.statusCode = 500;

        console.log('ERROR EN EL MODULO getAllByTypePokemonModule:');
        console.log(error.message);

        throw moduleError;
    }
};

const getAllByNamePokemonModule = async (req) => {
    try {
        const data = req.body;
        const serviceResponse = await pokemonService.getAllByNamePokemonService(data);
        return serviceResponse;
    } catch(error) {
        if(error.statusCode) throw error;
        
        const moduleError = new ModuleError('ERROR, REVISAR LOGS');
        moduleError.statusCode = 500;

        console.log('ERROR EN EL MODULO getAllByNamePokemonModule:');
        console.log(error.message);

        throw moduleError;
    }
};

module.exports = {
    getAllPokemonModule,
    getAllByTypePokemonModule,
    getAllByNamePokemonModule
};