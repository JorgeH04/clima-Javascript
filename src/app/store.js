export class Store {

    constructor() {
        this.city;
        this.countryCode;
        this.defaultCity = 'London';
        this.defaultCountry = 'uk';
    }

    setLocationData(city, countryCode) {
        localStorage.setItem('city', city);
        localStorage.setItem('countryCode')
    }
}