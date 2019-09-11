const { Weather } = require('./Weather');
//const { UI } = require('./UI');

//const ui = new UI();
const weather = new Weather('london', 'uk');

require('./index.css');

async function fetchWeather() {
    const data = await weather.getWeather()
    console.log(data);
  }


document.addEventListener('DOMContentLoader', fetchWeather);