const hbs = require('hbs');
const express = require('express')
const axios = require('axios');

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