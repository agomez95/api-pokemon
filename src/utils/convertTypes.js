'use strict';

const convertirTipo = (type) => {
    let tipo = '';
    switch(type) {
        case 'normal':
            tipo = 'normal';
            break;
        case 'fire':
            tipo = 'fuego';
            break;
        case 'water':
            tipo = 'agua';
            break;
        case 'grass':
            tipo = 'planta';
            break;
        case 'electric':
            tipo = 'electrico';
            break;
        case 'ice':
            tipo = 'hielo';
            break;
        case 'fighting':
            tipo = 'lucha';
            break;
        case 'poison':
            tipo = 'veneno';
            break;
        case 'ground':
            tipo = 'tierra';
            break;
        case 'flying':
            tipo = 'volador';
            break;
        case 'psychic':
            tipo = 'psíquico';
            break;
        case 'bug':
            tipo = 'bicho';
            break;
        case 'rock':
            tipo = 'roca';
            break;
        case 'ghost':
            tipo = 'fantasma';
            break;
        case 'dark':
            tipo = 'siniestro';
            break;
        case 'dragon':
            tipo = 'dragon';
            break;
        case 'steel':
            tipo = 'acero';
            break;
        case 'fairy':
            tipo = 'hada';
            break;
    }
    return tipo;
};

module.exports = {
    convertirTipo
}