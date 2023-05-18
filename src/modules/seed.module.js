'use strict';

const seedService = require('../services/seed.service');
const ModuleError = require('../utils/moduleError');

const seedPokemonModule = async () => {
    try {
        const serviceResponse = await seedService.seedPokemonService();
        return serviceResponse;
    } catch(error) {
        if(error.statusCode) throw error;
        
        const moduleError = new ModuleError('ERROR, REVISAR LOGS');
        moduleError.statusCode = 500;

        console.log('ERROR EN EL MODULO seedPokemonModule:');
        console.log(error.message);

        throw moduleError;
    }
};

module.exports = {
    seedPokemonModule
};