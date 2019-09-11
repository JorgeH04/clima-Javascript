import { WK } from './keys';

export class Weather {

   

    constructor(city, countryCode) {
       
        this.city = city;
        this.countryCode = countryCode;

    }

    async getWeather () {
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${WK}`;
        const response = await fetch(URI);
        const data = await response.json();
        return data;
    }

    changeLocation (city, countrycode) {
        this.city = city;
        this.countrycode = countrycode;

    }
}

