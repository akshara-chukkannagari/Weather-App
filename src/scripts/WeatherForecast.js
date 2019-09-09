/*
 * Fetch and parse the weather forecast data coming from the openweathermap.org endpoint.
 */
import moment from 'moment';

class WeatherForecast {
    /*
     * Create WeatherForecast instance.
     */
    constructor() {
        this.data = [];
        this.location = ' ';
        this.description = 'Welcome to the Weather Forecast App.';
        this.weatherIcon = require('../assets/weather-sun.svg');

        this.temperatureValue = 0;
        this.temperatureHigh = 0;
        this.temperatureLow = 0;

        this.forecastInfo();
    }

    /*
     * Update forecast with fresh data from current location.
     */
    forecastInfo() {
        this.getForecast();
    }

    /*
     * Fetch weather forecast from endpoint(openweathermap.org).
     * Assigning the parsed data.
     */
    async getForecast() {
        const endpoint = 'https://openweathermap.org/data/2.5/forecast/hourly?q=London,us&appid=b6907d289e10d714a6e88b30761fae22';

        const data = await (await fetch(endpoint)).json();
        console.log(data);
        this.data = data.list;
        const weathernumber = Object.keys(data.list).length;;
        console.log('weathernumber',weathernumber);
        this.location = data.city.name;
        data.list.forEach((element) => {
            this.temperatureValue = Math.round(element.main.temp);
            this.temperatureHigh = Math.round(element.main.temp_max);
            this.temperatureLow = Math.round(element.main.temp_min);
            this.description = element.weather[0].description;
            this.day = moment(element.dt_txt, "YYYY-MM-DD HH:mm:ss").format('dddd');
            this.date = moment(element.dt_txt, "YYYY-MM-DD HH:mm:ss").format('DD. MMMM');
            console.log(this.date);
        });
    }

}

export default WeatherForecast;