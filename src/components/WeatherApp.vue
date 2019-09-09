<template>
    <main>
    <div class="conatiner">
        <WeatherDetails
            :location="this.forecast.location"
            :description="this.forecast.description"
            :icon="this.forecast.weatherIcon"
            :value="this.forecast.temperatureValue"
            :high="this.forecast.temperatureHigh"
            :low="this.forecast.temperatureLow"
            :day="this.forecast.day"
            :date="this.forecast.date"
        ></WeatherDetails>
        <WeatherItems
            :icon="this.forecast.weatherIcon"
            :description="this.forecast.description"
            :data="this.forecast.data"
            @selected="setSelectedForecast"
        ></WeatherItems>
        </div>
    </main>
</template>

<script>
import WeatherDetails from './WeatherDetails'
import WeatherItems from './WeatherItems'
import WeatherForecast from '../scripts/WeatherForecast'
import moment from 'moment';

export default {
    name: 'WeatherApp',

    components: {
        WeatherDetails,
        WeatherItems
    },

    data() {
        return {
            forecast: new WeatherForecast
        }
    },
    methods: {
          setSelectedForecast(selectedForecast) {
                this.forecast.temperatureValue = Math.round(selectedForecast.main.temp);
                this.forecast.temperatureHigh = Math.round(selectedForecast.main.temp_max);
                this.forecast.temperatureLow = Math.round(selectedForecast.main.temp_min);
                this.forecast.description = selectedForecast.weather[0].description;
                this.forecast.day = moment(selectedForecast.dt_txt, "YYYY-MM-DD HH:mm:ss").format('dddd');
                this.forecast.date = moment(selectedForecast.dt_txt, "YYYY-MM-DD HH:mm:ss").format('DD. MMMM');
                console.log(this.forecast.date)
          }
    }
}
</script>

<style scoped>
main {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #262a59;
    flex-direction: column;
    justify-content: space-between;

    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
}


@media screen and (min-width: 768px) {
    main {
        width: 630px;
        height: 450px;
        margin: 50px auto;
    }
}
</style>
