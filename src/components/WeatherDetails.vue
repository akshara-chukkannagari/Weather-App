<template>
    <section>
        <img class="weather__icon" :src="forecast.weatherIcon" :alt="forecast.description">
        <div class="weather__temperature">
            <div class="weather__description">{{ forecast.description }}</div>
            <div class="temperature__range">{{ forecast.temperatureHigh }}&deg;/{{ forecast.temperatureLow }}&deg;</div>      
            <div class="temperature__value">{{ forecast.temperatureValue }}&deg;</div>
        </div>
        <div class="location__day__date">
            <div class="location">{{ forecast.location }}</div>
            <div class="day"> {{ forecast.day }} </div>
            <div class="date"> {{ forecast.date }} </div>
        </div>
        
    </section>
</template>

<script>
export default {
    name: 'WeatherDetails',

    props: {
        isSelected: Number,
        index: Number,
        forecast: {
            type: Object
        }
    },
    computed: {

    }
}
</script>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 16px;
    padding: 30px 15px 20px;
}
@media screen and (min-width: 768px) {
    section {
        font-size: 20px;
        flex-direction: row;
        margin-bottom: 50px;
        padding: 50px 30px;
    }
}
.weather__temperature {
    margin: auto auto 10px;
    text-align: center;
    float: none;
    width: 60%;
}
@media (min-width: 420px) and (min-width: 767px) {
    .weather__temperature {
        width: 50%;
        margin: 0;
    }
}
@media screen and (min-width: 768px) {
    .weather__temperature {
        width: 37%;
        margin: 0;
    }
}

.temperature__value {
    font-size: 70px;
    line-height: 74px;
}

@media screen and (min-width: 768px) {
    .temperature__value {
        font-size: 110px;
        line-height: 110px;
    }
}

.location {
    color: rgba(255, 255, 255, 0.5);
    padding-bottom: 10px;
}

.day, .date {
    font-size: 36px;
    line-height: 45px;
}

.weather__description {
    float: left;
    color: rgba(255, 255, 255, 0.5);
    margin-right: 10px;
}

.temperature__range {
    float: right;
    color: rgba(255, 255, 255, 0.5);
    margin-left: 10px;
}
.location__day__date {
    margin: auto auto 10px;
    text-align: center;
    float: none;
}
@media screen and (min-width: 768px) {
    .location__day__date {
        float: left;
        margin: 0;
    }
}
.weather__icon {
    width: 85px;
    margin: auto auto 10px;
    text-align: center;
    float: none;
}
@media screen and (min-width: 768px) {
    .weather__icon {
        width: 135px;
        margin: 0;
    }
}
</style>
