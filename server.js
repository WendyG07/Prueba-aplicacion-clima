const express = require('express');
const app = express();
const ubicacion = require('./controlador/ubicacion');
const clima = require('./controlador/clima');
const axios = require('axios');

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 8085;

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    res.render('home', {
        ciudadQ: "Quito",
        ciudadG: "Guayaquil",
        tempQ: tempQ,
        tempG: tempG,

    });
});

app.get('/mundo', (req, res) => {
    res.render('mundo', {
        ciudadP: "Paris",
        ciudadJ: "Japon",
        tempP: tempP,
        tempJ: tempJ
    });


});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});
let getInfo = async(ciudadQ, ciudadG, ciudadP, ciudadJ) => {
    try {
        let coords1 = await ubicacion.getCiudadLatLon(ciudadQ);
        let tempQ = await clima.getClima(coords1.lat, coords1.lon);
        let coords2 = await ubicacion.getCiudadLatLon(ciudadG);
        let tempG = await clima.getClima(coords2.lat, coords2.lon);
        let coords3 = await ubicacion.getCiudadLatLon(ciudadP);
        let tempP = await clima.getClima(coords3.lat, coords3.lon);
        let coords4 = await ubicacion.getCiudadLatLon(ciudadJ);
        let tempJ = await clima.getClima(coords4.lat, coords4.lon);
        return {
            tempQ,
            tempG,
            tempP,
            tempJ
        }
    } catch (error) {
        console.log(`No se puede obtener el clima de: ${pais}`);
    }
};
app.use(express.static(__dirname + '/public'));
let tempQ
let tempG
let tempP
let tempJ
getInfo("Quito", "Guayaquil", "Paris", "Japon").then(res => {
    tempQ = res.tempQ;
    tempG = res.tempG;
    tempP = res.tempP
    tempJ = res.tempJ
    console.log(res.temp1, res.temp2);
}).catch(err => console.log(err));

//npm install -g heroku
