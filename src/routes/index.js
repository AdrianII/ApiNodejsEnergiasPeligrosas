const express = require('express');
const routes = express.Router();
const fs = require('fs');

const PATH_ROUTER = __dirname;

const clearFileName = (filename) => {
    const clear = filename.split('.').shift();
    return clear;
}

fs.readdirSync(PATH_ROUTER).filter(filename => {
    const prefixRouter = clearFileName(filename);
    if(prefixRouter !== 'index') {
        console.log('cargando la rura... ' + prefixRouter)
        routes.use(`/${prefixRouter}`, require(`./${prefixRouter}.js`));
    }
})

module.exports = {routes}