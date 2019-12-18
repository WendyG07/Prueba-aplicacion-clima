const axios = require('axios');

const getCiudadLatLon = async(nombre) => {

    const ciudad = encodeURI(nombre);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ciudad}`,
        headers: { 'x-RapidAPI-Key': 'b7ba96be39mshe99f924172924fap1dccc6jsn946ddc0b5fb9' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No existe resultados para ${nombre}`);
    }

    const data = resp.data.Results[0];
    const name = data.name;
    const lat = data.lat;
    const lon = data.lon;
    console.log(lat, lon);
    return {
        name,
        lat,
        lon
    }

    // instance.get()
    //     .then(resp => {
    //         console.log(resp.data.Results[0]);
    //     }).catch(err => {
    //         console.log("ERROR:", err);
    //     });

}

module.exports = {
    getCiudadLatLon
}