'use strict';

const seedModule = require('../modules/seed.module');

const seedPokemonController = async (req, res) => {
    try {
        const moduleResponse = await seedModule.seedPokemonModule();        
        res.status(200).json({
            err_code: 0,
            status: 200,
            response: moduleResponse
        });
    } catch(error) {
        res.status(error.statusCode || 500).json({            
            err_code: 1,
            status: error.statusCode || 500,
            err_msg: error.message || 'Error interno',
        }); 
    }
};

module.exports = {
    seedPokemonController
}
