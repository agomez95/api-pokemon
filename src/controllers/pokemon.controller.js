'use strict';

const pokemonModule = require('../modules/pokemon.module');

const getAllPokemonController = async (req, res) => {
    try {
        const moduleResponse = await pokemonModule.getAllPokemonModule();
        res.status(200).json({
            err_code: 0,
            status: 200,
            response: moduleResponse
        });
    } catch(error) {
        res.status(error.statusCode || 500).json({            
            err_code: 1,
            status: error.statusCode || 500,
            err_msg: error.message || 'ERROR INTERNO',
        }); 
    }
};

const getAllByTypePokemonController = async (req, res) => {
    try {
        const moduleResponse = await pokemonModule.getAllByTypePokemonModule(req);
        res.status(200).json({
            err_code: 0,
            status: 200,
            response: moduleResponse
        });
    } catch(error) {
        res.status(error.statusCode || 500).json({            
            err_code: 1,
            status: error.statusCode || 500,
            err_msg: error.message || 'ERROR INTERNO',
        }); 
    }
};


const getAllByNamePokemonController = async (req, res) => {
    try {
        const moduleResponse = await pokemonModule.getAllByNamePokemonModule(req);
        res.status(200).json({
            err_code: 0,
            status: 200,
            response: moduleResponse
        });
    } catch(error) {
        res.status(error.statusCode || 500).json({            
            err_code: 1,
            status: error.statusCode || 500,
            err_msg: error.message || 'ERROR INTERNO',
        }); 
    }
};

module.exports = {
    getAllPokemonController,
    getAllByTypePokemonController,
    getAllByNamePokemonController
}
