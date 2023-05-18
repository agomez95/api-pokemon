'use strict';

const joi = require('joi');

// schemas creados para recibir las peticiones GET de busqueda
module.exports = {
    findByType: joi.object({
        tipo: joi.string().min(3).valid('normal','fuego','agua','planta','electrico','hielo','lucha','veneno','tierra','volador','psíquico','bicho','roca','fantasma','siniestro','dragon','acero','hada',
        ).required(),
    }),
    findByName: joi.object({
        nombre: joi.string().min(1).required(),
    }),
};

