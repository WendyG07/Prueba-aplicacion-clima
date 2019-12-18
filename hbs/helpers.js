const hbs = require('hbs');
// const axios = require('axios');
// const ubicacion = require('./controlador/ubicacion');
// const clima = require('./controlador/clima');

// Helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() +
            palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});
// hbs.registerHelper('ciudad', async(texto) => {
//     try {
//         const coords = await ubicacion.getCiudadLatLon(texto);
//         const temp = await clima.getClima(coords.lat, coords.lng);
//         return `${ coords.direccion }`, `${ temp }`
//     } catch (e) {
//         return `No se pudo determinar el clima de ${ texto }`;
//     }
// });
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
let tempQ
let tempG
let tempP
let tempJ
getInfo("Quito", "Guayaquil", "Paris", "Japon").then(res => {
    tempQ = res.temp;
    tempG = res.temp11;
    tempP = res.temp3
    tempJ = res.temp4
    console.log(res.temp, res.temp11);
}).catch(err => console.log(err));