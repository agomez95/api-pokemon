'use strict';

//modulos
const express = require('express');
const helmet = require('helmet');

const app = express();

//instancias
const config = require('./config/global');

const serverStart = () => {
    //envio de json en el servidor de express
    app.use(express.json());

    //seguridad
    app.use(helmet());

    //rutas

    //server
    app.listen(config.port, () => {
        console.log(`SERVER ON PORT: ${config.port}`);
    });
};

serverStart();

