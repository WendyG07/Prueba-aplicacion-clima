const axios = require('axios');

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=75727b6fc58d427a38fc063698598796&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}