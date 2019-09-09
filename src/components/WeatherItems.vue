<template>
    <section>
        <div class="hourly_weather">
            <div v-for="(value, index) in data" class="hourly_weather__content" :key="index" :class="selectedItem === index ? 'selected': ''" @click="handleSelected(index)">
                <div class="time"> {{ time(value) }} </div>
                <img class="weather__icon" :src="icon" :alt="description">
                <div class="temperature__value">{{ Math.round(value.main.temp) }}&deg;</div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'WeatherItems',

    props: {
        icon: {
            type: String,
            required: true
        },
        data: Array,
        description: String
    },
        data() {
            return {
              selectedItem : null,
        }
    },
    methods: {
        time(value) {
            return (value.dt_txt.split(' ')[1]).slice(0, -3);
        },
        handleSelected (index) {
            this.selectedItem = index;
            this.$emit('selected', this.data[index])
        },
    }
}
</script>

<style scoped>
section {
    margin: auto;
}

.hourly_weather {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    overflow-x: auto;
}
.hourly_weather::-webkit-scrollbar {
  display: none;
}

.hourly_weather__content {
  background: transparent;
  padding: 20px;
  width: 85px;
  color: white;
  font-weight: bold;
  font-size: 26px;
  text-align: center;
}
.weather__icon {
    width: 40px;
}
.time {
    font-size: 14px;
    font-weight: normal;
    padding-bottom: 10px;
    color: rgba(255, 255, 255, 0.5);
}
</style>
