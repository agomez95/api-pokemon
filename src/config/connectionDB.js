'use strict';

const mongoose = require('mongoose');
const config = require('./global');

module.exports = async () => {
    mongoose.set('strictQuery', true);
    mongoose.connect(config.mongodb, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};