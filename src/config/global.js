'use strict';

let parametro = null;

/**
 * 
 * @param {*} variable - el nombre de la variable que queremos iniciar
 * @param {*} required - si se require con un estado de false por defecto
 * @returns el parametro con la variable de entorno cargada
 */
const cargarVariable = (variable, required = false) => {
    parametro = process.env[variable];

    if(!parametro) {
        if(required) throw new Error('No se ha definido la variable de entorno con el nombre: ' + variable);
        else return null;
    }

    return parametro;
};

// en el objecto 'config' almacenamos nuestras variables globales
const config = {
    port: cargarVariable('PORT', true),
    api: cargarVariable('API', true),
    mongodb: cargarVariable('DB', true)
};

module.exports = config;