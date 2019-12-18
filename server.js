const express = require('express');
const app = express();
//const axios = require('axios');

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
        ciudadP: "Paris",
        ciudadJ: "Japon",
        temQ: temp1,
        temG: temp2,
        temP: temp3,
        temJ: temp4
    });
});

app.get('/', (req, res) => {
    res.render('ecuador');
});
app.get('/mundo', (req, res) => {
    res.render('mundo');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});
let getInfo = async(ciudadQ, ciudadG, ciudadG, ciudadJ) => {
    try {
        let coords1 = await ubicacion.getCiudadLatLon(ciudadQ);
        let temp1 = await clima.getClima(coords1.lat, coords1.lon);
        let coords2 = await ubicacion.getCiudadLatLon(ciudadG);
        let temp2 = await clima.getClima(coords2.lat, coords2.lon);
        let coords3 = await ubicacion.getCiudadLatLon(ciudadP);
        let temp3 = await clima.getClima(coords3.lat, coords3.lon);
        let coords4 = await ubicacion.getCiudadLatLon(ciudadJ);
        let temp4 = await clima.getClima(coords4.lat, coords4.lon);
        return {
            temp1,
            temp2,
            temp3,
            temp4
        }
    } catch (error) {
        console.log(`No se puede obtener el clima de: ${pais}`);
    }
};

//npm install -g heroku